<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Banner Principal -->
    <BannerV2
      title="DIF Municipal Piedras Negras"
      subtitle="Trabajando por el bienestar de las familias piedranegrenses"
      :cards="[
        {
          icon: 'material-symbols:restaurant',
          title: 'Asistencia Social',
          description: 'Apoyo integral a personas y familias vulnerables'
        },
        {
          icon: 'material-symbols:family-restroom',
          title: 'Programas Familiares',
          description: 'Fortaleciendo los lazos familiares'
        },
        {
          icon: 'material-symbols:volunteer-activism',
          title: 'Voluntariado',
          description: 'Únete a nuestra labor social'
        }
      ]"
    />

    <!-- Secciones del DIF -->
    <DifSections />

    <!-- Sección de Documentos -->
    <section class="py-16 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-4xl font-bold text-[#611232] mb-4">Documentos Disponibles</h2>
          <p class="text-gray-600 text-lg">Accede a información importante y documentos oficiales del DIF Municipal</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Documento 1 -->
          <a href="/files/dif/ACTIVIDADES DE ADULTO MAYOR.pdf" target="_blank" 
             class="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div class="absolute top-0 right-0 bg-[#611232] text-white px-4 py-2 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity">
              Ver PDF
            </div>
            <div class="p-6">
              <div class="flex items-start space-x-4">
                <div class="bg-[#611232]/10 rounded-lg p-3">
                  <span class="text-3xl">📄</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#611232] mb-2 group-hover:text-[#7a1741] transition-colors">
                    Actividades de Adulto Mayor
                  </h3>
                  <p class="text-gray-600">Programa completo de actividades recreativas y culturales para adultos mayores</p>
                </div>
              </div>
            </div>
          </a>

          <!-- Documento 2 -->
          <a href="/files/dif/CREDENCIAL DE DISCAPACIDAD.pdf" target="_blank" 
             class="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div class="absolute top-0 right-0 bg-[#611232] text-white px-4 py-2 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity">
              Ver PDF
            </div>
            <div class="p-6">
              <div class="flex items-start space-x-4">
                <div class="bg-[#611232]/10 rounded-lg p-3">
                  <span class="text-3xl">📄</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#611232] mb-2 group-hover:text-[#7a1741] transition-colors">
                    Credencial de Discapacidad
                  </h3>
                  <p class="text-gray-600">Requisitos y proceso para obtener la credencial oficial de discapacidad</p>
                </div>
              </div>
            </div>
          </a>

          <!-- Documento 3 -->
          <a href="/files/dif/DESCUENTO EN EL PASAJE.pdf" target="_blank" 
             class="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div class="absolute top-0 right-0 bg-[#611232] text-white px-4 py-2 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity">
              Ver PDF
            </div>
            <div class="p-6">
              <div class="flex items-start space-x-4">
                <div class="bg-[#611232]/10 rounded-lg p-3">
                  <span class="text-3xl">📄</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#611232] mb-2 group-hover:text-[#7a1741] transition-colors">
                    Descuento en el Pasaje
                  </h3>
                  <p class="text-gray-600">Información sobre beneficios y descuentos en transporte público</p>
                </div>
              </div>
            </div>
          </a>

          <!-- Documento 4 -->
          <a href="/files/dif/PODOLOGIA.pdf" target="_blank" 
             class="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div class="absolute top-0 right-0 bg-[#611232] text-white px-4 py-2 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity">
              Ver PDF
            </div>
            <div class="p-6">
              <div class="flex items-start space-x-4">
                <div class="bg-[#611232]/10 rounded-lg p-3">
                  <span class="text-3xl">📄</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#611232] mb-2 group-hover:text-[#7a1741] transition-colors">
                    Podología
                  </h3>
                  <p class="text-gray-600">Servicios de podología disponibles en el DIF Municipal</p>
                </div>
              </div>
            </div>
          </a>

          <!-- Documento 5 -->
          <a href="/files/dif/PROGRAMA DE EMPACADORES.pdf" target="_blank" 
             class="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div class="absolute top-0 right-0 bg-[#611232] text-white px-4 py-2 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity">
              Ver PDF
            </div>
            <div class="p-6">
              <div class="flex items-start space-x-4">
                <div class="bg-[#611232]/10 rounded-lg p-3">
                  <span class="text-3xl">📄</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#611232] mb-2 group-hover:text-[#7a1741] transition-colors">
                    Programa de Empacadores
                  </h3>
                  <p class="text-gray-600">Información sobre el programa de empacadores voluntarios</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Sección de Información de Contacto -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-[#611232] mb-4">Contacto DIF Municipal</h2>
          <p class="text-gray-600 text-lg mb-8">Estamos aquí para ayudarte. No dudes en contactarnos.</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <!-- Teléfono -->
            <div class="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
              <div class="bg-[#611232]/10 p-4 rounded-full mb-4">
                <Icon name="material-symbols:phone-enabled" size="32" class="text-[#611232]" />
              </div>
              <h3 class="text-xl font-semibold text-[#611232] mb-2">Teléfono</h3>
              <p class="text-gray-600">878 782 6666</p>
            </div>
            
            <!-- Dirección -->
            <div class="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
              <div class="bg-[#611232]/10 p-4 rounded-full mb-4">
                <Icon name="material-symbols:location-on" size="32" class="text-[#611232]" />
              </div>
              <h3 class="text-xl font-semibold text-[#611232] mb-2">Dirección</h3>
              <p class="text-gray-600">Av. 16 De Septiembre</p>
            </div>
            
            <!-- Horario -->
            <div class="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
              <div class="bg-[#611232]/10 p-4 rounded-full mb-4">
                <Icon name="material-symbols:schedule" size="32" class="text-[#611232]" />
              </div>
              <h3 class="text-xl font-semibold text-[#611232] mb-2">Horario</h3>
              <p class="text-gray-600">Lunes a Viernes</p>
              <p class="text-gray-600">8:00 – 16:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'
import DifSections from '~/components/DifSections.vue'
</script>