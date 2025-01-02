<template>
  <div>
    <BannerSection
      title="Transparencia"
      subtitle="Comprometidos con la rendición de cuentas y el acceso a la información pública"
      :cards="[
        {
          icon: 'fas fa-file-alt',
          title: 'Información Pública',
          description: 'Accede a documentos e informes oficiales'
        },
        {
          icon: 'fas fa-chart-line',
          title: 'Indicadores de Gestión',
          description: 'Resultados y métricas de desempeño'
        },
        {
          icon: 'fas fa-coins',
          title: 'Recursos Públicos',
          description: 'Información sobre el ejercicio del gasto'
        }
      ]"
    />

    <div class="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Transparencia</h1>
        <p class="text-lg text-gray-600">
          Acceso a la información pública del municipio de Piedras Negras
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Information Card -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="heroicons:document-text" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Documentos Públicos</h3>
          <p class="text-gray-600 mb-4">
            Accede a documentos oficiales, reportes y registros públicos del municipio.
          </p>
          <NuxtLink to="#" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver documentos →
          </NuxtLink>
        </div>

        <!-- Budget Card -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="heroicons:currency-dollar" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Presupuesto y Finanzas</h3>
          <p class="text-gray-600 mb-4">
            Información sobre el presupuesto municipal y su ejercicio.
          </p>
          <NuxtLink to="#" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver información financiera →
          </NuxtLink>
        </div>

        <!-- Contracts Card -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="heroicons:clipboard-document-list" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Contratos y Licitaciones</h3>
          <p class="text-gray-600 mb-4">
            Consulta información sobre contratos y procesos de licitación.
          </p>
          <NuxtLink to="#" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver contratos →
          </NuxtLink>
        </div>

        <!-- Programs Card -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="heroicons:rocket-launch" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Programas y Servicios</h3>
          <p class="text-gray-600 mb-4">
            Información sobre programas y servicios municipales.
          </p>
          <NuxtLink to="#" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver programas →
          </NuxtLink>
        </div>

        <!-- Reports Card -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="heroicons:chart-bar" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Informes y Estadísticas</h3>
          <p class="text-gray-600 mb-4">
            Reportes, estadísticas y datos sobre la gestión municipal.
          </p>
          <NuxtLink to="#" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver informes →
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BannerSection from '~/components/BannerSection.vue'
import { ref } from 'vue'

definePageMeta({
  title: 'Transparencia',
  description: 'Portal de transparencia del municipio de Piedras Negras'
})
</script>
