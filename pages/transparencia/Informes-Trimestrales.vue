<template>
  <div class="informes-trimestrales">
    <!-- Copy design from presupuesto-2025.vue: Add Banner and container -->
    <BannerV2
      title="Informes Trimestrales"
      subtitle="Reportes periódicos detallados de la gestión financiera"
    />

    <div class="container mx-auto px-4 py-8">
      <div class="prose mx-auto">
        <h2>Acerca de los Informes Trimestrales</h2>
        <p>
          Los informes trimestrales ofrecen una visión profunda del desempeño financiero del municipio, 
          detallando ingresos, gastos y otros indicadores clave. Revise cada reporte para conocer la evolución y 
          las tendencias financieras de la administración pública.
        </p>
        <!-- Additional content similar to presupuesto-2025.vue can be added here,
             e.g. a table of reports or download links -->
      </div>
    </div>
  </div>
</template>

<script>
import BannerV2 from '~/components/BannerV2.vue'

export default {
  name: "InformesTrimestrales",
  components: { BannerV2 },
  data() {
    return {
      // Define your reactive properties as needed
    };
  },
  mounted() {
    // Lifecycle hook logic if necessary
  },
};
</script>

<style scoped>
.informes-trimestrales {
  /* Base styling for the Informes Trimestrales page */
  padding-bottom: 2rem;
}

/* Optional: Extend typography if using prose as in presupuesto-2025.vue */
.prose h2 {
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 1.75rem;
}
</style> 