import { computed, onMounted, ref } from 'vue'

export interface useColorModeOptions {
  selector?: string
  attribute?: string
  modes?: Record<string, string>
  defaultMode?: keyof useColorModeOptions['modes']
}

export function useColorMode ({
  selector = 'html',
  attribute = 'color-scheme',
  modes = {
    dark: 'dark',
    light: 'light',
    auto: 'auto'
  },
  defaultMode
}: useColorModeOptions = {}) {
  const mode = ref<string|null>(null)
  const element = ref<Element|null>(null)

  onMounted(() => {
    element.value = document.querySelector(selector)

    if (element.value)
      element.value.setAttribute(attribute, mode.value ?? defaultMode ?? '')
  })

  return computed({
    get () {
      return mode.value
    },
    set (value) {
      mode.value = modes[value] ?? defaultMode

      if (element.value)
        element.value.setAttribute(attribute, value)
    }
  })
}
