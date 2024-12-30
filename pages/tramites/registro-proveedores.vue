<template>
  <div class="w-full bg-gray-50">
    <div class="container mx-auto px-4 py-16">
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

        <!-- Sección Continuar Solicitud -->
        <div class="bg-white rounded-2xl p-8 mb-8 shadow-lg transition-all duration-300 hover:shadow-xl">
          <h2 class="text-2xl font-medium text-[#611232] mb-4 text-center">Continuar solicitud</h2>
          <p class="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            Ingresa los siguientes datos para validar tu información y que puedas agregar los archivos que te faltan.
          </p>
          <form @submit.prevent="continuarSolicitud" class="max-w-md mx-auto">
            <div class="space-y-4">
              <div class="group">
                <input
                  type="text"
                  id="folio"
                  v-model="folio"
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#611232] focus:ring-2 focus:ring-[#611232] focus:ring-opacity-20 transition-all duration-300 bg-gray-50"
                  placeholder="# de folio"
                />
              </div>
              <div class="group">
                <input
                  type="tel"
                  id="celular"
                  v-model="celular"
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#611232] focus:ring-2 focus:ring-[#611232] focus:ring-opacity-20 transition-all duration-300 bg-gray-50"
                  placeholder="# de celular"
                />
              </div>
              <button
                type="submit"
                class="w-full bg-[#611232] text-white py-3 px-6 rounded-xl hover:bg-[#4d0e28] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-opacity-50 transition-all duration-300 uppercase text-sm font-medium tracking-wider"
              >
                Continuar solicitud
              </button>
            </div>
          </form>
          <p class="text-gray-500 mt-6 text-center text-sm">
            O genera una nueva solicitud abajo
          </p>
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
                <button
                  @click="nuevaSolicitud('contratista', 'fisica')"
                  class="bg-[#611232] text-white py-3 px-6 rounded-xl hover:bg-[#4d0e28] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-opacity-50 transition-all duration-300 uppercase text-sm font-medium tracking-wider"
                >
                  Realizar solicitud
                </button>
              </div>
            </div>
            <div class="text-center group">
              <div class="bg-gray-50 p-6 rounded-xl transition-all duration-300 group-hover:shadow-md">
                <h3 class="text-xl font-medium mb-4 text-gray-800">Persona Moral</h3>
                <button
                  @click="nuevaSolicitud('contratista', 'moral')"
                  class="bg-[#611232] text-white py-3 px-6 rounded-xl hover:bg-[#4d0e28] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-opacity-50 transition-all duration-300 uppercase text-sm font-medium tracking-wider"
                >
                  Realizar solicitud
                </button>
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
                <button
                  @click="nuevaSolicitud('proveedor', 'fisica')"
                  class="bg-[#611232] text-white py-3 px-6 rounded-xl hover:bg-[#4d0e28] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-opacity-50 transition-all duration-300 uppercase text-sm font-medium tracking-wider"
                >
                  Realizar solicitud
                </button>
              </div>
            </div>
            <div class="text-center group">
              <div class="bg-gray-50 p-6 rounded-xl transition-all duration-300 group-hover:shadow-md">
                <h3 class="text-xl font-medium mb-4 text-gray-800">Persona Moral</h3>
                <button
                  @click="nuevaSolicitud('proveedor', 'moral')"
                  class="bg-[#611232] text-white py-3 px-6 rounded-xl hover:bg-[#4d0e28] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-opacity-50 transition-all duration-300 uppercase text-sm font-medium tracking-wider"
                >
                  Realizar solicitud
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
definePageMeta({
  title: 'Registro de Proveedores y Contratistas'
})

const folio = ref('')
const celular = ref('')

const continuarSolicitud = () => {
  // Aquí se implementará la lógica para validar y continuar con la solicitud
  console.log('Continuar solicitud:', { folio: folio.value, celular: celular.value })
}

const nuevaSolicitud = (tipo, personeria) => {
  // Aquí se implementará la lógica para iniciar una nueva solicitud
  console.log('Nueva solicitud:', { tipo, personeria })
}
</script>
