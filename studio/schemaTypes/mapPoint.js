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
      name: 'coordinates',
      title: 'Координати (Широта, Довгота)',
      type: 'string',
      description: 'Вставте координати через кому. Наприклад: 49.552444, 25.590966',
      validation: Rule => Rule.required(),
    },
    {
      name: 'googleMapsLink',
      title: 'Посилання на Google Maps (необов\'язково)',
      type: 'url',
      description: 'Коротке або довге посилання, щоб користувачі могли перейти в додаток',
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
