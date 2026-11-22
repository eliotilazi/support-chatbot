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

// Intent only (language not checked): one question per topic in EN, FR and SQ.
const topics = [
['What is your address?','address'],['Où est votre magasin, il y a un parking ?','address'],['Ku ndodheni?','address'],
['How can I contact you?','contact'],['Quel est votre numéro de téléphone ?','contact'],['Si mund t\'ju kontaktoj?','contact'],
['What bikes do you sell?','products'],['Vous avez des VTT ?','products'],['A keni biçikleta për fëmijë?','products'],
['How much is an e-bike?','prices'],['Combien coûte un vélo de route ?','prices'],['Sa kushton nje biciklete?','prices'],
['Can I try a bike?','test-ride'],['Je peux faire un essai ?','test-ride'],['A mund ta provoj?','test-ride'],
['Is there a warranty?','warranty'],['Quelle est la garantie ?','warranty'],['Sa është garancia?','warranty'],
['What size do I need? I am 182 cm','size'],['Quelle taille de cadre pour moi ?','size'],['Çfarë madhësie më duhet?','size'],
['Can I rent a bike?','rental'],['Je voudrais louer un vélo','rental'],['A mund të marr biçikletë me qira?','rental'],
['Do you sell helmets?','accessories'],['Vous avez des antivols ?','accessories'],['A keni kaska?','accessories'],
['Do you have gift cards?','gift-card'],['Vous faites des cartes cadeaux ?','gift-card'],['A keni kartë dhuratë?','gift-card'],
['Student discount?','discounts'],['Vous avez des réductions étudiants ?','discounts'],['A keni zbritje?','discounts'],
['Is this model in stock?','stock'],['Ce modèle est disponible ?','stock'],['A e keni në stok?','stock'],
['Do you buy used bikes?','used-bikes'],['Vous avez des vélos d\'occasion ?','used-bikes'],['A keni biçikleta të përdorura?','used-bikes'],
['My bike was stolen','theft-insurance'],['On m\'a volé mon vélo','theft-insurance'],['Ma kanë vjedhur biçikletën','theft-insurance'],
['I want to cancel my order','cancel-order'],['Je veux annuler ma commande','cancel-order'],['Dua ta anuloj porosinë','cancel-order'],
['I forgot my password','account'],['J\'ai oublié mon mot de passe','account'],['Kam harruar fjalëkalimin','account'],
['Are you hiring?','jobs'],['Je voudrais postuler','jobs'],['A keni punë?','jobs'],
['Are you a bot?','about-bot'],['Qui es-tu ?','about-bot'],['Kush je ti?','about-bot'],
['Goodbye','goodbye'],['Au revoir','goodbye'],['Mirupafshim','goodbye'],
['Do you deliver abroad?','delivery'],['Livrez-vous à l\'étranger ?','delivery'],
['What are your opening hours?','hours'],['Where is my order?','order-ask'],['Je veux renvoyer mon colis','returns'],
['Peux tu envoyer un message a Fortesa','unknown'],['my brakse are broken','repair'],['Can I pay with Twint?','payment'],
]
for (const [q, i] of topics) cases.push([q, i, null])

let failed = 0
for (const [msg, intent, lang] of cases) {
  const r = answer(msg)
  const ok = r.intent === intent && (lang === null || r.lang === lang)
  if (!ok) failed++
  console.log(`${ok ? 'PASS' : 'FAIL'}  "${msg}" -> ${r.intent} (${r.lang})${ok ? '' : `, expected ${intent} (${lang})`}`)
}
console.assert(normalize('Ëé Ç!') === 'ee c')
console.log(failed ? `\n${failed} test(s) failed` : '\nAll tests passed')
process.exit(failed ? 1 : 0)
