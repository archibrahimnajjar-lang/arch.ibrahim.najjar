/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import {
  ArrowDown,
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  Award,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Instagram,
  Lock,
  Mail,
  Maximize2,
  Menu,
  Plus,
  Sparkles,
  X,
} from 'lucide-react';

const INSTAGRAM_URL =
  'https://www.instagram.com/arch.ibrahim.najar?exln=MTMxNWlqYWYxNDQ0eg%3D%3D&utm_source=qr';

type Language = 'en' | 'ar';
type ImageSlotKey =
  | 'profile'
  | 'hero'
  | 'work1'
  | 'work2'
  | 'work3'
  | 'more1'
  | 'more2'
  | 'more3'
  | 'more4'
  | 'more5'
  | 'more6'
  | 'revit1'
  | 'revit2'
  | 'revit3'
  | 'revit4'
  | 'ps1'
  | 'ps2'
  | 'ps3'
  | 'ps4'
  | 'cad1'
  | 'cad2'
  | 'cad3'
  | 'cad4'
  | 'lumion1'
  | 'lumion2'
  | 'vray1'
  | 'vray2'
  | 'enscape1'
  | 'enscape2';

interface SoftwareTrack {
  id: string;
  orderNumber: string;
  name: string;
  price: string;
  isFree?: boolean;
  isComingSoon?: boolean;
  badge?: { en: string; ar: string };
  title: { en: string; ar: string };
  summary: { en: string; ar: string };
  fullDescription: { en: string; ar: string };
  modules?: Array<{
    id: string;
    number: string;
    title: { en: string; ar: string };
    points: { en: string[]; ar: string[] };
  }>;
  ctaText: { en: string; ar: string };
  ctaLink: string;
  works: Array<{
    id: string;
    imageKey: ImageSlotKey;
    defaultSrc: string;
    fallbackSrc?: string;
    fit?: 'contain' | 'cover';
    aspectRatioClass?: string;
    title: { en: string; ar: string };
    subtitle: { en: string; ar: string };
    tag: string;
  }>;
}

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm5.78 14.15c-.24.67-1.39 1.29-1.93 1.37-.5.08-1.14.12-3.7-0.94-3.27-1.36-5.38-4.66-5.54-4.88-.16-.22-1.34-1.78-1.34-3.4 0-1.62.85-2.42 1.15-2.75.3-.33.66-.41.88-.41.22 0 .44 0 .63.01.21.01.48-.08.75.57.28.67.95 2.33 1.03 2.5.08.17.13.37.02.6-.11.23-.17.37-.34.57-.17.2-.36.44-.51.59-.17.17-.35.36-.15.7.2.34.89 1.47 1.91 2.38 1.31 1.17 2.42 1.53 2.76 1.7.34.17.54.14.74-.08.2-.22.86-.99 1.09-1.33.23-.34.46-.28.77-.17.31.11 1.97.93 2.31 1.1.34.17.57.25.65.39.08.14.08.82-.16 1.49z" />
    </svg>
  );
}

const SOFTWARE_LOGO_CONFIG: Record<
  string,
  {
    primarySrc: string;
    fallbackSrc: string;
    alt: string;
    glowBorder: string;
  }
> = {
  Revit: {
    primarySrc: './revit-logo.jpg',
    fallbackSrc: './assets/aistudio/revit-logo_3978ae19.jpg',
    alt: 'Autodesk Revit',
    glowBorder: 'border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_14px_rgba(6,182,212,0.35)]',
  },
  Photoshop: {
    primarySrc: './photo-logo.jpg',
    fallbackSrc: './assets/aistudio/photo-logo_d9bb2ce1.jpg',
    alt: 'Adobe Photoshop',
    glowBorder: 'border-blue-500/40 group-hover:border-blue-400 group-hover:shadow-[0_0_14px_rgba(59,130,246,0.35)]',
  },
  AutoCAD: {
    primarySrc: './cad-logo.jpg',
    fallbackSrc: './assets/aistudio/cad-logo_1f70cc81.jpg',
    alt: 'Autodesk AutoCAD',
    glowBorder: 'border-red-500/40 group-hover:border-red-400 group-hover:shadow-[0_0_14px_rgba(239,68,68,0.35)]',
  },
  Lumion: {
    primarySrc: './lumion-logo.jpg',
    fallbackSrc: './assets/aistudio/lumion-logo_e2d1d791.jpg',
    alt: 'Act-3D Lumion',
    glowBorder: 'border-[#345D6F]/50 group-hover:border-[#78b7d4] group-hover:shadow-[0_0_14px_rgba(52,93,111,0.5)]',
  },
  'V-Ray': {
    primarySrc: './vray-logo.jpg',
    fallbackSrc: './assets/aistudio/vray-logo_e091105e.jpg',
    alt: 'Chaos V-Ray',
    glowBorder: 'border-blue-500/40 group-hover:border-blue-400 group-hover:shadow-[0_0_14px_rgba(59,130,246,0.35)]',
  },
  Enscape: {
    primarySrc: './enscape-logo.jpg',
    fallbackSrc: './assets/aistudio/enscape-logo_3537473a.jpg',
    alt: 'Chaos Enscape',
    glowBorder: 'border-amber-500/40 group-hover:border-amber-400 group-hover:shadow-[0_0_14px_rgba(245,158,11,0.35)]',
  },
};

function SoftwareLogo({ name, size = 'default' }: { name: string; size?: 'sm' | 'default' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-7 h-7 rounded-lg',
    default: 'w-9 h-9 rounded-xl',
    lg: 'w-11 h-11 sm:w-12 sm:h-12 rounded-xl',
  }[size];

  const config = SOFTWARE_LOGO_CONFIG[name];
  if (!config) return null;

  return (
    <div
      className={`${sizeClasses} overflow-hidden bg-[#0A0A0A] border ${config.glowBorder} flex items-center justify-center shrink-0 shadow-sm relative transition-all duration-300`}
      title={config.alt}
    >
      <img
        src={config.primarySrc}
        alt={config.alt}
        className="w-full h-full object-cover rounded-[inherit] transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          const target = e.currentTarget;
          if (!target.src.includes(config.fallbackSrc)) {
            target.src = config.fallbackSrc;
          }
        }}
      />
    </div>
  );
}

const SOFTWARE_TRACKS: SoftwareTrack[] = [
  // 1. REVIT (AUTODESK REVIT ARCHITECTURAL MASTERCLASS)
  {
    id: 'track-revit',
    orderNumber: '01',
    name: 'Revit',
    price: '$40',
    badge: {
      en: 'BEGINNER TO ADVANCED',
      ar: 'BEGINNER TO ADVANCED',
    },
    title: {
      en: 'Autodesk Revit Architectural Masterclass',
      ar: 'Autodesk Revit Architectural Masterclass',
    },
    summary: {
      en: 'كورس شامل يبدأ من الصفر حتى أعلى المستويات الاحترافية؛ لتعلم النمذجة المعمارية التفصيلية، وتصميم الكتل والأسقف المنحنية، وبناء العائلات البارامترية، وتجهيز كامل المخططات التنفيذية والطباعة.',
      ar: 'كورس شامل يبدأ من الصفر حتى أعلى المستويات الاحترافية؛ لتعلم النمذجة المعمارية التفصيلية، وتصميم الكتل والأسقف المنحنية، وبناء العائلات البارامترية، وتجهيز كامل المخططات التنفيذية والطباعة.',
    },
    fullDescription: {
      en: 'كورس شامل يبدأ من الصفر حتى أعلى المستويات الاحترافية؛ لتعلم النمذجة المعمارية التفصيلية، وتصميم الكتل والأسقف المنحنية، وبناء العائلات البارامترية، وتجهيز كامل المخططات التنفيذية والطباعة.',
      ar: 'كورس شامل يبدأ من الصفر حتى أعلى المستويات الاحترافية؛ لتعلم النمذجة المعمارية التفصيلية، وتصميم الكتل والأسقف المنحنية، وبناء العائلات البارامترية، وتجهيز كامل المخططات التنفيذية والطباعة.',
    },
    modules: [
      {
        id: 'revit-mod-01',
        number: 'Module 01',
        title: {
          en: 'تهيئة بيئة العمل وضبط المخططات (Setup & Data Import)',
          ar: 'تهيئة بيئة العمل وضبط المخططات (Setup & Data Import)',
        },
        points: {
          en: [
            'التعرف على واجهة المستخدم وإدارة قوائم ونوافذ البرنامج (Intro to Revit User Interface).',
            'استيراد وتجهيز المخططات، ملفات الأوتوكاد، والصور المرجعية لضبط المحاور والمناسيب (Importing plans, CAD files, Images).',
          ],
          ar: [
            'التعرف على واجهة المستخدم وإدارة قوائم ونوافذ البرنامج (Intro to Revit User Interface).',
            'استيراد وتجهيز المخططات، ملفات الأوتوكاد، والصور المرجعية لضبط المحاور والمناسيب (Importing plans, CAD files, Images).',
          ],
        },
      },
      {
        id: 'revit-mod-02',
        number: 'Module 02',
        title: {
          en: 'النمذجة المعمارية الشاملة (Basic & Advanced Architectural Elements)',
          ar: 'النمذجة المعمارية الشاملة (Basic & Advanced Architectural Elements)',
        },
        points: {
          en: [
            'بناء وتعديل العناصر المعمارية الأساسية بدقة: الجدران، الأبواب، والنوافذ (Basic Modeling: Walls, Doors, Windows).',
            'نمذجة العناصر المتقدمة والأنظمة المركبة: الأسقف المستعارة، الأرضيات، والأدراج والدرابزينات المعقدة (Ceilings, Floors, Stairs & Railings).',
            'تصميم وتخصيص المشاريع الفريدة، الديكورات والتفاصيل الخاصة (Component: Unique Projects, Decoration, Details).',
          ],
          ar: [
            'بناء وتعديل العناصر المعمارية الأساسية بدقة: الجدران، الأبواب، والنوافذ (Basic Modeling: Walls, Doors, Windows).',
            'نمذجة العناصر المتقدمة والأنظمة المركبة: الأسقف المستعارة، الأرضيات، والأدراج والدرابزينات المعقدة (Ceilings, Floors, Stairs & Railings).',
            'تصميم وتخصيص المشاريع الفريدة، الديكورات والتفاصيل الخاصة (Component: Unique Projects, Decoration, Details).',
          ],
        },
      },
      {
        id: 'revit-mod-03',
        number: 'Module 03',
        title: {
          en: 'الكتل الحرة والعائلات المعمارية (Massing & Parametric Families)',
          ar: 'الكتل الحرة والعائلات المعمارية (Massing & Parametric Families)',
        },
        points: {
          en: [
            'دراسة وتشكيل الكتل المعمارية المعقدة والأسقف الحرة والمنحنية (Massing: Organic Projects & Curved Roofs).',
            'احتراف إنشاء وتحميل وتعديل الفاميليز المعمارية البارامترية (Families: Creating, Loading, Editing).',
            'إدراج وضبط كتل الفرش وإعداداتها المتقدمة (Entering Blocks & Adjusting Their Settings).',
          ],
          ar: [
            'دراسة وتشكيل الكتل المعمارية المعقدة والأسقف الحرة والمنحنية (Massing: Organic Projects & Curved Roofs).',
            'احتراف إنشاء وتحميل وتعديل الفاميليز المعمارية البارامترية (Families: Creating, Loading, Editing).',
            'إدراج وضبط كتل الفرش وإعداداتها المتقدمة (Entering Blocks & Adjusting Their Settings).',
          ],
        },
      },
      {
        id: 'revit-mod-04',
        number: 'Module 04',
        title: {
          en: 'الإظهار، التوثيق التنفيذي والطباعة (Visualization, Detailing & Plotting)',
          ar: 'الإظهار، التوثيق التنفيذي والطباعة (Visualization, Detailing & Plotting)',
        },
        points: {
          en: [
            'ضبط وتعديل الخامات الفيزيائية، محاكاة الإضاءة، وحساب الظلال (Modifying Materials, Lighting, Shadows).',
            'نمذجة المساقط التنفيذية، إضافة رموز التهشير والتفاصيل الإنشائية (Modeling Executive Projections: Detailing, Hatching).',
            'استخراج وتصدير المخططات، اللقطات ثلاثية الأبعاد، الواجهات، المقاطع، والموقع العام (Exporting plans, 3D view, Elevations, Sections, Site).',
            'إعداد وتجهيز لوحات التقديم والطباعة الاحترافية بصيغة بي دي إف (Plotting Drawings as PDF files).',
          ],
          ar: [
            'ضبط وتعديل الخامات الفيزيائية، محاكاة الإضاءة، وحساب الظلال (Modifying Materials, Lighting, Shadows).',
            'نمذجة المساقط التنفيذية، إضافة رموز التهشير والتفاصيل الإنشائية (Modeling Executive Projections: Detailing, Hatching).',
            'استخراج وتصدير المخططات، اللقطات ثلاثية الأبعاد، الواجهات، المقاطع، والموقع العام (Exporting plans, 3D view, Elevations, Sections, Site).',
            'إعداد وتجهيز لوحات التقديم والطباعة الاحترافية بصيغة بي دي إف (Plotting Drawings as PDF files).',
          ],
        },
      },
    ],
    ctaText: {
      en: 'Enroll in Revit Masterclass ($40)',
      ar: 'Enroll in Revit Masterclass ($40)',
    },
    ctaLink:
      'https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20would%20like%20to%20enroll%20in%20the%20Autodesk%20Revit%20Architectural%20Masterclass%20($40).',
    works: [
      {
        id: 'revit-1',
        imageKey: 'revit1',
        defaultSrc: './revit-tower-documentation.jpg',
        fallbackSrc: './assets/aistudio/revit-tower-documentation_bd53e718.jfif',
        fit: 'contain',
        title: {
          en: 'Mixed-Use High-Rise Tower & Executive Documentation',
          ar: 'مجمع البرج متعدد الاستخدامات والتوثيق التنفيذي',
        },
        subtitle: {
          en: 'Parametric massing and integrated A0 sheet: 3D axonometric view, vertical building sections, and typical floor plans.',
          ar: 'نمذجة بارامترية لكتلة البرج واستخراج شيت A0 متكامل يضم المنظور الأكسونومتري، المقاطع الرأسية، والمساقط المتطابقة.',
        },
        tag: 'BIM DOCUMENTATION & A0 SHEETS',
      },
      {
        id: 'revit-2',
        imageKey: 'revit2',
        defaultSrc: './revit-villa-working-details.jpg',
        fallbackSrc: './assets/aistudio/revit-villa-working-details_0ec68b80.jpg',
        fit: 'contain',
        title: {
          en: 'Villa Working Drawings & Structural Detailing',
          ar: 'المخططات التنفيذية والتفاصيل الإنشائية للفيلا',
        },
        subtitle: {
          en: 'Executive floor plan and detailed structural section showing insulation layers, concrete hatching, grid coordinates, and dimensions.',
          ar: 'إعداد المسقط الأفقي التنفيذي ومقطع رأسي تفصيلي يوضح طبقات العزل وتهشير الخرسانة وتنسيق المحاور والأبعاد.',
        },
        tag: 'WORKING DRAWINGS & DETAILING',
      },
      {
        id: 'revit-3',
        imageKey: 'revit3',
        defaultSrc: './revit-work-2.jpg',
        fallbackSrc: './assets/aistudio/REVIT4_48ea5e98.jfif',
        title: {
          en: 'Urban Transit Hub & Central Station',
          ar: 'مجمع النقل الحضري ومحطة القطارات',
        },
        subtitle: {
          en: 'Advanced architectural modeling for terminal structures, steel space trusses, and curtain wall grids.',
          ar: 'نمذجة معمارية متقدمة لهيكل المحطة، الجمالونات المعدنية، وشبكات الواجهات الستائرية.',
        },
        tag: 'MEGA INFRASTRUCTURE',
      },
      {
        id: 'revit-4',
        imageKey: 'revit4',
        defaultSrc: './revit-work-1.jpg',
        fallbackSrc: './assets/aistudio/revit1_1f004bd2.jfif',
        title: {
          en: 'Cultural & Arts Center Complex',
          ar: 'مجمع المركز الثقافي والفنون',
        },
        subtitle: {
          en: 'Organic freeform massing, dynamic curved surfaces, and panoramic pedestrian ramps.',
          ar: 'تطبيق أدوات التشكيل الكتلي الحر والأسطح المنحنية والمنحدرات البانورامية.',
        },
        tag: 'PARAMETRIC MASSING',
      },
    ],
  },
  // 2. PHOTOSHOP (PHOTOSHOP FOR ARCHITECTURE)
  {
    id: 'track-photoshop',
    orderNumber: '02',
    name: 'Photoshop',
    price: '$15',
    badge: {
      en: 'BEGINNER LEVEL / 50% OFF',
      ar: 'BEGINNER LEVEL / 50% OFF',
    },
    title: {
      en: 'Photoshop for Architecture (Post-Processing & Visualization)',
      ar: 'Photoshop for Architecture (Post-Processing & Visualization)',
    },
    summary: {
      en: 'دورة متخصصة لتعلم أساسيات الفوتوشوب وتطبيقاته المعمارية من الصفر؛ تشمل تقنيات القص والدمج الاحترافي، معالجة الرندرات والصور المعمارية، وإضافة التأثيرات الفنية والإضاءة للنصوص والإظهار النهائي.',
      ar: 'دورة متخصصة لتعلم أساسيات الفوتوشوب وتطبيقاته المعمارية من الصفر؛ تشمل تقنيات القص والدمج الاحترافي، معالجة الرندرات والصور المعمارية، وإضافة التأثيرات الفنية والإضاءة للنصوص والإظهار النهائي.',
    },
    fullDescription: {
      en: 'دورة متخصصة لتعلم أساسيات الفوتوشوب وتطبيقاته المعمارية من الصفر؛ تشمل تقنيات القص والدمج الاحترافي، معالجة الرندرات والصور المعمارية، وإضافة التأثيرات الفنية والإضاءة للنصوص والإظهار النهائي.',
      ar: 'دورة متخصصة لتعلم أساسيات الفوتوشوب وتطبيقاته المعمارية من الصفر؛ تشمل تقنيات القص والدمج الاحترافي، معالجة الرندرات والصور المعمارية، وإضافة التأثيرات الفنية والإضاءة للنصوص والإظهار النهائي.',
    },
    modules: [
      {
        id: 'ps-mod-01',
        number: 'Module 01',
        title: {
          en: 'أدوات البرنامج والواجهة الرئيسية (Interface & Workspace Essentials)',
          ar: 'أدوات البرنامج والواجهة الرئيسية (Interface & Workspace Essentials)',
        },
        points: {
          en: [
            'التعرف على أدوات البرنامج وقوائم العمل والواجهة الرئيسية المخصصة للإظهار المعماري.',
            'إتقان أدوات التحديد المتقدمة والقص الدقيق للعناصر والكتل (Selection Tools).',
          ],
          ar: [
            'التعرف على أدوات البرنامج وقوائم العمل والواجهة الرئيسية المخصصة للإظهار المعماري.',
            'إتقان أدوات التحديد المتقدمة والقص الدقيق للعناصر والكتل (Selection Tools).',
          ],
        },
      },
      {
        id: 'ps-mod-02',
        number: 'Module 02',
        title: {
          en: 'التعديل اللوني والمعالجة البصرية (Adjustments & Render Post-Processing)',
          ar: 'التعديل اللوني والمعالجة البصرية (Adjustments & Render Post-Processing)',
        },
        points: {
          en: [
            'معالجة وتعديل الصور والرندرات المعمارية وضبط التباين والألوان (Adjustments & Image Correction).',
            'إضافة التأثيرات الفنية المعمارية، خامات السماء، وضبط الإضاءة للقطات والمناظير (Filters & Artistic Enhancements).',
          ],
          ar: [
            'معالجة وتعديل الصور والرندرات المعمارية وضبط التباين والألوان (Adjustments & Image Correction).',
            'إضافة التأثيرات الفنية المعمارية، خامات السماء، وضبط الإضاءة للقطات والمناظير (Filters & Artistic Enhancements).',
          ],
        },
      },
      {
        id: 'ps-mod-03',
        number: 'Module 03',
        title: {
          en: 'الدمج والتركيب الاحترافي (Matte Painting & Composition)',
          ar: 'الدمج والتركيب الاحترافي (Matte Painting & Composition)',
        },
        points: {
          en: [
            'قص وتركيب وتجميع الصور والبيئات المحيطة وعناصر الإظهار (أشخاص، نباتات، وسيارات) بشكل احترافي وواقعي.',
            'التعامل المتقدم مع أدوات الرسم والتلوين لإظهار المساقط والمخططات المعمارية (Brushes, Drawing & Coloring).',
          ],
          ar: [
            'قص وتركيب وتجميع الصور والبيئات المحيطة وعناصر الإظهار (أشخاص، نباتات، وسيارات) بشكل احترافي وواقعي.',
            'التعامل المتقدم مع أدوات الرسم والتلوين لإظهار المساقط والمخططات المعمارية (Brushes, Drawing & Coloring).',
          ],
        },
      },
      {
        id: 'ps-mod-04',
        number: 'Module 04',
        title: {
          en: 'النصوص والإخراج النهائي للبوسترات (Typography & Presentation)',
          ar: 'النصوص والإخراج النهائي للبوسترات (Typography & Presentation)',
        },
        points: {
          en: [
            'كيفية التعامل مع النصوص وتنسيق الخطوط المعمارية على اللوحات (Text & Typography).',
            'إعداد وتنسيق البوسترات والشيتات المعمارية النهائية بجودة عالية جاهزة للطباعة والعرض.',
          ],
          ar: [
            'كيفية التعامل مع النصوص وتنسيق الخطوط المعمارية على اللوحات (Text & Typography).',
            'إعداد وتنسيق البوسترات والشيتات المعمارية النهائية بجودة عالية جاهزة للطباعة والعرض.',
          ],
        },
      },
    ],
    ctaText: {
      en: 'Enroll in Photoshop Course ($15)',
      ar: 'Enroll in Photoshop Course ($15)',
    },
    ctaLink:
      'https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20would%20like%20to%20enroll%20in%20Photoshop%20for%20Architecture%20($15).',
    works: [
      {
        id: 'ps-1',
        imageKey: 'ps1',
        defaultSrc: './ps-cultural-center-dusk.jpg',
        fallbackSrc: './assets/aistudio/photo_1530950b.jfif',
        title: {
          en: 'Cultural Center & Interactive Dusk Post-Production',
          ar: 'المركز الثقافي ومعالجة الغسق التفاعلية',
        },
        subtitle: {
          en: 'Advanced dusk atmosphere and warm interior lighting, pedestrian circulation integration, flow lines, and wireframe overlays.',
          ar: 'معالجة متقدمة لأجواء الغسق والإنارة الدافئة مع دمج حركة المشاة ورسم خطوط المسارات المعمارية وشبكة الـ Wireframe فوق الرندر.',
        },
        tag: 'POST-PRODUCTION & DIAGRAMMING',
      },
      {
        id: 'ps-2',
        imageKey: 'ps2',
        defaultSrc: './ps-islamic-studies-exterior.jpg',
        fallbackSrc: './assets/aistudio/photo4_53ca95f4.jpg',
        title: {
          en: 'Islamic Studies Center - Exterior Perspective',
          ar: 'مركز الدراسات الإسلامية - المنظور الخارجي',
        },
        subtitle: {
          en: 'Advanced matte painting techniques for dramatic dusk skies, reflection pool calibration, and targeted lighting on traditional arches.',
          ar: 'تقنيات الـ Matte Painting المتقدمة لمعالجة السماء الدرامية، وضبط الانعكاسات على المسطح المائي، وتوزيع الإضاءة الموجهة على الأقواس والعناصر التراثية.',
        },
        tag: 'MATTE PAINTING & ATMOSPHERE',
      },
      {
        id: 'ps-3',
        imageKey: 'ps3',
        defaultSrc: './ps-museum-competition-sheet.jpg',
        fallbackSrc: './assets/aistudio/photo2_df950ff2.jfif',
        aspectRatioClass: 'aspect-[3/4]',
        fit: 'contain',
        title: {
          en: 'Fluid Architectural Museum Competition Sheet',
          ar: 'لوحة مسابقة المتحف المعماري الانسيابي',
        },
        subtitle: {
          en: 'Complete blueprint-style competition board combining fluid parametric perspective, colorized floor plan, and volumetric form diagrams.',
          ar: 'إعداد شيت مسابقات متكامل بنمط الـ Blueprint يجمع بين اللقطة المنظورية للكتلة الانسيابية، المسقط الملون، ودياجرامات التشكيل الفراغي.',
        },
        tag: 'PARAMETRIC ARCHITECTURE & BOARD LAYOUT',
      },
      {
        id: 'ps-4',
        imageKey: 'ps4',
        defaultSrc: './ps-media-center-sheet.jpg',
        fallbackSrc: './assets/aistudio/photo3_2eb63e13.jfif',
        aspectRatioClass: 'aspect-[3/4]',
        fit: 'contain',
        title: {
          en: 'Cultural Arts & Media Center - Integrated Presentation Board',
          ar: 'مركز الفنون والإعلام - لوحة العرض المتكاملة',
        },
        subtitle: {
          en: 'Architectural board coordinating night facade illumination, structural vertical section, and colorized functional zoning floor plan.',
          ar: 'تنسيق لوحة هندسية تجمع لقطة ليلية للواجهات والزجاج، مقطعاً رأسياً تفصيلياً يوضح المستويات، ومسقطاً معمارياً ملوناً يوضح التوزيع الوظيفي.',
        },
        tag: 'TECHNICAL PRESENTATION & SECTIONING',
      },
    ],
  },
  // 3. AUTOCAD (LIMITED TIME OFFER $5)
  {
    id: 'track-autocad',
    orderNumber: '03',
    name: 'AutoCAD',
    price: '$5',
    isFree: false,
    badge: {
      en: 'LIMITED TIME / $5 OFFER',
      ar: 'عرض لفترة محدودة · $5',
    },
    title: {
      en: 'AutoCAD Architecture 2D Essentials',
      ar: 'AutoCAD Architecture 2D Essentials',
    },
    summary: {
      en: 'كورس شامل يبدأ من الصفر لتعلم أسس الرسم المعماري والتوثيق الهندسي وتجهيز المخططات التنفيذية والطباعة الاحترافية.',
      ar: 'كورس شامل يبدأ من الصفر لتعلم أسس الرسم المعماري والتوثيق الهندسي وتجهيز المخططات التنفيذية والطباعة الاحترافية.',
    },
    fullDescription: {
      en: 'كورس شامل يبدأ من الصفر لتعلم أسس الرسم المعماري والتوثيق الهندسي وتجهيز المخططات التنفيذية والطباعة الاحترافية. يشمل المحاور التدريبية التطبيقية، إتقان الرسم والتعديل، إدارة الطبقات والتهشير، الأبعاد والبلوكات الجاهزة، وإعدادات الطباعة والتصدير.',
      ar: 'كورس شامل يبدأ من الصفر لتعلم أسس الرسم المعماري والتوثيق الهندسي وتجهيز المخططات التنفيذية والطباعة الاحترافية. يشمل المحاور التدريبية التطبيقية، إتقان الرسم والتعديل، إدارة الطبقات والتهشير، الأبعاد والبلوكات الجاهزة، وإعدادات الطباعة والتصدير.',
    },
    modules: [
      {
        id: 'cad-mod-01',
        number: 'Module 01',
        title: {
          en: 'أدوات الرسم والتعديل الأساسية (Drafting & Precision Tools)',
          ar: 'أدوات الرسم والتعديل الأساسية (Drafting & Precision Tools)',
        },
        points: {
          en: [
            'ضبط مساحة العمل ووحدات القياس.',
            'إتقان أوامر الرسم الأساسية والتعديل السريع (Draw & Modify Commands) بدقة هندسية مطلقة.',
          ],
          ar: [
            'ضبط مساحة العمل ووحدات القياس.',
            'إتقان أوامر الرسم الأساسية والتعديل السريع (Draw & Modify Commands) بدقة هندسية مطلقة.',
          ],
        },
      },
      {
        id: 'cad-mod-02',
        number: 'Module 02',
        title: {
          en: 'إدارة الطبقات والتهشير المعماري (Layers & Architectural Hatching)',
          ar: 'إدارة الطبقات والتهشير المعماري (Layers & Architectural Hatching)',
        },
        points: {
          en: [
            'تنظيم وإدارة الطبقات (Layers) وتوحيد سماكات الخطوط والألوان حسب الكود الهندسي.',
            'تطبيقات التهشير المعماري (Hatch) وإظهار المواد والتفاصيل الإنشائية.',
          ],
          ar: [
            'تنظيم وإدارة الطبقات (Layers) وتوحيد سماكات الخطوط والألوان حسب الكود الهندسي.',
            'تطبيقات التهشير المعماري (Hatch) وإظهار المواد والتفاصيل الإنشائية.',
          ],
        },
      },
      {
        id: 'cad-mod-03',
        number: 'Module 03',
        title: {
          en: 'الأبعاد والتوثيق والمكتبات (Dimensions & Block Libraries)',
          ar: 'الأبعاد والتوثيق والمكتبات (Dimensions & Block Libraries)',
        },
        points: {
          en: [
            'ضبط أساليب الأبعاد (Dimension Styles) والنصوص التوضيحية للمساقط والواجهات.',
            'تسليم مكتبات معمارية وبلوكات كاملة جاهزة للمشاريع السكنية والتجارية (Full Architectural Libraries).',
          ],
          ar: [
            'ضبط أساليب الأبعاد (Dimension Styles) والنصوص التوضيحية للمساقط والواجهات.',
            'تسليم مكتبات معمارية وبلوكات كاملة جاهزة للمشاريع السكنية والتجارية (Full Architectural Libraries).',
          ],
        },
      },
      {
        id: 'cad-mod-04',
        number: 'Module 04',
        title: {
          en: 'إعدادات الطباعة والتصدير (Plotting, Layouts & Export Pipelines)',
          ar: 'إعدادات الطباعة والتصدير (Plotting, Layouts & Export Pipelines)',
        },
        points: {
          en: [
            'تجهيز لوحات الطباعة (Layouts & Title Blocks) بمقاييس رسم معتمدة (Scales).',
            'تصدير المخططات والتنسيق السلس مع برامج الـ 3D والـ BIM (Revit, 3ds Max, Lumion).',
          ],
          ar: [
            'تجهيز لوحات الطباعة (Layouts & Title Blocks) بمقاييس رسم معتمدة (Scales).',
            'تصدير المخططات والتنسيق السلس مع برامج الـ 3D والـ BIM (Revit, 3ds Max, Lumion).',
          ],
        },
      },
    ],
    ctaText: {
      en: 'Enroll in AutoCAD Essentials ($5)',
      ar: 'سجّل في كورس الأوتوكاد ($5)',
    },
    ctaLink:
      'https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20am%20interested%20in%20AutoCAD%20Architecture%202D%20Essentials%20($5).',
    works: [
      {
        id: 'cad-1',
        imageKey: 'cad1',
        defaultSrc: './cad-mep-hvac-layout.jpg',
        fallbackSrc: './assets/aistudio/cad1_627e4c83.jfif',
        fit: 'contain',
        aspectRatioClass: 'aspect-[4/3]',
        title: {
          en: 'MEP & HVAC Technical Services Plan',
          ar: 'مخطط التمديدات الميكانيكية والكهربائية (HVAC & MEP)',
        },
        subtitle: {
          en: 'Complex working layout detailing HVAC duct routing, electrical distributions, and lighting grids on pure black CAD background.',
          ar: 'مخطط تنفيذي معقد يوضح شبكات التكييف، التهوية، مسارات مجاري الهواء (Ducts)، والتمديدات الكهربائية والإضاءة على خلفية كاد داكنة.',
        },
        tag: 'MEP & HVAC SERVICES PLAN',
      },
      {
        id: 'cad-2',
        imageKey: 'cad2',
        defaultSrc: './cad-building-cross-section.jpg',
        fallbackSrc: './assets/aistudio/cad2_ac6c8cdd.jfif',
        fit: 'contain',
        aspectRatioClass: 'aspect-[4/3]',
        title: {
          en: 'Structural Cross Section & Technical Documentation',
          ar: 'القطاع الرأسي التنفيذي والتوثيق الإنشائي',
        },
        subtitle: {
          en: 'Multi-story structural section showing foundation piles, floor slabs, level callouts, and column grid with high technical precision.',
          ar: 'مقطع رأسي هندسي متعدد الطوابق يوضح تفاصيل الأساسات، بلاطات الأسقف، مناسيب الطوابق، وشبكة المحاور بدقة تقنية عالية.',
        },
        tag: 'STRUCTURAL CROSS SECTION',
      },
      {
        id: 'cad-3',
        imageKey: 'cad3',
        defaultSrc: './cad-master-floor-plan.jpg',
        fallbackSrc: './assets/aistudio/cad3_44c46ece.jfif',
        fit: 'contain',
        aspectRatioClass: 'aspect-[4/3]',
        title: {
          en: 'Master Working Floor Plan & Spatial Layout',
          ar: 'المسقط الأفقي التنفيذي وتوزيع الفراغات',
        },
        subtitle: {
          en: 'Comprehensive architectural plan with offices, conference rooms, service zones, furniture blocks, and technical legend tables.',
          ar: 'مسقط معماري شامل يضم المكاتب، قاعات المؤتمرات، الفراغات الخدمية، كتل الأثاث، ومفاتيح الرموز (Legend) التنفيذية.',
        },
        tag: 'MASTER WORKING FLOOR PLAN',
      },
      {
        id: 'cad-4',
        imageKey: 'cad4',
        defaultSrc: './cad-3d-wireframe-axonometric.jpg',
        fallbackSrc: './assets/aistudio/cad4_89d2ad5b.jfif',
        fit: 'contain',
        aspectRatioClass: 'aspect-[4/3]',
        title: {
          en: '3D Wireframe Axonometric Projection',
          ar: 'الإسقاط الأكسونومتري الهيكلي ثلاثي الأبعاد',
        },
        subtitle: {
          en: 'Geometric wireframe projection detailing steel structural frame, roof trusses, space frame framing, and structural skeleton.',
          ar: 'منظور شبكي هندسي (Wireframe) يوضح الهيكل الإنشائي الفولاذي، الجمالونات المعدنية، وعناصر الإطار الإنشائي للمبنى.',
        },
        tag: '3D WIREFRAME AXONOMETRIC',
      },
    ],
  },
  // 4. LUMION (COMING SOON)
  {
    id: 'track-lumion',
    orderNumber: '04',
    name: 'Lumion',
    price: '$140',
    isComingSoon: true,
    badge: {
      en: 'COMING SOON / REGISTRATION CLOSED',
      ar: 'COMING SOON · التسجيل غير متاح',
    },
    title: {
      en: 'Lumion Visualization & Animation',
      ar: 'اللوميون والإخراج السينمائي (Lumion)',
    },
    summary: {
      en: 'Environment dressing, realistic sunlight, weather systems, and smooth cinematic videos.',
      ar: 'بناء البيئات والمناظر، محاكاة الشمس والطقس، وحركة الكاميرات السينمائية السريعة.',
    },
    fullDescription: {
      en: 'Rapid high-impact visualization: importing models from Revit/SketchUp, setting up customized materials, displacement mapping, landscape terrain painting, weather presets, cinematic camera sequencing, and 4K video exports.',
      ar: 'الإخراج السريع فائق الجمال: استيراد النماذج من ريفيت، إعداد الخامات الواقعية، فرش التضاريس الطبيعية، محاكاة الإضاءة النهارية والغسق، وإخراج فيديوهات سينمائية بدقة 4K.',
    },
    ctaText: {
      en: 'Enrollment Closed · Coming Soon',
      ar: 'التسجيل مغلق حالياً · Coming Soon',
    },
    ctaLink:
      'https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20am%20interested%20in%20Lumion%20Visualization%20($140).',
    works: [
      {
        id: 'lum-1',
        imageKey: 'lumion1',
        defaultSrc: './lumion-work-1.jpg',
        title: {
          en: 'Arid Stone Courtyard Villa',
          ar: 'فيلا الفناء الحجري والبيئة الطبيعية',
        },
        subtitle: {
          en: 'Terrain Vegetation & Soft Twilight Simulation',
          ar: 'توزيع الإضاءة وتضاريس الموقع',
        },
        tag: 'LUMION EXTERIOR',
      },
      {
        id: 'lum-2',
        imageKey: 'lumion2',
        defaultSrc: './lumion-work-2.jpg',
        title: {
          en: 'Modern Residential Forest Villa',
          ar: 'فيلا معاصرة وسط الغابة',
        },
        subtitle: {
          en: 'Natural Grass Foliage & Sunset Sky Dynamics',
          ar: 'واقعية الخضار وأشعة الغروب',
        },
        tag: 'LUMION CINEMATIC',
      },
    ],
  },
  // 5. V-RAY (COMING SOON)
  {
    id: 'track-vray',
    orderNumber: '05',
    name: 'V-Ray',
    price: '$160',
    isComingSoon: true,
    badge: {
      en: 'COMING SOON / REGISTRATION CLOSED',
      ar: 'COMING SOON · التسجيل غير متاح',
    },
    title: {
      en: 'V-Ray Photorealism Engine',
      ar: 'الفيري والريندر الواقعي (V-Ray)',
    },
    summary: {
      en: 'Physically based PBR materials, global illumination, and high-end studio lighting realism.',
      ar: 'الريندر الفيزيائي المتقدم، خامات PBR الواقعية، والإضاءة الاستوديو الداخلية والخارجية.',
    },
    fullDescription: {
      en: 'Studio-grade architectural photography rendering: light cache, brute force GI calculations, advanced glass refraction, concrete and wood PBR shaders, artificial interior light balancing, HDRI domes, and render elements passes.',
      ar: 'الريندر المعماري عالي الدقة القائم على فيزياء الضوء الحقيقية: الحسابات الفيزيائية للضوء، خامات الخرسانة والخشب الواقعية، موازنة الإضاءة الداخلية، وخلفيات الـ HDRI بجودة استوديوهات عالمية.',
    },
    ctaText: {
      en: 'Enrollment Closed · Coming Soon',
      ar: 'التسجيل مغلق حالياً · Coming Soon',
    },
    ctaLink:
      'https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20am%20interested%20in%20V-Ray%20Photorealism%20($160).',
    works: [
      {
        id: 'vray-1',
        imageKey: 'vray1',
        defaultSrc: './vray-work-1.jpg',
        title: {
          en: 'Brutalist Concrete Pavilion',
          ar: 'جناح خرساني بروتالي فائق الواقعية',
        },
        subtitle: {
          en: 'Indirect Light Bounces & Concrete PBR Texture',
          ar: 'إضاءة غير مباشرة وخامات خرسانية دقيقة',
        },
        tag: 'V-RAY MASTER',
      },
      {
        id: 'vray-2',
        imageKey: 'vray2',
        defaultSrc: './vray-work-2.jpg',
        title: {
          en: 'Interior Living Space Warm Light',
          ar: 'فراغ معيشي دافئ بإضاءة ليلية',
        },
        subtitle: {
          en: 'Recessed LEDs & Wood Reflections',
          ar: 'انعكاسات الخشب والإنارة المخفية',
        },
        tag: 'V-RAY PHOTOREAL',
      },
    ],
  },
  // 6. ENSCAPE (COMING SOON)
  {
    id: 'track-enscape',
    orderNumber: '06',
    name: 'Enscape',
    price: '$130',
    isComingSoon: true,
    badge: {
      en: 'COMING SOON / REGISTRATION CLOSED',
      ar: 'COMING SOON · التسجيل غير متاح',
    },
    title: {
      en: 'Enscape Real-Time Engine',
      ar: 'الانسكيب والإظهار اللحظي (Enscape)',
    },
    summary: {
      en: 'Live bidirectional sync with Revit, rapid client presentations, VR walkthroughs, and 360 panoramas.',
      ar: 'الربط المباشر مع ريفيت، عروض الزبائن الفورية، التجول بالواقع الافتراضي VR، وبانوراما 360.',
    },
    fullDescription: {
      en: 'Real-time visualization workflow: configuring Enscape assets inside Revit, setting up artificial lighting temperatures, emissive surfaces, instant VR headset walkthroughs, standalone web exe files, and interactive 360-degree client links.',
      ar: 'سير عمل الإظهار اللحظي: ضبط عناصر إنسكيب داخل ريفيت مباشرة، تحديد حرارة الإضاءة، التجول الفوري بنظارات الواقع الافتراضي (VR)، وتصدير روابط البانوراما التفاعلية للعملاء خلال ثوانٍ.',
    },
    ctaText: {
      en: 'Enrollment Closed · Coming Soon',
      ar: 'التسجيل مغلق حالياً · Coming Soon',
    },
    ctaLink:
      'https://wa.me/963998401013?text=Hello%20Arch.%20Ibrahim,%20I%20am%20interested%20in%20Enscape%20Real-Time%20($130).',
    works: [
      {
        id: 'ens-1',
        imageKey: 'enscape1',
        defaultSrc: './enscape-work-1.jpg',
        title: {
          en: 'Cliffside Villa Live Walkthrough',
          ar: 'جولة تفاعلية حية لفيلا جبلية',
        },
        subtitle: {
          en: 'Real-time Sky Reflections & Architectural Framing',
          ar: 'إظهار لحظي لانعكاسات السماء والكتل',
        },
        tag: 'ENSCAPE REAL-TIME',
      },
      {
        id: 'ens-2',
        imageKey: 'enscape2',
        defaultSrc: './enscape-work-2.jpg',
        title: {
          en: 'Glazed Atrium Direct Sun Walk',
          ar: 'بهو زجاجي بإضاءة شمسية تفاعلية',
        },
        subtitle: {
          en: 'Dynamic Shadow Falloff & VR Asset Placement',
          ar: 'الظلال الناعمة وتجول الـ VR الفوري',
        },
        tag: 'ENSCAPE VR',
      },
    ],
  },
];

const FALLBACK_SVGS: Record<ImageSlotKey, string> = {
  profile:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
        <rect width="200" height="200" fill="#141414"/>
        <circle cx="100" cy="76" r="34" fill="#1F1F1F" stroke="#333" stroke-width="1.5"/>
        <path d="M40 185 C40 138 160 138 160 185" fill="#1F1F1F" stroke="#333" stroke-width="1.5"/>
        <text x="100" y="84" text-anchor="middle" fill="#F5F5F5" font-family="sans-serif" font-size="22" font-weight="700">IA</text>
      </svg>
    `),
  hero:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900">
        <rect width="1600" height="900" fill="#0D1117"/>
        <rect x="260" y="290" width="920" height="40" fill="#1A1A1A"/>
        <rect x="320" y="330" width="760" height="190" fill="#F5B05B" fill-opacity="0.25"/>
        <rect x="200" y="520" width="1040" height="100" fill="#121212"/>
      </svg>
    `),
  work1:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
        <rect width="800" height="600" fill="#0D0D0D"/>
        <polygon points="160,440 160,180 460,130 460,440" fill="#151515" stroke="#2A2A2A"/>
        <polygon points="460,440 460,210 640,250 640,440" fill="#1B1B1B" stroke="#2E2E2E"/>
      </svg>
    `),
  work2:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
        <rect width="800" height="600" fill="#0B0E13"/>
        <rect x="120" y="170" width="560" height="260" fill="#141820" stroke="#262B36"/>
      </svg>
    `),
  work3:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
        <rect width="800" height="600" fill="#0E0C0A"/>
        <rect x="140" y="230" width="320" height="210" fill="#191614" stroke="#2C2623"/>
      </svg>
    `),

  // Distinct SVGs per software
  revit1:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0C131D"/><text x="400" y="260" text-anchor="middle" fill="#00E5FF" font-family="monospace" font-size="22" font-weight="700">REVIT BIM &amp; A0 SHEETS</text></svg>`
    ),
  revit2:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0C131D"/><text x="400" y="260" text-anchor="middle" fill="#00E5FF" font-family="monospace" font-size="22" font-weight="700">TECHNICAL DETAILING</text></svg>`
    ),
  revit3:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0B1119"/><text x="400" y="260" text-anchor="middle" fill="#6997D3" font-family="monospace" font-size="22" font-weight="700">MEGA INFRASTRUCTURE</text></svg>`
    ),
  revit4:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0F1218"/><text x="400" y="260" text-anchor="middle" fill="#5885C7" font-family="monospace" font-size="22" font-weight="700">PARAMETRIC MASSING</text></svg>`
    ),

  ps1:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><defs><linearGradient id="psGlow" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stop-color="#0E0C12"/><stop offset="60%" stop-color="#3D1D4A"/><stop offset="100%" stop-color="#803D70"/></linearGradient></defs><rect width="800" height="500" fill="url(#psGlow)"/><polygon points="140,420 280,180 520,180 660,420" fill="#120F17" stroke="#68316B" stroke-width="2"/><text x="400" y="270" text-anchor="middle" fill="#D98ED2" font-family="monospace" font-size="20" font-weight="700">PHOTOSHOP DUSK ATMOSPHERE</text></svg>`
    ),
  ps2:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#141118"/><rect x="100" y="80" width="600" height="340" fill="#201826" stroke="#54336B" stroke-width="2"/><circle cx="280" cy="220" r="80" fill="#914AA3" fill-opacity="0.3"/><text x="400" y="270" text-anchor="middle" fill="#E0A7ED" font-family="monospace" font-size="20">MASTERPLAN COLORIZATION</text></svg>`
    ),
  ps3:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0c1829"/><rect x="100" y="80" width="600" height="340" fill="#13243d" stroke="#2563eb" stroke-width="2"/><circle cx="500" cy="200" r="70" fill="#f59e0b" fill-opacity="0.3"/><text x="400" y="270" text-anchor="middle" fill="#93c5fd" font-family="monospace" font-size="20" font-weight="700">COASTAL PAVILION DUSK</text></svg>`
    ),
  ps4:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#081426"/><circle cx="400" cy="250" r="120" fill="#3b82f6" fill-opacity="0.25"/><text x="400" y="260" text-anchor="middle" fill="#60a5fa" font-family="monospace" font-size="20" font-weight="700">DAYLIGHT POST-PRODUCTION</text></svg>`
    ),

  cad1:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#06121E"/><g stroke="#00C0FF" stroke-width="1.2" opacity="0.85"><rect x="100" y="80" width="600" height="340" fill="none"/><line x1="100" y1="220" x2="700" y2="220"/><line x1="380" y1="80" x2="380" y2="420"/><rect x="140" y="110" width="120" height="80" fill="none"/><rect x="420" y="260" width="160" height="120" fill="none"/></g><text x="400" y="270" text-anchor="middle" fill="#00D2FF" font-family="monospace" font-size="20" font-weight="700">AUTOCAD 2D WORKING DRAWINGS</text></svg>`
    ),
  cad2:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#04101A"/><g stroke="#26A4D9" stroke-width="1.5"><line x1="80" y1="400" x2="720" y2="400"/><rect x="220" y="140" width="140" height="260" fill="#0A1D2D"/><line x1="220" y1="200" x2="360" y2="200" stroke-dasharray="4 4"/><line x1="220" y1="270" x2="360" y2="270" stroke-dasharray="4 4"/></g><text x="500" y="260" text-anchor="middle" fill="#4DC3F7" font-family="monospace" font-size="18">WALL SECTION DETAILS</text></svg>`
    ),
  cad3:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#17080a"/><g stroke="#ef4444" stroke-width="1.5"><rect x="120" y="100" width="560" height="300" fill="none"/><line x1="260" y1="100" x2="260" y2="400" stroke-dasharray="6 6"/><line x1="400" y1="100" x2="400" y2="400"/><line x1="540" y1="100" x2="540" y2="400" stroke-dasharray="6 6"/></g><text x="400" y="260" text-anchor="middle" fill="#f87171" font-family="monospace" font-size="18" font-weight="700">TECHNICAL CORE &amp; EGRESS</text></svg>`
    ),
  cad4:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#150709"/><g stroke="#dc2626" stroke-width="1.5"><rect x="180" y="120" width="440" height="260" fill="#200d11"/><line x1="180" y1="250" x2="620" y2="250"/></g><text x="400" y="260" text-anchor="middle" fill="#fca5a5" font-family="monospace" font-size="18" font-weight="700">CONSTRUCTION DETAILS &amp; HATCH</text></svg>`
    ),

  lumion1:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#14110A"/><path d="M0 380 Q 200 310 400 360 T 800 340 L 800 500 L 0 500 Z" fill="#242012" stroke="#4D421F"/><rect x="240" y="220" width="320" height="140" fill="#3D3418" stroke="#8A7632"/><text x="400" y="290" text-anchor="middle" fill="#F0C954" font-family="monospace" font-size="20" font-weight="700">LUMION ENVIRONMENT &amp; SUN</text></svg>`
    ),
  lumion2:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0C140F"/><rect x="180" y="160" width="440" height="220" fill="#182A1F" stroke="#376648"/><circle cx="620" cy="120" r="45" fill="#E6C865" opacity="0.6"/><text x="400" y="280" text-anchor="middle" fill="#69D992" font-family="monospace" font-size="20">LUMION CINEMATIC NATURE</text></svg>`
    ),

  vray1:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#101010"/><rect x="160" y="120" width="480" height="260" fill="#1E1E1E" stroke="#404040"/><circle cx="400" cy="240" r="70" fill="#2E2E2E" stroke="#F5A623" stroke-width="2"/><text x="400" y="248" text-anchor="middle" fill="#F5A623" font-family="monospace" font-size="18" font-weight="700">V-RAY PBR GLOBAL ILLUMINATION</text></svg>`
    ),
  vray2:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0C0E12"/><rect x="140" y="140" width="520" height="220" fill="#181D26" stroke="#333E50"/><rect x="220" y="200" width="120" height="160" fill="#E8B06B" fill-opacity="0.3"/><text x="400" y="250" text-anchor="middle" fill="#FFC87A" font-family="monospace" font-size="18">V-RAY INTERIOR WARM GLOW</text></svg>`
    ),

  enscape1:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#0B1314"/><rect x="120" y="140" width="560" height="220" fill="#142629" stroke="#254B52"/><line x1="120" y1="200" x2="680" y2="200" stroke="#3A757F"/><line x1="300" y1="140" x2="300" y2="360" stroke="#3A757F"/><text x="400" y="260" text-anchor="middle" fill="#46C2D6" font-family="monospace" font-size="20" font-weight="700">ENSCAPE REAL-TIME VR WALK</text></svg>`
    ),
  enscape2:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500"><rect width="800" height="500" fill="#091517"/><rect x="160" y="120" width="480" height="260" fill="#11292D" stroke="#22535B"/><text x="400" y="260" text-anchor="middle" fill="#6EE7B7" font-family="monospace" font-size="18">ENSCAPE PANORAMA 360°</text></svg>`
    ),
  more1:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#0A141F"/><rect x="220" y="100" width="360" height="420" fill="#102538" stroke="#1D4B70"/><line x1="280" y1="100" x2="280" y2="520" stroke="#00A2ED" stroke-width="1.5"/><line x1="340" y1="100" x2="340" y2="520" stroke="#00A2ED" stroke-width="1.5"/><line x1="400" y1="100" x2="400" y2="520" stroke="#00A2ED" stroke-width="1.5"/><line x1="460" y1="100" x2="460" y2="520" stroke="#00A2ED" stroke-width="1.5"/><line x1="520" y1="100" x2="520" y2="520" stroke="#00A2ED" stroke-width="1.5"/><text x="400" y="320" text-anchor="middle" fill="#38BDF8" font-family="monospace" font-size="20" font-weight="700">TOWER FACADE &amp; SHADING</text></svg>`
    ),
  more2:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#1A1015"/><circle cx="500" cy="220" r="100" fill="#F97316" fill-opacity="0.3"/><rect x="140" y="260" width="520" height="200" fill="#2E1B25" stroke="#68344D"/><text x="400" y="370" text-anchor="middle" fill="#F472B6" font-family="monospace" font-size="20" font-weight="700">COASTAL VILLA DUSK MATTE</text></svg>`
    ),
  more3:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#0D0708"/><g stroke="#EA212D" stroke-width="1.5"><rect x="160" y="140" width="480" height="340" fill="#1C0D10"/><rect x="320" y="240" width="160" height="180" stroke-dasharray="6 6"/><line x1="160" y1="310" x2="640" y2="310"/></g><text x="400" y="200" text-anchor="middle" fill="#FF6B7D" font-family="monospace" font-size="18" font-weight="700">HIGH-RISE CORE TECHNICAL PLAN</text></svg>`
    ),
  more4:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#0C140F"/><path d="M0 420 Q 300 320 800 460 L 800 600 L 0 600 Z" fill="#1B3024"/><rect x="180" y="200" width="380" height="180" fill="#16281E" stroke="#3D6B52"/><text x="400" y="300" text-anchor="middle" fill="#86EFAC" font-family="monospace" font-size="20" font-weight="700">WATERFRONT PROMENADE</text></svg>`
    ),
  more5:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#121212"/><rect x="140" y="100" width="520" height="400" fill="#1E1E1E" stroke="#333333"/><line x1="140" y1="100" x2="300" y2="240" stroke="#00C0F3" stroke-width="1.5"/><line x1="660" y1="100" x2="500" y2="240" stroke="#00C0F3" stroke-width="1.5"/><text x="400" y="340" text-anchor="middle" fill="#38BDF8" font-family="monospace" font-size="19" font-weight="700">MINIMALIST CONCRETE GALLERY</text></svg>`
    ),
  more6:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" fill="#140E06"/><path d="M160 380 Q 400 120 640 380" stroke="#FF5400" stroke-width="3" fill="none"/><line x1="240" y1="380" x2="240" y2="240" stroke="#FFA200" stroke-width="1.5"/><line x1="320" y1="380" x2="320" y2="170" stroke="#FFA200" stroke-width="1.5"/><line x1="400" y1="380" x2="400" y2="150" stroke="#FFA200" stroke-width="1.5"/><line x1="480" y1="380" x2="480" y2="170" stroke="#FFA200" stroke-width="1.5"/><line x1="560" y1="380" x2="560" y2="240" stroke="#FFA200" stroke-width="1.5"/><text x="400" y="440" text-anchor="middle" fill="#FFB703" font-family="monospace" font-size="18" font-weight="700">PARAMETRIC TIMBER VR WALK</text></svg>`
    ),
};

interface MoreStudentWork {
  id: string;
  imageKey: ImageSlotKey;
  defaultSrc: string;
  fallbackSrc?: string;
  badge?: { en: string; ar: string };
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  generalDescription?: { en: string; ar: string };
  mainViewLabel?: { en: string; ar: string };
  subViewsLabel?: { en: string; ar: string };
  subImages?: Array<{
    src: string;
    fallbackSrc?: string;
    title: { en: string; ar: string };
    desc: { en: string; ar: string };
    badge: { en: string; ar: string };
  }>;
  tag: string;
  year: string;
}

const MORE_STUDENT_WORKS: MoreStudentWork[] = [
  {
    id: 'more-1',
    imageKey: 'more1' as ImageSlotKey,
    defaultSrc: './65.jpg',
    fallbackSrc: './assets/aistudio/65_b01cb7cf.jpg',
    badge: {
      en: 'LUXURY LIVING & DINING INTERIOR',
      ar: 'LUXURY LIVING & DINING INTERIOR',
    },
    title: {
      en: 'Modern Living & Dining Interior - Damascus',
      ar: 'تصميم غرفة معيشة ومعيشة طعام عصرية - دمشق (Modern Living & Dining Interior)',
    },
    subtitle: {
      en: 'Integrated luxury living & dining space with timber fluting and refined marble wall cladding',
      ar: 'تصميم داخلي فاخر يدمج غرفة المعيشة مع السفرة وتوظيف التكسيات الخشبية والرخامية',
    },
    generalDescription: {
      en: 'Contemporary interior design for a luxury living and dining room, combining visual elegance with comfort, integrating the dining area seamlessly with warm wood slats, bookmatched marble, and modern lighting.',
      ar: 'تصميم داخلي فاخر ومتكامل لغرفة معيشة تجمع بين الفخامة والراحة البصرية، مع دمج أنيق لمنطقة السفرة وتوظيف التكسيات الخشبية والرخامية والإضاءات العصرية.',
    },
    mainViewLabel: {
      en: 'PRIMARY LIVING ROOM VIEW',
      ar: 'الصورة الرئيسية (غرفة المعيشة)',
    },
    subViewsLabel: {
      en: 'ANALYTICAL SUB-SHOTS (DINING & MARBLE TV WALL)',
      ar: 'اللقطات الفرعية (السفرة وجدار التلفزيون)',
    },
    subImages: [
      {
        src: './66.jpg',
        fallbackSrc: './assets/aistudio/66_d0ae4514.jpg',
        title: {
          en: 'Custom TV Marble Wall & Integrated LED Shelving',
          ar: 'جدار التلفزيون الرخامي والرفوف الخشبية المضيئة',
        },
        desc: {
          en: 'Geometric bookmatched marble feature wall with vertical acoustic wood fluting and warm recessed display lighting.',
          ar: 'تكوين جداري متكامل لشاشة التلفزيون يجمع بين تكسيات الرخام المتناظرة والتجاويف الخشبية الطولية وإضاءات الليد المخفية الدافئة.',
        },
        badge: {
          en: 'MARBLE TV WALL & SHELVING',
          ar: 'اللقطة الفرعية 01 · جدار التلفزيون',
        },
      },
      {
        src: './67.jpg',
        fallbackSrc: './assets/aistudio/67_caf132e0.jpg',
        title: {
          en: 'Integrated Dining Space & Crystal Ring Chandeliers',
          ar: 'منطقة السفرة المتكاملة والثريات الحلقية الكريستالية',
        },
        desc: {
          en: 'Harmonious spatial flow connecting the plush lounge sectional with the dining set under modern tiered crystal chandeliers.',
          ar: 'انسيابية فراغية تجمع بين كنب المعيشة الفاخر وطاولة السفرة العصرية مع ثريات كريستالية دائرية متدرجة تضفي دفئاً بصرياً.',
        },
        badge: {
          en: 'DINING & CHANDELIER ACCENTS',
          ar: 'اللقطة الفرعية 02 · منطقة السفرة',
        },
      },
    ],
    tag: 'LUXURY LIVING & DINING',
    year: '2026',
  },
  {
    id: 'more-2',
    imageKey: 'more2' as ImageSlotKey,
    defaultSrc: './1111.jpg',
    fallbackSrc: './assets/aistudio/1111_e9227e43.jpg',
    badge: {
      en: 'LUXURY MASTER BEDROOM INTERIOR',
      ar: 'LUXURY MASTER BEDROOM INTERIOR',
    },
    title: {
      en: 'Modern Master Bedroom Interior - Damascus',
      ar: 'تصميم غرفة نوم رئيسية عصرية - دمشق (Modern Master Bedroom)',
    },
    subtitle: {
      en: 'Contemporary master suite with warm timber paneling, marble accents & illuminated glass wardrobes',
      ar: 'تصميم داخلي فاخر لغرفة نوم رئيسية يجمع بين الأناقة المعاصرة والراحة القصوى',
    },
    generalDescription: {
      en: 'Luxury interior design for a modern master bedroom combining contemporary elegance with ultimate comfort, featuring warm wood accents, marble finishes, concealed cove lighting, and illuminated glass wardrobes.',
      ar: 'تصميم داخلي فاخر لغرفة نوم رئيسية يجمع بين الأناقة المعاصرة والراحة القصوى، مع توظيف الخشب الدافئ والرخام وتفاصيل الإضاءة المخفية وخزائن الملابس الزجاجية.',
    },
    mainViewLabel: {
      en: 'PRIMARY MASTER BEDROOM VIEW',
      ar: 'الصورة الرئيسية (غرفة النوم الرئيسية)',
    },
    subViewsLabel: {
      en: 'ANALYTICAL SUB-SHOTS (SIDE VIEW & WARDROBE)',
      ar: 'اللقطات الفرعية (المسار الجانبي وخزانة الملابس)',
    },
    subImages: [
      {
        src: './2222.jpg',
        fallbackSrc: './assets/aistudio/2222_85f0e5d3.jpg',
        title: {
          en: 'Side Angle View & Marble TV Feature Wall',
          ar: 'المنظور الجانبي وجدار التلفزيون الرخامي',
        },
        desc: {
          en: 'Side perspective highlighting the seamless integration between the king bed, lounge armchair, and bookmatched marble TV media console.',
          ar: 'لقطة جانبية تبرز التناغم الفراغي بين السرير الرئيسي وجدار التلفزيون المكسو بالرخام ووحدة التخزين المعلقة مع الإضاءة الطبيعية الواسعة.',
        },
        badge: {
          en: 'SIDE VIEW & TV WALL',
          ar: 'اللقطة الفرعية 01 · جدار التلفزيون والمسار الجانبي',
        },
      },
      {
        src: './3333.jpg',
        fallbackSrc: './assets/aistudio/3333_be9661b6.jpg',
        title: {
          en: 'Nightstand Detail & Glass Wardrobe Composition',
          ar: 'تفاصيل طاولة السرير الجانبية وخزانة الملابس الزجاجية',
        },
        desc: {
          en: 'Detailed composition showcasing designer bedside table, sculptural ring pendants, geometric wall cladding, and illuminated glass wardrobe.',
          ar: 'تفصيلة مقربة لطاولة السرير الجانبية الفاخرة ووحدات الإنارة الحلقية الجدارية مع تكسيات الخشب الطولية وخزانة الملابس الزجاجية ذات الإضاءة الداخلية.',
        },
        badge: {
          en: 'NIGHTSTAND & GLASS WARDROBE',
          ar: 'اللقطة الفرعية 02 · طاولة السرير وخزانة الملابس',
        },
      },
    ],
    tag: 'LUXURY MASTER BEDROOM',
    year: '2026',
  },
  {
    id: 'more-3',
    imageKey: 'more3' as ImageSlotKey,
    defaultSrc: './15.jpg',
    fallbackSrc: './assets/aistudio/15_679a9fb4.jpg',
    badge: {
      en: 'ISLAMIC & ARABIC STUDIES CENTER',
      ar: 'ISLAMIC & ARABIC STUDIES CENTER',
    },
    title: {
      en: 'Arab & Islamic Studies Center Design',
      ar: 'تصميم مركز دراسات عربية إسلامية (Arab & Islamic Studies Center)',
    },
    subtitle: {
      en: 'Contemporary Islamic architecture with ribbed geodesic domes & parametric arched mashrabiya facades',
      ar: 'مشروع معماري رائد يجسد روح العمارة الإسلامية بقباب هندسية وواجهات مشربية معاصرة',
    },
    generalDescription: {
      en: 'A pioneering architectural project embodying the spirit of Islamic architecture through a contemporary lens, featuring ribbed geometric domes and glass curtain facades enveloped in carefully sculpted arches and parametric Islamic lattice screens.',
      ar: 'مشروع معماري رائد يجسد روح العمارة الإسلامية بأسلوب معاصر، يعتمد على القباب الهندسية والواجهات الزجاجية المغلفة بالأقواس والعروق المعمارية المدروسة.',
    },
    mainViewLabel: {
      en: 'PRIMARY FACADE PERSPECTIVE & GEODESIC DOME',
      ar: 'المنظور الرئيسي للمركز والقبة الهندسية',
    },
    subViewsLabel: {
      en: 'ANALYTICAL SUB-SHOTS (ENTRANCE PORTAL & MASHRABIYA)',
      ar: 'اللقطات الفرعية (المدخل الرئيسي وتفاصيل المشربية)',
    },
    subImages: [
      {
        src: './16.jpg',
        fallbackSrc: './assets/aistudio/16_2b24db9c.jpg',
        title: {
          en: 'Front Elevation & Entrance Portal Composition',
          ar: 'الواجهة الرئيسية والمدخل المعماري المؤطر',
        },
        desc: {
          en: 'Frontal perspective illustrating the rhythmic sequence of branching arches, central glazed dome, and ornate geometric screening.',
          ar: 'منظور أمامي محوري يوضح التدرج الإيقاعي للأقواس المعمارية والمدخل الرئيسي المتناغم مع القبة الزجاجية والزخارف الهندسية.',
        },
        badge: {
          en: 'FRONT ELEVATION & PORTAL',
          ar: 'اللقطة الفرعية 01 · الواجهة الرئيسية',
        },
      },
      {
        src: './17.jpg',
        fallbackSrc: './assets/aistudio/17_38fdf1d0.jpg',
        title: {
          en: 'Parametric Facade Layering & Screen Detail',
          ar: 'تفصيلة الطبقات المعمارية والمشربية البارامترية',
        },
        desc: {
          en: 'Detailed structural perspective demonstrating the layered facade: concrete branching arches, laser-perforated arabesque screens, and glass envelope.',
          ar: 'منظور تحليلي مقرب يوضح طبقات الواجهة المعمارية: الأعمدة المتفرعة، التكسيات المشربية الإسلامية المثقبة، وجدار الزجاج المزدوج.',
        },
        badge: {
          en: 'FACADE DETAIL & MASHRABIYA',
          ar: 'اللقطة الفرعية 02 · تفاصيل المشربية والأقواس',
        },
      },
    ],
    tag: 'ISLAMIC ARCHITECTURE',
    year: '2026',
  },
  {
    id: 'more-4',
    imageKey: 'more4' as ImageSlotKey,
    defaultSrc: './85.jpg',
    fallbackSrc: './assets/aistudio/85_b30e431a.jpg',
    badge: {
      en: 'MIXED-USE TOWER & ARCHITECTURAL MODEL',
      ar: 'MIXED-USE TOWER & ARCHITECTURAL MODEL',
    },
    title: {
      en: 'Integrated Mixed-Use Commercial & Residential Tower',
      ar: 'تصميم برج تجاري سكني متكامل (Mixed-Use Tower)',
    },
    subtitle: {
      en: 'Multi-tiered residential tower with commercial podium, internal courtyards & glazed skylight domes',
      ar: 'برج متعدد الاستخدامات يدمج السكن والتجارة مع قباب زجاجية سماوية وأفنية داخلية',
    },
    generalDescription: {
      en: 'A comprehensive mixed-use architectural development harmonizing residential towers with active commercial podiums, featuring internal courtyards and glazed skylight domes to maximize natural illumination and enrich spatial experience.',
      ar: 'مشروع معماري متعدد الاستخدامات يدمج بين الأبراج السكنية والمنصات التجارية، مع توظيف أفنية داخلية وقباب زجاجية سماوية لتعزيز الإضاءة الطبيعية وتجربة الفراغ.',
    },
    mainViewLabel: {
      en: 'PRIMARY MIXED-USE TOWER & URBAN CONTEXT',
      ar: 'المنظور الرئيسي للبرج والمحيط العمراني',
    },
    subViewsLabel: {
      en: 'ANALYTICAL SUB-SHOTS (ISOMETRIC & ATRIUM MODEL)',
      ar: 'اللقطات الفرعية (المنظور الإيزومتري وفناء الماكيت)',
    },
    subImages: [
      {
        src: './86.jpg',
        fallbackSrc: './assets/aistudio/86_ebde901f.jpg',
        title: {
          en: 'Digital 3D Isometric View & Podium Skylights',
          ar: 'المنظور الإيزومتري ثلاثي الأبعاد وقباب المنصة التجارية',
        },
        desc: {
          en: 'Isometric visualization showing the tower massing, commercial retail podium, polygonal skylight domes, and street-level landscaping.',
          ar: 'منظور إيزومتري رقمي يوضح تدرج كتل البرج، الشرفات السكنية، المنصة التجارية، والقباب الزجاجية العلوية مع دراسة حركة المشاة.',
        },
        badge: {
          en: 'ISOMETRIC VISUALIZATION',
          ar: 'اللقطة الفرعية 01 · المنظور الإيزومتري',
        },
      },
      {
        src: './87.jpg',
        fallbackSrc: './assets/aistudio/87_9a86b6f7.jpg',
        title: {
          en: 'Interior Courtyard & Skylight Atrium Model',
          ar: 'تفصيلة الفناء الداخلي والماكيت العمراني للقبة',
        },
        desc: {
          en: 'Close-up architectural model study illustrating the open mezzanine levels, transparent glass railings, and geometric steel-framed skylight canopy.',
          ar: 'دراسة ماكيت مقربة للفناء الداخلي المضاء طبيعياً، ميزانين المكاتب والأنشطة التجارية، وتفاصيل الهيكل المعدني للقبة السماوية.',
        },
        badge: {
          en: 'INTERNAL ATRIUM & MODEL',
          ar: 'اللقطة الفرعية 02 · الفناء الداخلي والماكيت',
        },
      },
    ],
    tag: 'MIXED-USE TOWER',
    year: '2026',
  },
  {
    id: 'more-5',
    imageKey: 'more5' as ImageSlotKey,
    defaultSrc: './35.jpg',
    fallbackSrc: './assets/aistudio/35_7fdd27c7.jpg',
    badge: {
      en: 'URBAN PLANNING & TOWER COMPLEX',
      ar: 'URBAN PLANNING & TOWER COMPLEX',
    },
    title: {
      en: 'Integrated Urban Towers Complex - Homs',
      ar: 'تصميم مجمع أبراج عمراني متكامل - حمص (Urban Towers Complex)',
    },
    subtitle: {
      en: 'Advanced urban planning project integrating high-rise towers, central plazas & green areas',
      ar: 'مشروع تخطيط حضري متطور يدمج بين الأبراج المرتفعة والساحات المركزية والمساحات الخضراء',
    },
    generalDescription: {
      en: 'مشروع تخطيط حضري متطور يدمج بين الأبراج المرتفعة والساحات المركزية والمساحات الخضراء، لتحقيق مجتمع عمراني مستدام ومتكامل الخدمات.',
      ar: 'مشروع تخطيط حضري متطور يدمج بين الأبراج المرتفعة والساحات المركزية والمساحات الخضراء، لتحقيق مجتمع عمراني مستدام ومتكامل الخدمات.',
    },
    mainViewLabel: {
      en: 'PRIMARY 2D MASTER PLAN & CAD SITE LAYOUT (35.jpg)',
      ar: 'المخطط العام والموقع العام (AutoCAD Master Plan - 35.jpg)',
    },
    subViewsLabel: {
      en: '3D AXONOMETRIC & WIREFRAME PERSPECTIVES (36.jpg & 37.jpg)',
      ar: 'المناظير الكتلية ثلاثية الأبعاد (36.jpg أسفل اليمين & 37.jpg أسفل اليسار)',
    },
    subImages: [
      {
        src: './36.jpg',
        fallbackSrc: './assets/aistudio/36_fc47d903.jpg',
        title: {
          en: '3D Axonometric Massing Perspective (Symmetrical View)',
          ar: 'المنظور الإكسونومتري الكتلي للأبراج (أسفل اليمين)',
        },
        desc: {
          en: '3D wireframe axonometric massing study demonstrating tower heights, radial concentric layout, and circular public plaza core.',
          ar: 'دراسة كتلية ثلاثية الأبعاد تُظهر توزيع الأبراج المرتفعة على المحيط الدائري وتدرج الارتفاعات حول الساحة المركزية والحدائق الإشعاعية.',
        },
        badge: {
          en: '3D AXONOMETRIC VIEW',
          ar: 'اللقطة الفرعية (أسفل اليمين) · 36.jpg',
        },
      },
      {
        src: './37.jpg',
        fallbackSrc: './assets/aistudio/37_da5f4060.jpg',
        title: {
          en: '3D Oblique Wireframe Perspective (Angular View)',
          ar: 'المنظور ثلاثي الأبعاد المائل (أسفل اليسار)',
        },
        desc: {
          en: 'Oblique 3D perspective showcasing relationship between tower cluster masses, perimeter ring road, and central civic spaces.',
          ar: 'لقطة منظورية ثلاثية الأبعاد بزاوية مائلة تبرز علاقة كتل الأبراج بالشبكة المحيطية ومسارات المشاة والحدائق العامة.',
        },
        badge: {
          en: '3D OBLIQUE PERSPECTIVE',
          ar: 'اللقطة الفرعية (أسفل اليسار) · 37.jpg',
        },
      },
    ],
    tag: 'URBAN PLANNING & TOWER COMPLEX',
    year: '2026',
  },
  {
    id: 'more-6',
    imageKey: 'more6' as ImageSlotKey,
    defaultSrc: './68.jpg',
    fallbackSrc: './assets/aistudio/68.jpg',
    badge: {
      en: 'HEALTHCARE & PUBLIC ARCHITECTURE',
      ar: 'HEALTHCARE & PUBLIC ARCHITECTURE',
    },
    title: {
      en: 'Modern Public Hospital Design - Homs',
      ar: 'تصميم مشفى عام حديث - حمص (Modern Public Hospital)',
    },
    subtitle: {
      en: 'Integrated modern healthcare facility harmonizing advanced clinical functions with architectural elegance',
      ar: 'صرح طبي متكامل يجمع بين الحداثة المعمارية والوظائف الاستشفائية المتقدمة',
    },
    generalDescription: {
      en: 'صرح طبي متكامل يجمع بين الحداثة المعمارية والوظائف الاستشفائية المتقدمة، مع واجهات زجاجية تعزز الإضاءة الطبيعية وتكسيات خارجية مستوحاة من التراث العمراني لحمص، محاط بحديقة ومواقف سيارات واسعة.',
      ar: 'صرح طبي متكامل يجمع بين الحداثة المعمارية والوظائف الاستشفائية المتقدمة، مع واجهات زجاجية تعزز الإضاءة الطبيعية وتكسيات خارجية مستوحاة من التراث العمراني لحمص، محاط بحديقة ومواقف سيارات واسعة.',
    },
    mainViewLabel: {
      en: 'PRIMARY FRONT ELEVATION & PLAZA (68.jpg)',
      ar: 'الواجهة الرئيسية والمدخل المعماري المؤطر (68.jpg)',
    },
    subViewsLabel: {
      en: 'PERSPECTIVE VIEWS & PARKING (70.png Right & 69.png Left)',
      ar: 'اللقطات المنظورية ومواقف السيارات (70.png أسفل اليمين & 69.png أسفل اليسار)',
    },
    subImages: [
      {
        src: './assets/aistudio/70_717e4a24.png',
        fallbackSrc: './70.png',
        title: {
          en: 'Hospital Main Approach & Parking Complex (Right)',
          ar: 'منظور مدخل المشفى والمواقف العامة (أسفل اليمين)',
        },
        desc: {
          en: 'Dynamic exterior perspective showcasing the main hospital block with illuminated lettering, visitor parking lanes, and radial landscaping.',
          ar: 'منظور خارجي يبرز كتلة المشفى الرئيسية مع كتابة اسم المشفى المنارة، وتنظيم مواقف الزوار والممرات الشجرية مع إطلالة البرج المحيط.',
        },
        badge: {
          en: 'HOSPITAL MAIN ENTRANCE & PARKING',
          ar: 'اللقطة الفرعية (أسفل اليمين) · 70.png',
        },
      },
      {
        src: './assets/aistudio/69_b754c8f8.png',
        fallbackSrc: './69.png',
        title: {
          en: 'Ambulance Egress & South Ward Facade (Left)',
          ar: 'المنظور الجانبي ومدخل الإسعاف والواجهات الزجاجية (أسفل اليسار)',
        },
        desc: {
          en: 'Side perspective highlighting emergency ambulance drop-off, cactus garden, modern curtain walling, and decorative stone louvre screen.',
          ar: 'لقطة جانبية توضح مسار سيارات الإسعاف المخصص، الحديقة الصحراوية مع النخيل، والواجهات الزجاجية الشفافة المضاءة بدفء.',
        },
        badge: {
          en: 'EMERGENCY EGRESS & SIDE FACADE',
          ar: 'اللقطة الفرعية (أسفل اليسار) · 69.png',
        },
      },
    ],
    tag: 'HEALTHCARE & PUBLIC ARCHITECTURE',
    year: '2026',
  },
];

interface FeaturedStudioImage {
  src: string;
  fallbackSrc?: string;
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
  badge: { en: string; ar: string };
}

interface FeaturedStudioProject {
  id: string;
  badge: { en: string; ar: string };
  title: { en: string; ar: string };
  subtitle: { en: string; ar: string };
  generalDescription: { en: string; ar: string };
  mainImage: FeaturedStudioImage;
  subImages: [FeaturedStudioImage, FeaturedStudioImage];
  year: string;
  tag: string;
}

const FEATURED_STUDIO_PROJECTS: FeaturedStudioProject[] = [
  {
    id: 'project-saudi-tower',
    badge: {
      en: 'RESIDENTIAL TOWER & URBAN CONTEXT',
      ar: 'RESIDENTIAL TOWER & URBAN CONTEXT',
    },
    title: {
      en: 'Contemporary Residential Tower - Saudi Arabia',
      ar: 'برج سكني معاصر - المملكة العربية السعودية',
    },
    subtitle: {
      en: 'Pivotal intersection modernist tower with dark grey facade massing and vertical timber louvers',
      ar: 'تصميم معماري متكامل لبرج سكني يقع على تقاطع محوري بلمسات خشبية رأسية',
    },
    generalDescription: {
      en: 'Integrated architectural design for a residential tower located at a pivotal intersection, combining modernist block massing with carefully crafted dark-grey facade finishes and vertical timber louver accents.',
      ar: 'تصميم معماري متكامل لبرج سكني يقع على تقاطع محوري، يجمع بين كتل الأبسطة الحداثية وتشطيبات الواجهات المدروسة بدرجات الرمادي الداكن مع تفاصيل اللوفت الخشبية الرأسية.',
    },
    mainImage: {
      src: './saudi-tower-main.png',
      fallbackSrc: './assets/aistudio/1_810bdc4c.png',
      title: {
        en: 'Vertical Facade Composition & Volumetric Detailing',
        ar: 'واجهة التكوين الرأسي والتفاصيل الحجمية',
      },
      desc: {
        en: 'Close-up vertical perspective highlighting architectural facade treatment with dark grey massing contrast, vertical timber louvers, and projected balconies.',
        ar: 'لقطة رأسية مقربة تبرز المعالجة المعمارية للواجهات باستخدام تباين كتل الرمادي الداكن مع اللمسات الخشبية الرأسية، وتوزيع الشرفات البارزة.',
      },
      badge: {
        en: 'PRIMARY FACADE ELEVATION',
        ar: 'الصورة الرئيسية · الواجهة الرأسية',
      },
    },
    subImages: [
      {
        src: './saudi-tower-urban.jpg',
        fallbackSrc: './assets/aistudio/2_61f0f7e3.jpg',
        title: {
          en: 'Urban Context & Surrounding Perspective',
          ar: 'السياق العمراني والمنظور المحيط',
        },
        desc: {
          en: 'Aerial perspective demonstrating tower placement at the pivotal intersection, traffic circulation, ground-level parking, and master landscaping.',
          ar: 'منظور جوي عام يوضح تموضع البرج عند التقاطع المحوري، مع دراسة حركة المرور، مواقف السيارات الأرضية، وتنسيق الموقع العام.',
        },
        badge: {
          en: 'URBAN CONTEXT & SITE',
          ar: 'اللقطة الفرعية 01 · السياق العمراني',
        },
      },
      {
        src: './saudi-tower-structural.jpg',
        fallbackSrc: './assets/aistudio/3_712691dc.jpg',
        title: {
          en: 'Analytical Structural Perspective & Spatial Layout',
          ar: 'المنظور الهيكلي التحليلي وتوزيع الفراغات',
        },
        desc: {
          en: 'Spatial axonometric view illustrating the structural skeleton and volumetric mass of the tower alongside schematic floor plan layouts.',
          ar: 'منظور هندسي فراغي يوضح الهيكل الإنشائي والكتلة الحجمية للبرج بجانب المخططات الأفقية التخطيطية.',
        },
        badge: {
          en: 'STRUCTURAL AXONOMETRIC & PLANS',
          ar: 'اللقطة الفرعية 02 · المنظور التحليلي',
        },
      },
    ],
    year: '2026',
    tag: 'TOWER · ARCHITECTURAL DESIGN',
  },
  {
    id: 'project-beelanta-jewelry',
    badge: {
      en: 'COMMERCIAL & INTERIOR DESIGN',
      ar: 'COMMERCIAL & INTERIOR DESIGN',
    },
    title: {
      en: 'Luxury Jewelry Boutique Design & Detailing (BeeLanta)',
      ar: 'تصميم وتفصيل متجر مجوهرات فاخر (BeeLanta)',
    },
    subtitle: {
      en: 'Contemporary luxury retail space with warm ambient lighting and fluid glass showcases',
      ar: 'تصميم داخلي معاصر لمتجر مجوهرات يدمج بين الفخامة والدفء البصري وطاولات العرض الزجاجية',
    },
    generalDescription: {
      en: 'Contemporary interior design for a luxury jewelry boutique blending elegance with visual warmth, utilizing concealed cove lighting and fluid glass display counters.',
      ar: 'تصميم داخلي معاصر لمتجر مجوهرات يدمج بين الفخامة والدفء البصري، مع توظيف الإضاءة المخفية وطاولات العرض الزجاجية بانسيابية تامة.',
    },
    mainImage: {
      src: './11.jpg',
      fallbackSrc: './assets/aistudio/11_b27aff1b.jpg',
      title: {
        en: 'Main Boutique Showroom & Fluid Display Counters',
        ar: 'المنظور الرئيسي لصالة العرض وطاولات المجوهرات',
      },
      desc: {
        en: 'Wide-angle interior perspective highlighting custom illuminated wall niches, timber vertical louvers, and curved glass display cases.',
        ar: 'تصميم داخلي معاصر لمتجر مجوهرات يدمج بين الفخامة والدفء البصري، مع توظيف الإضاءة المخفية وطاولات العرض الزجاجية بانسيابية تامة.',
      },
      badge: {
        en: 'PRIMARY RETAIL PERSPECTIVE',
        ar: 'الصورة الرئيسية · صالة العرض',
      },
    },
    subImages: [
      {
        src: './22.jpg',
        fallbackSrc: './assets/aistudio/22_3ed5bec0.jpg',
        title: {
          en: 'Reception Showcase & Curved Glass Counters',
          ar: 'كاونتر الاستقبال والواجهات المنحنية',
        },
        desc: {
          en: 'Fluid curved glass display counters with warm diffused illumination enhancing the luxury shopping experience.',
          ar: 'توزيع طاولات العرض الزجاجية بانسيابية تامة مع إضاءة دافئة تعزز تجربة التسوق الفاخرة.',
        },
        badge: {
          en: 'RECEPTION & LOUNGE VIEW',
          ar: 'اللقطة الفرعية 01 · كاونتر الاستقبال',
        },
      },
      {
        src: './33.jpg',
        fallbackSrc: './assets/aistudio/33_b13f69ca.jpg',
        title: {
          en: 'Overhead Spatial View & Circulation Layout',
          ar: 'المنظور العلوي وتوزيع الحركة الفراغية',
        },
        desc: {
          en: 'Elevated perspective demonstrating client circulation flow and geometric layout of jewelry counters.',
          ar: 'منظور علوي يوضح دراسة المسارات وانسيابية الحركة والمخطط الداخلي لطاولات العرض.',
        },
        badge: {
          en: 'OVERHEAD LAYOUT VIEW',
          ar: 'اللقطة الفرعية 02 · المنظور العلوي',
        },
      },
    ],
    year: '2026',
    tag: 'COMMERCIAL · INTERIOR DESIGN',
  },
  {
    id: 'project-nexus-office',
    badge: {
      en: 'CORPORATE INTERIOR & OFFICE DESIGN',
      ar: 'CORPORATE INTERIOR & OFFICE DESIGN',
    },
    title: {
      en: 'Nexus Corporate Headquarters (Modern Executive Office)',
      ar: 'تصميم مقر إداري لشركة Nexus (Modern Executive Office)',
    },
    subtitle: {
      en: 'Professional workspace harmonizing corporate identity with warm timbers & smart systems',
      ar: 'بيئة عمل احترافية تدمج بين الهوية المؤسسية والأخشاب الدافئة والأنظمة الذكية',
    },
    generalDescription: {
      en: 'Integrated interior design for Nexus corporate headquarters, blending corporate identity with visual comfort, utilizing warm timbers and concealed lighting to foster a productive workspace.',
      ar: 'تصميم داخلي متكامل لمقر شركة Nexus الإداري، يدمج بين الهوية المؤسسية والراحة البصرية، مع توظيف الأخشاب الدافئة والإضاءة المخفية لتوفير بيئة عمل احترافية تعزز الإنتاجية.',
    },
    mainImage: {
      src: './111.jpg',
      fallbackSrc: './assets/aistudio/111_9fc74fa8.jpg',
      title: {
        en: 'Reception Entrance & Main Corporate Corridor',
        ar: 'مدخل الاستقبال والممر الإداري الرئيسي لشركة Nexus',
      },
      desc: {
        en: 'Reception lobby and main administrative corridor featuring illuminated corporate branding, warm wood paneling, and refined minimalist reception desk.',
        ar: 'مدخل الاستقبال والممر الإداري الرئيسي لشركة Nexus بتشطيبات خشبية دافئة وكاونتر استقبال أنيق مع شعار مضيء يعكس الهوية المؤسسية.',
      },
      badge: {
        en: 'PRIMARY RECEPTION CORRIDOR',
        ar: 'الصورة الرئيسية · مدخل الاستقبال',
      },
    },
    subImages: [
      {
        src: './222.jpg',
        fallbackSrc: './assets/aistudio/222_d2efa940.jpg',
        title: {
          en: 'Executive Boardroom & Smart Display System',
          ar: 'غرفة الاجتماعات المتطورة ومنظومة العرض الذكية',
        },
        desc: {
          en: 'State-of-the-art meeting boardroom featuring an interactive display system, acoustic wood slat ceiling, and generous daylight.',
          ar: 'غرفة الاجتماعات المتطورة مجهزة بمنظومة عرض تفاعلية ذكية، أسقف خشبية طولية، وإضاءة طبيعية وافرة لتعزيز كفاءة اجتماعات فريق العمل.',
        },
        badge: {
          en: 'SMART BOARDROOM & DISPLAY',
          ar: 'اللقطة الفرعية 01 · غرفة الاجتماعات',
        },
      },
      {
        src: './333.jpg',
        fallbackSrc: './assets/aistudio/333_35d4c992.jpg',
        title: {
          en: 'Executive Office Suite & Built-in Wall Storage',
          ar: 'المكتب الإداري التنفيذي ووحدات التخزين الجدارية',
        },
        desc: {
          en: 'Executive administrative office with custom illuminated wall shelving, modern executive desks, and directional track lighting.',
          ar: 'المكتب الإداري التنفيذي ووحدات التخزين الجدارية المصممة بعناية مع طاولات عمل مريحة وإضاءة مسارية موجهة لتوفير بيئة عمل مريحة وهادئة.',
        },
        badge: {
          en: 'EXECUTIVE OFFICE & STORAGE',
          ar: 'اللقطة الفرعية 02 · المكتب التنفيذي',
        },
      },
    ],
    year: '2026',
    tag: 'COMMERCIAL · CORPORATE OFFICE',
  },
];

interface StudentWorkSlot {
  id: string;
  slotNumber: string;
  software: string;
  color: string;
  badgeBg: string;
  accentBorder: string;
  isLocked?: boolean;
  imageSrc?: string;
  fallbackSrc?: string;
  fit?: 'contain' | 'cover';
  title: { ar: string; en: string };
  subtitle: { ar: string; en: string };
  studentName?: { ar: string; en: string };
  softwareTag: string;
}

const STUDENT_WORK_SLOTS: StudentWorkSlot[] = [
  {
    id: 'student-slot-1',
    slotNumber: '01',
    software: 'Revit',
    color: 'text-cyan-400 border-cyan-500/40 bg-cyan-950/40',
    badgeBg: 'text-cyan-400 bg-cyan-950/70 border-cyan-500/40',
    accentBorder: 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.18)]',
    isLocked: false,
    imageSrc: './revit-student.jpg',
    fallbackSrc: './assets/aistudio/revit-student_22903744.jpg',
    fit: 'contain',
    title: {
      ar: 'نمذجة القوس المعماري الكلاسيكي باستخدام برامج الـ BIM (Classical Arch BIM Model)',
      en: 'Classical Arch Monument BIM Modeling (Classical Arch BIM Model)',
    },
    subtitle: {
      ar: 'نموذج ثلاثي الأبعاد دقيق يعكس مهارات النمذجة المعمارية المتقدمة لتشكيل العناصر التراثية والكلاسيكية (الأقواس، الأعمدة، والكرانيش) بأسلوب هندسي مدروس يبرز التناغم بين أصالة التشكيل وقوة البرمجيات الهندسية الحديثة.',
      en: 'Precision 3D BIM model reflecting advanced modeling skills for classical elements (monumental arches, fluted columns, and classical cornices) balancing heritage design with modern BIM software power.',
    },
    studentName: {
      ar: 'أعمال طلاب الأكاديمية المعتمدة',
      en: 'Certified Academy Student Work',
    },
    softwareTag: 'CLASSICAL BIM MODELING',
  },
  {
    id: 'student-slot-2',
    slotNumber: '02',
    software: 'Photoshop',
    color: 'text-blue-400 border-blue-500/40 bg-blue-950/40',
    badgeBg: 'text-blue-400 bg-blue-950/70 border-blue-500/40',
    accentBorder: 'border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.18)]',
    isLocked: false,
    imageSrc: './photo.jpg',
    fallbackSrc: './assets/aistudio/photo_7e518869.jpg',
    fit: 'contain',
    title: {
      ar: 'لوحة العرض المعماري المتكاملة - المساقط والقطاعات والمنظور (Architectural Presentation Board)',
      en: 'Comprehensive Architectural Presentation Board (Plans, Sections & Perspectives)',
    },
    subtitle: {
      ar: 'لوحة إخراج معماري شاملة تضم الموقع العام، مساقط الطوابق المختلفة (مسقط القبو والطابق الأول)، والقطاعات الطولية والعرضية (AA و BB)، بالإضافة إلى لقطات منظور ثلاثية الأبعاد (3D) توضح الفراغات الداخلية وتوزيع العرض والسيركوليشن داخل المبنى.',
      en: 'Comprehensive architectural presentation board incorporating master site plan, floor plans (basement & 1st floor), longitudinal/cross sections, and interior/exterior 3D perspective views.',
    },
    studentName: {
      ar: 'أعمال طلاب الأكاديمية المعتمدة',
      en: 'Certified Academy Student Work',
    },
    softwareTag: 'COMPREHENSIVE ARCHITECTURAL PRESENTATION',
  },
  {
    id: 'student-slot-3',
    slotNumber: '03',
    software: 'AutoCAD',
    color: 'text-red-400 border-red-500/40 bg-red-950/40',
    badgeBg: 'text-red-400 bg-red-950/70 border-red-500/40',
    accentBorder: 'border-red-500/40 hover:border-red-400 hover:shadow-[0_0_25px_rgba(239,68,68,0.18)]',
    isLocked: false,
    imageSrc: './cad.jpg',
    fallbackSrc: './assets/aistudio/cad_d93d7bbe.jpg',
    fit: 'contain',
    title: {
      ar: 'المخططات التنفيذية وتوزيع الخدمات الميكانيكية والكهربائية (CAD Working Drawings)',
      en: 'MEP & Electrical Services Working Layout (CAD Working Drawings)',
    },
    subtitle: {
      ar: 'لوحة هندسية تنفيذية بصيغة CAD توضح المساقط الأفقية مع التوزيع الدقيق لشبكات الخدمات، المحاور الإنشائية، والخطوط التوجيهية لضمان التكامل الهندسي والتقني بين مختلف أقسام المبنى.',
      en: 'Executive CAD drawing illustrating horizontal floor plans with precise MEP distribution, structural grid axes, and coordination guidelines for complete building systems integration.',
    },
    studentName: {
      ar: 'أعمال طلاب الأكاديمية المعتمدة',
      en: 'Certified Academy Student Work',
    },
    softwareTag: 'MEP & CAD WORKING DRAWINGS',
  },
  {
    id: 'student-slot-4',
    slotNumber: '04',
    software: 'Lumion',
    color: 'text-[#78b7d4] border-[#345D6F]/50 bg-[#345D6F]/30',
    badgeBg: 'text-[#78b7d4] bg-[#345D6F]/40 border-[#345D6F]/60',
    accentBorder: 'border-amber-500/35 bg-[#12100b]/85',
    isLocked: true,
    title: {
      ar: 'مشروع طالب متميز · لوميون سينمائي',
      en: 'Student Project · Lumion Cinematic 3D',
    },
    subtitle: {
      ar: 'رندرات واقعية ومقاطع سينمائية للبيئات الخارجية والإضاءة الطبيعية.',
      en: 'Photorealistic landscape rendering, cinematic lighting, and animation walkthroughs.',
    },
    softwareTag: 'LUMION VISUALIZATION',
  },
  {
    id: 'student-slot-5',
    slotNumber: '05',
    software: 'V-Ray',
    color: 'text-blue-400 border-blue-500/40 bg-blue-950/40',
    badgeBg: 'text-blue-400 bg-blue-950/70 border-blue-500/40',
    accentBorder: 'border-amber-500/35 bg-[#12100b]/85',
    isLocked: true,
    title: {
      ar: 'مشروع طالب متميز · فيري فائق الواقعية',
      en: 'Student Project · V-Ray Photorealism',
    },
    subtitle: {
      ar: 'إظهار داخلي واستوديو خامات فيزيائية PBR بإضاءة فائقة الدقة.',
      en: 'Studio interior lighting, physical GI calculations, and PBR material realism.',
    },
    softwareTag: 'V-RAY PHOTOREALISM',
  },
  {
    id: 'student-slot-6',
    slotNumber: '06',
    software: 'Enscape',
    color: 'text-amber-400 border-amber-500/40 bg-amber-950/40',
    badgeBg: 'text-amber-400 bg-amber-950/70 border-amber-500/40',
    accentBorder: 'border-amber-500/35 bg-[#12100b]/85',
    isLocked: true,
    title: {
      ar: 'مشروع طالب متميز · إنسكيب اللحظي',
      en: 'Student Project · Enscape Real-Time VR',
    },
    subtitle: {
      ar: 'لقطات بانورامية 360 وجولات VR تفاعلية لحظية فائقة السرعة.',
      en: 'Real-time 360-degree panoramas and interactive VR client presentations.',
    },
    softwareTag: 'ENSCAPE REAL-TIME',
  },
];

interface SectionTransitionDividerProps {
  sectionNumber: string;
  totalSections?: string;
  label: { en: string; ar: string };
  isRtl: boolean;
  accent?: 'cyan' | 'blue' | 'emerald' | 'amber' | 'neutral';
  targetId?: string;
}

function SectionTransitionDivider({
  sectionNumber,
  totalSections = '05',
  label,
  isRtl,
  accent = 'cyan',
  targetId,
}: SectionTransitionDividerProps) {
  const accentClasses = {
    cyan: {
      dot: 'bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.9)]',
      border: 'border-cyan-500/35 hover:border-cyan-400/60',
      text: 'text-cyan-300',
      line: 'via-cyan-400/50',
      glow: 'via-cyan-500/20',
      badgeBg: 'bg-[#091118]/90',
    },
    blue: {
      dot: 'bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]',
      border: 'border-blue-500/35 hover:border-blue-400/60',
      text: 'text-blue-300',
      line: 'via-blue-400/50',
      glow: 'via-blue-500/20',
      badgeBg: 'bg-[#090E18]/90',
    },
    emerald: {
      dot: 'bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.9)]',
      border: 'border-emerald-500/35 hover:border-emerald-400/60',
      text: 'text-emerald-300',
      line: 'via-emerald-400/50',
      glow: 'via-emerald-500/20',
      badgeBg: 'bg-[#08130E]/90',
    },
    amber: {
      dot: 'bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.9)]',
      border: 'border-amber-500/35 hover:border-amber-400/60',
      text: 'text-amber-300',
      line: 'via-amber-400/50',
      glow: 'via-amber-500/20',
      badgeBg: 'bg-[#140F08]/90',
    },
    neutral: {
      dot: 'bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.7)]',
      border: 'border-[#2D3748] hover:border-[#4A5568]',
      text: 'text-[#E2E8F0]',
      line: 'via-white/30',
      glow: 'via-white/10',
      badgeBg: 'bg-[#121212]/90',
    },
  }[accent];

  const handleClick = () => {
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="relative w-full overflow-hidden py-10 md:py-14 select-none">
      {/* Background Ambient Radial Glow that reveals dynamically on scroll */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className={`w-[320px] sm:w-[680px] h-[45px] sm:h-[65px] bg-gradient-to-r from-transparent ${accentClasses.glow} to-transparent blur-3xl`}
        />
      </motion.div>

      {/* Main Architectural Laser Axis */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-center gap-3 sm:gap-5">
        {/* Left hairline laser */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className={`h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#262626] ${accentClasses.line} origin-right rtl:origin-left`}
        />

        {/* Center architectural badge */}
        <motion.div
          initial={{ y: 20, opacity: 0, scale: 0.9 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleClick}
          className={`group px-3.5 sm:px-4.5 py-1.5 sm:py-2 rounded-full ${accentClasses.badgeBg} backdrop-blur-md border ${accentClasses.border} shadow-[0_4px_24px_rgba(0,0,0,0.6)] flex items-center gap-2.5 transition-all duration-300 ${
            targetId ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]' : ''
          }`}
          title={targetId ? (isRtl ? 'انتقل إلى هذا القسم' : 'Jump to this section') : undefined}
        >
          {/* Animated pulse dot */}
          <span className={`w-2 h-2 rounded-full ${accentClasses.dot} animate-pulse shrink-0`} />

          {/* Section index tracker */}
          <span className="font-mono-tabular text-[10px] sm:text-[11px] font-bold text-[#737373] tracking-wider">
            {sectionNumber} <span className="text-[#3A3A3A]">/</span> {totalSections}
          </span>

          <span className="text-[#3A3A3A] text-xs">|</span>

          {/* Section title */}
          <span
            className={`font-mono-tabular text-[10px] sm:text-[11px] font-medium ${accentClasses.text} tracking-wide whitespace-nowrap`}
          >
            {isRtl ? label.ar : label.en}
          </span>

          {/* Subtle directional scroll hint */}
          <ChevronDown className="w-3.5 h-3.5 text-[#737373] group-hover:text-white group-hover:translate-y-0.5 transition-all duration-200" />
        </motion.div>

        {/* Right hairline laser */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className={`h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#262626] ${accentClasses.line} origin-left rtl:origin-right`}
        />
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showMoreWorks, setShowMoreWorks] = useState<boolean>(false);
  const [expandedTrackIds, setExpandedTrackIds] = useState<Record<string, boolean>>({});
  const [expandedStudioWorks, setExpandedStudioWorks] = useState<Record<string, boolean>>({});
  const [expandedMoreWorks, setExpandedMoreWorks] = useState<Record<string, boolean>>({});

  const toggleStudioWork = (id: string) => {
    setExpandedStudioWorks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleMoreWork = (id: string) => {
    setExpandedMoreWorks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const [activeLightbox, setActiveLightbox] = useState<{
    src: string;
    fallbackSrc?: string;
    title: string;
    subtitle: string;
    tag: string;
  } | null>(null);
  const [customImages] = useState<Partial<Record<ImageSlotKey, string>>>(() => {
    try {
      const saved = localStorage.getItem('alnajjar_custom_images');
      if (!saved) return {};
      const parsed = JSON.parse(saved);
      // Clean up any stale .jfif references which fail in browsers
      for (const k of Object.keys(parsed)) {
        if (typeof parsed[k] === 'string' && parsed[k].endsWith('.jfif')) {
          delete parsed[k];
        }
      }
      return parsed;
    } catch {
      return {};
    }
  });

  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [lang, isRtl]);

  const handleToggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const toggleCourse = (id: string) => {
    setExpandedTrackIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const openAndScrollCourse = (id: string) => {
    setExpandedTrackIds((prev) => ({
      ...prev,
      [id]: true,
    }));
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] selection:bg-[#F5F5F5] selection:text-[#0A0A0A]"
    >
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#1F1F1F]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-8">
          <a
            href="#"
            className={`text-xs md:text-sm font-semibold ${
              isRtl ? 'tracking-normal' : 'tracking-[0.16em]'
            } text-[#F5F5F5] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity`}
          >
            {isRtl ? 'إبراهيم النجار' : 'IBRAHIM AL-NAJJAR'}
          </a>

          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-[#888888]"
          >
            <a href="#about" className="hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0">
              {isRtl ? 'عن المدرب' : 'About'}
            </a>
            <a href="#software-ecosystem" className="hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0">
              {isRtl ? 'البرامج الهندسية' : 'Software Ecosystem'}
            </a>
            <a href="#teaching" className="hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0">
              {isRtl ? 'التدريس' : 'Teaching'}
            </a>
            <a href="#student-works" className="hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0">
              {isRtl ? 'أعمال الطلاب' : 'Student Works'}
            </a>
            <a href="#contact" className="hover:text-[#F5F5F5] transition-colors whitespace-nowrap shrink-0">
              {isRtl ? 'تواصل معنا' : "Let's talk"}
            </a>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              title={isRtl ? 'تابعنا على إنستغرام: @arch.ibrahim.najar' : 'Follow on Instagram: @arch.ibrahim.najar'}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-[#888888] hover:text-[#F472B6] bg-[#121212] border border-[#1F1F1F] hover:border-[#E1306C]/50 rounded transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
              <span className="hidden sm:inline font-mono-tabular text-[11px]">@arch.ibrahim.najar</span>
            </a>

            <button
              type="button"
              onClick={handleToggleLanguage}
              aria-label="Switch Language"
              className="inline-flex items-center justify-center px-3.5 py-1.5 text-xs font-semibold text-[#F5F5F5] bg-[#121212] border border-[#1F1F1F] rounded hover:border-[#888888] transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="md:hidden p-2 text-[#888888] hover:text-[#F5F5F5] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#1F1F1F] bg-[#0A0A0A] px-6 py-5 space-y-3">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5]">
              {isRtl ? 'عن المدرب' : 'About'}
            </a>
            <a href="#software-ecosystem" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5]">
              {isRtl ? 'البرامج الهندسية' : 'Software Ecosystem'}
            </a>
            <a href="#teaching" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5]">
              {isRtl ? 'التدريس' : 'Teaching'}
            </a>
            <a href="#student-works" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm font-medium text-[#888888] hover:text-[#F5F5F5]">
              {isRtl ? 'أعمال الطلاب' : 'Student Works'}
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-1.5 text-sm font-medium text-[#F5F5F5]">
              {isRtl ? 'تواصل معنا' : "Let's talk"}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 pt-2 border-t border-[#1F1F1F] text-xs font-medium text-[#F472B6]"
            >
              <Instagram className="w-4 h-4 text-[#E1306C]" />
              <span>{isRtl ? 'تابعنا على إنستغرام (@arch.ibrahim.najar)' : 'Follow on Instagram (@arch.ibrahim.najar)'}</span>
            </a>
          </div>
        )}

        {/* Interactive Top Scroll Progress Laser Bar - Direct Visual Feedback While Scrolling */}
        <motion.div
          style={{ scaleX }}
          className="h-[2.5px] bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 origin-left rtl:origin-right w-full shadow-[0_0_12px_rgba(6,182,212,0.85)]"
        />
      </header>

      <main>
        {/* HERO SECTION */}
        <motion.section
          id="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pt-16 md:pt-24 pb-14 md:pb-20 border-b border-[#1F1F1F]/50 relative"
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            {/* Transparent Gray Box linking Circular Profile Image and Name + Text below it */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex flex-col sm:flex-row sm:items-center gap-6 md:gap-8 mb-12 md:mb-16 p-6 sm:p-8 rounded-2xl bg-[#141414]/75 backdrop-blur-md border border-[#262626] shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
            >
              <div
                onClick={() =>
                  setActiveLightbox({
                    src: customImages.profile || './profile.jpg',
                    title: isRtl ? 'المهندس إبراهيم النجار' : 'Arch. Ibrahim Al-Najjar',
                    subtitle: isRtl
                      ? 'مهندس معماري ومدرّب محترف'
                      : 'ARCHITECTURAL ENGINEER & EDUCATOR',
                    tag: isRtl ? 'المدرب والمؤسس' : 'INSTRUCTOR & FOUNDER',
                  })
                }
                title={isRtl ? 'عرض الصورة بدقة كاملة' : 'View profile photo'}
                className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border border-[#2A2A2A] bg-[#121212] shrink-0 cursor-pointer group/avatar shadow-inner"
              >
                <img
                  src={customImages.profile || './profile.jpg'}
                  alt="Arch. Ibrahim Al-Najjar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover/avatar:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== FALLBACK_SVGS.profile) target.src = FALLBACK_SVGS.profile;
                  }}
                />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold tracking-tight text-[#F5F5F5] leading-[1.08] headline-balance">
                  {isRtl ? 'المهندس إبراهيم النجار' : 'Arch. Ibrahim Al-Najjar'}
                </h1>
                <p
                  className={`font-mono-tabular text-xs sm:text-sm ${
                    isRtl ? 'tracking-normal' : 'tracking-[0.18em]'
                  } text-[#888888] mt-2 sm:mt-3`}
                >
                  {isRtl ? 'مهندس معماري ومدرّب محترف' : 'ARCHITECTURAL ENGINEER & EDUCATOR'}
                </p>
              </div>
            </motion.div>

            {/* Editorial Split Row Below */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 border-t border-[#1F1F1F] mb-12 md:mb-16 items-start"
            >
              <div className="lg:col-span-5">
                <h2 className="text-xl sm:text-2xl md:text-[1.75rem] font-semibold tracking-tight text-[#F5F5F5] leading-[1.3] headline-balance">
                  {isRtl ? 'عمارة مدروسة. ومعرفة تستحق المشاركة.' : 'Thoughtful architecture. Knowledge worth sharing.'}
                </h2>
              </div>
              <div className="lg:col-span-7">
                <p className="text-base md:text-[1.0625rem] text-[#888888] leading-[1.75] max-w-[68ch]">
                  {isRtl
                    ? 'مهندس معماري ومدرّب ذو خبرة احترافية منذ عام 2023، قام بتدريب وتأهيل أكثر من 600+ طالب ومهندس حول العالم. متخصص في تحويل الأفكار المعمارية المعقدة إلى لوحات بصرية استثنائية باستخدام Revit و Photoshop و AutoCAD و Lumion و V-Ray و Enscape.'
                    : 'Architectural engineer and instructor with professional experience since 2023, having successfully trained over 600+ students worldwide. Specializing in transforming complex architectural concepts into high-end visual masterpieces using Revit, Photoshop, AutoCAD, Lumion, V-Ray, and Enscape.'}
                </p>
              </div>
            </motion.div>

            {/* Hero Image Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#1F1F1F] bg-[#121212] group shadow-2xl"
            >
              <img
                src={customImages.hero || './hero-render.jpg'}
                alt="Twilight Architectural Render"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== FALLBACK_SVGS.hero) target.src = FALLBACK_SVGS.hero;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-[#0A0A0A]/90 backdrop-blur-md border border-[#1F1F1F] px-3.5 py-2 rounded">
                <span className="font-mono-tabular text-[11px] sm:text-xs text-[#F5F5F5]">
                  {isRtl ? 'الكتلة / الضوء / الأجواء' : 'FORM / LIGHT / ATMOSPHERE'}
                </span>
              </div>
            </motion.div>

            {/* Interactive Scroll Down Cue - Shows user that page has smooth transitions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center mt-10 md:mt-14"
            >
              <a
                href="#about"
                className="group inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-[#121212]/90 hover:bg-[#181818] border border-[#222222] hover:border-cyan-500/40 text-[#888888] hover:text-white transition-all text-xs font-mono-tabular cursor-pointer shadow-sm backdrop-blur-md"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>{isRtl ? 'اسحب للأسفل لاستكشاف الأقسام' : 'Scroll down to explore'}</span>
                <ChevronDown className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-y-0.5 transition-transform animate-bounce" />
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* TRANSITION DIVIDER 01: HERO -> ABOUT */}
        <SectionTransitionDivider
          sectionNumber="01"
          totalSections="05"
          label={{ ar: 'عن المهندس والخبرة التدريبية', en: 'ABOUT & CREDENTIALS' }}
          isRtl={isRtl}
          accent="cyan"
          targetId="about"
        />

        {/* SECTION: ABOUT & STATS */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="py-20 md:py-24 border-b border-[#1F1F1F]/50 scroll-mt-16 relative"
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
              <div className="lg:col-span-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F5] leading-[1.2] headline-balance">
                  {isRtl ? 'التصميم الجيد يبدأ من الفهم العميق.' : 'Good design begins with understanding.'}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-base md:text-[1.0625rem] text-[#888888] leading-[1.75] max-w-[70ch]">
                  {isRtl
                    ? 'أنا المهندس المعماري إبراهيم النجار، مهندس معماري ومدرّب شغوف بنقل المعرفة. بدأت رحلتي في التدريب المعماري الاحترافي عام 2023، ومنذ ذلك الحين تشرفت بتدريب وتمكين أكثر من 600+ طالب ومهندس حول العالم. يجمع منهجي بين الإبداع في التصميم المعماري والدقة الهندسية في التنفيذ، ورسالتي مساعدة المعماريين على تحويل مفاهيمهم إلى قصص واقعية مبهرة عبر إتقان حزمة البرامج الأساسية.'
                    : "I'm Arch. Ibrahim Al-Najjar, an architectural engineer and dedicated educator. My journey in professional architectural training started in 2023, and since then, I’ve had the privilege of teaching and empowering over 600+ students and engineers worldwide. My approach bridges the gap between creative architectural design and precise technical execution. My mission is to help aspiring architects transform complex concepts into stunning, realistic visual stories through mastering the core software stack."}
                </p>
              </div>
            </div>

            {/* Compact Stats Strip */}
            <div className="bg-[#121212] border border-[#222] rounded-xl p-3 grid grid-cols-3 divide-x divide-[#222] rtl:divide-x-reverse text-center">
              <div className="px-2 py-1">
                <div className="text-lg md:text-xl font-bold text-white font-mono-tabular">
                  {isRtl ? 'منذ 2023' : 'Since 2023'}
                </div>
                <p className="text-[10px] md:text-xs text-[#888888] font-medium mt-0.5">
                  {isRtl ? 'خبرة وتدريب معماري' : 'Experience & Instruction'}
                </p>
              </div>

              <div className="px-2 py-1">
                <div className="text-lg md:text-xl font-bold text-white font-mono-tabular">
                  {isRtl ? '+600' : '600+'}
                </div>
                <p className="text-[10px] md:text-xs text-[#888888] font-medium mt-0.5">
                  {isRtl ? 'طالب ومهندس حول العالم' : 'Students Worldwide'}
                </p>
              </div>

              <div className="px-2 py-1">
                <div className="text-lg md:text-xl font-bold text-white font-mono-tabular">
                  {isRtl ? '6 برامج' : '6 Tools'}
                </div>
                <p className="text-[10px] md:text-xs text-[#888888] font-medium mt-0.5">
                  {isRtl ? 'منظومة BIM وإظهار متكاملة' : 'BIM & Rendering Stack'}
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* TRANSITION DIVIDER 02: ABOUT -> SOFTWARE ECOSYSTEM */}
        <SectionTransitionDivider
          sectionNumber="02"
          totalSections="05"
          label={{ ar: 'منظومة البرامج الهندسية والأعمال المميزة', en: 'CORE SOFTWARE & FEATURED WORKS' }}
          isRtl={isRtl}
          accent="blue"
          targetId="software-ecosystem"
        />

        {/* SECTION: CORE SOFTWARE ECOSYSTEM (WITH LOGOS, NO NUMBERS, NO MICRO-LABEL) */}
        <motion.section
          id="software-ecosystem"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="py-20 md:py-28 border-b border-[#1F1F1F]/50 scroll-mt-16 bg-[#0E0E0E] relative"
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.15] mb-5 headline-balance">
                {isRtl ? 'منظومة البرامج الهندسية المعتمدة' : 'Core Software Ecosystem'}
              </h2>
              <p className="text-base text-[#888888] leading-relaxed">
                {isRtl
                  ? 'اضغط على أي برنامج أدناه ليفتح لك تفاصيل الكورس كاملة ومنهجه وأعمال الطلاب الخاصة به وسعر التسجيل.'
                  : 'Click any software below to expand its full curriculum, view independent student projects, and see enrollment fees.'}
              </p>
            </div>

            {/* 6 Clean Program Buttons WITH OFFICIAL LOGOS (NO ARROWS) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 mb-16">
              {SOFTWARE_TRACKS.map((track) => (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => openAndScrollCourse(track.id)}
                  className="group p-4 sm:p-4.5 rounded-xl bg-[#121212] border border-[#1F1F1F] hover:border-[#888888] transition-all duration-200 text-start flex items-center gap-3 cursor-pointer"
                >
                  <SoftwareLogo name={track.name} size="default" />
                  <span className="text-sm sm:text-base font-bold text-[#F5F5F5] group-hover:text-white truncate">
                    {track.name}
                  </span>
                </button>
              ))}
            </div>

            {/* 3 Primary Featured Studio Works */}
            <div className="pt-10 border-t border-[#1F1F1F]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F5F5]">
                  {isRtl ? 'جزء من أعمالنا المميزة' : 'A Selection of Our Distinctive Works'}
                </h3>
                <span className="text-xs font-mono-tabular text-[#888888]">
                  {isRtl ? 'نماذج ومخرجات معمارية وبصرية مختارة' : 'Curated Architectural & Visual Highlights'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {FEATURED_STUDIO_PROJECTS.map((proj) => {
                  const isExpanded = Boolean(expandedStudioWorks[proj.id]);
                  return (
                    <article
                      key={proj.id}
                      className="bg-[#141923] border border-[#1e293b] hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(6,182,212,0.15)] flex flex-col"
                    >
                      {/* Card Preview Header / Cover Image */}
                      <div
                        onClick={() => toggleStudioWork(proj.id)}
                        className="group relative aspect-[16/10] w-full overflow-hidden bg-[#0A0D14] cursor-pointer select-none"
                        title={isRtl ? 'انقر لتوسيع أو طي المشروع' : 'Click to toggle project'}
                      >
                        <img
                          src={proj.mainImage.src}
                          alt={proj.title[lang]}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          onError={(e) => {
                            if (proj.mainImage.fallbackSrc && e.currentTarget.src !== proj.mainImage.fallbackSrc) {
                              e.currentTarget.src = proj.mainImage.fallbackSrc;
                            }
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#141923] via-transparent to-black/30 opacity-90 pointer-events-none" />

                        {/* Top Badge */}
                        <span className="absolute top-3 start-3 font-mono-tabular text-[9px] sm:text-[10px] font-bold tracking-wider text-cyan-300 bg-[#090D14]/90 border border-cyan-500/40 px-2.5 py-1 rounded shadow-sm">
                          {proj.badge[lang]}
                        </span>

                        {/* Photos count indicator with direct Lightbox trigger */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveLightbox({
                              src: proj.mainImage.src,
                              title: proj.mainImage.title[lang],
                              subtitle: proj.mainImage.desc[lang],
                              tag: proj.badge[lang],
                            });
                          }}
                          className="absolute top-3 end-3 font-mono-tabular text-[10px] font-semibold text-white/90 bg-black/75 hover:bg-black backdrop-blur-sm border border-white/20 hover:border-cyan-400 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer z-10"
                          title={isRtl ? 'تكبير الصورة بدقة كاملة' : 'View Full Resolution'}
                        >
                          <Maximize2 className="w-3 h-3 text-cyan-300" />
                          <span>3 {isRtl ? 'صور' : 'PHOTOS'}</span>
                        </button>

                        {/* Bottom overlay prompt */}
                        <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[11px] text-[#CBD5E1]">
                          <span className="font-mono-tabular text-[10px] text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded">
                            {proj.year}
                          </span>
                          <span className="text-[10px] font-mono-tabular text-cyan-200 group-hover:underline">
                            {isExpanded
                              ? (isRtl ? 'إغلاق المعرض ▲' : 'Close Gallery ▲')
                              : (isRtl ? 'استعراض المشروع (3 صور) ▼' : 'Expand Project (3 Photos) ▼')}
                          </span>
                        </div>
                      </div>

                      {/* Card Summary Header */}
                      <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-[#F5F5F5] group-hover:text-white transition-colors mb-2 leading-snug">
                            {proj.title[lang]}
                          </h4>
                          <p className="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed">
                            {proj.generalDescription[lang]}
                          </p>
                        </div>

                        {/* Interactive Toggle Button */}
                        <button
                          type="button"
                          onClick={() => toggleStudioWork(proj.id)}
                          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                            isExpanded
                              ? 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                              : 'bg-[#0E131C] border-[#1e293b] text-[#CBD5E1] hover:text-white hover:border-cyan-500/40 hover:bg-[#131a26]'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>
                              {isExpanded
                                ? (isRtl ? 'إغلاق تفاصيل المشروع' : 'Collapse Project Details')
                                : (isRtl ? 'فتح المشروع والمعرض (3 صور)' : 'Open Project & Gallery (3 Photos)')}
                            </span>
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* EXPANDED INTERACTIVE WORK GALLERY (الصورة الأساسية فوق + 2 فرعيين بنفس الحجم + وصف المشروع) */}
                      {isExpanded && (
                        <div className="px-5 pb-5 pt-2 border-t border-[#1e293b] space-y-4 animate-in fade-in duration-300 bg-[#0d121a]">
                          {/* 1. Main Image (الصورة الأساسية فوق) */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-[11px] font-mono-tabular">
                              <span className="text-cyan-400 font-semibold uppercase flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                {isRtl ? 'الصورة الرئيسية (الواجهة الرأسية)' : 'PRIMARY FACADE VIEW'}
                              </span>
                              <span className="text-[#64748b]">1 / 3</span>
                            </div>

                            <div
                              onClick={() =>
                                setActiveLightbox({
                                  src: proj.mainImage.src,
                                  title: proj.mainImage.title[lang],
                                  subtitle: proj.mainImage.desc[lang],
                                  tag: proj.badge[lang],
                                })
                              }
                              className="group/main relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#1e293b] hover:border-cyan-400/60 cursor-pointer transition-all shadow-sm"
                            >
                              <img
                                src={proj.mainImage.src}
                                alt={proj.mainImage.title[lang]}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover/main:scale-105"
                                onError={(e) => {
                                  if (proj.mainImage.fallbackSrc && e.currentTarget.src !== proj.mainImage.fallbackSrc) {
                                    e.currentTarget.src = proj.mainImage.fallbackSrc;
                                  }
                                }}
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/main:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="px-3 py-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono-tabular flex items-center gap-1.5">
                                  <span>🔍</span> {isRtl ? 'تكبير الصورة بدقة كاملة' : 'View Full Resolution'}
                                </span>
                              </div>
                            </div>

                            <div className="p-3 rounded-xl bg-[#0E131C] border border-[#1e293b]/70">
                              <h5 className="text-xs font-bold text-cyan-300 mb-1">
                                {proj.mainImage.title[lang]}
                              </h5>
                              <p className="text-[11px] text-[#CBD5E1] leading-relaxed">
                                {proj.mainImage.desc[lang]}
                              </p>
                            </div>
                          </div>

                          {/* 2. Two Sub-Images Underneath (تحتم 2 فرعيين) - GUARANTEED STRICTLY EQUAL SIZES */}
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-[11px] font-mono-tabular">
                              <span className="text-[#94a3b8] font-semibold uppercase">
                                {isRtl ? 'اللقطات الفرعية (2 فرعيين بنفس الحجم)' : 'ANALYTICAL SUB-SHOTS (EQUAL SIZES)'}
                              </span>
                              <span className="text-[#64748b]">2 &amp; 3 / 3</span>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              {proj.subImages.map((sub, sIdx) => (
                                <div key={sIdx} className="flex flex-col space-y-1.5">
                                  <div
                                    onClick={() =>
                                      setActiveLightbox({
                                        src: sub.src,
                                        title: sub.title[lang],
                                        subtitle: sub.desc[lang],
                                        tag: sub.badge[lang],
                                      })
                                    }
                                    className="group/sub relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#1e293b] hover:border-cyan-400/60 cursor-pointer transition-all shadow-sm"
                                  >
                                    <img
                                      src={sub.src}
                                      alt={sub.title[lang]}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover/sub:scale-105"
                                      onError={(e) => {
                                        if (sub.fallbackSrc && e.currentTarget.src !== sub.fallbackSrc) {
                                          e.currentTarget.src = sub.fallbackSrc;
                                        }
                                      }}
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/sub:opacity-100 transition-opacity flex items-center justify-center">
                                      <span className="p-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs">
                                        🔍
                                      </span>
                                    </div>
                                    <span className="absolute bottom-2 start-2 font-mono-tabular text-[9px] text-[#F5F5F5] bg-black/80 px-2 py-0.5 rounded border border-[#1e293b]">
                                      {sIdx === 0 ? '01' : '02'}
                                    </span>
                                  </div>

                                  <div className="p-2.5 rounded-xl bg-[#0E131C] border border-[#1e293b]/70 flex flex-col justify-between flex-grow">
                                    <h6 className="text-[11px] font-bold text-white line-clamp-1 mb-1">
                                      {sub.title[lang]}
                                    </h6>
                                    <p className="text-[10px] text-[#94a3b8] line-clamp-3 leading-relaxed">
                                      {sub.desc[lang]}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* 3. Project General Description (مع وصف المشروع) */}
                          <div className="p-4 rounded-xl bg-[#0A0E16] border border-cyan-500/30 space-y-2 shadow-inner">
                            <div className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              <span className="font-mono-tabular text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                                {isRtl ? 'الوصف العام للمشروع' : 'PROJECT GENERAL OVERVIEW'}
                              </span>
                            </div>
                            <p className="text-xs text-[#CBD5E1] leading-relaxed">
                              {proj.generalDescription[lang]}
                            </p>
                          </div>

                          {/* Collapse Action */}
                          <button
                            type="button"
                            onClick={() => toggleStudioWork(proj.id)}
                            className="w-full py-2 text-center text-xs font-mono-tabular text-[#888888] hover:text-cyan-300 transition-colors cursor-pointer border-t border-[#1e293b] pt-3"
                          >
                            {isRtl ? '▲ طي تفاصيل هذا المشروع' : '▲ Collapse this project'}
                          </button>
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>

              {/* "المزيد من الأعمال المميزة" Trigger Button */}
              <div className="mt-12 text-center">
                <button
                  type="button"
                  onClick={() => setShowMoreWorks(!showMoreWorks)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#121212] border border-[#1F1F1F] hover:border-[#888888] text-sm font-semibold text-[#F5F5F5] hover:text-white transition-all duration-200 cursor-pointer shadow-sm group"
                >
                  <span>{isRtl ? 'المزيد من الأعمال المميزة' : 'View More Featured Projects'}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#888888] group-hover:text-[#F5F5F5] transition-transform duration-300 ${
                      showMoreWorks ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Expandable Drawer with Additional Student Works */}
              {showMoreWorks && (
                <div className="mt-8 pt-8 border-t border-[#1F1F1F] animate-in fade-in duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-[#F5F5F5]">
                        {isRtl ? 'المزيد من أعمالنا المعمارية المميزة' : 'Additional Featured Works'}
                      </h4>
                      <p className="text-xs text-[#888888] mt-1">
                        {isRtl
                          ? 'مشاريع متقدمة في النمذجة ثلاثية الأبعاد، المخططات التنفيذية، والإظهار المعماري الواقعي'
                          : 'Advanced student works in 3D BIM massing, working drawings, and architectural visualization'}
                      </p>
                    </div>
                    <span className="font-mono-tabular text-xs text-[#888888]">
                      {isRtl ? 'معرض مخصص · 6 مشاريع إضافية' : 'Curated Gallery · 6 Additional Projects'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
                    {MORE_STUDENT_WORKS.map((work) => {
                      const imgSrc = work.defaultSrc;
                      const hasSubImages = Boolean(work.subImages && work.subImages.length > 0);
                      const isExpanded = Boolean(expandedMoreWorks[work.id]);

                      if (hasSubImages && work.subImages) {
                        return (
                          <article
                            key={work.id}
                            className="bg-[#141923] border border-[#1e293b] hover:border-cyan-500/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(6,182,212,0.15)] flex flex-col"
                          >
                            {/* Card Cover Image */}
                            <div
                              onClick={() => toggleMoreWork(work.id)}
                              className="group relative aspect-[16/10] w-full overflow-hidden bg-[#0A0D14] cursor-pointer select-none"
                              title={isRtl ? 'انقر لتوسيع أو طي المشروع' : 'Click to toggle project'}
                            >
                              <img
                                src={imgSrc}
                                alt={work.title[lang]}
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                onError={(e) => {
                                  if (work.fallbackSrc && e.currentTarget.src !== work.fallbackSrc) {
                                    e.currentTarget.src = work.fallbackSrc;
                                  }
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#141923] via-transparent to-black/30 opacity-90 pointer-events-none" />

                              {/* Top Badge */}
                              <span className="absolute top-3 start-3 font-mono-tabular text-[9px] sm:text-[10px] font-bold tracking-wider text-cyan-300 bg-[#090D14]/90 border border-cyan-500/40 px-2.5 py-1 rounded shadow-sm">
                                {work.badge ? work.badge[lang] : work.tag}
                              </span>

                              {/* Photos count indicator with direct Lightbox trigger */}
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveLightbox({
                                    src: imgSrc,
                                    fallbackSrc: work.fallbackSrc,
                                    title: work.title[lang],
                                    subtitle: work.generalDescription ? work.generalDescription[lang] : work.subtitle[lang],
                                    tag: work.badge ? work.badge[lang] : work.tag,
                                  });
                                }}
                                className="absolute top-3 end-3 font-mono-tabular text-[10px] font-semibold text-white/90 bg-black/75 hover:bg-black backdrop-blur-sm border border-white/20 hover:border-cyan-400 px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer z-10"
                                title={isRtl ? 'تكبير الصورة بدقة كاملة' : 'View Full Resolution'}
                              >
                                <Maximize2 className="w-3 h-3 text-cyan-300" />
                                <span>3 {isRtl ? 'صور' : 'PHOTOS'}</span>
                              </button>

                              {/* Bottom overlay prompt */}
                              <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-[11px] text-[#CBD5E1]">
                                <span className="font-mono-tabular text-[10px] text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded">
                                  {work.year}
                                </span>
                                <span className="text-[10px] font-mono-tabular text-cyan-200 group-hover:underline">
                                  {isExpanded
                                    ? (isRtl ? 'إغلاق المعرض ▲' : 'Close Gallery ▲')
                                    : (isRtl ? 'استعراض المشروع (3 صور) ▼' : 'Expand Project (3 Photos) ▼')}
                                </span>
                              </div>
                            </div>

                            {/* Card Summary Header with H5 */}
                            <div className="p-5 flex flex-col flex-grow justify-between gap-4">
                              <div>
                                <h5 className="text-base sm:text-lg font-bold text-[#F5F5F5] group-hover:text-white transition-colors mb-2 leading-snug">
                                  {work.title[lang]}
                                </h5>
                                <p className="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed">
                                  {work.generalDescription ? work.generalDescription[lang] : work.subtitle[lang]}
                                </p>
                              </div>

                              {/* Interactive Toggle Button */}
                              <button
                                type="button"
                                onClick={() => toggleMoreWork(work.id)}
                                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all duration-200 cursor-pointer ${
                                  isExpanded
                                    ? 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                                    : 'bg-[#0E131C] border-[#1e293b] text-[#CBD5E1] hover:text-white hover:border-cyan-500/40 hover:bg-[#131a26]'
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                                  <span>
                                    {isExpanded
                                      ? (isRtl ? 'إغلاق تفاصيل المشروع' : 'Collapse Project Details')
                                      : (isRtl ? 'فتح المشروع والمعرض (3 صور)' : 'Open Project & Gallery (3 Photos)')}
                                  </span>
                                </span>
                                <ChevronDown
                                  className={`w-4 h-4 text-cyan-400 transition-transform duration-300 ${
                                    isExpanded ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                            </div>

                            {/* EXPANDED INTERACTIVE WORK GALLERY */}
                            {isExpanded && (
                              <div className="px-5 pb-5 pt-2 border-t border-[#1e293b] space-y-4 animate-in fade-in duration-300 bg-[#0d121a]">
                                {/* 1. Main Image */}
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between text-[11px] font-mono-tabular">
                                    <span className="text-cyan-400 font-semibold uppercase flex items-center gap-1.5">
                                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                      {work.mainViewLabel
                                        ? work.mainViewLabel[lang]
                                        : (isRtl ? 'المخطط / الصورة الرئيسية' : 'PRIMARY MAIN VIEW')}
                                    </span>
                                    <span className="text-[#64748b]">1 / 3</span>
                                  </div>

                                  <div
                                    onClick={() =>
                                      setActiveLightbox({
                                        src: imgSrc,
                                        fallbackSrc: work.fallbackSrc,
                                        title: work.title[lang],
                                        subtitle: work.generalDescription ? work.generalDescription[lang] : work.subtitle[lang],
                                        tag: work.badge ? work.badge[lang] : work.tag,
                                      })
                                    }
                                    className="group/main relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#1e293b] hover:border-cyan-400/60 cursor-pointer transition-all shadow-sm"
                                  >
                                    <img
                                      src={imgSrc}
                                      alt={work.title[lang]}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover/main:scale-105"
                                      onError={(e) => {
                                        if (work.fallbackSrc && e.currentTarget.src !== work.fallbackSrc) {
                                          e.currentTarget.src = work.fallbackSrc;
                                        }
                                      }}
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/main:opacity-100 transition-opacity flex items-center justify-center">
                                      <span className="px-3 py-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono-tabular flex items-center gap-1.5">
                                        <span>🔍</span> {isRtl ? 'تكبير الصورة بدقة كاملة' : 'View Full Resolution'}
                                      </span>
                                    </div>
                                  </div>
                                </div>

                                {/* 2. Two Sub-Images */}
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between text-[11px] font-mono-tabular">
                                    <span className="text-[#94a3b8] font-semibold uppercase">
                                      {work.subViewsLabel
                                        ? work.subViewsLabel[lang]
                                        : (isRtl ? 'اللقطات والمساقط الفرعية' : 'ANALYTICAL SUB-SHOTS')}
                                    </span>
                                    <span className="text-[#64748b]">2 &amp; 3 / 3</span>
                                  </div>

                                  <div className="grid grid-cols-2 gap-3">
                                    {work.subImages.map((sub, sIdx) => (
                                      <div key={sIdx} className="flex flex-col space-y-1.5">
                                        <div
                                          onClick={() =>
                                            setActiveLightbox({
                                              src: sub.src,
                                              fallbackSrc: sub.fallbackSrc,
                                              title: sub.title[lang],
                                              subtitle: sub.desc[lang],
                                              tag: sub.badge[lang],
                                            })
                                          }
                                          className="group/sub relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#0A0D14] border border-[#1e293b] hover:border-cyan-400/60 cursor-pointer transition-all shadow-sm"
                                        >
                                          <img
                                            src={sub.src}
                                            alt={sub.title[lang]}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover/sub:scale-105"
                                            onError={(e) => {
                                              if (sub.fallbackSrc && e.currentTarget.src !== sub.fallbackSrc) {
                                                e.currentTarget.src = sub.fallbackSrc;
                                              }
                                            }}
                                          />
                                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/sub:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="p-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs">
                                              🔍
                                            </span>
                                          </div>
                                          <span className="absolute bottom-2 start-2 font-mono-tabular text-[9px] text-[#F5F5F5] bg-black/80 px-2 py-0.5 rounded border border-[#1e293b]">
                                            {sIdx === 0 ? '01' : '02'}
                                          </span>
                                        </div>

                                        <div className="p-2.5 rounded-xl bg-[#0E131C] border border-[#1e293b]/70 flex flex-col justify-between flex-grow">
                                          <h6 className="text-[11px] font-bold text-white line-clamp-1 mb-1">
                                            {sub.title[lang]}
                                          </h6>
                                          <p className="text-[10px] text-[#94a3b8] line-clamp-3 leading-relaxed">
                                            {sub.desc[lang]}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* 3. Project General Description */}
                                {work.generalDescription && (
                                  <div className="p-4 rounded-xl bg-[#0A0E16] border border-cyan-500/30 space-y-2 shadow-inner">
                                    <div className="flex items-center gap-2">
                                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                      <span className="font-mono-tabular text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                                        {isRtl ? 'الوصف المعماري الشامل' : 'ARCHITECTURAL CONCEPT & SUMMARY'}
                                      </span>
                                    </div>
                                    <p className="text-xs text-[#CBD5E1] leading-relaxed">
                                      {work.generalDescription[lang]}
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}
                          </article>
                        );
                      }

                      return (
                        <article
                          key={work.id}
                          className="group bg-[#141923] border border-[#1e293b] hover:border-cyan-500/40 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 shadow-sm hover:shadow-[0_0_24px_rgba(6,182,212,0.15)] cursor-pointer"
                          onClick={() =>
                            setActiveLightbox({
                              src: imgSrc,
                              title: work.title[lang],
                              subtitle: work.subtitle[lang],
                              tag: work.tag,
                            })
                          }
                        >
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0D14]">
                            <img
                              src={imgSrc}
                              alt={work.title[lang]}
                              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                              onError={(e) => {
                                const target = e.currentTarget;
                                if (work.imageKey && target.src !== FALLBACK_SVGS[work.imageKey]) {
                                  target.src = FALLBACK_SVGS[work.imageKey];
                                }
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#141923] via-transparent to-black/30 opacity-90 pointer-events-none" />
                            <span className="absolute top-3 start-3 font-mono-tabular text-[9px] sm:text-[10px] font-bold tracking-wider text-cyan-300 bg-[#090D14]/90 border border-cyan-500/40 px-2.5 py-1 rounded shadow-sm">
                              {work.tag}
                            </span>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-3 py-1.5 rounded-lg bg-black/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono-tabular flex items-center gap-1.5">
                                <span>🔍</span> {isRtl ? 'تكبير الصورة' : 'View Full Image'}
                              </span>
                            </div>
                          </div>
                          <div className="p-5 flex items-center justify-between gap-4 flex-grow">
                            <div>
                              <h5 className="text-base font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
                                {work.title[lang]}
                              </h5>
                              <p className="text-xs text-[#94a3b8] mt-1.5 leading-relaxed">
                                {work.subtitle[lang]}
                              </p>
                            </div>
                            <span className="font-mono-tabular text-xs text-cyan-300 bg-cyan-950/70 border border-cyan-500/30 px-2 py-0.5 rounded shrink-0">
                              {work.year}
                            </span>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/* TRANSITION DIVIDER 03: SOFTWARE ECOSYSTEM -> TEACHING */}
        <SectionTransitionDivider
          sectionNumber="03"
          totalSections="05"
          label={{ ar: 'المناهج والمسارات التدريبية الاحترافية', en: 'TEACHING & PROFESSIONAL CURRICULA' }}
          isRtl={isRtl}
          accent="emerald"
          targetId="teaching"
        />

        {/* SECTION: TEACHING & EXPANDABLE SOFTWARE COURSES (ORDERED: REVIT -> PHOTOSHOP -> AUTOCAD -> LUMION -> V-RAY -> ENSCAPE) */}
        <motion.section
          id="teaching"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="py-20 md:py-28 border-b border-[#1F1F1F]/50 scroll-mt-16 relative"
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            {/* Header */}
            <div className="mb-14">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.15] headline-balance">
                {isRtl ? 'التدريس والمناهج الاحترافية' : 'Teaching & Professional Curricula'}
              </h2>
              <p className="text-base text-[#888888] mt-4 max-w-2xl leading-relaxed">
                {isRtl
                  ? 'اضغط على أي كورس أدناه لتمديده وعرض تفاصيله الكاملة، سعر الكورس، ومعرض أعمال الطلاب المستقل الخاص به.'
                  : 'Click on any course card below to expand its full syllabus, transparent pricing fee, and dedicated student portfolio.'}
              </p>
            </div>

            {/* 6 Expandable Software Tracks in Strict Sequence */}
            <div className="space-y-6">
              {SOFTWARE_TRACKS.map((track) => {
                const isExpanded = Boolean(expandedTrackIds[track.id]);
                const isRevit = track.id === 'track-revit';
                const isPhotoshop = track.id === 'track-photoshop';
                const isAutoCAD = track.id === 'track-autocad';
                const isLumion = track.id === 'track-lumion';
                const isVRay = track.id === 'track-vray';
                const isEnscape = track.id === 'track-enscape';
                const isComingSoon = Boolean(track.isComingSoon);

                let cardContainerClasses = 'bg-[#121212] border border-[#1F1F1F]';
                if (isRevit) {
                  cardContainerClasses =
                    'bg-[#0d1117] border border-cyan-500/30 shadow-[0_0_25px_rgba(6,182,212,0.12)] hover:border-cyan-400/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.2)]';
                } else if (isPhotoshop) {
                  cardContainerClasses =
                    'bg-[#070e17] border border-blue-600/30 shadow-[0_0_25px_rgba(37,99,235,0.12)] hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(37,99,235,0.2)]';
                } else if (isAutoCAD) {
                  cardContainerClasses =
                    'bg-[#12080a] border border-red-600/30 shadow-[0_0_25px_rgba(220,38,38,0.12)] hover:border-red-500/50 hover:shadow-[0_0_35px_rgba(220,38,38,0.2)]';
                } else if (isLumion) {
                  cardContainerClasses =
                    'bg-[#081217] border border-[#345D6F]/40 shadow-[0_0_25px_rgba(52,93,111,0.22)] hover:border-[#345D6F]/70 hover:shadow-[0_0_35px_rgba(52,93,111,0.38)]';
                } else if (isVRay) {
                  cardContainerClasses =
                    'bg-[#080d19] border border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.12)] hover:border-blue-400/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]';
                } else if (isEnscape) {
                  cardContainerClasses =
                    'bg-[#140f06] border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.12)] hover:border-amber-400/50 hover:shadow-[0_0_35px_rgba(245,158,11,0.2)]';
                }

                // Badge colors: use signature course color; keep red ONLY on the payment/status box
                let badgeClasses = 'text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/30';
                let badgeDotClass = 'bg-[#25D366]';
                if (isRevit) {
                  badgeClasses = 'text-cyan-400 bg-cyan-950/60 border border-cyan-500/40';
                  badgeDotClass = 'bg-cyan-400';
                } else if (isPhotoshop) {
                  badgeClasses = 'text-blue-400 bg-blue-950/60 border border-blue-500/40';
                  badgeDotClass = 'bg-blue-400';
                } else if (isAutoCAD) {
                  badgeClasses = 'text-red-400 bg-red-950/60 border border-red-500/40';
                  badgeDotClass = 'bg-red-400';
                } else if (isLumion) {
                  badgeClasses = 'text-[#78b7d4] bg-[#345D6F]/30 border border-[#345D6F]/50';
                  badgeDotClass = 'bg-[#78b7d4]';
                } else if (isVRay) {
                  badgeClasses = 'text-blue-400 bg-blue-950/60 border border-blue-500/40';
                  badgeDotClass = 'bg-blue-400';
                } else if (isEnscape) {
                  badgeClasses = 'text-amber-400 bg-amber-950/60 border border-amber-500/40';
                  badgeDotClass = 'bg-amber-400';
                }

                return (
                  <div
                    key={track.id}
                    id={track.id}
                    className={`scroll-mt-24 rounded-2xl overflow-hidden transition-all duration-300 ${cardContainerClasses}`}
                  >
                    {/* Header trigger bar with price & expand indicator */}
                    <button
                      type="button"
                      onClick={() => toggleCourse(track.id)}
                      className="w-full p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start group cursor-pointer focus:outline-none"
                    >
                      <div className="flex items-center gap-4">
                        <SoftwareLogo name={track.name} size="lg" />
                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5] group-hover:text-white transition-colors">
                              {track.title[lang]}
                            </h3>
                            {track.badge && (
                              <span
                                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono-tabular font-bold tracking-wider ${badgeClasses}`}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full ${badgeDotClass} animate-pulse`} />
                                {track.badge[lang]}
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-[#888888] mt-1">
                            {track.summary[lang]}
                          </p>
                        </div>
                      </div>

                      {/* Price Badge & Expand Arrow */}
                      <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-center shrink-0 flex-wrap justify-end">
                        {/* 50% OFF Badge for Photoshop next to payment box */}
                        {isPhotoshop && (
                          <span className="px-2.5 py-1 text-[11px] sm:text-xs font-mono font-bold text-amber-300 bg-amber-500/15 border border-amber-500/40 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.25)] flex items-center gap-1.5 animate-pulse shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            {isRtl ? 'حسم 50%' : '50% OFF'}
                          </span>
                        )}

                        <div
                          className={`px-3.5 py-1.5 rounded-lg bg-[#0A0A0A] border text-end transition-all ${
                            isComingSoon
                              ? 'border-red-500/40 bg-red-950/20 shadow-[0_0_12px_rgba(239,68,68,0.12)]'
                              : isAutoCAD
                              ? 'border-red-500/40 bg-red-950/20 shadow-[0_0_14px_rgba(220,38,38,0.20)]'
                              : isRevit
                              ? 'border-cyan-500/40 bg-cyan-950/20 shadow-[0_0_14px_rgba(6,182,212,0.20)]'
                              : isPhotoshop
                              ? 'border-blue-500/40 bg-blue-950/20 shadow-[0_0_14px_rgba(37,99,235,0.20)]'
                              : 'border-[#1F1F1F]'
                          }`}
                        >
                          <span
                            className={`block text-[10px] font-mono-tabular ${
                              isComingSoon
                                ? 'text-red-400 font-bold'
                                : isAutoCAD
                                ? 'text-red-400 font-semibold'
                                : isRevit
                                ? 'text-cyan-400 font-semibold'
                                : isPhotoshop
                                ? 'text-blue-400 font-semibold'
                                : 'text-[#888888]'
                            }`}
                          >
                            {isComingSoon
                              ? (isRtl ? 'حالة التسجيل' : 'STATUS')
                              : isAutoCAD
                              ? (isRtl ? 'عرض لفترة محدودة' : 'LIMITED TIME OFFER')
                              : (isRtl ? 'سعر الكورس' : 'Course Fee')}
                          </span>
                          <span
                            className={`font-mono-tabular text-sm sm:text-base font-bold tabular-nums ${
                              isComingSoon
                                ? 'text-red-400'
                                : isAutoCAD
                                ? 'text-red-400'
                                : isRevit
                                ? 'text-cyan-400'
                                : isPhotoshop
                                ? 'text-blue-400'
                                : 'text-[#F5F5F5]'
                            }`}
                          >
                            {isComingSoon ? (isRtl ? 'غير متاح حالياً' : 'Coming Soon') : track.price}
                          </span>
                        </div>
                        <span className="w-8 h-8 rounded-lg border border-[#1F1F1F] text-[#888888] group-hover:text-[#F5F5F5] flex items-center justify-center transition-colors">
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </span>
                      </div>
                    </button>

                    {/* Expandable Drawer Details */}
                    {isExpanded && (
                      <div className="p-6 sm:p-8 pt-0 border-t border-[#1F1F1F]/60 animate-in fade-in duration-300">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                          {/* Course Syllabus & Modules & CTA */}
                          <div className="lg:col-span-5 flex flex-col justify-between">
                            <div>
                              <div className="flex items-center justify-between mb-6">
                                <div className="font-mono-tabular text-xs text-[#888888]">
                                  {isRtl ? 'منهج الكورس وسير العمل' : 'SYLLABUS & WORKFLOW'}
                                </div>
                                {track.badge && (
                                  <span
                                    className={`font-mono-tabular text-[10px] font-bold px-2 py-0.5 rounded border ${badgeClasses}`}
                                  >
                                    {track.badge[lang]}
                                  </span>
                                )}
                              </div>

                              {/* Mobile Revit Banner */}
                              {isRevit && (
                                <div className="block lg:hidden relative w-full aspect-[21/9] sm:h-44 overflow-hidden rounded-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] mb-6 group bg-[#090d14]">
                                  <img
                                    src="./watermarked_img_10994012124207943872.jpg"
                                    alt="Autodesk Revit Architectural Masterclass Banner"
                                    className="w-full h-full object-cover object-center"
                                    onError={(e) => {
                                      const target = e.currentTarget;
                                      if (!target.src.includes('revit_cefe862e.jfif')) {
                                        target.src = './assets/aistudio/revit_cefe862e.jfif';
                                      } else if (!target.src.includes('revit-banner.jpg')) {
                                        target.src = './revit-banner.jpg';
                                      }
                                    }}
                                  />
                                </div>
                              )}

                              {/* Mobile Photoshop Banner */}
                              {isPhotoshop && (
                                <div className="block lg:hidden relative w-full aspect-[21/9] sm:h-44 overflow-hidden rounded-xl border border-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.15)] mb-6 group bg-[#060b13]">
                                  <img
                                    src="./photo-paner.jpg"
                                    alt="Photoshop for Architecture Banner"
                                    className="w-full h-full object-cover object-center"
                                    onError={(e) => {
                                      const target = e.currentTarget;
                                      if (!target.src.includes('photo-paner_315b56b0.jfif')) {
                                        target.src = './assets/aistudio/photo-paner_315b56b0.jfif';
                                      }
                                    }}
                                  />
                                </div>
                              )}

                              {/* Mobile AutoCAD Banner */}
                              {isAutoCAD && (
                                <div className="block lg:hidden relative w-full aspect-[21/9] sm:h-44 overflow-hidden rounded-xl border border-red-500/30 shadow-[0_0_20px_rgba(220,38,38,0.15)] mb-6 group bg-[#16080a]">
                                  <img
                                    src="./cad-paner.jpg"
                                    alt="AutoCAD Architecture 2D Essentials Banner"
                                    className="w-full h-full object-cover object-center"
                                    onError={(e) => {
                                      const target = e.currentTarget;
                                      if (!target.src.includes('cad-paner_11210f2c.jfif')) {
                                        target.src = './assets/aistudio/cad-paner_11210f2c.jfif';
                                      }
                                    }}
                                  />
                                </div>
                              )}

                              {/* Mobile Lumion Banner */}
                              {isLumion && (
                                <div className="block lg:hidden relative w-full aspect-[21/9] sm:h-44 overflow-hidden rounded-xl border border-[#345D6F]/40 shadow-[0_0_20px_rgba(52,93,111,0.25)] mb-6 group bg-[#081217]">
                                  <img
                                    src="./lumion-paner.jpg"
                                    alt="Lumion Visualization & Animation Banner"
                                    className="w-full h-full object-cover object-center"
                                    onError={(e) => {
                                      const target = e.currentTarget;
                                      if (!target.src.includes('lumion-paner_07ac3d68.jfif')) {
                                        target.src = './assets/aistudio/lumion-paner_07ac3d68.jfif';
                                      }
                                    }}
                                  />
                                </div>
                              )}

                              {/* Mobile V-Ray Banner */}
                              {isVRay && (
                                <div className="block lg:hidden relative w-full aspect-[21/9] sm:h-44 overflow-hidden rounded-xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)] mb-6 group bg-[#080d19]">
                                  <img
                                    src="./vray-paner.jpg"
                                    alt="V-Ray Photorealism Engine Banner"
                                    className="w-full h-full object-cover object-center"
                                    onError={(e) => {
                                      const target = e.currentTarget;
                                      if (!target.src.includes('vray-paner_087e37ff.jfif')) {
                                        target.src = './assets/aistudio/vray-paner_087e37ff.jfif';
                                      }
                                    }}
                                  />
                                </div>
                              )}

                              {/* Mobile Enscape Banner */}
                              {isEnscape && (
                                <div className="block lg:hidden relative w-full aspect-[21/9] sm:h-44 overflow-hidden rounded-xl border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.15)] mb-6 group bg-[#140f06]">
                                  <img
                                    src="./enscape-paner.jpg"
                                    alt="Enscape Real-Time Engine Banner"
                                    className="w-full h-full object-cover object-center"
                                    onError={(e) => {
                                      const target = e.currentTarget;
                                      if (!target.src.includes('enscape-paner_f05ffdb2.jfif')) {
                                        target.src = './assets/aistudio/enscape-paner_f05ffdb2.jfif';
                                      }
                                    }}
                                  />
                                </div>
                              )}

                              {/* Structured Curriculum Modules (if available) */}
                              {track.modules && track.modules.length > 0 && (
                                <div className="space-y-3.5 mb-6">
                                  <div className="font-mono-tabular text-xs font-semibold text-[#F5F5F5] border-b border-[#1F1F1F] pb-2 flex items-center justify-between">
                                    <span>{isRtl ? 'المحاور الدراسية (Curriculum)' : 'Course Curriculum & Modules'}</span>
                                    <span
                                      className={`text-[10px] font-mono-tabular ${
                                        isPhotoshop ? 'text-blue-400' : 'text-[#25D366]'
                                      }`}
                                    >
                                      {track.modules.length} {isRtl ? 'محاور تدريبية' : 'Modules'}
                                    </span>
                                  </div>
                                  <div className="space-y-3">
                                    {track.modules.map((mod) => (
                                      <div
                                        key={mod.id}
                                        className={`p-3.5 rounded-xl border transition-all ${
                                          isPhotoshop
                                            ? 'bg-[#081320] border-blue-500/20 hover:border-blue-500/40'
                                            : isAutoCAD
                                            ? 'bg-[#150a0d] border-red-500/20 hover:border-red-500/40'
                                            : 'bg-[#0C120E] border-[#25D366]/20 hover:border-[#25D366]/40'
                                        }`}
                                      >
                                        <div className="flex items-center gap-2 mb-2">
                                          <span
                                            className={`font-mono-tabular text-[10px] uppercase font-bold px-2 py-0.5 rounded border shrink-0 ${
                                              isPhotoshop
                                                ? 'text-blue-400 bg-blue-950/60 border-blue-500/30'
                                                : isAutoCAD
                                                ? 'text-red-400 bg-red-950/60 border-red-500/30'
                                                : 'text-[#25D366] bg-[#25D366]/15 border-[#25D366]/30'
                                            }`}
                                          >
                                            {mod.number}
                                          </span>
                                          <h4 className="text-xs sm:text-sm font-semibold text-[#F5F5F5]">
                                            {mod.title[lang]}
                                          </h4>
                                        </div>
                                        <ul
                                          className={`space-y-1.5 text-xs text-[#A3A3A3] ps-4 list-disc leading-relaxed ${
                                            isPhotoshop
                                              ? 'marker:text-blue-400'
                                              : isAutoCAD
                                              ? 'marker:text-red-400'
                                              : 'marker:text-[#25D366]'
                                          }`}
                                        >
                                          {mod.points[lang].map((point, pIdx) => (
                                            <li key={pIdx}>{point}</li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>

                            <div className="pt-4 border-t border-[#1F1F1F] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <span className={`text-xs ${isComingSoon ? 'text-red-400/90' : 'text-[#888888]'}`}>
                                {isComingSoon
                                  ? (isRtl ? 'التسجيل مغلق لهذا المسار حالياً · ترقبوا موعد الإطلاق' : 'Enrollment closed · Stay tuned for launch')
                                  : track.isFree
                                  ? (isRtl ? 'رابط المشاهدة المباشر فورياً عبر واتساب' : 'Direct link via WhatsApp')
                                  : (isRtl ? 'تسجيل فوري واستفسار عبر واتساب' : 'Direct WhatsApp Enrollment')}
                              </span>
                              {isComingSoon ? (
                                <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-red-400 bg-red-950/40 border border-red-500/40 rounded-lg cursor-not-allowed select-none shadow-sm">
                                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                  <span>{isRtl ? 'التسجيل غير متاح حالياً · Coming Soon' : 'Registration Unavailable · Coming Soon'}</span>
                                </div>
                              ) : (
                                <a
                                  href={track.ctaLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-[#25D366] bg-[#0B0F0C] border border-[#25D366]/40 rounded-lg hover:border-[#25D366] hover:bg-[#0E1F14] hover:text-[#38e67a] active:bg-[#07140B] active:scale-[0.98] transition-all whitespace-nowrap shadow-sm group cursor-pointer"
                                >
                                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0 text-[#25D366] group-hover:text-[#38e67a]" />
                                  <span>{track.ctaText[lang]}{!track.isFree && !track.ctaText[lang].includes('$') ? ` (${track.price})` : ''}</span>
                                  {isRtl ? <ArrowUpLeft className="w-3.5 h-3.5 text-[#25D366]/80 group-hover:text-[#25D366]" /> : <ArrowUpRight className="w-3.5 h-3.5 text-[#25D366]/80 group-hover:text-[#25D366]" />}
                                </a>
                              )}
                            </div>
                          </div>

                          {/* Strictly Distinct Student Works for this Software */}
                          <div className="lg:col-span-7">
                            <div className="flex items-center justify-between mb-3">
                              <div className="text-xs font-mono-tabular text-[#888888] flex items-center gap-2">
                                <span>
                                  {isRtl
                                    ? `أعمال طلاب مخصصة لبرنامج ${track.name}`
                                    : `INDEPENDENT STUDENT WORKS · ${track.name.toUpperCase()}`}
                                </span>
                                {(isLumion || isVRay || isEnscape) && (
                                  <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border border-amber-500/50 bg-amber-500/15 text-amber-300 flex items-center gap-1">
                                    <Lock className="w-3 h-3 text-amber-400" />
                                    SOON · {isRtl ? 'قريباً' : 'COMING SOON'}
                                  </span>
                                )}
                              </div>
                              {(isRevit || isPhotoshop || isAutoCAD || isLumion || isVRay || isEnscape) && (
                                <span
                                  className={`text-[10px] font-mono-tabular px-2 py-0.5 rounded border ${
                                    isRevit
                                      ? 'text-cyan-400 bg-cyan-950/60 border-cyan-500/30'
                                      : isPhotoshop
                                      ? 'text-blue-400 bg-blue-950/60 border-blue-500/30'
                                      : isAutoCAD
                                      ? 'text-red-400 bg-red-950/60 border-red-500/30'
                                      : isLumion
                                      ? 'text-[#78b7d4] bg-[#345D6F]/30 border-[#345D6F]/50'
                                      : isVRay
                                      ? 'text-blue-400 bg-blue-950/60 border-blue-500/30'
                                      : 'text-amber-400 bg-amber-950/60 border-amber-500/30'
                                  }`}
                                >
                                  {track.works.length} FEATURED PROJECTS
                                </span>
                              )}
                            </div>

                            {/* Desktop Revit Header Banner - Shown above works on lg screens */}
                            {isRevit && (
                              <div className="hidden lg:block relative w-full aspect-[21/9] sm:h-44 md:h-52 overflow-hidden rounded-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] mb-4 group bg-[#090d14]">
                                <img
                                  src="./watermarked_img_10994012124207943872.jpg"
                                  alt="Autodesk Revit Architectural Masterclass Banner"
                                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    if (!target.src.includes('revit_cefe862e.jfif')) {
                                      target.src = './assets/aistudio/revit_cefe862e.jfif';
                                    } else if (!target.src.includes('revit-banner.jpg')) {
                                      target.src = './revit-banner.jpg';
                                    }
                                  }}
                                />
                              </div>
                            )}

                            {/* Desktop Photoshop Header Banner - Shown above works on lg screens */}
                            {isPhotoshop && (
                              <div className="hidden lg:block relative w-full aspect-[21/9] sm:h-44 md:h-52 overflow-hidden rounded-xl border border-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.15)] mb-4 group bg-[#060b13]">
                                <img
                                  src="./photo-paner.jpg"
                                  alt="Photoshop for Architecture Banner"
                                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    if (!target.src.includes('photo-paner_315b56b0.jfif')) {
                                      target.src = './assets/aistudio/photo-paner_315b56b0.jfif';
                                    }
                                  }}
                                />
                              </div>
                            )}

                            {/* Desktop AutoCAD Header Banner - Shown above works on lg screens */}
                            {isAutoCAD && (
                              <div className="hidden lg:block relative w-full aspect-[21/9] sm:h-44 md:h-52 overflow-hidden rounded-xl border border-red-500/30 shadow-[0_0_20px_rgba(220,38,38,0.15)] mb-4 group bg-[#16080a]">
                                <img
                                  src="./cad-paner.jpg"
                                  alt="AutoCAD Architecture 2D Essentials Banner"
                                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    if (!target.src.includes('cad-paner_11210f2c.jfif')) {
                                      target.src = './assets/aistudio/cad-paner_11210f2c.jfif';
                                    }
                                  }}
                                />
                              </div>
                            )}

                            {/* Desktop Lumion Header Banner - Shown above works on lg screens */}
                            {isLumion && (
                              <div className="hidden lg:block relative w-full aspect-[21/9] sm:h-44 md:h-52 overflow-hidden rounded-xl border border-[#345D6F]/40 shadow-[0_0_20px_rgba(52,93,111,0.25)] mb-4 group bg-[#081217]">
                                <img
                                  src="./lumion-paner.jpg"
                                  alt="Lumion Visualization & Animation Banner"
                                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    if (!target.src.includes('lumion-paner_07ac3d68.jfif')) {
                                      target.src = './assets/aistudio/lumion-paner_07ac3d68.jfif';
                                    }
                                  }}
                                />
                              </div>
                            )}

                            {/* Desktop V-Ray Header Banner - Shown above works on lg screens */}
                            {isVRay && (
                              <div className="hidden lg:block relative w-full aspect-[21/9] sm:h-44 md:h-52 overflow-hidden rounded-xl border border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.15)] mb-4 group bg-[#080d19]">
                                <img
                                  src="./vray-paner.jpg"
                                  alt="V-Ray Photorealism Engine Banner"
                                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    if (!target.src.includes('vray-paner_087e37ff.jfif')) {
                                      target.src = './assets/aistudio/vray-paner_087e37ff.jfif';
                                    }
                                  }}
                                />
                              </div>
                            )}

                            {/* Desktop Enscape Header Banner - Shown above works on lg screens */}
                            {isEnscape && (
                              <div className="hidden lg:block relative w-full aspect-[21/9] sm:h-44 md:h-52 overflow-hidden rounded-xl border border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.15)] mb-4 group bg-[#140f06]">
                                <img
                                  src="./enscape-paner.jpg"
                                  alt="Enscape Real-Time Engine Banner"
                                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.01]"
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    if (!target.src.includes('enscape-paner_f05ffdb2.jfif')) {
                                      target.src = './assets/aistudio/enscape-paner_f05ffdb2.jfif';
                                    }
                                  }}
                                />
                              </div>
                            )}

                            {/* Projects Grid: 2 columns for all software */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {track.works.map((work) => {
                                const imgSrc = customImages[work.imageKey] || work.defaultSrc;
                                const isTrackLocked = isLumion || isVRay || isEnscape;

                                let projectCardClasses = 'group cursor-pointer rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col relative';
                                let projectBadgeClasses = 'absolute bottom-2.5 start-2.5 font-mono-tabular text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide';
                                let projectTitleClasses = 'text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors';
                                let projectSubClasses = 'text-[11px] text-[#94a3b8] mt-1 leading-relaxed';

                                if (isTrackLocked) {
                                  projectCardClasses = 'group rounded-xl overflow-hidden border border-amber-500/30 bg-[#12100b] shadow-[0_0_15px_rgba(245,158,11,0.06)] transition-all duration-300 flex flex-col relative cursor-not-allowed select-none';
                                  projectBadgeClasses = 'absolute bottom-2.5 start-2.5 font-mono-tabular text-[10px] text-amber-400 bg-[#140f06]/90 border border-amber-500/30 px-2 py-0.5 rounded tracking-wide';
                                  projectTitleClasses = 'text-xs sm:text-sm font-semibold text-[#F5F5F5]';
                                  projectSubClasses = 'text-[11px] text-[#94a3b8] mt-1 leading-relaxed';
                                } else if (isRevit) {
                                  projectCardClasses = 'group cursor-pointer rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-cyan-500/40 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col relative';
                                  projectBadgeClasses = 'absolute bottom-2.5 start-2.5 font-mono-tabular text-[10px] text-cyan-400 bg-[#0d1117]/90 border border-cyan-500/30 px-2 py-0.5 rounded tracking-wide';
                                  projectTitleClasses = 'text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-cyan-200 transition-colors';
                                  projectSubClasses = 'text-[11px] text-[#94a3b8] mt-1 leading-relaxed';
                                } else if (isPhotoshop) {
                                  projectCardClasses = 'group cursor-pointer rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(37,99,235,0.15)] transition-all duration-300 flex flex-col relative';
                                  projectBadgeClasses = 'absolute bottom-2.5 start-2.5 font-mono-tabular text-[10px] text-blue-400 bg-[#070e17]/90 border border-blue-500/30 px-2 py-0.5 rounded tracking-wide';
                                  projectTitleClasses = 'text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-blue-200 transition-colors';
                                  projectSubClasses = 'text-[11px] text-[#94a3b8] mt-1 leading-relaxed';
                                } else if (isAutoCAD) {
                                  projectCardClasses = 'group cursor-pointer rounded-xl overflow-hidden border border-[#1e293b] bg-[#141923] hover:border-red-500/40 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] transition-all duration-300 flex flex-col relative';
                                  projectBadgeClasses = 'absolute bottom-2.5 start-2.5 font-mono-tabular text-[10px] text-red-400 bg-[#0d1117]/90 border border-red-500/30 px-2 py-0.5 rounded tracking-wide';
                                  projectTitleClasses = 'text-xs sm:text-sm font-semibold text-[#F5F5F5] group-hover:text-red-200 transition-colors';
                                  projectSubClasses = 'text-[11px] text-[#94a3b8] mt-1 leading-relaxed';
                                }

                                const isContain = work.fit === 'contain';
                                const aspectClass = work.aspectRatioClass || 'aspect-[16/10]';

                                return (
                                  <div
                                    key={work.id}
                                    onClick={() => {
                                      if (isTrackLocked) return;
                                      setActiveLightbox({
                                        src: imgSrc,
                                        title: work.title[lang],
                                        subtitle: work.subtitle[lang],
                                        tag: work.tag,
                                      });
                                    }}
                                    className={projectCardClasses}
                                  >
                                    {/* Locked Overlay for Lumion, V-Ray, Enscape */}
                                    {isTrackLocked && (
                                      <div className="absolute inset-0 z-20 bg-[#0B0F14]/75 backdrop-blur-[2px] flex flex-col items-center justify-center p-3 text-center pointer-events-none">
                                        <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.35)] flex items-center justify-center text-amber-400 mb-2">
                                          <Lock className="w-5 h-5 stroke-[2.2]" />
                                        </div>
                                        <div className="font-mono text-xs font-bold tracking-wider px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 shadow-sm uppercase flex items-center gap-1.5">
                                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                          SOON · {isRtl ? 'قريباً' : 'COMING SOON'}
                                        </div>
                                        <span className="text-[11px] text-[#cbd5e1] mt-1.5 font-sans font-medium">
                                          {isRtl ? 'أعمال طلاب البرنامج قيد التجهيز' : 'Student projects under preparation'}
                                        </span>
                                      </div>
                                    )}

                                    <div className={`${aspectClass} w-full overflow-hidden relative flex items-center justify-center ${isContain ? (isAutoCAD ? 'bg-black p-1.5' : 'bg-[#080d14] p-1.5') : 'bg-[#0d1117]'}`}>
                                      <img
                                        src={imgSrc}
                                        alt={work.title[lang]}
                                        className={`w-full h-full transition-transform duration-500 ease-out ${
                                          isTrackLocked ? 'filter grayscale-[30%]' : 'group-hover:scale-105'
                                        } ${isContain ? 'object-contain' : 'object-cover'}`}
                                        onError={(e) => {
                                          const target = e.currentTarget;
                                          if (work.fallbackSrc && !target.src.includes(work.fallbackSrc)) {
                                            target.src = work.fallbackSrc;
                                            return;
                                          }
                                          const fallback = FALLBACK_SVGS[work.imageKey];
                                          if (fallback && target.src !== fallback) {
                                            target.src = fallback;
                                          }
                                        }}
                                      />
                                      {!isContain && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 pointer-events-none" />
                                      )}
                                      <span className={projectBadgeClasses}>
                                        {work.tag}
                                      </span>
                                    </div>
                                    <div className="p-3.5 flex flex-col flex-grow justify-between">
                                      <div>
                                        <h4 className={projectTitleClasses}>
                                          {work.title[lang]}
                                        </h4>
                                        <p className={projectSubClasses}>
                                          {work.subtitle[lang]}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* TRANSITION DIVIDER 04: TEACHING -> STUDENT WORKS */}
        <SectionTransitionDivider
          sectionNumber="04"
          totalSections="05"
          label={{ ar: 'معرض أعمال ومخرجات الطلاب المتميزة', en: 'DISTINGUISHED STUDENT WORKS' }}
          isRtl={isRtl}
          accent="amber"
          targetId="student-works"
        />

        {/* SECTION: DISTINGUISHED STUDENT WORKS (أعمال الطلاب المتميزة - 6 أعمال فارغة جاهزة) */}
        <motion.section
          id="student-works"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="py-20 md:py-28 border-b border-[#1F1F1F]/50 scroll-mt-16 bg-[#0B0B0B] relative"
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-mono-tabular text-xs uppercase tracking-[0.16em] text-cyan-400 font-semibold">
                    {isRtl ? 'معرض مخرجات التدريب الاحترافي' : 'STUDENT PORTFOLIO SHOWCASE'}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.15] headline-balance">
                  {isRtl ? 'أعمال الطلاب المتميزة' : 'Distinguished Student Works'}
                </h2>
                <p className="text-base text-[#888888] mt-3 max-w-2xl leading-relaxed">
                  {isRtl
                    ? 'نماذج ومشاريع معمارية متقدمة من إبداع طلابنا وخريجي دوراتنا بإشراف م. إبراهيم النجار في برامج Revit و Photoshop و AutoCAD و Lumion و V-Ray و Enscape.'
                    : 'Curated architectural projects crafted by students and graduates under the supervision of Arch. Ibrahim Al-Najjar across Revit, Photoshop, AutoCAD, Lumion, V-Ray, and Enscape.'}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono-tabular text-xs text-[#888888] bg-[#141414] border border-[#222] px-3.5 py-2 rounded-xl flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isRtl ? 'مشاريع معتمدة من الأكاديمية' : 'Academy Certified Works'}</span>
                </span>
              </div>
            </div>

            {/* Student Works Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STUDENT_WORK_SLOTS.map((slot) => {
                const isLocked = Boolean(slot.isLocked);
                const hasImage = Boolean(slot.imageSrc);

                return (
                  <div
                    key={slot.id}
                    onClick={() => {
                      if (isLocked) return;
                      if (hasImage && slot.imageSrc) {
                        setActiveLightbox({
                          src: slot.imageSrc,
                          fallbackSrc: slot.fallbackSrc,
                          title: slot.title[lang],
                          subtitle: slot.subtitle[lang],
                          tag: slot.softwareTag,
                        });
                      }
                    }}
                    className={`group relative rounded-2xl border transition-all duration-300 p-5 flex flex-col justify-between overflow-hidden shadow-sm ${
                      isLocked
                        ? 'border-amber-500/35 bg-[#12100b]/85 shadow-[0_0_20px_rgba(245,158,11,0.07)] select-none'
                        : `border-[#1e293b] bg-[#12161f] ${slot.accentBorder} cursor-pointer`
                    }`}
                  >
                    <div>
                      {/* Visual Project Frame */}
                      <div
                        className={`relative aspect-[16/10] w-full rounded-xl border flex flex-col items-center justify-center overflow-hidden transition-all duration-300 mb-5 ${
                          isLocked
                            ? 'border-amber-500/35 bg-[#0a0805]'
                            : 'border-[#1A2028] bg-[#040608]'
                        } ${hasImage ? 'group/img' : ''}`}
                      >
                        {hasImage ? (
                          <>
                            <img
                              src={slot.imageSrc}
                              alt={slot.title[lang]}
                              className={`w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 ${
                                slot.fit === 'contain' ? 'object-contain p-2 bg-[#040608]' : 'object-cover'
                              }`}
                              onError={(e) => {
                                if (slot.fallbackSrc && e.currentTarget.src !== slot.fallbackSrc) {
                                  e.currentTarget.src = slot.fallbackSrc;
                                }
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none opacity-80" />
                            <div className="absolute top-3 end-3 p-1.5 rounded-lg bg-black/75 backdrop-blur-sm border border-white/20 text-white group-hover:text-cyan-300 group-hover:border-cyan-400/60 transition-colors shadow-sm">
                              <Maximize2 className="w-3.5 h-3.5" />
                            </div>
                            <span
                              className={`absolute bottom-2.5 start-2.5 font-mono-tabular text-[9px] sm:text-[10px] px-2.5 py-0.5 rounded shadow-sm border font-semibold tracking-wide ${
                                slot.software === 'Revit'
                                  ? 'text-cyan-300 bg-[#090D14]/90 border-cyan-500/40'
                                  : slot.software === 'Photoshop'
                                  ? 'text-blue-300 bg-[#060B14]/90 border-blue-500/40'
                                  : slot.software === 'AutoCAD'
                                  ? 'text-red-300 bg-[#14080A]/90 border-red-500/40'
                                  : 'text-cyan-300 bg-[#090D14]/90 border-cyan-500/40'
                              }`}
                            >
                              {slot.softwareTag}
                            </span>
                          </>
                        ) : isLocked ? (
                          <>
                            <div
                              className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:14px_14px]"
                            />
                            <div className="w-12 h-12 rounded-2xl bg-amber-950/60 border border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center justify-center text-amber-400 mb-3">
                              <Lock className="w-6 h-6 stroke-[2]" />
                            </div>

                            <div className="flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 font-mono text-xs font-bold tracking-widest uppercase shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                              SOON · {isRtl ? 'قريباً' : 'LOCKED'}
                            </div>
                          </>
                        ) : (
                          <>
                            <div
                              className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:14px_14px]"
                            />
                            <div className="relative mb-3 flex items-center justify-center">
                              <SoftwareLogo name={slot.software} size="lg" />
                            </div>

                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141b26] border border-[#26354a] text-cyan-300 font-mono text-[11px] font-semibold tracking-wide shadow-sm">
                              <Sparkles className="w-3 h-3 text-cyan-400" />
                              <span>{isRtl ? 'مشروع طالب متميز' : 'Featured Student Work'}</span>
                            </div>

                            <span className="font-mono-tabular text-[10px] text-[#718096] mt-2">
                              {isRtl ? 'بإشراف م. إبراهيم النجار' : 'Supervised by Arch. Ibrahim'}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Metadata Header */}
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono-tabular text-xs font-bold tracking-wider text-[#737373]">
                            PROJECT {slot.slotNumber}
                          </span>
                          {isLocked && (
                            <span className="font-mono text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-amber-500/25 text-amber-300 border border-amber-500/40">
                              SOON
                            </span>
                          )}
                        </div>
                        <span
                          className={`font-mono-tabular text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border ${slot.color}`}
                        >
                          {slot.software}
                        </span>
                      </div>

                      <h4
                        className={`text-base font-bold transition-colors ${
                          isLocked ? 'text-[#F5F5F5]' : 'text-[#F5F5F5] group-hover:text-white'
                        }`}
                      >
                        {slot.title[lang]}
                      </h4>
                      <p className="text-xs text-[#888888] mt-1.5 leading-relaxed">
                        {slot.subtitle[lang]}
                      </p>
                    </div>

                    {/* Card Footer: Official academy badge, no file upload invitations */}
                    <div
                      className={`pt-4 mt-5 border-t border-[#1C2129] flex items-center justify-between text-xs font-mono-tabular ${
                        isLocked ? 'text-amber-400/90 font-medium' : 'text-[#A3A3A3]'
                      }`}
                    >
                      {isLocked ? (
                        <>
                          <span className="flex items-center gap-1.5 text-amber-300/90">
                            <Lock className="w-3.5 h-3.5 text-amber-400" />
                            {isRtl ? 'أعمال طلاب البرنامج قيد التجهيز' : 'Student projects under preparation'}
                          </span>
                          <span className="font-bold tracking-wider text-amber-400 font-mono text-xs">SOON</span>
                        </>
                      ) : (
                        <>
                          <span className="flex items-center gap-1.5 text-cyan-300/90 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{isRtl ? 'مشروع معتمد من الأكاديمية' : 'Academy Certified Project'}</span>
                          </span>
                          <span className="text-[10px] font-mono-tabular text-[#CBD5E1] bg-[#0E131A] px-2.5 py-1 rounded-lg border border-[#1e293b] group-hover:border-cyan-500/40 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                            <Maximize2 className="w-3 h-3 text-cyan-400" />
                            <span>{isRtl ? 'عرض بالدقة الكاملة' : 'View Full Sheet'}</span>
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* TRANSITION DIVIDER 05: STUDENT WORKS -> CONTACT */}
        <SectionTransitionDivider
          sectionNumber="05"
          totalSections="05"
          label={{ ar: 'تواصل معنا وبدء التدريب المعماري', en: "LET'S TALK & GET STARTED" }}
          isRtl={isRtl}
          accent="cyan"
          targetId="contact"
        />

        {/* SECTION: CONTACT (#contact) */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="py-20 md:py-28 scroll-mt-16 relative"
        >
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-6 sm:p-10 md:p-14">
              <p className="font-mono-tabular text-xs tracking-[0.16em] text-[#888888] mb-4">
                {isRtl ? 'لنتحدث' : "LET'S TALK"}
              </p>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-[1.16] max-w-2xl mb-8 sm:mb-10 headline-balance">
                {isRtl ? 'هل أنت مستعد للارتقاء بسير عملك المعماري؟' : 'Ready to elevate your architectural workflow?'}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
                {/* 1. WhatsApp Button - Black base with WhatsApp Green styling and press states */}
                <a
                  href="https://wa.me/963998401013"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#0B0F0C] border border-[#25D366]/35 hover:border-[#25D366] hover:bg-[#0E1F14] active:bg-[#07140B] active:border-[#25D366] active:scale-[0.99] text-[#F5F5F5] transition-all duration-200 shadow-sm hover:shadow-[0_0_24px_rgba(37,211,102,0.20)] cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#25D366]/15 border border-[#25D366]/35 text-[#25D366] flex items-center justify-center shrink-0 group-hover:bg-[#25D366] group-hover:text-[#0B0F0C] group-active:bg-[#1ebd5a] group-active:text-black transition-all duration-200">
                      <WhatsAppIcon className="w-4.5 h-4.5" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs font-semibold text-[#F5F5F5] group-hover:text-white transition-colors">
                        {isRtl ? 'واتساب' : 'WhatsApp'}
                      </span>
                      <span dir="ltr" className="block text-[11px] sm:text-xs font-mono-tabular text-[#25D366] group-hover:text-[#38e67a] font-medium truncate transition-colors">
                        +963 998 401 013
                      </span>
                    </div>
                  </div>
                  {isRtl ? (
                    <ArrowUpLeft className="w-4 h-4 shrink-0 text-[#25D366]/70 group-hover:text-[#25D366] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-[#25D366]/70 group-hover:text-[#25D366] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  )}
                </a>

                {/* 2. Instagram Button (تابعنا على إنستغرام) */}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#0A0A0A] border border-[#1F1F1F] hover:border-[#E1306C]/60 text-[#F5F5F5] hover:text-white transition-all duration-200"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#FD1D1D]/20 via-[#E1306C]/25 to-[#405DE6]/20 border border-[#E1306C]/40 text-[#F5F5F5] flex items-center justify-center shrink-0">
                      <Instagram className="w-4 h-4 text-[#F472B6]" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs font-semibold text-[#F5F5F5]">
                        {isRtl ? 'تابعنا على إنستغرام' : 'Follow on Instagram'}
                      </span>
                      <span dir="ltr" className="block text-[11px] sm:text-xs font-mono-tabular text-[#888888] group-hover:text-[#F5F5F5] truncate">
                        @arch.ibrahim.najar
                      </span>
                    </div>
                  </div>
                  {isRtl ? (
                    <ArrowUpLeft className="w-4 h-4 shrink-0 text-[#888888] group-hover:text-[#F5F5F5] transition-colors" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-[#888888] group-hover:text-[#F5F5F5] transition-colors" />
                  )}
                </a>

                {/* 3. Email Button (Optimized for Mobile - never oversized) */}
                <a
                  href="mailto:arch.ibrahim.najjar@gmail.com"
                  className="group flex items-center justify-between p-4 sm:p-5 rounded-xl bg-[#0A0A0A] border border-[#1F1F1F] hover:border-[#888888] text-[#F5F5F5] transition-all duration-200"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-lg bg-[#141414] border border-[#222222] text-[#888888] group-hover:text-[#F5F5F5] flex items-center justify-center shrink-0 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xs font-medium text-[#888888] group-hover:text-[#AAAAAA] transition-colors">
                        {isRtl ? 'البريد الإلكتروني' : 'Email'}
                      </span>
                      <span
                        dir="ltr"
                        className="block font-mono-tabular text-[11px] sm:text-xs text-[#F5F5F5] truncate max-w-[190px] xs:max-w-[240px] sm:max-w-none"
                        title="arch.ibrahim.najjar@gmail.com"
                      >
                        arch.ibrahim.najjar@gmail.com
                      </span>
                    </div>
                  </div>
                  {isRtl ? (
                    <ArrowUpLeft className="w-4 h-4 shrink-0 text-[#888888] group-hover:text-[#F5F5F5] transition-colors" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 shrink-0 text-[#888888] group-hover:text-[#F5F5F5] transition-colors" />
                  )}
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* FLOATING SCROLL-TO-TOP BUTTON */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 end-6 z-40 px-3.5 py-2.5 rounded-xl bg-[#121212]/90 hover:bg-[#1A1A1A] border border-[#2A2A2A] hover:border-cyan-500/50 text-[#888888] hover:text-white shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all cursor-pointer group flex items-center gap-2"
            aria-label={isRtl ? 'الرجوع للأعلى' : 'Back to top'}
            title={isRtl ? 'الرجوع للأعلى' : 'Back to top'}
          >
            <ChevronUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
            <span className="hidden sm:inline font-mono-tabular text-xs text-[#CBD5E1]">
              {isRtl ? 'أعلى الصفحة' : 'Top'}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="border-t border-[#1F1F1F] py-8">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#888888]">
          <div className="flex flex-wrap items-center gap-4">
            <p>{isRtl ? '© 2026 المهندس المعماري إبراهيم النجار. جميع الحقوق محفوظة.' : '© 2026 Arch. Ibrahim Al-Najjar. All rights reserved.'}</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#888888] hover:text-[#F472B6] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
              <span>@arch.ibrahim.najar</span>
            </a>
          </div>
          <p className="font-mono-tabular tracking-wider text-xs text-[#888888]">
            {isRtl ? 'استوديو معماري وتدريب احترافي' : 'ARCHITECTURAL STUDIO & INSTRUCTION'}
          </p>
        </div>
      </footer>

      {/* LIGHTBOX MODAL */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#12161F] border border-cyan-500/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#1F2733] bg-[#0E131C]">
              <div>
                <span className="font-mono-tabular text-[11px] text-cyan-400 font-semibold tracking-wider uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {activeLightbox.tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#F5F5F5] mt-0.5">{activeLightbox.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveLightbox(null)}
                aria-label="Close"
                className="p-2 text-[#888888] hover:text-[#F5F5F5] hover:bg-[#1a2332] rounded-lg border border-[#1F2733] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full bg-[#070A0F] p-2 sm:p-4 flex items-center justify-center min-h-[280px] max-h-[72vh] overflow-hidden">
              <img
                src={activeLightbox.src}
                alt={activeLightbox.title}
                className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-md"
                onError={(e) => {
                  if (activeLightbox.fallbackSrc && e.currentTarget.src !== activeLightbox.fallbackSrc) {
                    e.currentTarget.src = activeLightbox.fallbackSrc;
                  }
                }}
              />
            </div>
            {activeLightbox.subtitle && (
              <div className="px-5 sm:px-6 py-3.5 text-xs sm:text-[13px] text-[#CBD5E1] border-t border-[#1F2733] bg-[#0E131C] leading-relaxed">
                <p>{activeLightbox.subtitle}</p>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
