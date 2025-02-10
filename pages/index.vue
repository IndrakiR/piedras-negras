<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Redirigir a /inicio cuando se carga la página raíz
onMounted(() => {
  router.push('/inicio')
})
</script>

<template>
  <!-- Esta página solo sirve para redireccionar, no necesita contenido -->
</template>
