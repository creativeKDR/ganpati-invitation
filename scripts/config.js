/**
 * ====================================================================
 * 🌸 DIGITAL GANPATI INVITATION - MASTER CONFIGURATION FILE (config.js)
 * ====================================================================
 * या फाईलमध्ये तुम्ही फक्त माहिती आणि थीम बदलून नवीन आमंत्रण पत्रिका 
 * अवघ्या एका मिनिटात तयार करू शकता!
 * 
 * Edit this file to easily customize themes, names, dates, address, 
 * photos, and timings for any client in under 1 minute!
 */

const INVITATION_CONFIG = {
    // ----------------------------------------------------------------
    // 🎨 1. THEME & UI STYLE SELECTION (६ आकर्षक थीम्स उपलब्ध)
    // Options: 
    // - 'banana-leaf'        : 🌿 पारंपारिक केळीचे पान व सोनेरी मखर (Traditional Banana Leaf)
    // - 'royal-maroon'       : 👑 राजेशाही मखमली मरून व राजवाडा थीम (Royal Palace Velvet & Gold)
    // - 'sunset-saffron'     : 🪔 पावन केसरी / महाआरती व दिवे थीम (Auspicious Saffron Glow)
    // - 'temple-ivory'       : 🛕 पवित्र रेशमी श्वेत व सुवर्ण मंदिर थीम (Sacred Ivory Mandir)
    // - 'celestial-midnight' : 🌌 दिव्य निळा, तारका व चंद्रप्रभा थीम (Celestial Midnight Star Glow)
    // - 'lotus-blush'        : 🪷 पवित्र कमळ, गुलाबी व रोझ गोल्ड थीम (Sacred Lotus & Rose Gold)
    // ----------------------------------------------------------------
    theme: 'banana-leaf',

    // ----------------------------------------------------------------
    // 🌸 2. AUSPICIOUS SHLOK (श्लोक)
    // ----------------------------------------------------------------
    shlok: {
        line1: "॥ वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।",
        line2: "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"
    },

    // ----------------------------------------------------------------
    // 🕉️ 3. HERO & COUNTDOWN (मुख्य शीर्षक व काउंटडाऊन)
    // ----------------------------------------------------------------
    hero: {
        mainTitle: "गणपती बाप्पा<br>मोरया!",
        subTitle: "|| श्री गणेशोत्सव २०२६ ||",
        // Event Date for Live Countdown (Format: "Month Day, Year HH:MM:SS")
        countdownDate: "September 14, 2026 09:00:00"
    },

    // ----------------------------------------------------------------
    // 📜 4. INVITATION MESSAGE (सप्रेम निमंत्रण संदेश)
    // ----------------------------------------------------------------
    message: {
        title: "सप्रेम निमंत्रण",
        highlightLead: "यंदा आमच्या घरी <span class='highlight'>लाडक्या गणरायाचे</span> मंगलमय आगमन होत आहे.",
        description: "बाप्पाच्या कृपेने आमच्या वास्तूत सुख, शांती आणि समृद्धीचा वास राहो. या पावन पर्वावर बाप्पाच्या दर्शनाचा आणि प्रसादाचा लाभ घेण्यासाठी आपण सपरिवार अगत्य उपस्थित राहावे, ही नम्र विनंती.",
        modakTitle: "गरमागरम उकडीचे मोदक व महाप्रसाद",
        modakSubtitle: "बाप्पाच्या आवडत्या प्रसादाचा आस्वाद घेण्यासाठी सहकुटुंब या!"
    },

    // ----------------------------------------------------------------
    // 👨‍👩‍👧‍👦 5. FAMILY & HOST DETAILS (निमंत्रक परिवार)
    // ----------------------------------------------------------------
    family: {
        badge: "✨ राऊत परिवार ✨",
        title: "निमंत्रक परिवार",
        familyName: "राऊत परिवार",
        hostName: "निमंत्रक: श्री. कल्पेश राऊत",
        subtext: "आणि समस्त राऊत परिवार आपले सहर्ष स्वागत करीत आहे."
    },

    // ----------------------------------------------------------------
    // 📅 6. UTSAV SCHEDULE (कार्यक्रमाची रूपरेषा)
    // ----------------------------------------------------------------
    schedule: [
        {
            icon: "🌸",
            title: "श्रीगणेश स्थापना व पूजन",
            details: "सोमवार, १४ सप्टेंबर २०२६ | सकाळी ९:०० वाजता"
        },
        {
            icon: "🪔",
            title: "दैनिक महाआरती व मोदक प्रसाद",
            details: "दररोज संध्याकाळी ७:३० वाजता"
        },
        {
            icon: "🕉️",
            title: "उत्तरपूजा व विसर्जन मिरवणूक",
            details: "शनिवार, १९ सप्टेंबर २०२६ | दुपारी ४:०० वाजता"
        }
    ],

    // ----------------------------------------------------------------
    // 🪔 7. SATYANARAYANA POOJA (श्री सत्यनारायण महापूजा)
    // ----------------------------------------------------------------
    pooja: {
        showSection: true, // Set to false if not hosting Satyanarayan Pooja
        title: "विशेष श्री सत्यनारायण महापूजा",
        description: "गणेशोत्सवाच्या शुभमुहूर्तावर आमच्या निवासस्थानी श्री सत्यनारायण महापूजेचे आयोजन केले आहे.",
        date: "१८ सप्टेंबर २०२६ (शुक्रवार)",
        time: "सकाळी १०:०० वाजता (पूजा प्रारंभ)",
        prasadTime: "दुपारी १:०० ते ३:३० वाजेपर्यंत",
        inviteNote: "तीर्थप्रसाद व केळीच्या पानावरील भोजनप्रसादाचा लाभ घेण्यासाठी नक्की यावे!"
    },

    // ----------------------------------------------------------------
    // 📍 8. VENUE & CONTACT DETAILS (पत्ता व संपर्क)
    // ----------------------------------------------------------------
    venue: {
        title: "पत्ता व स्थळ",
        addressLine1: "२०२, स्नेहकुंज अपार्टमेंट,",
        addressLine2: "रेवदंडा - अलिबाग,",
        addressLine3: "जि. रायगड",
        // Google Maps Search Query (Location name)
        mapsQuery: "Snehkunj Apartment Revdanda Alibag",
        // Host Contact Phone Number
        phone: "+919876543210"
    },

    // ----------------------------------------------------------------
    // 🖼️ 9. IMAGE ASSETS (फोटो फाईल्स)
    // ----------------------------------------------------------------
    images: {
        ganeshIdol: "images/ganesh.png",
        familyPhoto: "images/family.jpg",
        poojaThali: "images/pooja.jpg",
        modakPhoto: "images/modak.jpg",
        templeArch: "" // Optional custom arch overlay PNG (e.g. images/temple_arch.png)
    },

    // ----------------------------------------------------------------
    // 🎵 10. AARTI & DEVOTIONAL MUSIC (आरती व पार्श्वसंगीत)
    // ----------------------------------------------------------------
    audio: {
        enableMusic: true,             // Enable background devotional aarti
        audioFile: "audio/aarti.mp3",  // Audio path for aarti
        bellAudioFile: "audio/bell.mp3", // Audio path for temple ghanta bell chime
        volume: 0.75,                  // Volume from 0.1 to 1.0
        loop: true,                    // Loop continuously
        autoPlayOnOpen: true           // Automatically play when user taps to open doors
    },

    // ----------------------------------------------------------------
    // 🕊️ 11. FOOTER & WISHES (सप्रेम शुभेच्छा)
    // ----------------------------------------------------------------
    footer: {
        quote: "\"बाप्पाच्या कृपेने आपल्या आयुष्यात सुख, समृद्धी आणि उत्तम आरोग्य लाभो!\"",
        tagline: "|| गणपती बाप्पा मोरया, पुढच्या वर्षी लवकर या ||"
    },

    // ----------------------------------------------------------------
    // ⚡ 12. FEATURES & UI CONTROLS (वैशिष्ट्ये व नियंत्रणे)
    // ----------------------------------------------------------------
    features: {
        enableAudioBell: true,
        enablePetalsAndModakShower: true,
        enableCountdown: true,
        enableQuickThemeSwitcher: true  // Shows floating theme pill to easily preview all 6 themes live
    }
};

// Freeze config object so it can't be accidentally modified at runtime
if (typeof window !== 'undefined') {
    window.INVITATION_CONFIG = INVITATION_CONFIG;
}
