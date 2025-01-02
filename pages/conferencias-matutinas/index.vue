<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 class="text-4xl font-semibold text-[#611232] text-center mb-2">Conferencias Matutinas</h2>
      <p class="text-base text-gray-500 text-center mb-8">Mantente informado con las últimas actualizaciones del gobierno municipal</p>
      
      <div class="bg-white rounded-xl shadow-md p-8 mb-8">
        <div class="relative pb-[56.25%] h-0">
          <iframe
            src="https://www.youtube.com/embed/btZkPCzmZ_g?autoplay=1&mute=1"
            class="absolute top-0 left-0 w-full h-full rounded-lg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="text-center mb-12">
        <p class="text-xl text-gray-600 font-medium flex items-center justify-center">
          <Icon name="mingcute:time-line" class="w-6 h-6 mr-2 text-[#611232]" />
          Lunes a Viernes de 8 a 10am
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// The script section is empty as we don't need any reactive state for this simple embed
</script>

<style scoped>
/* No additional styles needed as we're using Tailwind classes */
</style>
