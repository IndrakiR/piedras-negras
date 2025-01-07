<template>
  <div>
    <section class="py-12 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Mensaje de error (opcional) -->
        <div v-if="error" class="text-red-600 text-center mb-6">
          Error al cargar la noticia: {{ error.message }}
        </div>

        <!-- Indicador de carga (opcional) --> 
        <div v-else-if="pending" class="text-center mb-6">
          Cargando noticia...
        </div>

        <!-- Contenido de la noticia -->
        <article v-else class="bg-white rounded-lg shadow-sm overflow-hidden">
          <!-- Imagen de la noticia -->
          <div v-if="news?.img" class="w-full h-[400px] relative">
            <img
              :src="news.img"
              :alt="news?.title"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="p-6">
            <!-- Fecha -->
            <time class="text-sm text-gray-500 block">{{ formattedDate }}</time>

            <!-- Título -->
            <h1 class="mt-2 text-3xl font-bold text-gray-900">
              {{ news?.title }}
            </h1>

            <!-- Contenido -->
            <div class="mt-6 prose prose-lg max-w-none">
              <RichText :content="news?.content" />
            </div>
          </div>
        </article>

        <!-- Botón para volver -->
        <div class="mt-8 text-center">
          <NuxtLink
            to="/noticias"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5e1210] hover:bg-[#801815] transition-colors duration-300"
          >
            <Icon name="heroicons:arrow-left-20-solid" class="mr-2 w-4 h-4" />
            Volver a Noticias
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

interface NewsImage {
  url: string
}

interface NewsData {
  title: string
  content: string
  createdAt: string
  image?: NewsImage
}

const route = useRoute()
const id = route.params.id

// Fetch la noticia específica
const { data: newsData, pending, error } = await useFetch<NewsData>(`/api/news/${id}`, {
  method: 'GET',
})

// Computed para manejar la fecha formateada
const formattedDate = computed(() => {
  if (!newsData.value?.createdAt) return ''
  return new Date(newsData.value.createdAt).toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

// Computed para manejar los datos de la noticia
const news = computed(() => {
  if (!newsData.value) return null
  return {
    title: newsData.value.title,
    content: newsData.value.content,
    img: newsData.value.image?.url 
      ? `http://localhost:4000${newsData.value.image.url}`
      : 'https://placehold.co/400x225',
    date: formattedDate.value
  }
})
</script>
