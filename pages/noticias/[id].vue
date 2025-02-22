<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
    <!-- Image Modal -->
    <div v-if="selectedImage" 
         class="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xl bg-black/30 p-4"
         @click="selectedImage = null">
      <!-- Close Button -->
      <button @click.stop="selectedImage = null"
              class="fixed right-8 top-8 bg-[#611232] hover:bg-[#7a1640] text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg z-50">
        <Icon name="heroicons:x-mark" class="w-6 h-6" />
      </button>
      <div class="relative max-h-[90vh] max-w-[90vw]" @click.stop>
        <img :src="selectedImage" 
             :alt="selectedImageCaption || ''" 
             class="max-h-[90vh] max-w-[90vw] object-contain" />
        <!-- Navigation Buttons -->
        <button v-if="showNavigation" 
                @click.stop="previousImage"
                class="fixed left-8 top-1/2 -translate-y-1/2 bg-[#611232] hover:bg-[#7a1640] text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg">
          <Icon name="heroicons:chevron-left-20-solid" class="w-6 h-6" />
        </button>
        <button v-if="showNavigation" 
                @click.stop="nextImage"
                class="fixed right-8 top-1/2 -translate-y-1/2 bg-[#611232] hover:bg-[#7a1640] text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg">
          <Icon name="heroicons:chevron-right-20-solid" class="w-6 h-6" />
        </button>
        <!-- Caption Toggle Button -->
        <button v-if="selectedImageCaption"
                @click.stop="showCaption = !showCaption"
                class="absolute bottom-4 right-4 bg-[#611232] hover:bg-[#7a1640] text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors shadow-lg">
          <Icon :name="showCaption ? 'heroicons:eye-slash' : 'heroicons:eye'" class="w-5 h-5" />
          {{ showCaption ? 'Ocultar' : 'Ver más' }}
        </button>
        <!-- Caption -->
        <div v-if="selectedImageCaption && showCaption" 
             class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-black/60 backdrop-blur-sm p-6 text-white text-base transform transition-all duration-300 leading-relaxed"
             :class="showCaption ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'">
          <div class="max-w-3xl mx-auto">
            {{ selectedImageCaption }}
          </div>
        </div>
      </div>
    </div>

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
            class="w-full h-full object-cover cursor-pointer"
            @click="openImage(news.banner)"
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
          <div class="mb-12 relative">
            <div class="absolute left-0 top-0 w-1 h-full bg-[#611232] rounded-full"></div>
            <div class="pl-6">
              <h2 class="text-lg font-semibold text-[#611232] mb-3">Resumen</h2>
              <p class="text-gray-700 text-xl leading-relaxed font-medium">
                {{ news?.summary }}
              </p>
            </div>
          </div>

          <!-- Contenido -->
          <div class="prose prose-lg max-w-none mb-10 prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#611232] prose-strong:text-gray-900">
            <RichText :content="news?.content" />
          </div>

          <!-- Galería -->
          <div v-if="news?.gallery?.length" class="mt-12">
            <h2 class="text-2xl font-bold mb-6 text-gray-900">Galería de Imágenes</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="(item, index) in news.gallery" :key="index" 
                   class="group relative overflow-hidden rounded-xl shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
                   @click="openImage(item.image.url, item.caption, index)">
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
import { computed, ref } from 'vue'

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

// Estado para el modal de imágenes
const selectedImage = ref<string | null>(null)
const selectedImageCaption = ref<string | null>(null)
const currentImageIndex = ref<number>(-1)
const showNavigation = ref(false)
const showCaption = ref(false)

// Función para abrir imagen en modal
const openImage = (url: string, caption?: string, index?: number) => {
  selectedImage.value = url
  selectedImageCaption.value = caption || null
  currentImageIndex.value = index ?? -1
  showNavigation.value = index !== undefined
  showCaption.value = false // Reset caption visibility when opening new image
}

// Navegación de imágenes
const nextImage = () => {
  if (!news.value?.gallery || currentImageIndex.value === -1) return
  const nextIndex = (currentImageIndex.value + 1) % news.value.gallery.length
  const nextItem = news.value.gallery[nextIndex]
  selectedImage.value = nextItem.image.url
  selectedImageCaption.value = nextItem.caption || null
  currentImageIndex.value = nextIndex
}

const previousImage = () => {
  if (!news.value?.gallery || currentImageIndex.value === -1) return
  const prevIndex = currentImageIndex.value === 0 ? news.value.gallery.length - 1 : currentImageIndex.value - 1
  const prevItem = news.value.gallery[prevIndex]
  selectedImage.value = prevItem.image.url
  selectedImageCaption.value = prevItem.caption || null
  currentImageIndex.value = prevIndex
}

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