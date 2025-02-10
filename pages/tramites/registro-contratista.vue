<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-[#611232] mb-4">Registro de Contratista</h1>
        <p class="text-gray-600">Complete el formulario para registrarse como contratista del municipio</p>
      </div>

      <!-- Type Selection -->
      <div class="mb-8">
        <div class="flex justify-center space-x-4">
          <button 
            @click="selectedType = 'fisica'"
            :class="[
              'px-6 py-2 rounded-lg transition-all duration-300',
              selectedType === 'fisica' 
                ? 'bg-[#611232] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            Persona Física
          </button>
          <button 
            @click="selectedType = 'moral'"
            :class="[
              'px-6 py-2 rounded-lg transition-all duration-300',
              selectedType === 'moral' 
                ? 'bg-[#611232] text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            Persona Moral
          </button>
        </div>
      </div>

      <!-- Dynamic Form -->
      <div class="bg-white rounded-2xl p-8 shadow-lg">
        <PersonaFisicaForm 
          v-if="selectedType === 'fisica'"
          @submit="handleSubmit"
        />
        <PersonaMoralForm 
          v-if="selectedType === 'moral'"
          @submit="handleSubmit"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PersonaFisicaForm from './forms/PersonaFisicaForm.vue'
import PersonaMoralForm from './forms/PersonaMoralForm.vue'

const selectedType = ref('fisica')

const handleSubmit = (formData) => {
  console.log('Form submitted:', formData)
  // Add your form submission logic here
}
</script>