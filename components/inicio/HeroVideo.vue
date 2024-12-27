<template>
    <!-- Hero Section with Video Placeholder -->
    <section class="relative h-screen bg-gradient-to-br from-[#611232] to-gray-900">
      <!-- Gradiente radial -->
      <div
        class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"
      ></div>
  
      <!-- Ícono grande de "Play" usando IconNuxt -->
      <div class="absolute inset-0 flex items-center justify-center">
        <Icon
          name="mdi:play-circle" 
          class="text-white/80 opacity-75"
          :size="128"
        />
      </div>
  
      <!-- Text Overlay -->
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <h1 class="text-6xl font-bold text-white mb-4">Piedras Negras</h1>
        <p class="text-xl text-white/90">Tu Ciudad, Tu Hogar</p>
      </div>
  
      <!-- Bottom Gradient -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent"></div>
    </section>
  </template>
  
  <script setup>
  // Con IconNuxt, por lo general NO es necesario importar nada aquí 
  // si ya configuraste el módulo en tu nuxt.config.
  </script>
  
  <style scoped>
  /* Estilos específicos del Hero Video */
  </style>
  