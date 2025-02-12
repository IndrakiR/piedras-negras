import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    // Get the current component instance
    const currentInstance = nuxtApp.vueApp._instance
    if (currentInstance) {
      // Emit the page-ready event
      setTimeout(() => {
        currentInstance.emit('page-ready')
      }, 100)
    }
  })
})
