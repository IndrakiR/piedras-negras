<template>
  <div>
    <!-- Hero Section -->
    <div class="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-[#5e1210] to-black overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-20"></div>
      </div>

      <!-- Content Container -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <!-- Main Heading with Animation -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in-up">
          Piedras Negras
        </h1>
        
        <!-- Subheading with Delayed Animation -->
        <div class="overflow-hidden">
          <h2 class="text-2xl md:text-3xl lg:text-4xl text-white font-light opacity-0 animate-fade-in-up-delayed">
            Tu Nueva Historia
          </h2>
        </div>

        <!-- Decorative Line -->
        <div class="w-24 h-1 bg-white mx-auto mt-8 opacity-0 animate-fade-in"></div>

        <!-- Call to Action -->
        <div class="mt-12 opacity-0 animate-fade-in-up-more-delayed">
          <button class="bg-white text-[#5e1210] px-8 py-3 rounded-full text-lg font-medium 
                         transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            Descubre Más
          </button>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped>
.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
}

.animate-fade-in-up-delayed {
  animation: fadeInUp 0.8s ease-out 0.3s forwards;
}

.animate-fade-in-up-more-delayed {
  animation: fadeInUp 0.8s ease-out 0.6s forwards;
}

.animate-fade-in {
  animation: fadeIn 1s ease-out 0.8s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>