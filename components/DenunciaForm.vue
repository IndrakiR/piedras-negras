<template>
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
        <form action="https://formsubmit.co/contraloria@piedrasnegras.gob.mx" method="POST" class="space-y-8 p-8">
            <input type="hidden" name="_subject" value="Nueva Denuncia desde el Portal">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_captcha" value="true">
            <!-- Progress Steps -->
            <div class="mb-12">
                <h2 class="text-2xl font-bold text-[#611232] mb-8 text-center">Proceso de Denuncia</h2>
                <div class="relative max-w-3xl mx-auto">
                    <!-- Progress Line -->
                    <div class="absolute top-[2.25rem] left-[7%] right-[7%] h-0.5 bg-gray-200"></div>
                    <div
                        class="absolute top-[2.25rem] left-[7%] h-0.5 bg-[#611232] transition-all duration-500 ease-in-out"
                        :style="{ width: ((currentStep - 1) * 43) + '%' }"
                    ></div>

                    <!-- Steps -->
                    <div class="relative grid grid-cols-3 gap-4">
                        <!-- Step 1 -->
                        <div class="flex flex-col items-center">
                            <div class="relative mb-8">
                                <div
                                    class="w-16 h-16 rounded-full bg-white border-4 border-[#611232] flex items-center justify-center z-10 relative transition-all duration-300"
                                    :class="{'bg-[#611232]': currentStep >= 1}"
                                >
                                    <i class="fas fa-file-alt text-xl" :class="currentStep >= 1 ? 'text-white' : 'text-[#611232]'"></i>
                                </div>
                            </div>
                            <h3 class="font-semibold text-[#611232] text-center text-lg mb-1">1. Tipo</h3>
                            <p class="text-sm text-gray-500 text-center">¿Qué tipo de denuncia desea realizar?</p>
                        </div>

                        <!-- Step 2 -->
                        <div class="flex flex-col items-center">
                            <div class="relative mb-8">
                                <div
                                    class="w-16 h-16 rounded-full bg-white border-4 border-[#611232] flex items-center justify-center z-10 relative transition-all duration-300"
                                    :class="{'bg-[#611232]': currentStep >= 2}"
                                >
                                    <i class="fas fa-align-left text-xl" :class="currentStep >= 2 ? 'text-white' : 'text-[#611232]'"></i>
                                </div>
                            </div>
                            <h3
                                class="font-semibold text-center text-lg mb-1"
                                :class="currentStep >= 2 ? 'text-[#611232]' : 'text-gray-400'"
                            >
                                2. Detalles
                            </h3>
                            <p class="text-sm text-gray-500 text-center">Describa los hechos</p>
                        </div>

                        <!-- Step 3 -->
                        <div class="flex flex-col items-center">
                            <div class="relative mb-8">
                                <div
                                    class="w-16 h-16 rounded-full bg-white border-4 border-[#611232] flex items-center justify-center z-10 relative transition-all duration-300"
                                    :class="{'bg-[#611232]': currentStep >= 3}"
                                >
                                    <i class="fas fa-user-shield text-xl" :class="currentStep >= 3 ? 'text-white' : 'text-[#611232]'"></i>
                                </div>
                            </div>
                            <h3
                                class="font-semibold text-center text-lg mb-1"
                                :class="currentStep >= 3 ? 'text-[#611232]' : 'text-gray-400'"
                            >
                                3. Contacto
                            </h3>
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
                            v-model="formData.tipo"
                            class="w-full px-8 py-5 rounded-xl bg-white border-2 border-gray-200 focus:border-[#611232] focus:ring focus:ring-[#611232]/20 transition-all appearance-none placeholder-gray-500 hover:border-[#611232]/50 text-gray-700 text-lg tracking-wider"
                            required
                        >
                            <option value="">Seleccione un tipo</option>
                            <option value="QUEJA">QUEJA</option>
                            <option value="DENUNCIA">DENUNCIA</option>
                            <option value="SUGERENCIA">SUGERENCIA</option>
                        </select>
                        <div
                            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 group-hover:text-[#611232] transition-colors"
                        >
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>

                <!-- Fecha -->
                <div class="relative">
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Fecha <span class="text-[#611232]">*</span>
                    </label>
                    <div class="relative group">
                        <input
                            type="date"
                            v-model="formData.fecha"
                            class="w-full pl-14 pr-8 py-5 rounded-xl bg-white border-2 border-gray-200 focus:border-[#611232] focus:ring focus:ring-[#611232]/20 transition-all placeholder-gray-500 hover:border-[#611232]/50 text-gray-700 text-lg tracking-wider"
                            required
                        >
                        <div
                            class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-gray-400 group-hover:text-[#611232] transition-colors"
                        >
                            <i class="fas fa-calendar text-xl"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Oficina y Funcionario Responsable (Nuevo Bloque) -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Oficina Responsable -->
                <div class="relative">
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Oficina Responsable <span class="text-[#611232]">*</span>
                    </label>
                    <input 
                        type="text"
                        v-model="formData.oficinaResponsable"
                        class="w-full px-8 py-5 rounded-xl bg-white border-2 border-gray-200 focus:border-[#611232] focus:ring focus:ring-[#611232]/20 transition-all placeholder-gray-500 hover:border-[#611232]/50"
                        placeholder="Ingrese la oficina responsable"
                        required
                    >
                </div>

                <!-- Funcionario Responsable -->
                <div class="relative">
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Funcionario Responsable <span class="text-[#611232]">*</span>
                    </label>
                    <input 
                        type="text"
                        v-model="formData.funcionarioResponsable"
                        class="w-full px-8 py-5 rounded-xl bg-white border-2 border-gray-200 focus:border-[#611232] focus:ring focus:ring-[#611232]/20 transition-all placeholder-gray-500 hover:border-[#611232]/50"
                        placeholder="Ingrese el nombre del funcionario"
                        required
                    >
                </div>
            </div>

            <!-- Nombre y Domicilio -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Nombre -->
                <div class="relative">
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Nombre <span class="text-[#611232]">*</span>
                    </label>
                    <div class="relative group">
                        <input
                            type="text"
                            v-model="formData.nombre"
                            class="w-full pl-14 pr-8 py-5 rounded-xl bg-white border-2 border-gray-200 focus:border-[#611232] focus:ring focus:ring-[#611232]/20 transition-all placeholder-gray-500 hover:border-[#611232]/50 text-gray-700 text-lg tracking-wider"
                            required
                        >
                        <div
                            class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-gray-400 group-hover:text-[#611232] transition-colors"
                        >
                            <i class="fas fa-user text-xl"></i>
                        </div>
                    </div>
                </div>

                <!-- Domicilio -->
                <div class="relative">
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Domicilio <span class="text-[#611232]">*</span>
                    </label>
                    <div class="relative group">
                        <input
                            type="text"
                            v-model="formData.domicilio"
                            class="w-full pl-14 pr-8 py-5 rounded-xl bg-white border-2 border-gray-200 focus:border-[#611232] focus:ring focus:ring-[#611232]/20 transition-all placeholder-gray-500 hover:border-[#611232]/50 text-gray-700 text-lg tracking-wider"
                            required
                        >
                        <div
                            class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-gray-400 group-hover:text-[#611232] transition-colors"
                        >
                            <i class="fas fa-home text-xl"></i>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Fecha de los Hechos y Descripción -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Fecha de los Hechos -->
                <div class="relative">
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Fecha de los Hechos <span class="text-[#611232]">*</span>
                    </label>
                    <div class="relative group">
                        <input
                            type="date"
                            v-model="formData.fechaHechos"
                            class="w-full pl-14 pr-8 py-5 rounded-xl bg-white border-2 border-gray-200 focus:border-[#611232] focus:ring focus:ring-[#611232]/20 transition-all placeholder-gray-500 hover:border-[#611232]/50 text-gray-700 text-lg tracking-wider"
                            required
                        >
                        <div
                            class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-gray-400 group-hover:text-[#611232] transition-colors"
                        >
                            <i class="fas fa-calendar text-xl"></i>
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
                        <div
                            class="absolute bottom-3 right-3 px-2 py-1 bg-[#611232]/10 rounded-md text-xs text-[#611232] font-medium"
                        >
                            {{ formData.descripcion.length }}/1000
                        </div>
                    </div>
                    <p class="mt-1.5 text-sm text-gray-500 flex items-center">
                        <i class="fas fa-info-circle mr-2 text-[#611232]"></i>
                        Proporcione detalles específicos que ayuden en la investigación
                    </p>
                </div>
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
                                Teléfono
                            </label>
                            <div class="relative group">
                                <input
                                    type="tel"
                                    v-model="formData.telefono"
                                    class="w-full pl-14 pr-8 py-5 rounded-xl bg-white border-2 border-gray-200 focus:border-[#611232] focus:ring focus:ring-[#611232]/20 transition-all placeholder-gray-500 hover:border-[#611232]/50 text-gray-700 text-lg tracking-wider"
                                    placeholder="Su teléfono (opcional)"
                                >
                                <div
                                    class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-gray-400 group-hover:text-[#611232] transition-colors"
                                >
                                    <i class="fas fa-phone text-xl"></i>
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
                                <div
                                    class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-gray-400 group-hover:text-[#611232] transition-colors"
                                >
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
                >
                    <span class="text-base font-medium mr-3">Enviar Denuncia</span>
                    <i
                        class="fas fa-paper-plane transform group-hover:translate-x-1 transition-transform"
                    ></i>
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const currentStep = ref(1)
const formData = ref({
    tipo: '',
    fecha: '',
    oficinaResponsable: '',
    funcionarioResponsable: '',
    nombre: '',
    domicilio: '',
    fechaHechos: '',
    descripcion: '',
    email: '',
    telefono: ''
})

const submitForm = async () => {
    try {
        // The form will be handled by FormSubmit service
        // You can add any additional client-side validation here if needed
        return true
    } catch (error) {
        console.error('Error al enviar el formulario:', error)
        return false
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
