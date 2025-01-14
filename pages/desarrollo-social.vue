<template>
  <div>
    <BannerSection
      title="Desarrollo Social"
      subtitle="Trabajando por el bienestar y progreso de nuestra comunidad"
      :cards="[
        {
          icon: 'fas fa-hands-helping',
          title: 'Programas Sociales',
          description: 'Apoyos y beneficios para las familias'
        },
        {
          icon: 'fas fa-users',
          title: 'Atención Ciudadana',
          description: 'Servicios y asistencia a la comunidad'
        },
        {
          icon: 'fas fa-home',
          title: 'Mejora tu Hogar',
          description: 'Programas de mejoramiento de vivienda'
        }
      ]"
    />

    <div class="container mx-auto px-4 py-8">
      <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Programas Sociales -->
            <div class="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div class="w-24 h-24 mx-auto mb-6">
                <Icon name="mingcute:group-line" class="w-full h-full text-[#611232]" />
              </div>
              <h3 class="text-xl font-semibold mb-3">Programas Sociales</h3>
              <p class="text-gray-600">Conoce nuestros programas de apoyo para la comunidad</p>
            </div>

            <!-- Centros Comunitarios -->
            <div class="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div class="w-24 h-24 mx-auto mb-6">
                <Icon name="mingcute:building-4-line" class="w-full h-full text-[#611232]" />
              </div>
              <h3 class="text-xl font-semibold mb-3">Centros Comunitarios</h3>
              <p class="text-gray-600">Espacios dedicados al desarrollo y bienestar social</p>
            </div>

            <!-- Servicios -->
            <div class="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
              <div class="w-24 h-24 mx-auto mb-6">
                <Icon name="mingcute:hand-heart-line" class="w-full h-full text-[#611232]" />
              </div>
              <h3 class="text-xl font-semibold mb-3">Servicios</h3>
              <p class="text-gray-600">Descubre cómo podemos ayudarte</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Documentos Section -->
      <section class="py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Auditorio José Vasconcelos -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="text-[#611232] mb-4">
                <Icon name="mdi:theater" class="w-8 h-8" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Auditorio José Vasconcelos</h3>
              <p class="text-gray-600 mb-4">Información sobre el Auditorio José Vasconcelos.</p>
              <a 
                href="/files/desarrollo-files/AUDITORIO JOSE VASCONCELOS.pdf"
                target="_blank" 
                class="text-[#611232] hover:text-[#4D0E28] font-medium inline-flex items-center"
              >
                Ver documento →
              </a>
            </div>

            <!-- Casa de la Cultura -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="text-[#611232] mb-4">
                <Icon name="mdi:home-variant" class="w-8 h-8" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Casa de la Cultura</h3>
              <p class="text-gray-600 mb-4">Información sobre la Casa de la Cultura.</p>
              <a 
                href="/files/desarrollo-files/CASA DE LA CULTURA inf. PRES.pdf"
                target="_blank" 
                class="text-[#611232] hover:text-[#4D0E28] font-medium inline-flex items-center"
              >
                Ver documento →
              </a>
            </div>

            <!-- Casa de las Artes -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="text-[#611232] mb-4">
                <Icon name="mdi:palette" class="w-8 h-8" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Casa de las Artes</h3>
              <p class="text-gray-600 mb-4">Información sobre la Casa de las Artes.</p>
              <a 
                href="/files/desarrollo-files/CASA DE LAS ARTES.pdf"
                target="_blank" 
                class="text-[#611232] hover:text-[#4D0E28] font-medium inline-flex items-center"
              >
                Ver documento →
              </a>
            </div>

            <!-- Datos de Inscripción -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="text-[#611232] mb-4">
                <Icon name="mdi:clipboard-text" class="w-8 h-8" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Datos de Inscripción</h3>
              <p class="text-gray-600 mb-4">Información sobre datos de inscripción.</p>
              <a 
                href="/files/desarrollo-files/Datos de inscripcion capn DESARROLLO SOCIAL ACTUALIZADO v2.pdf"
                target="_blank" 
                class="text-[#611232] hover:text-[#4D0E28] font-medium inline-flex items-center"
              >
                Ver documento →
              </a>
            </div>

            <!-- Museo del Chapulín -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="text-[#611232] mb-4">
                <Icon name="mdi:museum" class="w-8 h-8" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Museo del Chapulín</h3>
              <p class="text-gray-600 mb-4">Información sobre el Museo del Chapulín.</p>
              <a 
                href="/files/desarrollo-files/Info museo del chapulín.pdf"
                target="_blank" 
                class="text-[#611232] hover:text-[#4D0E28] font-medium inline-flex items-center"
              >
                Ver documento →
              </a>
            </div>

            <!-- Museo de la Frontera -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="text-[#611232] mb-4">
                <Icon name="mdi:bank" class="w-8 h-8" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Museo de la Frontera</h3>
              <p class="text-gray-600 mb-4">Información sobre el Museo de la Frontera.</p>
              <a 
                href="/files/desarrollo-files/MUSEO DE LA FRONTERA.pdf"
                target="_blank" 
                class="text-[#611232] hover:text-[#4D0E28] font-medium inline-flex items-center"
              >
                Ver documento →
              </a>
            </div>

            <!-- Teatro de la Ciudad -->
            <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div class="text-[#611232] mb-4">
                <Icon name="mdi:drama-masks" class="w-8 h-8" />
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Teatro de la Ciudad José Manuel Maldonado</h3>
              <p class="text-gray-600 mb-4">Información sobre el Teatro de la Ciudad.</p>
              <a 
                href="/files/desarrollo-files/TEATRO DE LA CIUDAD JOSE MANUEL MALDONADO MALDONAD1.pdf"
                target="_blank" 
                class="text-[#611232] hover:text-[#4D0E28] font-medium inline-flex items-center"
              >
                Ver documento →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import BannerSection from '~/components/BannerSection.vue'
import { ref } from 'vue'
import { definePageMeta } from '#imports'

definePageMeta({
  title: 'Desarrollo Social',
  layout: 'default',
  middleware: ['inicio']
})
</script>

<style scoped>
/* Add your styles here */
</style>