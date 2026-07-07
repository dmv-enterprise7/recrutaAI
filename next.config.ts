import type { NextConfig } from 'next'

/**
 * GITHUB_PAGES=true → build para o project site do GitHub Pages (assets sob /{repo}/).
 * Build padrão → domínio próprio (Cloudflare Pages), sem basePath.
 */
const repo = 'recrutaAI'
const isGitHubPages = process.env.GITHUB_PAGES === 'true'
const basePath = isGitHubPages ? `/${repo}` : ''

const nextConfig: NextConfig = {
  output: 'export',
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
