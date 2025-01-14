export default defineNuxtRouteMiddleware((to) => {
  // Get the environment variable value
  const showInicio = import.meta.env.VITE_SHOW_INICIO === 'true'
  
  const protectedRoutes = [
    '/bienestar',
    '/desarrollo-social',
    '/dif-municipal',
    '/sections/obras-servicios-publicos',
    '/sections/denuncia-funcionario',
    '/sections/dispensario-medico'
  ]

  // Check if the current route is protected and access is not allowed
  if (protectedRoutes.includes(to.path) && !showInicio) {
    console.log('Access denied: VITE_SHOW_INICIO is false')
    return navigateTo('/')
  }
})
