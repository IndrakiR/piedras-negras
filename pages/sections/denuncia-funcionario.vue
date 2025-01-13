<template>
    <div>
        <BannerV2 
            title="Denuncia a Funcionario Público"
            subtitle="Sistema de denuncias para funcionarios públicos del municipio"
            :cards="bannerCards"
        />
        <div class="max-w-4xl mx-auto px-4 py-16">
            <!-- Form Container -->
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#611232]/10">
                <!-- Form Header -->
                <div class="bg-[#611232] px-8 py-6 flex items-center justify-between">
                    <div>
                        <h2 class="text-xl font-semibold text-white">Formulario de Denuncia</h2>
                        <p class="text-white/80 text-sm mt-1">La información será tratada con confidencialidad</p>
                    </div>
                    <div class="hidden md:block">
                        <i class="fas fa-shield-alt text-3xl text-white/80"></i>
                    </div>
                </div>

                <!-- Form Content -->
                <form @submit.prevent="submitForm" class="space-y-8 p-8">
                    <!-- Progress Steps -->
                    <div class="mb-12">
                        <h2 class="text-2xl font-bold text-[#611232] mb-8 text-center">Proceso de Denuncia</h2>
                        <div class="relative max-w-3xl mx-auto">
                            <!-- Progress Line -->
                            <div class="absolute top-[2.25rem] left-[7%] right-[7%] h-0.5 bg-gray-200"></div>
                            <div class="absolute top-[2.25rem] left-[7%] h-0.5 bg-[#611232] transition-all duration-500 ease-in-out" :style="{ width: ((currentStep - 1) * 43) + '%' }"></div>

                            <!-- Steps -->
                            <div class="relative grid grid-cols-3 gap-4">
                                <!-- Step 1 -->
                                <div class="flex flex-col items-center">
                                    <div class="relative mb-8">
                                        <div class="w-16 h-16 rounded-full bg-white border-4 border-[#611232] flex items-center justify-center z-10 relative transition-all duration-300"
                                             :class="{'bg-[#611232]': currentStep >= 1}">
                                            <i class="fas fa-file-alt text-xl" :class="currentStep >= 1 ? 'text-white' : 'text-[#611232]'"></i>
                                        </div>
                                    </div>
                                    <h3 class="font-semibold text-[#611232] text-center text-lg mb-1">1. Tipo</h3>
                                    <p class="text-sm text-gray-500 text-center">¿Qué tipo de denuncia desea realizar?</p>
                                </div>

                                <!-- Step 2 -->
                                <div class="flex flex-col items-center">
                                    <div class="relative mb-8">
                                        <div class="w-16 h-16 rounded-full bg-white border-4 border-[#611232] flex items-center justify-center z-10 relative transition-all duration-300"
                                             :class="{'bg-[#611232]': currentStep >= 2}">
                                            <i class="fas fa-align-left text-xl" :class="currentStep >= 2 ? 'text-white' : 'text-[#611232]'"></i>
                                        </div>
                                    </div>
                                    <h3 class="font-semibold text-center text-lg mb-1" :class="currentStep >= 2 ? 'text-[#611232]' : 'text-gray-400'">2. Detalles</h3>
                                    <p class="text-sm text-gray-500 text-center">Describa los hechos</p>
                                </div>

                                <!-- Step 3 -->
                                <div class="flex flex-col items-center">
                                    <div class="relative mb-8">
                                        <div class="w-16 h-16 rounded-full bg-white border-4 border-[#611232] flex items-center justify-center z-10 relative transition-all duration-300"
                                             :class="{'bg-[#611232]': currentStep >= 3}">
                                            <i class="fas fa-user-shield text-xl" :class="currentStep >= 3 ? 'text-white' : 'text-[#611232]'"></i>
                                        </div>
                                    </div>
                                    <h3 class="font-semibold text-center text-lg mb-1" :class="currentStep >= 3 ? 'text-[#611232]' : 'text-gray-400'">3. Contacto</h3>
                                    <p class="text-sm text-gray-500 text-center">Datos de contacto (opcional)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Tipo y Dependencia -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Tipo de Denuncia -->
                        <div class="relative">
                            <label class="block text-sm font-medium text-gray-700 mb-1.5">
                                Tipo de Denuncia <span class="text-[#611232]">*</span>
                            </label>
                            <div class="relative group">
                                <select 
                                    v-model="formData.tipoDenuncia"
                                    class="w-full px-8 py-5 rounded-xl bg-white border-2 border-gray-200 focus:border-[#611232] focus:ring focus:ring-[#611232]/20 transition-all appearance-none placeholder-gray-500 hover:border-[#611232]/50 text-gray-700 text-lg tracking-wider"
                                    required
                                >
                                    <option value="">Seleccione un tipo</option>
                                    <option value="corrupcion">Corrupción</option>
                                    <option value="abuso">Abuso de Autoridad</option>
                                    <option value="negligencia">Negligencia</option>
                                    <option value="otro">Otro</option>
                                </select>
                                <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 group-hover:text-[#611232] transition-colors">
                                    <i class="fas fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Dependencia -->
                        <div class="relative">
                            <label class="block text-sm font-medium text-gray-700 mb-1.5">
                                Dependencia o Área <span class="text-[#611232]">*</span>
                            </label>
                            <div class="relative group">
                                <input 
                                    type="text"
                                    v-model="formData.dependencia"
                                    class="w-full pl-14 pr-8 py-5 rounded-xl bg-white border-2 border-gray-200 focus:border-[#611232] focus:ring focus:ring-[#611232]/20 transition-all placeholder-gray-500 hover:border-[#611232]/50 text-gray-700 text-lg tracking-wider"
                                    required
                                    placeholder="Ej: Tesorería, Obras Públicas"
                                >
                                <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-gray-400 group-hover:text-[#611232] transition-colors">
                                    <i class="fas fa-building text-xl"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Descripción -->
                    <div class="relative">
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Descripción de los Hechos <span class="text-[#611232]">*</span>
                        </label>
                        <div class="relative group">
                            <textarea 
                                v-model="formData.descripcion"
                                rows="6"
                                class="w-full px-8 py-5 rounded-xl bg-white border-2 border-gray-200 focus:border-[#611232] focus:ring focus:ring-[#611232]/20 transition-all placeholder-gray-500 hover:border-[#611232]/50 text-gray-700 text-lg tracking-wider"
                                required
                                placeholder="Describa detalladamente los hechos..."
                                maxlength="1000"
                            ></textarea>
                            <div class="absolute bottom-3 right-3 px-2 py-1 bg-[#611232]/10 rounded-md text-xs text-[#611232] font-medium">
                                {{ formData.descripcion.length }}/1000
                            </div>
                        </div>
                        <p class="mt-1.5 text-sm text-gray-500 flex items-center">
                            <i class="fas fa-info-circle mr-2 text-[#611232]"></i>
                            Proporcione detalles específicos que ayuden en la investigación
                        </p>
                    </div>

                    <!-- Información de Contacto -->
                    <div class="relative">
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Información de Contacto
                        </label>
                        <div class="bg-[#611232]/5 rounded-xl p-6">
                            <div class="flex items-center mb-4 text-sm text-gray-500">
                                <i class="fas fa-shield-alt text-[#611232] mr-2"></i>
                                Opcional y estrictamente confidencial
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="relative">
                                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                                        Nombre
                                    </label>
                                    <div class="relative group">
                                        <input 
                                            type="text"
                                            v-model="formData.nombre"
                                            class="w-full pl-14 pr-8 py-5 rounded-xl bg-white border-2 border-gray-200 focus:border-[#611232] focus:ring focus:ring-[#611232]/20 transition-all placeholder-gray-500 hover:border-[#611232]/50 text-gray-700 text-lg tracking-wider"
                                            placeholder="Su nombre (opcional)"
                                        >
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-gray-400 group-hover:text-[#611232] transition-colors">
                                            <i class="fas fa-user text-xl"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative">
                                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                                        Correo Electrónico
                                    </label>
                                    <div class="relative group">
                                        <input 
                                            type="email"
                                            v-model="formData.email"
                                            class="w-full pl-14 pr-8 py-5 rounded-xl bg-white border-2 border-gray-200 focus:border-[#611232] focus:ring focus:ring-[#611232]/20 transition-all placeholder-gray-500 hover:border-[#611232]/50 text-gray-700 text-lg tracking-wider"
                                            placeholder="correo@ejemplo.com"
                                        >
                                        <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-gray-400 group-hover:text-[#611232] transition-colors">
                                            <i class="fas fa-envelope text-xl"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Submit Section -->
                    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-200/50">
                        <p class="text-sm text-gray-500 flex items-center bg-[#611232]/5 px-4 py-2 rounded-lg">
                            <i class="fas fa-lock text-[#611232] mr-2"></i>
                            Sus datos están protegidos
                        </p>
                        <button 
                            type="submit"
                            class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-[#611232] text-white rounded-xl hover:bg-[#4a0d26] focus:outline-none focus:ring-2 focus:ring-[#611232] focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl group"
                            :disabled="isSubmitting"
                        >
                            <span class="text-base font-medium mr-3">{{ isSubmitting ? 'Enviando...' : 'Enviar Denuncia' }}</span>
                            <i class="fas fa-paper-plane transform group-hover:translate-x-1 transition-transform" :class="{ 'animate-bounce': isSubmitting }"></i>
                        </button>
                    </div>
                </form>
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

const currentStep = ref(1)

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
        await new Promise(resolve => setTimeout(resolve, 1500))
        alert('Su denuncia ha sido enviada exitosamente.')
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

<style scoped>
.animate-bounce {
    animation: bounce 1s infinite;
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
        transform: translateY(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}
</style>
