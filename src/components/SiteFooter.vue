<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p class="footer__copy">© {{ year }} {{ profile.name }}. {{ t('footer.rights') }}</p>

      <ul class="footer__social">
        <li>
          <a :href="profile.github" target="_blank" rel="noopener" aria-label="GitHub"><AppIcon name="github" /></a>
        </li>
        <li>
          <a :href="profile.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn"><AppIcon name="linkedin" /></a>
        </li>
        <li>
          <a :href="`mailto:${profile.email}`" aria-label="Email"><AppIcon name="mail" /></a>
        </li>
      </ul>

      <a href="#top" class="footer__top">
        {{ t('footer.top') }}
        <AppIcon name="arrowUp" :size="16" />
      </a>
    </div>
  </footer>
</template>

<script setup>
import AppIcon from './AppIcon.vue'
import { profile } from '../data/profile'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<style scoped>
.footer { padding: 28px 0 36px; border-top: 1px solid var(--border); }
.footer__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.footer__copy { font-size: 14px; color: var(--text-faint); }
.footer__social { display: flex; gap: 4px; }
.footer__social a {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: var(--text-muted);
  transition: color 0.2s, background-color 0.2s;
}
.footer__social a:hover { color: var(--accent-text); background: var(--beige-100); }
.footer__top {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
}
.footer__top:hover { color: var(--accent-text); }

@media (max-width: 640px) {
  .footer__inner { flex-direction: column; text-align: center; }
}
</style>
