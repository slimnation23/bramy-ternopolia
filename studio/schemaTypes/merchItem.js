export default {
  name: 'merchItem',
  title: 'Наш мерч',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва товару/фото',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Фото',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'order',
      title: 'Порядок сортування',
      type: 'number',
      description: 'Менше число — відображається першим',
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
