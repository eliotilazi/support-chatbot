// The interface: shows messages, quick replies and the human hand-off form.

import { answer } from './bot.js'

const messages = document.getElementById('messages')
const chips = document.getElementById('chips')
const composer = document.getElementById('composer')
const input = document.getElementById('input')
const handoff = document.getElementById('handoff')

const state = { lang: 'en' }

const QUICK = {
  en: ['Opening hours', 'Delivery', 'Track my order', 'Talk to a human'],
  fr: ['Horaires', 'Livraison', 'Suivre ma commande', 'Parler à un humain'],
  sq: ['Orari', 'Dërgesa', 'Ndiq porosinë', 'Fol me një njeri'],
}

function addMessage(text, who) {
  const el = document.createElement('div')
  el.className = `msg ${who}`
  el.textContent = text
  messages.appendChild(el)
  messages.scrollTop = messages.scrollHeight
  return el
}

function showChips(lang) {
  chips.innerHTML = ''
  for (const label of QUICK[lang]) {
    const b = document.createElement('button')
    b.type = 'button'
    b.textContent = label
    b.addEventListener('click', () => send(label))
    chips.appendChild(b)
  }
}

function send(text) {
  if (!text.trim()) return
  addMessage(text, 'user')
  const typing = addMessage('…', 'bot typing')
  const result = answer(text, state)
  state.lang = result.lang
  // A short pause makes the conversation feel natural.
  setTimeout(() => {
    typing.remove()
    addMessage(result.reply, 'bot')
    showChips(state.lang)
    handoff.hidden = result.action !== 'handoff'
    messages.scrollTop = messages.scrollHeight
  }, 450 + Math.min(result.reply.length * 6, 900))
}

composer.addEventListener('submit', (e) => {
  e.preventDefault()
  send(input.value)
  input.value = ''
})

handoff.addEventListener('submit', (e) => {
  e.preventDefault()
  handoff.hidden = true
  const done = {
    en: 'Thank you! A colleague will write to you shortly. (Demo: nothing is really sent.)',
    fr: 'Merci ! Un collègue vous écrira rapidement. (Démo : rien n\'est réellement envoyé.)',
    sq: 'Faleminderit! Një koleg do t\'ju shkruajë së shpejti. (Demo: asgjë nuk dërgohet realisht.)',
  }
  addMessage(done[state.lang], 'bot')
})

document.querySelectorAll('[data-try]').forEach((b) =>
  b.addEventListener('click', () => send(b.dataset.try)),
)

addMessage('Hello! Ask me anything in English, French or Albanian. 🇬🇧 🇫🇷 🇦🇱', 'bot')
showChips('en')
