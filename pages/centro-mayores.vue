<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Banner Principal -->
    <BannerV2
      title="Centro de Mayores de Edad"
      subtitle="Cuidando el bienestar de nuestros adultos mayores"
      :cards="[
        {
          icon: 'material-symbols:medical-services',
          title: 'Atención Médica',
          description: 'Servicios básicos de salud y seguimiento'
        },
        {
          icon: 'material-symbols:exercise',
          title: 'Actividades Físicas',
          description: 'Ejercicios adaptados para adultos mayores'
        },
        {
          icon: 'material-symbols:groups',
          title: 'Eventos Sociales',
          description: 'Actividades recreativas y de convivencia'
        }
      ]"
    />

    <!-- Estadísticas y Demografía -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-[#611232] mb-8 text-center">Planeación de trabajo</h2>
          
          <!-- Información de Segregación -->
          <div class="bg-white rounded-xl shadow-sm p-8 mb-12">
            <div class="flex flex-col md:flex-row items-center gap-12">
              <!-- Gráfica de Distribución -->
              <div class="w-full md:w-1/2">
                <h3 class="text-xl font-semibold text-[#611232] mb-6 text-center">Distribución por Edad</h3>
                <div class="relative w-72 h-72 mx-auto">
                  <!-- Gráfico de Pastel Mejorado -->
                  <div class="absolute inset-0 rounded-full shadow-lg overflow-hidden">
                    <!-- Sección 60% -->
                    <div class="absolute inset-0 bg-gradient-to-br from-[#611232] to-[#712442]" 
                         style="clip-path: polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%); transform-origin: 50% 50%; transform: rotate(0deg);">
                    </div>
                    <!-- Sección 40% -->
                    <div class="absolute inset-0 bg-gradient-to-br from-[#D4AF37] to-[#C5A028]" 
                         style="clip-path: polygon(50% 50%, 0% 0%, 50% 0%, 50% 100%, 0% 100%); transform-origin: 50% 50%;">
                    </div>
                    <!-- Círculo central para efecto 3D -->
                    <div class="absolute inset-2 bg-white rounded-full shadow-inner"></div>
                  </div>
                  
                  <!-- Porcentajes con mejor posicionamiento -->
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="relative w-full h-full">
                      <!-- 60% -->
                      <div class="absolute top-1/4 right-1/4 transform translate-x-4 -translate-y-2 bg-white/90 px-2 py-1 rounded-lg shadow-sm">
                        <span class="text-[#611232] font-bold text-lg">60%</span>
                      </div>
                      <!-- 40% -->
                      <div class="absolute top-1/4 left-1/4 transform -translate-x-4 -translate-y-2 bg-white/90 px-2 py-1 rounded-lg shadow-sm">
                        <span class="text-[#D4AF37] font-bold text-lg">40%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Leyenda Mejorada -->
                <div class="flex justify-center gap-8 mt-8">
                  <div class="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105">
                    <div class="w-12 h-3 bg-gradient-to-r from-[#611232] to-[#712442] rounded-full shadow-sm"></div>
                    <span class="text-gray-600 group-hover:text-[#611232]">18 a 45 años</span>
                  </div>
                  <div class="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105">
                    <div class="w-12 h-3 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] rounded-full shadow-sm"></div>
                    <span class="text-gray-600 group-hover:text-[#D4AF37]">13 a 17 años</span>
                  </div>
                </div>
              </div>

              <!-- Estadísticas -->
              <div class="w-full md:w-1/2">
                <div class="space-y-6">
                  <div class="bg-gray-50 p-6 rounded-xl">
                    <h4 class="text-lg font-semibold text-[#611232] mb-2">Distribución de Solicitantes</h4>
                    <ul class="space-y-3">
                      <li class="flex items-center gap-2">
                        <Icon name="material-symbols:arrow-right" class="text-[#611232]" />
                        <span class="text-gray-600">25 mayores de edad</span>
                      </li>
                      <li class="flex items-center gap-2">
                        <Icon name="material-symbols:arrow-right" class="text-[#611232]" />
                        <span class="text-gray-600">17 adolescentes</span>
                      </li>
                      <li class="flex items-center gap-2 font-medium">
                        <Icon name="material-symbols:sum" class="text-[#611232]" />
                        <span class="text-gray-700">Total: 42 solicitantes</span>
                      </li>
                    </ul>
                  </div>

                  <div class="bg-[#611232]/5 p-6 rounded-xl">
                    <h4 class="text-lg font-semibold text-[#611232] mb-2">Nota Importante</h4>
                    <p class="text-gray-600">En los primeros días de tu nueva historia nos dimos cuenta que a nuestro centro acudían no solo adolescentes sino mayores de edad, incluso adultos mayores, los cuales los orientamos a acudir al DIF para que sean atendidos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold text-[#611232] mb-8 text-center">Nuestros Servicios</h2>
          
          <!-- Servicios -->
          <div class="space-y-8">
            <!-- Atención Médica -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4">
                <div class="bg-[#611232]/10 p-3 rounded-lg">
                  <Icon name="material-symbols:medical-services" size="32" class="text-[#611232]" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#611232] mb-2">Atención Médica Básica</h3>
                  <p class="text-gray-600">Ofrecemos servicios básicos de salud, incluyendo control de presión arterial, niveles de glucosa y orientación sobre medicamentos. Nuestro personal está capacitado para brindar atención especializada a adultos mayores.</p>
                </div>
              </div>
            </div>

            <!-- Actividades Físicas -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4">
                <div class="bg-[#611232]/10 p-3 rounded-lg">
                  <Icon name="material-symbols:exercise" size="32" class="text-[#611232]" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#611232] mb-2">Actividades Físicas Adaptadas</h3>
                  <p class="text-gray-600">Desarrollamos programas de ejercicios especialmente diseñados para adultos mayores, incluyendo yoga suave, tai chi y ejercicios de bajo impacto que ayudan a mantener la movilidad y el equilibrio.</p>
                </div>
              </div>
            </div>

            <!-- Eventos Sociales -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4">
                <div class="bg-[#611232]/10 p-3 rounded-lg">
                  <Icon name="material-symbols:groups" size="32" class="text-[#611232]" />
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#611232] mb-2">Eventos Sociales y Recreativos</h3>
                  <p class="text-gray-600">Organizamos diversas actividades sociales como talleres de manualidades, juegos de mesa, bailes y celebraciones especiales. Estas actividades fomentan la socialización y mantienen activa la mente de nuestros adultos mayores.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Información de Contacto -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl font-bold text-[#611232] mb-4">Visítanos</h2>
          <p class="text-gray-600 text-lg mb-8">Estamos aquí para cuidar de nuestros adultos mayores</p>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <!-- Teléfono -->
            <div class="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
              <div class="bg-[#611232]/10 p-4 rounded-full mb-4">
                <Icon name="material-symbols:phone-enabled" size="32" class="text-[#611232]" />
              </div>
              <h3 class="text-xl font-semibold text-[#611232] mb-2">Teléfono</h3>
              <p class="text-gray-600">878 782 6666</p>
            </div>
            
            <!-- Dirección -->
            <div class="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
              <div class="bg-[#611232]/10 p-4 rounded-full mb-4">
                <Icon name="material-symbols:location-on" size="32" class="text-[#611232]" />
              </div>
              <h3 class="text-xl font-semibold text-[#611232] mb-2">Dirección</h3>
              <p class="text-gray-600">Av. 16 De Septiembre</p>
            </div>
            
            <!-- Horario -->
            <div class="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300">
              <div class="bg-[#611232]/10 p-4 rounded-full mb-4">
                <Icon name="material-symbols:schedule" size="32" class="text-[#611232]" />
              </div>
              <h3 class="text-xl font-semibold text-[#611232] mb-2">Horario</h3>
              <p class="text-gray-600">Lunes a Viernes</p>
              <p class="text-gray-600">8:00 – 16:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'
import Icon from '~/components/inicio/Icon.vue'
</script>