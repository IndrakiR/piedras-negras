<template>
  <div class="relative h-[500px] sm:h-[450px] md:h-[400px] lg:h-[450px] w-full overflow-hidden">
    <img
      src="/images/bandera_mexicana.jpg"
      alt="Bandera de México"
      class="w-full h-full object-cover object-center"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70 flex flex-col items-center justify-start sm:justify-center py-8 sm:py-0 px-4">
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-3">
        {{ title }}
      </h1>
      <p class="text-sm sm:text-base md:text-xl text-white/90 text-center max-w-3xl mb-6">
        {{ subtitle }}
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        <div 
          v-for="(card, index) in cards" 
          :key="index" 
          class="bg-white/10 backdrop-blur-sm px-4 py-3 sm:p-5 md:p-6 rounded-lg text-center hover:bg-white/15 transition-all duration-300 flex flex-row sm:flex-col items-center sm:items-stretch gap-3 sm:gap-2"
        >
          <div class="text-white text-xl sm:text-3xl md:text-4xl shrink-0">
            <i :class="card.icon"></i>
          </div>
          <div class="text-left sm:text-center">
            <h3 class="text-white font-semibold text-sm sm:text-base md:text-lg">{{ card.title }}</h3>
            <p class="text-white/80 text-xs sm:text-sm mt-0.5 sm:mt-2">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  cards: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<style scoped>
.container {
  margin-top: -2rem;
  position: relative;
  z-index: 10;
}
</style>
