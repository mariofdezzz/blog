import { computed, Ref, watch } from 'vue'
import { useColorMode, useColorModeOptions } from './useColorMode'
import { useLocalStorage } from './useLocalStorage'

export interface useDarkOptions {
  valueDark?: string
  valueLight?: string
  storageKey?: string
}

export function useDark ({
  valueDark = 'dark',
  valueLight = 'auto',
  storageKey = 'color-scheme',
  ...colorModeOptions
}: useDarkOptions & useColorModeOptions = {}): Ref<boolean> {
  const stored = useLocalStorage(storageKey)
  const color = useColorMode({ ...colorModeOptions, defaultMode: valueLight })

  watch(stored, (value) => {
    color.value = value
  })

  return computed({
    get () {
      return stored.value === 'dark'
    },
    set (value) {
      stored.value = value ? valueDark : valueLight
    }
  })
}
