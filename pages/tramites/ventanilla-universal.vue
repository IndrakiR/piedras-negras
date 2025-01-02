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
    
    <div class="max-w-5xl mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-6 text-[#611232]">Trámites Ventanilla Universal</h1>
      <div class="bg-white rounded-xl shadow-md p-8">
        <p class="text-gray-600 text-lg mb-8">
          Realiza tus trámites de manera eficiente a través de nuestra Ventanilla Universal.
        </p>
        
        <div class="space-y-4">
          <!-- Desarrollo Urbano -->
          <div class="border border-gray-100 rounded-lg overflow-hidden">
            <button @click="toggleSection('desarrolloUrbano')" 
                    class="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 transition-colors">
              <span class="text-[#611232] font-medium text-lg">DESARROLLO URBANO</span>
              <span class="text-[#611232] transform transition-transform duration-200" 
                    :class="{ 'rotate-180': openSections.desarrolloUrbano }">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
            <div v-if="openSections.desarrolloUrbano" 
                 class="px-6 py-4 bg-gray-50 border-t border-gray-100 animate-slideDown">
              <!-- Content for Desarrollo Urbano -->
            </div>
          </div>

          <!-- Ingeniería Vial -->
          <div class="border border-gray-100 rounded-lg overflow-hidden">
            <button @click="toggleSection('ingenieriaVial')" 
                    class="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 transition-colors">
              <span class="text-[#611232] font-medium text-lg">INGENIERÍA VIAL</span>
              <span class="text-[#611232] transform transition-transform duration-200" 
                    :class="{ 'rotate-180': openSections.ingenieriaVial }">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
            <div v-if="openSections.ingenieriaVial" 
                 class="px-6 py-4 bg-gray-50 border-t border-gray-100 animate-slideDown">
              <!-- Content for Ingeniería Vial -->
            </div>
          </div>

          <!-- Ecología e Imagen Urbana -->
          <div class="border border-gray-100 rounded-lg overflow-hidden">
            <button @click="toggleSection('ecologia')" 
                    class="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 transition-colors">
              <span class="text-[#611232] font-medium text-lg">ECOLOGÍA E IMAGEN URBANA</span>
              <span class="text-[#611232] transform transition-transform duration-200" 
                    :class="{ 'rotate-180': openSections.ecologia }">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
            <div v-if="openSections.ecologia" 
                 class="px-6 py-4 bg-gray-50 border-t border-gray-100 animate-slideDown">
              <!-- Content for Ecología e Imagen Urbana -->
            </div>
          </div>

          <!-- Catastro -->
          <div class="border border-gray-100 rounded-lg overflow-hidden">
            <button @click="toggleSection('catastro')" 
                    class="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 transition-colors">
              <span class="text-[#611232] font-medium text-lg">CATASTRO</span>
              <span class="text-[#611232] transform transition-transform duration-200" 
                    :class="{ 'rotate-180': openSections.catastro }">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M19 9l-7 7-7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
            <div v-if="openSections.catastro" 
                 class="px-6 py-4 bg-gray-50 border-t border-gray-100 animate-slideDown">
              <!-- Content for Catastro -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BannerSection from '~/components/BannerSection.vue'
import { ref } from 'vue'

definePageMeta({
  title: 'Trámites Ventanilla Universal'
})

const openSections = ref({
  desarrolloUrbano: false,
  ingenieriaVial: false,
  ecologia: false,
  catastro: false
})

const toggleSection = (section) => {
  openSections.value[section] = !openSections.value[section]
}
</script>

<style scoped>
.animate-slideDown {
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
