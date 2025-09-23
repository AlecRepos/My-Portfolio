<template>
<section class="section">
<h2>Contatti</h2>
<p class="muted">Disponibile per collaborazioni e opportunità.</p>
<form class="card" style="padding:16px; max-width:560px" @submit.prevent="submit">
<label class="muted">Nome</label>
<input v-model="form.name" class="input" placeholder="Mario Rossi" required />
<label class="muted">Email</label>
<input v-model="form.email" type="email" class="input" placeholder="mario@email.it" required />
<label class="muted">Messaggio</label>
<textarea v-model="form.message" class="input" rows="5" placeholder="Scrivi qui..." required></textarea>
<button class="btn" type="submit">Invia</button>
<p v-if="sent" style="margin-top:10px">Grazie! Ti risponderò al più presto.</p>
</form>
<div style="margin-top:16px" class="muted">
Oppure scrivimi su <a href="https://www.linkedin.com" target="_blank" rel="noopener">LinkedIn</a>.
</div>
</section>
</template>


<script setup>
import { reactive, ref } from 'vue'
const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)


// Sostituisci con un endpoint (Formspree, Netlify Forms, EmailJS) per non dover creare un backend
const submit = async () => {
// Demo: finta attesa e conferma
await new Promise(r => setTimeout(r, 400))
sent.value = true
Object.assign(form, { name: '', email: '', message: '' })
}
</script>


<style scoped>
.input { width: 100%; margin: 6px 0 14px; padding: 10px 12px; border-radius: 10px; border: 1px solid #1f2430; background: #0e1117; color: var(--text); }
.input:focus { outline: 2px solid #243049; }
</style>