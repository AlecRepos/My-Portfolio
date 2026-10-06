<template>
  <header class="header" :class="{ 'header--scrolled': scrolled, 'header--open': open }">
    <div class="container header__inner">
      <a href="#top" class="brand" @click="open = false">
        <span class="brand__mark" aria-hidden="true">AC</span>
        <span class="brand__name">{{ profile.name }}</span>
      </a>

      <nav class="nav" :aria-label="lang === 'it' ? 'Navigazione principale' : 'Main navigation'">
        <ul id="main-menu" class="nav__list">
          <li v-for="item in items" :key="item.id">
            <a
              :href="`#${item.id}`"
              class="nav__link"
              :class="{ 'is-active': active === item.id }"
              :aria-current="active === item.id ? 'true' : undefined"
              @click="open = false"
            >{{ t(item.label) }}</a>
          </li>
        </ul>
      </nav>

      <div class="header__actions">
        <div class="lang" role="group" :aria-label="t('nav.lang')">
          <button
            v-for="l in ['it', 'en']"
            :key="l"
            type="button"
            class="lang__btn"
            :class="{ 'is-active': lang === l }"
            :aria-pressed="lang === l"
            @click="setLang(l)"
          >{{ l.toUpperCase() }}</button>
        </div>

        <a href="#contact" class="btn btn--primary btn--sm header__cta">{{ t('nav.cta') }}</a>

        <button
          type="button"
          class="icon-btn header__toggle"
          :aria-expanded="open"
          aria-controls="main-menu"
          :aria-label="open ? t('nav.close') : t('nav.menu')"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'close' : 'menu'" :size="20" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import AppIcon from './AppIcon.vue'
import { profile } from '../data/profile'
import { useI18n } from '../composables/useI18n'

const { t, lang, setLang } = useI18n()

const items = [
  { id: 'about', label: 'nav.about' },
  { id: 'projects', label: 'nav.projects' },
  { id: 'skills', label: 'nav.skills' },
  { id: 'contact', label: 'nav.contact' },
]

const scrolled = ref(false)
const open = ref(false)
const active = ref('')

function onScroll() {
  scrolled.value = window.scrollY > 8
}

let spy
onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })

  // Evidenzia la voce di menu della sezione visibile
  spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) active.value = e.target.id
      })
    },
    { rootMargin: '-45% 0px -50% 0px' }
  )
  ;['top', ...items.map((i) => i.id)].forEach((id) => {
    const el = document.getElementById(id)
    if (el) spy.observe(el)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  spy?.disconnect()
})

watch(open, (v) => document.body.classList.toggle('no-scroll', v))
</script>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  height: var(--header-h);
  transition: background-color 0.25s var(--ease), box-shadow 0.25s var(--ease), border-color 0.25s;
  border-bottom: 1px solid transparent;
}
.header--scrolled,
.header--open {
  background: rgba(250, 246, 239, 0.86);
  backdrop-filter: saturate(1.4) blur(14px);
  -webkit-backdrop-filter: saturate(1.4) blur(14px);
  border-bottom-color: var(--border);
}

.header__inner {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
}

.brand { display: inline-flex; align-items: center; gap: 10px; font-weight: 600; }
.brand__mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--text);
  color: var(--cream);
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 500;
  position: relative;
}
.brand__mark::after {
  content: '';
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 5px;
  height: 2px;
  border-radius: 2px;
  background: var(--accent);
}
.brand__name { font-family: var(--font-display); font-size: 17px; letter-spacing: -0.01em; }

.nav { margin-left: auto; }
.nav__list { display: flex; gap: 4px; }
.nav__link {
  display: inline-flex;
  align-items: center;
  height: 38px;
  padding: 0 14px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.2s, background-color 0.2s;
}
.nav__link:hover { color: var(--text); background: var(--beige-100); }
.nav__link.is-active { color: var(--text); background: var(--beige-100); }

.header__actions { display: flex; align-items: center; gap: 10px; }

.lang {
  display: inline-flex;
  padding: 3px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--surface);
}
.lang__btn {
  height: 30px;
  min-width: 36px;
  padding: 0 8px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--text-faint);
  transition: background-color 0.2s, color 0.2s;
}
.lang__btn.is-active { background: var(--text); color: var(--cream); }

.header__toggle { display: none; }

@media (max-width: 900px) {
  .header__cta { display: none; }
  .header__toggle { display: inline-grid; }
  .header__actions { margin-left: auto; }

  .nav {
    position: fixed;
    inset: var(--header-h) 0 auto 0;
    margin: 0;
    background: var(--cream);
    border-bottom: 1px solid var(--border);
    box-shadow: var(--shadow);
    padding: 12px var(--gutter) 20px;
    transform: translateY(-8px);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s var(--ease), transform 0.2s var(--ease), visibility 0.2s;
  }
  .header--open .nav { opacity: 1; transform: none; visibility: visible; }
  .nav__list { flex-direction: column; gap: 2px; }
  .nav__link { height: 48px; font-size: 17px; padding: 0 12px; border-radius: var(--radius-sm); width: 100%; }
}

@media (max-width: 420px) {
  .brand__name { display: none; }
}
</style>

<style>
body.no-scroll { overflow: hidden; }
</style>
