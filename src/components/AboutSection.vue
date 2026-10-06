<template>
  <section id="about" class="section section--alt">
    <div class="container">
      <header class="section-head" v-reveal>
        <p class="eyebrow">{{ t('about.eyebrow') }}</p>
        <h2 class="section-title">{{ t('about.title') }}</h2>
        <p class="section-lede">{{ t('about.lede') }}</p>
      </header>

      <div class="about">
        <!-- Esperienza -->
        <div class="col" v-reveal>
          <h3 class="col__title"><AppIcon name="briefcase" /> {{ t('about.experience') }}</h3>

          <article v-for="job in profile.experience" :key="job.org" class="card job">
            <header class="job__head">
              <div>
                <h4 class="job__role">{{ tr(job.role) }}</h4>
                <p class="job__org">{{ job.org }} <span aria-hidden="true">·</span> {{ job.place }}</p>
              </div>
              <span class="period">{{ tr(job.period) }}</span>
            </header>

            <ul class="job__items">
              <li v-for="item in job.items" :key="tr(item.title)" class="job__item">
                <p class="job__item-title">{{ tr(item.title) }}</p>
                <p class="job__item-text">{{ tr(item.text) }}</p>
                <div class="tag-list">
                  <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </li>
            </ul>
          </article>
        </div>

        <!-- Formazione -->
        <div class="col" v-reveal="120">
          <h3 class="col__title"><AppIcon name="cap" /> {{ t('about.education') }}</h3>

          <ol class="timeline">
            <li v-for="ed in profile.education" :key="tr(ed.title)" class="timeline__item">
              <span class="timeline__dot" aria-hidden="true"></span>
              <div class="card edu">
                <span v-if="ed.period" class="period">{{ tr(ed.period) }}</span>
                <h4 class="edu__title">{{ tr(ed.title) }}</h4>
                <p class="edu__org">{{ tr(ed.org) }}</p>
                <p v-if="ed.detail" class="edu__detail">{{ tr(ed.detail) }}</p>

                <div v-if="ed.courses" class="courses">
                  <p class="courses__label">{{ t('about.courses') }}</p>
                  <ul class="courses__list">
                    <li v-for="c in ed.courses" :key="tr(c.name)">
                      <span>{{ tr(c.name) }}</span>
                      <span v-if="c.grade" class="grade">{{ c.grade }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ol>
        </div>
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
.about {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: clamp(28px, 4vw, 48px);
  align-items: start;
}

.col__title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-family: var(--font-mono);
  font-weight: 500;
  letter-spacing: 0;
  color: var(--text-muted);
  margin-bottom: 16px;
}
.col__title :deep(svg) { color: var(--accent); }

.period {
  display: inline-flex;
  align-items: center;
  height: 26px;
  padding: 0 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-text);
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}

/* Job */
.job { padding: clamp(20px, 3vw, 28px); }
.job__head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border);
}
.job__role { font-size: 21px; }
.job__org { margin-top: 4px; color: var(--text-muted); }

.job__items { display: grid; gap: 22px; padding-top: 22px; }
.job__item { padding-left: 16px; border-left: 2px solid var(--beige-200); }
.job__item-title { font-weight: 600; }
.job__item-text { margin: 4px 0 12px; color: var(--text-muted); }

/* Education timeline */
.timeline { list-style: none; margin: 0; padding: 0 0 0 22px; position: relative; display: grid; gap: 16px; }
.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: var(--beige-200);
}
.timeline__item { position: relative; }
.timeline__dot {
  position: absolute;
  left: -22px;
  top: 24px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--surface);
  border: 3px solid var(--accent);
}
.timeline__item + .timeline__item .timeline__dot { border-color: var(--beige-300); }

.edu { padding: 20px 22px; }
.edu__title { font-size: 18px; margin-top: 12px; }
.edu__org { margin-top: 4px; color: var(--text-muted); }
.edu__detail { margin-top: 2px; font-size: 14px; color: var(--text-faint); }

.courses { margin-top: 18px; padding-top: 16px; border-top: 1px solid var(--border); }
.courses__label {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-faint);
  margin-bottom: 8px;
}
.courses__list { display: grid; gap: 2px; }
.courses__list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 6px 0;
  font-size: 15px;
}
.grade {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--accent-text);
  white-space: nowrap;
}

@media (max-width: 900px) {
  .about { grid-template-columns: 1fr; }
}
@media (max-width: 520px) {
  .job__head { flex-direction: column-reverse; gap: 10px; }
}
</style>
