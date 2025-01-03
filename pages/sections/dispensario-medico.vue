<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Banner Section -->
    <BannerV2 
      title="Dispensario Médico" 
      subtitle="Servicios de salud accesibles para todos"
      :hasImage="false"
      class="bg-gradient-to-r from-[#611232] to-[#8B1A49]"
    />

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">
      <!-- Description Section -->
      <div class="max-w-4xl mx-auto mb-16">
        <h2 class="text-3xl font-bold text-[#611232] mb-6">Servicios Médicos</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          El Dispensario Médico Municipal ofrece servicios de salud accesibles y de calidad 
          para todos los ciudadanos de Piedras Negras, con atención médica básica y 
          especializada a precios accesibles.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <!-- Service Card 1 -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-[#611232]/10 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#611232]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Consulta General</h3>
          <p class="text-gray-600">
            Atención médica general, diagnóstico y tratamiento de enfermedades comunes.
          </p>
        </div>

        <!-- Service Card 2 -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-[#611232]/10 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#611232]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Servicios de Farmacia</h3>
          <p class="text-gray-600">
            Medicamentos a bajo costo y orientación farmacéutica profesional.
          </p>
        </div>

        <!-- Service Card 3 -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div class="w-16 h-16 bg-[#611232]/10 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#611232]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Servicios de Urgencias</h3>
          <p class="text-gray-600">
            Atención de emergencias médicas básicas y primeros auxilios.
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'
</script>

<style scoped>
/* Add any specific styles here */
</style>
