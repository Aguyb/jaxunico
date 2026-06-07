import { client } from './sanity.client'

// ── BLOG ARTICLES ──────────────────────────────────────────
export async function getAllArticles() {
  return client.fetch(`
    *[_type == "article"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      category,
      publishedAt,
      readTime,
      "coverImage": coverImage.asset->url,
    }
  `)
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(`
    *[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      category,
      publishedAt,
      readTime,
      "coverImage": coverImage.asset->url,
      body
    }
  `, { slug })
}

// ── EPISODES ───────────────────────────────────────────────
export async function getAllEpisodes() {
  return client.fetch(`
    *[_type == "episode"] | order(episodeNumber desc) {
      _id,
      title,
      "slug": slug.current,
      episodeNumber,
      guest,
      guestTitle,
      youtubeId,
      duration,
      category,
      description,
      publishedAt,
      "coverImage": coverImage.asset->url,
    }
  `)
}

export async function getLatestEpisode() {
  return client.fetch(`
    *[_type == "episode"] | order(episodeNumber desc)[0] {
      _id,
      title,
      "slug": slug.current,
      episodeNumber,
      guest,
      guestTitle,
      youtubeId,
      duration,
      category,
      description,
      publishedAt,
      "coverImage": coverImage.asset->url,
    }
  `)
}

// ── EVENTS ─────────────────────────────────────────────────
export async function getAllEvents() {
  return client.fetch(`
    *[_type == "event"] | order(eventDate asc) {
      _id,
      title,
      "slug": slug.current,
      eventType,
      eventDate,
      location,
      description,
      ticketPrice,
      ticketUrl,
      capacity,
      featured,
      "coverImage": coverImage.asset->url,
    }
  `)
}

export async function getNextEvent() {
  return client.fetch(`
    *[_type == "event" && eventDate > now()] | order(eventDate asc)[0] {
      _id,
      title,
      "slug": slug.current,
      eventType,
      eventDate,
      location,
      description,
      ticketPrice,
      ticketUrl,
      "coverImage": coverImage.asset->url,
    }
  `)
}

// ── DIRECTORY LISTINGS ─────────────────────────────────────
export async function getAllListings() {
  return client.fetch(`
    *[_type == "listing" && approved == true] | order(_createdAt desc) {
      _id,
      businessName,
      category,
      zone,
      description,
      phone,
      website,
      instagram,
      rating,
      featured,
      approved,
      "coverImage": coverImage.asset->url,
    }
  `)
}

export async function getFeaturedListings() {
  return client.fetch(`
    *[_type == "listing" && approved == true && featured == true] | order(_createdAt desc) {
      _id,
      businessName,
      category,
      zone,
      description,
      phone,
      website,
      rating,
      "coverImage": coverImage.asset->url,
    }
  `)
}
