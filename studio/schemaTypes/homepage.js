export default {
  name: 'homepage',
  title: 'Головна сторінка',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Шапка сайту (Header)',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      fields: [
        { name: 'logo', title: 'Логотип (замість тексту)', type: 'image', options: { hotspot: true } },
      ],
    },
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
        { name: 'patreonText', title: 'Текст кнопки Patreon', type: 'string' },
        { name: 'patreonLink', title: 'Посилання Patreon', type: 'url' },
        { name: 'monoText', title: 'Текст кнопки Mono Base', type: 'string' },
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
        { name: 'logo', title: 'Логотип', type: 'image', options: { hotspot: true } },
        { name: 'description', title: 'Опис (текст під логотипом)', type: 'text' },
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'facebook', title: 'Посилання Facebook', type: 'url' },
        { name: 'youtube', title: 'Посилання YouTube', type: 'url' },
        { name: 'instagram', title: 'Посилання Instagram', type: 'url' },
        { name: 'privacyText', title: 'Текст "Privacy Policy"', type: 'string' },
        { name: 'privacyLink', title: 'Посилання "Privacy Policy"', type: 'url' },
        { name: 'termsText', title: 'Текст "Terms and Conditions"', type: 'string' },
        { name: 'termsLink', title: 'Посилання "Terms and Conditions"', type: 'url' },
        { name: 'copyright', title: 'Текст копірайту', type: 'string' },
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
