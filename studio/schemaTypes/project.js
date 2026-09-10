export default {
  name: 'project',
  title: 'Проєкти',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Назва (Вулиця)',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Головне фото (Мініатюра)',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required()
    },
  ],
}
