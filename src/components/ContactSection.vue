<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="contact" v-reveal>
        <div class="contact__info">
          <p class="eyebrow eyebrow--light">{{ t('contact.eyebrow') }}</p>
          <h2 class="section-title contact__title">{{ t('contact.title') }}</h2>
          <p class="contact__lede">{{ t('contact.lede') }}</p>

          <h3 class="contact__h">{{ t('contact.direct') }}</h3>
          <ul class="direct">
            <li class="direct__item">
              <span class="direct__icon"><AppIcon name="mail" /></span>
              <a :href="`mailto:${profile.email}`" class="direct__link">{{ profile.email }}</a>
              <button type="button" class="direct__copy" @click="copyEmail" :aria-label="t('contact.copy')">
                <AppIcon :name="copied ? 'check' : 'copy'" :size="16" />
                <span>{{ copied ? t('contact.copied') : t('contact.copy') }}</span>
              </button>
            </li>
            <li class="direct__item">
              <span class="direct__icon"><AppIcon name="linkedin" /></span>
              <a :href="profile.linkedin" target="_blank" rel="noopener" class="direct__link">LinkedIn</a>
            </li>
            <li class="direct__item">
              <span class="direct__icon"><AppIcon name="github" /></span>
              <a :href="profile.github" target="_blank" rel="noopener" class="direct__link">github.com/AlecRepos</a>
            </li>
            <li class="direct__item">
              <span class="direct__icon"><AppIcon name="pin" /></span>
              <span class="direct__text">{{ tr(profile.location) }}</span>
            </li>
          </ul>
        </div>

        <form class="form" @submit.prevent="submit" novalidate>
          <div class="field">
            <label for="name">{{ t('contact.name') }}</label>
            <input
              id="name"
              v-model.trim="form.name"
              :class="{ 'is-invalid': errors.name }"
              :placeholder="t('contact.namePh')"
              autocomplete="name"
              @blur="validate('name')"
              :aria-invalid="!!errors.name"
              :aria-describedby="errors.name ? 'err-name' : undefined"
            />
            <p v-if="errors.name" id="err-name" class="field__error">{{ errors.name }}</p>
          </div>

          <div class="field">
            <label for="email">{{ t('contact.email') }}</label>
            <input
              id="email"
              v-model.trim="form.email"
              type="email"
              :class="{ 'is-invalid': errors.email }"
              :placeholder="t('contact.emailPh')"
              autocomplete="email"
              @blur="validate('email')"
              :aria-invalid="!!errors.email"
              :aria-describedby="errors.email ? 'err-email' : undefined"
            />
            <p v-if="errors.email" id="err-email" class="field__error">{{ errors.email }}</p>
          </div>

          <div class="field">
            <label for="message">{{ t('contact.message') }}</label>
            <textarea
              id="message"
              v-model.trim="form.message"
              rows="5"
              :class="{ 'is-invalid': errors.message }"
              :placeholder="t('contact.messagePh')"
              @blur="validate('message')"
              :aria-invalid="!!errors.message"
              :aria-describedby="errors.message ? 'err-message' : undefined"
            ></textarea>
            <p v-if="errors.message" id="err-message" class="field__error">{{ errors.message }}</p>
          </div>

          <button class="btn btn--accent form__submit" type="submit" :disabled="status === 'sending'">
            {{ status === 'sending' ? t('contact.sending') : t('contact.send') }}
            <AppIcon v-if="status !== 'sending'" name="send" :size="16" />
          </button>

          <p
            v-if="status === 'sent' || status === 'error'"
            class="form__status"
            :class="`form__status--${status}`"
            role="status"
            aria-live="polite"
          >
            <AppIcon :name="status === 'sent' ? 'check' : 'close'" :size="16" />
            {{ status === 'sent' ? t('contact.sent') : t('contact.failed') }}
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import AppIcon from './AppIcon.vue'
import { profile } from '../data/profile'
import { useI18n } from '../composables/useI18n'

const { t, tr } = useI18n()

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdkwojwv'
const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const form = reactive({ name: '', email: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const status = ref('idle') // idle | sending | sent | error
const copied = ref(false)

function validate(key) {
  const v = form[key]
  let msg = ''
  if (!v) msg = t('contact.errRequired')
  else if (key === 'name' && v.length < 2) msg = t('contact.errName')
  else if (key === 'email' && !emailRx.test(v)) msg = t('contact.errEmail')
  else if (key === 'message' && v.length < 10) msg = t('contact.errMessage')
  errors[key] = msg
  return !msg
}

async function submit() {
  const ok = ['name', 'email', 'message'].map(validate).every(Boolean)
  if (!ok) return

  status.value = 'sending'
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
        _subject: 'Nuovo messaggio dal Portfolio',
        _replyto: form.email,
      }),
    })
    if (!res.ok) throw new Error('Invio fallito')
    Object.assign(form, { name: '', email: '', message: '' })
    status.value = 'sent'
  } catch (e) {
    console.error(e)
    status.value = 'error'
  }
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {}
}
</script>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: clamp(28px, 5vw, 64px);
  padding: clamp(28px, 5vw, 56px);
  background: var(--brown-900);
  border-radius: calc(var(--radius-lg) + 8px);
  color: var(--beige-100);
  position: relative;
  overflow: hidden;
}
.contact::before {
  content: '';
  position: absolute;
  width: 420px;
  height: 420px;
  right: -140px;
  top: -180px;
  background: radial-gradient(circle, rgba(232, 101, 15, 0.35), transparent 65%);
  pointer-events: none;
}

.eyebrow--light { color: var(--orange-500); }
.contact__title { color: var(--cream); }
.contact__lede { margin-top: 14px; color: var(--beige-300); font-size: 17px; max-width: 46ch; }

.contact__h {
  margin: 36px 0 12px;
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--brown-400);
}

.direct { display: grid; gap: 4px; }
.direct__item {
  display: flex;
  align-items: center;
  gap: 14px;
  min-height: 52px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.direct__icon {
  flex: none;
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.06);
  color: var(--orange-500);
}
.direct__link,
.direct__text { color: var(--cream); font-weight: 500; overflow-wrap: anywhere; }
.direct__link { transition: color 0.2s; }
.direct__link:hover { color: var(--orange-500); }

.direct__copy {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: transparent;
  color: var(--beige-200);
  font-size: 13px;
  transition: border-color 0.2s, color 0.2s;
}
.direct__copy:hover { border-color: var(--orange-500); color: var(--cream); }

/* Form */
.form {
  position: relative;
  align-self: start;
  display: grid;
  gap: 18px;
  padding: clamp(20px, 3vw, 32px);
  background: var(--surface);
  border-radius: var(--radius-lg);
  color: var(--text);
}
.field { display: grid; gap: 6px; }
.field label { font-size: 14px; font-weight: 600; }
.field input,
.field textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-sm);
  background: var(--cream);
  font: inherit;
  color: var(--text);
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.2s;
}
.field textarea { resize: vertical; min-height: 130px; }
.field input::placeholder,
.field textarea::placeholder { color: var(--brown-400); }
.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--accent);
  background: var(--white);
  box-shadow: 0 0 0 4px rgba(232, 101, 15, 0.15);
}
.field .is-invalid { border-color: var(--danger); }
.field__error { font-size: 13px; color: var(--danger); }

.form__submit { width: 100%; height: 50px; margin-top: 4px; }

.form__status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border-radius: var(--radius-sm);
  font-size: 14px;
  font-weight: 500;
}
.form__status--sent { background: #e7f1e8; color: var(--success); }
.form__status--error { background: #f8e6e2; color: var(--danger); }

@media (max-width: 900px) {
  .contact { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
  .contact { padding: 24px 20px; border-radius: var(--radius-lg); }
  .form { padding: 20px 16px; margin: 0 -8px -8px; }
  .direct__copy { display: none; }
}
</style>
