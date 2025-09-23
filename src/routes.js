import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import ProjectDetail from './views/ProjectDetail.vue'
import Skills from './views/Skills.vue'
import Contact from './views/Contact.vue'


export default [
{ path: '/', component: Home, meta: { title: 'Home' } },
{ path: '/projects', component: Projects, meta: { title: 'Progetti' } },
{ path: '/projects/:slug', component: ProjectDetail, meta: { title: 'Progetto' } },
{ path: '/skills', component: Skills, meta: { title: 'Linguaggi' } },
{ path: '/contact', component: Contact, meta: { title: 'Contatti' } },
{ path: '/:pathMatch(.*)*', redirect: '/' }
]