<template>
  <div>
    <BannerV2
      title="Distribución de Participaciones"
      subtitle="Transparencia en la distribución de recursos federales y municipales"
      :cards="[
        {
          icon: 'fas fa-chart-pie',
          title: 'Participaciones',
          description: 'Distribución de recursos federales y estatales'
        },
        {
          icon: 'fas fa-hand-holding-usd',
          title: 'Aportaciones',
          description: 'Fondos y aportaciones para el desarrollo municipal'
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Indicadores',
          description: 'Métricas y estadísticas de distribución'
        }
      ]"
    />

    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Participaciones Federales -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:bank" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Participaciones Federales</h3>
          <p class="text-gray-600 mb-4">Información sobre la distribución de recursos federales al municipio.</p>
          <NuxtLink to="/transparencia/participaciones/federales" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver detalles →
          </NuxtLink>
        </div>

        <!-- Participaciones Estatales -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:office-building" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Participaciones Estatales</h3>
          <p class="text-gray-600 mb-4">Consulta la distribución de recursos provenientes del estado.</p>
          <NuxtLink to="/transparencia/participaciones/estatales" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver detalles →
          </NuxtLink>
        </div>

        <!-- Reportes e Indicadores -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:chart-bar" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Reportes e Indicadores</h3>
          <p class="text-gray-600 mb-4">Análisis y estadísticas de la distribución de recursos.</p>
          <NuxtLink to="/transparencia/participaciones/reportes" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver reportes →
          </NuxtLink>
        </div>
      </div>

      <!-- Documentos de Participaciones -->
      <div class="mt-12">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">Documentos de Participaciones</h2>
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <ul class="space-y-4">
            <li v-for="(doc, index) in documentos" :key="index" class="flex items-center">
              <div class="text-[#611232] mr-3">
                <Icon name="mdi:file-document" class="w-6 h-6" />
              </div>
              <span class="text-gray-900">{{ doc.nombre }}</span>
              <NuxtLink :to="doc.url" class="ml-auto text-[#611232] hover:text-[#4D0E28] font-medium">
                Descargar →
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'

const documentos = ref([
  {
    nombre: 'Informe de Participaciones Federales 2024',
    url: '/transparencia/participaciones/documentos/federales-2024'
  },
  {
    nombre: 'Informe de Participaciones Estatales 2024',
    url: '/transparencia/participaciones/documentos/estatales-2024'
  },
  {
    nombre: 'Reporte Trimestral de Distribución Q4 2023',
    url: '/transparencia/participaciones/documentos/reporte-q4-2023'
  },
  {
    nombre: 'Calendario de Ministraciones 2024',
    url: '/transparencia/participaciones/documentos/calendario-2024'
  }
])
</script>
