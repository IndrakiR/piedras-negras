<template>
  <form
    @submit.prevent="handleSubmit"
    class="space-y-6"
  >
    <!-- FormSubmit configuration -->
    <input type="hidden" name="_subject" value="Registro Persona Moral - Nuevo Contratista">
    <input type="hidden" name="_template" value="table">
    <input type="hidden" name="_captcha" value="false">

    <div class="mb-6">
      <a 
        href="/files/requisitos/CONTRATISTA-PERSONA-MORAL-_Requisitos_.pdf"
        target="_blank"
        class="inline-flex items-center px-4 py-2 bg-[#611232] text-white rounded-lg hover:bg-[#7a1640] transition-colors"
      >
        <span class="mr-2">📄</span>
        Descargar Lista de Requisitos
      </a>
    </div>
    <div class="grid md:grid-cols-2 gap-6">
      <!-- Company Information -->
      <div class="space-y-4">
        <h3 class="text-xl font-semibold text-[#611232] mb-4">Información de la Empresa</h3>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Razón Social</label>
          <input 
            type="text" 
            name="razon-social"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
            required
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">RFC</label>
          <input 
            type="text" 
            name="rfc"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
            required
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Nombre del Representante Legal</label>
          <input 
            type="text" 
            name="representante-legal"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
            required
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
          <input 
            type="email" 
            name="email"
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
            type="tel" 
            name="telefono"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
            required
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Dirección Fiscal</label>
          <textarea 
            name="direccion-fiscal"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Especialidad</label>
          <select 
            name="especialidad"
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
            type="number" 
            name="experiencia"
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
            name="descripcion-servicios"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
            rows="4"
            placeholder="Describa los servicios que ofrece su empresa..."
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
            name="attachment"
            accept=".zip"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#611232] focus:border-[#611232]"
            required
          >
          <p class="mt-1 text-sm text-gray-500">Por favor, adjunte todos los documentos requeridos en un archivo ZIP.</p>
        </div>
      </div>
    </div>

    <!-- Submit Button -->
    <div class="mt-8 text-center">
      <button 
        type="submit"
        class="w-full bg-[#611232] text-white py-2 px-4 rounded-lg hover:bg-[#7a1640] transition-colors"
      >
        Enviar Registro
      </button>
    </div>
  </form>
  <LoadingAnimation :show="isLoading" />
  <SuccessPopup :show="showSuccess" @close="showSuccess = false" />
</template>

<script setup>
import { ref } from 'vue'
import LoadingAnimation from '~/components/LoadingAnimation.vue'
import SuccessPopup from '~/components/SuccessPopup.vue'

const isLoading = ref(false)
const showSuccess = ref(false)

const handleSubmit = async (e) => {
  e.preventDefault()
  isLoading.value = true

  try {
    const formData = new FormData(e.target)
    await fetch('https://formsubmit.co/proveedoresycontratistas@piedrasnegras.gob.mx', {
      method: 'POST',
      body: formData
    })
    showSuccess.value = true
  } catch (error) {
    console.error('Error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>