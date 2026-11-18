# 🎂 Khushi's Personalized Birthday Digital Experience

> **Created by:** Bhavyarajsinh Amala (Bhavya)  
> **Dedicated to:** Khushi  
> **Occasion:** Birthday Celebration  

An immersive, interactive single-page digital birthday universe blending heartfelt emotional storytelling, playful inside jokes, and modern editorial UI design.

---

## ✨ Features & Architecture

### 1. 🔐 The Secret Entrance (Password Gate)
- Full-screen minimal dark/cream editorial portal with floating ambient particles.
- Secret security question: *"What name do I use to tease you?"*
- Validation: Case-insensitive match for `"Aunty ji"`, `"aunty ji"`, etc., with whitespace trimming.
- Playful error shakes with randomized teasing messages on incorrect attempts.
- Smooth curtain-lift transition into the main celebration with harmonic chime sound.

### 2. 🎉 The Grand Birthday Reveal
- Letter-by-letter spring animation for *"Happy Birthday, Khushi!"*.
- Framed introductory subtitle celebrating her role as a best friend.
- Initial celebratory confetti burst.

### 3. 🎂 The Interactive Birthday Cake
- Handcrafted vector multi-tier cake with glowing, animated candlelight flames.
- Interactive *"Make a Wish & Blow Out Candles"* button.
- Extinguishes flames with rising smoke effect, triggers a full-screen confetti explosion, plays realistic breath + chime audio, and reveals a personalized wish blessing.
- Includes a *"Relight Candles"* option.

### 4. 👵 The Aunty Ji Corner (Playful Roast)
- Acknowledges the signature inside joke teasing her seniority.
- Formatted **"Official Seniority / Aunty Ji Certificate"** with vintage borders, official stamps, and amusing citations.
- Interactive *"Accept Your Aunty Ji Status"* button with fanfare sound and official verification stamp.

### 5. 📖 Our Friendship Story (Narrative Journey)
- Editorial timeline with glassmorphic cards.
- **Chapter 1: AJ's Academy** — Where our paths first crossed and classroom chatter became an unbreakable friendship.
- **Chapter 2: The Bangalore Transition** — Reliving the college move and how Khushi's regular check-ins and banter made loneliness disappear.
- **Chapter 3: The Four Pillars** — Teasing & Roasting, Late-Night Rants, Sage Advice, and Mutual Support.

### 6. 🤍 "Behind All The Jokes..." (What I Admire About You)
- Emotional shift in tone highlighting her core virtues:
  - **Kindness:** Genuine warmth and selflessness.
  - **Humility:** Quiet grace and grounded nature.
  - **Maturity & Understanding:** Being a steady, empathetic anchor.

### 7. 💌 The Birthday Letter
- Digital stationery paper texture, drop-cap opening, and wax seal crest.
- Full personal letter expressing deep gratitude for her friendship, celebrating who she is, and wishing her the happiest birthday.
- Signed warmly by Bhavya.

### 8. 🌟 One Last Thing & Conclusion
- Serene glowing closing card.
- Interactive reaction triggers:
  - **Send Virtual Hug:** Heart reaction sound and pastel heart confetti.
  - **Angry Aunty Ji Glare:** Humorous acknowledgement of her trademark glare.
  - **More Confetti!:** Multi-angle particle cannon.
  - **Replay From Beginning:** Smooth scroll back to top.

### 🎵 Audio Engine
- Built-in Web Audio API synthesizer for sound effects (unlock chime, candle blowout whoosh, fanfare trumpet).
- Procedural **Upbeat Celebration 🎈** soundtrack featuring lively, bright major arpeggios and warm rhythmic celesta chimes (zero network dependencies).
- Floating controller pill with play/pause, mute/unmute, and live animated equalizer.

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm run start
```

---

## 🎨 Design System
- **Colors:**
  - Cream Background: `#FAF7F2`
  - Cream Light: `#FFFDF9`
  - Lavender: `#EAE6F5`
  - Warm Blush: `#F7E7EA`
  - Rose-Gold Accent: `#C56868`
  - Gold Accent: `#D4AF37`
  - Deep Charcoal: `#2D2D2D`
- **Typography:** Serif headings (Playfair Display) + Sans-serif body (Plus Jakarta Sans) + Cursive script (Caveat).

