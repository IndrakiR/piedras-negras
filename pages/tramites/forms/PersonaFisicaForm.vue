<template>
  <form @submit.prevent="$emit('submit', formData)" class="space-y-6">
    <div class="mb-6">
      <a 
        href="/files/requisitos/CONTRATISTA-PERSONA-FISICA-_Requisitos_.pdf"
        target="_blank"
        class="inline-flex items-center px-4 py-2 bg-[#611232] text-white rounded-lg hover:bg-[#7a1640] transition-colors"
      >
        <span class="mr-2">📄</span>
        Descargar Lista de Requisitos
      </a>
    </div>
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

    <!-- Document Upload Section -->
    <div class="mt-6">
      <h3 class="text-xl font-semibold text-[#611232] mb-4">Documentación</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Documentos (ZIP, máx. 20 MB)</label>
          <input 
            type="file"
            @change="handleFileUpload"
            accept=".zip"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
            required
          >
          <p class="text-sm text-gray-500 mt-1">Por favor, suba un archivo ZIP que contenga todos sus documentos (tamaño máximo: 20 MB)</p>
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
  especialidad: '',
  experiencia: '',
  descripcionServicios: '',
  documentos: null
})

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    // Verificar el tipo de archivo
    if (file.type !== 'application/zip' && file.type !== 'application/x-zip-compressed') {
      alert('Por favor, suba únicamente archivos ZIP')
      event.target.value = ''
      return
    }
    
    // Verificar el tamaño (20 MB = 20 * 1024 * 1024 bytes)
    if (file.size > 20 * 1024 * 1024) {
      alert('El archivo es demasiado grande. El tamaño máximo permitido es 20 MB')
      event.target.value = ''
      return
    }
    
    formData.value.documentos = file
  }
}

defineEmits(['submit'])
</script>