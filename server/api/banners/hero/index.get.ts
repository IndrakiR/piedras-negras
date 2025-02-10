import { defineEventHandler, createError } from 'h3'

interface BannerImage {
  id: string
  url: string
  alt: string
  filename: string
  mimeType: string
  filesize: number
  width: number
  height: number
}

interface BannerDoc {
  id: string
  title: string
  description: string
  image: BannerImage
  active: boolean
  order: number
  link: string
}

interface BannerResponse {
  docs: BannerDoc[]
}

export default defineEventHandler(async () => {
  try {
    console.log('Fetching banners from CMS...')
    const response: BannerResponse = await $fetch(`${process.env.NUXT_PUBLIC_CMS_URL}/api/banners`, {
      method: 'GET',
      params: {
        where: {
          active: {
            equals: true
          }
        },
        sort: 'order'
      }
    })

    console.log('CMS Response:', response)

    if (!response.docs || response.docs.length === 0) {
      console.log('No banners found')
      throw createError({
        statusCode: 404,
        message: 'No se encontraron banners'
      })
    }

    // Transform image URLs for all banners
    const banners = response.docs.map(banner => {
      if (banner.image?.url) {
        banner.image.url = `${process.env.NUXT_PUBLIC_CMS_URL}${banner.image.url}`
      }
      return banner
    })

    console.log('Returning banners:', banners)
    return banners
  } catch (error) {
    console.error('Error al obtener los banners:', error)
    throw createError({
      statusCode: 500,
      message: 'Error al obtener los banners'
    })
  }
})
