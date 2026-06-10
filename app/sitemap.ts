import { MetadataRoute } from 'next'
import { getAllArticles, getAllEpisodes, getAllEvents } from '@/lib/sanity.queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://jaxunico.com'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/el-show`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/servicios`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/directorio`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/eventos`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/anuncia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  // Dynamic blog articles
  let articlePages: MetadataRoute.Sitemap = []
  try {
    const articles = await getAllArticles()
    articlePages = articles.map((a: any) => ({
      url: `${baseUrl}/blog/${a.slug?.current || a.slug}`,
      lastModified: a.publishedAt ? new Date(a.publishedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch {}

  // Dynamic episode pages
  let episodePages: MetadataRoute.Sitemap = []
  try {
    const episodes = await getAllEpisodes()
    episodePages = episodes.map((e: any) => ({
      url: `${baseUrl}/el-show/${e.slug?.current || e.slug}`,
      lastModified: e.publishedAt ? new Date(e.publishedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch {}

  return [...staticPages, ...articlePages, ...episodePages]
}
