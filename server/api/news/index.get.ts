import { defineEventHandler, createError, getQuery } from 'h3'
import type { NewsResponse, NewsItem } from '~/server/types/news'

export default defineEventHandler(async (event): Promise<NewsResponse> => {
  try {
    // Get pagination parameters from query
    const query = getQuery(event)
    const limit = query.limit || 100 // Default to 100 items
    const page = query.page || 1

    // Llamada a tu API de Payload para obtener todas las noticias
    const response: NewsResponse = await $fetch(`${process.env.NUXT_PUBLIC_CMS_URL}/api/news`, {
      method: 'GET',
      params: {
        limit,
        page,
      }
    })

    // Transformar URLs de imágenes para todos los documentos
    if (response.docs) {
      response.docs = response.docs.map((doc: NewsItem) => {
        if (doc.banner?.url) {
          doc.banner.url = `${process.env.NUXT_PUBLIC_CMS_URL}${doc.banner.url}`
        }
        return doc
      })
    }

    return response
  } catch (error) {
    console.error('Error al obtener las noticias:', error)
    throw createError({
      statusCode: 500,
      message: 'Error al obtener las noticias'
    })
  }
})