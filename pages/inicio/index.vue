<template>
  <div class="w-full">
    <!-- Componente separado: HeroVideo -->
    <HeroVideo />

    <!-- Componente separado: TuNuevaHistoria -->
    <TuNuevaHistoria />

    <!-- Componente separado: SeccionesHome -->
    <SeccionesHome />

    <!-- Componente NUEVO: UltimasNoticias -->
    <UltimasNoticias />
  </div>
</template>

<script setup>
/**
 * Importamos los componentes separados.
 * Ajusta las rutas según la ubicación real de tus archivos .vue
 */
import HeroVideo from '~/components/inicio/HeroVideo.vue'
import TuNuevaHistoria from '~/components/inicio/TuNuevaHistoria.vue'
import SeccionesHome from '~/components/inicio/SeccionesHome.vue'
import UltimasNoticias from '~/components/inicio/UltimasNoticias.vue'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>

