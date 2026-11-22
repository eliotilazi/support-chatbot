# Customer Support Chatbot (EN · FR · SQ)

A customer support assistant for a fictional bike shop, **Lakeside Bikes**. It answers the most common questions in **English, French and Albanian**, tolerates typos, tracks orders and hands the conversation to a human when needed.

**Live demo:** https://eliotilazi.github.io/support-chatbot/

## Features

- Automatic language detection (English, French, Albanian)
- Intent matching with typo tolerance (Levenshtein distance)
- Order tracking from an order number (try `LB-1001`, `LB-1002`, `LB-1003`)
- Hand-off to a human with an email form
- Quick-reply buttons in the customer's language
- Light and dark mode, works on mobile
- Automatic tests (`node test.mjs`)

## How it is organised

| File | Role |
| --- | --- |
| `knowledge.js` | What the bot knows: intents, keywords and answers in 3 languages, demo orders |
| `bot.js` | The logic: normalise text, detect language, score intents, build the reply |
| `app.js` | The chat interface in the page |
| `style.css` | The design |
| `test.mjs` | 13 test conversations that must give the right intent and language |

## Run it locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
node test.mjs                 # run the tests
```

## Next steps

- Connect a language model API for open questions, keeping the rules for sensitive answers (prices, orders)
- Store conversations to see which questions are asked most

Lakeside Bikes is a fictional company. Built by [Eliot Ilazi](https://eliotilazi.github.io).
