<template>
  <!-- 
    Un contenedor con relación de aspecto 16:9.
    Usamos la clase "aspect-video" de Tailwind (equivale a aspect-ratio: 16/9).
    O si prefieres, puedes usar el padding-bottom hack.
  -->
  <section class="relative w-full bg-gradient-to-br from-[#611232] via-[#9D2449] to-[#9D2449]/70 aspect-video overflow-hidden">
    <!-- Background pattern overlay -->
    <div class="absolute inset-0 opacity-5 bg-grid-pattern"></div>
    <!-- Video container -->
    <client-only>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white rounded-lg p-3 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden">
        <iframe
          class="w-full h-full rounded-md scale-[1.35]"
          src="https://www.youtube.com/embed/amm80lJWIXE?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=amm80lJWIXE"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
          style="object-fit: cover;"
        ></iframe>
      </div>
    </client-only>
  </section>
</template>

<script setup>
// No se requiere ningún script adicional
</script>

<style scoped>
iframe {
  object-fit: cover;
  transform-origin: center;
}

.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Add a subtle border animation on hover */
.hover\:scale-\[1\.02\]:hover {
  border: 2px solid rgba(157, 36, 73, 0.3);
}
</style>
