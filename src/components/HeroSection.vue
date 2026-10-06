<template>
  <section id="top" class="hero">
    <div class="hero__bg" aria-hidden="true"></div>

    <div class="container hero__inner">
      <div class="hero__copy">
        <p v-if="profile.available" class="status">
          <span class="status__dot" aria-hidden="true"></span>
          {{ tr(profile.availability) }}
        </p>

        <h1 class="hero__title">
          {{ greeting }}<br />
          <span class="hero__name">{{ profile.name }}</span>
        </h1>

        <p class="hero__role">{{ tr(profile.role) }}</p>

        <p v-if="profile.headline" class="hero__headline">{{ tr(profile.headline) }}</p>
        <p class="hero__intro" :class="{ 'hero__intro--lede': !profile.headline }">{{ tr(profile.intro) }}</p>

        <div class="hero__ctas">
          <a href="#projects" class="btn btn--primary">
            {{ t('hero.primary') }}
            <AppIcon name="arrowRight" class="arrow" />
          </a>
          <a href="#contact" class="btn btn--ghost">{{ t('hero.secondary') }}</a>
        </div>

        <ul class="hero__social">
          <li>
            <a :href="profile.github" target="_blank" rel="noopener" class="icon-btn" aria-label="GitHub">
              <AppIcon name="github" />
            </a>
          </li>
          <li>
            <a :href="profile.linkedin" target="_blank" rel="noopener" class="icon-btn" aria-label="LinkedIn">
              <AppIcon name="linkedin" />
            </a>
          </li>
          <li>
            <a :href="`mailto:${profile.email}`" class="icon-btn" aria-label="Email">
              <AppIcon name="mail" />
            </a>
          </li>
          <li class="hero__location">
            <AppIcon name="pin" :size="16" />
            {{ tr(profile.location) }}
          </li>
        </ul>
      </div>

      <aside class="terminal" :aria-label="lang === 'it' ? 'In breve' : 'At a glance'">
        <div class="terminal__bar">
          <span class="terminal__dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="terminal__file">~/whoami.sh</span>
        </div>
        <div class="terminal__body">
          <p class="terminal__cmd"><span class="prompt">$</span> whoami</p>
          <p class="terminal__out">{{ profile.name.toLowerCase().replace(' ', '.') }}</p>
          <p class="terminal__cmd"><span class="prompt">$</span> cat profile.txt</p>
          <dl class="terminal__facts">
            <div v-for="f in profile.facts" :key="tr(f.label)">
              <dt>{{ tr(f.label) }}</dt>
              <dd>{{ tr(f.value) }}</dd>
            </div>
          </dl>
          <p class="terminal__cmd"><span class="prompt">$</span> <span class="cursor" aria-hidden="true"></span></p>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import AppIcon from './AppIcon.vue'
import { profile } from '../data/profile'
import { useI18n } from '../composables/useI18n'

const { t, tr, lang } = useI18n()
const greeting = computed(() => (lang.value === 'it' ? 'Ciao, sono' : 'Hi, I’m'))
</script>

<style scoped>
.hero {
  position: relative;
  padding: calc(var(--header-h) + clamp(48px, 9vw, 104px)) 0 clamp(64px, 9vw, 112px);
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(600px 380px at 85% 20%, rgba(232, 101, 15, 0.12), transparent 70%),
    radial-gradient(500px 360px at 5% 90%, rgba(160, 134, 112, 0.14), transparent 70%),
    linear-gradient(var(--beige-200) 1px, transparent 1px) 0 0 / 48px 48px,
    linear-gradient(90deg, var(--beige-200) 1px, transparent 1px) 0 0 / 48px 48px;
  -webkit-mask-image: linear-gradient(to bottom, #000 30%, transparent 100%);
  mask-image: linear-gradient(to bottom, #000 30%, transparent 100%);
  opacity: 0.55;
}

.hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
  gap: clamp(40px, 6vw, 80px);
  align-items: center;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 6px 14px 6px 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  margin-bottom: 24px;
}
.status__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success);
  box-shadow: 0 0 0 4px rgba(63, 125, 78, 0.16);
}

.hero__title {
  font-size: clamp(40px, 6.4vw, 72px);
  letter-spacing: -0.035em;
  line-height: 1.02;
}
.hero__title { color: var(--text-faint); font-weight: 500; }
.hero__name { color: var(--text); font-weight: 700; }

.hero__role {
  margin-top: 18px;
  font-family: var(--font-mono);
  font-size: 15px;
  color: var(--accent-text);
}

.hero__headline {
  margin-top: 22px;
  max-width: 34ch;
  font-family: var(--font-display);
  font-size: clamp(20px, 2.2vw, 24px);
  font-weight: 500;
  line-height: 1.35;
  letter-spacing: -0.01em;
}

.hero__intro {
  margin-top: 14px;
  max-width: 58ch;
  color: var(--text-muted);
}
.hero__intro--lede {
  margin-top: 24px;
  max-width: 54ch;
  font-size: clamp(17px, 1.5vw, 19px);
  line-height: 1.65;
  color: var(--brown-800);
}

.hero__ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }

.hero__social { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 28px; }
.hero__location {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: 8px;
  font-size: 14px;
  color: var(--text-faint);
}

/* Terminal card */
.terminal {
  background: var(--brown-900);
  color: var(--beige-100);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: 14px;
  transform: rotate(0.6deg);
}
.terminal__bar {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background: var(--brown-800);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.terminal__dots { display: inline-flex; gap: 6px; }
.terminal__dots i { width: 11px; height: 11px; border-radius: 50%; background: #5a4535; }
.terminal__dots i:first-child { background: var(--orange-500); }
.terminal__file { font-size: 12px; color: var(--brown-400); }

.terminal__body { padding: 20px 22px 22px; line-height: 1.7; }
.terminal__cmd { color: var(--beige-100); }
.terminal__out { color: var(--brown-400); margin-bottom: 10px; }
.prompt { color: var(--orange-500); margin-right: 4px; }

.terminal__facts { margin: 6px 0 12px; display: grid; gap: 8px; }
.terminal__facts div {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 12px;
  padding: 8px 0;
  border-top: 1px dashed rgba(255, 255, 255, 0.1);
}
.terminal__facts dt { color: var(--brown-400); }
.terminal__facts dd { margin: 0; color: var(--cream); }

.cursor {
  display: inline-block;
  width: 9px;
  height: 17px;
  vertical-align: -3px;
  background: var(--orange-500);
  animation: blink 1.1s steps(2) infinite;
}
@keyframes blink { 50% { opacity: 0; } }

@media (max-width: 900px) {
  .hero__inner { grid-template-columns: 1fr; }
  .terminal { transform: none; max-width: 520px; }
}

@media (max-width: 480px) {
  .hero__ctas .btn { flex: 1 1 auto; }
  .terminal { font-size: 13px; }
  .terminal__facts div { grid-template-columns: 1fr; gap: 0; }
  .hero__location { margin-left: 0; width: 100%; margin-top: 4px; }
}
</style>
