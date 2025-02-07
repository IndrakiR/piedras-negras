<template>
    <div>
        <BannerV2 
            title="Denuncia a Funcionario Público"
            subtitle="Sistema de denuncias para funcionarios públicos del municipio"
            :cards="bannerCards"
        />
        <div class="max-w-4xl mx-auto px-4 py-16">
            <DenunciaForm @submit="handleSubmit" />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ['inicio']
})

const bannerCards = [
    {
        title: 'Confidencialidad',
        description: 'Tu información será tratada de manera confidencial',
        icon: 'fas fa-user-shield'
    },
    {
        title: 'Seguimiento',
        description: 'Podrás dar seguimiento a tu denuncia',
        icon: 'fas fa-search'
    },
    {
        title: 'Respuesta',
        description: 'Recibirás una respuesta en un plazo máximo de 5 días hábiles',
        icon: 'fas fa-clock'
    }
]

const handleSubmit = (formData) => {
    console.log('Form submitted:', formData)
    // Handle form submission here
}
</script>