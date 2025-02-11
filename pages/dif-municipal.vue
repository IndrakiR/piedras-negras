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
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Casa del Adolescente -->
          <div class="group bg-gradient-to-br from-[#611232]/5 to-[#611232]/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
            <div class="relative h-48 bg-[#611232] transition-transform duration-500 ease-in-out group-hover:scale-105">
              <div class="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/10"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ease-out">
                <h3 class="text-2xl font-bold text-white mb-2 group-hover:translate-x-2">Casa del Adolescente</h3>
                <p class="text-white/90 transition-all duration-500 group-hover:translate-x-2">Un espacio seguro para el desarrollo juvenil</p>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <li class="flex items-start gap-3 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:translate-x-1">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <span>Actividades recreativas y culturales</span>
                </li>
                <li class="flex items-start gap-3 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:translate-x-1">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <span>Orientación psicológica</span>
                </li>
                <li class="flex items-start gap-3 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:translate-x-1">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <span>Talleres educativos</span>
                </li>
                <li class="flex items-start gap-3 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:translate-x-1">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <span>Apoyo académico</span>
                </li>
              </ul>
              <div class="mt-6">
                <button class="inline-flex items-center gap-2 px-4 py-2 bg-[#611232] text-white rounded-lg transition-all duration-300 hover:bg-[#7a1741] hover:gap-3 hover:px-5 group">
                  Más información
                  <Icon name="mdi:arrow-right" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          <!-- Centro de Mayores de Edad -->
          <div class="group bg-gradient-to-br from-[#611232]/5 to-[#611232]/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-1">
            <div class="relative h-48 bg-[#611232] transition-transform duration-500 ease-in-out group-hover:scale-105">
              <div class="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/10"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ease-out">
                <h3 class="text-2xl font-bold text-white mb-2 group-hover:translate-x-2">Centro de Mayores de Edad</h3>
                <p class="text-white/90 transition-all duration-500 group-hover:translate-x-2">Cuidando el bienestar de nuestros adultos mayores</p>
              </div>
            </div>
            <div class="p-6">
              <ul class="space-y-3">
                <li class="flex items-start gap-3 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:translate-x-1">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <span>Actividades físicas adaptadas</span>
                </li>
                <li class="flex items-start gap-3 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:translate-x-1">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <span>Talleres de manualidades</span>
                </li>
                <li class="flex items-start gap-3 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:translate-x-1">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <span>Atención médica básica</span>
                </li>
                <li class="flex items-start gap-3 opacity-90 hover:opacity-100 transition-all duration-300 transform hover:translate-x-1">
                  <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <span>Eventos sociales y recreativos</span>
                </li>
              </ul>
              <div class="mt-6">
                <button class="inline-flex items-center gap-2 px-4 py-2 bg-[#611232] text-white rounded-lg transition-all duration-300 hover:bg-[#7a1741] hover:gap-3 hover:px-5 group">
                  Más información
                  <Icon name="mdi:arrow-right" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

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
                    Servicios de Podología
                  </h3>
                  <p class="text-gray-600">Atención podológica especializada para adultos mayores y personas con diabetes</p>
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
                  <p class="text-gray-600">Oportunidades laborales para adultos mayores como empacadores voluntarios</p>
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
        <h2 class="text-3xl font-bold text-[#611232] text-center mb-12">Información de Contacto</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Horarios -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-[#611232] mb-4">Horarios de Atención</h3>
            <p class="text-gray-600">Lunes a Viernes: 8:00 AM - 4:00 PM</p>
            <p class="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p>
          </div>

          <!-- Ubicación -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-[#611232] mb-4">Ubicación</h3>
            <p class="text-gray-600">Calle Principal #123</p>
            <p class="text-gray-600">Piedras Negras, Coahuila</p>
          </div>

          <!-- Teléfonos y Redes Sociales -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-[#611232] mb-4">Contacto</h3>
            <div class="space-y-2">
              <p class="text-gray-600">Tel: (878) 123-4567</p>
              <p class="text-gray-600">Emergencias: (878) 765-4321</p>
              <div class="pt-3">
                <a href="https://www.facebook.com/share/15jUWVyKeP/?mibextid=wwXIfr" 
                   target="_blank"
                   class="inline-flex items-center text-[#1877f2] hover:text-[#0d65d9] transition-colors gap-2"
                   title="Síguenos en Facebook">
                  <Icon name="mdi:facebook" size="24" />
                  <span>Síguenos en Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'

definePageMeta({})
</script>