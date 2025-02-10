// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Piedras Negras'
    }
  },
  runtimeConfig: {
    emailUser: process.env.EMAIL_USER,
    emailPassword: process.env.EMAIL_PASSWORD,
    public: {
      formSubmissionEmail: 'contraloria@piedrasnegras.gob.mx'
    }
  }
})
