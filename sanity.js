import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'

export const client = createClient({
  projectId: 'rbsuzu4c', // Вкажіть тут свій projectId, якщо він відрізняється
  dataset: 'production',
  useCdn: true, // `false` якщо вам потрібні свіжі дані одразу після оновлення
  apiVersion: '2023-05-03', // Використовуйте поточну дату у форматі YYYY-MM-DD
})

// Налаштування для перетворення картинок з бази даних у нормальні URL-адреси
const builder = createImageUrlBuilder(client)

export function urlFor(source) {
  // auto('format') автоматично конвертує в WebP/AVIF та оптимізує якість
  return builder.image(source).auto('format')
}
