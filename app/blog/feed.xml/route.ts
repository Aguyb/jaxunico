import { getAllArticles } from '@/lib/sanity.queries'

export async function GET() {
  const articles = await getAllArticles().catch(() => [])

  const staticArticles = [
    {
      title: 'La Fuerza que Crece: Como la Comunidad Latina de Jacksonville Esta Transformando la Economia',
      slug: 'comunidad-latina-jacksonville-economia',
      excerpt: 'Con mas de 120,000 residentes latinos y un poder adquisitivo que supera los miles de millones de dolares, la comunidad latina de Jacksonville ya no es el futuro de la ciudad.',
      category: 'Emprendimiento',
      publishedAt: new Date().toISOString(),
    }
  ]

  const posts = articles.length > 0 ? articles : staticArticles

  const siteUrl = 'https://jaxunico.com'
  const feedUrl = `${siteUrl}/blog/feed.xml`

  const rssItems = posts.map((post: any) => {
    const slug = post.slug?.current || post.slug
    const url = `${siteUrl}/blog/${slug}`
    const pubDate = post.publishedAt
      ? new Date(post.publishedAt).toUTCString()
      : new Date().toUTCString()

    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${post.excerpt || ''}]]></description>
      <category><![CDATA[${post.category || 'Blog'}]]></category>
      <pubDate>${pubDate}</pubDate>
    </item>`
  }).join('')

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Jax Unico — Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Emprendimiento, marketing, produccion y comunidad — para los latinos que construyen en Jacksonville.</description>
    <language>es</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/logo.png</url>
      <title>Jax Unico</title>
      <link>${siteUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}
