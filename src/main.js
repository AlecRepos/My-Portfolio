import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/space-grotesk/latin-500.css'
import '@fontsource/space-grotesk/latin-600.css'
import '@fontsource/space-grotesk/latin-700.css'
import '@fontsource/jetbrains-mono/latin-400.css'
import '@fontsource/jetbrains-mono/latin-500.css'
import './assets/main.css'
import { reveal } from './directives/reveal'

// Il sito è una single page: le rotte servono solo per aprire
// il dettaglio di un progetto con un link condivisibile (/projects/:slug).
const Empty = { render: () => null }

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Empty },
    { path: '/projects/:slug', name: 'project', component: Empty },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, saved) {
    if (to.name === 'project' || from.name === 'project') return false
    if (to.hash) return { el: to.hash, top: 72, behavior: 'smooth' }
    return saved || { top: 0 }
  },
})

createApp(App).use(router).directive('reveal', reveal).mount('#app')
