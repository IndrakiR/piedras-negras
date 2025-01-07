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
        <!-- Encabezado centrado -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-semibold text-gray-900">Últimas Noticias</h2>
          <p class="text-base text-gray-500 mt-2">
            Mantente al día con los eventos más recientes de la ciudad
          </p>
        </div>

        <!-- Mensaje de error (opcional) -->
        <div v-if="error" class="text-red-600 text-center mb-6">
          Error al cargar las noticias: {{ error.message }}
        </div>

        <!-- Indicador de carga (opcional) -->
        <div v-else-if="pending" class="text-center mb-6">
          Cargando noticias...
        </div>

        <!-- Contenedor con transition-group (tu animación "fade") -->
        <transition-group
          v-else
          tag="div"
          name="fade"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center"
        >
          <!-- Iteración de las noticias visibles -->
          <article
            v-for="(news, index) in visibleNews"
            :key="index"
            class="max-w-sm w-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <img
              :src="news.img"
              :alt="news.title"
              class="w-full h-60 object-cover rounded-t-lg"
            />

            <transition name="expand">
              <div class="p-4" v-if="true">
                <time class="text-sm text-gray-500 block">{{ news.date }}</time>
                <h3 class="mt-2 text-lg font-medium text-gray-900">
                  {{ news.title }}
                </h3>

                <div
                  class="mt-2 text-sm text-gray-600"
                  :class="!isExpanded(index) ? 'line-clamp-2' : ''"
                >
                  <template v-if="isExpanded(index)">
                    <RichText :content="news.fullDesc" />
                  </template>
                  <template v-else>
                    {{ news.shortDesc }}
                  </template>
                </div>

                <button
                  class="mt-3 inline-flex items-center text-sm font-medium text-[#5e1210] hover:text-[#801815] focus:outline-none"
                  @click="toggleExpand(index)"
                >
                  {{ isExpanded(index) ? 'Leer menos' : 'Leer más' }}
                  <Icon name="heroicons:arrow-right-20-solid" class="ml-1 w-4 h-4" />
                </button>
              </div>
            </transition>
          </article>
        </transition-group>

        <div class="mt-8 text-center">
          <button
            v-if="itemsToShow < mappedNews.length"
            @click="loadMore"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5e1210] hover:bg-[#801815] transition-colors duration-300"
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
import RichText from '~/components/RichText.vue'

// Definimos aquí la forma de la respuesta
type PayloadNewsResponse = {
  docs: {
    id: string
    title: string
    content: any // richText de Payload
    summary: string
    publishedDate?: string
    image?: { url?: string }
    category?: 'local' | 'nacional' | 'internacional' | 'deportes' | 'cultura'
    status?: 'draft' | 'published'
    author?: { id: string; name?: string }
    tags?: Array<{ tag: string }>
  }[]
}

// Consumimos el endpoint interno /api/news (esto se hace server-side en SSR)
const { data: fetchedData, pending, error } = await useFetch<PayloadNewsResponse>('/api/news', {
  method: 'GET',
})

// Mapeamos la respuesta
const mappedNews = computed(() => {
  const docs = fetchedData.value?.docs ?? []
  return docs.map((item) => {
    // Dar formato a la fecha
    const dateFormatted = item.publishedDate
      ? new Date(item.publishedDate).toLocaleDateString('es-MX', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })
      : 'Sin fecha'

    // Extraer un texto corto si no existe summary
    const getPlainText = (content: any): string => {
      if (!content) return ''
      try {
        const root = content.root || content
        let text = ''
        const traverse = (node: any) => {
          if (node.text) text += node.text + ' '
          if (node.children) node.children.forEach(traverse)
        }
        traverse(root)
        return text.trim()
      } catch (err) {
        console.error('Error parsing rich text:', err)
        return String(content) || ''
      }
    }

    return {
      date: dateFormatted,
      title: item.title || 'Sin título',
      shortDesc: item.summary || getPlainText(item.content).slice(0, 150) + '...',
      fullDesc: item.content,
      img: item.image?.url
        ? `http://localhost:4000${item.image.url}`
        : 'https://placehold.co/400x225',
    }
  })
})

// Estado de cuántas noticias mostrar
const itemsToShow = ref(3)
const visibleNews = computed(() => mappedNews.value.slice(0, itemsToShow.value))

function loadMore() {
  itemsToShow.value += 3
}

// Expandir/contraer
const expandedIndex = ref<number | null>(null)
function isExpanded(index: number) {
  return expandedIndex.value === index
}
function toggleExpand(index: number) {
  expandedIndex.value = expandedIndex.value === index ? null : index
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>