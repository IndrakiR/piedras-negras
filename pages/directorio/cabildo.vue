<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-[#611232] mb-6">Cabildo</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Aquí irán las tarjetas de los miembros del cabildo -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
            <Icon name="heroicons:user" class="w-20 h-20 text-[#611232]"/>
          </div>
          <h2 class="text-xl font-semibold text-gray-800">Nombre del Regidor</h2>
          <p class="text-[#611232] font-medium">Presidente de la Comisión de Hacienda</p>
          <div class="space-y-2 w-full">
            <div class="flex items-center space-x-2 text-gray-600">
              <Icon name="heroicons:envelope" class="w-5 h-5"/>
              <p><span class="font-medium">Email:</span> correo@ejemplo.com</p>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <Icon name="heroicons:phone" class="w-5 h-5"/>
              <p><span class="font-medium">Teléfono:</span> (878) XXX-XXXX</p>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <Icon name="heroicons:academic-cap" class="w-5 h-5"/>
              <p><span class="font-medium">Comisiones:</span> Hacienda, Gobernación</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
            <Icon name="heroicons:user" class="w-20 h-20 text-[#611232]"/>
          </div>
          <h2 class="text-xl font-semibold text-gray-800">Nombre del Regidor</h2>
          <p class="text-[#611232] font-medium">Presidente de la Comisión de Obras Públicas</p>
          <div class="space-y-2 w-full">
            <div class="flex items-center space-x-2 text-gray-600">
              <Icon name="heroicons:envelope" class="w-5 h-5"/>
              <p><span class="font-medium">Email:</span> correo@ejemplo.com</p>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <Icon name="heroicons:phone" class="w-5 h-5"/>
              <p><span class="font-medium">Teléfono:</span> (878) XXX-XXXX</p>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <Icon name="heroicons:academic-cap" class="w-5 h-5"/>
              <p><span class="font-medium">Comisiones:</span> Obras Públicas, Urbanismo</p>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
            <Icon name="heroicons:user" class="w-20 h-20 text-[#611232]"/>
          </div>
          <h2 class="text-xl font-semibold text-gray-800">Nombre del Regidor</h2>
          <p class="text-[#611232] font-medium">Presidente de la Comisión de Seguridad</p>
          <div class="space-y-2 w-full">
            <div class="flex items-center space-x-2 text-gray-600">
              <Icon name="heroicons:envelope" class="w-5 h-5"/>
              <p><span class="font-medium">Email:</span> correo@ejemplo.com</p>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <Icon name="heroicons:phone" class="w-5 h-5"/>
              <p><span class="font-medium">Teléfono:</span> (878) XXX-XXXX</p>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <Icon name="heroicons:academic-cap" class="w-5 h-5"/>
              <p><span class="font-medium">Comisiones:</span> Seguridad, Protección Civil</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional cards that show when clicking "Ver más" -->
    <div v-if="showMore" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <div v-for="n in 3" 
           :key="n" 
           class="bg-white rounded-lg shadow-md p-6 opacity-0 animate-slide-up"
           :style="{ animationDelay: `${n * 100}ms`, animationFillMode: 'forwards' }"
      >
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="w-32 h-32 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
            <Icon name="heroicons:user" class="w-20 h-20 text-[#611232]"/>
          </div>
          <h2 class="text-xl font-semibold text-gray-800">Nombre del Regidor</h2>
          <p class="text-[#611232] font-medium">Presidente de la Comisión {{n + 3}}</p>
          <div class="space-y-2 w-full">
            <div class="flex items-center space-x-2 text-gray-600">
              <Icon name="heroicons:envelope" class="w-5 h-5"/>
              <p><span class="font-medium">Email:</span> correo@ejemplo.com</p>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <Icon name="heroicons:phone" class="w-5 h-5"/>
              <p><span class="font-medium">Teléfono:</span> (878) XXX-XXXX</p>
            </div>
            <div class="flex items-center space-x-2 text-gray-600">
              <Icon name="heroicons:academic-cap" class="w-5 h-5"/>
              <p><span class="font-medium">Comisiones:</span> Comisión {{n + 3}}, Otra Comisión</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ver más button -->
    <div class="flex justify-center mt-8">
      <button 
        @click="showMore = !showMore" 
        class="px-6 py-2 bg-[#611232] text-white rounded-lg hover:bg-[#4D0E28] transition-colors duration-300 flex items-center space-x-2"
      >
        <span>{{ showMore ? 'Ver menos' : 'Ver más' }}</span>
        <Icon :name="showMore ? 'heroicons:chevron-up' : 'heroicons:chevron-down'" class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showMore = ref(false)
</script>

<style scoped>
.animate-slide-up {
    animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>