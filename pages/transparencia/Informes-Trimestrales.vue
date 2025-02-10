<template>
  <div>
    <BannerV2
      title="Informes Trimestrales"
      subtitle="Reportes periódicos detallados de la gestión financiera municipal"
      :cards="[
        {
          icon: 'fas fa-chart-line',
          title: 'Informes Financieros',
          description: 'Accede a todos los informes trimestrales del ejercicio actual'
        }
      ]"
    />

    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Informes Trimestrales Disponibles</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(informe, index) in informes" :key="index" 
               class="flex flex-col p-4 border rounded-lg hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center mb-3">
              <Icon name="mdi:file-pdf-box" class="w-6 h-6 text-[#611232] mr-2" />
              <h3 class="text-lg font-medium text-gray-900">{{ informe.nombre }}</h3>
            </div>
            <p class="text-gray-600 mb-4 flex-grow">{{ informe.descripcion }}</p>
            <a :href="informe.url" 
               target="_blank"
               class="inline-flex items-center text-[#611232] hover:text-[#4D0E28] font-medium">
              Ver más
              <Icon name="mdi:chevron-right" class="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BannerV2 from '~/components/BannerV2.vue'

const informes = ref([
  {
    nombre: 'Oficio de Entrega',
    descripcion: 'Documento oficial de entrega del informe trimestral.',
    url: '/files/Reportes Trimestrales/2025/0. Oficio de Entrega.pdf'
  },
  {
    nombre: 'Información Contable',
    descripcion: 'Estados e informes contables del periodo.',
    url: '/files/Reportes Trimestrales/2025/I. INFORMACIÓN CONTABLE.pdf'
  },
  {
    nombre: 'Información Presupuestal',
    descripcion: 'Estados e informes presupuestarios del periodo.',
    url: '/files/Reportes Trimestrales/2025/II. INFORMACIÓN PRESUPUESTAL.PDF'
  },
  {
    nombre: 'Información Programática',
    descripcion: 'Avances y resultados de los programas y proyectos.',
    url: '/files/Reportes Trimestrales/2025/III. Información Programática.pdf'
  },
  {
    nombre: 'Información LDF',
    descripcion: 'Información relativa a la Ley de Disciplina Financiera.',
    url: '/files/Reportes Trimestrales/2025/V. INFORMACIÓN LDF.PDF'
  }
])
</script>

<style scoped>
/* Add any necessary styles here */
</style>