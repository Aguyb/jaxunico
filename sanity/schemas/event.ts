import { defineField, defineType } from 'sanity'

export const eventSchema = defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  icon: () => '📅',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
      description: 'Auto-generated from title.',
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Networking Trimestral', value: 'Networking' },
          { title: 'Latin Business Summit', value: 'Summit' },
          { title: 'Taller de Coaching', value: 'Taller' },
          { title: 'La Mesa — Panel', value: 'Panel' },
          { title: 'Cena VIP', value: 'VIP' },
          { title: 'Festival / Comunidad', value: 'Festival' },
          { title: 'Otro', value: 'Otro' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Event Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date & Time',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      placeholder: 'e.g. Jacksonville Convention Center, Jacksonville, FL',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'capacity',
      title: 'Expected Capacity',
      type: 'string',
      placeholder: 'e.g. 50–100 personas',
    }),
    defineField({
      name: 'ticketPrice',
      title: 'Ticket Price',
      type: 'string',
      placeholder: 'e.g. $25–$50 or Gratis',
    }),
    defineField({
      name: 'ticketUrl',
      title: 'Ticket / Registration URL',
      type: 'url',
      description: 'Link to Eventbrite or your registration page',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Event?',
      type: 'boolean',
      description: 'Show this as the main upcoming event on the homepage',
      initialValue: false,
    }),
  ],
  orderings: [
    { title: 'Event Date (soonest first)', name: 'eventDateAsc', by: [{ field: 'eventDate', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', subtitle: 'eventType', media: 'coverImage', date: 'eventDate' },
    prepare({ title, subtitle, media, date }) {
      const d = date ? new Date(date).toLocaleDateString('es-US') : 'No date'
      return { title, subtitle: `${subtitle} · ${d}`, media }
    },
  },
})
