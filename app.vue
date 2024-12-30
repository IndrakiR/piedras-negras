<!-- app.vue -->
<template>
  <div>
    <EnConstruccion v-if="mostrarEnConstruccion" />
    <div v-else>
      <Navbar />
      <NuxtRouteAnnouncer />
      <NuxtPage />
      <Footer />
    </div>
  </div>
</template>

<script setup>
const mostrarEnConstruccion = ref(true)
</script>