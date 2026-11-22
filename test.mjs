// Small automatic tests. Run with: node test.mjs
import { answer, detectLanguage, normalize } from './bot.js'

const cases = [
  ['What are your opening hours?', 'hours', 'en'],
  ['Quels sont vos horaires ?', 'hours', 'fr'],
  ['Cili eshte orari juaj?', 'hours', 'sq'],
  ['Combien de temps pour la livraison ?', 'delivery', 'fr'],
  ['my brakse are broken', 'repair', 'en'],
  ['Je veux retourner mon vélo', 'returns', 'fr'],
  ['Ku eshte porosia ime LB-1002?', 'order-status', 'sq'],
  ['Where is my order?', 'order-ask', 'en'],
  ['Je veux parler à un humain', 'human', 'fr'],
  ['Can I pay with Twint?', 'payment', 'en'],
  ['Sa zgjat bateria e biçikletës elektrike?', 'ebike', 'sq'],
  ['merci', 'thanks', 'fr'],
  ['blablabla', 'unknown', 'en'],
  ['Peux tu envoyer un message a Fortesa', 'unknown', 'fr'],
  ['Je veux renvoyer mon colis', 'returns', 'fr'],
]

let failed = 0
for (const [msg, intent, lang] of cases) {
  const r = answer(msg)
  const ok = r.intent === intent && r.lang === lang
  if (!ok) failed++
  console.log(`${ok ? 'PASS' : 'FAIL'}  "${msg}" -> ${r.intent} (${r.lang})${ok ? '' : `, expected ${intent} (${lang})`}`)
}
console.assert(normalize('Ëé Ç!') === 'ee c')
console.log(failed ? `\n${failed} test(s) failed` : '\nAll tests passed')
process.exit(failed ? 1 : 0)
