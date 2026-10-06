<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="project" class="modal" @click.self="close" @keydown.esc="close">
        <div
          ref="dialog"
          class="modal__dialog"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`title-${project.slug}`"
          tabindex="-1"
          @keydown.tab="trapFocus"
        >
          <button type="button" class="icon-btn modal__close" :aria-label="t('projects.close')" @click="close">
            <AppIcon name="close" :size="20" />
          </button>

          <div class="modal__media">
            <img class="modal__media-bg" :src="project.cover" alt="" aria-hidden="true" />
            <img class="modal__media-img" :src="project.cover" :alt="project.title" />
          </div>

          <div class="modal__content">
            <p class="modal__cat">
              {{ categoryLabel }}
              <span v-if="project.wip" class="modal__wip">{{ t('projects.wip') }}</span>
            </p>
            <h2 :id="`title-${project.slug}`" class="modal__title">{{ project.title }}</h2>
            <p class="modal__lede">{{ tr(project.excerpt) }}</p>

            <div class="modal__grid">
              <div>
                <p class="modal__body">{{ tr(project.body) }}</p>

                <template v-if="project.highlights">
                  <h3 class="modal__h">{{ t('projects.highlights') }}</h3>
                  <ul class="modal__list">
                    <li v-for="h in tr(project.highlights)" :key="h">{{ h }}</li>
                  </ul>
                </template>
              </div>

              <aside class="modal__side">
                <h3 class="modal__h modal__h--first">{{ t('projects.stack') }}</h3>
                <div class="tag-list">
                  <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>

                <div v-if="project.links?.length" class="modal__links">
                  <a
                    v-for="l in project.links"
                    :key="l.url"
                    :href="l.url"
                    target="_blank"
                    rel="noopener"
                    class="btn btn--sm"
                    :class="l === project.links[0] ? 'btn--primary' : 'btn--ghost'"
                  >
                    <AppIcon :name="linkIcon(l.type)" :size="16" />
                    {{ linkLabel(l) }}
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, ref, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AppIcon from './AppIcon.vue'
import { projects, categories } from '../data/projects'
import { useI18n } from '../composables/useI18n'

const { t, tr, lang } = useI18n()
const route = useRoute()
const router = useRouter()
const dialog = ref(null)

const project = computed(() =>
  route.name === 'project' ? projects.find((p) => p.slug === route.params.slug) : null
)
const categoryLabel = computed(() => tr(categories.find((c) => c.id === project.value?.category)?.label))

let lastFocus = null
watch(
  project,
  async (p) => {
    document.body.classList.toggle('no-scroll', !!p)
    if (p) {
      lastFocus = document.activeElement
      document.title = `${p.title} — Alessandro Cacchi`
      await nextTick()
      dialog.value?.focus()
    } else {
      document.title = 'Alessandro Cacchi — Portfolio'
      lastFocus?.focus?.({ preventScroll: true })
    }
  },
  { immediate: true }
)

// Slug inesistente → torna alla home
watch(
  () => route.params.slug,
  (slug) => {
    if (route.name === 'project' && !projects.some((p) => p.slug === slug)) router.replace('/')
  },
  { immediate: true }
)

function close() {
  if (window.history.state?.back) router.back()
  else router.replace('/')
}

function linkIcon(type) {
  return { repo: 'github', pdf: 'file', live: 'globe' }[type] || 'external'
}
function linkLabel(l) {
  if (l.label) return tr(l.label)
  const labels = {
    repo: { it: 'Repository', en: 'Repository' },
    pdf: { it: 'Report PDF', en: 'PDF report' },
    live: { it: 'Visita il sito', en: 'Visit website' },
  }
  return labels[l.type]?.[lang.value] || 'Link'
}

function trapFocus(e) {
  const nodes = dialog.value?.querySelectorAll('a[href], button:not([disabled])')
  if (!nodes?.length) return
  const first = nodes[0]
  const last = nodes[nodes.length - 1]
  if (e.shiftKey && (document.activeElement === first || document.activeElement === dialog.value)) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(43, 29, 20, 0.5);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  overflow-y: auto;
}

.modal__dialog {
  position: relative;
  width: 100%;
  max-width: 880px;
  max-height: calc(100dvh - 48px);
  overflow-y: auto;
  background: var(--surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  outline: none;
}

.modal__close {
  position: sticky;
  top: 16px;
  float: right;
  margin: 16px 16px -58px 0;
  z-index: 2;
  background: rgba(255, 253, 249, 0.92);
}

.modal__media {
  position: relative;
  display: grid;
  place-items: center;
  padding: clamp(16px, 3vw, 28px);
  background: var(--brown-900);
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}
.modal__media-bg {
  position: absolute;
  inset: -40px;
  width: calc(100% + 80px);
  height: calc(100% + 80px);
  object-fit: cover;
  filter: blur(28px) saturate(1.1);
  opacity: 0.55;
  transform: scale(1.1);
}
.modal__media-img {
  position: relative;
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: min(52vh, 460px);
  object-fit: contain;
  border-radius: var(--radius);
  box-shadow: 0 18px 40px -16px rgba(0, 0, 0, 0.6);
}

.modal__content { padding: clamp(22px, 4vw, 40px); }
.modal__cat {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent-text);
}
.modal__wip {
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--brown-900);
  color: var(--cream);
  font-size: 11px;
}
.modal__title { margin-top: 8px; font-size: clamp(26px, 3.6vw, 36px); }
.modal__lede { margin-top: 10px; font-size: 18px; color: var(--text-muted); }

.modal__grid {
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
  gap: 32px;
  margin-top: 28px;
  padding-top: 28px;
  border-top: 1px solid var(--border);
}

.modal__body { color: var(--text); }
.modal__h {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--text-faint);
  text-transform: uppercase;
  margin: 24px 0 12px;
}
.modal__h--first { margin-top: 0; }

.modal__list { display: grid; gap: 10px; }
.modal__list li { position: relative; padding-left: 22px; color: var(--text-muted); }
.modal__list li::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 0.62em;
  width: 8px;
  height: 8px;
  border-radius: 2px;
  background: var(--accent);
  transform: rotate(45deg);
}

.modal__side {
  align-self: start;
  padding: 20px;
  background: var(--surface-alt);
  border: 1px solid var(--border);
  border-radius: var(--radius);
}
.modal__links { display: flex; flex-direction: column; gap: 8px; margin-top: 20px; }
.modal__links .btn { width: 100%; }

/* Transition */
.modal-enter-active,
.modal-leave-active { transition: opacity 0.25s var(--ease); }
.modal-enter-active .modal__dialog,
.modal-leave-active .modal__dialog { transition: transform 0.3s var(--ease); }
.modal-enter-from,
.modal-leave-to { opacity: 0; }
.modal-enter-from .modal__dialog,
.modal-leave-to .modal__dialog { transform: translateY(16px) scale(0.98); }

@media (max-width: 720px) {
  .modal { padding: 0; place-items: end stretch; }
  .modal__dialog { max-height: 92dvh; border-radius: var(--radius-lg) var(--radius-lg) 0 0; }
  .modal__grid { grid-template-columns: 1fr; gap: 24px; }
  .modal__media { padding: 14px; }
  .modal__media-img { max-height: 38vh; border-radius: var(--radius-sm); }
  .modal-enter-from .modal__dialog,
  .modal-leave-to .modal__dialog { transform: translateY(40px); }
}
</style>
