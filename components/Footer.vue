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
              <Icon name="simple-icons:x" size="20" class="text-[#8A2623]" />
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
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <Icon name="material-symbols:location-on" size="20" class="text-[#8A2623] mt-1" />
              <a 
                href="https://www.google.com/maps/place/Presidencia+Municipal/@28.7072193,-100.5302036,17z/data=!4m15!1m8!3m7!1s0x865f8bf4f4851ee7:0x16cb2a5979f4ddfc!2sAv+16+de+Septiembre,+Piedras+Negras,+Coah.!3b1!8m2!3d28.7056852!4d-100.5332434!16s%2Fg%2F1tvq4k7d!3m5!1s0x865f8c0a695e3609:0xcc7480e495f51050!8m2!3d28.7080661!4d-100.5284742!16s%2Fg%2F11bbrpjy7b?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-gray-700 hover:text-[#8A2623] transition-colors"
              >
                Av. 16 De Septiembre
              </a>
            </div>
            <div class="flex items-start gap-2">
              <Icon name="material-symbols:phone-enabled" size="20" class="text-[#8A2623] mt-1" />
              <a 
                href="tel:8787826666" 
                class="text-gray-700 hover:text-[#8A2623] transition-colors"
              >
                878 782 6666
              </a>
            </div>
            <div class="flex items-start gap-2">
              <Icon name="material-symbols:calendar-month" size="20" class="text-[#8A2623] mt-1" />
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
              <a href="https://www.simaspiedrasnegras.gob.mx/" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-[#8A2623] transition-colors">
                Simas Piedras Negras
              </a>
            </li>
            <li>
              <a href="http://www2.icai.org.mx/ipo/dependencia.php?dep=84" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-[#8A2623] transition-colors">
                Icai
              </a>
            </li>
            <li>
              <a href="https://www.gob.mx/sre" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-[#8A2623] transition-colors">
                Sre
              </a>
            </li>
            <li>
              <a href="https://indexcoahuila.org.mx/" target="_blank" rel="noopener noreferrer" class="text-gray-700 hover:text-[#8A2623] transition-colors">
                Index
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Separador y Copyright -->
      <div class="border-t border-gray-200 mt-8 pt-4 text-center">
        <p class="text-gray-500 text-sm">
          Copyright 2024 R. Ayuntamiento de Piedras Negras – <NuxtLink to="/aviso-de-privacidad" class="hover:text-[#8A2623] transition-colors">Aviso de Privacidad</NuxtLink>
        </p>
      </div>
    </div>
  </footer>
</template>