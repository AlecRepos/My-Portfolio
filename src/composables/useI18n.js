import { ref, watchEffect } from 'vue'
import { ui } from '../data/ui'

const STORAGE_KEY = 'lang'
const SUPPORTED = ['it', 'en']

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (SUPPORTED.includes(saved)) return saved
  } catch {}
  const nav = (navigator.language || 'it').slice(0, 2).toLowerCase()
  return nav === 'it' ? 'it' : 'en'
}

const lang = ref(initialLang())

watchEffect(() => {
  document.documentElement.lang = lang.value
  try { localStorage.setItem(STORAGE_KEY, lang.value) } catch {}
})

/** Testo dell'interfaccia: t('nav.projects') */
function t(path) {
  const value = path.split('.').reduce((o, k) => o?.[k], ui)
  return tr(value) ?? path
}

/** Valore bilingue: tr({ it: '...', en: '...' }) — le stringhe semplici passano invariate */
function tr(value) {
  if (value && typeof value === 'object' && !Array.isArray(value) && ('it' in value || 'en' in value)) {
    return value[lang.value] ?? value.it
  }
  return value
}

function setLang(l) {
  if (SUPPORTED.includes(l)) lang.value = l
}

export function useI18n() {
  return { lang, t, tr, setLang }
}
