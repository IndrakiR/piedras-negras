<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-[#611232] mb-6">Organigrama General</h1>
    <div class="bg-white rounded-lg shadow-md p-6">
      <div class="max-w-4xl mx-auto">
        <!-- Aquí irá el organigrama -->
        <div class="text-center mb-8">
          <div class="inline-block bg-[#611232] text-white p-4 rounded-lg mb-4">
            <h2 class="text-xl font-semibold">Presidente Municipal</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div class="bg-gray-100 p-4 rounded-lg">
              <h3 class="font-medium text-[#611232]">Secretaría del Ayuntamiento</h3>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg">
              <h3 class="font-medium text-[#611232]">Tesorería Municipal</h3>
            </div>
            <div class="bg-gray-100 p-4 rounded-lg">
              <h3 class="font-medium text-[#611232]">Contraloría Municipal</h3>
            </div>
          </div>
        </div>
        <!-- Se puede agregar más estructura según sea necesario -->
      </div>
    </div>
  </div>
</template>

<script setup>
// Aquí irá la lógica del componente
</script>
