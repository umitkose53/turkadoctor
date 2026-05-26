// Jenkins declarative pipeline — turkadoctor production deploy.
//
// Tetikleyici: Bitbucket webhook (push to main).
// Aşamalar: checkout → build → tag → push → ssh deploy.
//
// Gereken Jenkins credentials (Manage Jenkins → Credentials):
//   - bitbucket-creds (username/password, https Bitbucket API token)
//   - docker-registry-creds (docker login için, eğer private registry)
//   - prod-ssh-key (SSH key, Ubuntu sunucuya deploy için)
//   - prod-host (secret text, ör. "user@1.2.3.4")

pipeline {
  agent any

  environment {
    APP_NAME           = "turkadoctor"
    IMAGE_NAME         = "turkadoctor/web"
    // Registry yoksa sadece local image kullanılır
    REGISTRY           = "" // ör. "registry.example.com" — boş bırakırsan local kalır
    CONTAINER_NAME     = "turkadoctor"
    CONTAINER_PORT     = "3000"
    HOST_PORT          = "3000"
    BUILD_TAG          = "${env.BUILD_NUMBER}"
    GIT_COMMIT_SHORT   = ""
  }

  options {
    timeout(time: 30, unit: 'MINUTES')
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '20'))
    ansiColor('xterm')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
        script {
          env.GIT_COMMIT_SHORT = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
          env.FULL_TAG = "${BUILD_TAG}-${GIT_COMMIT_SHORT}"
          echo "Building tag: ${env.FULL_TAG}"
        }
      }
    }

    stage('Build Docker Image') {
      steps {
        sh """
          docker build \\
            --pull \\
            --build-arg NODE_VERSION=22-alpine \\
            -t ${IMAGE_NAME}:${env.FULL_TAG} \\
            -t ${IMAGE_NAME}:latest \\
            .
        """
      }
    }

    stage('Smoke Test') {
      steps {
        sh """
          docker run --rm -d --name ${CONTAINER_NAME}-smoke -p 13000:3000 ${IMAGE_NAME}:${env.FULL_TAG}
          sleep 8
          curl -fsS http://127.0.0.1:13000/ > /dev/null
          curl -fsS http://127.0.0.1:13000/sitemap.xml > /dev/null
          docker stop ${CONTAINER_NAME}-smoke || true
        """
      }
      post {
        failure {
          sh "docker stop ${CONTAINER_NAME}-smoke || true"
        }
      }
    }

    stage('Push to Registry') {
      when {
        expression { return env.REGISTRY?.trim() }
      }
      steps {
        withCredentials([usernamePassword(credentialsId: 'docker-registry-creds',
                                          usernameVariable: 'REG_USER',
                                          passwordVariable: 'REG_PASS')]) {
          sh """
            echo \$REG_PASS | docker login ${REGISTRY} -u \$REG_USER --password-stdin
            docker tag ${IMAGE_NAME}:${env.FULL_TAG} ${REGISTRY}/${IMAGE_NAME}:${env.FULL_TAG}
            docker tag ${IMAGE_NAME}:${env.FULL_TAG} ${REGISTRY}/${IMAGE_NAME}:latest
            docker push ${REGISTRY}/${IMAGE_NAME}:${env.FULL_TAG}
            docker push ${REGISTRY}/${IMAGE_NAME}:latest
            docker logout ${REGISTRY}
          """
        }
      }
    }

    stage('Deploy to Production') {
      when { branch 'main' }
      steps {
        withCredentials([
          sshUserPrivateKey(credentialsId: 'prod-ssh-key',
                            keyFileVariable: 'SSH_KEY',
                            usernameVariable: 'SSH_USER'),
          string(credentialsId: 'prod-host', variable: 'PROD_HOST'),
        ]) {
          script {
            def imageRef = env.REGISTRY?.trim()
              ? "${env.REGISTRY}/${IMAGE_NAME}:${env.FULL_TAG}"
              : "${IMAGE_NAME}:${env.FULL_TAG}"

            // Registry varsa pull, yoksa save/load ile transfer
            if (env.REGISTRY?.trim()) {
              sh """
                ssh -i \$SSH_KEY -o StrictHostKeyChecking=no \$SSH_USER@\$PROD_HOST <<'EOF'
                  set -euo pipefail
                  docker pull ${imageRef}
                  docker stop ${CONTAINER_NAME} 2>/dev/null || true
                  docker rm   ${CONTAINER_NAME} 2>/dev/null || true
                  docker run -d \\
                    --name ${CONTAINER_NAME} \\
                    --restart=unless-stopped \\
                    -p ${HOST_PORT}:${CONTAINER_PORT} \\
                    -e NODE_ENV=production \\
                    -e PORT=${CONTAINER_PORT} \\
                    ${imageRef}
                  docker image prune -af --filter "until=168h"
EOF
              """
            } else {
              sh """
                docker save ${IMAGE_NAME}:${env.FULL_TAG} | gzip > /tmp/${APP_NAME}-${env.FULL_TAG}.tar.gz
                scp -i \$SSH_KEY -o StrictHostKeyChecking=no /tmp/${APP_NAME}-${env.FULL_TAG}.tar.gz \$SSH_USER@\$PROD_HOST:/tmp/
                ssh -i \$SSH_KEY -o StrictHostKeyChecking=no \$SSH_USER@\$PROD_HOST <<EOF
                  set -euo pipefail
                  gunzip -c /tmp/${APP_NAME}-${env.FULL_TAG}.tar.gz | docker load
                  rm /tmp/${APP_NAME}-${env.FULL_TAG}.tar.gz
                  docker stop ${CONTAINER_NAME} 2>/dev/null || true
                  docker rm   ${CONTAINER_NAME} 2>/dev/null || true
                  docker run -d \\
                    --name ${CONTAINER_NAME} \\
                    --restart=unless-stopped \\
                    -p ${HOST_PORT}:${CONTAINER_PORT} \\
                    -e NODE_ENV=production \\
                    -e PORT=${CONTAINER_PORT} \\
                    ${IMAGE_NAME}:${env.FULL_TAG}
                  docker image prune -af --filter "until=168h"
EOF
                rm /tmp/${APP_NAME}-${env.FULL_TAG}.tar.gz
              """
            }
          }
        }
      }
    }

    stage('Tag Git Release') {
      when { branch 'main' }
      steps {
        withCredentials([usernamePassword(credentialsId: 'bitbucket-creds',
                                          usernameVariable: 'BB_USER',
                                          passwordVariable: 'BB_TOKEN')]) {
          sh """
            git config user.email "ci@turkadoctor.com"
            git config user.name  "Jenkins CI"
            git tag -a "v${env.FULL_TAG}" -m "Auto release v${env.FULL_TAG}"
            git push "https://\$BB_USER:\$BB_TOKEN@bitbucket.org/petzzshop/turkadoctor.git" "v${env.FULL_TAG}" || true
          """
        }
      }
    }
  }

  post {
    success {
      echo "✅ Deploy başarılı: ${IMAGE_NAME}:${env.FULL_TAG}"
    }
    failure {
      echo "❌ Deploy başarısız — log'lara bak"
    }
    always {
      sh "docker logout 2>/dev/null || true"
    }
  }
}
