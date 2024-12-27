# components/LatestNews.vue
<template>
  <section class="py-8 bg-white">
    <div class="container mx-auto px-4">
      <!-- Título centrado -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold text-black">Últimas Noticias</h1>
      </div>

      <!-- Grid de noticias con ancho máximo para limitar el tamaño -->
      <div class="max-w-[70%] mx-auto">
        <div class="grid md:grid-cols-2 gap-4">
          <!-- Noticia principal -->
          <article class="bg-[#611232] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <NuxtLink :to="paginatedNews[0]?.link" class="block group h-full">
              <div class="p-4 flex flex-col h-full">
                <!-- Icono alineado a la izquierda -->
                <div class="mb-4">
                  <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                    <Icon 
                      :name="paginatedNews[0]?.icon" 
                      class="w-8 h-8 text-white"
                    />
                  </div>
                </div>
                
                <!-- Contenido -->
                <div class="flex-grow">
                  <h2 class="text-lg font-semibold text-white mb-2">
                    {{ paginatedNews[0]?.title }}
                  </h2>
                  <p class="text-gray-200 mb-4 text-sm">
                    {{ paginatedNews[0]?.description }}
                  </p>
                </div>
                <div class="flex items-center text-white text-sm mt-auto">
                  <span class="mr-2">Leer más</span>
                  <Icon 
                    name="ri:arrow-right-line" 
                    class="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </NuxtLink>
          </article>

          <!-- Noticias secundarias -->
          <div class="flex flex-col gap-4">
            <article 
              v-for="(noticia, index) in paginatedNews.slice(1, 3)" 
              :key="index"
              class="bg-[#611232] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <NuxtLink :to="noticia.link" class="block group">
                <div class="p-4 flex gap-4">
                  <!-- Icono lateral -->
                  <div class="flex-shrink-0">
                    <div class="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Icon 
                        :name="noticia.icon" 
                        class="w-5 h-5 text-white"
                      />
                    </div>
                  </div>
                  
                  <!-- Contenido -->
                  <div class="flex-grow flex flex-col">
                    <div class="flex-grow">
                      <h2 class="text-base font-semibold text-white mb-2">
                        {{ noticia.title }}
                      </h2>
                      <p class="text-gray-200 mb-2 text-sm line-clamp-2">
                        {{ noticia.description }}
                      </p>
                    </div>
                    <div class="flex items-center text-white text-sm">
                      <span class="mr-2">Leer más</span>
                      <Icon 
                        name="ri:arrow-right-line" 
                        class="w-4 h-4 transform transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </NuxtLink>
            </article>
          </div>
        </div>
      </div>

      <!-- Indicadores de navegación -->
      <div class="flex justify-center items-center mt-6 space-x-2">
        <button
          v-for="i in totalPages"
          :key="i"
          @click="currentPage = i - 1"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="[
            currentPage === i - 1 
              ? 'bg-[#611232] w-4' 
              : 'bg-[#611232]/40'
          ]"
          :aria-label="`Ir a la página ${i}`"
        ></button>
      </div>

      <!-- Botón Ver Más Noticias -->
      <div class="text-center mt-8">
        <NuxtLink 
          to="/noticias" 
          class="inline-flex items-center px-6 py-3 bg-[#611232] text-white font-medium rounded-lg hover:bg-[#4d0f28] transition-colors duration-300"
        >
          Ver Más Noticias
          <Icon 
            name="ri:arrow-right-line" 
            class="ml-2 w-5 h-5"
          />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const currentPage = ref(0);

const noticias = ref([
  {
    title: 'Proyecto de Infraestructura',
    description: 'El municipio anuncia nuevas obras de mejora vial.',
    link: '#',
    icon: 'ri:building-2-line'
  },
  {
    title: 'Feria de Emprendedores',
    description: 'Se invita a los ciudadanos a asistir y apoyar el comercio local.',
    link: '#',
    icon: 'ri:store-2-line'
  },
  {
    title: 'Evento Cultural',
    description: 'Disfruta de la exposición de arte en el centro histórico.',
    link: '#',
    icon: 'ri:palette-line'
  }
]);

// Número de noticias por página
const newsPerPage = 3;

// Calcular total de páginas
const totalPages = computed(() => Math.ceil(noticias.value.length / newsPerPage));

// Obtener noticias de la página actual
const paginatedNews = computed(() => {
  const start = currentPage.value * newsPerPage;
  const end = start + newsPerPage;
  return noticias.value.slice(start, end);
});

// Funciones de navegación
const nextPage = () => {
  currentPage.value = currentPage.value < totalPages.value - 1 ? currentPage.value + 1 : 0;
};

const prevPage = () => {
  currentPage.value = currentPage.value > 0 ? currentPage.value - 1 : totalPages.value - 1;
};
</script>