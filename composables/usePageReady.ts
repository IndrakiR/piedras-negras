import { onMounted } from 'vue'

export const usePageReady = () => {
  const emit = defineEmits(['page-ready'])

  onMounted(() => {
    // Emit the page-ready event after a short delay to ensure content is loaded
    setTimeout(() => {
      emit('page-ready')
    }, 100)
  })
}
