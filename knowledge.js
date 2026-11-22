// Knowledge base of the support assistant.
// Each intent has keywords in three languages and an answer in each language.
// To teach the bot something new, add an object to this list.

export const company = {
  name: 'Lakeside Bikes',
  city: 'Nyon',
  phone: '+41 22 000 00 00',
  email: 'support@lakeside-bikes.example',
}

export const intents = [
  {
    id: 'greeting',
    keywords: {
      en: ['hello', 'hi', 'hey', 'good morning', 'good evening'],
      fr: ['bonjour', 'salut', 'bonsoir', 'coucou', 'hello'],
      sq: ['pershendetje', 'tung', 'mirdita', 'mirembrema', 'hello'],
    },
    answer: {
      en: 'Hello! I am the Lakeside Bikes assistant. How can I help you today?',
      fr: 'Bonjour ! Je suis l\'assistant de Lakeside Bikes. Comment puis-je vous aider ?',
      sq: 'Përshëndetje! Jam asistenti i Lakeside Bikes. Si mund t\'ju ndihmoj?',
    },
  },
  {
    id: 'hours',
    keywords: {
      en: ['opening hours', 'hours', 'open', 'closed', 'when', 'sunday', 'saturday'],
      fr: ['horaires', 'heures', 'ouvert', 'ferme', 'quand', 'dimanche', 'samedi'],
      sq: ['orari', 'oret', 'hapur', 'mbyllur', 'kur', 'diele', 'shtune'],
    },
    answer: {
      en: 'Our shop in Nyon is open Tuesday to Friday from 9:00 to 18:30 and Saturday from 9:00 to 17:00. We are closed on Sunday and Monday.',
      fr: 'Notre magasin de Nyon est ouvert du mardi au vendredi de 9h00 à 18h30 et le samedi de 9h00 à 17h00. Fermé le dimanche et le lundi.',
      sq: 'Dyqani ynë në Nyon është i hapur nga e marta deri të premten 9:00 deri 18:30 dhe të shtunën 9:00 deri 17:00. Të dielën dhe të hënën jemi mbyllur.',
    },
  },
  {
    id: 'delivery',
    keywords: {
      en: ['delivery', 'shipping', 'ship', 'deliver', 'how long', 'arrive'],
      fr: ['livraison', 'livrer', 'expedition', 'delai', 'combien de temps', 'arrive'],
      sq: ['dergese', 'dergim', 'transport', 'sa kohe', 'arrin', 'vjen'],
    },
    answer: {
      en: 'We deliver everywhere in Switzerland in 2 to 4 working days. Delivery is free from CHF 100, otherwise it costs CHF 9.',
      fr: 'Nous livrons partout en Suisse en 2 à 4 jours ouvrables. La livraison est offerte dès CHF 100, sinon elle coûte CHF 9.',
      sq: 'Dërgojmë kudo në Zvicër për 2 deri 4 ditë pune. Dërgesa është falas nga CHF 100, përndryshe kushton CHF 9.',
    },
  },
  {
    id: 'returns',
    keywords: {
      en: ['return', 'refund', 'exchange', 'send back', 'money back'],
      fr: ['retour', 'rembourser', 'remboursement', 'echange', 'renvoyer'],
      sq: ['kthim', 'kthej', 'rimbursim', 'nderroj', 'nderrim'],
    },
    answer: {
      en: 'You can return an unused item within 30 days. Write to us with your order number and we will send you a free return label.',
      fr: 'Vous pouvez retourner un article non utilisé dans les 30 jours. Écrivez-nous avec votre numéro de commande et nous vous envoyons une étiquette de retour gratuite.',
      sq: 'Mund ta ktheni një artikull të papërdorur brenda 30 ditëve. Na shkruani me numrin e porosisë dhe ju dërgojmë falas etiketën e kthimit.',
    },
  },
  {
    id: 'repair',
    keywords: {
      en: ['repair', 'service', 'broken', 'flat tyre', 'puncture', 'brakes', 'maintenance', 'appointment'],
      fr: ['reparation', 'reparer', 'service', 'casse', 'crevaison', 'freins', 'entretien', 'rendez-vous'],
      sq: ['riparim', 'servis', 'prishur', 'goma', 'frena', 'mirembajtje', 'takim'],
    },
    answer: {
      en: 'Our workshop repairs all brands. A standard service costs CHF 89 and usually takes 48 hours. You can book a slot by phone or in the shop.',
      fr: 'Notre atelier répare toutes les marques. Un service standard coûte CHF 89 et prend en général 48 heures. Vous pouvez réserver par téléphone ou en magasin.',
      sq: 'Punëtoria jonë riparon të gjitha markat. Një servis standard kushton CHF 89 dhe zakonisht zgjat 48 orë. Mund të rezervoni me telefon ose në dyqan.',
    },
  },
  {
    id: 'payment',
    keywords: {
      en: ['pay', 'payment', 'card', 'twint', 'invoice', 'installments'],
      fr: ['payer', 'paiement', 'carte', 'twint', 'facture', 'plusieurs fois'],
      sq: ['pagese', 'paguaj', 'karte', 'twint', 'fature', 'keste'],
    },
    answer: {
      en: 'We accept cards, TWINT and invoice. For e-bikes, you can also pay in 12 monthly installments.',
      fr: 'Nous acceptons les cartes, TWINT et la facture. Pour les vélos électriques, vous pouvez aussi payer en 12 mensualités.',
      sq: 'Pranojmë karta, TWINT dhe faturë. Për biçikletat elektrike mund të paguani edhe me 12 këste mujore.',
    },
  },
  {
    id: 'ebike',
    keywords: {
      en: ['e-bike', 'ebike', 'electric', 'battery', 'range', 'charge'],
      fr: ['velo electrique', 'electrique', 'batterie', 'autonomie', 'charger'],
      sq: ['biciklete elektrike', 'elektrike', 'bateri', 'autonomi', 'karikoj'],
    },
    answer: {
      en: 'Our e-bikes have a range of 60 to 120 km depending on the model. A full charge takes about 4 hours. You can try one in the shop for free.',
      fr: 'Nos vélos électriques ont une autonomie de 60 à 120 km selon le modèle. Une charge complète prend environ 4 heures. Vous pouvez en essayer un gratuitement en magasin.',
      sq: 'Biçikletat tona elektrike kanë autonomi 60 deri 120 km sipas modelit. Një karikim i plotë zgjat rreth 4 orë. Mund ta provoni falas në dyqan.',
    },
  },
]

// Fake orders, so the "track my order" feature can be tested.
export const orders = {
  'LB-1001': { status: { en: 'shipped', fr: 'expédiée', sq: 'e nisur' }, eta: '24.11.2026' },
  'LB-1002': { status: { en: 'being prepared', fr: 'en préparation', sq: 'në përgatitje' }, eta: '26.11.2026' },
  'LB-1003': { status: { en: 'delivered', fr: 'livrée', sq: 'e dorëzuar' }, eta: '20.11.2026' },
}
