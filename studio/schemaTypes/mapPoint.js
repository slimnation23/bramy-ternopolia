export default {
  name: 'mapPoint',
  title: 'Точки на мапі',
  type: 'document',
  fields: [
    {
      name: 'id',
      title: 'Номер на мапі (ID)',
      type: 'number',
      validation: Rule => Rule.required().integer().positive(),
    },
    {
      name: 'title',
      title: 'Назва (Адреса)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'lat',
      title: 'Широта (Latitude)',
      type: 'number',
      description: 'Наприклад: 49.552444',
      validation: Rule => Rule.required(),
    },
    {
      name: 'lng',
      title: 'Довгота (Longitude)',
      type: 'number',
      description: 'Наприклад: 25.590966',
      validation: Rule => Rule.required(),
    },
    {
      name: 'desc',
      title: 'Опис історії',
      type: 'text',
    },
    {
      name: 'vitrazh',
      title: 'Автор вітражу (або Майстерня)',
      type: 'string',
    },
    {
      name: 'photoAuthors',
      title: 'Автори фотографій',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Додайте імена фотографів через кнопку "Add item"',
    },
    {
      name: 'images',
      title: 'Галерея фотографій об\'єкта',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'id',
      media: 'images.0',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title,
        subtitle: `Точка №${subtitle}`,
        media: media,
      }
    },
  },
}
