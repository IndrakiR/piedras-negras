<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-[#611232] mb-4">Registro de Contratista</h1>
        <p class="text-gray-600">Complete el formulario para registrarse como contratista del municipio</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="bg-white rounded-2xl p-8 shadow-lg">
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Personal Information -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-[#611232] mb-4">Información Personal</h3>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
              <input 
                v-model="formData.nombre" 
                type="text" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
                required
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">RFC</label>
              <input 
                v-model="formData.rfc" 
                type="text" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
                required
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <input 
                v-model="formData.email" 
                type="email" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
                required
              >
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
              <input 
                v-model="formData.telefono" 
                type="tel" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
                required
              >
            </div>
          </div>

          <!-- Professional Information -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-[#611232] mb-4">Información Profesional</h3>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Especialidad</label>
              <select 
                v-model="formData.especialidad" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
                required
              >
                <option value="">Seleccione una especialidad</option>
                <option value="construccion">Construcción</option>
                <option value="electricidad">Electricidad</option>
                <option value="plomeria">Plomería</option>
                <option value="carpinteria">Carpintería</option>
                <option value="pintura">Pintura</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
              <textarea 
                v-model="formData.direccion" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
                rows="3"
                required
              ></textarea>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Tipo de Persona</label>
              <select 
                v-model="formData.tipoPersona" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="fisica">Persona Física</option>
                <option value="moral">Persona Moral</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Años de Experiencia</label>
              <input 
                v-model="formData.experiencia" 
                type="number" 
                min="0"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
                required
              >
            </div>
          </div>
        </div>

        <!-- Additional Information -->
        <div class="mt-6">
          <h3 class="text-xl font-semibold text-[#611232] mb-4">Información Adicional</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Descripción de Servicios</label>
              <textarea 
                v-model="formData.descripcionServicios" 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
                rows="4"
                placeholder="Describa los servicios que ofrece..."
                required
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="mt-8 text-center">
          <button 
            type="submit"
            class="bg-[#611232] text-white py-3 px-8 rounded-xl hover:bg-[#4d0e28] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-opacity-50 transition-all duration-300"
          >
            Enviar Registro
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

definePageMeta({
  title: 'Registro de Contratista'
})

const formData = ref({
  nombre: '',
  rfc: '',
  email: '',
  telefono: '',
  especialidad: '',
  direccion: '',
  tipoPersona: '',
  experiencia: '',
  descripcionServicios: ''
})

const handleSubmit = () => {
  // Here you would implement the form submission logic
  console.log('Form submitted:', formData.value)
  // TODO: Add API call to submit form data
}
</script>
