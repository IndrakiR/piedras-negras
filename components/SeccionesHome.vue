<template>
    <!-- Secciones -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Secciones</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- DIF Municipal -->
          <div class="space-y-6">
            <NuxtLink
              to="#"
              class="block p-6 bg-gradient-to-br from-rose-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200"
            >
              <div class="relative w-full h-48 bg-gray-100 flex items-center justify-center mb-4 rounded">
                <!-- Icono de imagen como placeholder -->
                <Icon name="lucide:image" class="w-16 h-16 text-gray-300" />
              </div>
              <h3 class="text-xl font-semibold mb-2 text-[#611232]">DIF Municipal</h3>
              <p class="text-gray-600">Servicios y programas de asistencia social</p>
            </NuxtLink>
  
            <!-- Paga Tu Predial -->
            <NuxtLink
              to="#"
              class="block p-6 bg-gradient-to-br from-rose-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200"
            >
              <div class="relative w-full h-48 bg-gray-100 flex items-center justify-center mb-4 rounded">
                <!-- Icono de imagen como placeholder -->
                <Icon name="lucide:image" class="w-16 h-16 text-gray-300" />
              </div>
              <h3 class="text-xl font-semibold mb-2 text-[#611232]">Paga Tu Predial</h3>
              <p class="text-gray-600">Realiza tu pago de manera fácil y segura</p>
            </NuxtLink>
          </div>
  
          <!-- Brigada en tu Colonia -->
          <div class="space-y-6">
            <NuxtLink
              to="#"
              class="block p-6 bg-gradient-to-br from-rose-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200"
            >
              <div class="relative w-full h-48 bg-gray-100 flex items-center justify-center mb-4 rounded">
                <!-- Icono de imagen como placeholder -->
                <Icon name="lucide:image" class="w-16 h-16 text-gray-300" />
              </div>
              <h3 class="text-xl font-semibold mb-2 text-[#611232]">Brigada en tu Colonia</h3>
              <p class="text-gray-600">Servicios comunitarios cerca de ti</p>
            </NuxtLink>
  
            <!-- Dispensario Médico -->
            <NuxtLink
              to="#"
              class="block p-6 bg-gradient-to-br from-rose-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200"
            >
              <div class="relative w-full h-48 bg-gray-100 flex items-center justify-center mb-4 rounded">
                <!-- Icono de imagen como placeholder -->
                <Icon name="lucide:image" class="w-16 h-16 text-gray-300" />
              </div>
              <h3 class="text-xl font-semibold mb-2 text-[#611232]">Dispensario Médico</h3>
              <p class="text-gray-600">Atención médica accesible</p>
            </NuxtLink>
          </div>
  
          <!-- Obras y Puentes -->
          <div class="space-y-6">
            <!-- Obras y Servicios Públicos -->
            <NuxtLink
              to="#"
              class="block p-6 bg-gradient-to-br from-rose-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200"
            >
              <div class="relative w-full h-48 bg-gray-100 flex items-center justify-center mb-4 rounded">
                <!-- Icono de imagen como placeholder -->
                <Icon name="lucide:image" class="w-16 h-16 text-gray-300" />
              </div>
              <h3 class="text-xl font-semibold mb-2 text-[#611232]">Obras y Servicios Públicos</h3>
              <p class="text-gray-600">Información sobre obras y servicios en tu ciudad</p>
            </NuxtLink>
  
            <!-- Ver Puentes Internacionales -->
            <NuxtLink
              to="#"
              class="block p-6 bg-gradient-to-br from-rose-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100 hover:border-rose-200"
            >
              <div class="relative w-full h-48 bg-gray-100 flex items-center justify-center mb-4 rounded">
                <!-- Icono de imagen como placeholder -->
                <Icon name="lucide:image" class="w-16 h-16 text-gray-300" />
                <!-- Icono pequeño de Puente (opcional) -->
                <div class="absolute bottom-2 right-2">
                  <Icon name="lucide:bridge" class="w-6 h-6 text-[#611232]" />
                </div>
              </div>
              <h3 class="text-xl font-semibold mb-2 text-[#611232]">Ver Puentes Internacionales</h3>
              <p class="text-gray-600">Estado y tiempos de espera en cruces fronterizos</p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  /* 
    En caso de que quieras añadir algún script o 
    props dentro de SeccionesHome, puedes hacerlo aquí.
  */
  </script>
  
  <style scoped>
  /* Estilos locales a este componente (opcional) */
  </style>
  