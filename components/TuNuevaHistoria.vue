<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Fondo principal con gradiente y patrones -->
    <div class="absolute inset-0 bg-gradient-to-br from-[#faf6f7] to-white">
      <!-- Patrón de puntos -->
      <div class="absolute inset-0" 
           style="background-image: radial-gradient(#611232 0.5px, transparent 0.5px);
                  background-size: 24px 24px;
                  opacity: 0.05;">
      </div>
      
      <!-- Formas geométricas flotantes -->
      <div class="absolute top-0 right-0">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
          <circle cx="400" cy="200" r="300" fill="#611232" fill-opacity="0.05" class="animate-float"/>
          <path d="M500 300C500 414.926 414.926 500 300 500C185.074 500 100 414.926 100 300" 
                stroke="#8B1C4C" stroke-opacity="0.08" stroke-width="2" class="animate-draw"/>
        </svg>
      </div>
      
      <div class="absolute bottom-0 left-0">
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none">
          <circle cx="100" cy="400" r="250" fill="#8B1C4C" fill-opacity="0.05" class="animate-float-delay"/>
          <rect x="50" y="50" width="200" height="200" rx="20" 
                stroke="#611232" stroke-opacity="0.08" stroke-width="2" 
                fill="none" class="animate-draw-delay"/>
        </svg>
      </div>
    </div>

    <!-- Contenido principal -->
    <div class="relative z-10">
      <section class="py-20 px-4">
        <div class="container mx-auto">
          <!-- Encabezado con efecto de resaltado -->
          <h2 class="text-7xl font-bold text-center mb-20 relative">
            <span class="bg-gradient-to-r from-[#611232] to-[#8B1C4C] bg-clip-text text-transparent">
              Tu Nueva Historia
            </span>
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 
                        bg-gradient-to-r from-[#611232] to-[#8B1C4C] rounded-full"></div>
          </h2>

          <!-- Contenedor de tarjetas -->
          <div class="flex flex-wrap justify-center items-center gap-20">
            <!-- Tarjeta izquierda -->
            <div class="flex flex-col items-center">
              <div class="w-72 h-72 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl 
                          border border-[#611232]/10 mb-8 
                          flex items-center justify-center relative overflow-hidden group
                          hover:border-[#611232]/30 transition-all duration-500">
                <!-- Efecto de hover con gradiente -->
                <div class="absolute inset-0 bg-gradient-to-br from-[#611232]/5 to-[#8B1C4C]/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <!-- Círculos decorativos con contorno -->
                <div class="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#611232]/30 border border-[#611232]/40"></div>
                <div class="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#8B1C4C]/30 border border-[#611232]/40"></div>
                <div class="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#8B1C4C]/30 border border-[#611232]/40"></div>
                <div class="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#611232]/30 border border-[#611232]/40"></div>
                
                <Icon 
                  name="lucide:file-text" 
                  class="w-24 h-24 text-[#611232]/80 group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <button class="px-10 py-4 bg-gradient-to-r from-[#611232] to-[#8B1C4C] 
                           text-white text-lg font-medium rounded-xl
                           shadow-lg hover:shadow-xl hover:shadow-[#611232]/20 
                           transition-all duration-300 transform hover:-translate-y-0.5
                           relative overflow-hidden group">
                <span class="relative z-10">Generar Reporte</span>
                <!-- Efecto de brillo en hover -->
                <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                            translate-x-[-100%] group-hover:translate-x-[100%] 
                            transition-transform duration-1000"></div>
              </button>
            </div>

            <!-- Separador elegante -->
            <div class="h-72 hidden md:flex items-center">
              <div class="w-[1px] h-full bg-gradient-to-b from-transparent via-[#611232]/20 to-transparent"></div>
            </div>

            <!-- Tarjeta derecha -->
            <div class="flex flex-col items-center">
              <div class="w-72 h-72 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl 
                          border border-[#611232]/10 mb-8 
                          flex items-center justify-center relative overflow-hidden group
                          hover:border-[#611232]/30 transition-all duration-500">
                <div class="absolute inset-0 bg-gradient-to-br from-[#611232]/5 to-[#8B1C4C]/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <!-- Círculos decorativos con contorno -->
                <div class="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#611232]/30 border border-[#611232]/40"></div>
                <div class="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#8B1C4C]/30 border border-[#611232]/40"></div>
                <div class="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#8B1C4C]/30 border border-[#611232]/40"></div>
                <div class="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#611232]/30 border border-[#611232]/40"></div>

                <Icon 
                  name="lucide:download" 
                  class="w-24 h-24 text-[#611232]/80 group-hover:scale-110 transition-all duration-500"
                />
              </div>
              <button class="px-10 py-4 bg-gradient-to-r from-[#611232] to-[#8B1C4C] 
                           text-white text-lg font-medium rounded-xl
                           shadow-lg hover:shadow-xl hover:shadow-[#611232]/20 
                           transition-all duration-300 transform hover:-translate-y-0.5
                           relative overflow-hidden group">
                <span class="relative z-10">Descargar Reporte</span>
                <!-- Efecto de brillo en hover -->
                <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                            translate-x-[-100%] group-hover:translate-x-[100%] 
                            transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
// No se requiere lógica adicional
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-10px, -10px); }
}

@keyframes float-delay {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(10px, 10px); }
}

@keyframes draw {
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
}

.animate-float {
  animation: float 20s ease-in-out infinite;
}

.animate-float-delay {
  animation: float-delay 25s ease-in-out infinite;
}

.animate-draw {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 4s ease-out forwards;
}

.animate-draw-delay {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 4s ease-out 1s forwards;
}
</style>