import { defineField, defineType } from 'sanity'

export const episodeSchema = defineType({
  name: 'episode',
  title: 'Podcast Episodes',
  type: 'document',
  icon: () => '🎙️',
  fields: [
    defineField({
      name: 'episodeNumber',
      title: 'Episode Number',
      type: 'number',
      validation: Rule => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'title',
      title: 'Episode Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
      description: 'Auto-generated. URL: jaxunico.com/el-show/[slug]',
    }),
    defineField({
      name: 'guest',
      title: 'Guest Name',
      type: 'string',
    }),
    defineField({
      name: 'guestTitle',
      title: 'Guest Title / Business',
      type: 'string',
      description: 'e.g. "CEO of Latino Tech Solutions"',
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      validation: Rule => Rule.required(),
      description: 'The ID from the YouTube URL. E.g. for youtube.com/watch?v=abc123 → enter: abc123',
    }),
    defineField({
      name: 'coverImage',
      title: 'Thumbnail / Cover Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      placeholder: 'e.g. 45 min',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Emprendimiento', value: 'Emprendimiento' },
          { title: 'Marketing Digital', value: 'Marketing Digital' },
          { title: 'Coaching', value: 'Coaching' },
          { title: 'Arte y Cultura', value: 'Arte' },
          { title: 'Comunidad', value: 'Comunidad' },
          { title: 'Salud y Bienestar', value: 'Salud' },
          { title: 'Negocios', value: 'Negocios' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'description',
      title: 'Episode Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'spotifyUrl',
      title: 'Spotify URL',
      type: 'url',
    }),
    defineField({
      name: 'appleUrl',
      title: 'Apple Podcasts URL',
      type: 'url',
    }),
  ],
  orderings: [
    { title: 'Episode Number (newest first)', name: 'episodeDesc', by: [{ field: 'episodeNumber', direction: 'desc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'guest', media: 'coverImage', ep: 'episodeNumber' },
    prepare({ title, subtitle, media, ep }) {
      return { title: `EP. ${String(ep).padStart(3, '0')} — ${title}`, subtitle, media }
    },
  },
})
