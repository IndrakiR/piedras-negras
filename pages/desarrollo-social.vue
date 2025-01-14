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
