import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'jaxunico',
  title: 'Jax Unico CMS',
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Jax Unico Content')
          .items([
            S.listItem().title('📝 Blog Articles').child(S.documentTypeList('article').title('Blog Articles')),
            S.listItem().title('🎙️ Podcast Episodes').child(S.documentTypeList('episode').title('Podcast Episodes')),
            S.listItem().title('📅 Events').child(S.documentTypeList('event').title('Events')),
            S.listItem()
              .title('🏪 Directory Listings')
              .child(
                S.list().title('Directory').items([
                  S.listItem().title('✅ Approved').child(
                    S.documentTypeList('listing').title('Approved').filter('_type == "listing" && approved == true')
                  ),
                  S.listItem().title('⏳ Pending').child(
                    S.documentTypeList('listing').title('Pending').filter('_type == "listing" && approved != true')
                  ),
                ])
              ),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
})
