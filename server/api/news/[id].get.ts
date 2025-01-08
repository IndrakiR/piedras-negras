// server/api/news/[id].get.ts
import { defineEventHandler, H3Event, createError } from 'h3'
import type { NewsItem, GalleryItem } from '~/server/types/news'

export default defineEventHandler(async (event: H3Event): Promise<NewsItem> => {
  try {
    // Obtener el ID de los parámetros de la ruta
    const id = event.context.params?.id

    if (!id) {
      throw new Error('ID no proporcionado')
    }

    // Llamada a tu API de Payload para obtener una noticia específica
    const response: NewsItem = await $fetch(`${process.env.NUXT_PUBLIC_CMS_URL}/api/news/${id}`, {
      method: 'GET',
    })

    // Transformar URLs de imágenes
    if (response.image?.url) {
      response.image.url = `${process.env.NUXT_PUBLIC_CMS_URL}${response.image.url}`
    }

    if (response.banner?.url) {
      response.banner.url = `${process.env.NUXT_PUBLIC_CMS_URL}${response.banner.url}`
    }

    if (response.gallery && Array.isArray(response.gallery)) {
      response.gallery = response.gallery.map((item: GalleryItem) => ({
        ...item,
        image: {
          ...item.image,
          url: `${process.env.NUXT_PUBLIC_CMS_URL}${item.image.url}`
        }
      }))
    }

    // Regresa la respuesta tal cual para mantener consistencia con el endpoint principal 
    return response

  } catch (error) {
    // Manejo de errores
    throw createError({
      statusCode: 500,
      message: error instanceof Error ? error.message : 'Error al obtener la noticia'
    })
  }
})
