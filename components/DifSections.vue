<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Casa del Adolescente -->
        <div class="bg-gradient-to-br from-[#611232]/5 to-[#611232]/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div class="relative h-48 bg-[#611232]">
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-2xl font-bold text-white mb-2">Casa del Adolescente</h3>
              <p class="text-white/90">Un espacio seguro para el desarrollo juvenil</p>
            </div>
          </div>
          <div class="p-6">
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1" />
                <span>Actividades recreativas y culturales</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1" />
                <span>Orientación psicológica</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1" />
                <span>Talleres educativos</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1" />
                <span>Apoyo académico</span>
              </li>
            </ul>
            <div class="mt-6">
              <button class="inline-flex items-center gap-2 px-4 py-2 bg-[#611232] text-white rounded-lg hover:bg-[#7a1741] transition-colors">
                Más información
                <Icon name="mdi:arrow-right" class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <!-- Centro de Mayores de Edad -->
        <div class="bg-gradient-to-br from-[#611232]/5 to-[#611232]/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
          <div class="relative h-48 bg-[#611232]">
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-2xl font-bold text-white mb-2">Centro de Mayores de Edad</h3>
              <p class="text-white/90">Cuidando el bienestar de nuestros adultos mayores</p>
            </div>
          </div>
          <div class="p-6">
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1" />
                <span>Actividades físicas adaptadas</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1" />
                <span>Talleres de manualidades</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1" />
                <span>Atención médica básica</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="mdi:check-circle" class="w-5 h-5 text-[#611232] mt-1" />
                <span>Eventos sociales y recreativos</span>
              </li>
            </ul>
            <div class="mt-6">
              <button class="inline-flex items-center gap-2 px-4 py-2 bg-[#611232] text-white rounded-lg hover:bg-[#7a1741] transition-colors">
                Más información
                <Icon name="mdi:arrow-right" class="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
definePageMeta({})
</script>
