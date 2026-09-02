# 🌸 Digital Ganpati Invitation Template (गणेशोत्सव निमंत्रण पत्रिका टेम्पलेट)

A reusable, responsive, 3D animated Marathi Ganesh Festival digital invitation with 6 switchable themes, rotating divine aura halo, shimmering gold typography, live countdown timer, temple reveal, devotional Aarti music audio engine, falling modaks & multi-theme particle physics, WhatsApp sharing, and Google Calendar sync.

---

## 🎨 6 Available Themes (६ आकर्षक डिझाइन्स)
You can switch themes with 1 click:
1. **`banana-leaf`** 🌿 — Fresh Banana Leaf & Golden Mandap (केळीचे पान व सोनेरी मखर)
2. **`royal-maroon`** 👑 — Royal Crimson Maroon Palace & Gold Filigree (राजेशाही मरून)
3. **`sunset-saffron`** 🪔 — Auspicious Saffron/Kesari & Glowing Diyas (पावन भगवा / महाआरती)
4. **`temple-ivory`** 🛕 — Sacred Ivory Silk & Gold Temple (पवित्र रेशमी श्वेत व सुवर्ण)
5. **`celestial-midnight`** 🌌 — Celestial Midnight Star Glow & Stardust (दिव्य निळा व तारका)
6. **`lotus-blush`** 🪷 — Sacred Lotus Pink & Rose Gold Glow (पवित्र कमळ व रोझ गोल्ड)

---

## ✨ Advanced Animations & Micro-Interactions
- **Rotating Divine Halo (सुदर्शन / प्रभावळ)**: Glowing divine light wheel rotating continuously behind Lord Ganesha.
- **Shimmering Gold Typography**: Flowing light reflection on titles and headings.
- **Rising Steam on Modak Badge**: Animated steam rising from freshly steamed Ukadiche Modaks.
- **Interactive Temple Bells**: Clicking or hovering over the bells triggers chime soundwaves.
- **Multi-Theme Particle Physics**: Custom particles for each theme (e.g. twinkling stars for Celestial, pink lotus petals for Lotus Blush, rose petals for Royal Maroon, marigold for Banana Leaf).

---

## 🎵 Devotional Aarti & Background Music (आरती व संगीत)
- **Custom Aarti MP3**: Place any MP3 audio file named **`aarti.mp3`** in the project folder.
- **Built-in Fallback Synth**: If no external MP3 is added, the webpage automatically plays a built-in devotional Aarti melody + temple bells using Web Audio API!
- **Interactive Audio Controller**: Floating `🔊` button allows guests to toggle music on/off.

---

## 🚀 How to Create a New Client Invitation (२ सोपे पर्याय)

### Option 1: Using the Visual Builder (सर्वात सोपे - Graphical UI)
1. Double-click to open **`builder.html`** in any browser.
2. Pick a theme from the 6 options, fill in family details, dates, address, and audio settings.
3. Check the instant live preview on mobile or desktop view.
4. Click **"💾 Download config.js"** and replace the existing `config.js` file in the folder.
5. Done! Open `index.html` to see the final invitation.

### Option 2: By Editing `config.js` Directly
1. Open **`config.js`** in any text editor (Notepad, VS Code, etc.).
2. Change:
   - `theme: 'banana-leaf'` (or `'royal-maroon'`, `'sunset-saffron'`, `'temple-ivory'`, `'celestial-midnight'`, `'lotus-blush'`)
   - `family.familyName` & `family.hostName`
   - `schedule` dates & times
   - `audio.audioFile` (e.g. `'aarti.mp3'`)
   - `venue` address & Google Maps link
   - `images` filenames (`ganesh.jpg`, `family.jpg`, `pooja.jpg`, `modak.jpg`)
3. Save the file. That's it!

---

## 📁 Project Structure
- `index.html` — The main digital invitation landing page (GitHub Pages & Netlify ready)
- `builder.html` — Interactive visual template builder & customizer dashboard
- `config.js` — Central configuration file for all text, dates, images, audio, and themes
- `ganesh.jpg` — Lord Ganesha Idol photo
- `family.jpg` — Host / Family photo
- `pooja.jpg` — Satyanarayana Pooja setup photo
- `modak.jpg` — Authentic Ukadiche Modak photo
- `aarti.mp3` — (Optional) Custom Aarti / Devotional song audio file

---

## 🌐 Free 1-Click Deployment (फ्री होस्टिंग)
- **Netlify Drop**: Drag and drop this folder onto [app.netlify.com/drop](https://app.netlify.com/drop) for an instant live link.
- **GitHub Pages**: Push this folder to a GitHub repository and turn on Pages in repository settings.
