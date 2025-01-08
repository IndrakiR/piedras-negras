// server/api/news/[id].get.ts
import { defineEventHandler, H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  try {
    // Obtener el ID de los parámetros de la ruta
    const id = event.context.params?.id

    if (!id) {
      throw new Error('ID no proporcionado')
    }

    // Llamada a tu API de Payload para obtener una noticia específica
    const response = await $fetch(`${process.env.NUXT_PUBLIC_CMS_URL}/api/news/${id}`, {
      method: 'GET',
    })

    // Transform image URLs before sending to client
    if (response.image?.url) {
      response.image.url = response.image.url.startsWith('http') 
        ? response.image.url 
        : `${process.env.NUXT_PUBLIC_CMS_URL}${response.image.url}`
    }

    // Regresa la respuesta tal cual para mantener consistencia con el endpoint principal 
    return response

  } catch (error) {
    // Manejo de errores
    return {
      error: true,
      message: 'No se pudo obtener la noticia',
      details: error,
    }
  }
})
