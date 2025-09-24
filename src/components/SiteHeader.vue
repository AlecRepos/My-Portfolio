<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div class="container">
        <!-- Brand -->
        <a href="#home" class="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              fill="currentColor" class="me-2" viewBox="0 0 16 16">
            <path d="M8 .5l6.5 6.5V15a1 1 0 0 1-1 1h-4v-4H7v4H3a1 1 0 0 1-1-1V7L8 .5z"/>
          </svg>
          Home
        </a>

        <!-- Toggler -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Menu -->
        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a href="#progetti" class="nav-link">Progetti</a>
            </li>
            <li class="nav-item">
              <a href="#linguaggi" class="nav-link">Linguaggi</a>
            </li>
            <li class="nav-item">
              <a href="#contatti" class="nav-link">Contatti</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const links = document.querySelectorAll('.nav-link')
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'))
      link.classList.add('active')
    })
  })
})
</script>