# 🌸 Digital Ganpati Invitation Template (गणेशोत्सव निमंत्रण पत्रिका टेम्पलेट)

A reusable, responsive, 3D animated Marathi Ganesh Festival digital invitation with multiple switchable themes, live countdown timer, temple reveal, devotional Aarti music audio engine, falling modaks & marigold petals, WhatsApp sharing, and Google Calendar sync.

---

## 🎨 Available Themes (४ आकर्षक डिझाइन्स)
You can switch themes with 1 click:
1. **`banana-leaf`** 🌿 — Fresh Banana Leaf & Golden Mandap (केळीचे पान व सोनेरी मखर)
2. **`royal-maroon`** 👑 — Royal Crimson Maroon & Palace Gold (राजेशाही मरून)
3. **`sunset-saffron`** 🪔 — Auspicious Saffron/Kesari & Diya Gold (पावन भगवा / केसरी)
4. **`temple-ivory`** 🛕 — Sacred Ivory Silk & Gold Temple (पवित्र रेशमी श्वेत व सुवर्ण)

---

## 🎵 Devotional Aarti & Background Music (आरती व संगीत)
- **Custom Aarti MP3**: Place any MP3 audio file named **`aarti.mp3`** in the project folder (e.g. *Sukhkarta Dukhaharta*, devotional flute, or Shehnai).
- **Built-in Fallback Synth**: If no external MP3 is added, the webpage automatically plays a built-in devotional Aarti melody + temple bells using Web Audio API!
- **Interactive Audio Controller**: Floating `🔊` button allows guests to toggle music on/off.

---

## 🚀 How to Create a New Client Invitation (२ सोपे पर्याय)

### Option 1: Using the Visual Builder (सर्वात सोपे - Graphical UI)
1. Double-click to open **`builder.html`** in any browser.
2. Pick a theme, fill in the family details, dates, address, and audio settings.
3. Check the instant live preview on mobile or desktop view.
4. Click **"💾 Download config.js"** and replace the existing `config.js` file in the folder.
5. Done! Open `index.html` to see the final invitation.

### Option 2: By Editing `config.js` Directly
1. Open **`config.js`** in any text editor (Notepad, VS Code, etc.).
2. Change:
   - `theme: 'banana-leaf'` (or `'royal-maroon'`, `'sunset-saffron'`, `'temple-ivory'`)
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
