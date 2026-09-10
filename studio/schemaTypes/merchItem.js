export default {
  name: 'merchItem',
  title: 'Наш мерч',
  type: 'document',
  fields: [
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
      media: 'image',
    },
    prepare(selection) {
      return {
        title: 'Фото мерчу',
        media: selection.media,
      }
    }
  },
}
