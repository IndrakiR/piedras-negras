<template>
  <div class="w-full">
    <!-- Hero Section with Video Placeholder -->
    <section class="relative h-screen bg-gradient-to-br from-[#611232] to-gray-900">
      <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
      
      <!-- Large Play Icon -->
      <div class="absolute inset-0 flex items-center justify-center">
        <Icon 
          name="lucide:play-circle" 
          class="w-32 h-32 text-white/80 opacity-75"
        />
      </div>
      
      <!-- Text Overlay -->
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-6xl font-bold text-white mb-4">Piedras Negras</h1>
        <p class="text-xl text-white/90">Tu Ciudad, Tu Hogar</p>
      </div>

      <!-- Bottom Gradient -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>

    <!-- Componente separado: TuNuevaHistoria -->
    <TuNuevaHistoria />

    <!-- Componente separado: SeccionesHome -->
    <SeccionesHome />

    <!-- Últimas Noticias Carousel -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Últimas Noticias</h2>
        <div class="relative">
          <div class="overflow-hidden">
            <div 
              class="flex transition-transform duration-500 ease-in-out" 
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(item, index) in news"
                :key="index"
                class="w-full flex-shrink-0 px-4"
              >
                <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                  <!-- Placeholder de imagen en lugar de la imagen real -->
                  <div class="relative w-full h-64 bg-gray-100 flex items-center justify-center">
                    <Icon name="lucide:image" class="w-16 h-16 text-gray-300" />
                  </div>
                  <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2">{{ item.title }}</h3>
                    <p class="text-gray-600">{{ item.date }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button 
            @click="prevSlide"
            class="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <Icon name="lucide:chevron-left" class="w-6 h-6 text-[#611232]" />
          </button>
          <button 
            @click="nextSlide"
            class="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
          >
            <Icon name="lucide:chevron-right" class="w-6 h-6 text-[#611232]" />
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Importamos los componentes separados
import TuNuevaHistoria from '~/components/TuNuevaHistoria.vue'
import SeccionesHome from '~/components/SeccionesHome.vue'

// Manejo de slider para 'Últimas Noticias'
const currentSlide = ref(0)
const news = ref([
  { title: 'Inauguración de nuevo parque', date: '23 Dic 2024' },
  { title: 'Programa de apoyo comunitario', date: '22 Dic 2024' },
  { title: 'Mejoras en servicios públicos', date: '21 Dic 2024' }
])

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % news.value.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + news.value.length) % news.value.length
}
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
