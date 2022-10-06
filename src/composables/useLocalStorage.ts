import { computed, onMounted, ref, Ref } from 'vue'

export function useLocalStorage (key:string): Ref<string|null> {
  const useLocalStorage = ref<string|null>(null)

  onMounted(
    () => {
      useLocalStorage.value = localStorage.getItem(key)
    }
  )

  return computed({
    get () {
      return useLocalStorage.value
    },
    set (value: string) {
      localStorage.setItem(key, value)
      useLocalStorage.value = value
    }
  })
}
