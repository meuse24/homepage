// Multi-language translation system

export const translations = {
  en: {
    // Navigation (terminal command style)
    "nav_home": "> cd /home",
    "nav_geoshare": "> cd /projects/geoshare",
    "nav_kineticscan": "> cd /projects/kineticscan",
    "nav_matrixmentor": "> cd /projects/matrixmentor",
    "nav_quantris": "> cd /projects/quantris",
    "nav_invader": "> cd /projects/invader",
    "nav_breakout": "> cd /projects/breakout",
    "nav_navyclash": "> cd /projects/navyclash",
    "nav_salary": "> cd /projects/salary",
    "nav_schulungsmodell": "> cd /projects/schulungsmodell",
    "nav_sgv": "> cd /projects/sgv",
    "nav_rechnung": "> cd /projects/rechnung",
    "nav_archiv": "> cd /projects/archiv",
    "nav_forwarder": "> cd /projects/forwarder",
    "nav_snake": "> cd /projects/snake",
    "nav_pucman": "> cd /projects/pucman",
    "nav_gameoflife": "> cd /projects/gameoflife",
    "nav_invader1978": "> cd /projects/invader1978",
    "nav_pst": "> cd /projects/pst",

    // Hero boot sequence
    "hero_boot_1": "> SYSTEM BOOT...",
    "hero_boot_2": "> LOADING MODULES...",
    "hero_boot_3": "> CONNECTING...",
    "hero_boot_4": "> LOCATION: AUSTRIA",
    "hero_tagline": "Developer // Austria // Code Architect",
    "hero_prompt": "> explore projects",

    // Section headings
    "section_apps": "// WEB APPS",
    "section_games": "// GAMES",
    "section_tools": "// TOOLS",
    "section_heading": "> ls /projects/",

    // Project cards
    "geoshare_title": "GeoShare",
    "geoshare_desc": "A modern web application for retrieving and sharing location data in various formats. Utilizes the Geolocation API for precise positioning and offers native share functionalities.",
    "geoshare_features": "Multiple Coordinate Formats, Share API, Offline-capable, Responsive Design",
    "geoshare_tech": "Vanilla JavaScript, Geolocation API, Web Share API, Clipboard API",
    "geoshare_cta": "$ open geoshare",
    "kineticscan_title": "Kinetic Scan",
    "kineticscan_desc": "A fast-paced, retro-style arcade space shooter. Classic 8-bit aesthetic combined with modern gameplay mechanics and procedural generation.",
    "kineticscan_features": "Procedural Hazards, Heat System, CRT Visuals, Universal Input, 8 Power-ups",
    "kineticscan_tech": "Phaser 3, TypeScript, Vite, Web Audio API",
    "kineticscan_cta": "$ open kineticscan",
    "kineticscan_repo": "$ git clone repo",
    "matrixmentor_title": "MatrixMentor",
    "matrixmentor_desc": "Interactive learning platform for matrix algebra focused on Austrian Matura level and HAK Digital Business (W2).",
    "matrixmentor_features": "8 lessons, W2 assessment, step-by-step explanations, interactive matrix visualizations, instant quiz feedback",
    "matrixmentor_tech": "Astro 5, React 19, TypeScript, Tailwind CSS 4, KaTeX, Framer Motion",
    "matrixmentor_cta": "$ open matrixmentor",
    "matrixmentor_repo": "$ git clone repo",
    "quantris_title": "Neon Quantris",
    "quantris_desc": "A modern Tetris clone with neon aesthetics and smooth gameplay. Particle effects, dynamic music synchronization, and responsive controls.",
    "quantris_features": "Highscore System, Beat-Sync Audio, Particle FX, Touch Controls",
    "quantris_tech": "JavaScript, HTML5 Canvas, Web Audio API",
    "quantris_cta": "$ open quantris",
    "invader_title": "Space Invader Clone",
    "invader_desc": "Classic Space Invaders built with modern web tech. Pixel-perfect collision detection, progressive difficulty, retro aesthetics at smooth 60fps.",
    "invader_tech": "HTML5 Canvas, JavaScript ES6+, Web Audio API",
    "invader_cta": "$ open invader",
    "breakout_title": "Breakout Game",
    "breakout_desc": "Modern interpretation of the Atari classic. Physics-based ball movement, destructible blocks with particle system, responsive touch controls.",
    "breakout_features": "Multi-Level Design, Power-ups, High Score System",
    "breakout_cta": "$ open breakout",
    "navyclash_title": "NavyClash",
    "navyclash_desc": "Strategic fleet battle in Battleship style. Tactically place ships and attack to sink the enemy armada.",
    "navyclash_features": "Manual placement, Auto-setup, Clear hit/miss feedback",
    "navyclash_modes": "Single-Player vs AI, Multiplayer with private lobby",
    "navyclash_cta": "$ open navyclash",
    "salary_title": "Salary Calculator",
    "salary_desc": "Web app for calculating monthly salaries for executive officers of the Federal Police in Austria. Combines rank, level, and allowances.",
    "salary_features": "Dynamic Calculation, Optional Allowances, Instant Updates, Printable",
    "salary_tech": "Vanilla JavaScript, CSS Grid, Local Storage",
    "salary_cta": "$ open salary",
    "schulungsmodell_title": "Training Capacity Model",
    "schulungsmodell_desc": "Planning model for calculating training capacity for an organizational unit. Covers initial training, refresher cycles, and annual intake.",
    "schulungsmodell_features": "Two-phase model, Capacity status, Scenario comparison, 15-year charts, Export",
    "schulungsmodell_tech": "Vanilla JavaScript, HTML5, CSS3, Chart.js, File System Access API",
    "schulungsmodell_cta": "$ open schulungsmodell",
    "sgv_title": "SGV Capture",
    "sgv_desc": "Web form for recording operations and calculating billable services under the SGV regulation.",
    "sgv_features": "Operation capture, Tariff models, Auto-calc, CSV/PDF/JSON export",
    "sgv_tech": "Vite, React, TypeScript, React Hook Form, Zod, TanStack Table, jsPDF",
    "sgv_cta": "$ open sgv",
    "rechnung_title": "Invoice Web App",
    "rechnung_desc": "Client-only invoice management app. Manage customers and services, create invoices, track statuses, and export professional PDFs.",
    "rechnung_features": "Customer data, Invoice history, PDF export, CSV import, JSON backup",
    "rechnung_tech": "Vite, React, TypeScript, Mantine, React Router, @react-pdf/renderer",
    "rechnung_cta": "$ open rechnung",
    "rechnung_repo": "$ git clone repo",
    "archiv_title": "Museum-Archive",
    "archiv_desc": "Web app to catalog museum exhibits and manage associated media in a structured, searchable archive.",
    "archiv_features": "Exhibit CRUD, Media upload, Search/filter/pagination, Categories",
    "archiv_tech": "Vite, React, TypeScript, MUI, TanStack Query/Table, Zod, REST API + MariaDB",
    "archiv_cta": "$ open archiv",
    "forwarder_title": "SMS/TEL Forwarder",
    "forwarder_desc": "Android app that forwards SMS and calls to another number. Stay reachable on a different SIM or device.",
    "forwarder_platform": "Android (API 26+), Telephony & SMS APIs",
    "forwarder_cta": "$ open forwarder",
    "snake_title": "Snake M24",
    "snake_desc": "Retro-arcade Snake clone with CRT screen effect and 8-bit audio. Multiple power-ups, combo system, and persistent high-score leaderboard.",
    "snake_features": "Keyboard/Swipe controls, Power-ups, Highscore, CRT Visuals, Web Audio SFX",
    "snake_tech": "Vanilla JavaScript, HTML5 Canvas, Web Audio API, Local Storage",
    "snake_cta": "$ open snake",
    "pucman_title": "Pucman",
    "pucman_desc": "Classic Pac-Man clone with smooth gameplay, ghost AI, and retro aesthetics. Navigate the maze, collect dots, avoid ghosts.",
    "pucman_features": "4 Ghost AI personalities, Power Pellet mode, Intro animation, Touch controls",
    "pucman_tech": "Vanilla JavaScript, HTML5 Canvas, Web Audio API, Synth SFX",
    "pucman_cta": "$ open pucman",
    "gameoflife_title": "Conway's Game of Life",
    "gameoflife_desc": "Interactive cellular automaton simulation based on Conway's mathematical rules. Watch patterns evolve, create your own, or explore classic configurations.",
    "gameoflife_features": "Draw/Erase cells, Preset patterns, Speed control, Grid zoom, Pause/Play",
    "gameoflife_tech": "Phaser 3, TypeScript, Vite",
    "gameoflife_cta": "$ open gameoflife",
    "invader1978_title": "Space Invaders 1978",
    "invader1978_desc": "Authentic recreation of the 1978 arcade classic. Retro pixel graphics, authentic sound effects, progressive difficulty, and fullscreen mobile support.",
    "invader1978_features": "Arcade-accurate physics, Touch & keyboard controls, Fullscreen mode, High score tracking",
    "invader1978_tech": "Phaser 3, JavaScript, Press Start 2P font",
    "invader1978_cta": "$ open invader1978",
    "pst_title": "Titan PST Reader",
    "pst_desc": "Client-side web app to open and browse Outlook PST archive files directly in the browser. No server upload required — all processing happens locally.",
    "pst_features": "Folder tree navigation, Virtual email list, Email body viewer, EML/CSV/JSON export",
    "pst_tech": "React 19, TypeScript, Vite, Tailwind CSS v4, pst-extractor, TanStack Virtual",
    "pst_cta": "$ open pst-reader",
    "pst_repo": "$ git clone repo",

    // Footer
    "footer_session": "SESSION: active",
    "footer_uptime": "UPTIME: since 2024",
    "footer_copy": "MEUSE24"
  },
  de: {
    // Navigation
    "nav_home": "> cd /home",
    "nav_geoshare": "> cd /projects/geoshare",
    "nav_kineticscan": "> cd /projects/kineticscan",
    "nav_matrixmentor": "> cd /projects/matrixmentor",
    "nav_quantris": "> cd /projects/quantris",
    "nav_invader": "> cd /projects/invader",
    "nav_breakout": "> cd /projects/breakout",
    "nav_navyclash": "> cd /projects/navyclash",
    "nav_salary": "> cd /projects/salary",
    "nav_schulungsmodell": "> cd /projects/schulungsmodell",
    "nav_sgv": "> cd /projects/sgv",
    "nav_rechnung": "> cd /projects/rechnung",
    "nav_archiv": "> cd /projects/archiv",
    "nav_forwarder": "> cd /projects/forwarder",
    "nav_snake": "> cd /projects/snake",
    "nav_pucman": "> cd /projects/pucman",
    "nav_gameoflife": "> cd /projects/gameoflife",
    "nav_invader1978": "> cd /projects/invader1978",
    "nav_pst": "> cd /projects/pst",

    // Hero boot sequence
    "hero_boot_1": "> SYSTEMSTART...",
    "hero_boot_2": "> MODULE LADEN...",
    "hero_boot_3": "> VERBINDE...",
    "hero_boot_4": "> STANDORT: ÖSTERREICH",
    "hero_tagline": "Entwickler // Österreich // Code Architekt",
    "hero_prompt": "> projekte entdecken",

    // Section headings
    "section_apps": "// WEB APPS",
    "section_games": "// SPIELE",
    "section_tools": "// TOOLS",
    "section_heading": "> ls /projekte/",

    // Project cards
    "geoshare_title": "GeoShare",
    "geoshare_desc": "Eine moderne Webanwendung zum Abrufen und Teilen von Standortdaten in verschiedenen Formaten. Nutzt die Geolocation API für präzise Standortbestimmung.",
    "geoshare_features": "Multiple Koordinatenformate, Share-API, Offline-fähig, Responsive Design",
    "geoshare_tech": "Vanilla JavaScript, Geolocation API, Web Share API, Clipboard API",
    "geoshare_cta": "$ open geoshare",
    "kineticscan_title": "Kinetic Scan",
    "kineticscan_desc": "Ein rasanter Arcade-Weltraum-Shooter im Retro-Stil. Klassische 8-Bit-Ästhetik kombiniert mit moderner Spielmechanik und prozeduraler Generierung.",
    "kineticscan_features": "Prozedurale Gefahren, Heat-System, CRT-Visuals, Universal-Input, 8 Power-ups",
    "kineticscan_tech": "Phaser 3, TypeScript, Vite, Web Audio API",
    "kineticscan_cta": "$ open kineticscan",
    "kineticscan_repo": "$ git clone repo",
    "matrixmentor_title": "MatrixMentor",
    "matrixmentor_desc": "Interaktive Lernplattform für Matrizenrechnung mit Fokus auf Matura-Niveau und HAK Digital Business (W2).",
    "matrixmentor_features": "8 Lektionen, W2-Kompetenzcheck, Schritt-für-Schritt-Erklärungen, interaktive Matrix-Visualisierungen, Sofort-Feedback",
    "matrixmentor_tech": "Astro 5, React 19, TypeScript, Tailwind CSS 4, KaTeX, Framer Motion",
    "matrixmentor_cta": "$ open matrixmentor",
    "matrixmentor_repo": "$ git clone repo",
    "quantris_title": "Neon Quantris",
    "quantris_desc": "Ein moderner Tetris-Klon mit Neon-Ästhetik und flüssigem Gameplay. Partikeleffekte, dynamische Musiksynchronisation und responsive Steuerung.",
    "quantris_features": "Highscore-System, Beat-Sync Audio, Partikel-FX, Touch-Steuerung",
    "quantris_tech": "JavaScript, HTML5 Canvas, Web Audio API",
    "quantris_cta": "$ open quantris",
    "invader_title": "Space Invader Klon",
    "invader_desc": "Klassisches Space Invaders mit moderner Webtechnologie. Pixelgenaue Kollisionserkennung, progressive Schwierigkeit, Retro-Ästhetik bei 60fps.",
    "invader_tech": "HTML5 Canvas, JavaScript ES6+, Web Audio API",
    "invader_cta": "$ open invader",
    "breakout_title": "Breakout Spiel",
    "breakout_desc": "Moderne Interpretation des Atari-Klassikers. Physikbasiertes Ballverhalten, zerstörbare Blöcke mit Partikelsystem, responsive Touch-Steuerung.",
    "breakout_features": "Multi-Level-Design, Power-ups, Highscore-System",
    "breakout_cta": "$ open breakout",
    "navyclash_title": "NavyClash",
    "navyclash_desc": "Strategisches Flottengefecht im Battleship-Stil. Schiffe taktisch platzieren und gezielt angreifen.",
    "navyclash_features": "Manuelle Platzierung, Auto-Setup, Klares Treffer/Fehlschuss-Feedback",
    "navyclash_modes": "Single-Player vs KI, Multiplayer mit Lobby",
    "navyclash_cta": "$ open navyclash",
    "salary_title": "Gehaltsrechner",
    "salary_desc": "Webanwendung zur Berechnung des Monatsbezugs für Exekutivbedienstete der Bundespolizei. Kombiniert Dienstgrad, Stufe und Zulagen.",
    "salary_features": "Dynamische Berechnung, Optionale Zulagen, Sofort-Update, Druckbar",
    "salary_tech": "Vanilla JavaScript, CSS Grid, Local Storage",
    "salary_cta": "$ open salary",
    "schulungsmodell_title": "Schulungsmodell",
    "schulungsmodell_desc": "Planungsmodell zur Berechnung von Schulungskapazitäten. Bewertet Erstschulung, Grundausbildung, Nachschulung und Neuzugänge.",
    "schulungsmodell_features": "Zwei-Phasen-Modell, Kapazitätsstatus, Szenariovergleich, 15-Jahres-Charts, Export",
    "schulungsmodell_tech": "Vanilla JavaScript, HTML5, CSS3, Chart.js, File System Access API",
    "schulungsmodell_cta": "$ open schulungsmodell",
    "sgv_title": "SGV Erfassung",
    "sgv_desc": "Webformular zur Erfassung von Einsätzen und Berechnung verrechenbarer Leistungen nach SGV.",
    "sgv_features": "Einsatz-Erfassung, Tarifmodelle, Auto-Berechnung, CSV/PDF/JSON-Export",
    "sgv_tech": "Vite, React, TypeScript, React Hook Form, Zod, TanStack Table, jsPDF",
    "sgv_cta": "$ open sgv",
    "rechnung_title": "Rechnungs-Webapp",
    "rechnung_desc": "Client-only Rechnungsverwaltung. Kunden und Leistungen pflegen, Rechnungen erstellen, Status verfolgen und PDFs exportieren.",
    "rechnung_features": "Kundendaten, Rechnungshistorie, PDF-Export, CSV-Import, JSON-Backup",
    "rechnung_tech": "Vite, React, TypeScript, Mantine, React Router, @react-pdf/renderer",
    "rechnung_cta": "$ open rechnung",
    "rechnung_repo": "$ git clone repo",
    "archiv_title": "Museum-Archiv",
    "archiv_desc": "Webanwendung zur strukturierten Erfassung von Exponaten und Medien in einem durchsuchbaren Archiv.",
    "archiv_features": "Exponat-CRUD, Medien-Upload, Suche/Filter/Pagination, Kategorien",
    "archiv_tech": "Vite, React, TypeScript, MUI, TanStack Query/Table, Zod, REST-API + MariaDB",
    "archiv_cta": "$ open archiv",
    "forwarder_title": "SMS/TEL Weiterleiter",
    "forwarder_desc": "Android-App die SMS und Anrufe an eine andere Nummer weiterleitet. Erreichbar bleiben auf einer anderen SIM.",
    "forwarder_platform": "Android (API 26+), Telephony & SMS APIs",
    "forwarder_cta": "$ open forwarder",
    "snake_title": "Snake M24",
    "snake_desc": "Retro-Arcade-Snake-Klon mit CRT-Effekt und 8-Bit-Audio. Power-Ups, Combo-System und persistente Highscore-Bestenliste.",
    "snake_features": "Tastatur/Swipe-Steuerung, Power-Ups, Highscore, CRT-Visuals, Web Audio SFX",
    "snake_tech": "Vanilla JavaScript, HTML5 Canvas, Web Audio API, Local Storage",
    "snake_cta": "$ open snake",
    "pucman_title": "Pucman",
    "pucman_desc": "Klassischer Pac-Man-Klon mit flüssigem Gameplay, Geister-KI und Retro-Ästhetik. Navigiere das Labyrinth und sammle Punkte.",
    "pucman_features": "4 Geister-KI-Persönlichkeiten, Kraftpillen-Modus, Intro-Animation, Touch-Steuerung",
    "pucman_tech": "Vanilla JavaScript, HTML5 Canvas, Web Audio API, Synth-SFX",
    "pucman_cta": "$ open pucman",
    "gameoflife_title": "Conway's Game of Life",
    "gameoflife_desc": "Interaktive zelluläre Automaten-Simulation basierend auf Conways mathematischen Regeln. Beobachte Musterentwicklung oder erstelle eigene Konfigurationen.",
    "gameoflife_features": "Zellen zeichnen/löschen, Vorlagen, Geschwindigkeitsregler, Grid-Zoom, Pause/Play",
    "gameoflife_tech": "Phaser 3, TypeScript, Vite",
    "gameoflife_cta": "$ open gameoflife",
    "invader1978_title": "Space Invaders 1978",
    "invader1978_desc": "Authentische Nachbildung des Arcade-Klassikers von 1978. Retro-Pixel-Grafik, originale Soundeffekte, progressive Schwierigkeit und Vollbild-Support.",
    "invader1978_features": "Arcade-genaue Physik, Touch & Tastatur-Steuerung, Vollbildmodus, Highscore-Tracking",
    "invader1978_tech": "Phaser 3, JavaScript, Press Start 2P Font",
    "invader1978_cta": "$ open invader1978",
    "pst_title": "Titan PST Reader",
    "pst_desc": "Client-seitige Webanwendung zum Öffnen und Durchsuchen von Outlook-PST-Archivdateien direkt im Browser. Kein Server-Upload – alle Verarbeitung erfolgt lokal.",
    "pst_features": "Ordnerstruktur-Navigation, Virtuelle E-Mail-Liste, E-Mail-Inhaltsanzeige, EML/CSV/JSON-Export",
    "pst_tech": "React 19, TypeScript, Vite, Tailwind CSS v4, pst-extractor, TanStack Virtual",
    "pst_cta": "$ open pst-reader",
    "pst_repo": "$ git clone repo",

    // Footer
    "footer_session": "SITZUNG: aktiv",
    "footer_uptime": "LAUFZEIT: seit 2024",
    "footer_copy": "MEUSE24"
  }
} as const;

export type Language = 'en' | 'de';
export type TranslationKey = keyof typeof translations.en;

// Safe localStorage wrapper
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      console.warn('localStorage.getItem failed:', e);
      return null;
    }
  },
  setItem: (key: string, value: string): boolean => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (e) {
      console.warn('localStorage.setItem failed:', e);
      return false;
    }
  }
};

// HTML sanitization: only allow specific safe tags
function sanitizeHTML(html: string): string {
  if (!/<[^>]+>/.test(html)) {
    return html;
  }

  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  // Remove disallowed tags
  const allTags = tempDiv.querySelectorAll('*');
  const allowedTags = ['STRONG', 'SPAN', 'BR', 'EM', 'B', 'I'];

  allTags.forEach(tag => {
    if (!allowedTags.includes(tag.tagName)) {
      tag.remove();
    }
  });

  return tempDiv.innerHTML;
}

export function setLanguage(lang: Language) {
  document.documentElement.lang = lang;
  safeLocalStorage.setItem('lang', lang);

  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key') as TranslationKey;
    if (translations[lang][key]) {
      const translation = translations[lang][key];
      const sanitized = sanitizeHTML(translation);

      if (/<[^>]+>/.test(sanitized)) {
        (element as HTMLElement).innerHTML = sanitized;
      } else {
        element.textContent = translation;
      }
    }
  });

  // Update language buttons
  const langDeBtn = document.getElementById('lang-de');
  const langEnBtn = document.getElementById('lang-en');

  if (lang === 'de') {
    langDeBtn?.classList.add('active');
    langEnBtn?.classList.remove('active');
    langDeBtn?.setAttribute('aria-pressed', 'true');
    langEnBtn?.setAttribute('aria-pressed', 'false');
  } else {
    langEnBtn?.classList.add('active');
    langDeBtn?.classList.remove('active');
    langEnBtn?.setAttribute('aria-pressed', 'true');
    langDeBtn?.setAttribute('aria-pressed', 'false');
  }
}

export function initLanguage() {
  const savedLang = safeLocalStorage.getItem('lang') as Language | null;
  const browserLang = navigator.language.split('-')[0];
  const lang: Language = savedLang || (browserLang === 'de' ? 'de' : 'en');
  setLanguage(lang);
}

