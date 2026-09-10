export default {
  name: 'homepage',
  title: 'Головна сторінка',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Головний банер (Hero)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
        { name: 'buttonText', title: 'Текст кнопки', type: 'string' },
        { name: 'backgroundImage', title: 'Фонове зображення', type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'about',
      title: 'Секція "Про нас"',
      type: 'object',
      options: { collapsible: true, collapsed: true },
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
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'text', title: 'Текст', type: 'text' },
      ],
    },
    {
      name: 'projectsText',
      title: 'Секція "Наші проєкти" (Тексти)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
      ],
    },
    {
      name: 'restore',
      title: 'Секція "Відновлення брами"',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
        { name: 'buttonText', title: 'Текст кнопки', type: 'string' },
        { name: 'buttonLink', title: 'Посилання на Google форму', type: 'url' },
        { name: 'backgroundImage', title: 'Фонове зображення', type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'events',
      title: 'Секція "Наші події"',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
        {
          name: 'gallery',
          title: 'Галерея фото (Точно 6 фото)',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
          validation: Rule => Rule.min(6).max(6)
        },
      ],
    },
    {
      name: 'futureEvents',
      title: 'Секція "Анонс майбутніх подій"',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'title', title: 'Заголовок', type: 'string' },
      ],
    },
    {
      name: 'merch',
      title: 'Секція "Наш мерч"',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
        {
          name: 'slides',
          title: 'Фотографії мерчу',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }],
        },
      ],
    },
    {
      name: 'map',
      title: 'Секція "Інтерактивна мапа" (Тексти)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
      ],
    },
    {
      name: 'support',
      title: 'Секція "Підтримати проєкт"',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'title', title: 'Заголовок', type: 'string' },
        { name: 'description', title: 'Опис', type: 'text' },
        { name: 'patreonLink', title: 'Посилання Patreon', type: 'url' },
        { name: 'monoLink', title: 'Посилання Mono Base', type: 'url' },
        { name: 'backgroundImage', title: 'Фонове зображення', type: 'image', options: { hotspot: true } },
      ],
    },
    {
      name: 'footer',
      title: 'Футер (Соцмережі)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'facebook', title: 'Посилання Facebook', type: 'url' },
        { name: 'youtube', title: 'Посилання YouTube', type: 'url' },
        { name: 'instagram', title: 'Посилання Instagram', type: 'url' },
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
