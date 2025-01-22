<template>
  <form @submit.prevent="$emit('submit', formData)" class="space-y-6">
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Company Information -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-[#611232] mb-4">Información de la Empresa</h3>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Razón Social</label>
          <input 
            v-model="formData.razonSocial" 
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
          <label class="block text-sm font-medium text-gray-700 mb-1">Nombre del Representante Legal</label>
          <input 
            v-model="formData.representanteLegal" 
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
          <label class="block text-sm font-medium text-gray-700 mb-1">Dirección Fiscal</label>
          <textarea 
            v-model="formData.direccionFiscal" 
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Giro Empresarial</label>
          <select 
            v-model="formData.giroEmpresarial" 
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
  razonSocial: '',
  rfc: '',
  representanteLegal: '',
  email: '',
  telefono: '',
  direccionFiscal: '',
  giroEmpresarial: '',
  descripcionProductos: ''
})
</script>
