export const STANDALONE_HTML = `<!DOCTYPE html>
<html lang="en" dir="ltr" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Arch. Ibrahim Al-Najjar — Architectural Engineer & Educator</title>
  <meta name="description" content="Architectural engineer and instructor with professional experience since 2023, having successfully trained over 600+ students worldwide. Complete instruction in Revit, Photoshop, AutoCAD, Lumion, V-Ray, and Enscape." />
  <meta property="og:title" content="Arch. Ibrahim Al-Najjar — Architectural Engineer & Educator" />
  <meta property="og:description" content="Thoughtful architecture. Knowledge worth sharing. Complete BIM & architectural visualization ecosystem." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Google Fonts: Plus Jakarta Sans, IBM Plex Sans Arabic & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            canvas: '#0A0A0A',
            surface: '#121212',
            surfaceHover: '#171717',
            primaryText: '#F5F5F5',
            mutedText: '#888888',
            hairline: '#1F1F1F',
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '"IBM Plex Sans Arabic"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            mono: ['"JetBrains Mono"', '"IBM Plex Sans Arabic"', 'monospace'],
          }
        }
      }
    };
  </script>

  <style>
    html {
      scroll-behavior: smooth;
      background-color: #0A0A0A;
      color: #F5F5F5;
    }
    body {
      background-color: #0A0A0A;
      color: #F5F5F5;
      font-family: 'Plus Jakarta Sans', 'IBM Plex Sans Arabic', -apple-system, BlinkMacSystemFont, sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
    html[dir="rtl"] body {
      font-family: 'IBM Plex Sans Arabic', 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .tabular-nums {
      font-variant-numeric: tabular-nums;
    }
    .headline-balance {
      text-wrap: balance;
    }
    .course-drawer {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
      opacity: 0;
    }
    .course-drawer.open {
      grid-template-rows: 1fr;
      opacity: 1;
    }
    .course-drawer-inner {
      overflow: hidden;
    }
  </style>
</head>
<body class="bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#F5F5F5] selection:text-[#0A0A0A]">

  <!-- TOP NAVIGATION BAR -->
  <header class="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1F1F1F]">
    <div class="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-8">
      <a href="#" data-i18n="brand" class="text-xs md:text-sm font-semibold tracking-[0.16em] text-[#F5F5F5] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity">
        IBRAHIM AL-NAJJAR
      </a>

      <nav aria-label="Main Navigation" class="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]">
        <a href="#about" data-i18n="navAbout" class="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0">About</a>
        <a href="#software-ecosystem" data-i18n="navSoftware" class="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0">Software Ecosystem</a>
        <a href="#teaching" data-i18n="navTeaching" class="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0">Teaching</a>
        <a href="#student-works" data-i18n="navStudentWorks" class="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0">Student Works</a>
        <a href="#contact" data-i18n="navContact" class="hover:text-[#F5F5F5] transition-colors duration-150 whitespace-nowrap shrink-0">Let's talk</a>
      </nav>

      <div class="flex items-center gap-2.5 sm:gap-3 shrink-0">
        <a
          href="https://www.instagram.com/arch.ibrahim.najar?exln=MTMxNWlqYWYxNDQ0eg%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          class="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#888888] hover:text-[#F472B6] bg-[#121212] border border-[#1F1F1F] hover:border-[#E1306C]/50 rounded transition-colors"
        >
          <svg class="w-3.5 h-3.5 text-[#E1306C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          <span class="hidden sm:inline font-mono text-[11px]">@arch.ibrahim.najar</span>
        </a>

        <button
          id="lang-toggle-btn"
          type="button"
          aria-label="Switch Language"
          class="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold text-[#F5F5F5] bg-[#121212] border border-[#1F1F1F] rounded hover:border-[#888888] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
        >
          <span id="lang-toggle-label">العربية</span>
        </button>

        <button id="mobile-menu-btn" type="button" aria-label="Toggle Menu" aria-expanded="false" class="md:hidden p-2 text-[#888888] hover:text-[#F5F5F5] transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7h16M4 17h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div id="mobile-menu" class="hidden md:hidden border-t border-[#1F1F1F] bg-[#0A0A0A] px-6 py-5 space-y-3">
      <a href="#about" data-i18n="navAbout" class="mobile-nav-link block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5]">About</a>
      <a href="#software-ecosystem" data-i18n="navSoftware" class="mobile-nav-link block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5]">Software Ecosystem</a>
      <a href="#teaching" data-i18n="navTeaching" class="mobile-nav-link block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5]">Teaching</a>
      <a href="#student-works" data-i18n="navStudentWorks" class="mobile-nav-link block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5]">Student Works</a>
      <a href="#contact" data-i18n="navContact" class="mobile-nav-link block py-1.5 text-sm font-medium text-[#F5F5F5]">Let's talk</a>
      <a
        href="https://www.instagram.com/arch.ibrahim.najar?exln=MTMxNWlqYWYxNDQ0eg%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center gap-2 pt-2 border-t border-[#1F1F1F] text-xs font-medium text-[#F472B6]"
      >
        <svg class="w-4 h-4 text-[#E1306C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        <span data-i18n="instagramBtnLabel">تابعنا على إنستغرام</span>
      </a>
    </div>
  </header>

  <main>
    <!-- HERO SECTION -->
    <section class="pt-16 md:pt-24 pb-20 md:pb-28 border-b border-[#1F1F1F]">
      <div class="max-w-[1200px] mx-auto px-6 md:px-10">
        <!-- Transparent Gray Box linking Circular Profile Image and Name + Text below it -->
        <div class="inline-flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 mb-12 md:mb-16 p-6 sm:p-8 rounded-2xl bg-[#141414]/75 backdrop-blur-md border border-[#262626] shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
          <div
            onclick="openLightbox('./profile.jpg', currentLang === 'ar' ? 'المهندس إبراهيم النجار' : 'Arch. Ibrahim Al-Najjar', currentLang === 'ar' ? 'مهندس معماري ومدرّب محترف' : 'ARCHITECTURAL ENGINEER & EDUCATOR', 'INSTRUCTOR & FOUNDER')"
            class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[#2A2A2A] bg-[#121212] shrink-0 cursor-pointer shadow-inner"
          >
            <img
              src="./profile.jpg"
              alt="Arch. Ibrahim Al-Najjar"
              referrerpolicy="no-referrer"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.profile;"
            />
          </div>
          <div>
            <h1 data-i18n="heroName" class="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.08] headline-balance">
              Arch. Ibrahim Al-Najjar
            </h1>
            <p data-i18n="heroLabel" class="font-mono text-xs sm:text-sm tracking-[0.18em] text-[#888888] mt-2 sm:mt-3">
              ARCHITECTURAL ENGINEER &amp; EDUCATOR
            </p>
          </div>
        </div>

        <!-- Editorial Split Row Below -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 border-t border-[#1F1F1F] mb-12 md:mb-16 items-start">
          <div class="lg:col-span-5">
            <h2 data-i18n="heroMotto" class="text-xl sm:text-2xl md:text-[1.75rem] font-semibold tracking-tight text-[#F5F5F5] leading-[1.3] headline-balance">
              Thoughtful architecture. Knowledge worth sharing.
            </h2>
          </div>
          <div class="lg:col-span-7">
            <p data-i18n="heroBio" class="text-base md:text-[1.0625rem] text-[#888888] leading-[1.75] max-w-[68ch]">
              Architectural engineer and instructor with professional experience since 2023, having successfully trained over 600+ students worldwide. Specializing in transforming complex architectural concepts into high-end visual masterpieces using Revit, Photoshop, AutoCAD, Lumion, V-Ray, and Enscape.
            </p>
          </div>
        </div>

        <!-- Hero Image Showcase -->
        <div class="relative w-full aspect-video rounded-xl overflow-hidden border border-[#1F1F1F] bg-[#121212] group">
          <img
            src="./hero-render.jpg"
            alt="Twilight Architectural Render"
            referrerpolicy="no-referrer"
            class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.hero;"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"></div>
          <div class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#0A0A0A]/90 backdrop-blur-md border border-[#1F1F1F] px-3.5 py-2 rounded">
            <span data-i18n="heroBadge" class="font-mono text-[11px] sm:text-xs tracking-[0.16em] text-[#F5F5F5]">
              FORM / LIGHT / ATMOSPHERE
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: ABOUT & STATS -->
    <section id="about" class="py-20 md:py-24 border-b border-[#1F1F1F] scroll-mt-16">
      <div class="max-w-[1200px] mx-auto px-6 md:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
          <div class="lg:col-span-4">
            <h2 data-i18n="aboutHeading" class="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5] leading-[1.2] headline-balance">
              Good design begins with understanding.
            </h2>
          </div>
          <div class="lg:col-span-8">
            <p data-i18n="aboutNarrative" class="text-base md:text-[1.0625rem] text-[#888888] leading-[1.75] max-w-[70ch]">
              I'm Arch. Ibrahim Al-Najjar, an architectural engineer and dedicated educator. My journey in professional architectural training started in 2023, and since then, I’ve had the privilege of teaching and empowering over 600+ students and engineers worldwide. My approach bridges the gap between creative architectural design and precise technical execution. My mission is to help aspiring architects transform complex concepts into stunning, realistic visual stories through mastering the core software stack.
            </p>
          </div>
        </div>

        <!-- Compact Stats Strip -->
        <div class="bg-[#121212] border border-[#222] rounded-xl p-3 grid grid-cols-3 divide-x divide-[#222] rtl:divide-x-reverse text-center">
          <div class="px-2 py-1">
            <div data-i18n="stat1Value" class="text-lg md:text-xl font-bold text-white tabular-nums">
              Since 2023
            </div>
            <p data-i18n="stat1Desc" class="text-[10px] md:text-xs text-[#888888] font-medium mt-0.5">
              Experience &amp; Instruction
            </p>
          </div>

          <div class="px-2 py-1">
            <div data-i18n="stat2Value" class="text-lg md:text-xl font-bold text-white tabular-nums">
              600+
            </div>
            <p data-i18n="stat2Desc" class="text-[10px] md:text-xs text-[#888888] font-medium mt-0.5">
              Students Worldwide
            </p>
          </div>

          <div class="px-2 py-1">
            <div data-i18n="stat3Value" class="text-lg md:text-xl font-bold text-white tabular-nums">
              6 Tools
            </div>
            <p data-i18n="stat3Desc" class="text-[10px] md:text-xs text-[#888888] font-medium mt-0.5">
              BIM &amp; Rendering Stack
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: CORE SOFTWARE ECOSYSTEM (NO NUMBERS, NO MICRO-LABEL, CLEAN PROGRAM BUTTONS THAT EXPAND COURSES) -->
    <section id="software-ecosystem" class="py-20 md:py-28 border-b border-[#1F1F1F] scroll-mt-16 bg-[#0E0E0E]">
      <div class="max-w-[1200px] mx-auto px-6 md:px-10">
        <!-- Section Header -->
        <div class="max-w-3xl mb-12">
          <h2 data-i18n="ecosystemTitle" class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.15] mb-5 headline-balance">
            Core Software Ecosystem
          </h2>
          <p data-i18n="ecosystemDesc" class="text-base text-[#888888] leading-relaxed">
            Click any software below to expand its full curriculum, view independent student projects, and see enrollment fees.
          </p>
        </div>

        <!-- 6 Clean Software Buttons (NO ARROWS, OFFICIAL LOGOS) -->
        <!-- 6 Clean Software Buttons (UNIFIED THEME & OFFICIAL COMPANY LOGOS) -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-16">
          <button
            type="button"
            onclick="openAndScrollCourse('track-revit')"
            class="group p-4 sm:p-4.5 rounded-xl bg-[#121212] border border-[#1F1F1F] hover:border-[#888888] transition-all duration-200 text-start flex items-center gap-3 cursor-pointer"
          >
            <div class="w-9 h-9 rounded-xl overflow-hidden bg-[#0A0A0A] border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_14px_rgba(6,182,212,0.35)] flex items-center justify-center shrink-0 shadow-sm relative transition-all duration-300" title="Autodesk Revit">
              <img src="./revit-logo.jpg" alt="Autodesk Revit" class="w-full h-full object-cover rounded-[inherit] transition-transform duration-300 group-hover:scale-105" onerror="if(this.src.indexOf('revit-logo_3978ae19.jpg')===-1){this.src='./assets/aistudio/revit-logo_3978ae19.jpg';}" />
            </div>
            <span class="text-sm sm:text-base font-bold text-[#F5F5F5] group-hover:text-white truncate">Revit</span>
          </button>

          <button
            type="button"
            onclick="openAndScrollCourse('track-photoshop')"
            class="group p-4 sm:p-4.5 rounded-xl bg-[#121212] border border-[#1F1F1F] hover:border-[#888888] transition-all duration-200 text-start flex items-center gap-3 cursor-pointer"
          >
            <div class="w-9 h-9 rounded-xl overflow-hidden bg-[#0A0A0A] border border-blue-500/40 group-hover:border-blue-400 group-hover:shadow-[0_0_14px_rgba(59,130,246,0.35)] flex items-center justify-center shrink-0 shadow-sm relative transition-all duration-300" title="Adobe Photoshop">
              <img src="./photo-logo.jpg" alt="Adobe Photoshop" class="w-full h-full object-cover rounded-[inherit] transition-transform duration-300 group-hover:scale-105" onerror="if(this.src.indexOf('photo-logo_d9bb2ce1.jpg')===-1){this.src='./assets/aistudio/photo-logo_d9bb2ce1.jpg';}" />
            </div>
            <span class="text-sm sm:text-base font-bold text-[#F5F5F5] group-hover:text-white truncate">Photoshop</span>
          </button>

          <button
            type="button"
            onclick="openAndScrollCourse('track-autocad')"
            class="group p-4 sm:p-4.5 rounded-xl bg-[#121212] border border-[#1F1F1F] hover:border-[#888888] transition-all duration-200 text-start flex items-center gap-3 cursor-pointer"
          >
            <div class="w-9 h-9 rounded-xl overflow-hidden bg-[#0A0A0A] border border-red-500/40 group-hover:border-red-400 group-hover:shadow-[0_0_14px_rgba(239,68,68,0.35)] flex items-center justify-center shrink-0 shadow-sm relative transition-all duration-300" title="Autodesk AutoCAD">
              <img src="./cad-logo.jpg" alt="Autodesk AutoCAD" class="w-full h-full object-cover rounded-[inherit] transition-transform duration-300 group-hover:scale-105" onerror="if(this.src.indexOf('cad-logo_1f70cc81.jpg')===-1){this.src='./assets/aistudio/cad-logo_1f70cc81.jpg';}" />
            </div>
            <span class="text-sm sm:text-base font-bold text-[#F5F5F5] group-hover:text-white truncate">AutoCAD</span>
          </button>

          <button
            type="button"
            onclick="openAndScrollCourse('track-lumion')"
            class="group p-4 sm:p-4.5 rounded-xl bg-[#121212] border border-[#1F1F1F] hover:border-[#888888] transition-all duration-200 text-start flex items-center gap-3 cursor-pointer"
          >
            <div class="w-9 h-9 rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#345D6F]/50 group-hover:border-[#78b7d4] group-hover:shadow-[0_0_14px_rgba(52,93,111,0.5)] flex items-center justify-center shrink-0 shadow-sm relative transition-all duration-300" title="Act-3D Lumion">
              <img src="./lumion-logo.jpg" alt="Act-3D Lumion" class="w-full h-full object-cover rounded-[inherit] transition-transform duration-300 group-hover:scale-105" onerror="if(this.src.indexOf('lumion-logo_e2d1d791.jpg')===-1){this.src='./assets/aistudio/lumion-logo_e2d1d791.jpg';}" />
            </div>
            <span class="text-sm sm:text-base font-bold text-[#F5F5F5] group-hover:text-white truncate">Lumion</span>
          </button>

          <button
            type="button"
            onclick="openAndScrollCourse('track-vray')"
            class="group p-4 sm:p-4.5 rounded-xl bg-[#121212] border border-[#1F1F1F] hover:border-[#888888] transition-all duration-200 text-start flex items-center gap-3 cursor-pointer"
          >
            <div class="w-9 h-9 rounded-xl overflow-hidden bg-[#0A0A0A] border border-blue-500/40 group-hover:border-blue-400 group-hover:shadow-[0_0_14px_rgba(59,130,246,0.35)] flex items-center justify-center shrink-0 shadow-sm relative transition-all duration-300" title="Chaos V-Ray">
              <img src="./vray-logo.jpg" alt="Chaos V-Ray" class="w-full h-full object-cover rounded-[inherit] transition-transform duration-300 group-hover:scale-105" onerror="if(this.src.indexOf('vray-logo_e091105e.jpg')===-1){this.src='./assets/aistudio/vray-logo_e091105e.jpg';}" />
            </div>
            <span class="text-sm sm:text-base font-bold text-[#F5F5F5] group-hover:text-white truncate">V-Ray</span>
          </button>

          <button
            type="button"
            onclick="openAndScrollCourse('track-enscape')"
            class="group p-4 sm:p-4.5 rounded-xl bg-[#121212] border border-[#1F1F1F] hover:border-[#888888] transition-all duration-200 text-start flex items-center gap-3 cursor-pointer"
          >
            <div class="w-9 h-9 rounded-xl overflow-hidden bg-[#0A0A0A] border border-amber-500/40 group-hover:border-amber-400 group-hover:shadow-[0_0_14px_rgba(245,158,11,0.35)] flex items-center justify-center shrink-0 shadow-sm relative transition-all duration-300" title="Chaos Enscape">
              <img src="./enscape-logo.jpg" alt="Chaos Enscape" class="w-full h-full object-cover rounded-[inherit] transition-transform duration-300 group-hover:scale-105" onerror="if(this.src.indexOf('enscape-logo_3537473a.jpg')===-1){this.src='./assets/aistudio/enscape-logo_3537473a.jpg';}" />
            </div>
            <span class="text-sm sm:text-base font-bold text-[#F5F5F5] group-hover:text-white truncate">Enscape</span>
          </button>
        </div>

        <!-- 3 Primary Featured Studio Works directly under the buttons -->
        <div class="pt-10 border-t border-[#1F1F1F]">
          <div class="flex items-center justify-between mb-8">
            <h3 data-i18n="primaryWorksTitle" class="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5]">
              A Selection of Our Distinctive Works
            </h3>
            <span data-i18n="primaryWorksTag" class="text-xs font-mono text-[#888888]">
              Curated Architectural &amp; Visual Highlights
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <!-- Project 1: Contemporary Residential Tower - Saudi Arabia -->
            <article class="bg-[#141923] border border-[#1e293b] hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(6,182,212,0.15)] flex flex-col">
              <!-- Card Preview Header / Cover Image -->
              <div
                onclick="toggleStudioProject('project-saudi-tower')"
                class="group relative aspect-[16/10] w-full overflow-hidden bg-[#0A0D14] cursor-pointer select-none"
                title="Click to toggle project"
              >
                <img
                  src="./saudi-tower-main.png"
                  alt="Contemporary Residential Tower - Saudi Arabia"
                  class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  onerror="this.onerror=null; this.src='./assets/aistudio/1_810bdc4c.png';"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#141923] via-transparent to-black/30 opacity-90 pointer-events-none"></div>

                <span data-i18n="saudiTowerBadge" class="absolute top-3 start-3 font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-cyan-300 bg-[#090D14]/90 border border-cyan-500/40 px-2.5 py-1 rounded shadow-sm">
                  RESIDENTIAL TOWER &amp; URBAN CONTEXT
                </span>

                <span class="absolute top-3 end-3 font-mono text-[10px] font-semibold text-white/90 bg-black/70 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span data-i18n="photosCountText">3 PHOTOS</span>
                </span>

                <div class="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[11px] text-[#CBD5E1]">
                  <span class="font-mono text-[10px] text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded">2026</span>
                  <span data-i18n="expandProjectPrompt" class="text-[10px] font-mono text-cyan-200 group-hover:underline">استعراض المشروع (3 صور) ▼</span>
                </div>
              </div>

              <!-- Card Summary Header -->
              <div class="p-5 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h4 data-i18n="saudiTowerTitle" class="text-base sm:text-lg font-bold text-[#F5F5F5] group-hover:text-white transition-colors mb-2 leading-snug">
                    برج سكني معاصر - المملكة العربية السعودية
                  </h4>
                  <p data-i18n="saudiTowerGeneralDesc" class="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed">
                    تصميم معماري متكامل لبرج سكني يقع على تقاطع محوري، يجمع بين كتل الأبسطة الحداثية وتشطيبات الواجهات المدروسة بدرجات الرمادي الداكن مع تفاصيل اللوفت الخشبية الرأسية.
                  </p>
                </div>

                <button
                  type="button"
                  onclick="toggleStudioProject('project-saudi-tower')"
                  class="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer bg-cyan-950/40 border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/70 hover:border-cyan-400"
                >
                  <span class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span data-i18n="toggleProjectBtn1" id="btn-text-project-saudi-tower">فتح / طي المشروع والمعرض (3 صور)</span>
                  </span>
                  <span id="arrow-project-saudi-tower" class="text-xs text-cyan-400 transition-transform duration-300">▼</span>
                </button>
              </div>

              <!-- Expanded Interactive Gallery -->
              <div id="details-project-saudi-tower" class="px-5 pb-5 pt-2 border-t border-[#1e293b] space-y-4 bg-[#0d121a]">
                <!-- 1. Main Image (الصورة الأساسية فوق) -->
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-[11px] font-mono">
                    <span data-i18n="mainShotLabel" class="text-cyan-400 font-semibold uppercase flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                      الصورة الرئيسية (الواجهة الرأسية)
                    </span>
                    <span class="text-[#64748b]">1 / 3</span>
                  </div>

                  <div
                    onclick="openLightbox('./saudi-tower-main.png', 'واجهة التكوين الرأسي والتفاصيل الحجمية', 'لقطة رأسية مقربة تبرز المعالجة المعمارية للواجهات باستخدام تباين كتل الرمادي الداكن مع اللمسات الخشبية الرأسية، وتوزيع الشرفات البارزة.', 'RESIDENTIAL TOWER & URBAN CONTEXT')"
                    class="group/main relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#1e293b] hover:border-cyan-400/60 cursor-pointer transition-all shadow-sm"
                  >
                    <img
                      src="./saudi-tower-main.png"
                      alt="واجهة التكوين الرأسي والتفاصيل الحجمية"
                      class="w-full h-full object-cover transition-transform duration-500 group-hover/main:scale-105"
                      onerror="this.onerror=null; this.src='./assets/aistudio/1_810bdc4c.png';"
                    />
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/main:opacity-100 transition-opacity flex items-center justify-center">
                      <span data-i18n="zoomPrompt" class="px-3 py-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5">
                        🔍 تكبير الصورة بدقة كاملة
                      </span>
                    </div>
                  </div>

                  <div class="p-3 rounded-xl bg-[#0E131C] border border-[#1e293b]/70">
                    <h5 data-i18n="saudiTowerMainTitle" class="text-xs font-bold text-cyan-300 mb-1">
                      واجهة التكوين الرأسي والتفاصيل الحجمية
                    </h5>
                    <p data-i18n="saudiTowerMainDesc" class="text-[11px] text-[#CBD5E1] leading-relaxed">
                      لقطة رأسية مقربة تبرز المعالجة المعمارية للواجهات باستخدام تباين كتل الرمادي الداكن مع اللمسات الخشبية الرأسية، وتوزيع الشرفات البارزة.
                    </p>
                  </div>
                </div>

                <!-- 2. Two Sub-Images (تحتم 2 فرعيين بنفس الحجم تماماً) -->
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-[11px] font-mono">
                    <span data-i18n="subShotsLabel" class="text-[#94a3b8] font-semibold uppercase">
                      اللقطات الفرعية (2 فرعيين بنفس الحجم)
                    </span>
                    <span class="text-[#64748b]">2 &amp; 3 / 3</span>
                  </div>

                  <div class="grid grid-cols-2 gap-3">
                    <!-- Sub 1 -->
                    <div class="flex flex-col space-y-1.5">
                      <div
                        onclick="openLightbox('./saudi-tower-urban.jpg', 'السياق العمراني والمنظور المحيط', 'منظور جوي عام يوضح تموضع البرج عند التقاطع المحوري، مع دراسة حركة المرور، مواقف السيارات الأرضية، وتنسيق الموقع العام.', 'URBAN CONTEXT')"
                        class="group/sub relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#1e293b] hover:border-cyan-400/60 cursor-pointer transition-all shadow-sm"
                      >
                        <img
                          src="./saudi-tower-urban.jpg"
                          alt="السياق العمراني والمنظور المحيط"
                          class="w-full h-full object-cover transition-transform duration-500 group-hover/sub:scale-105"
                          onerror="this.onerror=null; this.src='./assets/aistudio/2_61f0f7e3.jpg';"
                        />
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/sub:opacity-100 transition-opacity flex items-center justify-center">
                          <span class="p-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs">🔍</span>
                        </div>
                        <span class="absolute bottom-2 start-2 font-mono text-[9px] text-[#F5F5F5] bg-black/80 px-2 py-0.5 rounded border border-[#1e293b]">01</span>
                      </div>
                      <div class="p-2.5 rounded-xl bg-[#0E131C] border border-[#1e293b]/70 flex flex-col justify-between flex-grow">
                        <h6 data-i18n="saudiTowerSub1Title" class="text-[11px] font-bold text-white line-clamp-1 mb-1">
                          السياق العمراني والمنظور المحيط
                        </h6>
                        <p data-i18n="saudiTowerSub1Desc" class="text-[10px] text-[#94a3b8] line-clamp-3 leading-relaxed">
                          منظور جوي عام يوضح تموضع البرج عند التقاطع المحوري، مع دراسة حركة المرور، مواقف السيارات الأرضية، وتنسيق الموقع العام.
                        </p>
                      </div>
                    </div>

                    <!-- Sub 2 -->
                    <div class="flex flex-col space-y-1.5">
                      <div
                        onclick="openLightbox('./saudi-tower-structural.jpg', 'المنظور الهيكلي التحليلي وتوزيع الفراغات', 'منظور هندسي فراغي يوضح الهيكل الإنشائي والكتلة الحجمية للبرج بجانب المخططات الأفقية التخطيطية.', 'STRUCTURAL AXONOMETRIC')"
                        class="group/sub relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#1e293b] hover:border-cyan-400/60 cursor-pointer transition-all shadow-sm"
                      >
                        <img
                          src="./saudi-tower-structural.jpg"
                          alt="المنظور الهيكلي التحليلي وتوزيع الفراغات"
                          class="w-full h-full object-cover transition-transform duration-500 group-hover/sub:scale-105"
                          onerror="this.onerror=null; this.src='./assets/aistudio/3_712691dc.jpg';"
                        />
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/sub:opacity-100 transition-opacity flex items-center justify-center">
                          <span class="p-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs">🔍</span>
                        </div>
                        <span class="absolute bottom-2 start-2 font-mono text-[9px] text-[#F5F5F5] bg-black/80 px-2 py-0.5 rounded border border-[#1e293b]">02</span>
                      </div>
                      <div class="p-2.5 rounded-xl bg-[#0E131C] border border-[#1e293b]/70 flex flex-col justify-between flex-grow">
                        <h6 data-i18n="saudiTowerSub2Title" class="text-[11px] font-bold text-white line-clamp-1 mb-1">
                          المنظور الهيكلي التحليلي وتوزيع الفراغات
                        </h6>
                        <p data-i18n="saudiTowerSub2Desc" class="text-[10px] text-[#94a3b8] line-clamp-3 leading-relaxed">
                          منظور هندسي فراغي يوضح الهيكل الإنشائي والكتلة الحجمية للبرج بجانب المخططات الأفقية التخطيطية.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- 3. General Description (مع وصف المشروع) -->
                <div class="p-4 rounded-xl bg-[#0A0E16] border border-cyan-500/30 space-y-2 shadow-inner">
                  <div class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span data-i18n="projectOverviewLabel" class="font-mono text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                      الوصف العام للمشروع
                    </span>
                  </div>
                  <p data-i18n="saudiTowerGeneralDescFull" class="text-xs text-[#CBD5E1] leading-relaxed">
                    تصميم معماري متكامل لبرج سكني يقع على تقاطع محوري، يجمع بين كتل الأبسطة الحداثية وتشطيبات الواجهات المدروسة بدرجات الرمادي الداكن مع تفاصيل اللوفت الخشبية الرأسية.
                  </p>
                </div>

                <button
                  type="button"
                  onclick="toggleStudioProject('project-saudi-tower')"
                  data-i18n="collapseProjectBtn"
                  class="w-full py-2 text-center text-xs font-mono text-[#888888] hover:text-cyan-300 transition-colors cursor-pointer border-t border-[#1e293b] pt-3"
                >
                  ▲ طي تفاصيل هذا المشروع
                </button>
              </div>
            </article>

            <!-- Project 2: Cantilevered Cliffside Residence -->
            <article class="bg-[#141923] border border-[#1e293b] hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(6,182,212,0.15)] flex flex-col">
              <div
                onclick="toggleStudioProject('project-cliffside-villa')"
                class="group relative aspect-[16/10] w-full overflow-hidden bg-[#0A0D14] cursor-pointer select-none"
                title="Click to toggle project"
              >
                <img
                  src="./revit-work-2.jpg"
                  alt="Cantilevered Cliffside Residence"
                  class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  onerror="this.onerror=null; this.src='./assets/aistudio/REVIT4_48ea5e98.jfif';"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#141923] via-transparent to-black/30 opacity-90 pointer-events-none"></div>

                <span data-i18n="cliffsideBadge" class="absolute top-3 start-3 font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-cyan-300 bg-[#090D14]/90 border border-cyan-500/40 px-2.5 py-1 rounded shadow-sm">
                  CANTILEVERED RESIDENCE &amp; PACIFIC CLIFF
                </span>

                <span class="absolute top-3 end-3 font-mono text-[10px] font-semibold text-white/90 bg-black/70 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span data-i18n="photosCountText">3 PHOTOS</span>
                </span>

                <div class="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[11px] text-[#CBD5E1]">
                  <span class="font-mono text-[10px] text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded">2025</span>
                  <span data-i18n="expandProjectPrompt" class="text-[10px] font-mono text-cyan-200 group-hover:underline">استعراض المشروع (3 صور) ▼</span>
                </div>
              </div>

              <div class="p-5 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h4 data-i18n="work2Title" class="text-base sm:text-lg font-bold text-[#F5F5F5] group-hover:text-white transition-colors mb-2 leading-snug">
                    فيلا معلّقة على الجرف الصخري
                  </h4>
                  <p data-i18n="cliffsideGeneralDesc" class="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed">
                    تصميم فيلا جبلية معاصرة ترتكز على الجرف الصخري الحاد، تتميز بكتل طائرة (Cantilevers) جريئة وواجهات زجاجية ممتدة.
                  </p>
                </div>

                <button
                  type="button"
                  onclick="toggleStudioProject('project-cliffside-villa')"
                  class="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer bg-[#0E131C] border-[#1e293b] text-[#CBD5E1] hover:text-white hover:border-cyan-500/40 hover:bg-[#131a26]"
                >
                  <span class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span data-i18n="toggleProjectBtn2" id="btn-text-project-cliffside-villa">فتح / طي المشروع والمعرض (3 صور)</span>
                  </span>
                  <span id="arrow-project-cliffside-villa" class="text-xs text-cyan-400 transition-transform duration-300">▼</span>
                </button>
              </div>

              <!-- Expanded Interactive Gallery -->
              <div id="details-project-cliffside-villa" class="hidden px-5 pb-5 pt-2 border-t border-[#1e293b] space-y-4 bg-[#0d121a]">
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-[11px] font-mono">
                    <span data-i18n="mainShotLabel" class="text-cyan-400 font-semibold uppercase flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                      الصورة الرئيسية (الكتلة الطائرة)
                    </span>
                    <span class="text-[#64748b]">1 / 3</span>
                  </div>

                  <div
                    onclick="openLightbox('./revit-work-2.jpg', 'الكتلة الطائرة والواجهة الزجاجية المطلة', 'لقطة رئيسية توضح تراكب الكتل الخرسانية المصقولة مع الزجاج الممتد والتوازن الإنشائي فوق الجرف الصخري.', 'PRIMARY RESIDENTIAL MASSING')"
                    class="group/main relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#1e293b] hover:border-cyan-400/60 cursor-pointer transition-all shadow-sm"
                  >
                    <img
                      src="./revit-work-2.jpg"
                      alt="الكتلة الطائرة والواجهة الزجاجية المطلة"
                      class="w-full h-full object-cover transition-transform duration-500 group-hover/main:scale-105"
                      onerror="this.onerror=null; this.src='./assets/aistudio/REVIT4_48ea5e98.jfif';"
                    />
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/main:opacity-100 transition-opacity flex items-center justify-center">
                      <span data-i18n="zoomPrompt" class="px-3 py-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5">
                        🔍 تكبير الصورة بدقة كاملة
                      </span>
                    </div>
                  </div>

                  <div class="p-3 rounded-xl bg-[#0E131C] border border-[#1e293b]/70">
                    <h5 data-i18n="cliffsideMainTitle" class="text-xs font-bold text-cyan-300 mb-1">
                      الكتلة الطائرة والواجهة الزجاجية المطلة
                    </h5>
                    <p data-i18n="cliffsideMainDesc" class="text-[11px] text-[#CBD5E1] leading-relaxed">
                      لقطة رئيسية توضح تراكب الكتل الخرسانية المصقولة مع الزجاج الممتد والتوازن الإنشائي فوق الجرف الصخري.
                    </p>
                  </div>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center justify-between text-[11px] font-mono">
                    <span data-i18n="subShotsLabel" class="text-[#94a3b8] font-semibold uppercase">
                      اللقطات الفرعية (2 فرعيين بنفس الحجم)
                    </span>
                    <span class="text-[#64748b]">2 &amp; 3 / 3</span>
                  </div>

                  <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col space-y-1.5">
                      <div
                        onclick="openLightbox('./assets/aistudio/enscape-paner_f05ffdb2.jfif', 'الإضاءة الداخلية وانعكاسات المغيب', 'دراسة تفاعلية للضوء الطبيعي والإنارة المخفية الدافئة مع انعكاس ألوان الغسق.', 'ATMOSPHERE & LIGHT')"
                        class="group/sub relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#1e293b] hover:border-cyan-400/60 cursor-pointer transition-all shadow-sm"
                      >
                        <img
                          src="./assets/aistudio/enscape-paner_f05ffdb2.jfif"
                          alt="الإضاءة الداخلية وانعكاسات المغيب"
                          class="w-full h-full object-cover transition-transform duration-500 group-hover/sub:scale-105"
                          onerror="this.onerror=null; this.src='./enscape-paner.jpg';"
                        />
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/sub:opacity-100 transition-opacity flex items-center justify-center">
                          <span class="p-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs">🔍</span>
                        </div>
                        <span class="absolute bottom-2 start-2 font-mono text-[9px] text-[#F5F5F5] bg-black/80 px-2 py-0.5 rounded border border-[#1e293b]">01</span>
                      </div>
                      <div class="p-2.5 rounded-xl bg-[#0E131C] border border-[#1e293b]/70 flex flex-col justify-between flex-grow">
                        <h6 data-i18n="cliffsideSub1Title" class="text-[11px] font-bold text-white line-clamp-1 mb-1">الإضاءة وانعكاسات المغيب</h6>
                        <p data-i18n="cliffsideSub1Desc" class="text-[10px] text-[#94a3b8] line-clamp-3 leading-relaxed">دراسة تفاعلية للضوء الطبيعي والإنارة المخفية الدافئة.</p>
                      </div>
                    </div>

                    <div class="flex flex-col space-y-1.5">
                      <div
                        onclick="openLightbox('./assets/aistudio/photo2_df950ff2.jfif', 'التكامل مع التضاريس الطبيعية والبهو', 'منظور معماري يوضح كيفية تثبيت الأساسات في التكوين الصخري.', 'TERRAIN INTEGRATION')"
                        class="group/sub relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#1e293b] hover:border-cyan-400/60 cursor-pointer transition-all shadow-sm"
                      >
                        <img
                          src="./assets/aistudio/photo2_df950ff2.jfif"
                          alt="التكامل مع التضاريس الطبيعية والبهو"
                          class="w-full h-full object-cover transition-transform duration-500 group-hover/sub:scale-105"
                          onerror="this.onerror=null; this.src='./photo-paner.jpg';"
                        />
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/sub:opacity-100 transition-opacity flex items-center justify-center">
                          <span class="p-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs">🔍</span>
                        </div>
                        <span class="absolute bottom-2 start-2 font-mono text-[9px] text-[#F5F5F5] bg-black/80 px-2 py-0.5 rounded border border-[#1e293b]">02</span>
                      </div>
                      <div class="p-2.5 rounded-xl bg-[#0E131C] border border-[#1e293b]/70 flex flex-col justify-between flex-grow">
                        <h6 data-i18n="cliffsideSub2Title" class="text-[11px] font-bold text-white line-clamp-1 mb-1">التكامل مع التضاريس</h6>
                        <p data-i18n="cliffsideSub2Desc" class="text-[10px] text-[#94a3b8] line-clamp-3 leading-relaxed">تثبيت الأساسات في التكوين الصخري وربط الفراغات.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="p-4 rounded-xl bg-[#0A0E16] border border-cyan-500/30 space-y-2 shadow-inner">
                  <div class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span data-i18n="projectOverviewLabel" class="font-mono text-[10px] uppercase font-bold text-cyan-400 tracking-wider">الوصف العام للمشروع</span>
                  </div>
                  <p data-i18n="cliffsideGeneralDescFull" class="text-xs text-[#CBD5E1] leading-relaxed">
                    تصميم فيلا جبلية معاصرة ترتكز على الجرف الصخري الحاد، تتميز بكتل طائرة (Cantilevers) جريئة وواجهات زجاجية ممتدة لدمج الفراغات الداخلية بالبانوراما الطبيعية المحيطة.
                  </p>
                </div>

                <button
                  type="button"
                  onclick="toggleStudioProject('project-cliffside-villa')"
                  data-i18n="collapseProjectBtn"
                  class="w-full py-2 text-center text-xs font-mono text-[#888888] hover:text-cyan-300 transition-colors cursor-pointer border-t border-[#1e293b] pt-3"
                >
                  ▲ طي تفاصيل هذا المشروع
                </button>
              </div>
            </article>

            <!-- Project 3: Arid Stone Courtyard Villa -->
            <article class="bg-[#141923] border border-[#1e293b] hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(6,182,212,0.15)] flex flex-col">
              <div
                onclick="toggleStudioProject('project-courtyard-villa')"
                class="group relative aspect-[16/10] w-full overflow-hidden bg-[#0A0D14] cursor-pointer select-none"
                title="Click to toggle project"
              >
                <img
                  src="./assets/aistudio/lumion-paner_07ac3d68.jfif"
                  alt="Arid Stone Courtyard Villa"
                  class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  onerror="this.onerror=null; this.src='./lumion-paner.jpg';"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#141923] via-transparent to-black/30 opacity-90 pointer-events-none"></div>

                <span data-i18n="courtyardBadge" class="absolute top-3 start-3 font-mono text-[9px] sm:text-[10px] font-bold tracking-wider text-cyan-300 bg-[#090D14]/90 border border-cyan-500/40 px-2.5 py-1 rounded shadow-sm">
                  COURTYARD VILLA &amp; ARID LANDSCAPE
                </span>

                <span class="absolute top-3 end-3 font-mono text-[10px] font-semibold text-white/90 bg-black/70 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span data-i18n="photosCountText">3 PHOTOS</span>
                </span>

                <div class="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[11px] text-[#CBD5E1]">
                  <span class="font-mono text-[10px] text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded">2026</span>
                  <span data-i18n="expandProjectPrompt" class="text-[10px] font-mono text-cyan-200 group-hover:underline">استعراض المشروع (3 صور) ▼</span>
                </div>
              </div>

              <div class="p-5 flex flex-col flex-grow justify-between gap-4">
                <div>
                  <h4 data-i18n="work3Title" class="text-base sm:text-lg font-bold text-[#F5F5F5] group-hover:text-white transition-colors mb-2 leading-snug">
                    فيلا الفناء الحجري الصحراوي
                  </h4>
                  <p data-i18n="courtyardGeneralDesc" class="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed">
                    فيلا سكنية فاخرة مستوحاة من العمارة البيئية وفلسفة الفناء الداخلي، تستخدم الأحجار الطبيعية والخامات الترابية.
                  </p>
                </div>

                <button
                  type="button"
                  onclick="toggleStudioProject('project-courtyard-villa')"
                  class="w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer bg-[#0E131C] border-[#1e293b] text-[#CBD5E1] hover:text-white hover:border-cyan-500/40 hover:bg-[#131a26]"
                >
                  <span class="flex items-center gap-2">
                    <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span data-i18n="toggleProjectBtn3" id="btn-text-project-courtyard-villa">فتح / طي المشروع والمعرض (3 صور)</span>
                  </span>
                  <span id="arrow-project-courtyard-villa" class="text-xs text-cyan-400 transition-transform duration-300">▼</span>
                </button>
              </div>

              <!-- Expanded Interactive Gallery -->
              <div id="details-project-courtyard-villa" class="hidden px-5 pb-5 pt-2 border-t border-[#1e293b] space-y-4 bg-[#0d121a]">
                <div class="space-y-2">
                  <div class="flex items-center justify-between text-[11px] font-mono">
                    <span data-i18n="mainShotLabel" class="text-cyan-400 font-semibold uppercase flex items-center gap-1.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                      الصورة الرئيسية (الفناء الداخلي)
                    </span>
                    <span class="text-[#64748b]">1 / 3</span>
                  </div>

                  <div
                    onclick="openLightbox('./assets/aistudio/lumion-paner_07ac3d68.jfif', 'الفناء الداخلي والمعالجة الضوئية الليلية', 'لقطة رئيسية توضح الفناء المائي المفتوح ومحاكاة الإضاءة الخافتة على الكتل الحجرية في أجواء الغسق الهادئة.', 'PRIMARY COURTYARD PERSPECTIVE')"
                    class="group/main relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#1e293b] hover:border-cyan-400/60 cursor-pointer transition-all shadow-sm"
                  >
                    <img
                      src="./assets/aistudio/lumion-paner_07ac3d68.jfif"
                      alt="الفناء الداخلي والمعالجة الضوئية الليلية"
                      class="w-full h-full object-cover transition-transform duration-500 group-hover/main:scale-105"
                      onerror="this.onerror=null; this.src='./lumion-paner.jpg';"
                    />
                    <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/main:opacity-100 transition-opacity flex items-center justify-center">
                      <span data-i18n="zoomPrompt" class="px-3 py-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5">
                        🔍 تكبير الصورة بدقة كاملة
                      </span>
                    </div>
                  </div>

                  <div class="p-3 rounded-xl bg-[#0E131C] border border-[#1e293b]/70">
                    <h5 data-i18n="courtyardMainTitle" class="text-xs font-bold text-cyan-300 mb-1">
                      الفناء الداخلي والمعالجة الضوئية الليلية
                    </h5>
                    <p data-i18n="courtyardMainDesc" class="text-[11px] text-[#CBD5E1] leading-relaxed">
                      لقطة رئيسية توضح الفناء المائي المفتوح ومحاكاة الإضاءة الخافتة على الكتل الحجرية في أجواء الغسق الهادئة.
                    </p>
                  </div>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center justify-between text-[11px] font-mono">
                    <span data-i18n="subShotsLabel" class="text-[#94a3b8] font-semibold uppercase">
                      اللقطات الفرعية (2 فرعيين بنفس الحجم)
                    </span>
                    <span class="text-[#64748b]">2 &amp; 3 / 3</span>
                  </div>

                  <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col space-y-1.5">
                      <div
                        onclick="openLightbox('./assets/aistudio/photo3_2eb63e13.jfif', 'الاندماج مع النباتات والغطاء الصحراوي', 'تنسيق موقع بيئي مدروس يضم أشجار النخيل والنباتات الصحراوية.', 'LANDSCAPE & VEGETATION')"
                        class="group/sub relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#1e293b] hover:border-cyan-400/60 cursor-pointer transition-all shadow-sm"
                      >
                        <img
                          src="./assets/aistudio/photo3_2eb63e13.jfif"
                          alt="الاندماج مع النباتات والغطاء الصحراوي"
                          class="w-full h-full object-cover transition-transform duration-500 group-hover/sub:scale-105"
                          onerror="this.onerror=null; this.src='./photo-paner.jpg';"
                        />
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/sub:opacity-100 transition-opacity flex items-center justify-center">
                          <span class="p-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs">🔍</span>
                        </div>
                        <span class="absolute bottom-2 start-2 font-mono text-[9px] text-[#F5F5F5] bg-black/80 px-2 py-0.5 rounded border border-[#1e293b]">01</span>
                      </div>
                      <div class="p-2.5 rounded-xl bg-[#0E131C] border border-[#1e293b]/70 flex flex-col justify-between flex-grow">
                        <h6 data-i18n="courtyardSub1Title" class="text-[11px] font-bold text-white line-clamp-1 mb-1">الغطاء النباتي الصحراوي</h6>
                        <p data-i18n="courtyardSub1Desc" class="text-[10px] text-[#94a3b8] line-clamp-3 leading-relaxed">تنسيق موقع بيئي مدروس يضم أشجار النخيل والنباتات الصحراوية.</p>
                      </div>
                    </div>

                    <div class="flex flex-col space-y-1.5">
                      <div
                        onclick="openLightbox('./assets/aistudio/photo_1530950b.jfif', 'الكتل المعمارية والظلال النهارية', 'دراسة حركة الشمس والظلال العميقة على الفتحات المعمارية.', 'SHADOW PLAY & GEOMETRY')"
                        class="group/sub relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#1e293b] hover:border-cyan-400/60 cursor-pointer transition-all shadow-sm"
                      >
                        <img
                          src="./assets/aistudio/photo_1530950b.jfif"
                          alt="الكتل المعمارية والظلال النهارية"
                          class="w-full h-full object-cover transition-transform duration-500 group-hover/sub:scale-105"
                          onerror="this.onerror=null; this.src='./photo-paner.jpg';"
                        />
                        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/sub:opacity-100 transition-opacity flex items-center justify-center">
                          <span class="p-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs">🔍</span>
                        </div>
                        <span class="absolute bottom-2 start-2 font-mono text-[9px] text-[#F5F5F5] bg-black/80 px-2 py-0.5 rounded border border-[#1e293b]">02</span>
                      </div>
                      <div class="p-2.5 rounded-xl bg-[#0E131C] border border-[#1e293b]/70 flex flex-col justify-between flex-grow">
                        <h6 data-i18n="courtyardSub2Title" class="text-[11px] font-bold text-white line-clamp-1 mb-1">الكتل والظلال النهارية</h6>
                        <p data-i18n="courtyardSub2Desc" class="text-[10px] text-[#94a3b8] line-clamp-3 leading-relaxed">دراسة حركة الشمس والظلال العميقة على الفتحات المعمارية.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="p-4 rounded-xl bg-[#0A0E16] border border-cyan-500/30 space-y-2 shadow-inner">
                  <div class="flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span data-i18n="projectOverviewLabel" class="font-mono text-[10px] uppercase font-bold text-cyan-400 tracking-wider">الوصف العام للمشروع</span>
                  </div>
                  <p data-i18n="courtyardGeneralDescFull" class="text-xs text-[#CBD5E1] leading-relaxed">
                    فيلا سكنية فاخرة مستوحاة من العمارة البيئية وفلسفة الفناء الداخلي، تستخدم الأحجار الطبيعية وخامات خرسانية ترابية للاندماج المتكامل مع البيئة الصحراوية المحيطة.
                  </p>
                </div>

                <button
                  type="button"
                  onclick="toggleStudioProject('project-courtyard-villa')"
                  data-i18n="collapseProjectBtn"
                  class="w-full py-2 text-center text-xs font-mono text-[#888888] hover:text-cyan-300 transition-colors cursor-pointer border-t border-[#1e293b] pt-3"
                >
                  ▲ طي تفاصيل هذا المشروع
                </button>
              </div>
            </article>
          </div>

          <!-- "المزيد من الأعمال المميزة" Trigger Button -->
          <div class="mt-12 text-center">
            <button
              type="button"
              onclick="toggleMoreWorks()"
              id="more-works-btn"
              class="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#121212] border border-[#1F1F1F] hover:border-[#888888] text-sm font-semibold text-[#F5F5F5] hover:text-white transition-all duration-200 cursor-pointer shadow-sm group"
            >
              <span data-i18n="moreWorksBtn">المزيد من الأعمال المميزة</span>
              <span id="more-works-arrow" class="inline-block text-xs text-[#888888] group-hover:text-[#F5F5F5] transition-transform duration-300">▼</span>
            </button>
          </div>

          <!-- Expandable Additional Student Works Drawer -->
          <div id="more-works-drawer" class="hidden mt-8 pt-8 border-t border-[#1F1F1F]">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <h4 data-i18n="moreWorksTitle" class="text-xl font-bold text-[#F5F5F5]">Additional Featured Student Works</h4>
                <p data-i18n="moreWorksSub" class="text-xs text-[#888888] mt-1">Advanced student works in 3D BIM massing, working drawings, and architectural visualization</p>
              </div>
              <span data-i18n="moreWorksBadge" class="font-mono text-xs text-[#888888]">6 Additional Projects</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- More 1 -->
              <article class="group bg-[#121212] border border-[#1F1F1F] hover:border-[#333333] rounded-xl overflow-hidden flex flex-col transition-colors">
                <div class="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A]">
                  <img src="./more-work-1.jpg" alt="Commercial Tower Double-Skin Facade" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.more1;" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80"></div>
                  <span class="absolute bottom-3 left-3 font-mono text-[10px] tracking-wider text-[#F5F5F5] bg-[#0A0A0A]/85 border border-[#1F1F1F] px-2.5 py-1 rounded">REVIT + V-RAY</span>
                </div>
                <div class="p-5 flex items-center justify-between gap-4">
                  <div>
                    <h5 data-i18n="moreWork1Title" class="text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">Commercial Tower Double-Skin Facade</h5>
                    <p data-i18n="moreWork1Sub" class="text-xs text-[#888888] mt-1">Revit BIM Detailing · Solar Louver Study</p>
                  </div>
                  <span class="font-mono text-xs text-[#888888]">2025</span>
                </div>
              </article>

              <!-- More 2 -->
              <article class="group bg-[#121212] border border-[#1F1F1F] hover:border-[#333333] rounded-xl overflow-hidden flex flex-col transition-colors">
                <div class="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A]">
                  <img src="./more-work-2.jpg" alt="Coastal Pavilion Dusk Atmosphere" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.more2;" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80"></div>
                  <span class="absolute bottom-3 left-3 font-mono text-[10px] tracking-wider text-[#F5F5F5] bg-[#0A0A0A]/85 border border-[#1F1F1F] px-2.5 py-1 rounded">PHOTOSHOP MATTE</span>
                </div>
                <div class="p-5 flex items-center justify-between gap-4">
                  <div>
                    <h5 data-i18n="moreWork2Title" class="text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">Coastal Pavilion Dusk Atmosphere</h5>
                    <p data-i18n="moreWork2Sub" class="text-xs text-[#888888] mt-1">Photoshop Matte Painting · Warm Sunset Grading</p>
                  </div>
                  <span class="font-mono text-xs text-[#888888]">2025</span>
                </div>
              </article>

              <!-- More 3 -->
              <article class="group bg-[#121212] border border-[#1F1F1F] hover:border-[#333333] rounded-xl overflow-hidden flex flex-col transition-colors">
                <div class="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A]">
                  <img src="./more-work-3.jpg" alt="Mixed-Use High-Rise Technical Core" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.more3;" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80"></div>
                  <span class="absolute bottom-3 left-3 font-mono text-[10px] tracking-wider text-[#F5F5F5] bg-[#0A0A0A]/85 border border-[#1F1F1F] px-2.5 py-1 rounded">AUTOCAD DRAFTING</span>
                </div>
                <div class="p-5 flex items-center justify-between gap-4">
                  <div>
                    <h5 data-i18n="moreWork3Title" class="text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">Mixed-Use High-Rise Technical Core</h5>
                    <p data-i18n="moreWork3Sub" class="text-xs text-[#888888] mt-1">AutoCAD Working Drawings · Egress &amp; Core Grids</p>
                  </div>
                  <span class="font-mono text-xs text-[#888888]">2025</span>
                </div>
              </article>

              <!-- More 4 -->
              <article class="group bg-[#121212] border border-[#1F1F1F] hover:border-[#333333] rounded-xl overflow-hidden flex flex-col transition-colors">
                <div class="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A]">
                  <img src="./more-work-4.jpg" alt="Urban Waterfront Public Promenade" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.more4;" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80"></div>
                  <span class="absolute bottom-3 left-3 font-mono text-[10px] tracking-wider text-[#F5F5F5] bg-[#0A0A0A]/85 border border-[#1F1F1F] px-2.5 py-1 rounded">LUMION CINEMATIC</span>
                </div>
                <div class="p-5 flex items-center justify-between gap-4">
                  <div>
                    <h5 data-i18n="moreWork4Title" class="text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">Urban Waterfront Public Promenade</h5>
                    <p data-i18n="moreWork4Sub" class="text-xs text-[#888888] mt-1">Lumion Environment Dressing · Animated Lighting</p>
                  </div>
                  <span class="font-mono text-xs text-[#888888]">2026</span>
                </div>
              </article>

              <!-- More 5 -->
              <article class="group bg-[#121212] border border-[#1F1F1F] hover:border-[#333333] rounded-xl overflow-hidden flex flex-col transition-colors">
                <div class="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A]">
                  <img src="./more-work-5.jpg" alt="Minimalist Gallery Raw Concrete Space" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.more5;" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80"></div>
                  <span class="absolute bottom-3 left-3 font-mono text-[10px] tracking-wider text-[#F5F5F5] bg-[#0A0A0A]/85 border border-[#1F1F1F] px-2.5 py-1 rounded">V-RAY INTERIOR</span>
                </div>
                <div class="p-5 flex items-center justify-between gap-4">
                  <div>
                    <h5 data-i18n="moreWork5Title" class="text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">Minimalist Gallery Raw Concrete Space</h5>
                    <p data-i18n="moreWork5Sub" class="text-xs text-[#888888] mt-1">V-Ray Photorealism · Natural Diffused Skylight</p>
                  </div>
                  <span class="font-mono text-xs text-[#888888]">2026</span>
                </div>
              </article>

              <!-- More 6 -->
              <article class="group bg-[#121212] border border-[#1F1F1F] hover:border-[#333333] rounded-xl overflow-hidden flex flex-col transition-colors">
                <div class="relative aspect-[4/3] w-full overflow-hidden bg-[#0A0A0A]">
                  <img src="./more-work-6.jpg" alt="Parametric Timber Pavilion VR Tour" class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.more6;" />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80"></div>
                  <span class="absolute bottom-3 left-3 font-mono text-[10px] tracking-wider text-[#F5F5F5] bg-[#0A0A0A]/85 border border-[#1F1F1F] px-2.5 py-1 rounded">ENSCAPE REAL-TIME</span>
                </div>
                <div class="p-5 flex items-center justify-between gap-4">
                  <div>
                    <h5 data-i18n="moreWork6Title" class="text-base font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">Parametric Timber Pavilion VR Tour</h5>
                    <p data-i18n="moreWork6Sub" class="text-xs text-[#888888] mt-1">Enscape Real-time Sync · 360 Client Panorama</p>
                  </div>
                  <span class="font-mono text-xs text-[#888888]">2026</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: TEACHING & EXPANDABLE SOFTWARE COURSES (ORDERED: REVIT -> PHOTOSHOP -> AUTOCAD -> LUMION -> V-RAY -> ENSCAPE) -->
    <section id="teaching" class="py-20 md:py-28 border-b border-[#1F1F1F] scroll-mt-16">
      <div class="max-w-[1200px] mx-auto px-6 md:px-10">
        <!-- Header -->
        <div class="mb-14">
          <h2 data-i18n="teachingHeading" class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.15] headline-balance">
            Teaching &amp; Professional Curricula
          </h2>
          <p data-i18n="teachingSub" class="text-base text-[#888888] mt-4 max-w-2xl leading-relaxed">
            Click on any course card below to expand its full syllabus, transparent pricing fee, and dedicated student portfolio.
          </p>
        </div>

        <!-- 6 Expandable Course Cards -->
        <div class="space-y-6" id="course-cards-container">

          <!-- 1. REVIT -->
          <div id="track-revit" class="course-card rounded-2xl bg-[#0d1117] border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.12)] hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] overflow-hidden transition-all duration-300">
            <!-- Header bar with toggle trigger -->
            <button
              type="button"
              onclick="toggleCourse('track-revit')"
              class="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start group cursor-pointer focus:outline-none"
            >
              <div class="flex items-center gap-4">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-[#0A0A0A] border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_16px_rgba(6,182,212,0.35)] flex items-center justify-center shrink-0 shadow-sm relative transition-all duration-300" title="Autodesk Revit">
                  <img src="./revit-logo.jpg" alt="Autodesk Revit" class="w-full h-full object-cover rounded-[inherit] transition-transform duration-300 group-hover:scale-105" onerror="if(this.src.indexOf('revit-logo_3978ae19.jpg')===-1){this.src='./assets/aistudio/revit-logo_3978ae19.jpg';}" />
                </div>
                <div>
                  <div class="flex items-center gap-2.5 flex-wrap">
                    <h3 data-i18n="revitTitle" class="text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
                      Autodesk Revit Architectural Masterclass
                    </h3>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider text-[#00A2ED] bg-[#00A2ED]/10 border border-[#00A2ED]/30">
                      BEGINNER TO ADVANCED
                    </span>
                  </div>
                  <p data-i18n="revitSummary" class="text-xs sm:text-sm text-[#888888] mt-1">
                    كورس شامل يبدأ من الصفر حتى أعلى المستويات الاحترافية؛ لتعلم النمذجة المعمارية التفصيلية، وتصميم الكتل والأسقف المنحنية، وبناء العائلات البارامترية، وتجهيز كامل المخططات التنفيذية والطباعة.
                  </p>
                </div>
              </div>

              <!-- Price Box & Toggle Indicator -->
              <div class="flex items-center gap-4 self-end sm:self-center shrink-0">
                <div class="px-3.5 py-1.5 rounded-lg bg-[#0A0A0A] border border-cyan-500/40 bg-cyan-950/20 shadow-[0_0_14px_rgba(6,182,212,0.20)] text-end transition-all">
                  <span data-i18n="priceLabel" class="block text-[10px] font-mono text-cyan-400 font-semibold">Course Fee</span>
                  <span class="font-mono text-sm sm:text-base font-bold text-cyan-400 tabular-nums">$40</span>
                </div>
                <span class="toggle-icon w-8 h-8 rounded-lg border border-[#1F1F1F] text-[#888888] flex items-center justify-center text-lg transition-transform duration-200">
                  +
                </span>
              </div>
            </button>

            <!-- Expandable Drawer Content -->
            <div class="course-drawer open" id="drawer-track-revit">
              <div class="course-drawer-inner p-6 sm:p-8 pt-0 border-t border-[#1F1F1F]/60">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                  <!-- Course Info -->
                  <div class="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between mb-6">
                        <h4 data-i18n="syllabusOverviewTitle" class="text-xs font-mono tracking-wider text-[#888888]">SYLLABUS &amp; WORKFLOW</h4>
                        <span class="text-[10px] font-mono font-bold text-[#00A2ED] bg-[#00A2ED]/10 px-2 py-0.5 rounded border border-[#00A2ED]/30">BEGINNER TO ADVANCED</span>
                      </div>

                      <!-- Mobile Header Banner (Before Modules on Mobile) -->
                      <div class="block lg:hidden relative w-full aspect-[21/9] sm:h-44 overflow-hidden rounded-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] mb-6 group bg-[#090d14]">
                        <img
                          src="./watermarked_img_10994012124207943872.jpg"
                          alt="Autodesk Revit Architectural Masterclass"
                          class="w-full h-full object-cover object-center"
                          onerror="if(this.src.indexOf('revit_cefe862e.jfif')===-1){this.src='./assets/aistudio/revit_cefe862e.jfif';}else if(this.src.indexOf('revit-banner.jpg')===-1){this.src='./revit-banner.jpg';}"
                        />
                      </div>

                      <!-- 4 Curriculum Modules -->
                      <div class="space-y-3 mb-6">
                        <div class="font-mono text-xs font-semibold text-[#F5F5F5] border-b border-[#1F1F1F] pb-2 flex items-center justify-between">
                          <span data-i18n="revitCurriculumHeading">المحاور الدراسية (Curriculum)</span>
                          <span class="text-[10px] text-[#00A2ED] font-mono">4 Modules</span>
                        </div>

                        <!-- Module 01 -->
                        <div class="p-3.5 rounded-xl bg-[#09131C] border border-[#00A2ED]/20">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="font-mono text-[10px] uppercase font-bold text-[#00A2ED] bg-[#00A2ED]/15 px-2 py-0.5 rounded border border-[#00A2ED]/30 shrink-0">Module 01</span>
                            <h5 class="text-xs sm:text-sm font-semibold text-[#F5F5F5]">تهيئة بيئة العمل وضبط المخططات (Setup &amp; Data Import)</h5>
                          </div>
                          <ul class="space-y-1.5 text-xs text-[#A3A3A3] ps-4 list-disc marker:text-[#00A2ED] leading-relaxed">
                            <li>التعرف على واجهة المستخدم وإدارة قوائم ونوافذ البرنامج (Intro to Revit User Interface).</li>
                            <li>استيراد وتجهيز المخططات، ملفات الأوتوكاد، والصور المرجعية لضبط المحاور والمناسيب (Importing plans, CAD files, Images).</li>
                          </ul>
                        </div>

                        <!-- Module 02 -->
                        <div class="p-3.5 rounded-xl bg-[#09131C] border border-[#00A2ED]/20">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="font-mono text-[10px] uppercase font-bold text-[#00A2ED] bg-[#00A2ED]/15 px-2 py-0.5 rounded border border-[#00A2ED]/30 shrink-0">Module 02</span>
                            <h5 class="text-xs sm:text-sm font-semibold text-[#F5F5F5]">النمذجة المعمارية الشاملة (Basic &amp; Advanced Architectural Elements)</h5>
                          </div>
                          <ul class="space-y-1.5 text-xs text-[#A3A3A3] ps-4 list-disc marker:text-[#00A2ED] leading-relaxed">
                            <li>بناء وتعديل العناصر المعمارية الأساسية بدقة: الجدران، الأبواب، والنوافذ (Basic Modeling: Walls, Doors, Windows).</li>
                            <li>نمذجة العناصر المتقدمة والأنظمة المركبة: الأسقف المستعارة، الأرضيات، والأدراج والدرابزينات المعقدة (Ceilings, Floors, Stairs &amp; Railings).</li>
                            <li>تصميم وتخصيص المشاريع الفريدة، الديكورات والتفاصيل الخاصة (Component: Unique Projects, Decoration, Details).</li>
                          </ul>
                        </div>

                        <!-- Module 03 -->
                        <div class="p-3.5 rounded-xl bg-[#09131C] border border-[#00A2ED]/20">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="font-mono text-[10px] uppercase font-bold text-[#00A2ED] bg-[#00A2ED]/15 px-2 py-0.5 rounded border border-[#00A2ED]/30 shrink-0">Module 03</span>
                            <h5 class="text-xs sm:text-sm font-semibold text-[#F5F5F5]">الكتل الحرة والعائلات المعمارية (Massing &amp; Parametric Families)</h5>
                          </div>
                          <ul class="space-y-1.5 text-xs text-[#A3A3A3] ps-4 list-disc marker:text-[#00A2ED] leading-relaxed">
                            <li>دراسة وتشكيل الكتل المعمارية المعقدة والأسقف الحرة والمنحنية (Massing: Organic Projects &amp; Curved Roofs).</li>
                            <li>احتراف إنشاء وتحميل وتعديل الفاميليز المعمارية البارامترية (Families: Creating, Loading, Editing).</li>
                            <li>إدراج وضبط كتل الفرش وإعداداتها المتقدمة (Entering Blocks &amp; Adjusting Their Settings).</li>
                          </ul>
                        </div>

                        <!-- Module 04 -->
                        <div class="p-3.5 rounded-xl bg-[#09131C] border border-[#00A2ED]/20">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="font-mono text-[10px] uppercase font-bold text-[#00A2ED] bg-[#00A2ED]/15 px-2 py-0.5 rounded border border-[#00A2ED]/30 shrink-0">Module 04</span>
                            <h5 class="text-xs sm:text-sm font-semibold text-[#F5F5F5]">الإظهار، التوثيق التنفيذي والطباعة (Visualization, Detailing &amp; Plotting)</h5>
                          </div>
                          <ul class="space-y-1.5 text-xs text-[#A3A3A3] ps-4 list-disc marker:text-[#00A2ED] leading-relaxed">
                            <li>ضبط وتعديل الخامات الفيزيائية، محاكاة الإضاءة، وحساب الظلال (Modifying Materials, Lighting, Shadows).</li>
                            <li>نمذجة المساقط التنفيذية، إضافة رموز التهشير والتفاصيل الإنشائية (Modeling Executive Projections: Detailing, Hatching).</li>
                            <li>استخراج وتصدير المخططات، اللقطات ثلاثية الأبعاد، الواجهات، المقاطع، والموقع العام (Exporting plans, 3D view, Elevations, Sections, Site).</li>
                            <li>إعداد وتجهيز لوحات التقديم والطباعة الاحترافية بصيغة بي دي إف (Plotting Drawings as PDF files).</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="pt-4 border-t border-[#1F1F1F] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div class="text-xs text-[#888888]">
                        <span data-i18n="enrollRevitNote">تسجيل فوري واستفسار مباشر عبر واتساب</span>
                      </div>
                      <a
                        href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20would%20like%20to%20enroll%20in%20the%20Autodesk%20Revit%20Architectural%20Masterclass%20($40)."
                        target="_blank"
                        rel="noopener noreferrer"
                        data-i18n="enrollRevit"
                        class="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#25D366] bg-[#0B0F0C] border border-[#25D366]/40 rounded-lg hover:border-[#25D366] hover:bg-[#0E1F14] hover:text-[#38e67a] active:bg-[#07140B] active:scale-[0.98] transition-all whitespace-nowrap shadow-sm group cursor-pointer"
                      >
                        <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 shrink-0 fill-current text-[#25D366] group-hover:text-[#38e67a]"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.15c-.24.67-1.39 1.29-1.93 1.37-.5.08-1.14.12-3.7-0.94-3.27-1.36-5.38-4.66-5.54-4.88-.16-.22-1.34-1.78-1.34-3.4 0-1.62.85-2.42 1.15-2.75.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.21.01.48-.08.75.57.28.67.95 2.33 1.03 2.5.08.17.13.37.02.6-.11.23-.17.37-.34.57-.17.2-.36.44-.51.59-.17.17-.35.36-.15.7.2.34.89 1.47 1.91 2.38 1.31 1.17 2.42 1.53 2.76 1.7.34.17.54.14.74-.08.2-.22.86-.99 1.09-1.33.23-.34.46-.28.77-.17.31.11 1.97.93 2.31 1.1.34.17.57.25.65.39.08.14.08.82-.16 1.49z"/></svg>
                        <span>Enroll in Revit Masterclass ($40)</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>

                  <!-- Independent Works for Revit -->
                  <div class="lg:col-span-7">
                    <div class="flex items-center justify-between mb-3">
                      <div class="text-xs font-mono text-[#888888]">
                        INDEPENDENT STUDENT WORKS · REVIT ARCHITECTURE
                      </div>
                      <span class="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded">
                        4 FEATURED PROJECTS
                      </span>
                    </div>

                    <!-- Desktop Header Banner -->
                    <div class="hidden lg:block relative w-full aspect-[21/9] sm:h-44 md:h-52 overflow-hidden rounded-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] mb-4 group bg-[#090d14]">
                      <img
                        src="./watermarked_img_10994012124207943872.jpg"
                        alt="Autodesk Revit Architectural Masterclass"
                        class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                        onerror="if(this.src.indexOf('revit_cefe862e.jfif')===-1){this.src='./assets/aistudio/revit_cefe862e.jfif';}else if(this.src.indexOf('revit-banner.jpg')===-1){this.src='./revit-banner.jpg';}"
                      />
                    </div>

                    <!-- 4 Projects Grid: 2 Columns -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <!-- Project 1: Mixed-Use High-Rise Tower & Executive Documentation -->
                      <div class="rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./revit-tower-documentation.jpg', 'مجمع البرج متعدد الاستخدامات والتوثيق التنفيذي', 'نمذجة بارامترية لكتلة البرج واستخراج شيت A0 متكامل يضم المنظور الأكسونومتري، المقاطع الرأسية، والمساقط المتطابقة.', 'BIM DOCUMENTATION & A0 SHEETS')">
                        <div class="aspect-[16/10] overflow-hidden relative bg-[#080d14] flex items-center justify-center p-1.5">
                          <img src="./revit-tower-documentation.jpg" alt="مجمع البرج متعدد الاستخدامات والتوثيق التنفيذي" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" onerror="if(this.src.indexOf('revit-tower-documentation_bd53e718.jfif')===-1){this.src='./assets/aistudio/revit-tower-documentation_bd53e718.jfif';}else{this.onerror=null;this.src=window.__FALLBACK_IMAGES.revit1;}" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide">BIM DOCUMENTATION &amp; A0 SHEETS</span>
                        </div>
                        <div class="p-3.5 flex flex-col flex-grow justify-between">
                          <div>
                            <h5 data-i18n="revitWork1Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors">مجمع البرج متعدد الاستخدامات والتوثيق التنفيذي</h5>
                            <p data-i18n="revitWork1Sub" class="text-[11px] text-[#94a3b8] mt-1 leading-relaxed">نمذجة بارامترية لكتلة البرج واستخراج شيت A0 متكامل يضم المنظور الأكسونومتري، المقاطع الرأسية، والمساقط المتطابقة.</p>
                          </div>
                        </div>
                      </div>

                      <!-- Project 2: Villa Technical Detailing -->
                      <div class="rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./revit-villa-working-details.jpg', 'المخططات التنفيذية والتفاصيل الإنشائية للفيلا', 'إعداد المسقط الأفقي التنفيذي ومقطع رأسي تفصيلي يوضح طبقات العزل وتهشير الخرسانة وتنسيق المحاور والأبعاد.', 'WORKING DRAWINGS & DETAILING')">
                        <div class="aspect-[16/10] overflow-hidden relative bg-[#080d14] flex items-center justify-center p-1.5">
                          <img src="./revit-villa-working-details.jpg" alt="المخططات التنفيذية والتفاصيل الإنشائية للفيلا" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" onerror="if(this.src.indexOf('revit-villa-working-details_0ec68b80.jpg')===-1){this.src='./assets/aistudio/revit-villa-working-details_0ec68b80.jpg';}else{this.onerror=null;this.src=window.__FALLBACK_IMAGES.revit2;}" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide">WORKING DRAWINGS &amp; DETAILING</span>
                        </div>
                        <div class="p-3.5 flex flex-col flex-grow justify-between">
                          <div>
                            <h5 data-i18n="revitWork2Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors">المخططات التنفيذية والتفاصيل الإنشائية للفيلا</h5>
                            <p data-i18n="revitWork2Sub" class="text-[11px] text-[#94a3b8] mt-1 leading-relaxed">إعداد المسقط الأفقي التنفيذي ومقطع رأسي تفصيلي يوضح طبقات العزل وتهشير الخرسانة وتنسيق المحاور والأبعاد.</p>
                          </div>
                        </div>
                      </div>

                      <!-- Project 3: Urban Transit Hub & Railway Station -->
                      <div class="rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./revit-work-2.jpg', 'مجمع النقل الحضري ومحطة القطارات', 'نمذجة معمارية متقدمة لهيكل المحطة، الجمالونات المعدنية، وشبكات الواجهات الستائرية.', 'MEGA INFRASTRUCTURE')">
                        <div class="aspect-[16/10] overflow-hidden relative bg-[#0d1117]">
                          <img src="./revit-work-2.jpg" alt="مجمع النقل الحضري ومحطة القطارات" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="if(this.src.indexOf('REVIT4_48ea5e98.jfif')===-1){this.src='./assets/aistudio/REVIT4_48ea5e98.jfif';}else{this.onerror=null;this.src=window.__FALLBACK_IMAGES.revit3;}" />
                          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60"></div>
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide">MEGA INFRASTRUCTURE</span>
                        </div>
                        <div class="p-3.5 flex flex-col flex-grow justify-between">
                          <div>
                            <h5 data-i18n="revitWork3Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors">مجمع النقل الحضري ومحطة القطارات</h5>
                            <p data-i18n="revitWork3Sub" class="text-[11px] text-[#94a3b8] mt-1 leading-relaxed">نمذجة معمارية متقدمة لهيكل المحطة، الجمالونات المعدنية، وشبكات الواجهات الستائرية.</p>
                          </div>
                        </div>
                      </div>

                      <!-- Project 4: Cultural Center & Parametric Massing -->
                      <div class="rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./revit-work-1.jpg', 'مجمع المركز الثقافي والفنون', 'تطبيق أدوات التشكيل الكتلي الحر والأسطح المنحنية والمنحدرات البانورامية.', 'PARAMETRIC MASSING')">
                        <div class="aspect-[16/10] overflow-hidden relative bg-[#0d1117]">
                          <img src="./revit-work-1.jpg" alt="مجمع المركز الثقافي والفنون" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="if(this.src.indexOf('revit1_1f004bd2.jfif')===-1){this.src='./assets/aistudio/revit1_1f004bd2.jfif';}else{this.onerror=null;this.src=window.__FALLBACK_IMAGES.revit4;}" />
                          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60"></div>
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide">PARAMETRIC MASSING</span>
                        </div>
                        <div class="p-3.5 flex flex-col flex-grow justify-between">
                          <div>
                            <h5 data-i18n="revitWork4Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors">مجمع المركز الثقافي والفنون</h5>
                            <p data-i18n="revitWork4Sub" class="text-[11px] text-[#94a3b8] mt-1 leading-relaxed">تطبيق أدوات التشكيل الكتلي الحر والأسطح المنحنية والمنحدرات البانورامية.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 2. PHOTOSHOP -->
          <div id="track-photoshop" class="course-card rounded-2xl bg-[#070e17] border border-blue-600/30 shadow-[0_0_25px_rgba(37,99,235,0.12)] hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(37,99,235,0.2)] overflow-hidden transition-all duration-300">
            <button
              type="button"
              onclick="toggleCourse('track-photoshop')"
              class="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start group cursor-pointer focus:outline-none"
            >
              <div class="flex items-center gap-4">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-[#0A0A0A] border border-blue-500/40 group-hover:border-blue-400 group-hover:shadow-[0_0_16px_rgba(59,130,246,0.35)] flex items-center justify-center shrink-0 shadow-sm relative transition-all duration-300" title="Adobe Photoshop">
                  <img src="./photo-logo.jpg" alt="Adobe Photoshop" class="w-full h-full object-cover rounded-[inherit] transition-transform duration-300 group-hover:scale-105" onerror="if(this.src.indexOf('photo-logo_d9bb2ce1.jpg')===-1){this.src='./assets/aistudio/photo-logo_d9bb2ce1.jpg';}" />
                </div>
                <div>
                  <div class="flex items-center gap-2.5 flex-wrap">
                    <h3 data-i18n="psTitle" class="text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
                      Photoshop for Architecture (Post-Processing &amp; Visualization)
                    </h3>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider text-blue-400 bg-blue-950/60 border border-blue-500/40">
                      <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                      BEGINNER LEVEL / 50% OFF
                    </span>
                  </div>
                  <p data-i18n="psSummary" class="text-xs sm:text-sm text-[#888888] mt-1">
                    دورة متخصصة لتعلم أساسيات الفوتوشوب وتطبيقاته المعمارية من الصفر؛ تشمل تقنيات القص والدمج الاحترافي، معالجة الرندرات والصور المعمارية، وإضافة التأثيرات الفنية والإضاءة للنصوص والإظهار النهائي.
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-3 sm:gap-4 self-end sm:self-center shrink-0 flex-wrap justify-end">
                <span class="px-2.5 py-1 text-[11px] sm:text-xs font-mono font-bold text-amber-300 bg-amber-500/15 border border-amber-500/40 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.25)] flex items-center gap-1.5 animate-pulse shrink-0">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  <span data-i18n="psDiscountBadge">50% OFF</span>
                </span>
                <div class="px-3.5 py-1.5 rounded-lg bg-[#0A0A0A] border border-blue-500/40 bg-blue-950/20 shadow-[0_0_14px_rgba(37,99,235,0.20)] text-end transition-all">
                  <span class="block text-[10px] font-mono text-blue-400 font-semibold" data-i18n="priceLabel">Course Fee</span>
                  <span class="font-mono text-sm sm:text-base font-bold text-blue-400 tabular-nums">$15</span>
                </div>
                <span class="toggle-icon w-8 h-8 rounded-lg border border-[#1F1F1F] text-[#888888] flex items-center justify-center text-lg transition-transform duration-200">
                  +
                </span>
              </div>
            </button>

            <div class="course-drawer" id="drawer-track-photoshop">
              <div class="course-drawer-inner p-6 sm:p-8 pt-0 border-t border-[#1F1F1F]/60">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                  <div class="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between mb-6">
                        <h4 data-i18n="syllabusOverviewTitle" class="text-xs font-mono tracking-wider text-[#888888]">SYLLABUS &amp; WORKFLOW</h4>
                        <span class="text-[10px] font-mono font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/40">BEGINNER LEVEL / 50% OFF</span>
                      </div>

                      <!-- Mobile Photoshop Banner: Placed before Curriculum Modules on Mobile Screens -->
                      <div class="block lg:hidden relative w-full aspect-[21/9] sm:h-44 overflow-hidden rounded-xl border border-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.15)] mb-6 group bg-[#060b13]">
                        <img
                          src="./photo-paner.jpg"
                          alt="Photoshop for Architecture Banner"
                          class="w-full h-full object-cover object-center"
                          onerror="if(this.src.indexOf('photo-paner_315b56b0.jfif')===-1){this.src='./assets/aistudio/photo-paner_315b56b0.jfif';}"
                        />
                      </div>

                      <!-- 4 Curriculum Modules -->
                      <div class="space-y-3 mb-6">
                        <div class="font-mono text-xs font-semibold text-[#F5F5F5] border-b border-[#1F1F1F] pb-2 flex items-center justify-between">
                          <span data-i18n="psCurriculumHeading">المحاور الدراسية (Curriculum)</span>
                          <span class="text-[10px] text-blue-400 font-mono">4 Modules</span>
                        </div>

                        <!-- Module 01 -->
                        <div class="p-3.5 rounded-xl bg-[#081320] border border-blue-500/20">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="font-mono text-[10px] uppercase font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30 shrink-0">Module 01</span>
                            <h5 class="text-xs sm:text-sm font-semibold text-[#F5F5F5]">أدوات البرنامج والواجهة الرئيسية (Interface &amp; Workspace Essentials)</h5>
                          </div>
                          <ul class="space-y-1.5 text-xs text-[#A3A3A3] ps-4 list-disc marker:text-blue-400 leading-relaxed">
                            <li>التعرف على أدوات البرنامج وقوائم العمل والواجهة الرئيسية المخصصة للإظهار المعماري.</li>
                            <li>إتقان أدوات التحديد المتقدمة والقص الدقيق للعناصر والكتل (Selection Tools).</li>
                          </ul>
                        </div>

                        <!-- Module 02 -->
                        <div class="p-3.5 rounded-xl bg-[#081320] border border-blue-500/20">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="font-mono text-[10px] uppercase font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30 shrink-0">Module 02</span>
                            <h5 class="text-xs sm:text-sm font-semibold text-[#F5F5F5]">التعديل اللوني والمعالجة البصرية (Adjustments &amp; Render Post-Processing)</h5>
                          </div>
                          <ul class="space-y-1.5 text-xs text-[#A3A3A3] ps-4 list-disc marker:text-blue-400 leading-relaxed">
                            <li>معالجة وتعديل الصور والرندرات المعمارية وضبط التباين والألوان (Adjustments &amp; Image Correction).</li>
                            <li>إضافة التأثيرات الفنية المعمارية، خامات السماء، وضبط الإضاءة للقطات والمناظير (Filters &amp; Artistic Enhancements).</li>
                          </ul>
                        </div>

                        <!-- Module 03 -->
                        <div class="p-3.5 rounded-xl bg-[#081320] border border-blue-500/20">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="font-mono text-[10px] uppercase font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30 shrink-0">Module 03</span>
                            <h5 class="text-xs sm:text-sm font-semibold text-[#F5F5F5]">الدمج والتركيب الاحترافي (Matte Painting &amp; Composition)</h5>
                          </div>
                          <ul class="space-y-1.5 text-xs text-[#A3A3A3] ps-4 list-disc marker:text-blue-400 leading-relaxed">
                            <li>قص وتركيب وتجميع الصور والبيئات المحيطة وعناصر الإظهار (أشخاص، نباتات، وسيارات) بشكل احترافي وواقعي.</li>
                            <li>التعامل المتقدم مع أدوات الرسم والتلوين لإظهار المساقط والمخططات المعمارية (Brushes, Drawing &amp; Coloring).</li>
                          </ul>
                        </div>

                        <!-- Module 04 -->
                        <div class="p-3.5 rounded-xl bg-[#081320] border border-blue-500/20">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="font-mono text-[10px] uppercase font-bold text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/30 shrink-0">Module 04</span>
                            <h5 class="text-xs sm:text-sm font-semibold text-[#F5F5F5]">النصوص والإخراج النهائي للبوسترات (Typography &amp; Presentation)</h5>
                          </div>
                          <ul class="space-y-1.5 text-xs text-[#A3A3A3] ps-4 list-disc marker:text-blue-400 leading-relaxed">
                            <li>كيفية التعامل مع النصوص وتنسيق الخطوط المعمارية على اللوحات (Text &amp; Typography).</li>
                            <li>إعداد وتنسيق البوسترات والشيتات المعمارية النهائية بجودة عالية جاهزة للطباعة والعرض.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="pt-4 border-t border-[#1F1F1F] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div class="text-xs text-[#888888]">
                        <span data-i18n="enrollPsNote">تسجيل فوري واستفسار مباشر عبر واتساب</span>
                      </div>
                      <a
                        href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20would%20like%20to%20enroll%20in%20Photoshop%20for%20Architecture%20($15)."
                        target="_blank"
                        rel="noopener noreferrer"
                        data-i18n="enrollPs"
                        class="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#25D366] bg-[#0B0F0C] border border-[#25D366]/40 rounded-lg hover:border-[#25D366] hover:bg-[#0E1F14] hover:text-[#38e67a] active:bg-[#07140B] active:scale-[0.98] transition-all whitespace-nowrap shadow-sm group cursor-pointer"
                      >
                        <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 shrink-0 fill-current text-[#25D366] group-hover:text-[#38e67a]"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.15c-.24.67-1.39 1.29-1.93 1.37-.5.08-1.14.12-3.7-0.94-3.27-1.36-5.38-4.66-5.54-4.88-.16-.22-1.34-1.78-1.34-3.4 0-1.62.85-2.42 1.15-2.75.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.21.01.48-.08.75.57.28.67.95 2.33 1.03 2.5.08.17.13.37.02.6-.11.23-.17.37-.34.57-.17.2-.36.44-.51.59-.17.17-.35.36-.15.7.2.34.89 1.47 1.91 2.38 1.31 1.17 2.42 1.53 2.76 1.7.34.17.54.14.74-.08.2-.22.86-.99 1.09-1.33.23-.34.46-.28.77-.17.31.11 1.97.93 2.31 1.1.34.17.57.25.65.39.08.14.08.82-.16 1.49z"/></svg>
                        <span>Enroll in Photoshop Course ($15)</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>

                  <!-- Independent Works for Photoshop: 4 Featured Projects Grid -->
                  <div class="lg:col-span-7">
                    <div class="flex items-center justify-between mb-3">
                      <div class="text-xs font-mono text-[#888888]">
                        INDEPENDENT STUDENT WORKS · ARCHITECTURAL PHOTOSHOP
                      </div>
                      <span class="text-[10px] font-mono text-blue-400 bg-blue-950/60 border border-blue-500/30 px-2 py-0.5 rounded">
                        4 FEATURED PROJECTS
                      </span>
                    </div>

                    <!-- Desktop Photoshop Header Banner -->
                    <div class="hidden lg:block relative w-full aspect-[21/9] sm:h-44 md:h-52 overflow-hidden rounded-xl border border-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.15)] mb-4 group bg-[#060b13]">
                      <img
                        src="./photo-paner.jpg"
                        alt="Photoshop for Architecture Banner"
                        class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                        onerror="if(this.src.indexOf('photo-paner_315b56b0.jfif')===-1){this.src='./assets/aistudio/photo-paner_315b56b0.jfif';}"
                      />
                    </div>

                    <!-- 4 Projects Grid: 2 Columns -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <!-- Project 1: Cultural Center Dusk Transition & Wireframe Overlay (Perspective Shot) -->
                      <div class="rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./ps-cultural-center-dusk.jpg', 'المركز الثقافي ومعالجة الغسق التفاعلية', 'معالجة متقدمة لأجواء الغسق والإنارة الدافئة مع دمج حركة المشاة ورسم خطوط المسارات المعمارية وشبكة الـ Wireframe فوق الرندر.', 'POST-PRODUCTION & DIAGRAMMING')">
                        <div class="aspect-[16/10] overflow-hidden relative bg-[#070e17]">
                          <img src="./ps-cultural-center-dusk.jpg" alt="المركز الثقافي ومعالجة الغسق التفاعلية" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="if(this.src.indexOf('photo_1530950b.jfif')===-1){this.src='./assets/aistudio/photo_1530950b.jfif';}else{this.onerror=null;this.src=window.__FALLBACK_IMAGES.ps1;}" />
                          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60"></div>
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide">POST-PRODUCTION &amp; DIAGRAMMING</span>
                        </div>
                        <div class="p-3.5 flex flex-col flex-grow justify-between">
                          <h5 data-i18n="psWork1Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors">المركز الثقافي ومعالجة الغسق التفاعلية</h5>
                          <p data-i18n="psWork1Sub" class="text-[11px] text-[#94a3b8] mt-1 leading-relaxed">معالجة متقدمة لأجواء الغسق والإنارة الدافئة مع دمج حركة المشاة ورسم خطوط المسارات المعمارية وشبكة الـ Wireframe فوق الرندر.</p>
                        </div>
                      </div>

                      <!-- Project 2: Islamic Studies Center Exterior (Perspective Shot) -->
                      <div class="rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./ps-islamic-studies-exterior.jpg', 'مركز الدراسات الإسلامية - المنظور الخارجي', 'تقنيات الـ Matte Painting المتقدمة لمعالجة السماء الدرامية، وضبط الانعكاسات على المسطح المائي، وتوزيع الإضاءة الموجهة على الأقواس والعناصر التراثية.', 'MATTE PAINTING & ATMOSPHERE')">
                        <div class="aspect-[16/10] overflow-hidden relative bg-[#070e17]">
                          <img src="./ps-islamic-studies-exterior.jpg" alt="مركز الدراسات الإسلامية - المنظور الخارجي" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="if(this.src.indexOf('photo4_53ca95f4.jpg')===-1){this.src='./assets/aistudio/photo4_53ca95f4.jpg';}else{this.onerror=null;this.src=window.__FALLBACK_IMAGES.ps2;}" />
                          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60"></div>
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide">MATTE PAINTING &amp; ATMOSPHERE</span>
                        </div>
                        <div class="p-3.5 flex flex-col flex-grow justify-between">
                          <h5 data-i18n="psWork2Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors">مركز الدراسات الإسلامية - المنظور الخارجي</h5>
                          <p data-i18n="psWork2Sub" class="text-[11px] text-[#94a3b8] mt-1 leading-relaxed">تقنيات الـ Matte Painting المتقدمة لمعالجة السماء الدرامية، وضبط الانعكاسات على المسطح المائي، وتوزيع الإضاءة الموجهة على الأقواس والعناصر التراثية.</p>
                        </div>
                      </div>

                      <!-- Project 3: Museum Competition Submission Sheet (Poster Board) -->
                      <div class="rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./ps-museum-competition-sheet.jpg', 'لوحة مسابقة المتحف المعماري الانسيابي', 'إعداد شيت مسابقات متكامل بنمط الـ Blueprint يجمع بين اللقطة المنظورية للكتلة الانسيابية، المسقط الملون، ودياجرامات التشكيل الفراغي.', 'PARAMETRIC ARCHITECTURE & BOARD LAYOUT')">
                        <div class="aspect-[3/4] overflow-hidden relative bg-[#080d14] flex items-center justify-center p-1.5">
                          <img src="./ps-museum-competition-sheet.jpg" alt="لوحة مسابقة المتحف المعماري الانسيابي" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" onerror="if(this.src.indexOf('photo2_df950ff2.jfif')===-1){this.src='./assets/aistudio/photo2_df950ff2.jfif';}else{this.onerror=null;this.src=window.__FALLBACK_IMAGES.ps3;}" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide">PARAMETRIC ARCHITECTURE &amp; BOARD LAYOUT</span>
                        </div>
                        <div class="p-3.5 flex flex-col flex-grow justify-between">
                          <h5 data-i18n="psWork3Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors">لوحة مسابقة المتحف المعماري الانسيابي</h5>
                          <p data-i18n="psWork3Sub" class="text-[11px] text-[#94a3b8] mt-1 leading-relaxed">إعداد شيت مسابقات متكامل بنمط الـ Blueprint يجمع بين اللقطة المنظورية للكتلة الانسيابية، المسقط الملون، ودياجرامات التشكيل الفراغي.</p>
                        </div>
                      </div>

                      <!-- Project 4: Cultural Arts & Media Center Presentation Board (Poster Board) -->
                      <div class="rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./ps-media-center-sheet.jpg', 'مركز الفنون والإعلام - لوحة العرض المتكاملة', 'تنسيق لوحة هندسية تجمع لقطة ليلية للواجهات والزجاج، مقطعاً رأسياً تفصيلياً يوضح المستويات، ومسقطاً معمارياً ملوناً يوضح التوزيع الوظيفي.', 'TECHNICAL PRESENTATION & SECTIONING')">
                        <div class="aspect-[3/4] overflow-hidden relative bg-[#080d14] flex items-center justify-center p-1.5">
                          <img src="./ps-media-center-sheet.jpg" alt="مركز الفنون والإعلام - لوحة العرض المتكاملة" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" onerror="if(this.src.indexOf('photo3_2eb63e13.jfif')===-1){this.src='./assets/aistudio/photo3_2eb63e13.jfif';}else{this.onerror=null;this.src=window.__FALLBACK_IMAGES.ps4;}" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide">TECHNICAL PRESENTATION &amp; SECTIONING</span>
                        </div>
                        <div class="p-3.5 flex flex-col flex-grow justify-between">
                          <h5 data-i18n="psWork4Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors">مركز الفنون والإعلام - لوحة العرض المتكاملة</h5>
                          <p data-i18n="psWork4Sub" class="text-[11px] text-[#94a3b8] mt-1 leading-relaxed">تنسيق لوحة هندسية تجمع لقطة ليلية للواجهات والزجاج، مقطعاً رأسياً تفصيلياً يوضح المستويات، ومسقطاً معمارياً ملوناً يوضح التوزيع الوظيفي.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 3. AUTOCAD (FREE COMMUNITY COURSE) -->
          <div id="track-autocad" class="course-card rounded-2xl bg-[#12080a] border border-red-600/30 shadow-[0_0_25px_rgba(220,38,38,0.12)] hover:border-red-500/50 hover:shadow-[0_0_35px_rgba(220,38,38,0.2)] overflow-hidden transition-all duration-300">
            <button
              type="button"
              onclick="toggleCourse('track-autocad')"
              class="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start group cursor-pointer focus:outline-none"
            >
              <div class="flex items-center gap-4">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-[#0A0A0A] border border-red-500/40 group-hover:border-red-400 group-hover:shadow-[0_0_16px_rgba(239,68,68,0.35)] flex items-center justify-center shrink-0 shadow-sm relative transition-all duration-300" title="Autodesk AutoCAD">
                  <img src="./cad-logo.jpg" alt="Autodesk AutoCAD" class="w-full h-full object-cover rounded-[inherit] transition-transform duration-300 group-hover:scale-105" onerror="if(this.src.indexOf('cad-logo_1f70cc81.jpg')===-1){this.src='./assets/aistudio/cad-logo_1f70cc81.jpg';}" />
                </div>
                <div>
                  <div class="flex items-center gap-2.5 flex-wrap">
                    <h3 data-i18n="cadTitle" class="text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
                      AutoCAD Architecture 2D Essentials
                    </h3>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider text-red-400 bg-red-950/60 border border-red-500/40">
                      <span class="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
                      <span data-i18n="cadBadge">LIMITED TIME / $5 OFFER</span>
                    </span>
                  </div>
                  <p data-i18n="cadSummary" class="text-xs sm:text-sm text-[#888888] mt-1">
                    كورس شامل يبدأ من الصفر لتعلم أسس الرسم المعماري والتوثيق الهندسي وتجهيز المخططات التنفيذية والطباعة الاحترافية.
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-4 self-end sm:self-center shrink-0">
                <div class="px-3.5 py-1.5 rounded-lg bg-[#0A0A0A] border border-red-500/40 bg-red-950/20 shadow-[0_0_14px_rgba(220,38,38,0.20)] text-end transition-all">
                  <span class="block text-[10px] font-mono text-red-400 font-semibold" data-i18n="cadPriceLabel">LIMITED TIME OFFER</span>
                  <span class="font-mono text-sm sm:text-base font-bold text-red-400 tabular-nums">$5</span>
                </div>
                <span class="toggle-icon w-8 h-8 rounded-lg border border-[#1F1F1F] text-[#888888] flex items-center justify-center text-lg transition-transform duration-200">
                  +
                </span>
              </div>
            </button>

            <div class="course-drawer" id="drawer-track-autocad">
              <div class="course-drawer-inner p-6 sm:p-8 pt-0 border-t border-[#1F1F1F]/60">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                  <div class="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between mb-6">
                        <h4 data-i18n="syllabusOverviewTitle" class="text-xs font-mono tracking-wider text-[#888888]">SYLLABUS &amp; WORKFLOW</h4>
                        <span class="text-[10px] font-mono font-bold text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-500/40" data-i18n="cadBadge">LIMITED TIME / $5 OFFER</span>
                      </div>

                      <!-- Mobile AutoCAD Banner: Placed before Curriculum Modules on Mobile Screens -->
                      <div class="block lg:hidden relative w-full aspect-[21/9] sm:h-44 overflow-hidden rounded-xl border border-red-500/30 shadow-[0_0_20px_rgba(220,38,38,0.15)] mb-6 group bg-[#16080a]">
                        <img
                          src="./cad-paner.jpg"
                          alt="AutoCAD Architecture 2D Essentials Banner"
                          class="w-full h-full object-cover object-center"
                          onerror="if(this.src.indexOf('cad-paner_11210f2c.jfif')===-1){this.src='./assets/aistudio/cad-paner_11210f2c.jfif';}"
                        />
                      </div>

                      <!-- 4 Curriculum Modules -->
                      <div class="space-y-3 mb-6">
                        <div class="font-mono text-xs font-semibold text-[#F5F5F5] border-b border-[#1F1F1F] pb-2 flex items-center justify-between">
                          <span data-i18n="cadCurriculumHeading">المحاور الدراسية (Curriculum)</span>
                          <span class="text-[10px] text-red-400 font-mono">4 Modules</span>
                        </div>

                        <!-- Module 01 -->
                        <div class="p-3.5 rounded-xl bg-[#150a0d] border border-red-500/20">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="font-mono text-[10px] uppercase font-bold text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-500/30 shrink-0">Module 01</span>
                            <h5 class="text-xs sm:text-sm font-semibold text-[#F5F5F5]">أدوات الرسم والتعديل الأساسية (Drafting &amp; Precision Tools)</h5>
                          </div>
                          <ul class="space-y-1.5 text-xs text-[#A3A3A3] ps-4 list-disc marker:text-red-400 leading-relaxed">
                            <li>ضبط مساحة العمل ووحدات القياس.</li>
                            <li>إتقان أوامر الرسم الأساسية والتعديل السريع (Draw &amp; Modify Commands) بدقة هندسية مطلقة.</li>
                          </ul>
                        </div>

                        <!-- Module 02 -->
                        <div class="p-3.5 rounded-xl bg-[#150a0d] border border-red-500/20">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="font-mono text-[10px] uppercase font-bold text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-500/30 shrink-0">Module 02</span>
                            <h5 class="text-xs sm:text-sm font-semibold text-[#F5F5F5]">إدارة الطبقات والتهشير المعماري (Layers &amp; Architectural Hatching)</h5>
                          </div>
                          <ul class="space-y-1.5 text-xs text-[#A3A3A3] ps-4 list-disc marker:text-red-400 leading-relaxed">
                            <li>تنظيم وإدارة الطبقات (Layers) وتوحيد سماكات الخطوط والألوان حسب الكود الهندسي.</li>
                            <li>تطبيقات التهشير المعماري (Hatch) وإظهار المواد والتفاصيل الإنشائية.</li>
                          </ul>
                        </div>

                        <!-- Module 03 -->
                        <div class="p-3.5 rounded-xl bg-[#150a0d] border border-red-500/20">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="font-mono text-[10px] uppercase font-bold text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-500/30 shrink-0">Module 03</span>
                            <h5 class="text-xs sm:text-sm font-semibold text-[#F5F5F5]">الأبعاد والتوثيق والمكتبات (Dimensions &amp; Block Libraries)</h5>
                          </div>
                          <ul class="space-y-1.5 text-xs text-[#A3A3A3] ps-4 list-disc marker:text-red-400 leading-relaxed">
                            <li>ضبط أساليب الأبعاد (Dimension Styles) والنصوص التوضيحية للمساقط والواجهات.</li>
                            <li>تسليم مكتبات معمارية وبلوكات كاملة جاهزة للمشاريع السكنية والتجارية (Full Architectural Libraries).</li>
                          </ul>
                        </div>

                        <!-- Module 04 -->
                        <div class="p-3.5 rounded-xl bg-[#150a0d] border border-red-500/20">
                          <div class="flex items-center gap-2 mb-2">
                            <span class="font-mono text-[10px] uppercase font-bold text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-500/30 shrink-0">Module 04</span>
                            <h5 class="text-xs sm:text-sm font-semibold text-[#F5F5F5]">إعدادات الطباعة والتصدير (Plotting, Layouts &amp; Export Pipelines)</h5>
                          </div>
                          <ul class="space-y-1.5 text-xs text-[#A3A3A3] ps-4 list-disc marker:text-red-400 leading-relaxed">
                            <li>تجهيز لوحات الطباعة (Layouts &amp; Title Blocks) بمقاييس رسم معتمدة (Scales).</li>
                            <li>تصدير المخططات والتنسيق السلس مع برامج الـ 3D والـ BIM (Revit, 3ds Max, Lumion).</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="pt-4 border-t border-[#1F1F1F] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div class="text-xs text-[#888888]">
                        <span data-i18n="enrollCadNote">تسجيل فوري واستفسار مباشر عبر واتساب</span>
                      </div>
                      <a
                        href="https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20am%20interested%20in%20AutoCAD%20Architecture%202D%20Essentials%20($5)."
                        target="_blank"
                        rel="noopener noreferrer"
                        data-i18n="enrollCad"
                        class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#25D366] bg-[#0B0F0C] border border-[#25D366]/40 rounded-lg hover:border-[#25D366] hover:bg-[#0E1F14] hover:text-[#38e67a] active:bg-[#07140B] active:scale-[0.98] transition-all whitespace-nowrap shadow-sm group cursor-pointer"
                      >
                        <svg viewBox="0 0 24 24" class="w-3.5 h-3.5 shrink-0 fill-current text-[#25D366] group-hover:text-[#38e67a]"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.15c-.24.67-1.39 1.29-1.93 1.37-.5.08-1.14.12-3.7-0.94-3.27-1.36-5.38-4.66-5.54-4.88-.16-.22-1.34-1.78-1.34-3.4 0-1.62.85-2.42 1.15-2.75.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.21.01.48-.08.75.57.28.67.95 2.33 1.03 2.5.08.17.13.37.02.6-.11.23-.17.37-.34.57-.17.2-.36.44-.51.59-.17.17-.35.36-.15.7.2.34.89 1.47 1.91 2.38 1.31 1.17 2.42 1.53 2.76 1.7.34.17.54.14.74-.08.2-.22.86-.99 1.09-1.33.23-.34.46-.28.77-.17.31.11 1.97.93 2.31 1.1.34.17.57.25.65.39.08.14.08.82-.16 1.49z"/></svg>
                        <span>Enroll in AutoCAD Essentials ($5)</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>

                  <!-- Independent Works for AutoCAD: 4 Featured Projects Grid -->
                  <div class="lg:col-span-7">
                    <div class="flex items-center justify-between mb-3">
                      <div class="text-xs font-mono text-[#888888]">
                        INDEPENDENT STUDENT WORKS · AUTOCAD DOCUMENTATION
                      </div>
                      <span class="text-[10px] font-mono text-red-400 bg-red-950/60 border border-red-500/30 px-2 py-0.5 rounded">
                        4 FEATURED PROJECTS
                      </span>
                    </div>

                    <!-- Desktop AutoCAD Header Banner -->
                    <div class="hidden lg:block relative w-full aspect-[21/9] sm:h-44 md:h-52 overflow-hidden rounded-xl border border-red-500/30 shadow-[0_0_20px_rgba(220,38,38,0.15)] mb-4 group bg-[#16080a]">
                      <img
                        src="./cad-paner.jpg"
                        alt="AutoCAD Architecture 2D Essentials Banner"
                        class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                        onerror="if(this.src.indexOf('cad-paner_11210f2c.jfif')===-1){this.src='./assets/aistudio/cad-paner_11210f2c.jfif';}"
                      />
                    </div>

                    <!-- 4 Projects Grid: 2 Columns -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <!-- Project 1: cad-mep-hvac-layout.jpg -->
                      <div class="rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./cad-mep-hvac-layout.jpg', 'مخطط التمديدات الميكانيكية والكهربائية (HVAC &amp; MEP)', 'مخطط تنفيذي معقد يوضح شبكات التكييف، التهوية، مسارات مجاري الهواء (Ducts)، والتمديدات الكهربائية والإضاءة على خلفية كاد داكنة.', 'MEP &amp; HVAC SERVICES PLAN')">
                        <div class="aspect-[4/3] overflow-hidden relative bg-black flex items-center justify-center p-1.5">
                          <img src="./cad-mep-hvac-layout.jpg" alt="مخطط التمديدات الميكانيكية والكهربائية (HVAC &amp; MEP)" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" onerror="if(this.src.indexOf('cad1_627e4c83.jfif')===-1){this.src='./assets/aistudio/cad1_627e4c83.jfif';}else{this.onerror=null;this.src=window.__FALLBACK_IMAGES.cad1;}" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide">MEP &amp; HVAC SERVICES PLAN</span>
                        </div>
                        <div class="p-3.5 flex flex-col flex-grow justify-between">
                          <h5 data-i18n="cadWork1Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors">مخطط التمديدات الميكانيكية والكهربائية (HVAC &amp; MEP)</h5>
                          <p data-i18n="cadWork1Sub" class="text-[11px] text-[#94a3b8] mt-1 leading-relaxed">مخطط تنفيذي معقد يوضح شبكات التكييف، التهوية، مسارات مجاري الهواء (Ducts)، والتمديدات الكهربائية والإضاءة على خلفية كاد داكنة.</p>
                        </div>
                      </div>

                      <!-- Project 2: cad-building-cross-section.jpg -->
                      <div class="rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./cad-building-cross-section.jpg', 'القطاع الرأسي التنفيذي والتوثيق الإنشائي', 'مقطع رأسي هندسي متعدد الطوابق يوضح تفاصيل الأساسات، بلاطات الأسقف، مناسيب الطوابق، وشبكة المحاور بدقة تقنية عالية.', 'STRUCTURAL CROSS SECTION')">
                        <div class="aspect-[4/3] overflow-hidden relative bg-black flex items-center justify-center p-1.5">
                          <img src="./cad-building-cross-section.jpg" alt="القطاع الرأسي التنفيذي والتوثيق الإنشائي" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" onerror="if(this.src.indexOf('cad2_ac6c8cdd.jfif')===-1){this.src='./assets/aistudio/cad2_ac6c8cdd.jfif';}else{this.onerror=null;this.src=window.__FALLBACK_IMAGES.cad2;}" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide">STRUCTURAL CROSS SECTION</span>
                        </div>
                        <div class="p-3.5 flex flex-col flex-grow justify-between">
                          <h5 data-i18n="cadWork2Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors">القطاع الرأسي التنفيذي والتوثيق الإنشائي</h5>
                          <p data-i18n="cadWork2Sub" class="text-[11px] text-[#94a3b8] mt-1 leading-relaxed">مقطع رأسي هندسي متعدد الطوابق يوضح تفاصيل الأساسات، بلاطات الأسقف، مناسيب الطوابق، وشبكة المحاور بدقة تقنية عالية.</p>
                        </div>
                      </div>

                      <!-- Project 3: cad-master-floor-plan.jpg -->
                      <div class="rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./cad-master-floor-plan.jpg', 'المسقط الأفقي التنفيذي وتوزيع الفراغات', 'مسقط معماري شامل يضم المكاتب، قاعات المؤتمرات، الفراغات الخدمية، كتل الأثاث، ومفاتيح الرموز (Legend) التنفيذية.', 'MASTER WORKING FLOOR PLAN')">
                        <div class="aspect-[4/3] overflow-hidden relative bg-black flex items-center justify-center p-1.5">
                          <img src="./cad-master-floor-plan.jpg" alt="المسقط الأفقي التنفيذي وتوزيع الفراغات" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" onerror="if(this.src.indexOf('cad3_44c46ece.jfif')===-1){this.src='./assets/aistudio/cad3_44c46ece.jfif';}else{this.onerror=null;this.src=window.__FALLBACK_IMAGES.cad3;}" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide">MASTER WORKING FLOOR PLAN</span>
                        </div>
                        <div class="p-3.5 flex flex-col flex-grow justify-between">
                          <h5 data-i18n="cadWork3Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors">المسقط الأفقي التنفيذي وتوزيع الفراغات</h5>
                          <p data-i18n="cadWork3Sub" class="text-[11px] text-[#94a3b8] mt-1 leading-relaxed">مسقط معماري شامل يضم المكاتب، قاعات المؤتمرات، الفراغات الخدمية، كتل الأثاث، ومفاتيح الرموز (Legend) التنفيذية.</p>
                        </div>
                      </div>

                      <!-- Project 4: cad-3d-wireframe-axonometric.jpg -->
                      <div class="rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./cad-3d-wireframe-axonometric.jpg', 'الإسقاط الأكسونومتري الهيكلي ثلاثي الأبعاد', 'منظور شبكي هندسي (Wireframe) يوضح الهيكل الإنشائي الفولاذي، الجمالونات المعدنية، وعناصر الإطار الإنشائي للمبنى.', '3D WIREFRAME AXONOMETRIC')">
                        <div class="aspect-[4/3] overflow-hidden relative bg-black flex items-center justify-center p-1.5">
                          <img src="./cad-3d-wireframe-axonometric.jpg" alt="الإسقاط الأكسونومتري الهيكلي ثلاثي الأبعاد" class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" onerror="if(this.src.indexOf('cad4_89d2ad5b.jfif')===-1){this.src='./assets/aistudio/cad4_89d2ad5b.jfif';}else{this.onerror=null;this.src=window.__FALLBACK_IMAGES.cad4;}" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide">3D WIREFRAME AXONOMETRIC</span>
                        </div>
                        <div class="p-3.5 flex flex-col flex-grow justify-between">
                          <h5 data-i18n="cadWork4Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors">الإسقاط الأكسونومتري الهيكلي ثلاثي الأبعاد</h5>
                          <p data-i18n="cadWork4Sub" class="text-[11px] text-[#94a3b8] mt-1 leading-relaxed">منظور شبكي هندسي (Wireframe) يوضح الهيكل الإنشائي الفولاذي، الجمالونات المعدنية، وعناصر الإطار الإنشائي للمبنى.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 4. LUMION (COMING SOON) -->
          <div id="track-lumion" class="course-card rounded-2xl bg-[#081217] border border-[#345D6F]/40 shadow-[0_0_25px_rgba(52,93,111,0.22)] hover:border-[#345D6F]/70 hover:shadow-[0_0_35px_rgba(52,93,111,0.38)] overflow-hidden transition-all duration-300">
            <button
              type="button"
              onclick="toggleCourse('track-lumion')"
              class="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start group cursor-pointer focus:outline-none"
            >
              <div class="flex items-center gap-4">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#345D6F]/50 group-hover:border-[#78b7d4] group-hover:shadow-[0_0_16px_rgba(52,93,111,0.5)] flex items-center justify-center shrink-0 shadow-sm relative transition-all duration-300" title="Act-3D Lumion">
                  <img src="./lumion-logo.jpg" alt="Act-3D Lumion" class="w-full h-full object-cover rounded-[inherit] transition-transform duration-300 group-hover:scale-105" onerror="if(this.src.indexOf('lumion-logo_e2d1d791.jpg')===-1){this.src='./assets/aistudio/lumion-logo_e2d1d791.jpg';}" />
                </div>
                <div>
                  <div class="flex items-center gap-2.5 flex-wrap">
                    <h3 data-i18n="lumionTitle" class="text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
                      Lumion Visualization &amp; Animation
                    </h3>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider text-[#78b7d4] bg-[#345D6F]/30 border border-[#345D6F]/50">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#78b7d4] animate-pulse"></span>
                      <span data-i18n="lumionBadge">COMING SOON · التسجيل غير متاح</span>
                    </span>
                  </div>
                  <p data-i18n="lumionSummary" class="text-xs sm:text-sm text-[#888888] mt-1">
                    Environment dressing, realistic sunlight, weather systems, and smooth cinematic videos.
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-4 self-end sm:self-center shrink-0">
                <div class="px-3.5 py-1.5 rounded-lg bg-[#0A0A0A] border border-red-500/40 bg-red-950/20 text-end shadow-[0_0_12px_rgba(239,68,68,0.12)]">
                  <span class="block text-[10px] font-mono text-red-400 font-bold" data-i18n="statusLabel">STATUS / حالة التسجيل</span>
                  <span class="font-mono text-sm sm:text-base font-bold text-red-400 tabular-nums" data-i18n="statusComingSoon">غير متاح حالياً · Coming Soon</span>
                </div>
                <span class="toggle-icon w-8 h-8 rounded-lg border border-[#1F1F1F] text-[#888888] flex items-center justify-center text-lg transition-transform duration-200">
                  +
                </span>
              </div>
            </button>

            <div class="course-drawer" id="drawer-track-lumion">
              <div class="course-drawer-inner p-6 sm:p-8 pt-0 border-t border-[#1F1F1F]/60">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                  <div class="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <h4 data-i18n="syllabusOverviewTitle" class="text-xs font-mono tracking-wider text-[#888888] mb-6">SYLLABUS &amp; WORKFLOW</h4>

                      <!-- Mobile Lumion Banner -->
                      <div class="block lg:hidden relative w-full aspect-[21/9] sm:h-44 overflow-hidden rounded-xl border border-[#345D6F]/40 shadow-[0_0_20px_rgba(52,93,111,0.25)] mb-6 group bg-[#081217]">
                        <img
                          src="./lumion-paner.jpg"
                          alt="Lumion Visualization & Animation Banner"
                          class="w-full h-full object-cover object-center"
                          onerror="if(this.src.indexOf('lumion-paner_07ac3d68.jfif')===-1){this.src='./assets/aistudio/lumion-paner_07ac3d68.jfif';}"
                        />
                      </div>
                    </div>
                    <div class="pt-4 border-t border-[#1F1F1F] flex items-center justify-between">
                      <div class="text-xs text-red-400/90">
                        <span>التسجيل مغلق لهذا المسار حالياً · ترقبوا موعد الإطلاق</span>
                      </div>
                      <div class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-red-400 bg-red-950/40 border border-red-500/40 rounded-lg cursor-not-allowed select-none shadow-sm">
                        <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span>التسجيل غير متاح حالياً · Coming Soon</span>
                      </div>
                    </div>
                  </div>

                  <!-- Independent Works for Lumion -->
                  <div class="lg:col-span-7">
                    <div class="flex items-center justify-between mb-3">
                      <div class="text-xs font-mono text-[#888888]">
                        INDEPENDENT STUDENT WORKS · LUMION VISUALIZATION
                      </div>
                      <span class="text-[10px] font-mono text-[#78b7d4] bg-[#345D6F]/30 border border-[#345D6F]/50 px-2 py-0.5 rounded">
                        2 FEATURED PROJECTS
                      </span>
                    </div>

                    <!-- Desktop Lumion Header Banner -->
                    <div class="hidden lg:block relative w-full aspect-[21/9] sm:h-44 md:h-52 overflow-hidden rounded-xl border border-[#345D6F]/40 shadow-[0_0_20px_rgba(52,93,111,0.25)] mb-4 group bg-[#081217]">
                      <img
                        src="./lumion-paner.jpg"
                        alt="Lumion Visualization & Animation Banner"
                        class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                        onerror="if(this.src.indexOf('lumion-paner_07ac3d68.jfif')===-1){this.src='./assets/aistudio/lumion-paner_07ac3d68.jfif';}"
                      />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div class="rounded-xl overflow-hidden border border-[#1b323d] bg-[#0c1a21] hover:border-[#345D6F]/70 hover:shadow-[0_0_15px_rgba(52,93,111,0.3)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./lumion-work-1.jpg', 'فيلا الفناء الحجري والبيئة الطبيعية', 'توزيع الإضاءة وتضاريس الموقع', 'LUMION EXTERIOR')">
                        <div class="aspect-[16/10] overflow-hidden relative">
                          <img src="./lumion-work-1.jpg" alt="Lumion Project 1" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.lumion1;" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-[#78b7d4] bg-[#081217]/90 border border-[#345D6F]/50 px-2 py-0.5 rounded tracking-wide">LUMION EXTERIOR</span>
                        </div>
                        <div class="p-3.5">
                          <h5 data-i18n="lumionWork1Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-[#9cd1eb] transition-colors">Arid Stone Courtyard Villa</h5>
                          <p data-i18n="lumionWork1Sub" class="text-[11px] text-[#94a3b8] mt-0.5">Terrain Vegetation &amp; Soft Twilight</p>
                        </div>
                      </div>
                      <div class="rounded-xl overflow-hidden border border-[#1b323d] bg-[#0c1a21] hover:border-[#345D6F]/70 hover:shadow-[0_0_15px_rgba(52,93,111,0.3)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./lumion-work-2.jpg', 'فيلا معاصرة وسط الغابة', 'واقعية الخضار وأشعة الغروب', 'LUMION CINEMATIC')">
                        <div class="aspect-[16/10] overflow-hidden relative">
                          <img src="./lumion-work-2.jpg" alt="Lumion Project 2" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.lumion2;" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-[#78b7d4] bg-[#081217]/90 border border-[#345D6F]/50 px-2 py-0.5 rounded tracking-wide">LUMION CINEMATIC</span>
                        </div>
                        <div class="p-3.5">
                          <h5 data-i18n="lumionWork2Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-[#9cd1eb] transition-colors">Modern Residential Forest Villa</h5>
                          <p data-i18n="lumionWork2Sub" class="text-[11px] text-[#94a3b8] mt-0.5">Natural Grass Foliage &amp; Sunset Sky</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 5. V-RAY (COMING SOON) -->
          <div id="track-vray" class="course-card rounded-2xl bg-[#080d19] border border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.12)] hover:border-blue-400/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)] overflow-hidden transition-all duration-300">
            <button
              type="button"
              onclick="toggleCourse('track-vray')"
              class="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start group cursor-pointer focus:outline-none"
            >
              <div class="flex items-center gap-4">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-[#0A0A0A] border border-blue-500/40 group-hover:border-blue-400 group-hover:shadow-[0_0_16px_rgba(59,130,246,0.35)] flex items-center justify-center shrink-0 shadow-sm relative transition-all duration-300" title="Chaos V-Ray">
                  <img src="./vray-logo.jpg" alt="Chaos V-Ray" class="w-full h-full object-cover rounded-[inherit] transition-transform duration-300 group-hover:scale-105" onerror="if(this.src.indexOf('vray-logo_e091105e.jpg')===-1){this.src='./assets/aistudio/vray-logo_e091105e.jpg';}" />
                </div>
                <div>
                  <div class="flex items-center gap-2.5 flex-wrap">
                    <h3 data-i18n="vrayTitle" class="text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
                      V-Ray Photorealism Engine
                    </h3>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider text-blue-400 bg-blue-950/60 border border-blue-500/40">
                      <span class="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                      <span data-i18n="vrayBadge">COMING SOON · التسجيل غير متاح</span>
                    </span>
                  </div>
                  <p data-i18n="vraySummary" class="text-xs sm:text-sm text-[#888888] mt-1">
                    Physically based PBR materials, global illumination, and high-end studio lighting realism.
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-4 self-end sm:self-center shrink-0">
                <div class="px-3.5 py-1.5 rounded-lg bg-[#0A0A0A] border border-red-500/40 bg-red-950/20 text-end shadow-[0_0_12px_rgba(239,68,68,0.12)]">
                  <span class="block text-[10px] font-mono text-red-400 font-bold" data-i18n="statusLabel">STATUS / حالة التسجيل</span>
                  <span class="font-mono text-sm sm:text-base font-bold text-red-400 tabular-nums" data-i18n="statusComingSoon">غير متاح حالياً · Coming Soon</span>
                </div>
                <span class="toggle-icon w-8 h-8 rounded-lg border border-[#1F1F1F] text-[#888888] flex items-center justify-center text-lg transition-transform duration-200">
                  +
                </span>
              </div>
            </button>

            <div class="course-drawer" id="drawer-track-vray">
              <div class="course-drawer-inner p-6 sm:p-8 pt-0 border-t border-[#1F1F1F]/60">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                  <div class="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <h4 data-i18n="syllabusOverviewTitle" class="text-xs font-mono tracking-wider text-[#888888] mb-6">SYLLABUS &amp; WORKFLOW</h4>

                      <!-- Mobile V-Ray Banner -->
                      <div class="block lg:hidden relative w-full aspect-[21/9] sm:h-44 overflow-hidden rounded-xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)] mb-6 group bg-[#080d19]">
                        <img
                          src="./vray-paner.jpg"
                          alt="V-Ray Photorealism Engine Banner"
                          class="w-full h-full object-cover object-center"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (!target.src.includes('vray-paner_087e37ff.jfif')) {
                              target.src = './assets/aistudio/vray-paner_087e37ff.jfif';
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div class="pt-4 border-t border-[#1F1F1F] flex items-center justify-between">
                      <div class="text-xs text-red-400/90">
                        <span>التسجيل مغلق لهذا المسار حالياً · ترقبوا موعد الإطلاق</span>
                      </div>
                      <div class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-red-400 bg-red-950/40 border border-red-500/40 rounded-lg cursor-not-allowed select-none shadow-sm">
                        <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span>التسجيل غير متاح حالياً · Coming Soon</span>
                      </div>
                    </div>
                  </div>

                  <!-- Independent Works for V-Ray -->
                  <div class="lg:col-span-7">
                    <div class="flex items-center justify-between mb-3">
                      <div class="text-xs font-mono text-[#888888]">
                        INDEPENDENT STUDENT WORKS · V-RAY PHOTOREALISM
                      </div>
                      <span class="text-[10px] font-mono text-blue-400 bg-blue-950/60 border border-blue-500/30 px-2 py-0.5 rounded">
                        2 FEATURED PROJECTS
                      </span>
                    </div>

                    <!-- Desktop V-Ray Header Banner -->
                    <div class="hidden lg:block relative w-full aspect-[21/9] sm:h-44 md:h-52 overflow-hidden rounded-xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)] mb-4 group bg-[#080d19]">
                      <img
                        src="./vray-paner.jpg"
                        alt="V-Ray Photorealism Engine Banner"
                        class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                        onerror="if(this.src.indexOf('vray-paner_087e37ff.jfif')===-1){this.src='./assets/aistudio/vray-paner_087e37ff.jfif';}"
                      />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div class="rounded-xl overflow-hidden border border-[#172033] bg-[#0d1424] hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./vray-work-1.jpg', 'جناح خرساني بروتالي فائق الواقعية', 'إضاءة غير مباشرة وخامات خرسانية دقيقة', 'V-RAY MASTER')">
                        <div class="aspect-[16/10] overflow-hidden relative">
                          <img src="./vray-work-1.jpg" alt="V-Ray Project 1" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.vray1;" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-blue-400 bg-[#080d19]/90 border border-blue-500/30 px-2 py-0.5 rounded tracking-wide">V-RAY MASTER</span>
                        </div>
                        <div class="p-3.5">
                          <h5 data-i18n="vrayWork1Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-blue-200 transition-colors">Brutalist Concrete Pavilion</h5>
                          <p data-i18n="vrayWork1Sub" class="text-[11px] text-[#94a3b8] mt-0.5">Indirect Light Bounces &amp; Concrete PBR</p>
                        </div>
                      </div>
                      <div class="rounded-xl overflow-hidden border border-[#172033] bg-[#0d1424] hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./vray-work-2.jpg', 'فراغ معيشي دافئ بإضاءة ليلية', 'انعكاسات الخشب والإنارة المخفية', 'V-RAY PHOTOREAL')">
                        <div class="aspect-[16/10] overflow-hidden relative">
                          <img src="./vray-work-2.jpg" alt="V-Ray Project 2" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.vray2;" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-blue-400 bg-[#080d19]/90 border border-blue-500/30 px-2 py-0.5 rounded tracking-wide">V-RAY PHOTOREAL</span>
                        </div>
                        <div class="p-3.5">
                          <h5 data-i18n="vrayWork2Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-blue-200 transition-colors">Interior Living Space Warm Light</h5>
                          <p data-i18n="vrayWork2Sub" class="text-[11px] text-[#94a3b8] mt-0.5">Recessed LEDs &amp; Wood Reflections</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 6. ENSCAPE (COMING SOON) -->
          <div id="track-enscape" class="course-card rounded-2xl bg-[#140f06] border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.12)] hover:border-amber-400/50 hover:shadow-[0_0_35px_rgba(245,158,11,0.2)] overflow-hidden transition-all duration-300">
            <button
              type="button"
              onclick="toggleCourse('track-enscape')"
              class="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start group cursor-pointer focus:outline-none"
            >
              <div class="flex items-center gap-4">
                <div class="w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-[#0A0A0A] border border-amber-500/40 group-hover:border-amber-400 group-hover:shadow-[0_0_16px_rgba(245,158,11,0.35)] flex items-center justify-center shrink-0 shadow-sm relative transition-all duration-300" title="Chaos Enscape">
                  <img src="./enscape-logo.jpg" alt="Chaos Enscape" class="w-full h-full object-cover rounded-[inherit] transition-transform duration-300 group-hover:scale-105" onerror="if(this.src.indexOf('enscape-logo_3537473a.jpg')===-1){this.src='./assets/aistudio/enscape-logo_3537473a.jpg';}" />
                </div>
                <div>
                  <div class="flex items-center gap-2.5 flex-wrap">
                    <h3 data-i18n="enscapeTitle" class="text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
                      Enscape Real-Time Engine
                    </h3>
                    <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider text-amber-400 bg-amber-950/60 border border-amber-500/40">
                      <span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                      <span data-i18n="enscapeBadge">COMING SOON · التسجيل غير متاح</span>
                    </span>
                  </div>
                  <p data-i18n="enscapeSummary" class="text-xs sm:text-sm text-[#888888] mt-1">
                    Live bidirectional sync with Revit, rapid client presentations, VR walkthroughs, and 360 panoramas.
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-4 self-end sm:self-center shrink-0">
                <div class="px-3.5 py-1.5 rounded-lg bg-[#0A0A0A] border border-red-500/40 bg-red-950/20 text-end shadow-[0_0_12px_rgba(239,68,68,0.12)]">
                  <span class="block text-[10px] font-mono text-red-400 font-bold" data-i18n="statusLabel">STATUS / حالة التسجيل</span>
                  <span class="font-mono text-sm sm:text-base font-bold text-red-400 tabular-nums" data-i18n="statusComingSoon">غير متاح حالياً · Coming Soon</span>
                </div>
                <span class="toggle-icon w-8 h-8 rounded-lg border border-[#1F1F1F] text-[#888888] flex items-center justify-center text-lg transition-transform duration-200">
                  +
                </span>
              </div>
            </button>

            <div class="course-drawer" id="drawer-track-enscape">
              <div class="course-drawer-inner p-6 sm:p-8 pt-0 border-t border-[#1F1F1F]/60">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                  <div class="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <h4 data-i18n="syllabusOverviewTitle" class="text-xs font-mono tracking-wider text-[#888888] mb-6">SYLLABUS &amp; WORKFLOW</h4>

                      <!-- Mobile Enscape Banner -->
                      <div class="block lg:hidden relative w-full aspect-[21/9] sm:h-44 overflow-hidden rounded-xl border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.15)] mb-6 group bg-[#140f06]">
                        <img
                          src="./enscape-paner.jpg"
                          alt="Enscape Real-Time Engine Banner"
                          class="w-full h-full object-cover object-center"
                          onerror="if(this.src.indexOf('enscape-paner_f05ffdb2.jfif')===-1){this.src='./assets/aistudio/enscape-paner_f05ffdb2.jfif';}"
                        />
                      </div>
                    </div>
                    <div class="pt-4 border-t border-[#1F1F1F] flex items-center justify-between">
                      <div class="text-xs text-red-400/90">
                        <span>التسجيل مغلق لهذا المسار حالياً · ترقبوا موعد الإطلاق</span>
                      </div>
                      <div class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-red-400 bg-red-950/40 border border-red-500/40 rounded-lg cursor-not-allowed select-none shadow-sm">
                        <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span>التسجيل غير متاح حالياً · Coming Soon</span>
                      </div>
                    </div>
                  </div>

                  <!-- Independent Works for Enscape -->
                  <div class="lg:col-span-7">
                    <div class="flex items-center justify-between mb-3">
                      <div class="text-xs font-mono text-[#888888]">
                        INDEPENDENT STUDENT WORKS · ENSCAPE REAL-TIME
                      </div>
                      <span class="text-[10px] font-mono text-amber-400 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded">
                        2 FEATURED PROJECTS
                      </span>
                    </div>

                    <!-- Desktop Enscape Header Banner -->
                    <div class="hidden lg:block relative w-full aspect-[21/9] sm:h-44 md:h-52 overflow-hidden rounded-xl border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.15)] mb-4 group bg-[#140f06]">
                      <img
                        src="./enscape-paner.jpg"
                        alt="Enscape Real-Time Engine Banner"
                        class="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                        onerror="if(this.src.indexOf('enscape-paner_f05ffdb2.jfif')===-1){this.src='./assets/aistudio/enscape-paner_f05ffdb2.jfif';}"
                      />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div class="rounded-xl overflow-hidden border border-[#2e2010] bg-[#1a140a] hover:border-amber-500/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./enscape-work-1.jpg', 'جولة تفاعلية حية لفيلا جبلية', 'إظهار لحظي لانعكاسات السماء والكتل', 'ENSCAPE REAL-TIME')">
                        <div class="aspect-[16/10] overflow-hidden relative">
                          <img src="./enscape-work-1.jpg" alt="Enscape Project 1" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.enscape1;" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-amber-400 bg-[#140f06]/90 border border-amber-500/30 px-2 py-0.5 rounded tracking-wide">ENSCAPE REAL-TIME</span>
                        </div>
                        <div class="p-3.5">
                          <h5 data-i18n="enscapeWork1Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-amber-200 transition-colors">Cliffside Villa Live Walkthrough</h5>
                          <p data-i18n="enscapeWork1Sub" class="text-[11px] text-[#94a3b8] mt-0.5">Real-time Sky Reflection &amp; Framing</p>
                        </div>
                      </div>
                      <div class="rounded-xl overflow-hidden border border-[#2e2010] bg-[#1a140a] hover:border-amber-500/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] transition-all duration-300 cursor-pointer group flex flex-col" onclick="openLightbox('./enscape-work-2.jpg', 'بهو زجاجي بإضاءة شمسية تفاعلية', 'الظلال الناعمة وتجول الـ VR الفوري', 'ENSCAPE REAL-TIME')">
                        <div class="aspect-[16/10] overflow-hidden relative">
                          <img src="./enscape-work-2.jpg" alt="Enscape Project 2" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onerror="this.onerror=null; this.src=window.__FALLBACK_IMAGES.enscape2;" />
                          <span class="absolute bottom-2.5 start-2.5 font-mono text-[10px] text-amber-400 bg-[#140f06]/90 border border-amber-500/30 px-2 py-0.5 rounded tracking-wide">ENSCAPE REAL-TIME</span>
                        </div>
                        <div class="p-3.5">
                          <h5 data-i18n="enscapeWork2Title" class="text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-amber-200 transition-colors">Glazed Atrium Direct Sun Walk</h5>
                          <p data-i18n="enscapeWork2Sub" class="text-[11px] text-[#94a3b8] mt-0.5">Dynamic Shadow Falloff &amp; VR Asset</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION: DISTINGUISHED STUDENT WORKS (أعمال الطلاب المتميزة - 6 أعمال فارغة جاهزة) -->
    <section id="student-works" class="py-20 md:py-28 border-b border-[#1F1F1F] scroll-mt-16 bg-[#0B0B0B]">
      <div class="max-w-[1200px] mx-auto px-6 md:px-10">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div class="flex items-center gap-2 mb-2.5">
              <span class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span data-i18n="studentShowcaseTag" class="font-mono text-xs uppercase tracking-[0.16em] text-cyan-400 font-semibold">STUDENT PORTFOLIO SHOWCASE</span>
            </div>
            <h2 data-i18n="studentShowcaseTitle" class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.15] headline-balance">
              Distinguished Student Works
            </h2>
            <p data-i18n="studentShowcaseDesc" class="text-base text-[#888888] mt-3 max-w-2xl leading-relaxed">
              Showcase of selected architectural projects crafted by our students across Revit, Photoshop, AutoCAD, Lumion, V-Ray, and Enscape.
            </p>
          </div>

          <div class="flex items-center gap-2 shrink-0">
            <span data-i18n="studentShowcaseBadge" class="font-mono text-xs text-[#888888] bg-[#141414] border border-[#222] px-3.5 py-2 rounded-xl">
              6 Portfolio Slots
            </span>
          </div>
        </div>

        <!-- 6 Empty Student Work Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Slot 1: Revit -->
          <div class="group relative rounded-2xl border-2 border-dashed border-[#22262E] hover:border-cyan-500/50 bg-[#0E1115]/60 hover:bg-[#11161D]/90 transition-all duration-300 p-5 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_0_24px_rgba(6,182,212,0.12)]">
            <div>
              <div class="relative aspect-[16/10] w-full rounded-xl bg-[#080B0E] border border-[#1A2028] group-hover:border-cyan-500/30 flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-300 mb-5">
                <div class="w-12 h-12 rounded-2xl bg-[#131922] border border-[#263140] group-hover:border-cyan-500/60 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center justify-center text-[#708090] group-hover:text-cyan-400 transition-all duration-300 mb-3 group-hover:scale-105">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                </div>
                <span data-i18n="slotEmptyStatus" class="font-mono text-[11px] text-[#888888] group-hover:text-cyan-300 bg-[#0B0F14]/90 border border-[#1C232D] group-hover:border-cyan-500/30 px-3 py-1 rounded-full transition-colors">Empty Project Slot</span>
              </div>
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <span class="font-mono text-xs font-bold tracking-wider text-[#666] group-hover:text-[#888]">PROJECT 01</span>
                <span class="font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border text-cyan-400 bg-cyan-950/60 border-cyan-500/40">Revit</span>
              </div>
              <h4 data-i18n="slot1Title" class="text-base font-bold text-[#F5F5F5] group-hover:text-white transition-colors">Parametric BIM Residential Complex</h4>
              <p data-i18n="slot1Sub" class="text-xs text-[#888888] mt-1.5 leading-relaxed">Full architectural BIM modeling, curtain wall layouts, and schedules.</p>
            </div>
            <div class="pt-4 mt-5 border-t border-[#1C2129] flex items-center justify-between text-xs font-mono text-[#666] group-hover:text-cyan-400 transition-colors">
              <span data-i18n="slotReadyText">Ready for Submission</span>
              <span class="text-sm">→</span>
            </div>
          </div>

          <!-- Slot 2: Photoshop -->
          <div class="group relative rounded-2xl border-2 border-dashed border-[#22262E] hover:border-cyan-500/50 bg-[#0E1115]/60 hover:bg-[#11161D]/90 transition-all duration-300 p-5 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_0_24px_rgba(6,182,212,0.12)]">
            <div>
              <div class="relative aspect-[16/10] w-full rounded-xl bg-[#080B0E] border border-[#1A2028] group-hover:border-cyan-500/30 flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-300 mb-5">
                <div class="w-12 h-12 rounded-2xl bg-[#131922] border border-[#263140] group-hover:border-cyan-500/60 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center justify-center text-[#708090] group-hover:text-cyan-400 transition-all duration-300 mb-3 group-hover:scale-105">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                </div>
                <span data-i18n="slotEmptyStatus" class="font-mono text-[11px] text-[#888888] group-hover:text-cyan-300 bg-[#0B0F14]/90 border border-[#1C232D] group-hover:border-cyan-500/30 px-3 py-1 rounded-full transition-colors">Empty Project Slot</span>
              </div>
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <span class="font-mono text-xs font-bold tracking-wider text-[#666] group-hover:text-[#888]">PROJECT 02</span>
                <span class="font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border text-blue-400 bg-blue-950/60 border-blue-500/40">Photoshop</span>
              </div>
              <h4 data-i18n="slot2Title" class="text-base font-bold text-[#F5F5F5] group-hover:text-white transition-colors">Atmospheric Dusk Architectural Post-Production</h4>
              <p data-i18n="slot2Sub" class="text-xs text-[#888888] mt-1.5 leading-relaxed">Color grading, entourage, lighting enhancement, and competition board.</p>
            </div>
            <div class="pt-4 mt-5 border-t border-[#1C2129] flex items-center justify-between text-xs font-mono text-[#666] group-hover:text-cyan-400 transition-colors">
              <span data-i18n="slotReadyText">Ready for Submission</span>
              <span class="text-sm">→</span>
            </div>
          </div>

          <!-- Slot 3: AutoCAD -->
          <div class="group relative rounded-2xl border-2 border-dashed border-[#22262E] hover:border-cyan-500/50 bg-[#0E1115]/60 hover:bg-[#11161D]/90 transition-all duration-300 p-5 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_0_24px_rgba(6,182,212,0.12)]">
            <div>
              <div class="relative aspect-[16/10] w-full rounded-xl bg-[#080B0E] border border-[#1A2028] group-hover:border-cyan-500/30 flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-300 mb-5">
                <div class="w-12 h-12 rounded-2xl bg-[#131922] border border-[#263140] group-hover:border-cyan-500/60 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center justify-center text-[#708090] group-hover:text-cyan-400 transition-all duration-300 mb-3 group-hover:scale-105">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                </div>
                <span data-i18n="slotEmptyStatus" class="font-mono text-[11px] text-[#888888] group-hover:text-cyan-300 bg-[#0B0F14]/90 border border-[#1C232D] group-hover:border-cyan-500/30 px-3 py-1 rounded-full transition-colors">Empty Project Slot</span>
              </div>
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <span class="font-mono text-xs font-bold tracking-wider text-[#666] group-hover:text-[#888]">PROJECT 03</span>
                <span class="font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border text-red-400 bg-red-950/60 border-red-500/40">AutoCAD</span>
              </div>
              <h4 data-i18n="slot3Title" class="text-base font-bold text-[#F5F5F5] group-hover:text-white transition-colors">Executive Working Drawings &amp; Detailing</h4>
              <p data-i18n="slot3Sub" class="text-xs text-[#888888] mt-1.5 leading-relaxed">Multi-floor working drawings, dimensioning, coordination, and A0 plotting.</p>
            </div>
            <div class="pt-4 mt-5 border-t border-[#1C2129] flex items-center justify-between text-xs font-mono text-[#666] group-hover:text-cyan-400 transition-colors">
              <span data-i18n="slotReadyText">Ready for Submission</span>
              <span class="text-sm">→</span>
            </div>
          </div>

          <!-- Slot 4: Lumion -->
          <div class="group relative rounded-2xl border-2 border-dashed border-[#22262E] hover:border-cyan-500/50 bg-[#0E1115]/60 hover:bg-[#11161D]/90 transition-all duration-300 p-5 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_0_24px_rgba(6,182,212,0.12)]">
            <div>
              <div class="relative aspect-[16/10] w-full rounded-xl bg-[#080B0E] border border-[#1A2028] group-hover:border-cyan-500/30 flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-300 mb-5">
                <div class="w-12 h-12 rounded-2xl bg-[#131922] border border-[#263140] group-hover:border-cyan-500/60 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center justify-center text-[#708090] group-hover:text-cyan-400 transition-all duration-300 mb-3 group-hover:scale-105">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                </div>
                <span data-i18n="slotEmptyStatus" class="font-mono text-[11px] text-[#888888] group-hover:text-cyan-300 bg-[#0B0F14]/90 border border-[#1C232D] group-hover:border-cyan-500/30 px-3 py-1 rounded-full transition-colors">Empty Project Slot</span>
              </div>
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <span class="font-mono text-xs font-bold tracking-wider text-[#666] group-hover:text-[#888]">PROJECT 04</span>
                <span class="font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border text-[#78b7d4] bg-[#345D6F]/30 border-[#345D6F]/50">Lumion</span>
              </div>
              <h4 data-i18n="slot4Title" class="text-base font-bold text-[#F5F5F5] group-hover:text-white transition-colors">Cinematic Exterior &amp; Landscape Visualization</h4>
              <p data-i18n="slot4Sub" class="text-xs text-[#888888] mt-1.5 leading-relaxed">Photorealistic lighting, weather atmosphere, and dynamic nature.</p>
            </div>
            <div class="pt-4 mt-5 border-t border-[#1C2129] flex items-center justify-between text-xs font-mono text-[#666] group-hover:text-cyan-400 transition-colors">
              <span data-i18n="slotReadyText">Ready for Submission</span>
              <span class="text-sm">→</span>
            </div>
          </div>

          <!-- Slot 5: V-Ray -->
          <div class="group relative rounded-2xl border-2 border-dashed border-[#22262E] hover:border-cyan-500/50 bg-[#0E1115]/60 hover:bg-[#11161D]/90 transition-all duration-300 p-5 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_0_24px_rgba(6,182,212,0.12)]">
            <div>
              <div class="relative aspect-[16/10] w-full rounded-xl bg-[#080B0E] border border-[#1A2028] group-hover:border-cyan-500/30 flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-300 mb-5">
                <div class="w-12 h-12 rounded-2xl bg-[#131922] border border-[#263140] group-hover:border-cyan-500/60 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center justify-center text-[#708090] group-hover:text-cyan-400 transition-all duration-300 mb-3 group-hover:scale-105">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                </div>
                <span data-i18n="slotEmptyStatus" class="font-mono text-[11px] text-[#888888] group-hover:text-cyan-300 bg-[#0B0F14]/90 border border-[#1C232D] group-hover:border-cyan-500/30 px-3 py-1 rounded-full transition-colors">Empty Project Slot</span>
              </div>
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <span class="font-mono text-xs font-bold tracking-wider text-[#666] group-hover:text-[#888]">PROJECT 05</span>
                <span class="font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border text-blue-400 bg-blue-950/60 border-blue-500/40">V-Ray</span>
              </div>
              <h4 data-i18n="slot5Title" class="text-base font-bold text-[#F5F5F5] group-hover:text-white transition-colors">Interior Photorealism &amp; Material Simulation</h4>
              <p data-i18n="slot5Sub" class="text-xs text-[#888888] mt-1.5 leading-relaxed">Accurate caustics, soft shadows, custom PBR textures, and night moods.</p>
            </div>
            <div class="pt-4 mt-5 border-t border-[#1C2129] flex items-center justify-between text-xs font-mono text-[#666] group-hover:text-cyan-400 transition-colors">
              <span data-i18n="slotReadyText">Ready for Submission</span>
              <span class="text-sm">→</span>
            </div>
          </div>

          <!-- Slot 6: Enscape -->
          <div class="group relative rounded-2xl border-2 border-dashed border-[#22262E] hover:border-cyan-500/50 bg-[#0E1115]/60 hover:bg-[#11161D]/90 transition-all duration-300 p-5 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-[0_0_24px_rgba(6,182,212,0.12)]">
            <div>
              <div class="relative aspect-[16/10] w-full rounded-xl bg-[#080B0E] border border-[#1A2028] group-hover:border-cyan-500/30 flex flex-col items-center justify-center p-6 text-center overflow-hidden transition-all duration-300 mb-5">
                <div class="w-12 h-12 rounded-2xl bg-[#131922] border border-[#263140] group-hover:border-cyan-500/60 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] flex items-center justify-center text-[#708090] group-hover:text-cyan-400 transition-all duration-300 mb-3 group-hover:scale-105">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                </div>
                <span data-i18n="slotEmptyStatus" class="font-mono text-[11px] text-[#888888] group-hover:text-cyan-300 bg-[#0B0F14]/90 border border-[#1C232D] group-hover:border-cyan-500/30 px-3 py-1 rounded-full transition-colors">Empty Project Slot</span>
              </div>
              <div class="flex items-center justify-between gap-2 mb-2.5">
                <span class="font-mono text-xs font-bold tracking-wider text-[#666] group-hover:text-[#888]">PROJECT 06</span>
                <span class="font-mono text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border text-amber-400 bg-amber-950/60 border-amber-500/40">Enscape</span>
              </div>
              <h4 data-i18n="slot6Title" class="text-base font-bold text-[#F5F5F5] group-hover:text-white transition-colors">Real-Time Walkthrough &amp; Interactive Panorama</h4>
              <p data-i18n="slot6Sub" class="text-xs text-[#888888] mt-1.5 leading-relaxed">Instant rendering, sun angle study, and 360 client presentation.</p>
            </div>
            <div class="pt-4 mt-5 border-t border-[#1C2129] flex items-center justify-between text-xs font-mono text-[#666] group-hover:text-cyan-400 transition-colors">
              <span data-i18n="slotReadyText">Ready for Submission</span>
              <span class="text-sm">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION: CONTACT (#contact) -->
    <section id="contact" class="py-20 md:py-28 scroll-mt-16">
      <div class="max-w-[1200px] mx-auto px-6 md:px-10">
        <div class="bg-[#121212] border border-[#1F1F1F] rounded-xl p-6 sm:p-10 md:p-14">
          <p data-i18n="contactLabel" class="font-mono text-xs tracking-[0.16em] text-[#888888] tabular-nums mb-4">
            LET'S TALK
          </p>
          <h2 data-i18n="contactHeading" class="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.16] max-w-2xl mb-8 sm:mb-10 headline-balance">
            Ready to elevate your architectural workflow?
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            <!-- 1. WhatsApp Button - Black base with WhatsApp Green styling and press states -->
            <a
              href="https://wa.me/963998401013"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#0B0F0C] border border-[#25D366]/35 hover:border-[#25D366] hover:bg-[#0E1F14] active:bg-[#07140B] active:border-[#25D366] active:scale-[0.99] text-[#F5F5F5] transition-all duration-200 shadow-sm hover:shadow-[0_0_24px_rgba(37,211,102,0.20)] cursor-pointer"
            >
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-9 h-9 rounded-lg bg-[#25D366]/15 border border-[#25D366]/35 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-[#0B0F0C] group-active:bg-[#1ebd5a] group-active:text-black transition-all duration-200">
                  <svg class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.15c-.24.67-1.39 1.29-1.93 1.37-.5.08-1.14.12-3.7-0.94-3.27-1.36-5.38-4.66-5.54-4.88-.16-.22-1.34-1.78-1.34-3.4 0-1.62.85-2.42 1.15-2.75.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.21.01.48-.08.75.57.28.67.95 2.33 1.03 2.5.08.17.13.37.02.6-.11.23-.17.37-.34.57-.17.2-.36.44-.51.59-.17.17-.35.36-.15.7.2.34.89 1.47 1.91 2.38 1.31 1.17 2.42 1.53 2.76 1.7.34.17.54.14.74-.08.2-.22.86-.99 1.09-1.33.23-.34.46-.28.77-.17.31.11 1.97.93 2.31 1.1.34.17.57.25.65.39.08.14.08.82-.16 1.49z"/>
                  </svg>
                </div>
                <div class="min-w-0">
                  <span data-i18n="whatsappBtnLabel" class="block text-xs font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">WhatsApp</span>
                  <span dir="ltr" class="block text-[11px] sm:text-xs font-mono text-[#25D366] group-hover:text-[#38e67a] font-medium truncate transition-colors">+963 998 401 013</span>
                </div>
              </div>
              <span class="text-[#25D366]/70 group-hover:text-[#25D366] text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
            </a>

            <!-- 2. Instagram Button (تابعنا على إنستغرام) -->
            <a
              href="https://www.instagram.com/arch.ibrahim.najar?exln=MTMxNWlqYWYxNDQ0eg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#0A0A0A] border border-[#1F1F1F] hover:border-[#E1306C]/60 text-[#F5F5F5] hover:text-white transition-all duration-200"
            >
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#FD1D1D]/20 via-[#E1306C]/25 to-[#405DE6]/20 border border-[#E1306C]/40 text-[#F5F5F5] flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4 text-[#F472B6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <div class="min-w-0">
                  <span data-i18n="instagramBtnLabel" class="block text-xs font-semibold text-[#F5F5F5]">Follow on Instagram</span>
                  <span dir="ltr" class="block text-[11px] sm:text-xs font-mono text-[#888888] group-hover:text-[#F5F5F5] truncate">@arch.ibrahim.najar</span>
                </div>
              </div>
              <span class="text-[#888888] group-hover:text-[#F5F5F5] text-sm">↗</span>
            </a>

            <!-- 3. Email Button (Fixed mobile size - sleek & proportional) -->
            <a
              href="mailto:arch.ibrahim.najjar@gmail.com"
              class="group flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#0A0A0A] border border-[#1F1F1F] hover:border-[#888888] text-[#F5F5F5] transition-all duration-200"
            >
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-9 h-9 rounded-lg bg-[#141414] border border-[#222222] text-[#888888] group-hover:text-[#F5F5F5] flex items-center justify-center shrink-0 transition-colors">
                  <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div class="min-w-0">
                  <span data-i18n="emailBtnLabel" class="block text-xs font-medium text-[#888888] group-hover:text-[#AAAAAA] transition-colors">Email</span>
                  <span dir="ltr" class="block font-mono text-[11px] sm:text-xs text-[#F5F5F5] truncate max-w-[190px] xs:max-w-[240px] sm:max-w-none" title="arch.ibrahim.najjar@gmail.com">arch.ibrahim.najjar@gmail.com</span>
                </div>
              </div>
              <span class="text-[#888888] group-hover:text-[#F5F5F5] text-sm">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="border-t border-[#1F1F1F] py-8">
    <div class="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
      <div class="flex flex-wrap items-center gap-4">
        <p data-i18n="footerCopy">© 2026 Arch. Ibrahim Al-Najjar. All rights reserved.</p>
        <a href="https://www.instagram.com/arch.ibrahim.najar?exln=MTMxNWlqYWYxNDQ0eg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F472B6] transition-colors">
          <svg class="w-3.5 h-3.5 text-[#E1306C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          <span>@arch.ibrahim.najar</span>
        </a>
      </div>
      <p data-i18n="footerTag" class="font-mono tracking-wider">ARCHITECTURAL STUDIO &amp; INSTRUCTION</p>
    </div>
  </footer>

  <!-- Vanilla JavaScript: Distinct Fallbacks, Course Drawer Accordion, & i18n -->
  <script>
    // DISTINCT Fallback SVGs for each course so they never get mixed up!
    window.__FALLBACK_IMAGES = {
      profile: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200"><rect width="200" height="200" fill="#141414"/><circle cx="100" cy="76" r="34" fill="#1F1F1F" stroke="#333" stroke-width="1.5"/><path d="M40 185 C40 138 160 138 160 185" fill="#1F1F1F" stroke="#333" stroke-width="1.5"/><text x="100" y="84" text-anchor="middle" fill="#F5F5F5" font-family="sans-serif" font-size="22" font-weight="700">IA</text></svg>\`),
      hero: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900"><rect width="1600" height="900" fill="#0D1117"/><rect x="260" y="290" width="920" height="40" fill="#1A1A1A"/><rect x="320" y="330" width="760" height="190" fill="#F5B05B" fill-opacity="0.25"/><rect x="200" y="520" width="1040" height="100" fill="#121212"/></svg>\`),
      work1: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600"><rect width="800" height="600" fill="#0D0D0D"/><polygon points="160,440 160,180 460,130 460,440" fill="#151515" stroke="#2A2A2A"/><polygon points="460,440 460,210 640,250 640,440" fill="#1B1B1B" stroke="#2E2E2E"/></svg>\`),
      work2: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600"><rect width="800" height="600" fill="#0B0E13"/><rect x="120" y="170" width="560" height="260" fill="#141820" stroke="#262B36"/></svg>\`),
      work3: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600"><rect width="800" height="600" fill="#0E0C0A"/><rect x="140" y="230" width="320" height="210" fill="#191614" stroke="#2C2623"/></svg>\`),

      // 1. Revit Distinct Fallbacks
      revit1: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0C131D"/><text x="400" y="260" text-anchor="middle" fill="#00E5FF" font-family="monospace" font-size="22" font-weight="700">REVIT BIM &amp; A0 SHEETS</text></svg>\`),
      revit2: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0C131D"/><text x="400" y="260" text-anchor="middle" fill="#00E5FF" font-family="monospace" font-size="22" font-weight="700">TECHNICAL DETAILING</text></svg>\`),
      revit3: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0B1119"/><text x="400" y="260" text-anchor="middle" fill="#6997D3" font-family="monospace" font-size="22" font-weight="700">MEGA INFRASTRUCTURE</text></svg>\`),
      revit4: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0F1218"/><text x="400" y="260" text-anchor="middle" fill="#5885C7" font-family="monospace" font-size="22" font-weight="700">PARAMETRIC MASSING</text></svg>\`),

      // 2. Photoshop Distinct Fallbacks
      ps1: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><defs><linearGradient id="psGlow" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#0E0C12"/><stop offset="60%" stop-color="#3D1D4A"/><stop offset="100%" stop-color="#803D70"/></linearGradient></defs><rect width="800" height="500" fill="url(#psGlow)"/><polygon points="140,420 280,180 520,180 660,420" fill="#120F17" stroke="#68316B" stroke-width="2"/><text x="400" y="270" text-anchor="middle" fill="#D98ED2" font-family="monospace" font-size="20" font-weight="700">PHOTOSHOP DUSK ATMOSPHERE</text></svg>\`),
      ps2: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#141118"/><rect x="100" y="80" width="600" height="340" fill="#201826" stroke="#54336B" stroke-width="2"/><circle cx="280" cy="220" r="80" fill="#914AA3" fill-opacity="0.3"/><text x="400" y="270" text-anchor="middle" fill="#E0A7ED" font-family="monospace" font-size="20">MASTERPLAN COLORIZATION</text></svg>\`),

      // 3. AutoCAD Distinct Fallbacks
      cad1: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#000000"/><text x="400" y="270" text-anchor="middle" fill="#00D2FF" font-family="monospace" font-size="20" font-weight="700">MEP &amp; HVAC SERVICES PLAN</text></svg>\`),
      cad2: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#000000"/><text x="400" y="270" text-anchor="middle" fill="#00E5FF" font-family="monospace" font-size="20" font-weight="700">STRUCTURAL CROSS SECTION</text></svg>\`),
      cad3: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#000000"/><text x="400" y="270" text-anchor="middle" fill="#00D2FF" font-family="monospace" font-size="20" font-weight="700">MASTER WORKING FLOOR PLAN</text></svg>\`),
      cad4: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#000000"/><text x="400" y="270" text-anchor="middle" fill="#00E5FF" font-family="monospace" font-size="20" font-weight="700">3D WIREFRAME AXONOMETRIC</text></svg>\`),

      // 4. Lumion Distinct Fallbacks
      lumion1: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#14110A"/><path d="M0 380 Q 200 310 400 360 T 800 340 L 800 500 L 0 500 Z" fill="#242012" stroke="#4D421F"/><rect x="240" y="220" width="320" height="140" fill="#3D3418" stroke="#8A7632"/><text x="400" y="290" text-anchor="middle" fill="#F0C954" font-family="monospace" font-size="20" font-weight="700">LUMION ENVIRONMENT &amp; SUN</text></svg>\`),
      lumion2: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0C140F"/><rect x="180" y="160" width="440" height="220" fill="#182A1F" stroke="#376648"/><circle cx="620" cy="120" r="45" fill="#E6C865" opacity="0.6"/><text x="400" y="280" text-anchor="middle" fill="#69D992" font-family="monospace" font-size="20">LUMION CINEMATIC NATURE</text></svg>\`),

      // 5. V-Ray Distinct Fallbacks
      vray1: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#101010"/><rect x="160" y="120" width="480" height="260" fill="#1E1E1E" stroke="#404040"/><circle cx="400" cy="240" r="70" fill="#2E2E2E" stroke="#F5A623" stroke-width="2"/><text x="400" y="248" text-anchor="middle" fill="#F5A623" font-family="monospace" font-size="18" font-weight="700">V-RAY PBR GLOBAL ILLUMINATION</text></svg>\`),
      vray2: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0C0E12"/><rect x="140" y="140" width="520" height="220" fill="#181D26" stroke="#333E50"/><rect x="220" y="200" width="120" height="160" fill="#E8B06B" fill-opacity="0.3"/><text x="400" y="250" text-anchor="middle" fill="#FFC87A" font-family="monospace" font-size="18">V-RAY INTERIOR WARM GLOW</text></svg>\`),

      // 6. Enscape Distinct Fallbacks
      enscape1: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0B1314"/><rect x="120" y="140" width="560" height="220" fill="#142629" stroke="#254B52"/><line x1="120" y1="200" x2="680" y2="200" stroke="#3A757F"/><line x1="300" y1="140" x2="300" y2="360" stroke="#3A757F"/><text x="400" y="260" text-anchor="middle" fill="#46C2D6" font-family="monospace" font-size="20" font-weight="700">ENSCAPE REAL-TIME VR WALK</text></svg>\`),
      enscape2: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#091517"/><rect x="160" y="120" width="480" height="260" fill="#11292D" stroke="#22535B"/><text x="400" y="260" text-anchor="middle" fill="#6EE7B7" font-family="monospace" font-size="18">ENSCAPE PANORAMA 360°</text></svg>\`),

      // Additional Featured Works Fallbacks
      more1: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#0A141F"/><rect x="220" y="100" width="360" height="420" fill="#102538" stroke="#1D4B70"/><line x1="280" y1="100" x2="280" y2="520" stroke="#00A2ED" stroke-width="1.5"/><line x1="340" y1="100" x2="340" y2="520" stroke="#00A2ED" stroke-width="1.5"/><line x1="400" y1="100" x2="400" y2="520" stroke="#00A2ED" stroke-width="1.5"/><line x1="460" y1="100" x2="460" y2="520" stroke="#00A2ED" stroke-width="1.5"/><line x1="520" y1="100" x2="520" y2="520" stroke="#00A2ED" stroke-width="1.5"/><text x="400" y="320" text-anchor="middle" fill="#38BDF8" font-family="monospace" font-size="20" font-weight="700">TOWER FACADE &amp; SHADING</text></svg>\`),
      more2: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#1A1015"/><circle cx="500" cy="220" r="100" fill="#F97316" fill-opacity="0.3"/><rect x="140" y="260" width="520" height="200" fill="#2E1B25" stroke="#68344D"/><text x="400" y="370" text-anchor="middle" fill="#F472B6" font-family="monospace" font-size="20" font-weight="700">COASTAL VILLA DUSK MATTE</text></svg>\`),
      more3: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#0D0708"/><g stroke="#EA212D" stroke-width="1.5"><rect x="160" y="140" width="480" height="340" fill="#1C0D10"/><rect x="320" y="240" width="160" height="180" stroke-dasharray="6 6"/><line x1="160" y1="310" x2="640" y2="310"/></g><text x="400" y="200" text-anchor="middle" fill="#FF6B7D" font-family="monospace" font-size="18" font-weight="700">HIGH-RISE CORE TECHNICAL PLAN</text></svg>\`),
      more4: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#0C140F"/><path d="M0 420 Q 300 320 800 460 L 800 600 L 0 600 Z" fill="#1B3024"/><rect x="180" y="200" width="380" height="180" fill="#16281E" stroke="#3D6B52"/><text x="400" y="300" text-anchor="middle" fill="#86EFAC" font-family="monospace" font-size="20" font-weight="700">WATERFRONT PROMENADE</text></svg>\`),
      more5: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#121212"/><rect x="140" y="100" width="520" height="400" fill="#1E1E1E" stroke="#333333"/><line x1="140" y1="100" x2="300" y2="240" stroke="#00C0F3" stroke-width="1.5"/><line x1="660" y1="100" x2="500" y2="240" stroke="#00C0F3" stroke-width="1.5"/><text x="400" y="340" text-anchor="middle" fill="#38BDF8" font-family="monospace" font-size="19" font-weight="700">MINIMALIST CONCRETE GALLERY</text></svg>\`),
      more6: "data:image/svg+xml;utf8," + encodeURIComponent(\`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#140E06"/><path d="M160 380 Q 400 120 640 380" stroke="#FF5400" stroke-width="3" fill="none"/><line x1="240" y1="380" x2="240" y2="240" stroke="#FFA200" stroke-width="1.5"/><line x1="320" y1="380" x2="320" y2="170" stroke="#FFA200" stroke-width="1.5"/><line x1="400" y1="380" x2="400" y2="150" stroke="#FFA200" stroke-width="1.5"/><line x1="480" y1="380" x2="480" y2="170" stroke="#FFA200" stroke-width="1.5"/><line x1="560" y1="380" x2="560" y2="240" stroke="#FFA200" stroke-width="1.5"/><text x="400" y="440" text-anchor="middle" fill="#FFB703" font-family="monospace" font-size="18" font-weight="700">PARAMETRIC TIMBER VR WALK</text></svg>\`)
    };

    var TRANSLATIONS = {
      en: {
        brand: "IBRAHIM AL-NAJJAR",
        navAbout: "About",
        navSoftware: "Software Ecosystem",
        navTeaching: "Teaching",
        navStudentWorks: "Student Works",
        navContact: "Let's talk",
        heroName: "Arch. Ibrahim Al-Najjar",
        heroLabel: "ARCHITECTURAL ENGINEER & EDUCATOR",
        heroMotto: "Thoughtful architecture. Knowledge worth sharing.",
        heroBio: "Architectural engineer and instructor with professional experience since 2023, having successfully trained over 600+ students worldwide. Specializing in transforming complex architectural concepts into high-end visual masterpieces using Revit, Photoshop, AutoCAD, Lumion, V-Ray, and Enscape.",
        heroBadge: "FORM / LIGHT / ATMOSPHERE",
        aboutHeading: "Good design begins with understanding.",
        aboutNarrative: "I'm Arch. Ibrahim Al-Najjar, an architectural engineer and dedicated educator. My journey in professional architectural training started in 2023, and since then, I’ve had the privilege of teaching and empowering over 600+ students and engineers worldwide. My approach bridges the gap between creative architectural design and precise technical execution. My mission is to help aspiring architects transform complex concepts into stunning, realistic visual stories through mastering the core software stack.",
        stat1Value: "Since 2023",
        stat1Desc: "Experience & Instruction",
        stat2Value: "600+",
        stat2Desc: "Students Worldwide",
        stat3Value: "6 Tools",
        stat3Desc: "BIM & Rendering Stack",
        ecosystemTitle: "Core Software Ecosystem",
        ecosystemDesc: "Click any software below to expand its full curriculum, view independent student projects, and see enrollment fees.",
        primaryWorksTitle: "A Selection of Our Distinctive Works",
        primaryWorksTag: "Curated Architectural & Visual Highlights",
        photosCountText: "3 PHOTOS",
        expandProjectPrompt: "Explore Project (3 Photos) ▼",
        toggleProjectBtn1: "Open / Close Project & Gallery (3 Photos)",
        toggleProjectBtn2: "Open / Close Project & Gallery (3 Photos)",
        toggleProjectBtn3: "Open / Close Project & Gallery (3 Photos)",
        mainShotLabel: "PRIMARY ELEVATION SHOT",
        subShotsLabel: "ANALYTICAL SUB-SHOTS (2 EQUAL VIEWS)",
        zoomPrompt: "🔍 View Full Resolution",
        projectOverviewLabel: "PROJECT GENERAL OVERVIEW",
        collapseProjectBtn: "▲ Collapse this project",
        saudiTowerBadge: "RESIDENTIAL TOWER & URBAN CONTEXT",
        saudiTowerTitle: "Contemporary Residential Tower - Saudi Arabia",
        saudiTowerGeneralDesc: "Integrated architectural design for a residential tower located at a pivotal intersection, combining modernist block massing with dark-grey facade finishes and vertical timber louvers.",
        saudiTowerGeneralDescFull: "Integrated architectural design for a residential tower located at a pivotal intersection, combining modernist block massing with carefully crafted dark-grey facade finishes and vertical timber louver accents.",
        saudiTowerMainTitle: "Vertical Facade Composition & Volumetric Detailing",
        saudiTowerMainDesc: "Close-up vertical perspective highlighting architectural facade treatment with dark grey massing contrast, vertical timber louvers, and projected balconies.",
        saudiTowerSub1Title: "Urban Context & Surrounding Perspective",
        saudiTowerSub1Desc: "Aerial perspective demonstrating tower placement at the pivotal intersection, traffic circulation, ground-level parking, and master landscaping.",
        saudiTowerSub2Title: "Analytical Structural Perspective & Spatial Layout",
        saudiTowerSub2Desc: "Spatial axonometric view illustrating the structural skeleton and volumetric mass of the tower alongside schematic floor plan layouts.",
        cliffsideBadge: "CANTILEVERED RESIDENCE & PACIFIC CLIFF",
        cliffsideGeneralDesc: "Contemporary cliffside residence anchored onto steep topography, featuring bold structural cantilevers and floor-to-ceiling glazing.",
        cliffsideGeneralDescFull: "Contemporary cliffside residence anchored onto steep topography, featuring bold structural cantilevers and floor-to-ceiling glazing connecting interior spaces to oceanic panoramic vistas.",
        cliffsideMainTitle: "Cantilevered Volume & Panoramic Ocean Glazing",
        cliffsideMainDesc: "Primary perspective illustrating balanced concrete volumes, minimalist structural joints, and transparent sea-facing facades.",
        cliffsideSub1Title: "Interior Lighting & Sunset Reflections",
        cliffsideSub1Desc: "Interactive daylight and warm ambient illumination study highlighting evening sky reflections.",
        cliffsideSub2Title: "Terrain Integration & Glazed Atrium",
        cliffsideSub2Desc: "Architectural visualization detailing structural anchorage into rock formation and pedestrian connection.",
        courtyardBadge: "COURTYARD VILLA & ARID LANDSCAPE",
        courtyardGeneralDesc: "Luxury residential villa inspired by vernacular environmental architecture and courtyard philosophy, utilizing natural stone and earth tones.",
        courtyardGeneralDescFull: "Luxury residential villa inspired by vernacular environmental architecture and courtyard philosophy, utilizing natural stone, local earth tones, and passive shaded volumes.",
        courtyardMainTitle: "Central Courtyard & Twilight Lighting Study",
        courtyardMainDesc: "Main viewpoint highlighting the tranquil central water court, textured masonry wall wash lighting, and twilight atmosphere.",
        courtyardSub1Title: "Desert Flora & Landscape Composition",
        courtyardSub1Desc: "Environmental landscape integration featuring indigenous desert palms, xeriscape plantings, and rustic stone pathways.",
        courtyardSub2Title: "Geometric Volumes & Shadow Play",
        courtyardSub2Desc: "Sun angle study highlighting deep overhangs and dynamic geometric shadow play for passive solar thermal mitigation.",
        work1Title: "Monolithic Cultural Pavilion",
        work1Sub: "BIM Massing · Dusk Atmospheric Study",
        work2Title: "Cantilevered Cliffside Residence",
        work2Sub: "Curtain Systems · Interior Illumination",
        work3Title: "Arid Stone Courtyard Villa",
        work3Sub: "Materiality · Twilight Post-Production",
        moreWorksBtn: "View More Featured Works",
        moreWorksTitle: "Additional Distinctive Architectural Works",
        moreWorksSub: "Advanced works in 3D BIM massing, working drawings, and architectural visualization",
        moreWorksBadge: "6 Additional Projects",
        studentShowcaseTag: "STUDENT PORTFOLIO SHOWCASE",
        studentShowcaseTitle: "Distinguished Student Works",
        studentShowcaseDesc: "Showcase of selected architectural projects crafted by our students across Revit, Photoshop, AutoCAD, Lumion, V-Ray, and Enscape.",
        studentShowcaseBadge: "6 Portfolio Slots",
        slotEmptyStatus: "Empty Project Slot",
        slotReadyText: "Ready for Submission",
        slot1Title: "Parametric BIM Residential Complex",
        slot1Sub: "Full architectural BIM modeling, curtain wall layouts, and schedules.",
        slot2Title: "Atmospheric Dusk Architectural Post-Production",
        slot2Sub: "Color grading, entourage, lighting enhancement, and competition board.",
        slot3Title: "Executive Working Drawings & Detailing",
        slot3Sub: "Multi-floor working drawings, dimensioning, coordination, and A0 plotting.",
        slot4Title: "Cinematic Exterior & Landscape Visualization",
        slot4Sub: "Photorealistic lighting, weather atmosphere, and dynamic nature.",
        slot5Title: "Interior Photorealism & Material Simulation",
        slot5Sub: "Accurate caustics, soft shadows, custom PBR textures, and night moods.",
        slot6Title: "Real-Time Walkthrough & Interactive Panorama",
        slot6Sub: "Instant rendering, sun angle study, and 360 client presentation.",
        moreWork1Title: "Commercial Tower Double-Skin Facade",
        moreWork1Sub: "Revit BIM Detailing · Solar Louver Study",
        moreWork2Title: "Coastal Pavilion Dusk Atmosphere",
        moreWork2Sub: "Photoshop Matte Painting · Warm Sunset Grading",
        moreWork3Title: "Mixed-Use High-Rise Technical Core",
        moreWork3Sub: "AutoCAD Working Drawings · Egress & Core Grids",
        moreWork4Title: "Urban Waterfront Public Promenade",
        moreWork4Sub: "Lumion Environment Dressing · Animated Lighting",
        moreWork5Title: "Minimalist Gallery Raw Concrete Space",
        moreWork5Sub: "V-Ray Photorealism · Natural Diffused Skylight",
        moreWork6Title: "Parametric Timber Pavilion VR Tour",
        moreWork6Sub: "Enscape Real-time Sync · 360 Client Panorama",
        heroBadgePill: "CERTIFIED ARCHITECTURAL EDUCATOR",
        viewProfilePrompt: "View Profile Photo",
        teachingHeading: "Teaching & Professional Curricula",
        teachingSub: "Click on any course card below to expand its full syllabus, transparent pricing fee, and dedicated student portfolio.",
        priceLabel: "Course Fee",
        enrollFeeNote: "Direct WhatsApp Enrollment",
        syllabusOverviewTitle: "SYLLABUS & WORKFLOW",
        revitTitle: "Autodesk Revit Architectural Masterclass",
        revitSummary: "كورس شامل يبدأ من الصفر حتى أعلى المستويات الاحترافية؛ لتعلم النمذجة المعمارية التفصيلية، وتصميم الكتل والأسقف المنحنية، وبناء العائلات البارامترية، وتجهيز كامل المخططات التنفيذية والطباعة.",
        revitFullDesc: "كورس شامل يبدأ من الصفر حتى أعلى المستويات الاحترافية؛ لتعلم النمذجة المعمارية التفصيلية، وتصميم الكتل والأسقف المنحنية، وبناء العائلات البارامترية، وتجهيز كامل المخططات التنفيذية والطباعة.",
        revitCurriculumHeading: "المحاور الدراسية (Curriculum)",
        enrollRevitNote: "تسجيل فوري واستفسار مباشر عبر واتساب",
        enrollRevit: "Enroll in Revit Masterclass ($40) →",
        revitWork1Title: "Mixed-Use High-Rise Tower & Executive Documentation",
        revitWork1Sub: "Parametric massing and integrated A0 sheet: 3D axonometric view, vertical building sections, and typical floor plans.",
        revitWork2Title: "Villa Working Drawings & Structural Detailing",
        revitWork2Sub: "Executive floor plan and detailed structural section showing insulation layers, concrete hatching, grid coordinates, and dimensions.",
        revitWork3Title: "Urban Transit Hub & Railway Terminal",
        revitWork3Sub: "Advanced architectural modeling for a mega railway station, steel trusses, and curtain wall grids.",
        revitWork4Title: "Cultural & Arts Center Complex",
        revitWork4Sub: "Parametric massing, organic double-curved roofs, and dynamic pedestrian ramps via Revit Massing.",
        psTitle: "Photoshop for Architecture (Post-Processing & Visualization)",
        psSummary: "دورة متخصصة لتعلم أساسيات الفوتوشوب وتطبيقاته المعمارية من الصفر؛ تشمل تقنيات القص والدمج الاحترافي، معالجة الرندرات والصور المعمارية، وإضافة التأثيرات الفنية والإضاءة للنصوص والإظهار النهائي.",
        psFullDesc: "دورة متخصصة لتعلم أساسيات الفوتوشوب وتطبيقاته المعمارية من الصفر؛ تشمل تقنيات القص والدمج الاحترافي، معالجة الرندرات والصور المعمارية، وإضافة التأثيرات الفنية والإضاءة للنصوص والإظهار النهائي.",
        psCurriculumHeading: "المحاور الدراسية (Curriculum)",
        enrollPsNote: "تسجيل فوري واستفسار مباشر عبر واتساب",
        enrollPs: "Enroll in Photoshop Course ($15) →",
        psDiscountBadge: "50% OFF",
        psWork1Title: "Cultural Center & Interactive Dusk Post-Production",
        psWork1Sub: "Advanced dusk atmosphere, pedestrian circulation, flow lines, and wireframe overlay.",
        psWork2Title: "Islamic Studies Center - Exterior Perspective",
        psWork2Sub: "Matte painting twilight sky, reflection pool balance, and targeted lighting on arches.",
        psWork3Title: "Fluid Architectural Museum Competition Sheet",
        psWork3Sub: "Blueprint-style competition board: fluid perspective, colored floor plans, and diagrams.",
        psWork4Title: "Cultural Arts & Media Center - Integrated Board",
        psWork4Sub: "Night facade render, vertical building section, and functional zoning floor plan.",
        cadTitle: "AutoCAD Architecture 2D Essentials",
        cadBadge: "LIMITED TIME / $5 OFFER",
        cadPriceLabel: "LIMITED TIME OFFER",
        cadSummary: "كورس شامل يبدأ من الصفر لتعلم أسس الرسم المعماري والتوثيق الهندسي وتجهيز المخططات التنفيذية والطباعة الاحترافية.",
        cadFullDesc: "كورس شامل يبدأ من الصفر لتعلم أسس الرسم المعماري والتوثيق الهندسي وتجهيز المخططات التنفيذية والطباعة الاحترافية.",
        cadCurriculumHeading: "Course Curriculum & Modules",
        enrollCadNote: "Direct WhatsApp Enrollment",
        enrollCad: "Enroll in AutoCAD Essentials ($5) →",
        cadWork1Title: "MEP & HVAC Technical Services Plan",
        cadWork1Sub: "Complex working layout detailing HVAC duct routing, electrical distributions, and lighting grids on pure black CAD background.",
        cadWork2Title: "Structural Cross Section & Detailing",
        cadWork2Sub: "Multi-story structural section showing foundation piles, floor slabs, level callouts, and column grid with high technical precision.",
        cadWork3Title: "Master Working Floor Plan & Layout",
        cadWork3Sub: "Comprehensive architectural plan with offices, conference rooms, service zones, furniture blocks, and technical legend tables.",
        cadWork4Title: "3D Wireframe Axonometric Projection",
        cadWork4Sub: "Geometric wireframe projection detailing steel structural frame, roof trusses, space frame framing, and structural skeleton.",
        lumionTitle: "Lumion Visualization & Animation",
        lumionSummary: "Environment dressing, realistic sunlight, weather systems, and smooth cinematic videos.",
        lumionFullDesc: "Rapid high-impact visualization: importing models from Revit/SketchUp, setting up customized materials, displacement mapping, landscape terrain painting, weather presets, cinematic camera sequencing, and 4K video exports.",
        enrollLumion: "Enroll Now ($140) →",
        lumionWork1Title: "Arid Stone Courtyard Villa",
        lumionWork1Sub: "Terrain Vegetation & Soft Twilight",
        lumionWork2Title: "Modern Residential Forest Villa",
        lumionWork2Sub: "Natural Grass Foliage & Sunset Sky",
        vrayTitle: "V-Ray Photorealism Engine",
        vraySummary: "Physically based PBR materials, global illumination, and high-end studio lighting realism.",
        vrayFullDesc: "Studio-grade architectural photography rendering: light cache, brute force GI calculations, advanced glass refraction, concrete and wood PBR shaders, artificial interior light balancing, HDRI domes, and render elements passes.",
        enrollVray: "Enroll Now ($160) →",
        vrayWork1Title: "Brutalist Concrete Pavilion",
        vrayWork1Sub: "Indirect Light Bounces & Concrete PBR",
        vrayWork2Title: "Interior Living Space Warm Light",
        vrayWork2Sub: "Recessed LEDs & Wood Reflections",
        enscapeTitle: "Enscape Real-Time Engine",
        enscapeSummary: "Live bidirectional sync with Revit, rapid client presentations, VR walkthroughs, and 360 panoramas.",
        enscapeFullDesc: "Real-time visualization workflow: configuring Enscape assets inside Revit, setting up artificial lighting temperatures, emissive surfaces, instant VR headset walkthroughs, standalone web exe files, and interactive 360-degree client links.",
        enrollEnscape: "Enroll Now ($130) →",
        enscapeWork1Title: "Cliffside Villa Live Walkthrough",
        enscapeWork1Sub: "Real-time Sky Reflection & Framing",
        enscapeWork2Title: "Glazed Atrium Direct Sun Walk",
        enscapeWork2Sub: "Dynamic Shadow Falloff & VR Asset",
        contactLabel: "LET'S TALK",
        contactHeading: "Ready to elevate your architectural workflow?",
        whatsappBtnLabel: "WhatsApp",
        instagramBtnLabel: "Follow on Instagram",
        emailBtnLabel: "Email",
        footerCopy: "© 2026 Arch. Ibrahim Al-Najjar. All rights reserved.",
        footerTag: "ARCHITECTURAL STUDIO & INSTRUCTION"
      },
      ar: {
        brand: "إبراهيم النجار",
        navAbout: "عن المدرب",
        navSoftware: "البرامج الهندسية",
        navTeaching: "التدريس",
        navStudentWorks: "أعمال الطلاب",
        navContact: "تواصل معنا",
        heroName: "المهندس إبراهيم النجار",
        heroLabel: "مهندس معماري ومدرّب محترف",
        heroMotto: "عمارة مدروسة. ومعرفة تستحق المشاركة.",
        heroBio: "مهندس معماري ومدرّب ذو خبرة احترافية منذ عام 2023، قام بتدريب وتأهيل أكثر من 600+ طالب ومهندس حول العالم. متخصص في تحويل الأفكار المعمارية المعقدة إلى لوحات بصرية استثنائية باستخدام Revit و Photoshop و AutoCAD و Lumion و V-Ray و Enscape.",
        heroBadge: "الكتلة / الضوء / الأجواء",
        aboutHeading: "التصميم الجيد يبدأ من الفهم العميق.",
        aboutNarrative: "أنا المهندس المعماري إبراهيم النجار، مهندس معماري ومدرّب شغوف بنقل المعرفة. بدأت رحلتي في التدريب المعماري الاحترافي عام 2023، ومنذ ذلك الحين تشرفت بتدريب وتمكين أكثر من 600+ طالب ومهندس حول العالم. يجمع منهجي بين الإبداع في التصميم المعماري والدقة الهندسية في التنفيذ، ورسالتي مساعدة المعماريين على تحويل مفاهيمهم إلى قصص واقعية مبهرة عبر إتقان حزمة البرامج الأساسية.",
        stat1Value: "منذ 2023",
        stat1Desc: "خبرة وتدريب معماري",
        stat2Value: "+600",
        stat2Desc: "طالب ومهندس حول العالم",
        stat3Value: "6 برامج",
        stat3Desc: "منظومة BIM وإظهار متكاملة",
        ecosystemTitle: "منظومة البرامج الهندسية المعتمدة",
        ecosystemDesc: "اضغط على أي برنامج أدناه ليفتح لك تفاصيل الكورس كاملة ومنهجه وأعمال الطلاب الخاصة به وسعر التسجيل.",
        primaryWorksTitle: "جزء من أعمالنا المميزة",
        primaryWorksTag: "نماذج ومخرجات معمارية وبصرية مختارة",
        photosCountText: "3 صور",
        expandProjectPrompt: "استعراض المشروع (3 صور) ▼",
        toggleProjectBtn1: "فتح / طي المشروع والمعرض (3 صور)",
        toggleProjectBtn2: "فتح / طي المشروع والمعرض (3 صور)",
        toggleProjectBtn3: "فتح / طي المشروع والمعرض (3 صور)",
        mainShotLabel: "الصورة الرئيسية (الواجهة الرأسية)",
        subShotsLabel: "اللقطات الفرعية (2 فرعيين بنفس الحجم)",
        zoomPrompt: "🔍 تكبير الصورة بدقة كاملة",
        projectOverviewLabel: "الوصف العام للمشروع",
        collapseProjectBtn: "▲ طي تفاصيل هذا المشروع",
        saudiTowerBadge: "RESIDENTIAL TOWER & URBAN CONTEXT",
        saudiTowerTitle: "برج سكني معاصر - المملكة العربية السعودية",
        saudiTowerGeneralDesc: "تصميم معماري متكامل لبرج سكني يقع على تقاطع محوري، يجمع بين كتل الأبسطة الحداثية وتشطيبات الواجهات المدروسة بدرجات الرمادي الداكن مع تفاصيل اللوفت الخشبية الرأسية.",
        saudiTowerGeneralDescFull: "تصميم معماري متكامل لبرج سكني يقع على تقاطع محوري، يجمع بين كتل الأبسطة الحداثية وتشطيبات الواجهات المدروسة بدرجات الرمادي الداكن مع تفاصيل اللوفت الخشبية الرأسية.",
        saudiTowerMainTitle: "واجهة التكوين الرأسي والتفاصيل الحجمية",
        saudiTowerMainDesc: "لقطة رأسية مقربة تبرز المعالجة المعمارية للواجهات باستخدام تباين كتل الرمادي الداكن مع اللمسات الخشبية الرأسية، وتوزيع الشرفات البارزة.",
        saudiTowerSub1Title: "السياق العمراني والمنظور المحيط",
        saudiTowerSub1Desc: "منظور جوي عام يوضح تموضع البرج عند التقاطع المحوري، مع دراسة حركة المرور، مواقف السيارات الأرضية، وتنسيق الموقع العام.",
        saudiTowerSub2Title: "المنظور الهيكلي التحليلي وتوزيع الفراغات",
        saudiTowerSub2Desc: "منظور هندسي فراغي يوضح الهيكل الإنشائي والكتلة الحجمية للبرج بجانب المخططات الأفقية التخطيطية.",
        cliffsideBadge: "CANTILEVERED RESIDENCE & PACIFIC CLIFF",
        cliffsideGeneralDesc: "تصميم فيلا جبلية معاصرة ترتكز على الجرف الصخري الحاد، تتميز بكتل طائرة (Cantilevers) جريئة وواجهات زجاجية ممتدة.",
        cliffsideGeneralDescFull: "تصميم فيلا جبلية معاصرة ترتكز على الجرف الصخري الحاد، تتميز بكتل طائرة (Cantilevers) جريئة وواجهات زجاجية ممتدة لدمج الفراغات الداخلية بالبانوراما الطبيعية المحيطة.",
        cliffsideMainTitle: "الكتلة الطائرة والواجهة الزجاجية المطلة",
        cliffsideMainDesc: "لقطة رئيسية توضح تراكب الكتل الخرسانية المصقولة مع الزجاج الممتد والتوازن الإنشائي فوق الجرف الصخري.",
        cliffsideSub1Title: "الإضاءة وانعكاسات المغيب",
        cliffsideSub1Desc: "دراسة تفاعلية للضوء الطبيعي والإنارة المخفية الدافئة مع انعكاس ألوان الغسق.",
        cliffsideSub2Title: "التكامل مع التضاريس والبهو",
        cliffsideSub2Desc: "منظور معماري يوضح كيفية تثبيت الأساسات في التكوين الصخري وربط الفراغات بمسارات خارجية طبيعية.",
        courtyardBadge: "COURTYARD VILLA & ARID LANDSCAPE",
        courtyardGeneralDesc: "فيلا سكنية فاخرة مستوحاة من العمارة البيئية وفلسفة الفناء الداخلي، تستخدم الأحجار الطبيعية والخامات الترابية.",
        courtyardGeneralDescFull: "فيلا سكنية فاخرة مستوحاة من العمارة البيئية وفلسفة الفناء الداخلي، تستخدم الأحجار الطبيعية وخامات خرسانية ترابية للاندماج المتكامل مع البيئة الصحراوية المحيطة.",
        courtyardMainTitle: "الفناء الداخلي والمعالجة الضوئية الليلية",
        courtyardMainDesc: "لقطة رئيسية توضح الفناء المائي المفتوح ومحاكاة الإضاءة الخافتة على الكتل الحجرية في أجواء الغسق الهادئة.",
        courtyardSub1Title: "الغطاء النباتي الصحراوي",
        courtyardSub1Desc: "تنسيق موقع بيئي مدروس يضم أشجار النخيل والنباتات الصحراوية مع ممرات حجرية منسجمة مع تدرجات الرمال.",
        courtyardSub2Title: "الكتل والظلال النهارية",
        courtyardSub2Desc: "دراسة حركة الشمس والظلال العميقة على الفتحات المعمارية لتقليل الحرارة وتعزيز الراحة البصرية.",
        work1Title: "جناح ثقافي خرساني معاصر",
        work1Sub: "تشكيل الكتل BIM · دراسة أجواء الغسق",
        work2Title: "فيلا معلّقة على الجرف الصخري",
        work2Sub: "أنظمة الواجهات الزجاجية · الإضاءة الداخلية",
        work3Title: "فيلا الفناء الحجري الصحراوي",
        work3Sub: "دراسة الخامات · معالجة ليلية في فوتوشوب",
        moreWorksBtn: "المزيد من الأعمال المميزة",
        moreWorksTitle: "المزيد من أعمالنا المعمارية المميزة",
        moreWorksSub: "مشاريع متقدمة لطلابنا في النمذجة ثلاثية الأبعاد والمخططات التنفيذية والإخراج المعماري",
        moreWorksBadge: "6 مشاريع إضافية",
        studentShowcaseTag: "معرض مخرجات التدريب الاحترافي",
        studentShowcaseTitle: "أعمال الطلاب المتميزة",
        studentShowcaseDesc: "نماذج ومشاريع معمارية متقدمة من إبداع طلابنا وخريجي دوراتنا في برامج Revit و Photoshop و AutoCAD و Lumion و V-Ray و Enscape.",
        studentShowcaseBadge: "6 مساحات مخصصة للأعمال",
        slotEmptyStatus: "مساحة عمل جاهزة للإضافة",
        slotReadyText: "جاهز لرفع العمل",
        slot1Title: "مجمع سكني بارامتري متكامل (Revit BIM)",
        slot1Sub: "نمذجة معمارية متقدمة، جداول حصر، وتفاصيل الواجهات الزجاجية.",
        slot2Title: "إظهار معماري مسائي ولوحة مسابقات (Photoshop)",
        slot2Sub: "معالجة الغسق، دمج العناصر، وضبط الإنارة التفاعلية للكتل.",
        slot3Title: "مخططات تنفيذية وتفاصيل معمارية (AutoCAD)",
        slot3Sub: "مساقط ومقاطع تنفيذية مع الأبعاد والمحاور وتجهيز شيتات الطباعة.",
        slot4Title: "إخراج سينمائي خارجي وبيئي (Lumion)",
        slot4Sub: "محاكاة واقعية للإنارة والمواد وحركة الأشجار والأجواء الطبيعية.",
        slot5Title: "ريندر داخلي فوتورياليستك عالي الدقة (V-Ray)",
        slot5Sub: "ضبط الإضاءة غير المباشرة وخامات PBR وظلال ناعمة واقعية.",
        slot6Title: "جولة افتراضية تفاعلية وفورية (Enscape)",
        slot6Sub: "إخراج لحظي سريع، دراسة حركة الشمس، وعرض 360 للعملاء.",
        moreWork1Title: "واجهة برج تجاري مزدوجة القشرة",
        moreWork1Sub: "تفاصيل ريفيت BIM · دراسة كاسرات الشمس",
        moreWork2Title: "جناح ساحلي بأجواء الغروب",
        moreWork2Sub: "مات بينتينغ فوتوشوب · تدرج لوني سينمائي دافئ",
        moreWork3Title: "نواة برج عالي وتفاصيل تنفيذية",
        moreWork3Sub: "مخططات تنفيذية أوتوكاد · مخارج الهروب والمسارات",
        moreWork4Title: "واجهة مائية ومخطط عام بيئي",
        moreWork4Sub: "إخراج لوميون · انعكاسات مائية وحركة طبيعية",
        moreWork5Title: "معرض فنون خرساني مينيماليست",
        moreWork5Sub: "ريندر فيري متقدم · محاكاة الضوء الطبيعي والخرسانة",
        moreWork6Title: "جناح خشبي بارامتري بتقنية VR",
        moreWork6Sub: "تجول لحظي إنسكيب · ظلال تفاعلية سريعة",
        heroBadgePill: "الهوية المعمارية والمدرب المعتمد",
        viewProfilePrompt: "عرض الصورة والملف التعريفي",
        teachingHeading: "التدريس والمناهج الاحترافية",
        teachingSub: "اضغط على أي كورس أدناه لتمديده وعرض تفاصيله الكاملة، سعر الكورس، ومعرض أعمال الطلاب المستقل الخاص به.",
        priceLabel: "سعر الكورس",
        enrollFeeNote: "تسجيل فوري واستفسار عبر واتساب",
        syllabusOverviewTitle: "منهج الكورس وسير العمل",
        revitTitle: "Autodesk Revit Architectural Masterclass",
        revitSummary: "كورس شامل يبدأ من الصفر حتى أعلى المستويات الاحترافية؛ لتعلم النمذجة المعمارية التفصيلية، وتصميم الكتل والأسقف المنحنية، وبناء العائلات البارامترية، وتجهيز كامل المخططات التنفيذية والطباعة.",
        revitFullDesc: "كورس شامل يبدأ من الصفر حتى أعلى المستويات الاحترافية؛ لتعلم النمذجة المعمارية التفصيلية، وتصميم الكتل والأسقف المنحنية، وبناء العائلات البارامترية، وتجهيز كامل المخططات التنفيذية والطباعة.",
        revitCurriculumHeading: "المحاور الدراسية (Curriculum)",
        enrollRevitNote: "تسجيل فوري واستفسار مباشر عبر واتساب",
        enrollRevit: "Enroll in Revit Masterclass ($40) ←",
        revitWork1Title: "مجمع البرج متعدد الاستخدامات والتوثيق التنفيذي",
        revitWork1Sub: "نمذجة بارامترية لكتلة البرج واستخراج شيت A0 متكامل يضم المنظور الأكسونومتري، المقاطع الرأسية، والمساقط المتطابقة.",
        revitWork2Title: "المخططات التنفيذية والتفاصيل الإنشائية للفيلا",
        revitWork2Sub: "إعداد المسقط الأفقي التنفيذي ومقطع رأسي تفصيلي يوضح طبقات العزل وتهشير الخرسانة وتنسيق المحاور والأبعاد.",
        revitWork3Title: "مجمع النقل الحضري ومحطة القطارات",
        revitWork3Sub: "نمذجة معمارية متقدمة لهيكل المحطة، الجمالونات المعدنية، وشبكات الواجهات الستائرية.",
        revitWork4Title: "مجمع المركز الثقافي والفنون",
        revitWork4Sub: "تطبيق أدوات التشكيل الكتلي الحر والأسطح المنحنية والمنحدرات البانورامية.",
        psTitle: "Photoshop for Architecture (Post-Processing & Visualization)",
        psSummary: "دورة متخصصة لتعلم أساسيات الفوتوشوب وتطبيقاته المعمارية من الصفر؛ تشمل تقنيات القص والدمج الاحترافي، معالجة الرندرات والصور المعمارية، وإضافة التأثيرات الفنية والإضاءة للنصوص والإظهار النهائي.",
        psFullDesc: "دورة متخصصة لتعلم أساسيات الفوتوشوب وتطبيقاته المعمارية من الصفر؛ تشمل تقنيات القص والدمج الاحترافي، معالجة الرندرات والصور المعمارية، وإضافة التأثيرات الفنية والإضاءة للنصوص والإظهار النهائي.",
        psCurriculumHeading: "المحاور الدراسية (Curriculum)",
        enrollPsNote: "تسجيل فوري واستفسار مباشر عبر واتساب",
        enrollPs: "Enroll in Photoshop Course ($15) ←",
        psDiscountBadge: "حسم 50%",
        psWork1Title: "المركز الثقافي ومعالجة الغسق التفاعلية",
        psWork1Sub: "معالجة متقدمة لأجواء الغسق والإنارة الدافئة مع دمج حركة المشاة ورسم خطوط المسارات المعمارية وشبكة الـ Wireframe فوق الرندر.",
        psWork2Title: "مركز الدراسات الإسلامية - المنظور الخارجي",
        psWork2Sub: "تقنيات الـ Matte Painting المتقدمة لمعالجة السماء الدرامية، وضبط الانعكاسات على المسطح المائي، وتوزيع الإضاءة الموجهة على الأقواس والعناصر التراثية.",
        psWork3Title: "لوحة مسابقة المتحف المعماري الانسيابي",
        psWork3Sub: "إعداد شيت مسابقات متكامل بنمط الـ Blueprint يجمع بين اللقطة المنظورية للكتلة الانسيابية، المسقط الملون، ودياجرامات التشكيل الفراغي.",
        psWork4Title: "مركز الفنون والإعلام - لوحة العرض المتكاملة",
        psWork4Sub: "تنسيق لوحة هندسية تجمع لقطة ليلية للواجهات والزجاج، مقطعاً رأسياً تفصيلياً يوضح المستويات، ومسقطاً معمارياً ملوناً يوضح التوزيع الوظيفي.",
        cadTitle: "AutoCAD Architecture 2D Essentials",
        cadBadge: "عرض لفترة محدودة · $5",
        cadPriceLabel: "عرض لفترة محدودة",
        cadSummary: "كورس شامل يبدأ من الصفر لتعلم أسس الرسم المعماري والتوثيق الهندسي وتجهيز المخططات التنفيذية والطباعة الاحترافية.",
        cadFullDesc: "كورس شامل يبدأ من الصفر لتعلم أسس الرسم المعماري والتوثيق الهندسي وتجهيز المخططات التنفيذية والطباعة الاحترافية.",
        cadCurriculumHeading: "المحاور الدراسية (Curriculum)",
        enrollCadNote: "تسجيل فوري واستفسار مباشر عبر واتساب",
        enrollCad: "سجّل في كورس الأوتوكاد ($5) ←",
        cadWork1Title: "مخطط التمديدات الميكانيكية والكهربائية (HVAC & MEP)",
        cadWork1Sub: "مخطط تنفيذي معقد يوضح شبكات التكييف، التهوية، مسارات مجاري الهواء (Ducts)، والتمديدات الكهربائية والإضاءة على خلفية كاد داكنة.",
        cadWork2Title: "القطاع الرأسي التنفيذي والتوثيق الإنشائي",
        cadWork2Sub: "مقطع رأسي هندسي متعدد الطوابق يوضح تفاصيل الأساسات، بلاطات الأسقف، مناسيب الطوابق، وشبكة المحاور بدقة تقنية عالية.",
        cadWork3Title: "المسقط الأفقي التنفيذي وتوزيع الفراغات",
        cadWork3Sub: "مسقط معماري شامل يضم المكاتب، قاعات المؤتمرات، الفراغات الخدمية، كتل الأثاث، ومفاتيح الرموز (Legend) التنفيذية.",
        cadWork4Title: "الإسقاط الأكسونومتري الهيكلي ثلاثي الأبعاد",
        cadWork4Sub: "منظور شبكي هندسي (Wireframe) يوضح الهيكل الإنشائي الفولاذي، الجمالونات المعدنية، وعناصر الإطار الإنشائي للمبنى.",
        lumionTitle: "اللوميون والإخراج السينمائي (Lumion)",
        lumionSummary: "بناء البيئات والمناظر، محاكاة الشمس والطقس، وحركة الكاميرات السينمائية السريعة.",
        lumionFullDesc: "الإخراج السريع فائق الجمال: استيراد النماذج من ريفيت، إعداد الخامات الواقعية، فرش التضاريس الطبيعية، محاكاة الإضاءة النهارية والغسق، وإخراج فيديوهات سينمائية بدقة 4K.",
        enrollLumion: "سجّل الآن ($140) ←",
        lumionWork1Title: "فيلا الفناء الحجري والبيئة الطبيعية",
        lumionWork1Sub: "توزيع الإضاءة وتضاريس الموقع",
        lumionWork2Title: "فيلا معاصرة وسط الغابة",
        lumionWork2Sub: "واقعية الخضار وأشعة الغروب",
        vrayTitle: "الفيري والريندر الواقعي (V-Ray)",
        vraySummary: "الريندر الفيزيائي المتقدم، خامات PBR الواقعية، والإضاءة الاستوديو الداخلية والخارجية.",
        vrayFullDesc: "الريندر المعماري عالي الدقة القائم على فيزياء الضوء الحقيقية: الحسابات الفيزيائية للضوء، خامات الخرسانة والخشب الواقعية، موازنة الإضاءة الداخلية، وخلفيات الـ HDRI بجودة استوديوهات عالمية.",
        enrollVray: "سجّل الآن ($160) ←",
        vrayWork1Title: "جناح خرساني بروتالي فائق الواقعية",
        vrayWork1Sub: "إضاءة غير مباشرة وخامات خرسانية دقيقة",
        vrayWork2Title: "فراغ معيشي دافئ بإضاءة ليلية",
        vrayWork2Sub: "انعكاسات الخشب والإنارة المخفية",
        enscapeTitle: "الانسكيب والإظهار اللحظي (Enscape)",
        enscapeSummary: "الربط المباشر مع ريفيت، عروض الزبائن الفورية، التجول بالواقع الافتراضي VR، وبانوراما 360.",
        enscapeFullDesc: "سير عمل الإظهار اللحظي: ضبط عناصر إنسكيب داخل ريفيت مباشرة، تحديد حرارة الإضاءة، التجول الفوري بنظارات الواقع الافتراضي (VR)، وتصدير روابط البانوراما التفاعلية للعملاء خلال ثوانٍ.",
        enrollEnscape: "سجّل الآن ($130) ←",
        enscapeWork1Title: "جولة تفاعلية حية لفيلا جبلية",
        enscapeWork1Sub: "إظهار لحظي لانعكاسات السماء والكتل",
        enscapeWork2Title: "بهو زجاجي بإضاءة شمسية تفاعلية",
        enscapeWork2Sub: "الظلال الناعمة وتجول الـ VR الفوري",
        contactLabel: "لنتحدث",
        contactHeading: "هل أنت مستعد للارتقاء بسير عملك المعماري؟",
        whatsappBtnLabel: "واتساب",
        instagramBtnLabel: "تابعنا على إنستغرام",
        emailBtnLabel: "البريد الإلكتروني",
        footerCopy: "© 2026 المهندس المعماري إبراهيم النجار. جميع الحقوق محفوظة.",
        footerTag: "استوديو العمارة والتدريب الهندسي"
      }
    };

    var currentLang = 'en';
    var langBtn = document.getElementById('lang-toggle-btn');
    var langLabel = document.getElementById('lang-toggle-label');

    function setLanguage(lang) {
      currentLang = lang;
      var dict = TRANSLATIONS[lang];
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

      if (langLabel) {
        langLabel.textContent = lang === 'en' ? 'العربية' : 'EN';
      }

      document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (dict && dict[key]) {
          el.textContent = dict[key];
        }
      });
    }

    if (langBtn) {
      langBtn.addEventListener('click', function () {
        setLanguage(currentLang === 'en' ? 'ar' : 'en');
      });
    }

    // Toggle and expand/collapse courses
    window.toggleCourse = function (trackId) {
      var drawer = document.getElementById('drawer-' + trackId);
      var card = document.getElementById(trackId);
      if (!drawer) return;
      var isOpen = drawer.classList.contains('open');
      var icon = card.querySelector('.toggle-icon');

      if (isOpen) {
        drawer.classList.remove('open');
        if (icon) icon.textContent = '+';
      } else {
        drawer.classList.add('open');
        if (icon) icon.textContent = '−';
      }
    };

    // Open course and smooth scroll to it
    window.openAndScrollCourse = function (trackId) {
      var drawer = document.getElementById('drawer-' + trackId);
      var card = document.getElementById(trackId);
      if (drawer) {
        drawer.classList.add('open');
        var icon = card.querySelector('.toggle-icon');
        if (icon) icon.textContent = '−';
      }
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    // Toggle Additional Featured Student Works Drawer
    window.toggleMoreWorks = function () {
      var drawer = document.getElementById('more-works-drawer');
      var arrow = document.getElementById('more-works-arrow');
      if (!drawer) return;
      var isHidden = drawer.classList.contains('hidden');
      if (isHidden) {
        drawer.classList.remove('hidden');
        if (arrow) arrow.style.transform = 'rotate(180deg)';
      } else {
        drawer.classList.add('hidden');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      }
    };

    // Toggle Studio Project Gallery
    window.toggleStudioProject = function (projId) {
      var details = document.getElementById('details-' + projId);
      var arrow = document.getElementById('arrow-' + projId);
      if (!details) return;
      var isHidden = details.classList.contains('hidden');
      if (isHidden) {
        details.classList.remove('hidden');
        if (arrow) arrow.style.transform = 'rotate(180deg)';
      } else {
        details.classList.add('hidden');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      }
    };

    // Mobile Menu Toggle
    var mobileBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener('click', function () {
        var isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
          mobileBtn.setAttribute('aria-expanded', 'true');
        } else {
          mobileMenu.classList.add('hidden');
          mobileBtn.setAttribute('aria-expanded', 'false');
        }
      });

      document.querySelectorAll('.mobile-nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileMenu.classList.add('hidden');
          mobileBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // Lightbox Modal Controller
    window.openLightbox = function (src, title, subtitle, tag) {
      var modal = document.getElementById('lightbox-modal');
      var img = document.getElementById('lightbox-img');
      var titleEl = document.getElementById('lightbox-title');
      var subEl = document.getElementById('lightbox-subtitle');
      var tagEl = document.getElementById('lightbox-tag');
      if (!modal || !img) return;
      img.src = src;
      if (titleEl) titleEl.textContent = title || '';
      if (subEl) subEl.textContent = subtitle || '';
      if (tagEl) tagEl.textContent = tag || '';
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function () {
      var modal = document.getElementById('lightbox-modal');
      if (!modal) return;
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    };
  </script>

  <!-- LIGHTBOX MODAL -->
  <div
    id="lightbox-modal"
    class="fixed inset-0 z-50 bg-black/92 backdrop-blur-md hidden items-center justify-center p-3 sm:p-6 select-none"
    onclick="closeLightbox()"
  >
    <div
      class="max-w-4xl w-full bg-[#12161F] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
      onclick="event.stopPropagation()"
    >
      <div class="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#1F2733] bg-[#0E131C]">
        <div>
          <span id="lightbox-tag" class="font-mono text-[11px] text-cyan-400 font-semibold tracking-wider uppercase"></span>
          <h3 id="lightbox-title" class="text-base sm:text-lg font-bold text-[#F5F5F5] mt-0.5"></h3>
        </div>
        <button
          type="button"
          onclick="closeLightbox()"
          aria-label="Close"
          class="p-2 text-[#888888] hover:text-[#F5F5F5] hover:bg-[#1a2332] rounded-lg border border-[#1F2733] cursor-pointer"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="w-full bg-[#070A0F] p-2 sm:p-4 flex items-center justify-center min-h-[280px] max-h-[72vh] overflow-hidden">
        <img
          id="lightbox-img"
          src=""
          alt=""
          class="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-md"
        />
      </div>
      <div class="px-5 sm:px-6 py-3.5 text-xs sm:text-[13px] text-[#CBD5E1] border-t border-[#1F2733] bg-[#0E131C] leading-relaxed">
        <span id="lightbox-subtitle"></span>
      </div>
    </div>
  </div>
</body>
</html>`;
