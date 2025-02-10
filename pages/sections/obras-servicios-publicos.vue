<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Banner Section -->
    <BannerV2 
      title="Obras y Servicios Públicos" 
      subtitle="Desarrollo y mantenimiento de nuestra ciudad"
      :hasImage="false"
      class="bg-gradient-to-r from-[#611232] to-[#8B1A49]"
    />

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Description Section -->
      <div class="max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-[#611232] mb-6">Nuestros Servicios</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          La Dirección de Obras y Servicios Públicos trabaja constantemente para mantener 
          y mejorar la infraestructura de nuestra ciudad, garantizando servicios de calidad 
          para todos los ciudadanos.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Service Card 1 -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-[#611232]/10 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#611232]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Mantenimiento Urbano</h3>
          <p class="text-gray-600">
            Mantenimiento de calles, banquetas, alumbrado público y espacios públicos.
          </p>
        </div>

        <!-- Service Card 2 -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-[#611232]/10 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#611232]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Recolección de Basura</h3>
          <p class="text-gray-600">
            Servicio de recolección de residuos y mantenimiento de la limpieza urbana.
          </p>
        </div>

        <!-- Service Card 3 -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-[#611232]/10 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#611232]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Mantenimiento de Infraestructura</h3>
          <p class="text-gray-600">
            Reparación y mantenimiento de infraestructura pública y servicios básicos.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'

definePageMeta({
})
</script>

<style scoped>
/* Add any specific styles here */
</style>
