<template>
  <div class="p-6">
    <div class="flex flex-col space-y-4">
      <div>
        <h3 class="text-lg font-semibold text-gray-900">{{ tramite.nombre }}</h3>
        <p class="mt-1 text-sm text-gray-600">{{ tramite.descripcion }}</p>
        <p class="mt-2 text-sm text-gray-500">Tiempo estimado: {{ tramite.tiempo }}</p>
      </div>
      <div>
        <button 
          @click="showDocuments = !showDocuments"
          class="w-full flex justify-between items-center px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        >
          <span class="text-sm font-medium text-gray-700">Documentos Requeridos</span>
          <Icon
            :name="showDocuments ? 'heroicons:chevron-up' : 'heroicons:chevron-down'"
            class="w-5 h-5 text-gray-500 transform transition-transform duration-200"
          />
        </button>
        
        <div 
          v-show="showDocuments"
          class="mt-3 space-y-2 animate-slideDown"
        >
          <div v-for="archivo in tramite.archivos" :key="archivo.nombre" class="pl-2">
            <a 
              :href="archivo.link" 
              target="_blank"
              class="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 text-[#611232] hover:text-[#4D0E28] text-sm font-medium group transition-all duration-200"
            >
              <Icon name="heroicons:document-text" class="w-5 h-5" />
              <span>{{ archivo.nombre }}</span>
              <Icon name="heroicons:arrow-right" class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '#components'
import { ref } from 'vue'

const showDocuments = ref(false)

const tramite = ref({
  id: 'sare',
  nombre: 'SISTEMA DE APERTURA RAPIDA DE EMPRESAS (SARE)',
  descripcion: 'Trámite para apertura rápida de empresas',
  tiempo: '3 días hábiles',
  archivos: [
    {
      nombre: 'Solicitud SARE',
      link: '/files/sare/SOLICITUD SARE.pdf'
    },
    {
      nombre: 'Catálogo de Giros de Bajo Riesgo',
      link: '/files/sare/Anexo_1._Cat_logo_de_Giros_Bajo_Riesgo.pdf'
    },
    {
      nombre: 'Protección Civil',
      link: '/files/sare/PROTECCION CIVIL.pdf'
    }
  ]
})
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
