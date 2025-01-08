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
    const response = await $fetch(`https://cms.piedrasnegras.computoespacial.com/api/news/${id}`, {
      method: 'GET',
    })

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
