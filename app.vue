<!-- app.vue -->
<template>
  <div class="min-h-screen overflow-x-hidden">
    <EnConstruccion v-if="mostrarEnConstruccion" />
    <div v-else class="flex flex-col min-h-screen">
      <Navbar />
      <NuxtRouteAnnouncer />
      <main class="flex-grow">
        <NuxtLoadingIndicator color="#5e1210" height="3px" />
        <NuxtPage @page-ready="onPageReady" />
      </main>
      <div class="relative" v-show="mainContentReady">
        <div 
          class="footer-skeleton w-full bg-gray-50 absolute bottom-0 left-0 right-0"
          :class="{ 'opacity-0': showFooter }"
        >
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div class="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                <div class="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                <div class="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              </div>
              <div>
                <div class="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                <div class="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                <div class="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              </div>
              <div>
                <div class="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                <div class="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                <div class="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        <div 
          class="footer-content"
          :class="{ 'opacity-100': showFooter, 'opacity-0': !showFooter }"
        >
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const mostrarEnConstruccion = useConstruction()
const showFooter = ref(false)
const mainContentReady = ref(false)

// Handle page ready event
const onPageReady = () => {
  mainContentReady.value = true
  setTimeout(() => {
    showFooter.value = true
  }, 300)
}

// Lazy load del footer
const Footer = defineAsyncComponent(() => 
  import('~/components/Footer.vue')
)

// Add meta viewport tag
useHead({
  title: 'Piedras Negras',
  meta: [
    { 
      name: 'viewport', 
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' 
    }
  ],
  script: [
    {
      src: 'https://umami.2025.piedrasnegras.gob.mx/script.js',
      'data-website-id': '22513e67-94b8-4f11-ad99-0a11bc6a3e48',
      defer: true
    }
  ]
})
</script>

<style>
html, body {
  overflow-x: hidden;
  position: relative;
  width: 100%;
  -webkit-text-size-adjust: 100%;
  touch-action: manipulation;
}

/* Prevent pull-to-refresh on mobile */
body {
  overscroll-behavior-y: none;
}

/* Improve tap target sizes on mobile */
button, a {
  min-height: 44px;
  min-width: 44px;
}

/* Improve form elements on mobile */
input, select, textarea {
  font-size: 16px !important; /* Prevents zoom on focus in iOS */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Transiciones del footer */
.footer-skeleton {
  transition: opacity 0.8s ease-in-out;
  z-index: 1;
}

.footer-content {
  transition: opacity 0.8s ease-in-out;
  z-index: 2;
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}
</style>