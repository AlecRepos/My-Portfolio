<template>
  <article
    class="card"
    :class="{ 'card--active': active }"
    @click="$emit('select')"
    role="button"
    :aria-pressed="active ? 'true' : 'false'"
    :aria-label="`Mostra dettagli progetto: ${project.title}`"
    tabindex="0"
    @keydown.enter="$emit('select')"
    @keydown.space.prevent="$emit('select')"
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
  </article>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true },
  active: { type: Boolean, default: false }
})
defineEmits(['select'])
</script>
