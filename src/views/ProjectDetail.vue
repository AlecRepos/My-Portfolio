<template>
<section class="section" v-if="project">
<RouterLink to="/projects" class="muted" style="text-decoration:none">← Torna ai progetti</RouterLink>
<h1 style="margin:8px 0 12px">{{ project.title }}</h1>
<img v-if="project.cover" :src="project.cover" :alt="project.title" style="width:100%; max-height:3600px; object-fit:cover; border-radius:16px; border:1px solid #1b1f2a" />
<p class="muted" style="margin:12px 0 18px">{{ project.excerpt }}</p>
<div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:12px">
<span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span>
</div>
<article class="card" style="padding:16px; cursor:auto">
<p style="white-space:pre-wrap">{{ project.body }}</p>
<div style="display:flex; gap:10px; margin-top:10px" v-if="project.links?.length">
<a v-for="l in project.links" :key="l.url" class="btn link" :href="l.url" target="_blank" rel="noopener">{{ l.label }}</a>
</div>
</article>
</section>
<section v-else class="section"> 
<p>Progetto non trovato.</p>
</section>
</template>


<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'


const route = useRoute()
const project = computed(() => projects.find(p => p.slug === route.params.slug))
</script>