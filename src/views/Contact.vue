<template>
  <section class="section contact">
    <div class="contact-head">
      <h2>Contatti</h2>
      <p class="muted">Disponibile per collaborazioni e opportunità.</p>
    </div>

    <form class="card contact-card" @submit.prevent="submit" novalidate>
      <!-- Nome -->
      <div class="form-group">
        <label class="muted" for="name">Nome</label>
        <input
          id="name"
          v-model.trim="form.name"
          class="input"
          :class="{'input--error': errors.name}"
          placeholder="Compila con il tuo nome"
          required
          minlength="2"
          autocomplete="name"
          @blur="touch('name')"
          :aria-invalid="!!errors.name"
          :aria-describedby="errors.name ? 'err-name' : undefined"
        />
        <p v-if="errors.name" id="err-name" class="error-msg">{{ errors.name }}</p>
      </div>

      <!-- Email -->
      <div class="form-group">
        <label class="muted" for="email">Email</label>
        <input
          id="email"
          v-model.trim="form.email"
          type="email"
          class="input"
          :class="{'input--error': errors.email}"
          placeholder="Compila con la tua email"
          required
          autocomplete="email"
          @blur="touch('email')"
          :aria-invalid="!!errors.email"
          :aria-describedby="errors.email ? 'err-email' : undefined"
        />
        <p v-if="errors.email" id="err-email" class="error-msg">{{ errors.email }}</p>
      </div>

      <!-- Messaggio -->
      <div class="form-group">
        <label class="muted" for="message">Messaggio</label>
        <textarea
          id="message"
          v-model.trim="form.message"
          class="input textarea"
          :class="{'input--error': errors.message}"
          rows="5"
          placeholder="Scrivi qui..."
          required
          minlength="10"
          @blur="touch('message')"
          :aria-invalid="!!errors.message"
          :aria-describedby="errors.message ? 'err-message' : undefined"
        ></textarea>
        <small class="helper muted">Minimo 10 caratteri.</small>
        <p v-if="errors.message" id="err-message" class="error-msg">{{ errors.message }}</p>
      </div>

      <button class="btn-cta" type="submit" :disabled="loading">
        {{ loading ? 'Invio…' : 'Invia' }}
      </button>
    </form>

    <!-- Toast -->
    <transition name="toast">
      <div v-if="toast.show" class="app-toast" role="status" aria-live="polite">
        <strong>Inviato!</strong> Ti risponderò al più presto.
      </div>
    </transition>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const touched = reactive({ name: false, email: false, message: false })
const loading = ref(false)
const toast = reactive({ show: false, timer: null })

const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdkwojwv' // <— incolla il tuo

function validateField(key) {
  const v = form[key]
  let msg = ''
  if (!v) msg = 'Campo obbligatorio.'
  else {
    if (key === 'name' && v.length < 2) msg = 'Inserisci almeno 2 caratteri.'
    if (key === 'email' && !emailRx.test(v)) msg = 'Inserisci un’email valida.'
    if (key === 'message' && v.length < 10) msg = 'Inserisci almeno 10 caratteri.'
  }
  errors[key] = msg
  return !msg
}
function validateAll() { return ['name','email','message'].every(k => validateField(k)) }
function touch(k){ touched[k]=true; validateField(k) }

async function submit() {
  Object.keys(touched).forEach(k => (touched[k] = true))
  if (!validateAll()) return

  loading.value = true
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        _subject: 'Nuovo messaggio dal Portfolio', // opzionale
        _replyto: form.email                         // opzionale
      })
    })
    if (!res.ok) throw new Error('Invio fallito')
    // Successo: reset + toast
    Object.assign(form, { name: '', email: '', message: '' })
    Object.keys(errors).forEach(k => (errors[k] = ''))
    Object.keys(touched).forEach(k => (touched[k] = false))
    showToast()
  } catch (e) {
    console.error(e)
    // mostra un toast di errore (se vuoi)
  } finally {
    loading.value = false
  }
}
function showToast() {
  toast.show = true
  if (toast.timer) clearTimeout(toast.timer)
  toast.timer = setTimeout(() => { toast.show = false; toast.timer = null }, 3500)
}
</script>
