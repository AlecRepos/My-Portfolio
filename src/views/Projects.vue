<template>
<section class="section">
<h2>Progetti</h2>
<p class="muted">Selezione di lavori recenti</p>
<div class="grid" style="margin-top:12px">
<div v-for="p in projects" :key="p.slug">
<ProjectCard :project="p" />
</div>
</div>
</section>
</template>


<script setup>
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
</script>