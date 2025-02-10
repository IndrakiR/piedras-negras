export default defineNuxtRouteMiddleware((to) => {
  const mostrarEnConstruccion = useConstruction()
  
  // Redirigir CUALQUIER ruta a /construccion cuando está activo
  if (mostrarEnConstruccion.value) {
    // Evitamos loop infinito si ya estamos en /construccion
    if (to.path !== '/construccion') {
      return navigateTo('/construccion', { redirectCode: 302 })
    }
    return
  }
})
