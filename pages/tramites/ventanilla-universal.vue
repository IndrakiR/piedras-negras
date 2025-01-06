<template>
  <div>
    <BannerSection
      title="Ventanilla Universal"
      subtitle="Realiza todos tus trámites municipales en un solo lugar de manera rápida y eficiente"
      :cards="[
        {
          icon: 'fas fa-window-restore',
          title: 'Ventanilla Única',
          description: 'Todos los trámites centralizados en un solo punto'
        },
        {
          icon: 'fas fa-tasks',
          title: 'Gestión Eficiente',
          description: 'Seguimiento en tiempo real de tus trámites'
        },
        {
          icon: 'fas fa-user-check',
          title: 'Atención Personalizada',
          description: 'Personal capacitado para asesorarte en cada paso'
        }
      ]"
    />
    
    <div class="max-w-5xl mx-auto px-4 py-12">
      <div class="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div class="p-8">
          <div class="space-y-6">
            <template v-for="(section, index) in sections" :key="index">
              <div 
                class="border border-gray-100 rounded-xl overflow-hidden hover:border-[#611232] transition-all duration-200 hover:shadow-md"
                :class="{ 'shadow-md': openSections[section.id] }"
              >
                <button 
                  @click="toggleSection(section.id)" 
                  class="w-full flex justify-between items-center px-8 py-5 bg-white hover:bg-gray-50 transition-colors group"
                >
                  <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-lg bg-[#611232]/5 flex items-center justify-center group-hover:bg-[#611232]/10 transition-colors">
                      <Icon :name="section.icon" class="w-6 h-6 text-[#611232]" />
                    </div>
                    <span class="text-gray-700 font-medium text-lg group-hover:text-[#611232] transition-colors">{{ section.title }}</span>
                  </div>
                  <Icon 
                    name="heroicons:chevron-down" 
                    class="w-5 h-5 text-[#611232] transform transition-transform duration-300"
                    :class="{ 'rotate-180': openSections[section.id] }"
                  />
                </button>
                
                <div v-show="openSections[section.id]" class="animate-slideDown">
                  <div class="px-8 py-6 bg-gray-50">
                    <div class="grid gap-6 md:grid-cols-2">
                      <div 
                        v-for="tramite in section.tramites" 
                        :key="tramite.id" 
                        class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 hover:border-[#611232]/30"
                      >
                        <h3 class="font-medium text-[#611232] text-lg mb-2">{{ tramite.nombre }}</h3>
                        <p class="text-gray-600 text-sm mb-6">{{ tramite.descripcion }}</p>
                        <div class="flex items-center justify-between">
                          <span class="text-sm text-gray-500 flex items-center">
                            <Icon name="heroicons:clock" class="w-4 h-4 mr-1.5" />
                            {{ tramite.tiempo }}
                          </span>
                          <NuxtLink 
                            :to="tramite.link" 
                            class="text-[#611232] hover:text-[#4D0E28] text-sm font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#611232]/5 transition-colors"
                          >
                            Ver detalles
                            <Icon name="heroicons:arrow-right" class="w-4 h-4" />
                          </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerSection from '~/components/BannerSection.vue'
import { ref, computed } from 'vue'

definePageMeta({
  title: 'Trámites Ventanilla Universal'
})

const sections = ref([
  {
    id: 'desarrollo-urbano',
    title: 'Desarrollo Urbano',
    icon: 'heroicons:building-library',
    tramites: [
      {
        id: 1,
        nombre: 'Permiso de Construcción',
        descripcion: 'Permiso para construir un edificio',
        tiempo: '5 días hábiles',
        link: '/tramites/desarrollo-urbano/permiso-de-construccion'
      },
      {
        id: 2,
        nombre: 'Licencia de Uso de Suelo',
        descripcion: 'Licencia para utilizar un terreno',
        tiempo: '10 días hábiles',
        link: '/tramites/desarrollo-urbano/licencia-de-uso-de-suelo'
      }
    ]
  },
  {
    id: 'comercio',
    title: 'Comercio',
    icon: 'heroicons:shopping-cart',
    tramites: [
      {
        id: 1,
        nombre: 'Registro de Comerciante',
        descripcion: 'Registro para comerciantes',
        tiempo: '3 días hábiles',
        link: '/tramites/comercio/registro-de-comerciante'
      },
      {
        id: 2,
        nombre: 'Licencia de Funcionamiento',
        descripcion: 'Licencia para funcionar un negocio',
        tiempo: '5 días hábiles',
        link: '/tramites/comercio/licencia-de-funcionamiento'
      }
    ]
  },
  {
    id: 'proteccion-civil',
    title: 'Protección Civil',
    icon: 'heroicons:shield-check',
    tramites: [
      {
        id: 1,
        nombre: 'Permiso de Uso de Espacios Públicos',
        descripcion: 'Permiso para utilizar espacios públicos',
        tiempo: '5 días hábiles',
        link: '/tramites/proteccion-civil/permiso-de-uso-de-espacios-publicos'
      },
      {
        id: 2,
        nombre: 'Registro de Voluntarios',
        descripcion: 'Registro para voluntarios',
        tiempo: '3 días hábiles',
        link: '/tramites/proteccion-civil/registro-de-voluntarios'
      }
    ]
  },
  {
    id: 'medio-ambiente',
    title: 'Medio Ambiente',
    icon: 'mingcute:tree-2-line',
    tramites: [
      {
        id: 1,
        nombre: 'Permiso de Tala de Árboles',
        descripcion: 'Permiso para talar árboles',
        tiempo: '10 días hábiles',
        link: '/tramites/medio-ambiente/permiso-de-tala-de-arboles'
      },
      {
        id: 2,
        nombre: 'Registro de Actividades Ambientales',
        descripcion: 'Registro de actividades ambientales',
        tiempo: '5 días hábiles',
        link: '/tramites/medio-ambiente/registro-de-actividades-ambientales'
      }
    ]
  }
])

const openSections = ref({
  'desarrollo-urbano': false,
  'comercio': false,
  'proteccion-civil': false,
  'medio-ambiente': false
})

const toggleSection = (sectionId) => {
  openSections.value[sectionId] = !openSections.value[sectionId]
}
</script>

<style scoped>
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.animate-slideDown {
  animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: top;
  backface-visibility: hidden;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Smooth transitions */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Card hover effects */
.hover\:shadow-md:hover {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05);
}

/* Focus styles for better accessibility */
.focus\:ring:focus {
  outline: none;
  box-shadow: 0 0 0 2px #611232;
}
</style>
