<!-- pages/noticias/index.vue -->
<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Encabezado centrado con tipografías más grandes -->
      <div class="text-center mb-8">
        <h2 class="text-3xl font-semibold text-gray-900">Últimas Noticias</h2>
        <p class="text-base text-gray-500 mt-2">
          Mantente al día con los eventos más recientes de la ciudad
        </p>
      </div>

      <!-- Contenedor con transition-group para animar la carga de noticias -->
      <!-- Definimos 1 columna para móvil, 2 para sm, 3 para lg -->
      <transition-group
        tag="div"
        name="fade"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center"
      >
        <!-- Iteración de las noticias visibles (bind con :key para animación) -->
        <article
          v-for="(news, index) in visibleNews"
          :key="index"
          class="max-w-sm w-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <!-- Imagen más alta (h-60). Se ajusta al ancho de la tarjeta. -->
          <img
            :src="news.img"
            :alt="news.title"
            class="w-full h-60 object-cover rounded-t-lg"
          />

          <!-- Transition individual para expandir/contraer el texto -->
          <transition name="expand">
            <!-- Contenedor de texto: se muestra/oculta sin cambiar la tarjeta en sí -->
            <div class="p-4" v-if="true">
              <time class="text-sm text-gray-500 block">{{ news.date }}</time>
              <h3 class="mt-2 text-lg font-medium text-gray-900">
                {{ news.title }}
              </h3>

              <!-- Si la tarjeta está expandida, se muestra la descripción completa; si no, un resumen -->
              <p 
                class="mt-2 text-sm text-gray-600" 
                :class="!isExpanded(index) ? 'line-clamp-2' : ''"
              >
                {{ isExpanded(index) ? news.fullDesc : news.shortDesc }}
              </p>

              <!-- Botón Leer más / Leer menos -->
              <button
                class="mt-3 inline-flex items-center text-sm font-medium text-[#5e1210] hover:text-[#801815] focus:outline-none"
                @click="toggleExpand(index)"
              >
                {{ isExpanded(index) ? 'Leer menos' : 'Leer más' }}
                <Icon name="heroicons:arrow-right-20-solid" class="ml-1 w-4 h-4" />
              </button>
            </div>
          </transition>
        </article>
      </transition-group>

      <!-- Botón "Cargar más" en la parte inferior, centrado -->
      <div class="mt-8 text-center">
        <!-- Mostrar el botón solo si hay más noticias por mostrar -->
        <button
          v-if="itemsToShow < allNews.length"
          @click="loadMore"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#5e1210] hover:bg-[#801815] transition-colors duration-300"
        >
          Cargar más
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

// ARRAY con TODAS las noticias (agregamos 'fullDesc' además de 'shortDesc')
const allNews = ref([
  {
    date: '23 Dic, 2024',
    title: 'Inauguración del Nuevo Parque Recreativo',
    shortDesc: 'El nuevo espacio verde de la ciudad abre sus puertas con instalaciones modernas para toda la familia.',
    fullDesc: 'El nuevo espacio verde de la ciudad abre sus puertas con instalaciones modernas para toda la familia. Este proyecto ha contado con la participación activa de la comunidad y el apoyo de diversas asociaciones ambientales. Entre las novedades se incluyen áreas de picnic, senderos para caminar, ciclovías y zonas para mascotas, convirtiéndolo en un lugar perfecto para pasar tiempo al aire libre.',
    img: 'https://placehold.co/400x225'
  },
  {
    date: '22 Dic, 2024',
    title: 'Festival Cultural de Invierno',
    shortDesc: 'Gran celebración de arte y cultura con artistas locales y nacionales durante todo el mes.',
    fullDesc: 'Gran celebración de arte y cultura con artistas locales y nacionales durante todo el mes. El festival incluye conciertos, exposiciones, talleres y eventos para todas las edades. Es una oportunidad única de conocer la riqueza cultural de la región y disfrutar de actividades interactivas que promueven el arte y la diversidad.',
    img: 'https://placehold.co/400x225'
  },
  {
    date: '21 Dic, 2024',
    title: 'Nuevo Programa de Becas Municipales',
    shortDesc: 'El ayuntamiento anuncia programa de apoyo educativo para estudiantes destacados de la región.',
    fullDesc: 'El ayuntamiento anuncia un novedoso programa de becas para apoyar a estudiantes destacados de la región. Dicho programa cubrirá gastos de matrícula, materiales y, en algunos casos, alojamiento para quienes cumplan con ciertos requisitos de excelencia académica y participación ciudadana.',
    img: 'https://placehold.co/400x225'
  },
  {
    date: '20 Dic, 2024',
    title: 'Campaña de Reforestación Urbana',
    shortDesc: 'Voluntarios y autoridades locales participan en la siembra de árboles en avenidas principales.',
    fullDesc: 'Voluntarios y autoridades locales participan en la siembra de árboles en avenidas principales para contrarrestar el calentamiento urbano y embellecer la ciudad. La campaña contempla la plantación de más de 5,000 árboles y el mantenimiento de espacios verdes ya existentes.',
    img: 'https://placehold.co/400x225'
  },
  {
    date: '19 Dic, 2024',
    title: 'Expo Artesanal y Gastronómica',
    shortDesc: 'Artesanías, platillos típicos y música regional en la plaza principal.',
    fullDesc: 'Artesanías, platillos típicos y música regional en la plaza principal, con la participación de más de 50 expositores locales. Este evento busca fomentar el comercio justo y la reactivación económica de los artesanos de la zona, además de poner en valor la cultura regional.',
    img: 'https://placehold.co/400x225'
  },
  {
    date: '18 Dic, 2024',
    title: 'Foro de Empleo y Oportunidades Laborales',
    shortDesc: 'Empresas locales se reúnen para reclutar talento y ofrecer capacitación en diversas áreas.',
    fullDesc: 'Empresas locales e instituciones educativas se reúnen para reclutar talento y ofrecer capacitación en diversas áreas, desde tecnología hasta comercio. El foro proporciona un espacio de networking, charlas y talleres de formación a quienes buscan empleo o desean mejorar sus competencias.',
    img: 'https://placehold.co/400x225'
  },
  {
    date: '17 Dic, 2024',
    title: 'Maratón Navideño',
    shortDesc: 'Participa en la carrera navideña con tu familia y amigos, con premios para los primeros lugares.',
    fullDesc: 'Participa en la carrera navideña con tu familia y amigos, con premios para los primeros lugares. El evento culminará con un convivio y una serie de actividades recreativas, promoviendo un estilo de vida saludable y la convivencia familiar durante estas fiestas.',
    img: 'https://placehold.co/400x225'
  },
  {
    date: '16 Dic, 2024',
    title: 'Taller de Manualidades Recicladas',
    shortDesc: 'Aprende a reutilizar materiales para crear decoraciones navideñas únicas y amigables con el ambiente.',
    fullDesc: 'Aprende a reutilizar materiales para crear decoraciones navideñas únicas y amigables con el ambiente. Este taller, impartido por expertos en sostenibilidad, busca concienciar sobre la importancia de reducir residuos y fomentar la creatividad en los participantes.',
    img: 'https://placehold.co/400x225'
  },
  {
    date: '15 Dic, 2024',
    title: 'Encuentro de Bandas Juveniles',
    shortDesc: 'Bandas locales presentarán su música en un encuentro especial previo a las fiestas decembrinas.',
    fullDesc: 'Bandas locales presentarán su música en un encuentro especial previo a las fiestas decembrinas. El evento es gratuito y se lleva a cabo en la plaza mayor, contando con una tarima principal y espacios designados para la venta de alimentos y recuerdos.',
    img: 'https://placehold.co/400x225'
  },
])

// Mostramos 3 tarjetas inicialmente
const itemsToShow = ref(3)

// Computed: muestra solamente la porción de `allNews`
const visibleNews = computed(() => {
  return allNews.value.slice(0, itemsToShow.value)
})

// Carga más noticias (3 cada vez que se hace clic)
function loadMore() {
  itemsToShow.value += 3
}

/**
 * Manejo de la tarjeta expandida
 * expandedIndex: guarda el índice de la tarjeta expandida (o null si ninguna)
 */
const expandedIndex = ref<number | null>(null)

/**
 * Retorna true si la tarjeta con cierto índice está expandida
 */
function isExpanded(index: number) {
  return expandedIndex.value === index
}

/**
 * Si la tarjeta no está expandida, la expande; si ya está expandida, la colapsa.
 */
function toggleExpand(index: number) {
  if (expandedIndex.value === index) {
    expandedIndex.value = null // Cerrar
  } else {
    expandedIndex.value = index // Expandir
  }
}
</script>

<style scoped>
/* Transiciones para nuestro "fade" (al montar las tarjetas) */
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Animación para expandir el texto (al mostrar la fullDesc) */
.expand-enter-active, 
.expand-leave-active {
  transition: max-height 0.3s ease, opacity 0.3s ease;
}
.expand-enter-from, 
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

/* Truncar texto a 2 líneas */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
