<template>
  <div class="min-h-screen bg-gray-50 py-12">
    <div class="container mx-auto px-4">
      <!-- Encabezado -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          <span class="bg-gradient-to-r from-[#611232] to-[#8B1C4C] bg-clip-text text-transparent">
            Bienestar Social
          </span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Programas y servicios para el bienestar de nuestra comunidad
        </p>
      </div>

      <!-- Contenido principal -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Tarjeta de Programas Sociales -->
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#611232]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Programas Sociales</h3>
          <p class="text-gray-600">Accede a información sobre nuestros programas de apoyo social y desarrollo comunitario.</p>
        </div>

        <!-- Tarjeta de Servicios de Salud -->
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#611232]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Servicios de Salud</h3>
          <p class="text-gray-600">Conoce los servicios de salud disponibles para la comunidad y cómo acceder a ellos.</p>
        </div>

        <!-- Tarjeta de Educación -->
        <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 bg-[#611232]/10 rounded-lg mb-4 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#611232]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Educación</h3>
          <p class="text-gray-600">Descubre las oportunidades educativas y programas de capacitación disponibles.</p>
        </div>
      </div>

      <!-- Sección de Contacto -->
      <div class="mt-16 bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6 text-center">¿Necesitas más información?</h2>
        <div class="max-w-xl mx-auto">
          <p class="text-gray-600 text-center mb-6">
            Estamos aquí para ayudarte. Contáctanos para obtener más información sobre nuestros programas y servicios.
          </p>
          <div class="flex justify-center">
            <a href="#" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#611232] to-[#8B1C4C] text-white font-medium rounded-lg hover:shadow-lg transition-shadow">
              Contactar
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
