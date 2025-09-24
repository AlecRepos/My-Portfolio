<template>
  <div id="app">
    <SiteHeader />
    <main>
      <section id="home">
        <Home />
      </section>

      <section id="progetti">
        <Progetti />
      </section>

      <section id="linguaggi">
        <Skills />
      </section>

      <section id="contatti">
        <Contact />
      </section>
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import Home from './views/Home.vue'
import Progetti from './views/Projects.vue'
import Skills from './views/Skills.vue'
import Contact from './views/Contact.vue'
</script>

<style>
html {
  scroll-behavior: smooth; /* attiva lo scroll fluido */
}
section {
  padding: 60px 20px;
  margin: 0 auto;
  max-width: 1200px;
}

section + section {
  margin-top: 40px;
  border-top: 5px solid var(--stroke); /* linea divisoria */
  padding-top: 40px; /* spazio dopo la linea */
}
</style>
