<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="head" v-reveal>
        <header class="section-head">
          <p class="eyebrow">{{ t('projects.eyebrow') }}</p>
          <h2 class="section-title">{{ t('projects.title') }}</h2>
          <p class="section-lede">{{ t('projects.lede') }}</p>
        </header>

        <div class="filters" role="group" :aria-label="lang === 'it' ? 'Filtra per categoria' : 'Filter by category'">
          <button
            v-for="f in filters"
            :key="f.id"
            type="button"
            class="filter"
            :class="{ 'is-active': filter === f.id }"
            :aria-pressed="filter === f.id"
            @click="filter = f.id"
          >
            {{ tr(f.label) }}
            <span class="filter__count">{{ f.count }}</span>
          </button>
        </div>
      </div>

      <TransitionGroup name="grid" tag="div" class="grid">
        <ProjectCard v-for="p in visible" :key="p.slug" :project="p" />
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { projects, categories } from '../data/projects'
import { useI18n } from '../composables/useI18n'

const { t, tr, lang } = useI18n()
const filter = ref('all')

const filters = computed(() => [
  { id: 'all', label: t('projects.all'), count: projects.length },
  ...categories
    .map((c) => ({ ...c, count: projects.filter((p) => p.category === c.id).length }))
    .filter((c) => c.count > 0),
])

const visible = computed(() =>
  filter.value === 'all' ? projects : projects.filter((p) => p.category === filter.value)
)
</script>

<style scoped>
.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: clamp(28px, 4vw, 40px);
}
.head .section-head { margin-bottom: 0; }

.filters {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  padding: 4px;
  background: var(--surface-alt);
  border: 1px solid var(--border);
  border-radius: 999px;
}
.filter {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 38px;
  padding: 0 14px;
  border: 0;
  border-radius: 999px;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
}
.filter:hover { color: var(--text); }
.filter.is-active { background: var(--surface); color: var(--text); box-shadow: var(--shadow); }
.filter__count {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-faint);
}
.filter.is-active .filter__count { color: var(--accent-text); }

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(16px, 2.4vw, 24px);
}

/* Animazione filtro */
.grid-enter-active,
.grid-leave-active { transition: opacity 0.3s var(--ease), transform 0.3s var(--ease); }
.grid-enter-from,
.grid-leave-to { opacity: 0; transform: scale(0.97); }
.grid-leave-active { position: absolute; visibility: hidden; }
.grid-move { transition: transform 0.4s var(--ease); }

@media (max-width: 1000px) {
  .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
  .grid { grid-template-columns: 1fr; }
  .filters { border-radius: var(--radius); width: 100%; }
  .filter { flex: 1 1 auto; justify-content: center; }
}
</style>
