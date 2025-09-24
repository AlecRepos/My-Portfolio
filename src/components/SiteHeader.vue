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
      <div id="mainNav" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link" @click="closeNav">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/projects" class="nav-link" @click="closeNav">Progetti</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/skills" class="nav-link" @click="closeNav">Linguaggi</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" class="nav-link" @click="closeNav">Contatti</RouterLink>
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


<style>
/* Mantiene la navbar sempre visibile */
.navbar-custom {
  background-color: var(--bg); /* puoi usare la tua variabile di tema */
}
.navbar .nav-link {
  position: relative;
  transition: color 0.25s ease;
}

.navbar .nav-link.active {
  color: var(--accent) !important;
}

/* Pallino sotto il link attivo (desktop già ok) */
.navbar .nav-link.active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -6px;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background-color: var(--accent);
  border-radius: 50%;
}

/* 🔒 Nascondi il pallino su mobile (< lg) */
@media (max-width: 991.98px) {
  .navbar .nav-link.active::after {
    content: none; /* oppure display: none; */
  }
}

</style>
