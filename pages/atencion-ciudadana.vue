<template>
  <BannerV2
    title="Atención Ciudadana"
    subtitle="Estamos para servirte y atender tus necesidades"
    :cards="[
      {
        icon: 'fas fa-phone',
        title: 'Línea Directa',
        description: 'Comunícate al 878 782 6666 ext. 1250 para atención inmediata'
      },
      {
        icon: 'fab fa-whatsapp',
        title: 'WhatsApp',
        description: 'Escríbenos al 878 154 1512'
      },
      {
        icon: 'fas fa-envelope',
        title: 'Formulario',
        description: 'Llena nuestro formulario en línea'
      }
    ]"
  />
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Formas de Contacto -->
      <div class="mb-16">
        <h2 class="text-3xl text-center mb-12 text-gray-800">Formas De Contacto</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <!-- Línea Directa -->
          <a href="tel:8787826666" class="block">
            <div class="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50 cursor-pointer">
              <div class="w-24 h-24 mx-auto mb-6">
                <Icon name="mingcute:phone-line" class="w-full h-full text-[#611232] transition-transform duration-300 transform group-hover:scale-110" />
              </div>
              <h3 class="text-xl font-semibold mb-3">Línea Directa</h3>
              <p class="text-gray-600 mb-4">Marca desde tu teléfono al</p>
              <p class="text-2xl font-bold text-[#611232]">878 782 6666 ext. 1250</p>
            </div>
          </a>

          <!-- WhatsApp -->
          <a href="https://wa.me/528781541512" target="_blank" rel="noopener noreferrer" class="block">
            <div class="bg-white rounded-xl shadow-sm p-8 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-gray-50 cursor-pointer">
              <div class="w-24 h-24 mx-auto mb-6">
                <Icon name="mingcute:whatsapp-line" class="w-full h-full text-[#611232] transition-transform duration-300 transform group-hover:scale-110" />
              </div>
              <h3 class="text-xl font-semibold mb-3">WhatsApp</h3>
              <p class="text-gray-600 mb-4">Escríbenos al</p>
              <p class="text-2xl font-bold text-[#611232]">878 154 1512</p>
            </div>
          </a>
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
import BannerV2 from '~/components/BannerV2.vue'

definePageMeta({
  layout: 'default'
})
</script>
