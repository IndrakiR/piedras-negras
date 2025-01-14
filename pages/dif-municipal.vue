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

    <!-- Sección de Servicios -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-[#611232] text-center mb-12">Nuestros Servicios</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Servicio 1 -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-[#611232] mb-4">Asistencia Alimentaria</h3>
            <p class="text-gray-600">Programas de apoyo alimentario para familias en situación vulnerable.</p>
          </div>

          <!-- Servicio 2 -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-[#611232] mb-4">Atención Psicológica</h3>
            <p class="text-gray-600">Servicios de orientación y apoyo psicológico para individuos y familias.</p>
          </div>

          <!-- Servicio 3 -->
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-semibold text-[#611232] mb-4">Adultos Mayores</h3>
            <p class="text-gray-600">Programas especiales para el bienestar de nuestros adultos mayores.</p>
          </div>
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

          <!-- Teléfonos -->
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-xl font-semibold text-[#611232] mb-4">Teléfonos</h3>
            <p class="text-gray-600">Tel: (878) 123-4567</p>
            <p class="text-gray-600">Emergencias: (878) 765-4321</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'

definePageMeta({
  middleware: ['inicio']
})
</script>
