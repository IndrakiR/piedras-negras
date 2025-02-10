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
            <DesarrolloUrbanoSection 
              :is-open="openSections['desarrollo-urbano']"
              @toggle="toggleSection('desarrollo-urbano')"
            />
            
            <IngenieriaVialSection 
              :is-open="openSections['ingenieria-vial']"
              @toggle="toggleSection('ingenieria-vial')"
            />

            <EcologiaImagenUrbanaSection 
              :is-open="openSections['ecologia-imagen-urbana']"
              @toggle="toggleSection('ecologia-imagen-urbana')"
            />

            <CatastroSection 
              :is-open="openSections['catastro']"
              @toggle="toggleSection('catastro')"
            />

            <ContraloriaSection 
              :is-open="openSections['contraloria']"
              @toggle="toggleSection('contraloria')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BannerSection from '~/components/BannerSection.vue'
import DesarrolloUrbanoSection from '~/components/ventanilla-universal/DesarrolloUrbanoSection.vue'
import IngenieriaVialSection from '~/components/ventanilla-universal/IngenieriaVialSection.vue'
import EcologiaImagenUrbanaSection from '~/components/ventanilla-universal/EcologiaImagenUrbanaSection.vue'
import CatastroSection from '~/components/ventanilla-universal/CatastroSection.vue'
import ContraloriaSection from '~/components/ventanilla-universal/ContraloriaSection.vue'

definePageMeta({
  title: 'Trámites Ventanilla Universal'
})

const openSections = ref({
  'desarrollo-urbano': false,
  'ingenieria-vial': false,
  'ecologia-imagen-urbana': false,
  'catastro': false,
  'contraloria': false
})

const toggleSection = (sectionId) => {
  openSections.value[sectionId] = !openSections.value[sectionId]
}
</script>

<style scoped>
.animate-slideDown {
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
