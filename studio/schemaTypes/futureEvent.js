export default {
  name: 'futureEvent',
  title: 'Майбутні події',
  type: 'document',
  fieldsets: [
    { name: 'button', title: 'Налаштування кнопки', options: { columns: 2 } }
  ],
  fields: [
    {
      name: 'title',
      title: 'Назва події',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'date',
      title: 'Дата (напр. /20/06/)',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: 'Опис',
      type: 'text',
      validation: Rule => Rule.required(),
    },
    {
      name: 'image',
      title: 'Зображення',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    },
    {
      name: 'buttonText',
      title: 'Текст',
      type: 'string',
      fieldset: 'button',
    },
    {
      name: 'buttonLink',
      title: 'Посилання',
      type: 'url',
      fieldset: 'button',
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
      subtitle: 'date',
      media: 'image',
    },
  },
}
