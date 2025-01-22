<template>
  <div>
    <BannerSection
      title="Registro de Proveedores"
      subtitle="Forma parte de nuestra red de proveedores municipales y participa en licitaciones públicas"
      :cards="[
        {
          icon: 'fas fa-building',
          title: 'Registro Empresarial',
          description: 'Proceso simplificado para empresas y personas físicas'
        },
        {
          icon: 'fas fa-file-contract',
          title: 'Documentación',
          description: 'Requisitos y documentos necesarios para el registro'
        },
        {
          icon: 'fas fa-handshake',
          title: 'Oportunidades',
          description: 'Acceso a licitaciones y contratos gubernamentales'
        }
      ]"
    />
    
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-4xl mx-auto">
        <!-- Header with decorative elements -->
        <div class="relative mb-16 text-center">
          <div class="relative">
            <span class="bg-gray-50 px-6 text-2xl text-[#611232] font-semibold tracking-wider uppercase">
              Registro de Proveedores y Contratistas
            </span>
          </div>
          <div class="relative mt-4">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200"></div>
            </div>
          </div>
        </div>

        <!-- Sección Contratista -->
        <div class="bg-white rounded-2xl p-8 mb-8 shadow-lg transition-all duration-300 hover:shadow-xl">
          <h2 class="text-2xl font-medium text-[#611232] mb-2 text-center">CONTRATISTA</h2>
          <p class="text-gray-600 mb-2 text-center">Procedimiento para contratistas.</p>
          <p class="text-gray-600 mb-8 text-sm text-center">
            En base a la Ley de Obras Públicas y Servicios Relacionados con las mismas para el Estado de Coahuila de Zaragoza.
          </p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="text-center group">
              <div class="bg-gray-50 p-6 rounded-xl transition-all duration-300 group-hover:shadow-md">
                <h3 class="text-xl font-medium mb-4 text-gray-800">Persona Física</h3>
                <NuxtLink
                  to="/tramites/registro-contratista"
                  class="inline-block w-full bg-[#611232] text-white py-3 px-6 rounded-xl hover:bg-[#4d0e28] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-opacity-50 transition-all duration-300 uppercase text-sm font-medium tracking-wider"
                >
                  Iniciar Registro
                </NuxtLink>
              </div>
            </div>
            <div class="text-center group">
              <div class="bg-gray-50 p-6 rounded-xl transition-all duration-300 group-hover:shadow-md">
                <h3 class="text-xl font-medium mb-4 text-gray-800">Persona Moral</h3>
                <NuxtLink
                  to="/tramites/registro-contratista"
                  class="inline-block w-full bg-[#611232] text-white py-3 px-6 rounded-xl hover:bg-[#4d0e28] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-opacity-50 transition-all duration-300 uppercase text-sm font-medium tracking-wider"
                >
                  Iniciar Registro
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Sección Proveedor -->
        <div class="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
          <h2 class="text-2xl font-medium text-[#611232] mb-2 text-center">PROVEEDOR</h2>
          <p class="text-gray-600 mb-2 text-center">Procedimiento para proveedores.</p>
          <p class="text-gray-600 mb-8 text-sm text-center">
            En base a la Ley de Adquisiciones, Arrendamientos y Contratación de Servicios para el Estado de Coahuila de Zaragoza.
          </p>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="text-center group">
              <div class="bg-gray-50 p-6 rounded-xl transition-all duration-300 group-hover:shadow-md">
                <h3 class="text-xl font-medium mb-4 text-gray-800">Persona Física</h3>
                <NuxtLink
                  to="/tramites/registro-proveedor"
                  class="inline-block w-full bg-[#611232] text-white py-3 px-6 rounded-xl hover:bg-[#4d0e28] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-opacity-50 transition-all duration-300 uppercase text-sm font-medium tracking-wider"
                >
                  Iniciar Registro
                </NuxtLink>
              </div>
            </div>
            <div class="text-center group">
              <div class="bg-gray-50 p-6 rounded-xl transition-all duration-300 group-hover:shadow-md">
                <h3 class="text-xl font-medium mb-4 text-gray-800">Persona Moral</h3>
                <NuxtLink
                  to="/tramites/registro-proveedor"
                  class="inline-block w-full bg-[#611232] text-white py-3 px-6 rounded-xl hover:bg-[#4d0e28] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-opacity-50 transition-all duration-300 uppercase text-sm font-medium tracking-wider"
                >
                  Iniciar Registro
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerSection from '~/components/BannerSection.vue'
import { ref } from 'vue'
definePageMeta({
  title: 'Registro de Proveedores y Contratistas'
})

const nuevaSolicitud = (tipo, personeria) => {
  // Aquí se implementará la lógica para iniciar una nueva solicitud
  console.log('Nueva solicitud:', { tipo, personeria })
}
</script>
