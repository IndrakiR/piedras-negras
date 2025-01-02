<template>
  <div class="relative h-[400px] w-full overflow-hidden">
    <img
      src="/images/piegras.jpg"
      alt="Vista aérea de Piedras Negras"
      class="w-full h-full object-cover object-center"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 flex flex-col items-center justify-center px-4">
      <h1 class="text-4xl md:text-5xl text-white font-bold text-center mb-4">
        {{ title }}
      </h1>
      <p class="text-xl text-white/90 text-center max-w-3xl mb-8">
        {{ subtitle }}
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-4">
        <div v-for="(card, index) in cards" :key="index" class="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
          <div class="text-white text-4xl mb-2">
            <i :class="card.icon"></i>
          </div>
          <h3 class="text-white font-semibold text-lg mb-2">{{ card.title }}</h3>
          <p class="text-white/80 text-sm">
            {{ card.description }}
          </p>
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
/* Add styles here if needed */
</style>
