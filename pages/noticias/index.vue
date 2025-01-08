<template>
  <div>
    <!-- Sección Banner -->
    <BannerSection
      title="Noticias y Comunicados"
      subtitle="Mantente informado sobre las últimas novedades y acontecimientos en Piedras Negras"
      :cards="[
        {
          icon: 'fas fa-newspaper',
          title: 'Noticias Recientes',
          description: 'Últimas actualizaciones y eventos del municipio'
        },
        {
          icon: 'fas fa-bullhorn',
          title: 'Comunicados Oficiales',
          description: 'Anuncios importantes de la administración municipal'
        },
        {
          icon: 'fas fa-calendar-alt',
          title: 'Agenda Municipal',
          description: 'Próximos eventos y actividades en la ciudad'
        }
      ]"
    />

    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Encabezado -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-semibold text-gray-900">Últimas Noticias</h2>
          <p class="text-base text-gray-500 mt-2">
            Mantente al día con los eventos más recientes de la ciudad
          </p>
        </div>

        <!-- Error -->
        <div v-if="error" class="text-red-600 text-center mb-6">
          {{ error.message }}
        </div>

        <!-- Loading -->
        <div v-else-if="pending" class="text-center mb-6">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5e1210] mx-auto"></div>
        </div>

        <!-- Grid de noticias -->
        <transition-group
          v-else
          tag="div"
          name="fade"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          <article
            v-for="news in visibleNews"
            :key="news.id"
            class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <!-- Imagen -->
            <div class="aspect-video relative overflow-hidden rounded-t-lg">
              <img
                :src="news.banner"
                :alt="news.title"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="p-4">
              <!-- Categoría y Fecha -->
              <div class="flex items-center gap-3 mb-2">
                <span class="bg-[#5e1210] text-white text-xs px-2 py-1 rounded-full">
                  {{ getCategoryLabel(news.category) }}
                </span>
                <time class="text-sm text-gray-500">{{ news.date }}</time>
              </div>

              <!-- Título -->
              <h3 class="font-medium text-gray-900 text-lg mb-2">
                {{ news.title }}
              </h3>

              <!-- Resumen -->
              <p class="text-sm text-gray-600 line-clamp-2 mb-3">
                {{ news.summary }}
              </p>

              <!-- Link -->
              <NuxtLink
                :to="`/noticias/${news.id}`"
                class="inline-flex items-center text-sm font-medium text-[#5e1210] hover:text-[#801815]"
              >
                Leer más
                <Icon name="heroicons:arrow-right-20-solid" class="ml-1 w-4 h-4" />
              </NuxtLink>
            </div>
          </article>
        </transition-group>

        <!-- Botón Cargar Más -->
        <div class="mt-8 text-center">
          <button
            v-if="itemsToShow < mappedNews.length"
            @click="loadMore"
            class="inline-flex items-center px-4 py-2 bg-[#5e1210] text-white rounded hover:bg-[#801815] transition-colors"
          >
            Cargar más
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetch } from '#app'
import BannerSection from '~/components/BannerSection.vue'

interface NewsImage {
  url: string
}

interface GalleryItem {
  image: NewsImage
  caption?: string
}

interface NewsDoc {
  id: string
  title: string
  content: any
  summary: string
  publishedDate: string
  banner: NewsImage
  category: string
  status: 'draft' | 'published'
  gallery?: GalleryItem[]
  tags?: Array<{ tag: string }>
}

interface PayloadNewsResponse {
  docs: NewsDoc[]
}

// Fetch de noticias
const { data: newsData, pending, error } = await useFetch<PayloadNewsResponse>('/api/news')

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
const mappedNews = computed(() => {
  if (!newsData.value?.docs) return []
  return newsData.value.docs.map(item => ({
    id: item.id,
    title: item.title,
    summary: item.summary,
    banner: item.banner?.url,
    category: item.category,
    date: item.publishedDate ? new Date(item.publishedDate).toLocaleDateString('es-MX', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }) : ''
  }))
})

// Paginación
const itemsToShow = ref(6)
const visibleNews = computed(() => mappedNews.value.slice(0, itemsToShow.value))

function loadMore() {
  itemsToShow.value += 6
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>