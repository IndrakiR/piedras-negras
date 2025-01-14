<template>
  <div class="w-full">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden">
          <!-- Loading Overlay -->
          <div v-if="isLoading" 
               class="absolute inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-20">
            <div class="flex flex-col items-center">
              <div class="animate-spin rounded-full h-12 w-12 border-4 border-[#611232] border-t-transparent"></div>
              <p class="mt-4 text-gray-600">Procesando solicitud...</p>
            </div>
          </div>

          <h2 class="text-2xl font-medium text-[#611232] mb-8 text-center">Formulario de Contacto</h2>

          <form 
            action="https://formsubmit.co/negraspiedras29@gmail.com" 
            method="POST"
            @submit.prevent="handleSubmit" 
            class="space-y-6"
          >
            <input type="hidden" name="_next" value="https://piedrasnegras.gob.mx/atencion-ciudadana">
            <input type="hidden" name="_subject" value="Nueva Solicitud de Atención Ciudadana">
            <input type="hidden" name="_template" value="table">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Nombre -->
              <div class="form-group">
                <label for="nombre" class="form-label">
                  Nombre Completo <span class="text-red-500">*</span>
                </label>
                <input
                  id="nombre"
                  v-model="formData.nombre"
                  name="nombre"
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
                  name="email"
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
                  name="telefono"
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
                  name="sexo"
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
                  name="entidad_nacimiento"
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
                  name="direccion"
                  type="text"
                  class="form-input"
                  placeholder="Calle, Número, Colonia"
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
                  name="asunto"
                  type="text"
                  class="form-input"
                  placeholder="Asunto de tu mensaje"
                  required
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
                  name="mensaje"
                  rows="4"
                  class="form-input resize-none"
                  placeholder="Escribe tu mensaje aquí"
                  required
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

const handleSubmit = async (e) => {
  if (!validateForm()) return

  try {
    isLoading.value = true
    
    // Create formatted message for better email readability
    const formattedData = {
      ...formData,
      '_format': 'Solicitud de Atención Ciudadana',
      '_timestamp': new Date().toLocaleString()
    }

    const form = e.target
    // Submit the form using FormSubmit
    await fetch(form.action, {
      method: 'POST',
      body: new FormData(form)
    })

    showSuccess.value = true
    resetForm()
  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    alert('Hubo un error al enviar el formulario. Por favor, intente nuevamente.')
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
