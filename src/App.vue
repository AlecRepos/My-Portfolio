<template>
  <a href="#main" class="skip-link">{{ lang === 'it' ? 'Vai al contenuto' : 'Skip to content' }}</a>
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </main>
  <SiteFooter />
  <ProjectModal />
  <RouterView />
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import ProjectModal from './components/ProjectModal.vue'
import { useI18n } from './composables/useI18n'

const { lang } = useI18n()
</script>
