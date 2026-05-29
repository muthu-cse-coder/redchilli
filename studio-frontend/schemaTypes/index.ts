// export const schemaTypes = []
import {defineType, defineField} from 'sanity'

export const schemaTypes = [
  defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Website Title',
        type: 'string',
      }),
      defineField({
        name: 'subtitle',
        title: 'Subtitle',
        type: 'string',
      }),
      defineField({
        name: 'phone',
        title: 'Phone Number',
        type: 'string',
      }),
      defineField({
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
      }),
    ],
  }),
]