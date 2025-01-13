<template>
    <div>
        <BannerV2 
            title="Denuncia a Funcionario Público"
            subtitle="Sistema de denuncias para funcionarios públicos del municipio"
            :cards="bannerCards"
        />
        <div class="min-h-screen bg-gray-50 py-12">
            <div class="container mx-auto px-4">
                <!-- Form -->
                <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                    <form @submit.prevent="submitForm" class="space-y-6">
                        <!-- Tipo de Denuncia -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Tipo de Denuncia
                            </label>
                            <select 
                                v-model="formData.tipoDenuncia"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#611232] focus:border-[#611232]"
                                required
                            >
                                <option value="">Seleccione un tipo</option>
                                <option value="corrupcion">Corrupción</option>
                                <option value="abuso">Abuso de Autoridad</option>
                                <option value="negligencia">Negligencia</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>

                        <!-- Dependencia -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Dependencia o Área
                            </label>
                            <input 
                                type="text"
                                v-model="formData.dependencia"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#611232] focus:border-[#611232]"
                                required
                                placeholder="Ej: Tesorería, Obras Públicas, etc."
                            >
                        </div>

                        <!-- Descripción -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Descripción de los Hechos
                            </label>
                            <textarea 
                                v-model="formData.descripcion"
                                rows="6"
                                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#611232] focus:border-[#611232]"
                                required
                                placeholder="Describa detalladamente los hechos..."
                            ></textarea>
                        </div>

                        <!-- Información de Contacto (Opcional) -->
                        <div class="border-t pt-6">
                            <h3 class="text-lg font-medium text-gray-900 mb-4">Información de Contacto (Opcional)</h3>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre
                                    </label>
                                    <input 
                                        type="text"
                                        v-model="formData.nombre"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#611232] focus:border-[#611232]"
                                        placeholder="Su nombre (opcional)"
                                    >
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-2">
                                        Correo Electrónico
                                    </label>
                                    <input 
                                        type="email"
                                        v-model="formData.email"
                                        class="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#611232] focus:border-[#611232]"
                                        placeholder="correo@ejemplo.com"
                                    >
                                </div>
                            </div>
                        </div>

                        <!-- Submit Button -->
                        <div class="flex justify-center pt-6">
                            <button 
                                type="submit"
                                class="px-6 py-3 bg-[#611232] text-white rounded-md hover:bg-[#4a0d26] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-offset-2 transition-colors"
                                :disabled="isSubmitting"
                            >
                                {{ isSubmitting ? 'Enviando...' : 'Enviar Denuncia' }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import BannerV2 from '~/components/BannerV2.vue'

const isSubmitting = ref(false)
const formData = ref({
    tipoDenuncia: '',
    dependencia: '',
    descripcion: '',
    nombre: '',
    email: ''
})

const bannerCards = [
    {
        icon: 'fas fa-file-alt',
        title: 'Formulario Seguro',
        description: 'Tu denuncia será tratada con total confidencialidad'
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'Protección',
        description: 'Garantizamos la protección de tus datos personales'
    },
    {
        icon: 'fas fa-check-circle',
        title: 'Seguimiento',
        description: 'Daremos seguimiento oportuno a tu denuncia'
    }
]

const submitForm = async () => {
    try {
        isSubmitting.value = true
        // Aquí iría la lógica para enviar el formulario
        // Por ejemplo, una llamada a una API
        console.log('Formulario enviado:', formData.value)
        
        // Simular delay de envío
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Mostrar mensaje de éxito
        alert('Su denuncia ha sido enviada exitosamente.')
        
        // Limpiar formulario
        formData.value = {
            tipoDenuncia: '',
            dependencia: '',
            descripcion: '',
            nombre: '',
            email: ''
        }
    } catch (error) {
        console.error('Error al enviar el formulario:', error)
        alert('Hubo un error al enviar su denuncia. Por favor, intente nuevamente.')
    } finally {
        isSubmitting.value = false
    }
}
</script>
