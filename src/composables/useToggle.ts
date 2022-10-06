import { Ref } from 'vue'

export function useToggle (ref: Ref<boolean>): () => void {
  return () => {
    ref.value = !ref.value
  }
}
