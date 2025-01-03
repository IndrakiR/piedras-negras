<template>
  <div>
    <BannerV2
      title="Programa Anual de Adquisiciones"
      subtitle="Planificación y transparencia en las compras y contrataciones del municipio"
      :cards="[
        {
          icon: 'fas fa-shopping-cart',
          title: 'Compras Programadas',
          description: 'Plan detallado de adquisiciones del año en curso'
        },
        {
          icon: 'fas fa-file-contract',
          title: 'Licitaciones',
          description: 'Procesos de licitación vigentes y históricos'
        },
        {
          icon: 'fas fa-history',
          title: 'Histórico',
          description: 'Registro histórico de adquisiciones realizadas'
        }
      ]"
    />

    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Programa Actual -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:calendar-check" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Programa Actual</h3>
          <p class="text-gray-600 mb-4">Consulta el programa de adquisiciones vigente para el año en curso.</p>
          <NuxtLink to="/transparencia/adquisiciones/actual" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver programa →
          </NuxtLink>
        </div>

        <!-- Licitaciones -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:gavel" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Licitaciones</h3>
          <p class="text-gray-600 mb-4">Accede a la información sobre licitaciones públicas y sus resultados.</p>
          <NuxtLink to="/transparencia/adquisiciones/licitaciones" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver licitaciones →
          </NuxtLink>
        </div>

        <!-- Histórico de Adquisiciones -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:history" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Histórico de Adquisiciones</h3>
          <p class="text-gray-600 mb-4">Consulta el historial de adquisiciones y contratos realizados.</p>
          <NuxtLink to="/transparencia/adquisiciones/historico" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver historial →
          </NuxtLink>
        </div>
      </div>

      <!-- Documentos del Programa -->
      <div class="mt-12">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">Documentos del Programa</h2>
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
    nombre: 'Programa Anual de Adquisiciones 2024',
    url: '/transparencia/adquisiciones/documentos/programa-2024'
  },
  {
    nombre: 'Convocatorias de Licitación Vigentes',
    url: '/transparencia/adquisiciones/documentos/convocatorias-vigentes'
  },
  {
    nombre: 'Registro de Contratos y Adquisiciones 2023',
    url: '/transparencia/adquisiciones/documentos/registro-2023'
  },
  {
    nombre: 'Manual de Procedimientos de Adquisiciones',
    url: '/transparencia/adquisiciones/documentos/manual-procedimientos'
  }
])
</script>
