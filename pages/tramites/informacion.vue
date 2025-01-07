<template>
  <div>
    <BannerSection
      title="Información de Trámites y Servicios"
      subtitle="Gestiona tus trámites municipales de manera eficiente y transparente en Piedras Negras"
      :cards="[
        {
          icon: 'fas fa-file-alt',
          title: 'Documentación Clara',
          description: 'Información detallada sobre requisitos y procesos'
        },
        {
          icon: 'fas fa-clock',
          title: 'Tiempos de Respuesta',
          description: 'Conoce los plazos de resolución para cada trámite'
        },
        {
          icon: 'fas fa-hand-holding-usd',
          title: 'Costos y Pagos',
          description: 'Información sobre tarifas y métodos de pago'
        }
      ]"
    />
    
    <div class="container mx-auto px-4 py-12 mt-8">
      <!-- Welcome Section -->
      <div class="max-w-4xl mx-auto">
        <h1 class="text-3xl font-bold text-[#611232] text-center mb-4">
          Bienvenida/o a la Información sobre Trámites Municipales
        </h1>
        <div class="w-32 h-1 bg-[#611232] mx-auto mb-12"></div>

        <!-- Info Cards -->
        <div class="space-y-6">
          <div class="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4 animate-fade-in">
            <div class="w-12 h-12 rounded-full bg-[#611232]/10 flex items-center justify-center flex-shrink-0">
              <Icon name="material-symbols:info-outline" class="text-[#611232] text-2xl icon-animate" />
            </div>
            <p class="text-gray-700 text-lg leading-relaxed">
              En el presente apartado encontrarás información sobre todos los trámites y servicios que presta el Municipio de Piedras Negras, así como los requisitos para cada uno de ellos.
            </p>
          </div>

          <div class="bg-white rounded-lg shadow-lg p-6 flex items-start space-x-4 animate-scale-in" style="animation-delay: 0.2s;">
            <div class="w-12 h-12 rounded-full bg-[#611232]/10 flex items-center justify-center flex-shrink-0">
              <Icon name="material-symbols:description-outline" class="text-[#611232] text-2xl icon-animate" />
            </div>
            <p class="text-gray-700 text-lg leading-relaxed">
              Para ello hemos creado un listado de fichas informativas, las cuales están diseñadas para simplificar y agilizar tus trámites al seleccionar una ficha que contiene todos los requisitos a cumplir.
            </p>
          </div>

          <div class="text-center animate-bounce-in" style="animation-delay: 0.4s;">
            <p class="text-2xl font-semibold text-[#611232]">
              ¡Ahora es más fácil cumplir con todo!
            </p>
          </div>
        </div>

        <!-- Trámites List -->
        <div class="mt-16 space-y-6">
          <!-- Alberca Olímpica -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden animate-slide-in" style="animation-delay: 0.6s;">
            <div class="bg-gray-50 p-4">
              <h3 class="text-xl font-semibold text-[#611232]">Alberca Olímpica</h3>
            </div>
            <div class="p-4">
              <button class="w-full text-left hover:bg-[#611232]/5 p-4 rounded-lg transition-colors duration-300 flex items-center justify-between group button-hover">
                <span class="text-gray-700">IMPARTICIÓN DE CLASES CON COSTO</span>
                <Icon name="material-symbols:chevron-right" class="text-[#611232] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <!-- Casa de la Cultura -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden animate-slide-in" style="animation-delay: 0.8s;">
            <div class="bg-gray-50 p-4">
              <h3 class="text-xl font-semibold text-[#611232]">Casa de la Cultura</h3>
            </div>
            <div class="divide-y divide-gray-100">
              <button class="w-full text-left hover:bg-[#611232]/5 p-4 transition-colors duration-300 flex items-center justify-between group hover-lift">
                <span class="text-gray-700">CLASES PIANO Y PINTURA CON COSTO</span>
                <Icon name="material-symbols:chevron-right" class="text-[#611232] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button class="w-full text-left hover:bg-[#611232]/5 p-4 transition-colors duration-300 flex items-center justify-between group hover-lift">
                <span class="text-gray-700">IMPARTICIÓN DE TALLERES CLASES Y TALLERES CULTURALES CON COSTO</span>
                <Icon name="material-symbols:chevron-right" class="text-[#611232] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button class="w-full text-left hover:bg-[#611232]/5 p-4 transition-colors duration-300 flex items-center justify-between group hover-lift">
                <span class="text-gray-700">IMPARTICIÓN DE TALLERES GRATUITOS</span>
                <Icon name="material-symbols:chevron-right" class="text-[#611232] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <!-- Centros Comunitarios -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden animate-slide-in" style="animation-delay: 1s;">
            <div class="bg-gray-50 p-4">
              <h3 class="text-xl font-semibold text-[#611232]">Centros Comunitarios</h3>
            </div>
            <div class="p-4">
              <button class="w-full text-left hover:bg-[#611232]/5 p-4 rounded-lg transition-colors duration-300 flex items-center justify-between group button-hover">
                <span class="text-gray-700">IMPARTICIÓN DE CURSOS GRATUITOS</span>
                <Icon name="material-symbols:chevron-right" class="text-[#611232] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <!-- Dispensarios Médicos -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden animate-slide-in" style="animation-delay: 1.2s;">
            <div class="bg-gray-50 p-4">
              <h3 class="text-xl font-semibold text-[#611232]">Dispensarios Médicos</h3>
            </div>
            <div class="divide-y divide-gray-100">
              <button class="w-full text-left hover:bg-[#611232]/5 p-4 transition-colors duration-300 flex items-center justify-between group hover-lift">
                <span class="text-gray-700">APLICACIÓN GRATUITA DE VACUNA COVID 19</span>
                <Icon name="material-symbols:chevron-right" class="text-[#611232] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button class="w-full text-left hover:bg-[#611232]/5 p-4 transition-colors duration-300 flex items-center justify-between group hover-lift">
                <span class="text-gray-700">CONSULTAS GRATUITAS</span>
                <Icon name="material-symbols:chevron-right" class="text-[#611232] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          <!-- Instancia de la Mujer -->
          <div class="bg-white rounded-lg shadow-lg overflow-hidden animate-slide-in" style="animation-delay: 1.4s;">
            <div class="bg-gray-50 p-4">
              <h3 class="text-xl font-semibold text-[#611232]">Instancia de la Mujer</h3>
            </div>
            <div class="divide-y divide-gray-100">
              <button class="w-full text-left hover:bg-[#611232]/5 p-4 transition-colors duration-300 flex items-center justify-between group hover-lift">
                <span class="text-gray-700">ATENCIONES GRATUITAS PARA LA MUJER</span>
                <Icon name="material-symbols:chevron-right" class="text-[#611232] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button class="w-full text-left hover:bg-[#611232]/5 p-4 transition-colors duration-300 flex items-center justify-between group hover-lift">
                <span class="text-gray-700">IMPARTICIÓN DE CURSOS GRATUITOS PARA LA MUJER</span>
                <Icon name="material-symbols:chevron-right" class="text-[#611232] group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerSection from '~/components/BannerSection.vue'

definePageMeta({
  title: 'Información de Trámites y Servicios'
})
</script>

<style scoped>
.container {
  position: relative;
  z-index: 10;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    transform: scale(1.05);
  }
  70% { transform: scale(0.9); }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* Enhanced hover animations */
@keyframes shine {
  0% {
    background-position: -100% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes glow {
  0% {
    box-shadow: 0 0 5px rgba(97, 18, 50, 0.1);
  }
  50% {
    box-shadow: 0 0 20px rgba(97, 18, 50, 0.2);
  }
  100% {
    box-shadow: 0 0 5px rgba(97, 18, 50, 0.1);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
  opacity: 0;
}

.animate-scale-in {
  animation: scale-in 0.6s ease-out forwards;
  opacity: 0;
}

.animate-slide-in {
  animation: slide-in 0.6s ease-out forwards;
  opacity: 0;
}

.animate-bounce-in {
  animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  opacity: 0;
}

/* Enhanced hover effects */
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 10px 25px rgba(97, 18, 50, 0.15);
  animation: float 2s ease-in-out infinite;
}

.button-hover {
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(97, 18, 50, 0.05) 50%,
    transparent 100%
  ) 0 0 / 200% 100%;
}

.button-hover:hover {
  animation: shine 1.5s infinite linear;
  background-color: rgba(97, 18, 50, 0.08);
}

.button-hover:hover .text-gray-700 {
  color: #611232;
  transition: color 0.3s ease;
}

/* Icon animations */
@keyframes icon-pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.icon-animate {
  animation: icon-pulse 2s infinite ease-in-out;
}

/* Card hover effects */
.bg-white {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.bg-white:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(97, 18, 50, 0.1);
}

/* Header hover effects */
.bg-gray-50 {
  transition: all 0.3s ease;
}

.bg-gray-50:hover {
  background: linear-gradient(45deg, #611232 0%, #7a1640 100%);
}

.bg-gray-50:hover h3 {
  color: white;
  transform: translateX(10px);
  transition: all 0.3s ease;
}

/* Button icon hover */
.group:hover .text-[#611232] {
  transform: translateX(5px) scale(1.2);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Glow effect on hover */
.hover-glow:hover {
  animation: glow 2s infinite ease-in-out;
}

/* Gradient text effect */
.gradient-text {
  background: linear-gradient(45deg, #611232, #7a1640);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  transition: all 0.3s ease;
}

.gradient-text:hover {
  opacity: 0.8;
  transform: scale(1.05);
}
</style>