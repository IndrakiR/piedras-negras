<template>
  <div>
    <BannerV2
      title="Gaceta Municipal"
      subtitle="Medio oficial de difusión del Gobierno Municipal de Piedras Negras"
      :cards="[
        {
          icon: 'fas fa-newspaper',
          title: 'Publicaciones Oficiales',
          description: 'Accede a reglamentos, acuerdos y disposiciones administrativas'
        },
        {
          icon: 'fas fa-history',
          title: 'Archivo Histórico',
          description: 'Consulta el historial completo de publicaciones'
        },
        {
          icon: 'fas fa-search',
          title: 'Búsqueda Avanzada',
          description: 'Encuentra documentos por fecha o contenido'
        }
      ]"
    />

    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Gacetas Recientes -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:file-document" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Gacetas Recientes</h3>
          <p class="text-gray-600 mb-4">Consulta las últimas publicaciones de la Gaceta Municipal.</p>
          <NuxtLink to="/transparencia/gaceta-municipal/recientes" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver más →
          </NuxtLink>
        </div>

        <!-- Archivo Histórico -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:archive" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Archivo Histórico</h3>
          <p class="text-gray-600 mb-4">Accede al archivo histórico de gacetas municipales.</p>
          <NuxtLink to="/transparencia/gaceta-municipal/archivo" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Ver más →
          </NuxtLink>
        </div>

        <!-- Búsqueda -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div class="text-[#611232] mb-4">
            <Icon name="mdi:magnify" class="w-8 h-8" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Búsqueda</h3>
          <p class="text-gray-600 mb-4">Busca publicaciones específicas por fecha o contenido.</p>
          <NuxtLink to="/transparencia/gaceta-municipal/busqueda" class="text-[#611232] hover:text-[#4D0E28] font-medium">
            Buscar →
          </NuxtLink>
        </div>
      </div>

      <!-- Sección de Últimas Publicaciones -->
      <div class="mt-12">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">Últimas Publicaciones</h2>
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <ul class="space-y-4">
            <li v-for="(doc, index) in documentos" :key="index" class="flex items-center">
              <div class="text-[#611232] mr-3">
                <Icon name="mdi:file-document" class="w-6 h-6" />
              </div>
              <span class="text-gray-900">{{ doc.nombre }}</span>
              <NuxtLink :to="doc.url" class="ml-auto text-[#611232] hover:text-[#4D0E28] font-medium">
                Ver documento →
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
    nombre: 'Gaceta Municipal - Enero 2024',
    url: '/transparencia/gaceta-municipal/2024-01'
  },
  {
    nombre: 'Gaceta Municipal - Diciembre 2023',
    url: '/transparencia/gaceta-municipal/2023-12'
  },
  {
    nombre: 'Gaceta Municipal - Noviembre 2023',
    url: '/transparencia/gaceta-municipal/2023-11'
  }
])
</script>

<style scoped>
/* Estilos adicionales específicos del componente si son necesarios */
</style>
