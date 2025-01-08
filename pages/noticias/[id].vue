<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
      <!-- Error -->
      <div v-if="error" class="bg-red-50 border-l-4 border-red-500 p-4 rounded-md mb-8">
        <div class="flex">
          <div class="flex-shrink-0">
            <Icon name="heroicons:exclamation-circle" class="h-5 w-5 text-red-500" />
          </div>
          <div class="ml-3">
            <p class="text-red-700">{{ error.message }}</p>
          </div>
        </div>
      </div>

      <!-- Loading -->
      <div v-else-if="pending" class="flex justify-center items-center min-h-[50vh]">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-[#611232] border-t-transparent"></div>
      </div>

      <!-- Contenido -->
      <article v-else class="bg-white rounded-2xl shadow-xl overflow-hidden">
        <!-- Banner -->
        <div v-if="news?.banner" class="relative h-[300px] sm:h-[350px]">
          <img
            :src="news.banner"
            :alt="news?.title"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <!-- Fecha y Categoría -->
            <div class="flex items-center gap-3 mb-3">
              <span class="bg-[#611232] text-white text-sm px-4 py-1.5 rounded-full font-medium">
                {{ getCategoryLabel(news?.category) }}
              </span>
              <time class="text-gray-200 text-sm font-medium">{{ formattedDate }}</time>
            </div>

            <!-- Título -->
            <h1 class="text-3xl sm:text-4xl font-bold text-white leading-tight">
              {{ news?.title }}
            </h1>
          </div>
        </div>

        <div class="p-6 sm:p-8 lg:p-10">
          <!-- Resumen -->
          <p class="text-gray-700 text-xl leading-relaxed mb-8 font-medium">
            {{ news?.summary }}
          </p>

          <!-- Contenido -->
          <div class="prose prose-lg max-w-none mb-10 prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#611232] prose-strong:text-gray-900">
            <RichText :content="news?.content" />
          </div>

          <!-- Galería -->
          <div v-if="news?.gallery?.length" class="mt-12">
            <h2 class="text-2xl font-bold mb-6 text-gray-900">Galería de Imágenes</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="(item, index) in news.gallery" :key="index" 
                   class="group relative overflow-hidden rounded-xl shadow-md transition-transform hover:scale-[1.02]">
                <img
                  :src="item.image.url"
                  :alt="item.caption || ''"
                  class="w-full aspect-video object-cover"
                />
                <div v-if="item.caption" 
                     class="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm 
                            transform transition-transform translate-y-full group-hover:translate-y-0">
                  {{ item.caption }}
                </div>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div v-if="news?.tags?.length" class="mt-10 border-t pt-8">
            <h3 class="text-sm font-semibold text-gray-600 mb-3">Temas Relacionados</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="(tagItem, index) in news.tags" 
                :key="index"
                class="bg-gray-100 text-gray-700 text-sm px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {{ tagItem.tag }}
              </span>
            </div>
          </div>
        </div>
      </article>

      <!-- Botón Volver -->
      <div class="text-center mt-10">
        <NuxtLink
          to="/noticias"
          class="inline-flex items-center px-6 py-3 bg-[#611232] text-white rounded-full hover:bg-[#7a1640] transition-all transform hover:scale-105 font-medium shadow-md hover:shadow-lg"
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
