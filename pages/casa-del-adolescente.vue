<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Banner Principal -->
    <BannerV2
      title="Casa del Adolescente"
      subtitle="Un espacio seguro para el desarrollo juvenil"
      :cards="[
        {
          icon: 'material-symbols:psychology',
          title: 'Apoyo Psicológico',
          description: 'Orientación y acompañamiento profesional'
        },
        {
          icon: 'material-symbols:school',
          title: 'Talleres Educativos',
          description: 'Desarrollo de habilidades y conocimientos'
        },
        {
          icon: 'material-symbols:sports-basketball',
          title: 'Actividades Recreativas',
          description: 'Deportes y actividades culturales'
        }
      ]"
    />

    <!-- Contenido Principal -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold text-[#611232] mb-8 text-center">Plan de Trabajo</h2>
          <p class="text-gray-600 text-lg text-center mb-12">Conoce el proceso para recibir atención en nuestra Casa del Adolescente</p>
          
          <div class="space-y-6">
            <!-- Paso 1: Registro -->
            <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
              <div class="flex items-start gap-4">
                <div class="bg-[#611232]/10 p-4 rounded-full">
                  <span class="text-2xl font-bold text-[#611232]">2</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#611232] mb-2">Registro de datos y documentación del adolescente</h3>
                  <p class="text-gray-600">Documentos requeridos:</p>
                  <ul class="list-disc list-inside text-gray-600 mt-2 space-y-1">
                    <li>Acta de nacimiento</li>
                    <li>CURP</li>
                    <li>Diagnóstico (si cuenta con él)</li>
                    <li>INE del madre, padre o tutor</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Paso 2: Entrevista -->
            <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
              <div class="flex items-start gap-4">
                <div class="bg-[#611232]/10 p-4 rounded-full">
                  <span class="text-2xl font-bold text-[#611232]">3</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#611232] mb-2">Entrevista con padre, madre o tutor del adolescente</h3>
                  <ul class="list-disc list-inside text-gray-600 mt-2">
                    <li>Recolección de datos</li>
                    <li>Canalizar a profesional o profesionales</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Paso 3: Agendar -->
            <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
              <div class="flex items-start gap-4">
                <div class="bg-[#611232]/10 p-4 rounded-full">
                  <span class="text-2xl font-bold text-[#611232]">4</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#611232] mb-2">Agendar cita</h3>
                  <p class="text-gray-600">Tutor elige horarios y días convenientes disponibles</p>
                </div>
              </div>
            </div>

            <!-- Paso 4: Primera Cita -->
            <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
              <div class="flex items-start gap-4">
                <div class="bg-[#611232]/10 p-4 rounded-full">
                  <span class="text-2xl font-bold text-[#611232]">5</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#611232] mb-2">Primer cita con el profesional</h3>
                  <p class="text-gray-600">Inicio de elaboración de expediente con documentos e información proporcionada por parte del tutor</p>
                </div>
              </div>
            </div>

            <!-- Paso 5: Seguimiento -->
            <div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6">
              <div class="flex items-start gap-4">
                <div class="bg-[#611232]/10 p-4 rounded-full">
                  <span class="text-2xl font-bold text-[#611232]">6</span>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#611232] mb-2">Seguimiento</h3>
                  <p class="text-gray-600">Seguimiento continuo del caso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Servicios y Funciones -->
    <section class="py-16 bg-gradient-to-b from-white to-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-4xl font-bold text-[#611232] mb-8 text-center">Servicios y Funciones</h2>
          <p class="text-gray-600 text-lg text-center mb-12">Ofrecemos una atención integral para el desarrollo de los adolescentes</p>

          <!-- Servicios Principales -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <!-- Pedagógico -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div class="flex flex-col items-center text-center">
                <div class="bg-[#611232]/10 p-4 rounded-full mb-4">
                  <Icon name="material-symbols:school" size="32" class="text-[#611232]" />
                </div>
                <h3 class="text-xl font-semibold text-[#611232] mb-2">Pedagógico</h3>
                <p class="text-gray-600">Apoyo educativo y desarrollo de habilidades académicas</p>
              </div>
            </div>

            <!-- Psicológico -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div class="flex flex-col items-center text-center">
                <div class="bg-[#611232]/10 p-4 rounded-full mb-4">
                  <Icon name="material-symbols:psychology" size="32" class="text-[#611232]" />
                </div>
                <h3 class="text-xl font-semibold text-[#611232] mb-2">Psicológico</h3>
                <p class="text-gray-600">Atención y orientación psicológica profesional</p>
              </div>
            </div>

            <!-- Médico -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div class="flex flex-col items-center text-center">
                <div class="bg-[#611232]/10 p-4 rounded-full mb-4">
                  <Icon name="material-symbols:medical-services" size="32" class="text-[#611232]" />
                </div>
                <h3 class="text-xl font-semibold text-[#611232] mb-2">Médico</h3>
                <p class="text-gray-600">Servicios básicos de salud y prevención</p>
              </div>
            </div>

            <!-- Nutrición -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div class="flex flex-col items-center text-center">
                <div class="bg-[#611232]/10 p-4 rounded-full mb-4">
                  <Icon name="material-symbols:nutrition" size="32" class="text-[#611232]" />
                </div>
                <h3 class="text-xl font-semibold text-[#611232] mb-2">Nutrición</h3>
                <p class="text-gray-600">Orientación nutricional y hábitos saludables</p>
              </div>
            </div>

            <!-- Convivencia Social -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div class="flex flex-col items-center text-center">
                <div class="bg-[#611232]/10 p-4 rounded-full mb-4">
                  <Icon name="material-symbols:groups" size="32" class="text-[#611232]" />
                </div>
                <h3 class="text-xl font-semibold text-[#611232] mb-2">Convivencia Social</h3>
                <p class="text-gray-600">Actividades grupales y desarrollo de habilidades sociales</p>
              </div>
            </div>
          </div>

          <!-- Talleres -->
          <h3 class="text-2xl font-bold text-[#611232] mb-6 text-center">Talleres</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Guitarra -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div class="flex items-center gap-4">
                <div class="bg-[#611232]/10 p-4 rounded-full">
                  <Icon name="material-symbols:music-note" size="32" class="text-[#611232]" />
                </div>
                <div>
                  <h4 class="text-xl font-semibold text-[#611232] mb-1">Taller de Guitarra</h4>
                  <p class="text-gray-600">Aprende a tocar guitarra con nuestros instructores</p>
                </div>
              </div>
            </div>

            <!-- Dibujo -->
            <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div class="flex items-center gap-4">
                <div class="bg-[#611232]/10 p-4 rounded-full">
                  <Icon name="material-symbols:brush" size="32" class="text-[#611232]" />
                </div>
                <div>
                  <h4 class="text-xl font-semibold text-[#611232] mb-1">Taller de Dibujo</h4>
                  <p class="text-gray-600">Desarrolla tu creatividad a través del arte</p>
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
          <p class="text-gray-600 text-lg mb-8">Estamos aquí para apoyarte en tu desarrollo personal</p>
          
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

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import BannerV2 from '~/components/BannerV2.vue'
import Footer from '~/components/Footer.vue'
</script>