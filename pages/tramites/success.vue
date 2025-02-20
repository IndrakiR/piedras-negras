<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
      <div class="text-center">
        <!-- Success Icon -->
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 class="text-2xl font-bold text-[#611232] mb-4">¡Formulario Enviado!</h2>
        
        <p class="text-gray-600 mb-6">
          Su información ha sido enviada exitosamente. Nos pondremos en contacto con usted pronto.
        </p>

        <!-- Government Logo -->
        <img 
          src="/images/logo-nav.png" 
          alt="Gobierno Municipal de Piedras Negras"
          class="mx-auto h-16 mb-6"
        />

        <!-- Return Button -->
        <NuxtLink 
          to="/tramites" 
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#611232] hover:bg-[#7a1640] transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a Trámites
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
