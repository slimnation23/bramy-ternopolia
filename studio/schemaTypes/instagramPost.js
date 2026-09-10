export default {
  name: 'instagramPost',
  title: 'Instagram фото',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва (для зручності в адмінці)',
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
      name: 'link',
      title: 'Посилання на пост (необов\'язково)',
      type: 'url',
    },
    {
      name: 'order',
      title: 'Порядок сортування (число)',
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
