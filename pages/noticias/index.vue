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
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <article
            v-for="news in newsData?.docs"
            :key="news.id"
            class="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-[1.02] transition-transform duration-200"
          >
            <!-- Imagen -->
            <NuxtLink :to="`/noticias/${news.id}`" class="block">
              <div class="relative h-48">
                <img
                  :src="news.banner?.url"
                  :alt="news.title"
                  class="w-full h-full object-cover"
                  onerror="this.style.display='none'"
                />
              </div>

              <div class="p-4">
                <!-- Meta -->
                <div class="flex items-center gap-3 mb-2">
                  <span class="bg-[#5e1210] text-white text-xs px-2 py-1 rounded-full">
                    {{ getCategoryLabel(news.category) }}
                  </span>
                  <time class="text-sm text-gray-500">{{ formatDate(news.createdAt) }}</time>
                </div>

                <!-- Título -->
                <h3 class="text-xl font-semibold text-gray-900 mb-2">
                  {{ news.title }}
                </h3>

                <!-- Resumen -->
                <p class="text-gray-600 line-clamp-2">
                  {{ news.summary }}
                </p>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '#app'
import BannerSection from '~/components/BannerSection.vue'

interface NewsImage {
  url: string
  alt: string
}

interface NewsDoc {
  id: string
  title: string
  summary: string
  content: string
  category: string
  createdAt: string
  banner?: NewsImage
}

interface PayloadNewsResponse {
  docs: NewsDoc[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}

// Fetch de noticias
const { data: newsData, pending, error } = await useFetch<PayloadNewsResponse>('/api/news')

// Mapeo de categorías
const getCategoryLabel = (value: string | undefined) => {
  if (!value) return 'Sin categoría'
  
  const categories: Record<string, string> = {
    'government': 'Gobierno',
    'culture': 'Cultura',
    'sports': 'Deportes',
    'education': 'Educación',
    'health': 'Salud',
    'tourism': 'Turismo',
    'security': 'Seguridad',
    'environment': 'Medio Ambiente'
  }

  return categories[value] || value
}

// Formato de fecha
const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
