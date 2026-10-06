<template>
  <section id="skills" class="section section--alt">
    <div class="container">
      <header class="section-head" v-reveal>
        <p class="eyebrow">{{ t('skills.eyebrow') }}</p>
        <h2 class="section-title">{{ t('skills.title') }}</h2>
        <p class="section-lede">{{ t('skills.lede') }}</p>
      </header>

      <div class="skills">
        <article v-for="(group, i) in profile.skills" :key="group.icon" class="card skill" v-reveal="i * 80">
          <header class="skill__head">
            <span class="skill__icon"><AppIcon :name="group.icon" :size="22" /></span>
            <div>
              <h3 class="skill__title">{{ tr(group.title) }}</h3>
              <p class="skill__sub">{{ tr(group.sub) }}</p>
            </div>
          </header>
          <ul class="skill__list">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import { profile } from '../data/profile'
import { useI18n } from '../composables/useI18n'

const { t, tr } = useI18n()
</script>

<style scoped>
.skills {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(16px, 2.4vw, 24px);
}

.skill { padding: clamp(20px, 3vw, 28px); transition: border-color 0.25s, box-shadow 0.25s; }
.skill:hover { border-color: var(--border-strong); box-shadow: var(--shadow); }

.skill__head { display: flex; gap: 16px; align-items: center; margin-bottom: 20px; }
.skill__icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--accent-soft);
  color: var(--accent-text);
}
.skill__title { font-size: 19px; }
.skill__sub { margin-top: 2px; font-family: var(--font-mono); font-size: 12px; color: var(--text-faint); }

.skill__list { display: flex; flex-wrap: wrap; gap: 8px; }
.skill__list li {
  padding: 7px 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: var(--cream);
  font-size: 14px;
  font-weight: 500;
  color: var(--brown-800);
  transition: border-color 0.2s, color 0.2s;
}
.skill__list li:hover { border-color: var(--accent); color: var(--accent-text); }

@media (max-width: 760px) {
  .skills { grid-template-columns: 1fr; }
}
</style>
