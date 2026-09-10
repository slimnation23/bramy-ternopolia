export default {
  name: 'homepage',
  title: 'Головна сторінка',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Головний банер (Hero)',
      type: 'object',
      fields: [
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
        { name: 'buttonText', title: 'Текст кнопки', type: 'string' },
      ],
    },
    {
      name: 'about',
      title: 'Секція "Про нас"',
      type: 'object',
      fields: [
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
        { name: 'image', title: 'Зображення', type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'instagram',
      title: 'Секція Instagram',
      type: 'object',
      fields: [
        { name: 'text', title: 'Текст', type: 'text' },
        {
          name: 'photos',
          title: 'Фотографії',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'image', title: 'Фото', type: 'image', options: { hotspot: true } },
                { name: 'link', title: 'Посилання', type: 'url' },
              ],
            },
          ],
          validation: Rule => Rule.max(5)
        },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Головна сторінка'
      }
    }
  }
}
