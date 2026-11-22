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
      en: ['delivery', 'shipping', 'ship', 'deliver', 'how long', 'arrive', 'abroad'],
      fr: ['livraison', 'livrer', 'expedition', 'delai', 'combien de temps', 'arrive', 'etranger'],
      sq: ['dergese', 'dergim', 'transport', 'sa kohe', 'arrin', 'vjen', 'jashte vendit'],
    },
    answer: {
      en: 'We deliver everywhere in Switzerland in 2 to 4 working days. Delivery is free from CHF 100, otherwise it costs CHF 9. We also ship to France, Germany and Italy (CHF 29, 5 to 8 working days).',
      fr: 'Nous livrons partout en Suisse en 2 à 4 jours ouvrables. La livraison est offerte dès CHF 100, sinon elle coûte CHF 9. Nous livrons aussi en France, en Allemagne et en Italie (CHF 29, 5 à 8 jours ouvrables).',
      sq: 'Dërgojmë kudo në Zvicër për 2 deri 4 ditë pune. Dërgesa është falas nga CHF 100, përndryshe kushton CHF 9. Dërgojmë edhe në Francë, Gjermani dhe Itali (CHF 29, 5 deri 8 ditë pune).',
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
  {
    id: 'contact',
    keywords: {
      en: ['contact', 'phone', 'phone number', 'call you', 'email', 'reach you'],
      fr: ['contact', 'contacter', 'telephone', 'numero', 'appeler', 'mail'],
      sq: ['kontakt', 'kontaktoj', 'telefon', 'numri', 'thirr', 'email'],
    },
    answer: {
      en: 'You can call us at +41 22 000 00 00 (Tuesday to Saturday, during opening hours) or write to support@lakeside-bikes.example. We answer emails within 24 hours.',
      fr: 'Vous pouvez nous appeler au +41 22 000 00 00 (du mardi au samedi, aux heures d\'ouverture) ou écrire à support@lakeside-bikes.example. Nous répondons aux e-mails en 24 heures.',
      sq: 'Mund të na telefononi në +41 22 000 00 00 (nga e marta deri të shtunën, gjatë orarit) ose të na shkruani në support@lakeside-bikes.example. Përgjigjemi brenda 24 orësh.',
    },
  },
  {
    id: 'address',
    keywords: {
      en: ['address', 'located', 'find you', 'parking', 'directions', 'shop location', 'train station'],
      fr: ['adresse', 'situe', 'trouver le magasin', 'parking', 'itineraire', 'gare'],
      sq: ['adresa', 'ndodheni', 'ku jeni', 'parkim', 'dyqani juaj', 'stacioni'],
    },
    answer: {
      en: 'Our shop is at Avenue de la Démo 1, 1260 Nyon (fictional address for this demo), 5 minutes on foot from Nyon train station. Free customer parking is available behind the shop.',
      fr: 'Notre magasin se trouve à l\'Avenue de la Démo 1, 1260 Nyon (adresse fictive pour cette démo), à 5 minutes à pied de la gare de Nyon. Un parking client gratuit se trouve derrière le magasin.',
      sq: 'Dyqani ynë ndodhet në Avenue de la Démo 1, 1260 Nyon (adresë fiktive për këtë demo), 5 minuta në këmbë nga stacioni i trenit në Nyon. Pas dyqanit ka parking falas për klientët.',
    },
  },
  {
    id: 'prices',
    keywords: {
      en: ['price', 'prices', 'cost', 'how much', 'how much is', 'cheap', 'expensive'],
      fr: ['prix', 'combien', 'coute', 'combien coute', 'tarif', 'tarifs', 'cher'],
      sq: ['cmimi', 'cmimet', 'sa kushton', 'kushton', 'lire', 'shtrenjte'],
    },
    answer: {
      en: 'Prices: city bikes from CHF 590, mountain bikes from CHF 790, road bikes from CHF 990, e-bikes from CHF 2,490 and kids\' bikes from CHF 249.',
      fr: 'Prix : vélos de ville dès CHF 590, VTT dès CHF 790, vélos de route dès CHF 990, vélos électriques dès CHF 2 490 et vélos pour enfants dès CHF 249.',
      sq: 'Çmimet: biçikleta qyteti nga CHF 590, biçikleta mali nga CHF 790, biçikleta rruge nga CHF 990, biçikleta elektrike nga CHF 2 490 dhe biçikleta për fëmijë nga CHF 249.',
    },
  },
  {
    id: 'test-ride',
    keywords: {
      en: ['test ride', 'try', 'try a bike', 'test a bike'],
      fr: ['essai', 'essayer', 'tester un velo'],
      sq: ['provoj', 'prove', 'ta provoj'],
    },
    answer: {
      en: 'Yes, you can test any bike for free in the shop. For an e-bike test of 2 hours, just bring an ID card.',
      fr: 'Oui, vous pouvez essayer gratuitement tous nos vélos en magasin. Pour un essai de vélo électrique de 2 heures, il suffit d\'apporter une pièce d\'identité.',
      sq: 'Po, mund ta provoni falas çdo biçikletë në dyqan. Për një provë 2-orëshe me biçikletë elektrike, mjafton të sillni një dokument identifikimi.',
    },
  },
  {
    id: 'warranty',
    keywords: {
      en: ['warranty', 'guarantee', 'defect', 'defective'],
      fr: ['garantie', 'defaut', 'defectueux'],
      sq: ['garanci', 'garancia', 'defekt'],
    },
    answer: {
      en: 'All new bikes have a 2-year warranty, and the frame is guaranteed for 5 years. E-bike batteries are guaranteed for 2 years or 500 charges.',
      fr: 'Tous les vélos neufs ont une garantie de 2 ans, et le cadre est garanti 5 ans. Les batteries de vélos électriques sont garanties 2 ans ou 500 charges.',
      sq: 'Të gjitha biçikletat e reja kanë garanci 2 vjet, ndërsa korniza ka garanci 5 vjet. Bateritë e biçikletave elektrike kanë garanci 2 vjet ose 500 karikime.',
    },
  },
  {
    id: 'size',
    keywords: {
      en: ['size', 'frame size', 'height', 'how tall', 'too big', 'too small'],
      fr: ['taille', 'cadre', 'hauteur', 'mesure', 'trop grand', 'trop petit'],
      sq: ['madhesi', 'madhesia', 'gjatesi', 'korniza', 'shume i madh', 'shume i vogel'],
    },
    answer: {
      en: 'The right frame size depends on your height: S for 155 to 170 cm, M for 170 to 180 cm, L for 180 to 190 cm and XL above 190 cm. In the shop we adjust the saddle and handlebar for free.',
      fr: 'La bonne taille de cadre dépend de votre taille : S de 155 à 170 cm, M de 170 à 180 cm, L de 180 à 190 cm et XL au-dessus de 190 cm. En magasin, nous réglons gratuitement la selle et le guidon.',
      sq: 'Madhësia e duhur e kornizës varet nga gjatësia juaj: S për 155 deri 170 cm, M për 170 deri 180 cm, L për 180 deri 190 cm dhe XL mbi 190 cm. Në dyqan e rregullojmë falas shalën dhe timonin.',
    },
  },
  {
    id: 'rental',
    keywords: {
      en: ['rent', 'rental', 'hire'],
      fr: ['louer', 'location de velo', 'en location'],
      sq: ['qira', 'me qira', 'marr me qira'],
    },
    answer: {
      en: 'You can rent a bike: CHF 25 for half a day and CHF 40 for a full day (e-bikes CHF 45 / CHF 70). Bring an ID card, a helmet is included.',
      fr: 'Vous pouvez louer un vélo : CHF 25 la demi-journée et CHF 40 la journée (vélos électriques CHF 45 / CHF 70). Apportez une pièce d\'identité, le casque est inclus.',
      sq: 'Mund të merrni biçikletë me qira: CHF 25 për gjysmë dite dhe CHF 40 për një ditë të plotë (elektrike CHF 45 / CHF 70). Sillni një dokument identifikimi, kaska përfshihet.',
    },
  },
  {
    id: 'accessories',
    keywords: {
      en: ['helmet', 'lock', 'lights', 'accessories', 'spare parts', 'tyres', 'tires'],
      fr: ['casque', 'antivol', 'eclairage', 'accessoires', 'pieces detachees', 'pneus'],
      sq: ['kaska', 'brave', 'drita', 'aksesore', 'pjese kembimi', 'gomat'],
    },
    answer: {
      en: 'We have helmets from CHF 49, locks from CHF 29, light sets from CHF 25, and tyres and spare parts for all brands. Fitting is free when you buy in the shop.',
      fr: 'Nous avons des casques dès CHF 49, des antivols dès CHF 29, des kits d\'éclairage dès CHF 25, ainsi que des pneus et pièces détachées pour toutes les marques. Le montage est offert pour tout achat en magasin.',
      sq: 'Kemi kaska nga CHF 49, bravë nga CHF 29, komplete dritash nga CHF 25, si dhe goma e pjesë këmbimi për të gjitha markat. Montimi është falas kur blini në dyqan.',
    },
  },
  {
    id: 'gift-card',
    keywords: {
      en: ['gift card', 'voucher', 'gift'],
      fr: ['carte cadeau', 'cartes cadeaux', 'bon cadeau', 'bons cadeaux', 'cadeau'],
      sq: ['karte dhurate', 'kupon', 'dhurate'],
    },
    answer: {
      en: 'Gift cards are available from CHF 20, in the shop or by email. They are valid for 2 years on bikes, accessories, repairs and rentals.',
      fr: 'Les cartes cadeaux sont disponibles dès CHF 20, en magasin ou par e-mail. Elles sont valables 2 ans sur les vélos, accessoires, réparations et locations.',
      sq: 'Kartat dhuratë fillojnë nga CHF 20, në dyqan ose me email. Janë të vlefshme 2 vjet për biçikleta, aksesorë, riparime dhe qira.',
    },
  },
  {
    id: 'discounts',
    keywords: {
      en: ['discount', 'promo', 'promotion', 'sale', 'student', 'coupon'],
      fr: ['reduction', 'promo', 'promotion', 'soldes', 'etudiant', 'rabais'],
      sq: ['zbritje', 'oferte', 'promocion', 'student', 'ulje'],
    },
    answer: {
      en: 'Students and apprentices get 10% off with a valid card. Our end-of-season sale runs every year in September.',
      fr: 'Les étudiants et apprentis ont 10 % de réduction sur présentation de leur carte. Nos soldes de fin de saison ont lieu chaque année en septembre.',
      sq: 'Studentët dhe praktikantët përfitojnë 10 % zbritje me kartë të vlefshme. Uljet e fundit të sezonit bëhen çdo vit në shtator.',
    },
  },
  {
    id: 'stock',
    keywords: {
      en: ['stock', 'in stock', 'available', 'availability', 'sold out'],
      fr: ['disponible', 'disponibilite', 'en stock', 'rupture'],
      sq: ['stok', 'ne stok', 'disponueshem', 'gjendje'],
    },
    answer: {
      en: 'Most models are in stock in the shop. If a size or colour is missing, we can order it for you in 5 to 10 working days, without any obligation to buy.',
      fr: 'La plupart des modèles sont en stock en magasin. S\'il manque une taille ou une couleur, nous pouvons la commander pour vous en 5 à 10 jours ouvrables, sans obligation d\'achat.',
      sq: 'Shumica e modeleve janë në stok në dyqan. Nëse mungon një madhësi ose ngjyrë, mund ta porosisim për ju për 5 deri 10 ditë pune, pa detyrim blerjeje.',
    },
  },
  {
    id: 'used-bikes',
    keywords: {
      en: ['used', 'second hand', 'trade in', 'sell my bike'],
      fr: ['occasion', 'reprise', 'vendre mon velo'],
      sq: ['perdorur', 'i perdorur', 'shes biciklete'],
    },
    answer: {
      en: 'We sell checked second-hand bikes with a 6-month warranty. We can also take back your old bike as a discount on a new one, after a free estimate in the shop.',
      fr: 'Nous vendons des vélos d\'occasion révisés avec une garantie de 6 mois. Nous pouvons aussi reprendre votre ancien vélo en déduction d\'un neuf, après une estimation gratuite en magasin.',
      sq: 'Shesim biçikleta të përdorura të kontrolluara me garanci 6 muaj. Mund ta marrim edhe biçikletën tuaj të vjetër si zbritje për një të re, pas një vlerësimi falas në dyqan.',
    },
  },
  {
    id: 'theft-insurance',
    keywords: {
      en: ['stolen', 'theft', 'insurance', 'insure'],
      fr: ['vole', 'vol', 'assurance', 'assurer'],
      sq: ['vjedhur', 'vjedhje', 'sigurim', 'siguracion'],
    },
    answer: {
      en: 'We offer theft and damage insurance from CHF 7 per month. If your bike is stolen, report it to the police first, then send us the police report and we help you with the claim.',
      fr: 'Nous proposons une assurance vol et dommages dès CHF 7 par mois. Si votre vélo est volé, déclarez-le d\'abord à la police, puis envoyez-nous la déclaration et nous vous aidons pour la demande.',
      sq: 'Ofrojmë sigurim për vjedhje dhe dëme nga CHF 7 në muaj. Nëse ju vjedhin biçikletën, lajmërojeni fillimisht në polici, pastaj na dërgoni raportin e policisë dhe ju ndihmojmë me kërkesën.',
    },
  },
  {
    id: 'cancel-order',
    keywords: {
      en: ['cancel', 'change my order', 'modify'],
      fr: ['annuler', 'modifier', 'changer ma commande'],
      sq: ['anuloj', 'anulim', 'ndryshoj porosine'],
    },
    answer: {
      en: 'You can cancel or change an order for free as long as it has not been shipped. Send us your order number by email and we confirm within 24 hours.',
      fr: 'Vous pouvez annuler ou modifier une commande gratuitement tant qu\'elle n\'est pas expédiée. Envoyez-nous votre numéro de commande par e-mail et nous confirmons en 24 heures.',
      sq: 'Mund ta anuloni ose ndryshoni porosinë falas derisa të mos jetë nisur. Na dërgoni numrin e porosisë me email dhe ju konfirmojmë brenda 24 orësh.',
    },
  },
  {
    id: 'account',
    keywords: {
      en: ['account', 'password', 'login', 'log in', 'sign in'],
      fr: ['compte client', 'mot de passe', 'connexion', 'connecter'],
      sq: ['llogari', 'llogaria', 'fjalekalim', 'hyrje'],
    },
    answer: {
      en: 'To reset your password, click "Forgot password" on the login page and follow the email. If you do not receive it, check your spam folder or contact us.',
      fr: 'Pour réinitialiser votre mot de passe, cliquez sur « Mot de passe oublié » sur la page de connexion et suivez l\'e-mail. Si vous ne le recevez pas, vérifiez vos spams ou contactez-nous.',
      sq: 'Për të rivendosur fjalëkalimin, klikoni « Kam harruar fjalëkalimin » në faqen e hyrjes dhe ndiqni email-in. Nëse nuk ju vjen, kontrolloni dosjen e spam-it ose na kontaktoni.',
    },
  },
  {
    id: 'jobs',
    keywords: {
      en: ['job', 'jobs', 'hiring', 'career', 'work for you'],
      fr: ['emploi', 'postuler', 'recrutez', 'travailler chez vous'],
      sq: ['pune', 'punesim', 'te punoj', 'aplikoj'],
    },
    answer: {
      en: 'Thank you for your interest! Send your CV to jobs@lakeside-bikes.example. We are often looking for bike mechanics and sales staff.',
      fr: 'Merci de votre intérêt ! Envoyez votre CV à jobs@lakeside-bikes.example. Nous cherchons régulièrement des mécaniciens cycles et des vendeurs.',
      sq: 'Faleminderit për interesin! Dërgojeni CV-në tuaj në jobs@lakeside-bikes.example. Shpesh kërkojmë mekanikë biçikletash dhe shitës.',
    },
  },
  {
    id: 'about-bot',
    keywords: {
      en: ['who are you', 'are you a bot', 'robot', 'chatbot'],
      fr: ['qui es-tu', 'qui etes-vous', 'robot', 'chatbot'],
      sq: ['kush je', 'kush jeni', 'robot', 'chatbot'],
    },
    answer: {
      en: 'I am the virtual assistant of Lakeside Bikes. I answer common questions 24/7, and a colleague takes over when needed.',
      fr: 'Je suis l\'assistant virtuel de Lakeside Bikes. Je réponds aux questions courantes 24 h/24, et un collègue prend le relais si nécessaire.',
      sq: 'Jam asistenti virtual i Lakeside Bikes. U përgjigjem pyetjeve të zakonshme 24 orë në ditë, dhe një koleg merr përsipër kur duhet.',
    },
  },
  {
    id: 'goodbye',
    keywords: {
      en: ['bye', 'goodbye', 'see you'],
      fr: ['au revoir', 'a bientot', 'bonne journee', 'bonne soiree'],
      sq: ['mirupafshim', 'shihemi', 'ditë te mbare'],
    },
    answer: {
      en: 'Thank you for your visit, have a nice day and enjoy the ride!',
      fr: 'Merci de votre visite, belle journée et bonne route !',
      sq: 'Faleminderit për vizitën, ditë të mbarë dhe udhëtim të këndshëm!',
    },
  },
  {
    id: 'products',
    keywords: {
      en: ['city bike', 'mountain bike', 'road bike', 'kids bike', 'catalogue', 'catalog', 'what do you sell', 'which bikes', 'range', 'sell'],
      fr: ['velo de ville', 'vtt', 'velo de route', 'velo enfant', 'velos pour enfants', 'catalogue', 'gamme', 'quels velos', 'vendez'],
      sq: ['biciklete qyteti', 'biciklete mali', 'biciklete per femije', 'bicikleta per femije', 'katalog', 'cfare shitni', 'cfare bicikletash', 'shitni'],
    },
    answer: {
      en: 'We sell city bikes, mountain bikes, road bikes, e-bikes and kids\' bikes, plus helmets, locks, lights and spare parts. You can see the whole range in the shop.',
      fr: 'Nous vendons des vélos de ville, des VTT, des vélos de route, des vélos électriques et des vélos pour enfants, ainsi que des casques, antivols, éclairages et pièces détachées. Toute la gamme est visible en magasin.',
      sq: 'Shesim biçikleta qyteti, biçikleta mali, biçikleta rruge, biçikleta elektrike dhe biçikleta për fëmijë, si dhe kaska, bravë, drita dhe pjesë këmbimi. Të gjithë gamën mund ta shihni në dyqan.',
    },
  },
]

// Fake orders, so the "track my order" feature can be tested.
export const orders = {
  'LB-1001': { status: { en: 'shipped', fr: 'expédiée', sq: 'e nisur' }, eta: '24.11.2026' },
  'LB-1002': { status: { en: 'being prepared', fr: 'en préparation', sq: 'në përgatitje' }, eta: '26.11.2026' },
  'LB-1003': { status: { en: 'delivered', fr: 'livrée', sq: 'e dorëzuar' }, eta: '20.11.2026' },
}
