<template>
  <!-- 
    Un contenedor con relación de aspecto 16:9.
    Usamos la clase "aspect-video" de Tailwind (equivale a aspect-ratio: 16/9).
    O si prefieres, puedes usar el padding-bottom hack.
  -->
  <section class="relative w-full bg-black aspect-video">
    <!-- 
      En Nuxt 3, usar <client-only> para evitar errores de SSR 
      (el iframe de YouTube requiere 'window').
    -->
    <client-only>
      <iframe
        class="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/amm80lJWIXE?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=amm80lJWIXE"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </client-only>
  </section>
</template>

<script setup>
// No se requiere ningún script adicional
</script>

<style scoped>
/* 
  object-fit: cover no está totalmente soportado en iframes,
  pero lo dejamos para futuros navegadores.
*/
iframe {
  object-fit: cover;
}
</style>
