<template>
  <div>
    <BannerV2 
      title="Puentes Internacionales"
      subtitle="Información actualizada sobre los cruces fronterizos"
      :cards="[
        {
          icon: 'fas fa-bridge',
          title: 'Puente I',
          description: 'Puente Internacional Piedras Negras I'
        },
        {
          icon: 'fas fa-bridge',
          title: 'Puente II',
          description: 'Puente Internacional Piedras Negras II'
        },
        {
          icon: 'fas fa-clock',
          title: 'Horario',
          description: 'Servicio las 24 horas'
        }
      ]"
    />
    <!-- YouTube Livestream Windows -->
    <div class="container mx-auto px-4 py-8">
      <div class="grid md:grid-cols-2 gap-8">
        <!-- First Livestream -->
        <div class="aspect-video w-full">
          <iframe
            class="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/live_stream?channel=UC5bZk3mVxoiDKW8_L7eWY7Q&autoplay=1&mute=1"
            title="Puente Internacional I Livestream"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <!-- Second Livestream -->
        <div class="aspect-video w-full">
          <iframe
            class="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/live_stream?channel=UCD12HC-FqOwAEzEi0cKxYZQ&autoplay=1&mute=1"
            title="Puente Internacional II Livestream"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
    <div class="container mx-auto px-4 py-16">
      <!-- Puentes Information Cards -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <!-- Puente I -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-[#611232] mb-4">Puente Internacional I</h2>
            <div class="space-y-4">
              <div class="flex justify-between items-center border-b pb-2">
                <span class="font-medium">Nombre oficial:</span>
                <span>Puente Internacional Piedras Negras I</span>
              </div>
              <div class="flex justify-between items-center border-b pb-2">
                <span class="font-medium">Horario:</span>
                <span>7:00 AM - 10:45 PM (Lunes a Domingo)</span>
              </div>
              <div class="flex justify-between items-center border-b pb-2">
                <span class="font-medium">Ubicación:</span>
                <span>Calle Hidalgo, Zona Centro</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Puente II -->
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="p-6">
            <h2 class="text-2xl font-semibold text-[#611232] mb-4">Puente Internacional II</h2>
            <div class="space-y-4">
              <div class="flex justify-between items-center border-b pb-2">
                <span class="font-medium">Nombre oficial:</span>
                <span>Puente Internacional Piedras Negras II</span>
              </div>
              <div class="flex justify-between items-center border-b pb-2">
                <span class="font-medium">Horario:</span>
                <span>24 horas</span>
              </div>
              <div class="flex justify-between items-center border-b pb-2">
                <span class="font-medium">Ubicación:</span>
                <span>Lib. Fausto Martinez, Zona Centro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Enlaces útiles -->
      <div class="bg-gray-50 rounded-xl p-8">
        <h3 class="text-2xl font-semibold text-[#611232] mb-6">Enlaces Útiles</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <a href="https://bwt.cbp.gov/" 
             target="_blank"
             class="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <span class="text-[#611232]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Tiempos de espera CBP
          </a>
          <a href="https://www.cbp.gov/travel/advisories-wait-times" 
             target="_blank"
             class="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <span class="text-[#611232]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            Avisos y tiempos de espera
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'
// Add any required functionality here
</script>

<style scoped>
/* Add any component-specific styles here */
</style>