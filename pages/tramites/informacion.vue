<template>
  <div>
    <BannerSection
      title="Información de Trámites y Servicios"
      subtitle="Gestiona tus trámites municipales de manera eficiente y transparente en Piedras Negras"
      :cards="[
        {
          icon: 'fas fa-file-alt',
          title: 'Documentación Clara',
          description: 'Información detallada sobre requisitos y procesos'
        },
        {
          icon: 'fas fa-clock',
          title: 'Tiempos de Respuesta',
          description: 'Conoce los plazos de resolución para cada trámite'
        },
        {
          icon: 'fas fa-hand-holding-usd',
          title: 'Costos y Pagos',
          description: 'Información sobre tarifas y métodos de pago'
        }
      ]"
    />
    
    <div class="container mx-auto px-4 py-8">
      <div class="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
        <p class="text-gray-700 mb-4 text-lg">
          Aquí encontrarás información detallada sobre los trámites y servicios disponibles en el municipio de Piedras Negras.
        </p>
        <!-- Contenido adicional será agregado aquí -->
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerSection from '~/components/BannerSection.vue'

definePageMeta({
  title: 'Información de Trámites y Servicios'
})
</script>

<style scoped>
.container {
  margin-top: -2rem;
  position: relative;
  z-index: 10;
}
</style>
