import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // Si existe una posición guardada (cuando usamos navegación hacia atrás/adelante)
    if (savedPosition) {
      return savedPosition
    }

    // Si tenemos un hash en la URL, scroll hacia ese elemento
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    // Por defecto, scroll al inicio de la página
    return { top: 0, behavior: 'smooth' }
  }
}
