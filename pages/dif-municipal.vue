<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Banner Principal -->
    <BannerV2
      title="DIF Municipal Piedras Negras"
      subtitle="Trabajando por el bienestar de las familias piedranegrenses"
      :cards="[
        {
          icon: 'material-symbols:restaurant',
          title: 'Asistencia Social',
          description: 'Apoyo integral a personas y familias vulnerables'
        },
        {
          icon: 'material-symbols:school',
          title: 'Desarrollo Familiar',
          description: 'Fortalecimiento de vínculos familiares'
        },
        {
          icon: 'material-symbols:monitor-heart',
          title: 'Atención Ciudadana',
          description: 'Servicios y programas de ayuda'
        }
      ]"
    />

    <!-- Sección de Programas Destacados -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-[#611232] text-center mb-12">Programas Destacados</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Programa 1 -->
          <div class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <div class="p-6 text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-[#611232]/10 rounded-full flex items-center justify-center">
                <Icon name="material-symbols:restaurant" size="32" class="text-[#611232]" />
              </div>
              <h3 class="text-lg font-semibold mb-2">Asistencia Alimentaria</h3>
              <p class="text-gray-600 text-sm">Apoyo alimentario a familias vulnerables</p>
            </div>
          </div>

          <!-- Programa 2 -->
          <div class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <div class="p-6 text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-[#611232]/10 rounded-full flex items-center justify-center">
                <Icon name="material-symbols:school" size="32" class="text-[#611232]" />
              </div>
              <h3 class="text-lg font-semibold mb-2">Educación</h3>
              <p class="text-gray-600 text-sm">Programas educativos y becas</p>
            </div>
          </div>

          <!-- Programa 3 -->
          <div class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <div class="p-6 text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-[#611232]/10 rounded-full flex items-center justify-center">
                <Icon name="material-symbols:monitor-heart" size="32" class="text-[#611232]" />
              </div>
              <h3 class="text-lg font-semibold mb-2">Salud y Bienestar</h3>
              <p class="text-gray-600 text-sm">Atención médica y psicológica</p>
            </div>
          </div>

          <!-- Programa 4 -->
          <div class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <div class="p-6 text-center">
              <div class="w-16 h-16 mx-auto mb-4 bg-[#611232]/10 rounded-full flex items-center justify-center">
                <Icon name="material-symbols:group" size="32" class="text-[#611232]" />
              </div>
              <h3 class="text-lg font-semibold mb-2">Adultos Mayores</h3>
              <p class="text-gray-600 text-sm">Programas especiales para la tercera edad</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Servicios -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-[#611232] text-center mb-12">Nuestros Servicios</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Servicio 1 -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-[#611232]/10 rounded-lg flex items-center justify-center mr-4">
                <Icon name="material-symbols:volunteer-activism" size="24" class="text-[#611232]" />
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Asistencia Social</h3>
                <p class="text-gray-600">Apoyo integral a personas y familias en situación vulnerable</p>
              </div>
            </div>
            <ul class="space-y-2 ml-16">
              <li class="text-gray-600 text-sm">• Apoyo económico</li>
              <li class="text-gray-600 text-sm">• Despensas</li>
              <li class="text-gray-600 text-sm">• Ayuda médica</li>
            </ul>
          </div>

          <!-- Servicio 2 -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-[#611232]/10 rounded-lg flex items-center justify-center mr-4">
                <Icon name="material-symbols:psychology" size="24" class="text-[#611232]" />
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Atención Psicológica</h3>
                <p class="text-gray-600">Servicios de apoyo emocional y familiar</p>
              </div>
            </div>
            <ul class="space-y-2 ml-16">
              <li class="text-gray-600 text-sm">• Terapia individual</li>
              <li class="text-gray-600 text-sm">• Terapia familiar</li>
              <li class="text-gray-600 text-sm">• Orientación juvenil</li>
            </ul>
          </div>

          <!-- Servicio 3 -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <div class="flex items-start mb-4">
              <div class="w-12 h-12 bg-[#611232]/10 rounded-lg flex items-center justify-center mr-4">
                <Icon name="material-symbols:apartment" size="24" class="text-[#611232]" />
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Desarrollo Comunitario</h3>
                <p class="text-gray-600">Programas para el desarrollo integral de la comunidad</p>
              </div>
            </div>
            <ul class="space-y-2 ml-16">
              <li class="text-gray-600 text-sm">• Talleres formativos</li>
              <li class="text-gray-600 text-sm">• Actividades recreativas</li>
              <li class="text-gray-600 text-sm">• Eventos comunitarios</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Sección de Contacto -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-[#611232] text-center mb-12">Información de Contacto</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Horarios -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <div class="flex items-center justify-center mb-4">
              <div class="w-12 h-12 bg-[#611232]/10 rounded-full flex items-center justify-center">
                <Icon name="material-symbols:schedule" class="text-2xl text-[#611232]" />
              </div>
            </div>
            <h3 class="text-xl font-semibold text-center mb-4">Horarios de Atención</h3>
            <div class="space-y-2 text-center">
              <p class="text-gray-600">Lunes a Viernes</p>
              <p class="font-semibold">9:00 AM - 5:00 PM</p>
              <p class="text-gray-600">Sábados</p>
              <p class="font-semibold">9:00 AM - 1:00 PM</p>
            </div>
          </div>

          <!-- Ubicación -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <div class="flex items-center justify-center mb-4">
              <div class="w-12 h-12 bg-[#611232]/10 rounded-full flex items-center justify-center">
                <Icon name="material-symbols:location-on" class="text-2xl text-[#611232]" />
              </div>
            </div>
            <h3 class="text-xl font-semibold text-center mb-4">Ubicación</h3>
            <div class="space-y-2 text-center">
              <p class="text-gray-600">[Dirección del DIF Municipal]</p>
              <p class="text-gray-600">Piedras Negras, Coahuila</p>
            </div>
          </div>

          <!-- Teléfonos -->
          <div class="bg-white rounded-xl shadow-md p-6">
            <div class="flex items-center justify-center mb-4">
              <div class="w-12 h-12 bg-[#611232]/10 rounded-full flex items-center justify-center">
                <Icon name="material-symbols:call" class="text-2xl text-[#611232]" />
              </div>
            </div>
            <h3 class="text-xl font-semibold text-center mb-4">Teléfonos</h3>
            <div class="space-y-2 text-center">
              <p class="text-gray-600">Atención Ciudadana</p>
              <p class="font-semibold">[Número de teléfono]</p>
              <p class="text-gray-600">Emergencias</p>
              <p class="font-semibold">[Número de emergencias]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'
</script>