<!-- components/Navbar.vue -->
<template>
  <nav class="bg-white fixed w-full top-0 z-50 shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <!-- Desktop Navigation -->
      <div class="hidden xl:block py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink to="/" class="flex-shrink-0 transition-transform duration-300 hover:scale-105 h-8 overflow-hidden">
            <img class="h-8 w-auto object-contain" src="/images/logo.png" alt="Piedras Negras Logo" />
          </NuxtLink>

          <div class="flex items-center justify-between flex-1 mx-4 2xl:mx-6">
            <div class="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
              <template v-for="(item, index) in navigationItems" :key="item.path">
                <NuxtLink
                  :to="item.path"
                  class="px-2 py-2 text-sm xl:text-base transition-colors duration-300 whitespace-nowrap"
                  :class="[
                    route.path === item.path
                      ? 'text-[#9D2449] font-medium border-b-2 border-[#9D2449]'
                      : 'text-[#2D2D2D] hover:text-[#9D2449] font-medium'
                  ]"
                >
                  {{ item.name }}
                </NuxtLink>
                <div
                  v-if="index < navigationItems.length - 1"
                  class="h-6 w-px bg-gray-300"
                ></div>
              </template>
            </div>

            <div class="flex items-center space-x-2 sm:space-x-4 ml-4">
              <a
                v-for="social in socialLinks"
                :key="social.name"
                :href="social.url"
                :aria-label="social.name"
                class="text-[#9D2449] hover:text-[#2D2D2D] text-xl transition-colors duration-300 hover:scale-110 transform"
              >
                <Icon :name="social.icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="xl:hidden">
        <!-- Mobile Header -->
        <div class="py-3">
          <div class="flex items-center justify-between">
            <NuxtLink to="/" class="flex-shrink-0 h-6 overflow-hidden">
              <img class="h-6 w-auto object-contain" src="/images/logo.png" alt="Piedras Negras Logo" />
            </NuxtLink>
            <button
              @click="toggleMenu"
              class="text-[#2D2D2D] p-2 transition-colors duration-300 hover:text-[#9D2449]"
              :aria-expanded="isMenuOpen"
              aria-controls="mobile-menu"
              aria-label="Menu principal"
            >
              <Icon
                :name="isMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
                class="h-6 w-6"
              />
            </button>
          </div>
        </div>

        <!-- Mobile Menu with slide animation -->
        <div
          id="mobile-menu"
          class="transform transition-all duration-300 ease-in-out"
          :class="[
            isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
            isMenuOpen ? 'h-auto' : 'h-0'
          ]"
        >
          <div class="pt-2 pb-4 space-y-1">
            <NuxtLink
              v-for="item in navigationItems"
              :key="item.path"
              :to="item.path"
              class="block px-4 py-2 transition-colors duration-300"
              :class="[
                route.path === item.path
                  ? 'text-[#9D2449] font-medium border-l-4 border-[#9D2449] bg-pink-50'
                  : 'text-[#2D2D2D] hover:text-[#9D2449] hover:bg-gray-50 font-medium'
              ]"
              @click="isMenuOpen = false"
            >
              {{ item.name }}
            </NuxtLink>
          </div>

          <div class="flex justify-center space-x-6 mt-4 pt-4 border-t border-gray-200">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.url"
              :aria-label="social.name"
              class="text-[#9D2449] hover:text-[#2D2D2D] text-xl transition-all duration-300 hover:scale-110 transform"
            >
              <Icon :name="social.icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- Spacer to prevent content from hiding under fixed navbar -->
  <div class="h-16 lg:h-24"></div>
</template>

<script setup>
import { ref, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

// Navigation items array
const navigationItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Noticias', path: '/noticias' },
  { name: 'Directorio', path: '/directorio' },
  { name: 'Trámites', path: '/tramites' },
  { name: 'Conferencias Matutinas', path: '/conferencias' },
  { name: 'Desarrollo Social', path: '/desarrollo' },
  { name: 'Transparencia', path: '/transparencia' }
]

// Social media links array
const socialLinks = [
  { name: 'Facebook', icon: 'mingcute:facebook-fill', url: '#' },
  { name: 'Twitter', icon: 'mingcute:twitter-fill', url: '#' },
  { name: 'Instagram', icon: 'mingcute:instagram-fill', url: '#' },
  { name: 'YouTube', icon: 'mingcute:youtube-fill', url: '#' }
]

// Toggle menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

// Close menu on route change
watch(() => route.path, () => {
  if (isMenuOpen.value) {
    isMenuOpen.value = false
    document.body.style.overflow = ''
  }
})

// Cleanup
onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;     /* Firefox */
}
</style>
