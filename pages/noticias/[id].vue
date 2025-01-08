<template>
  <div class="bg-gray-50 min-h-screen py-8">
    <div class="container mx-auto px-4">
      <!-- Error -->
      <div v-if="error" class="text-red-600 text-center mb-6">
        {{ error.message }}
      </div>

      <!-- Loading -->
      <div v-else-if="pending" class="text-center mb-6">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5e1210] mx-auto"></div>
      </div>

      <!-- Contenido -->
      <article v-else class="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
        <!-- Banner -->
        <div v-if="news?.banner" class="relative h-[400px]">
          <img
            :src="news.banner"
            :alt="news?.title"
            class="w-full h-full object-cover"
          />
        </div>

        <div class="p-6">
          <!-- Fecha y Categoría -->
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-[#5e1210] text-white text-sm px-3 py-1 rounded-full">
              {{ getCategoryLabel(news?.category) }}
            </span>
            <time class="text-gray-500 text-sm">{{ formattedDate }}</time>
          </div>

          <!-- Título -->
          <h1 class="text-3xl font-bold text-gray-900 mb-4">
            {{ news?.title }}
          </h1>

          <!-- Resumen -->
          <p class="text-gray-600 text-lg mb-6">
            {{ news?.summary }}
          </p>

          <!-- Contenido -->
          <div class="prose max-w-none mb-8">
            <RichText :content="news?.content" />
          </div>

          <!-- Galería -->
          <div v-if="news?.gallery?.length" class="mt-8">
            <h2 class="text-2xl font-bold mb-4">Galería</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div v-for="(item, index) in news.gallery" :key="index" class="relative">
                <img
                  :src="item.image.url"
                  :alt="item.caption || ''"
                  class="w-full aspect-video object-cover rounded"
                />
                <p v-if="item.caption" class="mt-1 text-sm text-gray-500">
                  {{ item.caption }}
                </p>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div v-if="news?.tags?.length" class="mt-6 flex flex-wrap gap-2">
            <span 
              v-for="(tagItem, index) in news.tags" 
              :key="index"
              class="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
            >
              {{ tagItem.tag }}
            </span>
          </div>
        </div>
      </article>

      <!-- Botón Volver -->
      <div class="text-center mt-8">
        <NuxtLink
          to="/noticias"
          class="inline-flex items-center px-4 py-2 bg-[#5e1210] text-white rounded hover:bg-[#801815] transition-colors"
        >
          <Icon name="heroicons:arrow-left-20-solid" class="w-5 h-5 mr-2" />
          Volver a Noticias
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

interface NewsImage {
  url: string
}

interface GalleryItem {
  image: NewsImage
  caption?: string
}

interface NewsData {
  title: string
  content: any
  publishedDate: string
  banner: NewsImage
  summary: string
  category: string
  gallery?: GalleryItem[]
  tags?: Array<{ tag: string }>
}

const route = useRoute()
const id = route.params.id

// Fetch de la noticia
const { data: newsData, pending, error } = await useFetch<NewsData>(`/api/news/${id}`)

// Formato de fecha
const formattedDate = computed(() => {
  if (!newsData.value?.publishedDate) return ''
  return new Date(newsData.value.publishedDate).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

// Mapeo de categorías
const getCategoryLabel = (value: string | undefined) => {
  const categories = {
    local: 'Local',
    nacional: 'Nacional',
    internacional: 'Internacional',
    deportes: 'Deportes',
    cultura: 'Cultura'
  }
  return value ? categories[value as keyof typeof categories] : ''
}

// Datos procesados de la noticia
const news = computed(() => {
  if (!newsData.value) return null
  return {
    title: newsData.value.title,
    content: newsData.value.content,
    banner: newsData.value.banner?.url,
    summary: newsData.value.summary,
    category: newsData.value.category,
    gallery: newsData.value.gallery,
    tags: newsData.value.tags
  }
})
</script>
