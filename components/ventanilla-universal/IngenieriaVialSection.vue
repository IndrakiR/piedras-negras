<template>
  <div 
    class="border border-gray-100 rounded-xl overflow-hidden hover:border-[#611232] transition-all duration-200 hover:shadow-md"
    :class="{ 'shadow-md': isOpen }"
  >
    <button 
      @click="$emit('toggle')" 
      class="w-full flex justify-between items-center px-8 py-5 bg-white hover:bg-gray-50 transition-colors group"
    >
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-lg bg-[#611232]/5 flex items-center justify-center group-hover:bg-[#611232]/10 transition-colors">
          <Icon name="heroicons:truck" class="w-6 h-6 text-[#611232]" />
        </div>
        <span class="text-gray-700 font-medium text-lg group-hover:text-[#611232] transition-colors">Ingeniería Vial</span>
      </div>
      <Icon 
        name="heroicons:chevron-down" 
        class="w-5 h-5 text-[#611232] transform transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>
    
    <div v-show="isOpen" class="animate-slideDown">
      <div class="px-8 py-6 bg-gray-50">
        <div class="grid gap-6">
          <div class="grid gap-6 md:grid-cols-2">
            <div 
              v-for="tramite in tramites" 
              :key="tramite.id" 
              class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-[#611232]/30"
            >
              <div class="flex flex-col space-y-4">
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">{{ tramite.nombre }}</h3>
                  <p class="mt-1 text-sm text-gray-600">{{ tramite.descripcion }}</p>
                  <p class="mt-2 text-sm text-gray-500">Tiempo estimado: {{ tramite.tiempo }}</p>
                </div>
                <div>
                  <button 
                    @click="tramite.showDetails = !tramite.showDetails"
                    class="w-full flex justify-between items-center px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <span class="text-sm font-medium text-gray-700">Documentos Requeridos</span>
                    <Icon
                      :name="tramite.showDetails ? 'heroicons:chevron-up' : 'heroicons:chevron-down'"
                      class="w-5 h-5 text-gray-500 transform transition-transform duration-200"
                    />
                  </button>
                  
                  <div 
                    v-show="tramite.showDetails"
                    class="mt-3 animate-slideDown"
                  >
                    <div class="pl-2">
                      <a 
                        :href="tramite.link" 
                        target="_blank"
                        class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 text-[#611232] hover:text-[#4D0E28] text-sm font-medium group transition-all duration-200"
                      >
                        <Icon name="heroicons:document-text" class="w-5 h-5" />
                        <span>Ver detalles del trámite</span>
                        <Icon name="heroicons:arrow-right" class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '#components'
import { ref } from 'vue'

const tramites = ref([
  {
    id: 1,
    nombre: 'Estacionamiento Exclusivo',
    descripcion: 'Solicitud para permiso de estacionamiento exclusivo',
    tiempo: '5 días hábiles',
    link: '/files/SOL.- ESTACIONAMIENTO EXCLUSIVO.pdf',
    showDetails: false
  },
  {
    id: 2,
    nombre: 'Objeto Fijo o Delimitadores',
    descripcion: 'Solicitud para instalación de objetos fijos o delimitadores',
    tiempo: '5 días hábiles',
    link: '/files/SOL.- OBJETO FIJO O DELIMITADORES.pdf',
    showDetails: false
  }
])

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle'])
</script>
