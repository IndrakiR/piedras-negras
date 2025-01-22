<template>
  <form @submit.prevent="$emit('submit', formData)" class="space-y-6">
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
          <label class="block text-sm font-medium text-gray-700 mb-1">CURP</label>
          <input 
            v-model="formData.curp" 
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
      </div>

      <!-- Contact Information -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-[#611232] mb-4">Información de Contacto</h3>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
          <input 
            v-model="formData.telefono" 
            type="tel" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
            required
          >
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
          <label class="block text-sm font-medium text-gray-700 mb-1">Giro Comercial</label>
          <select 
            v-model="formData.giroComercial" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
            required
          >
            <option value="">Seleccione un giro</option>
            <option value="comercial">Comercial</option>
            <option value="servicios">Servicios</option>
            <option value="industrial">Industrial</option>
            <option value="tecnologia">Tecnología</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Additional Information -->
    <div class="mt-6">
      <h3 class="text-xl font-semibold text-[#611232] mb-4">Información Adicional</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Descripción de Productos/Servicios</label>
          <textarea 
            v-model="formData.descripcionProductos" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
            rows="4"
            placeholder="Describa los productos o servicios que ofrece..."
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
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  nombre: '',
  curp: '',
  rfc: '',
  email: '',
  telefono: '',
  direccion: '',
  giroComercial: '',
  descripcionProductos: ''
})
</script>
