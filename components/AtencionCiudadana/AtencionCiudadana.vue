<template>
  <div class="w-full bg-gray-50">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Header with decorative elements -->
        <div class="relative mb-16 text-center">
          <div class="relative">
            <span class="bg-gray-50 px-6 text-2xl text-[#611232] font-semibold tracking-wider uppercase">
              Atención Ciudadana
            </span>
          </div>
          <div class="relative mt-4">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200"></div>
            </div>
          </div>
          <p class="mt-6 text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para escucharte y ayudarte. Tu opinión es importante para mejorar nuestra ciudad.
          </p>
        </div>

        <!-- Service Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <!-- Card 1 -->
          <div class="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl group">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-[#611232] p-3 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-900 group-hover:text-[#611232] transition-colors">Respuesta Rápida</h3>
            </div>
            <p class="text-gray-600">
              Nos comprometemos a dar seguimiento y respuesta oportuna a todas tus solicitudes.
            </p>
          </div>

          <!-- Card 2 -->
          <div class="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl group">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-[#611232] p-3 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-900 group-hover:text-[#611232] transition-colors">Atención Inmediata</h3>
            </div>
            <p class="text-gray-600">
              Trabajamos para resolver tus inquietudes de manera eficiente y efectiva.
            </p>
          </div>

          <!-- Card 3 -->
          <div class="bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl group">
            <div class="flex items-center space-x-4 mb-4">
              <div class="w-12 h-12 rounded-xl bg-[#611232] p-3 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 class="text-lg font-medium text-gray-900 group-hover:text-[#611232] transition-colors">Seguimiento</h3>
            </div>
            <p class="text-gray-600">
              Mantente informado sobre el estado de tu solicitud en todo momento.
            </p>
          </div>
        </div>

        <!-- Form Section -->
        <div class="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden">
          <!-- Loading Overlay -->
          <div v-if="isLoading" 
               class="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-20">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 border-4 border-[#611232] border-t-transparent rounded-full animate-spin"></div>
              <p class="mt-4 text-gray-600 font-medium">Procesando solicitud...</p>
            </div>
          </div>

          <!-- Success Message -->
          <div v-if="showSuccess" 
               class="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-20 animate-fadeIn">
            <div class="text-center px-6">
              <div class="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 class="text-xl font-medium text-gray-900 mb-2">¡Mensaje Enviado!</h3>
              <p class="text-gray-600 mb-6">Gracias por contactarnos. Te responderemos pronto.</p>
              <button @click="resetForm" 
                      class="bg-[#611232] text-white py-3 px-6 rounded-xl hover:bg-[#4d0e28] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-opacity-50 transition-all duration-300 uppercase text-sm font-medium tracking-wider">
                Enviar otro mensaje
              </button>
            </div>
          </div>

          <h2 class="text-2xl font-medium text-[#611232] mb-8 text-center">Formulario de Contacto</h2>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Nombre -->
              <div class="form-group">
                <label for="nombre" class="form-label">
                  Nombre Completo <span class="text-red-500">*</span>
                </label>
                <input
                  id="nombre"
                  v-model="formData.nombre"
                  type="text"
                  :class="['form-input', {'error': errors.nombre}]"
                  placeholder="John Carter"
                  required
                />
                <span v-if="errors.nombre" class="error-message">{{ errors.nombre }}</span>
              </div>

              <!-- Email -->
              <div class="form-group">
                <label for="email" class="form-label">
                  Email <span class="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  :class="['form-input', {'error': errors.email}]"
                  placeholder="ejemplo@gmail.com"
                  required
                />
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>

              <!-- Teléfono -->
              <div class="form-group">
                <label for="telefono" class="form-label">
                  Teléfono <span class="text-red-500">*</span>
                  <span class="text-sm text-gray-500">(10 dígitos)</span>
                </label>
                <input
                  id="telefono"
                  v-model="formData.telefono"
                  type="tel"
                  :class="['form-input', {'error': errors.telefono}]"
                  placeholder="(123) 456-7890"
                  required
                  pattern="[0-9]{10}"
                />
                <span v-if="errors.telefono" class="error-message">{{ errors.telefono }}</span>
              </div>

              <!-- Sexo -->
              <div class="form-group">
                <label for="sexo" class="form-label">
                  Sexo <span class="text-red-500">*</span>
                </label>
                <select
                  id="sexo"
                  v-model="formData.sexo"
                  :class="['form-input', {'error': errors.sexo}]"
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>
                <span v-if="errors.sexo" class="error-message">{{ errors.sexo }}</span>
              </div>

              <!-- Entidad de Nacimiento -->
              <div class="form-group">
                <label for="entidadNacimiento" class="form-label">
                  Entidad de Nacimiento
                </label>
                <input
                  id="entidadNacimiento"
                  v-model="formData.entidadNacimiento"
                  type="text"
                  class="form-input"
                  placeholder="México"
                />
              </div>

              <!-- Fecha de Nacimiento -->
              <div class="form-group">
                <label for="fechaNacimiento" class="form-label">
                  Fecha de Nacimiento
                </label>
                <input
                  id="fechaNacimiento"
                  v-model="formData.fechaNacimiento"
                  type="date"
                  class="form-input"
                />
              </div>
            </div>

            <!-- Campos de ancho completo -->
            <div class="space-y-6">
              <!-- Dirección -->
              <div class="form-group">
                <label for="direccion" class="form-label">
                  Dirección Completa
                </label>
                <input
                  id="direccion"
                  v-model="formData.direccion"
                  type="text"
                  class="form-input"
                  placeholder="Calle Libertad 123, Colonia Centro"
                />
              </div>

              <!-- Asunto -->
              <div class="form-group">
                <label for="asunto" class="form-label">
                  Asunto
                </label>
                <input
                  id="asunto"
                  v-model="formData.asunto"
                  type="text"
                  class="form-input"
                  placeholder="Describe brevemente tu solicitud"
                />
              </div>

              <!-- Mensaje -->
              <div class="form-group">
                <label for="mensaje" class="form-label">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  v-model="formData.mensaje"
                  rows="4"
                  class="form-input resize-none"
                  placeholder="Describe detalladamente tu solicitud..."
                ></textarea>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="pt-4">
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full bg-[#611232] text-white py-3 px-6 rounded-xl hover:bg-[#4d0e28] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-opacity-50 transition-all duration-300 uppercase text-sm font-medium tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isLoading">Enviar Mensaje</span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  nombre: '',
  email: '',
  telefono: '',
  sexo: '',
  entidadNacimiento: '',
  fechaNacimiento: '',
  direccion: '',
  asunto: '',
  mensaje: ''
})

const errors = reactive({})
const isLoading = ref(false)
const showSuccess = ref(false)

const validateForm = () => {
  errors.nombre = !formData.nombre ? 'El nombre es requerido' : ''
  errors.email = !formData.email ? 'El email es requerido' : 
                 !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? 'Email inválido' : ''
  errors.telefono = !formData.telefono ? 'El teléfono es requerido' : 
                    !/^[0-9]{10}$/.test(formData.telefono) ? 'Debe contener 10 dígitos' : ''
  errors.sexo = !formData.sexo ? 'Selecciona una opción' : ''
  
  return !Object.values(errors).some(error => error)
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isLoading.value = true
  
  try {
    // Simular envío de formulario
    await new Promise(resolve => setTimeout(resolve, 1500))
    showSuccess.value = true
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
  } finally {
    isLoading.value = false
  }
}

const resetForm = () => {
  Object.keys(formData).forEach(key => formData[key] = '')
  Object.keys(errors).forEach(key => errors[key] = '')
  showSuccess.value = false
}
</script>

<style scoped>
.form-group {
  @apply relative space-y-1;
}

.form-label {
  @apply block text-sm font-medium text-gray-700;
}

.form-input {
  @apply w-full px-4 py-3 rounded-xl border border-gray-300 
         focus:border-[#611232] focus:ring-2 focus:ring-[#611232] focus:ring-opacity-20 
         transition-all duration-300 bg-gray-50;
}

.form-input.error {
  @apply border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500;
}

.error-message {
  @apply absolute -bottom-5 left-0 text-xs text-red-500;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
</style>
