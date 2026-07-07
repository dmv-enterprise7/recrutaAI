import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://recrutaai.ia.br/',
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
