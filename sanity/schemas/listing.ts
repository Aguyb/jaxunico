import { defineField, defineType } from 'sanity'

export const listingSchema = defineType({
  name: 'listing',
  title: 'Directory Listings',
  type: 'document',
  icon: () => '🏪',
  fields: [
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Business Cover Photo',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
      description: 'Main photo shown on the directory card',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Restaurantes', value: 'Restaurantes' },
          { title: 'Salud', value: 'Salud' },
          { title: 'Bienes Raíces', value: 'Bienes Raíces' },
          { title: 'Finanzas', value: 'Finanzas' },
          { title: 'Legal', value: 'Legal' },
          { title: 'Belleza', value: 'Belleza' },
          { title: 'Tecnología', value: 'Tecnología' },
          { title: 'Educación', value: 'Educación' },
          { title: 'Construcción', value: 'Construcción' },
          { title: 'Otro', value: 'Otro' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'zone',
      title: 'Zone / Neighborhood',
      type: 'string',
      placeholder: 'e.g. Riverside, Southside, Downtown',
    }),
    defineField({
      name: 'description',
      title: 'Business Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(300),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Handle',
      type: 'string',
      placeholder: '@handle (without @)',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: Rule => Rule.min(1).max(5),
      description: '1.0 to 5.0',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Listing?',
      type: 'boolean',
      description: 'Show in the Featured section at the top of the directory',
      initialValue: false,
    }),
    defineField({
      name: 'approved',
      title: 'Approved?',
      type: 'boolean',
      description: 'Only approved listings appear on the website',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'businessName', subtitle: 'category', media: 'coverImage', approved: 'approved' },
    prepare({ title, subtitle, media, approved }) {
      return { title, subtitle: `${subtitle} ${approved ? '✅' : '⏳ Pending'}`, media }
    },
  },
})
