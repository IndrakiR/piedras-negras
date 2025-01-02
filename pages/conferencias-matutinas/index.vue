<template>
  <div>
    <BannerSection
      title="Conferencias Matutinas"
      subtitle="Mantente informado sobre las actividades y anuncios diarios del Gobierno Municipal"
      :cards="[
        {
          icon: 'fas fa-video',
          title: 'Transmisiones en Vivo',
          description: 'Sigue las conferencias en tiempo real'
        },
        {
          icon: 'fas fa-microphone',
          title: 'Temas Relevantes',
          description: 'Conoce los temas más importantes del día'
        },
        {
          icon: 'fas fa-calendar',
          title: 'Horarios',
          description: 'Lunes a Viernes de 8:00 a 10:00 AM'
        }
      ]"
    />

    <section class="py-12 bg-gray-50">
      <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 class="text-4xl font-semibold text-[#611232] text-center mb-2">Conferencias Matutinas</h2>
        <p class="text-base text-gray-500 text-center mb-8">Mantente informado con las últimas actualizaciones del gobierno municipal</p>
        
        <div class="bg-white rounded-xl shadow-md p-8 mb-8">
          <div class="relative pb-[56.25%] h-0">
            <iframe
              src="https://www.youtube.com/embed/btZkPCzmZ_g?autoplay=1&mute=1"
              class="absolute top-0 left-0 w-full h-full rounded-lg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <div class="text-center mb-12">
          <p class="text-xl text-gray-600 font-medium flex items-center justify-center">
            <Icon name="mingcute:time-line" class="w-6 h-6 mr-2 text-[#611232]" />
            Lunes a Viernes de 8 a 10am
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import BannerSection from '~/components/BannerSection.vue'
import { ref } from 'vue'

const conferences = ref([
  {
    id: 1,
    title: 'Conferencia Matutina - 2 de Enero 2025',
    description: 'Actualización sobre proyectos municipales y avances en obras públicas',
    thumbnail: '/img/conferencias/thumbnail1.jpg',
    date: '02/01/2025',
    duration: '45:30'
  },
  {
    id: 2,
    title: 'Conferencia Matutina - 1 de Enero 2025',
    description: 'Resumen de actividades y planes para el nuevo año',
    thumbnail: '/img/conferencias/thumbnail2.jpg',
    date: '01/01/2025',
    duration: '38:15'
  },
  // Agregar más conferencias según sea necesario
])

definePageMeta({
  title: 'Conferencias Matutinas'
})
</script>

<style scoped>
.conference-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.conference-card {
  transition: transform 0.2s ease-in-out;
}

.conference-card:hover {
  transform: translateY(-5px);
}
</style>
