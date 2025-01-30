<template>
  <div 
    class="border border-gray-100 rounded-xl overflow-hidden hover:border-[#611232] transition-all duration-200 hover:shadow-md"
    :class="{ 'shadow-md': isOpen }"
  >
    <button 
      @click="$emit('toggle')" 
      class="w-full flex justify-between items-center px-8 py-5 bg-white hover:bg-gray-50 transition-colors group"
    >
      <div class="flex items-center gap-4">
        <div class="w-10 h-10 rounded-lg bg-[#611232]/5 flex items-center justify-center group-hover:bg-[#611232]/10 transition-colors">
          <Icon name="heroicons:document-check" class="w-6 h-6 text-[#611232]" />
        </div>
        <span class="text-gray-700 font-medium text-lg group-hover:text-[#611232] transition-colors">Contraloría</span>
      </div>
      <Icon 
        name="heroicons:chevron-down" 
        class="w-5 h-5 text-[#611232] transform transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      />
    </button>
    
    <div v-show="isOpen" class="animate-slideDown">
      <div class="px-8 py-6 bg-gray-50">
        <div class="grid gap-6 md:grid-cols-2">
          <div 
            v-for="tramite in tramites" 
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
              <a 
                :href="tramite.link" 
                target="_blank"
                class="text-[#611232] hover:text-[#4D0E28] text-sm font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-[#611232]/5 transition-colors"
              >
                Ver detalles
                <Icon name="heroicons:arrow-right" class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '#components'
import { ref } from 'vue'

const tramites = ref([
  {
    id: 1,
    nombre: 'Declaración Patrimonial',
    descripcion: 'Presentación de declaración patrimonial',
    tiempo: '5 días hábiles',
    link: '/files/DECLARACION PATRIMONIAL.pdf'
  }
])

defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

defineEmits(['toggle'])
</script>
