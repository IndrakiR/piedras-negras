export default defineNuxtPlugin(() => {
  const construction = useState('construction', () => true)
  
  return {
    provide: {
      construction
    }
  }
})
