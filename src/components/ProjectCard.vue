<template>
  <RouterLink
    :to="`/projects/${project.slug}`"
    class="card"
    :aria-label="`Vai al progetto: ${project.title}`"
  >
    <img
      v-if="project.cover"
      class="card-img"
      :src="project.cover"
      :alt="project.title"
      loading="lazy"
      decoding="async"
    />
    <div class="card-body">
      <h3 class="card-title">{{ project.title }}</h3>
      <p class="card-text">{{ project.excerpt }}</p>
      <div class="card-tags">
        <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
defineProps({ project: { type: Object, required: true } })
</script>
