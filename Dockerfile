# syntax=docker/dockerfile:1.6
# Multi-stage build for Next.js 16 + Turbopack standalone output.
# Target: production-ready Node.js server image (~150MB).

ARG NODE_VERSION=22-alpine

# ─────────────────────────────────────────────────────────────
# Stage 1: deps — yalnız package manifestleri, cache layer
# ─────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION} AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json* ./
RUN npm ci --include=dev --no-audit --no-fund

# ─────────────────────────────────────────────────────────────
# Stage 2: build — full kaynak + build
# ─────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION} AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build sırasında bellek limiti yükseltilir (DT shard'ları için)
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build

# ─────────────────────────────────────────────────────────────
# Stage 3: runner — production runtime, minimal
# ─────────────────────────────────────────────────────────────
FROM node:${NODE_VERSION} AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Next.js standalone output — self-contained server
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/ > /dev/null 2>&1 || exit 1

CMD ["node", "server.js"]
