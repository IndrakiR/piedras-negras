<template>
  <Transition name="fade">
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white p-8 rounded-lg shadow-xl text-center max-w-md mx-4">
        <!-- Success Icon -->
        <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg class="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 class="text-2xl font-bold text-[#611232] mb-4">¡Gracias!</h2>
        
        <p class="text-gray-600 mb-6">
          Su información ha sido enviada exitosamente. Nos pondremos en contacto con usted pronto.
        </p>

        <!-- Close Button -->
        <button 
          @click="$emit('close')"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#611232] hover:bg-[#7a1640] transition-colors"
        >
          Cerrar
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

defineEmits(['close'])
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
