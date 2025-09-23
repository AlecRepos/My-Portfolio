import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './routes.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/main.css'


const router = createRouter({
history: createWebHistory(),
routes,
scrollBehavior() { return { top: 0 } }
})


// SEO-lite: aggiorna il title per rotta
router.afterEach((to) => {
  document.title = to.meta?.title || 'Portfolio – Ale'
})


createApp(App).use(router).mount('#app')