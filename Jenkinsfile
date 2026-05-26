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
    // BUILD_NUMBER, GIT_COMMIT_SHORT script bloğunda set ediliyor
  }

  options {
    timeout(time: 30, unit: 'MINUTES')
    timestamps()
    buildDiscarder(logRotator(numToKeepStr: '20'))
    // ansiColor opsiyonel — AnsiColor plugin gerektiriyor.
    // Renkli log istersen Jenkins → Manage Plugins → AnsiColor kur, sonra şu satırı aç:
    // ansiColor('xterm')
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
        script {
          def shortSha = sh(returnStdout: true, script: 'git rev-parse --short HEAD').trim()
          env.GIT_COMMIT_SHORT = shortSha
          env.FULL_TAG = "${env.BUILD_NUMBER}-${shortSha}"
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
          sleep 10
          # Sadece kritik endpoint'leri kontrol et — sitemap shard'lı (/sitemap/0.xml)
          curl -fsS http://127.0.0.1:13000/         > /dev/null
          curl -fsS http://127.0.0.1:13000/branslar > /dev/null
          curl -fsS http://127.0.0.1:13000/sehirler > /dev/null
          curl -fsS http://127.0.0.1:13000/robots.txt > /dev/null
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
      steps {
        // Aynı sunucuda build + deploy. SSH gereksiz; doğrudan local docker run.
        sh """
          docker stop ${CONTAINER_NAME} 2>/dev/null || true
          docker rm   ${CONTAINER_NAME} 2>/dev/null || true
          docker run -d \\
            --name ${CONTAINER_NAME} \\
            --restart=unless-stopped \\
            -p ${HOST_PORT}:${CONTAINER_PORT} \\
            -e NODE_ENV=production \\
            -e PORT=${CONTAINER_PORT} \\
            ${IMAGE_NAME}:${env.FULL_TAG}
          # 7 günden eski dangling/unused image'ları temizle
          docker image prune -af --filter "until=168h" || true
        """
      }
    }

    stage('Verify Deploy') {
      steps {
        // Container ayakta mı, /'ye 200 dönüyor mu?
        sh """
          sleep 5
          docker ps --filter "name=${CONTAINER_NAME}" --format "table {{.Names}}\\t{{.Status}}\\t{{.Ports}}"
          curl -fsS --max-time 10 http://127.0.0.1:${HOST_PORT}/ > /dev/null && echo "✓ Health OK"
        """
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
