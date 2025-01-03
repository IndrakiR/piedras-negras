<template>
  <footer class="bg-gray-100 py-12">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Grilla: 3 columnas en desktop, 1 en móvil -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <!-- Columna 1: Solo logo (centrado) + Redes -->
        <div class="flex flex-col items-center">
          <img
            src="/images/logo_footer.png"
            alt="Logo Piedras Negras"
            class="h-40 w-auto mb-4"  <!-- LOGO MÁS GRANDE -->
          <!-- Íconos redes sociales -->
          <div class="flex space-x-6">
            <a href="https://www.facebook.com/piedrasnegras/" target="_blank" rel="noopener noreferrer" class="hover:opacity-75 transition-opacity">
              <Icon name="fa-brands:facebook-f" size="20" class="text-[#8A2623]" />
            </a>
            <a href="https://x.com/MpioPNegras" target="_blank" rel="noopener noreferrer" class="hover:opacity-75 transition-opacity">
              <Icon name="fa-brands:twitter" size="20" class="text-[#8A2623]" />
            </a>
            <a href="https://www.instagram.com/mpiopnegras/" target="_blank" rel="noopener noreferrer" class="hover:opacity-75 transition-opacity">
              <Icon name="fa-brands:instagram" size="20" class="text-[#8A2623]" />
            </a>
            <a href="https://www.youtube.com/@jacoborodriguezgzz" target="_blank" rel="noopener noreferrer" class="hover:opacity-75 transition-opacity">
              <Icon name="fa-brands:youtube" size="20" class="text-[#8A2623]" />
            </a>
          </div>
        </div>
        
        <!-- Columna 2: Contacto -->
        <div>
          <h3 class="text-[#8A2623] font-semibold text-xl mb-4">Contacto</h3>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <Icon name="material-symbols:location-on" size="24" class="text-[#8A2623]" />
              <span class="text-gray-700">Av. 16 De Septiembre</span>
            </div>
            <div class="flex items-center gap-3">
              <Icon name="material-symbols:phone-enabled" size="24" class="text-[#8A2623]" />
              <span class="text-gray-700">878 782 6666</span>
            </div>
            <div class="flex items-start gap-3">
              <Icon name="material-symbols:calendar-month" size="24" class="text-[#8A2623]" />
              <div>
                <p class="font-medium text-gray-700">Horario de Atención:</p>
                <p class="text-gray-700">Lunes a Viernes</p>
                <p class="text-gray-700">8:00 – 16:00</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Columna 3: Páginas Relacionadas -->
        <div>
          <h3 class="text-[#8A2623] font-semibold text-xl mb-4">Páginas Relacionadas</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="#" class="text-gray-700 hover:text-[#8A2623] transition-colors">
                Simas Piedras Negras
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-gray-700 hover:text-[#8A2623] transition-colors">
                Icai
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-gray-700 hover:text-[#8A2623] transition-colors">
                Sre
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="#" class="text-gray-700 hover:text-[#8A2623] transition-colors">
                Index
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Separador y Copyright -->
      <div class="border-t border-gray-200 mt-8 pt-4 text-center">
        <p class="text-gray-500 text-sm">
          Copyright 2024 R. Ayuntamiento de Piedras Negras – Aviso de Privacidad
        </p>
      </div>
    </div>
  </footer>
</template>