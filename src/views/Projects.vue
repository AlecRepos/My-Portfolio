<template>
  <section class="section">
    <h2>Progetti</h2>
    <p class="muted">Selezione di lavori recenti</p>

    <div class="grid" style="margin-top:12px">
      <div v-for="p in projects" :key="p.slug">
        <ProjectCard
          :project="p"
          :active="p.slug === selectedSlug"
          @select="onSelect(p.slug)"
        />
      </div>

      <!-- Pannello accordion: piena larghezza, sotto le card -->
      <transition name="accordion">
        <article
          v-if="activeProject"
          class="accordion-panel card"
          style="grid-column: 1 / -1"
        >
          <header class="accordion-header">
            <h3 class="accordion-title">{{ activeProject.title }}</h3>
            <button class="btn link" @click="selectedSlug = null">Chiudi</button>
          </header>

          <p class="muted" style="margin:6px 0 12px">{{ activeProject.excerpt }}</p>

          <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px">
            <span v-for="t in activeProject.tags" :key="t" class="tag">{{ t }}</span>
          </div>

          <div class="accordion-body">
            <p style="white-space:pre-wrap">{{ activeProject.body }}</p>

            <div style="display:flex; gap:10px; margin-top:12px" v-if="activeProject.links?.length">
              <a
                v-for="l in activeProject.links"
                :key="l.url"
                class="btn"
                :href="l.url"
                target="_blank"
                rel="noopener"
                :download="l.download ? '' : null"
              >
                {{ l.label }}
              </a>
            </div>
          </div>
        </article>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'

const selectedSlug = ref(null)
const onSelect = (slug) => {
  selectedSlug.value = selectedSlug.value === slug ? null : slug
}
const activeProject = computed(() => projects.find(p => p.slug === selectedSlug.value))
</script>
