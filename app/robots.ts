import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All crawlers: allow everything except admin and API
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Explicitly allow AI search crawlers for AEO (Answer Engine Optimization)
      { userAgent: 'GPTBot', allow: '/' },           // OpenAI / ChatGPT
      { userAgent: 'OAI-SearchBot', allow: '/' },    // OpenAI Search
      { userAgent: 'PerplexityBot', allow: '/' },    // Perplexity AI
      { userAgent: 'ClaudeBot', allow: '/' },        // Anthropic Claude
      { userAgent: 'anthropic-ai', allow: '/' },     // Anthropic
      { userAgent: 'Googlebot', allow: '/' },        // Google Search
      { userAgent: 'GoogleOther', allow: '/' },      // Google AI / Gemini
      { userAgent: 'Bingbot', allow: '/' },          // Microsoft Bing / Copilot
      { userAgent: 'YouBot', allow: '/' },           // You.com
      { userAgent: 'Applebot', allow: '/' },         // Apple Siri / Spotlight
    ],
    sitemap: 'https://jaxunico.com/sitemap.xml',
    host: 'https://jaxunico.com',
  }
}
