<template>
  <div class="border border-gray-100 rounded-xl overflow-hidden hover:border-[#611232] transition-all duration-200 hover:shadow-md">
    <button 
      @click="$emit('toggle')" 
      class="w-full flex justify-between items-center px-8 py-5 bg-white hover:bg-gray-50 transition-colors group"
    >
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-lg bg-[#611232]/5 flex items-center justify-center group-hover:bg-[#611232]/10 transition-colors">
          <Icon name="heroicons:building-office-2" class="w-6 h-6 text-[#611232]" />
        </div>
        <span class="text-gray-700 font-medium text-lg group-hover:text-[#611232] transition-colors">Desarrollo Urbano</span>
      </div>
      <Icon 
        :name="isOpen ? 'heroicons:chevron-up' : 'heroicons:chevron-down'"
        class="w-5 h-5 text-[#611232]"
      />
    </button>
    
    <div v-if="isOpen" class="border-t border-gray-200">
      <div class="px-8 py-6 bg-gray-50">
        <div class="grid gap-6">
          <div class="grid gap-6 md:grid-cols-2">
            <div class="bg-white p-0 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-[#611232]/30">
              <SareFrame />
            </div>
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-[#611232]/30">
              <div class="flex flex-col space-y-4">
                <div>
                  <h3 class="text-lg font-semibold text-gray-900">{{ tramites[0].nombre }}</h3>
                  <p class="mt-1 text-sm text-gray-600">{{ tramites[0].descripcion }}</p>
                  <p class="mt-2 text-sm text-gray-500">Tiempo estimado: {{ tramites[0].tiempo }}</p>
                </div>
                <div>
                  <button 
                    @click="tramites[0].showDetails = !tramites[0].showDetails"
                    class="w-full flex justify-between items-center px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <span class="text-sm font-medium text-gray-700">Documentos Requeridos</span>
                    <Icon
                      :name="tramites[0].showDetails ? 'heroicons:chevron-up' : 'heroicons:chevron-down'"
                      class="w-5 h-5 text-gray-500 transform transition-transform duration-200"
                    />
                  </button>
                  
                  <div 
                    v-show="tramites[0].showDetails"
                    class="mt-3 animate-slideDown"
                  >
                    <div class="pl-2">
                      <a 
                        :href="tramites[0].link" 
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
          <div class="grid gap-6 md:grid-cols-2">
            <div 
              v-for="tramite in tramites.slice(1)" 
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
import SareFrame from './SareFrame.vue'

const tramites = ref([
  {
    id: 'factibilidad',
    nombre: 'FACTIBILIDAD DE USO DE SUELO',
    descripcion: 'Trámite para obtener la factibilidad de uso de suelo',
    tiempo: '5 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'uso-suelo',
    nombre: 'USO DE SUELO',
    descripcion: 'Trámite para obtener el uso de suelo',
    tiempo: '5 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'cambio-uso-suelo',
    nombre: 'CAMBIO DE USO DE SUELO',
    descripcion: 'Trámite para solicitar cambio de uso de suelo',
    tiempo: '15 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'licencia-funcionamiento',
    nombre: 'LICENCIA DE FUNCIONAMIENTO',
    descripcion: 'Trámite para obtener licencia de funcionamiento',
    tiempo: '5 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'licencia-construccion',
    nombre: 'LICENCIA DE CONSTRUCCIÓN',
    descripcion: 'Trámite para obtener licencia de construcción',
    tiempo: '5 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'certificacion-planos',
    nombre: 'CERTIFICACIÓN DE PLANOS',
    descripcion: 'Trámite para certificación de planos',
    tiempo: '5 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'ampliacion',
    nombre: 'AMPLIACIÓN / REMODELACIÓN/REHABILITACIÓN',
    descripcion: 'Trámite para ampliación, remodelación o rehabilitación',
    tiempo: '5 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'barda',
    nombre: 'CONSTRUCCIÓN DE BARDA',
    descripcion: 'Trámite para construcción de barda',
    tiempo: '5 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'numero-oficial',
    nombre: 'CERTIFICACIÓN DE NÚMERO OFICIAL',
    descripcion: 'Trámite para certificación de número oficial',
    tiempo: '3 días hábiles',
    link: '/files/desarrollo-files/Numofi/SOL.- NUMERO OFICIAL.pdf',
    showDetails: false
  },
  {
    id: 'alineamiento',
    nombre: 'CERTIFICACIÓN DE ALINEAMIENTO',
    descripcion: 'Trámite para certificación de alineamiento',
    tiempo: '5 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'ruptura-vialidad',
    nombre: 'RUPTURA DE VIALIDAD',
    descripcion: 'Trámite para ruptura de vialidad',
    tiempo: '5 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'instalacion-anuncio',
    nombre: 'INSTALACIÓN DE ANUNCIO',
    descripcion: 'Trámite para instalación de anuncio',
    tiempo: '5 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'refrendo-anuncio',
    nombre: 'REFRENDO DE ANUNCIO',
    descripcion: 'Trámite para refrendo de anuncio',
    tiempo: '3 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'fraccionamiento',
    nombre: 'LICENCIA DE FRACCIONAMIENTO',
    descripcion: 'Trámite para licencia de fraccionamiento',
    tiempo: '15 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'relotificacion',
    nombre: 'RELOTIFICACIÓN',
    descripcion: 'Trámite para relotificación',
    tiempo: '10 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'dro',
    nombre: 'D.R.O.',
    descripcion: 'Director Responsable de Obra',
    tiempo: '5 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'subdivision',
    nombre: 'SUBDIVISIÓN / FUSIÓN',
    descripcion: 'Trámite para subdivisión o fusión de predios',
    tiempo: '10 días hábiles',
    link: '/files/fusionysubidivison/SOL. FUSION Y SUBDIVISION.pdf',
    showDetails: false
  },
  {
    id: 'demolicion',
    nombre: 'DEMOLICIÓN',
    descripcion: 'Trámite para demolición',
    tiempo: '5 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
    showDetails: false
  },
  {
    id: 'terminacion',
    nombre: 'TERMINACIÓN DE OBRA',
    descripcion: 'Trámite para terminación de obra',
    tiempo: '5 días hábiles',
    link: '/files/overall/SOLICITUD MULTIPLE 2025.pdf',
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

<style scoped>
.animate-slideDown {
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
