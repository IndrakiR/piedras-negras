<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-semibold text-[#611232] mb-4">Atención Ciudadana</h1>
        <p class="text-xl text-gray-600">Estamos para servirte</p>
      </div>

      <!-- Formas de Contacto -->
      <div class="mb-16">
        <h2 class="text-3xl text-center mb-12 text-gray-800">Formas De Contacto</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <!-- Línea Directa -->
          <div class="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
            <div class="w-24 h-24 mx-auto mb-6">
              <Icon name="mingcute:phone-line" class="w-full h-full text-[#611232]" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Línea Directa</h3>
            <p class="text-gray-600 mb-4">Marca desde tu teléfono al</p>
            <p class="text-2xl font-bold text-[#611232]">070</p>
          </div>

          <!-- WhatsApp -->
          <div class="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-shadow">
            <div class="w-24 h-24 mx-auto mb-6">
              <Icon name="mingcute:whatsapp-line" class="w-full h-full text-[#611232]" />
            </div>
            <h3 class="text-xl font-semibold mb-3">WhatsApp</h3>
            <p class="text-gray-600 mb-4">Escríbenos al</p>
            <p class="text-2xl font-bold text-[#611232]">878 119 6958</p>
          </div>
        </div>
      </div>

      <!-- Separador con texto -->
      <div class="text-center mb-12">
        <p class="text-2xl text-gray-600 font-medium">O Contáctanos aquí</p>
      </div>

      <!-- Formulario Component -->
      <AtencionCiudadanaForm />
    </div>
  </section>
</template>

<script setup>
import { definePageMeta } from '#imports'
import AtencionCiudadanaForm from '~/components/AtencionCiudadana/AtencionCiudadana.vue'

definePageMeta({
  layout: 'default'
})
</script>
