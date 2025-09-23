<template>
  <div class="app">
    <SiteHeader />
    <main class="container">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<style>
/* puoi lasciare vuoto o importare uno stile globale in main.css */
</style>
