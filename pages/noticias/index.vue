<!-- pages/noticias/index.vue -->
<template>
    <section class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Encabezado Simple -->
        <h2 class="text-2xl font-semibold text-gray-900 mb-8">Últimas Noticias</h2>
  
        <!-- Galería Horizontal -->
        <div class="flex flex-nowrap space-x-6 overflow-x-auto pb-4 scrollbar-hide">
          <!-- Noticia 1 -->
          <div class="w-80 flex-shrink-0 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="aspect-w-16 aspect-h-9">
              <img src="https://placehold.co/400x225" alt="Inauguración de Parque" class="w-full h-48 object-cover rounded-t-lg" />
            </div>
            <div class="p-4">
              <span class="text-sm text-gray-500">23 Dic, 2024</span>
              <h3 class="mt-2 text-lg font-medium text-gray-900 line-clamp-2">Inauguración del Nuevo Parque Recreativo</h3>
              <p class="mt-2 text-sm text-gray-600 line-clamp-2">El nuevo espacio verde de la ciudad abre sus puertas con instalaciones modernas para toda la familia.</p>
              <a href="#" class="mt-3 inline-flex items-center text-sm font-medium text-[#5e1210]">
                Leer más
                <Icon name="heroicons:arrow-right-20-solid" class="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
  
          <!-- Noticia 2 -->
          <div class="w-80 flex-shrink-0 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="aspect-w-16 aspect-h-9">
              <img src="https://placehold.co/400x225" alt="Festival Cultural" class="w-full h-48 object-cover rounded-t-lg" />
            </div>
            <div class="p-4">
              <span class="text-sm text-gray-500">22 Dic, 2024</span>
              <h3 class="mt-2 text-lg font-medium text-gray-900 line-clamp-2">Festival Cultural de Invierno</h3>
              <p class="mt-2 text-sm text-gray-600 line-clamp-2">Gran celebración de arte y cultura con artistas locales y nacionales durante todo el mes.</p>
              <a href="#" class="mt-3 inline-flex items-center text-sm font-medium text-[#5e1210]">
                Leer más
                <Icon name="heroicons:arrow-right-20-solid" class="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
  
          <!-- Noticia 3 -->
          <div class="w-80 flex-shrink-0 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="aspect-w-16 aspect-h-9">
              <img src="https://placehold.co/400x225" alt="Programa Educativo" class="w-full h-48 object-cover rounded-t-lg" />
            </div>
            <div class="p-4">
              <span class="text-sm text-gray-500">21 Dic, 2024</span>
              <h3 class="mt-2 text-lg font-medium text-gray-900 line-clamp-2">Nuevo Programa de Becas Municipales</h3>
              <p class="mt-2 text-sm text-gray-600 line-clamp-2">El ayuntamiento anuncia programa de apoyo educativo para estudiantes destacados de la región.</p>
              <a href="#" class="mt-3 inline-flex items-center text-sm font-medium text-[#5e1210]">
                Leer más
                <Icon name="heroicons:arrow-right-20-solid" class="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const route = useRoute()
  </script>
  
  <style scoped>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>