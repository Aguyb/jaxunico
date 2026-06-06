import { client } from './sanity.client'

// ── BLOG ARTICLES ──────────────────────────────────────────
export async function getAllArticles() {
  return client.fetch(`
    *[_type == "article"] | order(publishedAt desc) {
      _id, title, slug, excerpt, category, publishedAt, readTime,
      "coverImage": coverImage.asset->url,
    }
  `)
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(`
    *[_type == "article" && slug.current == $slug][0] {
      _id, title, slug, excerpt, category, publishedAt, readTime,
      "coverImage": coverImage.asset->url,
      body
    }
  `, { slug })
}

// ── EPISODES ───────────────────────────────────────────────
export async function getAllEpisodes() {
  return client.fetch(`
    *[_type == "episode"] | order(episodeNumber desc) {
      _id, title, episodeNumber, guest, guestTitle, youtubeId,
      duration, category, description, publishedAt,
      "coverImage": coverImage.asset->url,
    }
  `)
}

export async function getLatestEpisode() {
  return client.fetch(`
    *[_type == "episode"] | order(episodeNumber desc)[0] {
      _id, title, episodeNumber, guest, guestTitle, youtubeId,
      duration, category, description, publishedAt,
      "coverImage": coverImage.asset->url,
    }
  `)
}

// ── EVENTS ─────────────────────────────────────────────────
export async function getAllEvents() {
  return client.fetch(`
    *[_type == "event"] | order(eventDate asc) {
      _id, title, eventType, eventDate, location, description,
      ticketPrice, ticketUrl, capacity,
      "coverImage": coverImage.asset->url,
    }
  `)
}

export async function getNextEvent() {
  return client.fetch(`
    *[_type == "event" && eventDate > now()] | order(eventDate asc)[0] {
      _id, title, eventType, eventDate, location, description,
      ticketPrice, ticketUrl,
      "coverImage": coverImage.asset->url,
    }
  `)
}

// ── DIRECTORY LISTINGS ─────────────────────────────────────
export async function getAllListings() {
  return client.fetch(`
    *[_type == "listing" && approved == true] | order(_createdAt desc) {
      _id, businessName, category, zone, description,
      phone, website, rating, approved,
      "coverImage": coverImage.asset->url,
    }
  `)
}

export async function getListingsByCategory(category: string) {
  return client.fetch(`
    *[_type == "listing" && approved == true && category == $category] | order(_createdAt desc) {
      _id, businessName, category, zone, description,
      phone, website, rating,
      "coverImage": coverImage.asset->url,
    }
  `, { category })
}
