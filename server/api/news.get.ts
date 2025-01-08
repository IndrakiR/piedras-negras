// server/api/news.get.ts
import { defineEventHandler, H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  try {
    // Llamada a tu API de Payload
    const response = await $fetch(`${process.env.NUXT_PUBLIC_CMS_URL}/api/news`, {
      method: 'GET',
      // Puedes incluir query params si los requieres
      // query: { 'where[status][equals]': 'published', limit: 50 },
    })

    // Transform image URLs before sending to client
    if (response.docs) {
      response.docs = response.docs.map(doc => {
        if (doc.image?.url) {
          doc.image.url = doc.image.url.startsWith('http')
            ? doc.image.url
            : `${process.env.NUXT_PUBLIC_CMS_URL}${doc.image.url}`
        }
        return doc
      })
    }

    // Regresa la respuesta tal cual (o mapea lo que necesites) 
    return response
  } catch (error) {
    // Manejo de errores
    return {
      error: true,
      message: 'No se pudo obtener la lista de noticias',
      details: error,
    }
  }
})