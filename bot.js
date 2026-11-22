// The "brain" of the assistant: pure functions, no HTML here.
// It detects the language, finds the best matching intent and builds the reply.

import { intents, orders, company } from './knowledge.js'

// Lowercase, remove accents (é -> e, ë -> e, ç -> c) and punctuation.
export function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\- ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// Number of single-letter edits between two words (typo tolerance).
export function levenshtein(a, b) {
  const row = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i++) {
    let prev = row[0]
    row[0] = i
    for (let j = 1; j <= b.length; j++) {
      const tmp = row[j]
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1))
      prev = tmp
    }
  }
  return row[b.length]
}

// A word matches a keyword if it is equal, or close enough for long words.
function wordMatches(word, keyword) {
  if (word === keyword) return true
  if (keyword.length >= 5 && word.length >= 4) {
    if (word.startsWith(keyword.slice(0, 5)) || keyword.startsWith(word)) return true
    return word[0] === keyword[0] && levenshtein(word, keyword) <= 1
  }
  return false
}

// Score of one keyword against the message (multi-word keywords count more).
function keywordScore(text, words, keyword) {
  const k = normalize(keyword)
  if (k.includes(' ')) return text.includes(k) ? 2 : 0
  return words.some((w) => wordMatches(w, k)) ? 1 : 0
}

const LANG_HINTS = {
  fr: ['je', 'vous', 'est', 'les', 'mon', 'ma', 'pour', 'une', 'quel', 'quels', 'bonjour', 'merci', 'livraison', 'commande', 'parler', 'humain', 'veux', 'suivre', 'ou', 'peux', 'tu', 'un'],
  sq: ['une', 'jam', 'eshte', 'nje', 'per', 'me', 'si', 'cfare', 'kur', 'porosi', 'faleminderit', 'pershendetje', 'ju', 'mund', 'ndiq', 'fol', 'njeri', 'ku', 'ime'],
  en: ['i', 'you', 'is', 'the', 'my', 'for', 'what', 'how', 'can', 'order', 'thanks', 'hello', 'do'],
}

// Guess the language from small frequent words; keep the previous one if unsure.
export function detectLanguage(message, fallback = 'en') {
  const words = normalize(message).split(' ')
  const scores = Object.fromEntries(
    Object.entries(LANG_HINTS).map(([lang, hints]) => [lang, words.filter((w) => hints.includes(w)).length]),
  )
  for (const intent of intents) {
    for (const lang of Object.keys(intent.keywords)) {
      scores[lang] += intent.keywords[lang].filter((k) => keywordScore(normalize(message), words, k) > 0).length * 0.5
    }
  }
  const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0]
  return best[1] > 0 ? best[0] : fallback
}

const TEXT = {
  orderFound: {
    en: (id, o) => `Order ${id} is ${o.status.en}. Expected date: ${o.eta}.`,
    fr: (id, o) => `La commande ${id} est ${o.status.fr}. Date prévue : ${o.eta}.`,
    sq: (id, o) => `Porosia ${id} është ${o.status.sq}. Data e pritur: ${o.eta}.`,
  },
  orderMissing: {
    en: (id) => `I cannot find order ${id}. Please check the number (example: LB-1001).`,
    fr: (id) => `Je ne trouve pas la commande ${id}. Vérifiez le numéro (exemple : LB-1001).`,
    sq: (id) => `Nuk e gjej porosinë ${id}. Ju lutem kontrolloni numrin (shembull: LB-1001).`,
  },
  orderAsk: {
    en: 'Sure. What is your order number? It looks like LB-1001.',
    fr: 'Bien sûr. Quel est votre numéro de commande ? Il ressemble à LB-1001.',
    sq: 'Sigurisht. Cili është numri i porosisë? Duket kështu: LB-1001.',
  },
  human: {
    en: `I am passing you to a colleague. Leave your email below, or call us at ${company.phone}.`,
    fr: `Je vous mets en relation avec un collègue. Laissez votre e-mail ci-dessous, ou appelez-nous au ${company.phone}.`,
    sq: `Po ju kaloj te një koleg. Lini email-in tuaj më poshtë, ose na telefononi në ${company.phone}.`,
  },
  thanks: {
    en: 'You are welcome! Anything else?',
    fr: 'Avec plaisir ! Autre chose ?',
    sq: 'Me kënaqësi! Diçka tjetër?',
  },
  unknown: {
    en: 'I am not sure I understood. I can help with: opening hours, delivery, returns, repairs, payment, e-bikes, or tracking an order.',
    fr: 'Je ne suis pas sûr d\'avoir compris. Je peux vous aider pour : horaires, livraison, retours, réparations, paiement, vélos électriques, ou suivi de commande.',
    sq: 'Nuk jam i sigurt që e kuptova. Mund t\'ju ndihmoj për: orarin, dërgesën, kthimet, riparimet, pagesën, biçikletat elektrike ose ndjekjen e porosisë.',
  },
}

const ORDER_WORDS = ['order', 'tracking', 'track', 'commande', 'suivi', 'colis', 'porosi', 'porosia', 'pako']
const HUMAN_WORDS = ['human', 'agent', 'person', 'someone', 'humain', 'conseiller', 'quelqu', 'njeri', 'operator', 'koleg']
const THANKS_WORDS = ['thanks', 'thank', 'merci', 'faleminderit', 'flm', 'rrofsh']

// Main function: takes the user's message and the conversation state,
// returns { reply, lang, intent, action }.
export function answer(message, state = {}) {
  const lang = detectLanguage(message, state.lang || 'en')
  const text = normalize(message)
  const words = text.split(' ')

  const orderId = message.toUpperCase().match(/LB-?\s?(\d{4})/)
  if (orderId) {
    const id = `LB-${orderId[1]}`
    const order = orders[id]
    return {
      lang,
      intent: 'order-status',
      reply: order ? TEXT.orderFound[lang](id, order) : TEXT.orderMissing[lang](id),
    }
  }
  if (words.some((w) => HUMAN_WORDS.some((h) => w.startsWith(h)))) {
    return { lang, intent: 'human', reply: TEXT.human[lang], action: 'handoff' }
  }
  if (words.some((w) => THANKS_WORDS.includes(w)) && words.length <= 4) {
    return { lang, intent: 'thanks', reply: TEXT.thanks[lang] }
  }

  // Score every intent and keep the best one.
  let best = { score: 0 }
  for (const intent of intents) {
    const all = Object.values(intent.keywords).flat()
    const score = all.reduce((sum, k) => sum + keywordScore(text, words, k), 0)
    if (score > best.score) best = { score, intent }
  }
  if (best.score === 0) {
    // No topic found: maybe the customer wants to track an order.
    if (words.some((w) => ORDER_WORDS.some((o) => w.startsWith(o)))) {
      return { lang, intent: 'order-ask', reply: TEXT.orderAsk[lang] }
    }
    return { lang, intent: 'unknown', reply: TEXT.unknown[lang] }
  }
  return { lang, intent: best.intent.id, reply: best.intent.answer[lang] }
}
