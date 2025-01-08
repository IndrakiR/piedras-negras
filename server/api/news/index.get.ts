// server/api/news/index.get.ts
import { defineEventHandler } from 'h3'

export default defineEventHandler(async () => {
  try {
    const response = await $fetch(`${process.env.NUXT_PUBLIC_CMS_URL}/api/news`, {
      method: 'GET',
    })

    // Transformar URLs de imágenes para todos los documentos
    if (response.docs && Array.isArray(response.docs)) {
      response.docs = response.docs.map(doc => {
        // Transformar URL del banner
        if (doc.banner?.url) {
          doc.banner.url = `${process.env.NUXT_PUBLIC_CMS_URL}${doc.banner.url}`
        }

        // Transformar URLs de la galería
        if (doc.gallery && Array.isArray(doc.gallery)) {
          doc.gallery = doc.gallery.map(item => ({
            ...item,
            image: {
              ...item.image,
              url: `${process.env.NUXT_PUBLIC_CMS_URL}${item.image.url}`
            }
          }))
        }

        return doc
      })
    }

    return response
  } catch (error) {
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : 'Error al obtener las noticias'
    })
  }
})
