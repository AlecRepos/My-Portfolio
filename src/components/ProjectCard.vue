<template>
  <article class="pcard">
    <RouterLink :to="`/projects/${project.slug}`" class="pcard__link" :aria-label="`${t('projects.details')}: ${project.title}`">
      <div class="pcard__media">
        <img :src="project.cover" :alt="''" loading="lazy" decoding="async" width="1200" height="700" />
        <span v-if="project.wip" class="pcard__badge">{{ t('projects.wip') }}</span>
      </div>

      <div class="pcard__body">
        <p class="pcard__cat">{{ categoryLabel }}</p>
        <h3 class="pcard__title">{{ project.title }}</h3>
        <p class="pcard__text">{{ tr(project.excerpt) }}</p>

        <div class="pcard__foot">
          <div class="tag-list">
            <span v-for="tag in project.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
            <span v-if="project.tags.length > 3" class="tag tag--more">+{{ project.tags.length - 3 }}</span>
          </div>
          <span class="pcard__more" aria-hidden="true">
            <AppIcon name="arrowRight" :size="18" />
          </span>
        </div>
      </div>
    </RouterLink>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'
import { categories } from '../data/projects'
import { useI18n } from '../composables/useI18n'

const props = defineProps({ project: { type: Object, required: true } })
const { t, tr } = useI18n()
const categoryLabel = computed(() => tr(categories.find((c) => c.id === props.project.category)?.label))
</script>

<style scoped>
.pcard { height: 100%; }
.pcard__link {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease), border-color 0.3s;
}
.pcard__link:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--border-strong);
}

.pcard__media {
  position: relative;
  aspect-ratio: 16 / 10;
  background: var(--beige-100);
  overflow: hidden;
  border-bottom: 1px solid var(--border);
}
.pcard__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease);
}
.pcard__link:hover .pcard__media img { transform: scale(1.04); }

.pcard__badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--brown-900);
  color: var(--cream);
  font-family: var(--font-mono);
  font-size: 11px;
}

.pcard__body { display: flex; flex-direction: column; flex: 1; padding: 20px 22px 22px; }
.pcard__cat {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--accent-text);
  margin-bottom: 6px;
}
.pcard__title { font-size: 20px; }
.pcard__text { margin-top: 8px; color: var(--text-muted); font-size: 15px; flex: 1; }

.pcard__foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 18px;
}
.tag--more { background: transparent; border: 1px solid var(--border); color: var(--text-faint); }

.pcard__more {
  flex: none;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border);
  color: var(--text-muted);
  transition: background-color 0.25s, color 0.25s, border-color 0.25s, transform 0.25s var(--ease);
}
.pcard__link:hover .pcard__more {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--white);
  transform: rotate(-45deg);
}
</style>
