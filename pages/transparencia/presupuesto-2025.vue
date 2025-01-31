<template>
  <div>
    <BannerV2
      title="Proceso Presupuestario 2025"
      subtitle="Documentos relacionados con el proceso presupuestario del año 2025"
      :cards="[
        {
          icon: 'fas fa-file-invoice-dollar',
          title: 'Documentos Presupuestarios',
          description: 'Accede a todos los documentos del proceso presupuestario 2025'
        }
      ]"
    />

    <div class="container mx-auto px-4 py-8">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">Documentos del Proceso Presupuestario 2025</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(documento, index) in documentos" :key="index" 
               class="flex flex-col p-4 border rounded-lg hover:shadow-md transition-shadow duration-300">
            <div class="flex items-center mb-3">
              <Icon name="mdi:file-pdf-box" class="w-6 h-6 text-[#611232] mr-2" />
              <h3 class="text-lg font-medium text-gray-900">{{ documento.nombre }}</h3>
            </div>
            <p class="text-gray-600 mb-4 flex-grow">{{ documento.descripcion }}</p>
            <a :href="documento.url" 
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
definePageMeta({
  layout: 'default'
})

import BannerV2 from '~/components/BannerV2.vue'

const documentos = ref([
  {
    nombre: '1. Anteproyecto de Ley de Ingresos',
    descripcion: 'Documento preliminar que establece la propuesta inicial de ingresos municipales para el ejercicio fiscal 2025.',
    url: '/files/Presupuesto 2025/1. ANTEPROYECTO DE LEY DE INGRESOS.pdf'
  },
  {
    nombre: '2. Proyecto de Presupuesto de Ley de Ingresos',
    descripcion: 'Propuesta formal del presupuesto de ingresos para el ejercicio fiscal 2025.',
    url: '/files/Presupuesto 2025/2. PROYECTO DE PRESUPUESTO DE LEY DE INGRESOS.pdf'
  },
  {
    nombre: '3. Acta de Aprobación de Proyectos',
    descripcion: 'Documento oficial que certifica la aprobación de los proyectos de Ley de Ingresos y Presupuesto de Egresos.',
    url: '/files/Presupuesto 2025/3. ACTA DE APROBACION PROYECTOS DE L.I. Y P.E..pdf'
  },
  {
    nombre: '4. Iniciativa de Ley de Ingresos',
    descripcion: 'Documento que presenta formalmente la propuesta de Ley de Ingresos ante el órgano legislativo.',
    url: '/files/Presupuesto 2025/4. INICIATIVA DE LEY DE INGRESOS.pdf'
  },
  {
    nombre: '5. Dictamen de la Comisión de Hacienda',
    descripcion: 'Análisis y opinión técnica de la Comisión de Hacienda sobre el proyecto presupuestario.',
    url: '/files/Presupuesto 2025/5. DICTAMEN DE LA COMISION DE HACIENDA, PATRIMONIO Y CUENTA PUB.pdf'
  },
  {
    nombre: '6. Información Adicional Iniciativa Ley de Ingresos',
    descripcion: 'Documentación complementaria que sustenta la Iniciativa de Ley de Ingresos.',
    url: '/files/Presupuesto 2025/6. INFORMACION ADICIONAL INICIATIVA LEY DE INGRESOS.pdf'
  },
  {
    nombre: '7. Calendario Ingresos Base Mensual',
    descripcion: 'Programación mensual de los ingresos proyectados para el ejercicio fiscal 2025.',
    url: '/files/Presupuesto 2025/7. CALENDARIO INGRESOS BASE MENSUAL.pdf'
  },
  {
    nombre: '8. Anteproyecto Presupuesto de Egresos',
    descripcion: 'Documento preliminar que establece la propuesta inicial de egresos municipales para el ejercicio fiscal 2025.',
    url: '/files/Presupuesto 2025/8. ANTEPROYECTO PRESUPUESTO DE EGRESOS.pdf'
  },
  {
    nombre: '9. Proyecto de Presupuesto de Egresos',
    descripcion: 'Propuesta formal del presupuesto de egresos para el ejercicio fiscal 2025.',
    url: '/files/Presupuesto 2025/9. PROYECTO DE PRESUPUESTO DE EGRESOS.pdf'
  },
  {
    nombre: '10. Información Adicional al Proyecto de Presupuesto de Egresos',
    descripcion: 'Documentación complementaria que sustenta el Proyecto de Presupuesto de Egresos.',
    url: '/files/Presupuesto 2025/10. INF ADICIONAL AL PROYECTO DE PRESUPUESTO DE EGRESOS.pdf'
  },
  {
    nombre: '11. Presupuesto de Egresos',
    descripcion: 'Documento final aprobado que establece el presupuesto de egresos para el ejercicio fiscal 2025.',
    url: '/files/Presupuesto 2025/11. PRESUPUESTO DE EGRESOS.pdf'
  },
  {
    nombre: '12. Acta de Aprobación del Presupuesto de Egresos',
    descripcion: 'Documento oficial que certifica la aprobación del Presupuesto de Egresos.',
    url: '/files/Presupuesto 2025/12. ACTA DE APROBACION DEL PRESUPUESTO DE EGRESOS.pdf'
  },
  {
    nombre: '13. Calendario de Egresos Base Mensual',
    descripcion: 'Programación mensual de los egresos proyectados para el ejercicio fiscal 2025.',
    url: '/files/Presupuesto 2025/13. CALENDARIO DE EGRESOS BASE MENSUAL.pdf'
  },
  {
    nombre: '14. Evaluación del Desempeño más Reciente',
    descripcion: 'Resultados de la evaluación más reciente del desempeño presupuestario.',
    url: '/files/Presupuesto 2025/14. EVALUACION DEL DESEMPEÑO MAS RECIENTE.pdf'
  },
  {
    nombre: '15. Presupuesto Ciudadano 2025',
    descripcion: 'Versión ciudadana del presupuesto, presentada de manera clara y accesible.',
    url: '/files/Presupuesto 2025/15. PRESUPUESTO CIUDADANO 2025.pdf'
  },
  {
    nombre: '16. Presupuesto de Egresos (Datos Abiertos)',
    descripcion: 'Versión del presupuesto de egresos en formato de datos abiertos.',
    url: '/files/Presupuesto 2025/16. PRESUPUESTO DE EGRESOS (DATOS ABIERTOS).pdf'
  }
])
</script>
