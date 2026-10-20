/* =====================================================================
   PORTFOLIO CONTENT
   ---------------------------------------------------------------------
   Edit this file to change any text on the site.
   Every piece of text has an English (en) and an Arabic (ar) version.
   Keep the quotes and commas as they are, and only change the words.
   ===================================================================== */

window.SITE = {

  /* ---------- Personal details ---------- */
  profile: {
    name: { en: "Yamen Abbas", ar: "يامن عباس" },
    email: "yamen.abbas.422@gmail.com",
    phone: "+963 935 422 795",
    phoneIntl: "963935422795",               // used for WhatsApp and phone links
    linkedin: "https://www.linkedin.com/in/yamen-abbas",
    linkedinLabel: "linkedin.com/in/yamen-abbas",
    cv: "assets/Yamen_Abbas_CV.pdf",
    photo: "assets/yamen-portrait.jpg"
  },

  /* ---------- Rotating hero roles ----------
     Each role recolours the page. color = main colour, color2 = lighter tint. */
  roles: [
    {
      id: "backend",
      color: "#3b82f6", color2: "#7cb4ff",
      label: { en: "Backend Developer", ar: "مطوّر أنظمة خلفية" },
      stack: { en: "Laravel • PHP • MySQL • REST APIs", ar: "Laravel • PHP • MySQL • REST APIs" }
    },
    {
      id: "lead",
      color: "#a855f7", color2: "#d4a5ff",
      label: { en: "Team Lead", ar: "قائد فريق تقني" },
      stack: { en: "Leadership • Planning • Delivery • Reports", ar: "قيادة • تخطيط • تسليم • تقارير" }
    },
    {
      id: "server",
      color: "#10b981", color2: "#6ee7b7",
      label: { en: "Server Admin", ar: "مدير خوادم" },
      stack: { en: "AlmaLinux • Plesk • DNS • GitLab Deploys", ar: "AlmaLinux • Plesk • DNS • النشر من GitLab" }
    }
  ],

  /* ---------- About cards ---------- */
  about: [
    {
      icon: "database",
      title: { en: "Laravel Backends & APIs", ar: "أنظمة Laravel وواجهات API" },
      text: {
        en: "Calculation engines, REST integrations, PayPal & Tap payments and real-time features.",
        ar: "محرّكات حسابية، وتكاملات REST، والدفع عبر PayPal وTap، وميزات فورية."
      }
    },
    {
      icon: "users",
      title: { en: "Team Leadership", ar: "قيادة الفرق" },
      text: {
        en: "Leading development teams: task planning, daily follow-ups, testing and progress reports.",
        ar: "أقود فرق التطوير: تخطيط المهام، والمتابعة اليومية، والاختبار، وتقارير الإنجاز."
      }
    },
    {
      icon: "server",
      title: { en: "Servers & Deployment", ar: "الخوادم والنشر" },
      text: {
        en: "VPS on AlmaLinux & Plesk, DNS, queue workers, GitLab deployments and rollbacks.",
        ar: "خوادم VPS على AlmaLinux وPlesk، وإعدادات DNS، وعمّال الطوابير، والنشر من GitLab والتراجع عند الحاجة."
      }
    }
  ],

  stats: [
    { value: "5+",  label: { en: "Years of experience", ar: "سنوات من الخبرة" } }
  ],

  /* ---------- Skills network ----------
     groups: the three colour groups.
     nodes: x/y position on a 1000 × 440 canvas, glyph = short text inside the circle.
     links: which nodes are connected. */
  skillGroups: {
    backend: { color: "#3b82f6", label: { en: "Backend & APIs", ar: "الأنظمة الخلفية وواجهات API" } },
    front:   { color: "#a855f7", label: { en: "Frontend & Tools", ar: "الواجهات والأدوات" } },
    server:  { color: "#10b981", label: { en: "Servers & DevOps", ar: "الخوادم وDevOps" } }
  },

  skillNodes: [
    { id: "php",      group: "backend", x: 70,  y: 60,  glyph: "PHP", label: { en: "PHP", ar: "PHP" } },
    { id: "laravel",  group: "backend", x: 215, y: 60,  glyph: "LV",  label: { en: "Laravel", ar: "Laravel" } },
    { id: "rest",     group: "backend", x: 355, y: 105, glyph: "API", label: { en: "REST APIs", ar: "واجهات REST" } },
    { id: "mysql",    group: "backend", x: 110, y: 180, glyph: "SQL", label: { en: "MySQL", ar: "MySQL" } },
    { id: "queues",   group: "backend", x: 255, y: 195, glyph: "Q",   label: { en: "Queues", ar: "الطوابير" } },
    { id: "dbdesign", group: "backend", x: 55,  y: 300, glyph: "DB",  label: { en: "Database Design", ar: "تصميم قواعد البيانات" } },
    { id: "auth",     group: "backend", x: 360, y: 290, glyph: "2FA", label: { en: "OAuth · JWT · 2FA", ar: "OAuth · JWT · 2FA" } },
    { id: "payments", group: "backend", x: 205, y: 385, glyph: "PAY", label: { en: "PayPal · Tap", ar: "بوابات الدفع" } },

    { id: "js",       group: "front",   x: 490, y: 60,  glyph: "JS",  label: { en: "JavaScript", ar: "JavaScript" } },
    { id: "react",    group: "front",   x: 635, y: 95,  glyph: "RE",  label: { en: "React · Inertia", ar: "React · Inertia" } },
    { id: "jquery",   group: "front",   x: 485, y: 190, glyph: "$",   label: { en: "jQuery · Bootstrap", ar: "jQuery · Bootstrap" } },
    { id: "git",      group: "front",   x: 630, y: 215, glyph: "GIT", label: { en: "Git · GitLab", ar: "Git · GitLab" } },
    { id: "ai",       group: "front",   x: 520, y: 305, glyph: "AI",  label: { en: "Claude · ChatGPT", ar: "أدوات الذكاء الاصطناعي" } },
    { id: "postman",  group: "front",   x: 655, y: 330, glyph: "PM",  label: { en: "Postman", ar: "Postman" } },
    { id: "jira",     group: "front",   x: 470, y: 395, glyph: "JR",  label: { en: "Jira", ar: "Jira" } },

    { id: "linux",    group: "server",  x: 780, y: 60,  glyph: ">_",  label: { en: "Linux · AlmaLinux", ar: "Linux · AlmaLinux" } },
    { id: "vps",      group: "server",  x: 930, y: 95,  glyph: "VPS", label: { en: "VPS · Plesk", ar: "VPS · Plesk" } },
    { id: "dns",      group: "server",  x: 800, y: 190, glyph: "DNS", label: { en: "DNS", ar: "DNS" } },
    { id: "cron",     group: "server",  x: 945, y: 220, glyph: "CRN", label: { en: "Cron & Workers", ar: "المهام المجدولة" } },
    { id: "deploy",   group: "server",  x: 790, y: 320, glyph: "CI",  label: { en: "Git Deployment", ar: "النشر عبر Git" } },
    { id: "ffmpeg",   group: "server",  x: 930, y: 365, glyph: "FF",  label: { en: "FFmpeg", ar: "FFmpeg" } }
  ],

  skillLinks: [
    ["php", "laravel"], ["php", "mysql"], ["laravel", "rest"], ["laravel", "queues"], ["mysql", "queues"],
    ["mysql", "dbdesign"], ["rest", "auth"], ["queues", "payments"], ["auth", "payments"],
    ["rest", "js"], ["auth", "jquery"],
    ["js", "react"], ["js", "jquery"], ["react", "git"], ["jquery", "ai"], ["git", "ai"],
    ["git", "postman"], ["ai", "jira"],
    ["react", "linux"], ["git", "deploy"],
    ["linux", "vps"], ["linux", "dns"], ["vps", "cron"], ["dns", "deploy"], ["deploy", "ffmpeg"], ["cron", "ffmpeg"]
  ],

  /* ---------- Skill gauges (value = percentage) ---------- */
  gauges: [
    { label: { en: "Laravel", ar: "Laravel" },               value: 95, group: "backend" },
    { label: { en: "PHP", ar: "PHP" },                       value: 93, group: "backend" },
    { label: { en: "REST APIs", ar: "واجهات REST" },         value: 92, group: "backend" },
    { label: { en: "MySQL", ar: "MySQL" },                   value: 88, group: "backend" },
    { label: { en: "Auth & Security", ar: "المصادقة والأمان" }, value: 85, group: "backend" },
    { label: { en: "Git", ar: "Git" },                       value: 90, group: "front" },
    { label: { en: "JavaScript", ar: "JavaScript" },         value: 75, group: "front" },
    { label: { en: "React · Inertia", ar: "React · Inertia" }, value: 60, group: "front" },
    { label: { en: "Deployment", ar: "النشر" },              value: 88, group: "server" },
    { label: { en: "Linux · VPS", ar: "Linux · VPS" },       value: 85, group: "server" }
  ],

  /* ---------- Projects slider ----------
     image: put the picture in assets/projects/ with this name (.jpg or .png). */
  projects: [
    {
      id: "carbon-accounting",
      accent: "#10b981", glyph: "CO₂",
      image: "assets/projects/carbon-accounting.jpg",   // .jpg or .png; the drawn preview shows until the file exists
      category: { en: "Web · B2B", ar: "ويب · B2B" },
      status: { en: "In production", ar: "قيد التشغيل" },
      title: { en: "Carbon Accounting Platform", ar: "منصة المحاسبة الكربونية" },
      subtitle: {
        en: "Emissions calculation engine for analysing company carbon footprints",
        ar: "محرّك لحساب الانبعاثات وتحليل البصمة الكربونية للشركات"
      },
      description: {
        en: "Started the platform as the sole developer, then built and led a team to continue delivery. Designed the core Laravel backend: calculation logic, data-processing workflows and Excel imports. Audited the legacy platform's calculations to set a solid foundation for the new one.",
        ar: "أطلقتُ المنصة كمطوّر وحيد، ثم بنيتُ فريقاً وقدتُه لمتابعة التسليم. صمّمتُ النواة الخلفية بـ Laravel: منطق الحسابات، ومسارات معالجة البيانات، واستيراد ملفات Excel. كما راجعتُ حسابات المنصة القديمة لوضع أساس متين للمنصة الجديدة."
      },
      specs: [
        [{ en: "Role", ar: "الدور" }, { en: "Initiator & Lead", ar: "المؤسّس والقائد" }],
        [{ en: "Imports", ar: "الاستيراد" }, { en: "Excel", ar: "Excel" }],
        [{ en: "Core", ar: "النواة" }, { en: "Laravel + MySQL", ar: "Laravel + MySQL" }]
      ],
      tags: ["Laravel", "MySQL", "Data Processing", "Excel Import", "Sustainability"],
      company: { en: "Eco Sourcing Hub · UK", ar: "Eco Sourcing Hub · المملكة المتحدة" },
      ask: { en: "Tell me about the Carbon Accounting Platform", ar: "حدّثني عن منصة المحاسبة الكربونية" }
    },
    {
      id: "b2b-portal",
      accent: "#3b82f6", glyph: "B2B",
      image: "assets/projects/b2b-portal.jpg",   // .jpg or .png; the drawn preview shows until the file exists
      category: { en: "Web · Integration", ar: "ويب · تكامل" },
      status: { en: "In production", ar: "قيد التشغيل" },
      title: { en: "B2B Portal", ar: "بوابة B2B" },
      subtitle: {
        en: "End-to-end wholesale portal integrated with the FMCG platform",
        ar: "بوابة متكاملة لتجارة الجملة مرتبطة بمنصة FMCG"
      },
      description: {
        en: "Designed and built the portal end-to-end with PHP, Laravel and MySQL, and connected it to the FMCG platform through REST APIs for product data, orders, notifications and dashboards. Wrote the requirements and technical specification for its migration to Next.js.",
        ar: "صمّمتُ البوابة وبنيتُها بالكامل باستخدام PHP وLaravel وMySQL، وربطتُها بمنصة FMCG عبر واجهات REST لبيانات المنتجات والطلبات والإشعارات ولوحات التحكم. كما كتبتُ المتطلبات والمواصفات التقنية لنقلها إلى Next.js."
      },
      specs: [
        [{ en: "Integration", ar: "التكامل" }, { en: "REST APIs", ar: "واجهات REST" }],
        [{ en: "Scope", ar: "النطاق" }, { en: "End-to-end", ar: "كامل" }],
        [{ en: "Next", ar: "التالي" }, { en: "Next.js migration", ar: "الانتقال إلى Next.js" }]
      ],
      tags: ["PHP", "Laravel", "MySQL", "REST API", "Dashboards"],
      company: { en: "Eco Sourcing Hub · UK", ar: "Eco Sourcing Hub · المملكة المتحدة" },
      ask: { en: "Tell me about the B2B Portal", ar: "حدّثني عن بوابة B2B" }
    },
    {
      id: "video-review",
      accent: "#a855f7", glyph: "REC",
      image: "assets/projects/video-review.jpg",   // .jpg or .png; the drawn preview shows until the file exists
      category: { en: "Web · Media", ar: "ويب · وسائط" },
      status: { en: "In daily use", ar: "قيد الاستخدام اليومي" },
      title: { en: "Video Review & Approval Platform", ar: "منصة مراجعة الفيديو واعتماده" },
      subtitle: {
        en: "First version shipped in about 5 days with an AI-assisted workflow",
        ar: "أُطلق الإصدار الأول خلال 5 أيام تقريباً بمساعدة أدوات الذكاء الاصطناعي"
      },
      description: {
        en: "Built single-handedly: a Laravel 12 backend, a React 19 + Inertia.js frontend, real-time chat and comments, and FFmpeg video processing. Management and the design team use it every day in production.",
        ar: "بنيتُها بمفردي: واجهة خلفية بـ Laravel 12، وواجهة أمامية بـ React 19 مع Inertia.js، ودردشة وتعليقات فورية، ومعالجة الفيديو عبر FFmpeg. تستخدمها الإدارة وفريق التصميم يومياً في بيئة الإنتاج."
      },
      specs: [
        [{ en: "Build time", ar: "مدة البناء" }, { en: "~5 days", ar: "~5 أيام" }],
        [{ en: "Real-time", ar: "الاتصال الفوري" }, { en: "Laravel Reverb", ar: "Laravel Reverb" }],
        [{ en: "Media", ar: "الوسائط" }, { en: "FFmpeg", ar: "FFmpeg" }]
      ],
      tags: ["Laravel 12", "React 19", "Inertia.js", "Reverb", "FFmpeg"],
      company: { en: "Eco Sourcing Hub · UK", ar: "Eco Sourcing Hub · المملكة المتحدة" },
      ask: { en: "Tell me about the Video Review platform", ar: "حدّثني عن منصة مراجعة الفيديو" }
    },
    {
      id: "response-code",
      accent: "#06b6d4", glyph: "APP",
      image: "assets/projects/response-code.jpg",   // .jpg or .png; the drawn preview shows until the file exists
      category: { en: "Mobile · Team Lead", ar: "جوال · قيادة فريق" },
      status: { en: "Beta released", ar: "صدرت النسخة التجريبية" },
      title: { en: "Response Code App", ar: "تطبيق Response Code" },
      subtitle: {
        en: "Built the app and led the team from development to beta release",
        ar: "بنيتُ التطبيق وقدتُ الفريق من مرحلة التطوير حتى الإطلاق التجريبي"
      },
      description: {
        en: "The application consists of an API and a dashboard built with Laravel, a mobile app developed in Flutter, and a web platform created using Next.js. I led the entire team, oversaw the delivery of the beta version, and managed subsequent fixes and client feedback following the launch.",
        ar: "يتكوّن التطبيق من واجهة API ولوحة تحكم بـ Laravel، وتطبيق جوال بـ Flutter، ومنصة ويب بـ Next.js. تولّيتُ قيادة الفريق بالكامل. سلّمنا النسخة التجريبية، وتابعت الإصلاحات وملاحظات العميل بعد الإطلاق"
      },
      specs: [
        [{ en: "Role", ar: "الدور" }, { en: "Builder & Team Lead", ar: "المطوّر وقائد الفريق" }],
        [{ en: "Beta", ar: "التجريبية" }, { en: "Sep 2026", ar: "أيلول 2026" }],
        [{ en: "Platforms", ar: "المنصات" }, { en: "API · Mobile · Web", ar: "API · جوال · ويب" }]
      ],
      tags: ["Laravel API", "Flutter", "Next.js", "Team Leadership"],
      company: { en: "Eco Sourcing Hub · UK", ar: "Eco Sourcing Hub · المملكة المتحدة" },
      ask: { en: "Tell me about the Response Code app", ar: "حدّثني عن تطبيق Response Code" }
    },
    {
      id: "hotel-booking",
      accent: "#f59e0b", glyph: "HTL",
      image: "assets/projects/hotel-booking.jpg",   // .jpg or .png; the drawn preview shows until the file exists
      category: { en: "Web · Freelance", ar: "ويب · عمل مستقل" },
      status: { en: "Delivered", ar: "تم التسليم" },
      title: { en: "Hotel Booking & Management Platform", ar: "منصة حجز الفنادق وإدارتها" },
      subtitle: {
        en: "Multi-role system for admins, owners and customers",
        ar: "نظام متعدد الأدوار للمشرفين والمالكين والعملاء"
      },
      description: {
        en: "Availability, booking and cancellation, multilingual support, reviews, reporting and automatically calculated commissions.",
        ar: "إدارة التوفّر، والحجز والإلغاء، ودعم لغات متعددة، والتقييمات، والتقارير، واحتساب العمولات تلقائياً."
      },
      specs: [
        [{ en: "Roles", ar: "الأدوار" }, { en: "3", ar: "3" }],
        [{ en: "Languages", ar: "اللغات" }, { en: "Multilingual", ar: "متعددة" }],
        [{ en: "Commissions", ar: "العمولات" }, { en: "Automated", ar: "تلقائية" }]
      ],
      tags: ["Laravel", "MySQL", "Multi-role", "Reporting"],
      company: { en: "Freelance client", ar: "عميل مستقل" },
      ask: { en: "Tell me about the Hotel Booking platform", ar: "حدّثني عن منصة حجز الفنادق" }
    },
    {
      id: "real-estate",
      accent: "#ec4899", glyph: "EST",
      image: "assets/projects/real-estate.jpg",   // .jpg or .png; the drawn preview shows until the file exists
      category: { en: "Web · Freelance", ar: "ويب · عمل مستقل" },
      status: { en: "Delivered", ar: "تم التسليم" },
      title: { en: "Real Estate Management System", ar: "نظام إدارة العقارات" },
      subtitle: {
        en: "Buildings, apartments, sales and rentals with online payments",
        ar: "المباني والشقق والمبيعات والإيجارات مع الدفع الإلكتروني"
      },
      description: {
        en: "Building, apartment, sales and rental management with expense tracking, a customer-facing property website and PayPal rental payments.",
        ar: "إدارة المباني والشقق والمبيعات والإيجارات مع تتبّع المصاريف، وموقع عقاري للعملاء، ودفع الإيجارات عبر PayPal."
      },
      specs: [
        [{ en: "Payments", ar: "الدفع" }, { en: "PayPal", ar: "PayPal" }],
        [{ en: "Website", ar: "الموقع" }, { en: "Customer-facing", ar: "مخصّص للعملاء" }],
        [{ en: "Tracking", ar: "التتبّع" }, { en: "Expenses", ar: "المصاريف" }]
      ],
      tags: ["Laravel", "PayPal", "MySQL", "Property Website"],
      company: { en: "Freelance client", ar: "عميل مستقل" },
      ask: { en: "Tell me about the Real Estate system", ar: "حدّثني عن نظام إدارة العقارات" }
    },
    {
      id: "airline-reservation",
      accent: "#38bdf8", glyph: "FLT",
      image: "assets/projects/airline-reservation.jpg",   // .jpg or .png; the drawn preview shows until the file exists
      category: { en: "Web · Freelance", ar: "ويب · عمل مستقل" },
      status: { en: "Delivered", ar: "تم التسليم" },
      title: { en: "Airline Reservation System", ar: "نظام حجوزات الطيران" },
      subtitle: {
        en: "Flights, reservations and tickets with online booking",
        ar: "الرحلات والحجوزات والتذاكر مع الحجز عبر الإنترنت"
      },
      description: {
        en: "Manage flights, reservations and tickets, with a customer booking website and PayPal payments.",
        ar: "إدارة الرحلات والحجوزات والتذاكر، مع موقع حجز للعملاء ودفع عبر PayPal."
      },
      specs: [
        [{ en: "Payments", ar: "الدفع" }, { en: "PayPal", ar: "PayPal" }],
        [{ en: "Booking", ar: "الحجز" }, { en: "Online", ar: "عبر الإنترنت" }],
        [{ en: "Modules", ar: "الوحدات" }, { en: "Flights · Tickets", ar: "الرحلات · التذاكر" }]
      ],
      tags: ["Laravel", "PayPal", "Booking Engine", "MySQL"],
      company: { en: "Freelance client", ar: "عميل مستقل" },
      ask: { en: "Tell me about the Airline Reservation system", ar: "حدّثني عن نظام حجوزات الطيران" }
    }
  ],

  /* ---------- Experience & education ---------- */
  experience: [
    {
      type: "work",
      title: { en: "Backend Developer | Team Leader", ar: "مطوّر أنظمة خلفية | قائد فريق" },
      org: { en: "Eco Sourcing Hub Company · United Kingdom · Remote", ar: "شركة Eco Sourcing Hub · المملكة المتحدة · عن بُعد" },
      date: { en: "Jun 2024 – Present", ar: "حزيران 2024 – حتى الآن" },
      points: [
        { en: "Started and led the Carbon Accounting platform, and built the B2B Portal and Video Review platform.", ar: "أطلقتُ منصة المحاسبة الكربونية وقدتُها، وبنيتُ بوابة B2B ومنصة مراجعة الفيديو." },
        { en: "Lead the five-developer Response Code team from build through beta and beyond, keeping management informed with weekly and monthly progress reports.", ar: "أقود فريق Response Code المكوّن من خمسة مطوّرين منذ مرحلة البناء وحتى ما بعد الإطلاق التجريبي، وأُطلع الإدارة على سير العمل عبر تقارير أسبوعية وشهرية." },
        { en: "Sole server administrator for 10+ projects: VPS migration, DNS, deployments, backups and documentation.", ar: "المدير الوحيد للخوادم لأكثر من 10 مشاريع: نقلها إلى VPS، وإعداد DNS، والنشر، والنسخ الاحتياطي، والتوثيق." }
      ]
    },
    {
      type: "work",
      title: { en: "Freelance Backend Developer", ar: "مطوّر أنظمة خلفية مستقل" },
      org: { en: "Independent clients · Remote", ar: "عملاء مستقلون · عن بُعد" },
      date: { en: "Jan 2023 – Present", ar: "كانون الثاني 2023 – حتى الآن" },
      points: [
        { en: "Delivered complete Laravel backends: hotel booking, real estate, airline reservations.", ar: "سلّمتُ أنظمة Laravel متكاملة: حجز الفنادق، وإدارة العقارات، وحجوزات الطيران." },
        { en: "Equipment Reservation System for 7awi Company (Dubai, UAE) with email notifications.", ar: "نظام حجز معدّات التصوير لشركة 7awi (دبي، الإمارات) مع إشعارات بالبريد الإلكتروني." }
      ]
    },
    {
      type: "work",
      title: { en: "Laravel Developer", ar: "مطوّر Laravel" },
      org: { en: "Solution Time · Saudi Arabia · Remote", ar: "Solution Time · السعودية · عن بُعد" },
      date: { en: "Oct 2023 – Feb 2024", ar: "تشرين الأول 2023 – شباط 2024" },
      points: [
        { en: "Built features for 3+ production apps, including Google2FA two-factor authentication.", ar: "طوّرتُ ميزات لأكثر من 3 تطبيقات في بيئة الإنتاج، منها المصادقة الثنائية عبر Google2FA." },
        { en: "Built statistical charts and multi-theme interfaces with light and dark modes.", ar: "بنيتُ رسوماً بيانية إحصائية وواجهات متعددة الثيمات بالوضعين الفاتح والداكن." }
      ]
    },
    {
      type: "work",
      title: { en: "Laravel Developer", ar: "مطوّر Laravel" },
      org: { en: "Start Tech Company (Dubai, UAE) · Syria Branch · Onsite", ar: "شركة Start Tech (دبي، الإمارات) · فرع سوريا · من المكتب" },
      date: { en: "Oct 2021 – Oct 2023", ar: "تشرين الأول 2021 – تشرين الأول 2023" },
      points: [
        { en: "Integrated PayPal and Tap payments and REST APIs; secured 10+ projects with OAuth and JWT.", ar: "دمجتُ بوابتي الدفع PayPal وTap وواجهات REST، وأمّنتُ أكثر من 10 مشاريع باستخدام OAuth وJWT." },
        { en: "Built real-time notifications and in-app messaging; designed MySQL database structures.", ar: "بنيتُ إشعارات فورية ورسائل داخل التطبيق، وصمّمتُ بنى قواعد بيانات MySQL." }
      ]
    }
  ],

  education: [
    {
      title: { en: "Master of Computer and Electronic Systems Engineering", ar: "ماجستير في هندسة النظم الحاسوبية والإلكترونية" },
      org: { en: "Tartous University · Syria", ar: "جامعة طرطوس · سوريا" },
      date: { en: "2021 – 2024", ar: "2021 – 2024" }
    },
    {
      title: { en: "Bachelor of Computer Systems Engineering", ar: "بكالوريوس في هندسة النظم الحاسوبية" },
      org: { en: "Tartous University · Syria · Grade 79.8%", ar: "جامعة طرطوس · سوريا · المعدّل 79.8%" },
      date: { en: "2015 – 2020", ar: "2015 – 2020" }
    }
  ],

  /* ---------- Contact facts ---------- */
  facts: [
    { icon: "clock",     label: { en: "Response time", ar: "وقت الرد" }, value: { en: "< 24 hours", ar: "خلال 24 ساعة" } },
    { icon: "map-pin",   label: { en: "Location", ar: "الموقع" },        value: { en: "Tartous, Syria · Remote", ar: "طرطوس، سوريا" } },
    { icon: "languages", label: { en: "Languages", ar: "اللغات" },       value: { en: "Arabic · English", ar: "العربية · الإنجليزية" } }
  ],

  /* ---------- Interface text ---------- */
  ui: {
    pageTitle:   { en: "Yamen Abbas — Backend Developer & Team Lead", ar: "يامن عباس — مطوّر أنظمة خلفية وقائد فريق" },
    skip:        { en: "Skip to content", ar: "انتقل إلى المحتوى" },
    menu:        { en: "Open menu", ar: "فتح القائمة" },
    navHome:     { en: "Home", ar: "الرئيسية" },
    navAbout:    { en: "About", ar: "نبذة" },
    navSkills:   { en: "Skills", ar: "المهارات" },
    navProjects: { en: "Projects", ar: "المشاريع" },
    navExperience: { en: "Experience", ar: "الخبرات" },
    navContact:  { en: "Contact", ar: "تواصل" },
    getInTouch:  { en: "Get In Touch", ar: "تواصل معي" },
    langSwitch:  { en: "العربية", ar: "English" },
    langAria:    { en: "Switch to Arabic", ar: "التبديل إلى الإنجليزية" },

    hello:       { en: "Hello, I Am", ar: "مرحباً، أنا" },
    tagline:     { en: "Building reliable backends, leading teams, and keeping production servers running.", ar: "أبني أنظمة خلفية موثوقة، وأقود فرق التطوير، وأحافظ على استقرار الخوادم في بيئة الإنتاج." },
    explore:     { en: "Explore My Work", ar: "استكشف أعمالي" },
    myCv:        { en: "MY CV", ar: "سيرتي الذاتية" },
    scrollHint:  { en: "Scroll to slide profile", ar: "مرّر للأسفل لتحريك البطاقة" },
    online:      { en: "ONLINE", ar: "متصل" },
    verified:    { en: "VERIFIED", ar: "موثّق" },
    photoAlt:    { en: "Portrait of Yamen Abbas at his desk", ar: "صورة يامن عباس على مكتبه" },

    aboutTitle:  { en: "Building Reliable Backends & Leading Teams That Ship.", ar: "أبني أنظمة خلفية موثوقة وأقود فرقاً تُنجز وتُسلّم." },
    aboutBody:   {
      en: "Senior Backend Developer and Team Lead with 5+ years of experience building production web applications with PHP, Laravel, MySQL and REST APIs. I lead development teams and serve as the sole server administrator at a UK-based company, owning deployment and reliability for 10+ production projects.",
      ar: "مطوّر أنظمة خلفية أول وقائد فريق، بخبرة تزيد عن 5 سنوات في بناء تطبيقات ويب تعمل في بيئة الإنتاج باستخدام PHP وLaravel وMySQL وواجهات REST. أقود فرق التطوير، وأعمل المدير الوحيد للخوادم في شركة مقرّها المملكة المتحدة، وأتولّى النشر واستقرار أكثر من 10 مشاريع في بيئة الإنتاج."
    },
    aboutHint:   { en: "Scroll down: transition to the skills network ↓", ar: "مرّر للأسفل: الانتقال إلى شبكة المهارات ↓" },

    skillsTitle: { en: "Skills Network", ar: "شبكة المهارات" },
    skillsAria:  { en: "Network of Yamen's skills, grouped by area", ar: "شبكة مهارات يامن مقسّمة حسب المجال" },
    gaugesTitle: { en: "SKILL LEVELS & TELEMETRY", ar: "مستويات المهارات" },
    gaugesOk:    { en: "ALL SYSTEMS OPERATIONAL", ar: "جميع الأنظمة تعمل" },
    connections: { en: "connections", ar: "روابط" },

    projectsTitle: { en: "Featured Systems & Architecture", ar: "أبرز الأنظمة والمشاريع" },
    project:     { en: "PROJECT", ar: "مشروع" },
    prev:        { en: "PREV", ar: "السابق" },
    next:        { en: "NEXT", ar: "التالي" },
    askProject:  { en: "Ask about this project", ar: "اسأل عن هذا المشروع" },
    privateNote: { en: "Private client work · source not public", ar: "عمل خاص لعميل · الشيفرة غير منشورة" },
    goToSlide:   { en: "Go to project", ar: "انتقل إلى المشروع" },

    expTitle:    { en: "Experience & Education", ar: "الخبرات والتعليم" },
    expSub:      { en: "5+ years building and running production systems.", ar: "أكثر من 5 سنوات في بناء الأنظمة وتشغيلها في بيئة الإنتاج." },
    education:   { en: "Education", ar: "التعليم" },

    hubBadge:    { en: "COMMUNICATION HUB · GLOBAL NETWORK", ar: "مركز التواصل · متاح من أي مكان" },
    available:   { en: "ONLINE & AVAILABLE", ar: "متاح للعمل" },
    contactTitle:{ en: "Let's Build Something Exceptional", ar: "لنبنِ معاً شيئاً استثنائياً" },
    contactBody: {
      en: "Open to backend development, team leadership and server administration roles, freelance projects and technical consulting.",
      ar: "منفتح على فرص تطوير الأنظمة الخلفية، وقيادة الفرق، وإدارة الخوادم، إضافة إلى المشاريع المستقلة والاستشارات التقنية."
    },
    sendEmail:   { en: "Send Email", ar: "أرسل بريداً" },
    copyAddress: { en: "Copy Address", ar: "نسخ العنوان" },
    copied:      { en: "Email address copied", ar: "تم نسخ البريد الإلكتروني" },
    channels:    { en: "VERIFIED CHANNELS", ar: "قنوات التواصل" },
    channelsOn:  { en: "4 CHANNELS ONLINE", ar: "4 قنوات متاحة" },
    chLinkedin:  { en: "Professional profile & career", ar: "الملف المهني والخبرات" },
    chEmail:     { en: "Best for detailed enquiries", ar: "الأنسب للاستفسارات التفصيلية" },
    chWhatsapp:  { en: "Quick messages", ar: "رسائل سريعة" },
    chPhone:     { en: "Direct call", ar: "اتصال مباشر" },

    footerRoles: { en: "Backend Developer · Team Lead · Server Admin", ar: "مطوّر أنظمة خلفية · قائد فريق · مدير خوادم" },
    backToTop:   { en: "Back to Top", ar: "العودة للأعلى" },
    rights:      { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },

    chatTitle:   { en: "Yamen's Assistant", ar: "مساعد يامن" },
    chatOnline:  { en: "Online & ready to help", ar: "متصل وجاهز للمساعدة" },
    chatThinking:{ en: "Thinking…", ar: "يفكّر…" },
    chatWelcome: {
      en: "Hi! I'm Yamen's assistant. Ask me about his experience, skills, projects or how to contact him.",
      ar: "أهلاً! أنا مساعد يامن. اسألني عن خبراته أو مهاراته أو مشاريعه أو طريقة التواصل معه."
    },
    chatPlaceholder: { en: "Type your question…", ar: "اكتب سؤالك…" },
    chatSend:    { en: "Send", ar: "إرسال" },
    chatOpen:    { en: "Open Yamen's assistant", ar: "فتح مساعد يامن" },
    chatClose:   { en: "Close assistant", ar: "إغلاق المساعد" },
    chatClear:   { en: "Clear conversation", ar: "مسح المحادثة" },
    chatVoice:   { en: "Read answers aloud", ar: "قراءة الإجابات بصوت عالٍ" },
    voiceOn:     { en: "Read-aloud is on.", ar: "تم تفعيل القراءة الصوتية." },
    noVoice:     {
      en: "No English voice is installed on this device, so answers can't be read aloud.",
      ar: "لا يوجد صوت عربي مثبّت على هذا الجهاز، لذلك لا يمكن قراءة الإجابات بصوت عالٍ. افتح الموقع في متصفح Microsoft Edge، أو أضف صوتاً عربياً من إعدادات Windows ← الوقت واللغة ← الكلام."
    },
    chatLabel:   { en: "Your question", ar: "سؤالك" }
  },

  /* ---------- Assistant answers ----------
     The assistant matches words in the visitor's question against "keys"
     and replies with "a". Add more keys or intents as you like. */
  chat: {
    suggestions: [
      { en: "Who is Yamen?", ar: "من هو يامن؟" },
      { en: "What are his core skills?", ar: "ما أبرز مهاراته؟" },
      { en: "Tell me about his projects", ar: "حدّثني عن مشاريعه" },
      { en: "How can I contact him?", ar: "كيف أتواصل معه؟" }
    ],
    intents: [
      {
        keys: ["hi", "hello", "hey", "good morning", "salam", "مرحبا", "اهلا", "السلام", "هاي", "صباح الخير", "مساء الخير"],
        a: {
          en: "Hello! I can tell you about Yamen's experience, skills, projects, education or how to reach him. What would you like to know?",
          ar: "أهلاً وسهلاً! يمكنني أن أحدّثك عن خبرات يامن ومهاراته ومشاريعه وتعليمه، أو عن طريقة التواصل معه. ماذا تودّ أن تعرف؟"
        }
      },
      {
        keys: ["who is", "who's", "about yamen", "about him", "introduce", "yourself", "summary", "من هو", "مين", "عرفني", "نبذه", "من يكون", "عن يامن"],
        a: {
          en: "Yamen Abbas is a Senior Backend Developer and Team Lead from Tartous, Syria, with 5+ years of experience in PHP, Laravel, MySQL and REST APIs.\nHe currently leads development teams at Eco Sourcing Hub (UK) and is the sole server administrator for 10+ production projects.",
          ar: "يامن عباس مطوّر أنظمة خلفية أول وقائد فريق من طرطوس في سوريا، يملك خبرة تزيد عن 5 سنوات في PHP وLaravel وMySQL وواجهات REST.\nيقود حالياً فرق التطوير في شركة Eco Sourcing Hub في المملكة المتحدة، وهو المدير الوحيد للخوادم لأكثر من 10 مشاريع في بيئة الإنتاج."
        }
      },
      {
        keys: ["skill", "stack", "technolog", "tech", "good at", "programming", "expert", "مهار", "تقني", "تقنيات", "يتقن", "برمجه", "خبير"],
        a: {
          en: "Core skills:\n• Backend: PHP, Laravel (Queues, Reverb), MySQL, REST APIs\n• Security: OAuth, JWT, two-factor authentication\n• Payments: PayPal, Tap, Microsoft Graph API\n• Frontend: JavaScript, jQuery, Bootstrap, basic React & Inertia.js\n• Servers: Linux (AlmaLinux), VPS, Plesk, DNS, cron jobs, queue workers, Git deployments, FFmpeg\n• Daily AI-assisted development with Claude and ChatGPT",
          ar: "أبرز المهارات:\n• الأنظمة الخلفية: PHP وLaravel (الطوابير وReverb) وMySQL وواجهات REST\n• الأمان: OAuth وJWT والمصادقة الثنائية\n• الدفع والتكامل: PayPal وTap وMicrosoft Graph API\n• الواجهات: JavaScript وjQuery وBootstrap، ومعرفة أساسية بـ React وInertia.js\n• الخوادم: Linux (AlmaLinux) وVPS وPlesk وDNS والمهام المجدولة وعمّال الطوابير والنشر عبر Git وFFmpeg\n• يستخدم Claude وChatGPT يومياً لتسريع التطوير"
        }
      },
      {
        keys: ["experience", "work history", "career", "years", "worked", "background", "خبره", "خبرات", "سنوات", "عمل سابق", "شركات", "مسيره"],
        a: {
          en: "Experience:\n• Backend Developer & Team Leader, Eco Sourcing Hub (UK, remote), Jun 2024 – present\n• Freelance Backend Developer, Jan 2023 – present\n• Laravel Developer, Solution Time (Saudi Arabia, remote), Oct 2023 – Feb 2024\n• Laravel Developer, Start Tech Company (Syria branch), Oct 2021 – Oct 2023",
          ar: "الخبرات:\n• مطوّر أنظمة خلفية وقائد فريق في Eco Sourcing Hub (المملكة المتحدة، عن بُعد)، من حزيران 2024 حتى الآن\n• مطوّر أنظمة خلفية مستقل، من كانون الثاني 2023 حتى الآن\n• مطوّر Laravel في Solution Time (السعودية، عن بُعد)، من تشرين الأول 2023 إلى شباط 2024\n• مطوّر Laravel في شركة Start Tech (فرع سوريا)، من تشرين الأول 2021 إلى تشرين الأول 2023"
        }
      },
      {
        keys: ["current", "now", "eco sourcing", "company", "job", "حاليا", "الان", "الشركه", "وظيفته", "يعمل"],
        a: {
          en: "Since June 2024 Yamen has worked remotely for Eco Sourcing Hub, a UK company. He builds Laravel platforms (Carbon Accounting, B2B Portal, Video Review), built the Response Code app and leads its team, and is the sole administrator of the company's servers.",
          ar: "يعمل يامن منذ حزيران 2024 عن بُعد لدى شركة Eco Sourcing Hub البريطانية. يبني منصات بـ Laravel (المحاسبة الكربونية، وبوابة B2B، ومراجعة الفيديو)، وبنى تطبيق Response Code ويقود فريقه، وهو المدير الوحيد لخوادم الشركة."
        }
      },
      {
        keys: ["projects", "project", "portfolio", "built", "work samples", "مشاريع", "مشروع", "اعماله", "انجازات"],
        a: {
          en: "Highlighted projects:\n• Carbon Accounting Platform: emissions calculation engine\n• B2B Portal: integrated with the FMCG platform via REST APIs\n• Video Review & Approval Platform: shipped in ~5 days\n• Response Code App: built it and led the team to beta\n• Freelance: hotel booking, real estate and airline reservation systems\nAsk about any of them for details.",
          ar: "أبرز المشاريع:\n• منصة المحاسبة الكربونية: محرّك لحساب الانبعاثات\n• بوابة B2B: مرتبطة بمنصة FMCG عبر واجهات REST\n• منصة مراجعة الفيديو واعتماده: أُطلقت خلال 5 أيام تقريباً\n• تطبيق Response Code: بناه وقاد الفريق حتى النسخة التجريبية\n• أعمال مستقلة: أنظمة لحجز الفنادق وإدارة العقارات وحجوزات الطيران\nاسألني عن أيٍّ منها لمزيد من التفاصيل."
        }
      },
      {
        keys: ["carbon", "emission", "co2", "كربون", "انبعاث"],
        a: {
          en: "The Carbon Accounting Platform analyses companies' emissions. Yamen started it as the sole developer, then built and led the team. He designed the Laravel backend: calculation logic, data-processing workflows and Excel imports, after auditing the legacy platform's calculations.",
          ar: "منصة المحاسبة الكربونية تحلّل انبعاثات الشركات. بدأها يامن كمطوّر وحيد، ثم بنى الفريق وقاده. صمّم النواة الخلفية بـ Laravel: منطق الحسابات ومسارات معالجة البيانات واستيراد ملفات Excel، بعد مراجعة حسابات المنصة القديمة."
        }
      },
      {
        keys: ["b2b", "portal", "fmcg", "wholesale", "بوابه", "جمله"],
        a: {
          en: "Yamen designed and built the B2B Portal end-to-end with PHP, Laravel and MySQL, and integrated it with the FMCG platform via REST APIs (product data, orders, notifications, dashboards). He also wrote the specification for its migration to Next.js.",
          ar: "صمّم يامن بوابة B2B وبناها بالكامل باستخدام PHP وLaravel وMySQL، وربطها بمنصة FMCG عبر واجهات REST (بيانات المنتجات، والطلبات، والإشعارات، ولوحات التحكم). كما كتب مواصفات نقلها إلى Next.js."
        }
      },
      {
        keys: ["video", "review", "approval", "ffmpeg", "inertia", "react", "فيديو", "مراجعه", "اعتماد"],
        a: {
          en: "Yamen built the Video Review & Approval platform on his own and shipped the first version in about 5 days using an AI-assisted workflow: Laravel 12, React 19 + Inertia.js, real-time chat and comments, and FFmpeg video processing. It's in daily production use.",
          ar: "بنى يامن منصة مراجعة الفيديو واعتماده بمفرده، وأطلق الإصدار الأول خلال 5 أيام تقريباً بمساعدة أدوات الذكاء الاصطناعي: Laravel 12، وReact 19 مع Inertia.js، ودردشة وتعليقات فورية، ومعالجة الفيديو عبر FFmpeg. وهي مستخدمة يومياً في بيئة الإنتاج."
        }
      },
      {
        keys: ["response code", "flutter", "mobile", "app", "تطبيق", "جوال", "موبايل"],
        a: {
          en: "Yamen built the Response Code app and was fully responsible for leading the team. The app is made up of a Laravel API and admin panel, a Flutter mobile app and a Next.js web platform. The beta shipped in September 2026 and he now manages post-beta fixes and client feedback.",
          ar: "بنى يامن تطبيق Response Code وتولّى قيادة الفريق بالكامل. يتكوّن التطبيق من واجهة API ولوحة تحكم بـ Laravel، وتطبيق جوال بـ Flutter، ومنصة ويب بـ Next.js. صدرت النسخة التجريبية في أيلول 2026، ويتابع حالياً الإصلاحات وملاحظات العميل."
        }
      },
      {
        keys: ["freelance", "hotel", "real estate", "airline", "booking", "reservation", "equipment", "مستقل", "فندق", "فنادق", "عقار", "طيران", "حجز", "حجوزات"],
        a: {
          en: "As a freelancer (since 2023) Yamen has delivered complete Laravel backends:\n• Hotel booking & management: multi-role, multilingual, automated commissions\n• Real estate management: sales, rentals, expenses, PayPal payments\n• Airline reservations: flights, tickets, PayPal payments\n• Equipment reservations for 7awi Company in Dubai",
          ar: "منذ عام 2023 سلّم يامن كمطوّر مستقل أنظمة Laravel متكاملة:\n• حجز الفنادق وإدارتها: أدوار متعددة، ولغات متعددة، وعمولات تلقائية\n• إدارة العقارات: المبيعات والإيجارات والمصاريف مع الدفع عبر PayPal\n• حجوزات الطيران: الرحلات والتذاكر مع الدفع عبر PayPal\n• نظام حجز المعدّات لشركة 7awi في دبي"
        }
      },
      {
        keys: ["server", "linux", "vps", "devops", "deploy", "dns", "plesk", "hosting", "backup", "خادم", "خوادم", "سيرفر", "نشر", "لينكس", "استضافه"],
        a: {
          en: "Yamen is the sole server administrator for 10+ company projects. He migrated Laravel apps from shared hosting to a VPS (Plesk on AlmaLinux 9), runs production, staging and development environments, deploys from GitLab, handles DNS, queue workers and scheduled tasks, and writes backup and restore documentation in Arabic and English.",
          ar: "يامن هو المدير الوحيد للخوادم لأكثر من 10 مشاريع في الشركة. نقل تطبيقات Laravel من الاستضافة المشتركة إلى خادم VPS (Plesk على AlmaLinux 9)، ويدير بيئات الإنتاج والاختبار والتطوير، وينشر من GitLab، ويتولّى إعدادات DNS وعمّال الطوابير والمهام المجدولة، ويكتب توثيق النسخ الاحتياطي والاستعادة بالعربية والإنجليزية."
        }
      },
      {
        keys: ["lead", "leader", "team", "manage", "management", "قائد", "قياده", "فريق", "اداره الفريق"],
        a: {
          en: "Yamen leads development teams. He runs daily follow-ups, assigns tasks, tracks blockers, organises testing, writes weekly and monthly reports for management, and defines requirements and technical specifications for new platforms.",
          ar: "يقود يامن فرق التطوير. يتابع الفريق يومياً، ويوزّع المهام، ويتابع العوائق، وينظّم الاختبار، ويكتب تقارير أسبوعية وشهرية للإدارة، ويحدّد المتطلبات والمواصفات التقنية للمنصات الجديدة."
        }
      },
      {
        keys: ["contact", "email", "mail", "phone", "reach", "whatsapp", "linkedin", "call", "تواصل", "ايميل", "بريد", "هاتف", "رقم", "واتس", "اتصال", "لينكد"],
        a: {
          en: "You can reach Yamen here:\n• Email: yamen.abbas.422@gmail.com\n• Phone / WhatsApp: +963 935 422 795\n• LinkedIn: linkedin.com/in/yamen-abbas\nHe usually replies within 24 hours.",
          ar: "يمكنك التواصل مع يامن عبر:\n• البريد الإلكتروني: yamen.abbas.422@gmail.com\n• الهاتف / واتساب: ‎+963 935 422 795\n• لينكدإن: linkedin.com/in/yamen-abbas\nعادةً يردّ خلال 24 ساعة."
        },
        links: "contact"
      },
      {
        keys: ["hire", "available", "availability", "open to", "job offer", "opportunit", "rate", "توظيف", "متاح", "فرصه", "فرص", "عرض عمل", "التعاقد"],
        a: {
          en: "Yes, Yamen is open to backend development, team leadership and server administration roles, as well as freelance projects and technical consulting. He works remotely; the quickest way to start is an email to yamen.abbas.422@gmail.com.",
          ar: "نعم، يامن منفتح على فرص تطوير الأنظمة الخلفية وقيادة الفرق وإدارة الخوادم، إضافة إلى المشاريع المستقلة والاستشارات التقنية. يعمل عن بُعد، وأسرع طريقة للبدء رسالة إلى yamen.abbas.422@gmail.com."
        },
        links: "contact"
      },
      {
        keys: ["where", "location", "based", "country", "city", "remote", "live", "اين", "وين", "موقع", "مكان", "يقيم", "سوريا", "طرطوس", "عن بعد"],
        a: {
          en: "Yamen is based in Tartous, Syria, and works remotely with companies in the UK, Saudi Arabia and the UAE.",
          ar: "يقيم يامن في طرطوس في سوريا، ويعمل عن بُعد مع شركات في المملكة المتحدة والسعودية والإمارات."
        }
      },
      {
        keys: ["education", "degree", "university", "master", "bachelor", "study", "studied", "تعليم", "شهاده", "جامعه", "ماجستير", "بكالوريوس", "دراسه", "درس"],
        a: {
          en: "Education:\n• Master of Computer and Electronic Systems Engineering, Tartous University (2021 – 2024)\n• Bachelor of Computer Systems Engineering, Tartous University (2015 – 2020), grade 79.8%\nHe's also studying DevOps fundamentals and Odoo development.",
          ar: "التعليم:\n• ماجستير في هندسة النظم الحاسوبية والإلكترونية، جامعة طرطوس (2021 – 2024)\n• بكالوريوس في هندسة النظم الحاسوبية، جامعة طرطوس (2015 – 2020)، بمعدّل 79.8%\nويتعلّم حالياً أساسيات DevOps وتطوير Odoo."
        }
      },
      {
        keys: ["language", "english", "arabic", "speak", "اللغات", "لغات", "انجليزي", "انكليزي", "عربي", "يتحدث"],
        a: {
          en: "Yamen speaks Arabic (native) and English (intermediate).",
          ar: "يتحدث يامن العربية (لغته الأم) والإنجليزية (مستوى متوسط)."
        }
      },
      {
        keys: ["cv", "resume", "résumé", "pdf", "سيره", "السيره الذاتيه"],
        a: {
          en: "You can open Yamen's CV with the link below.",
          ar: "يمكنك فتح السيرة الذاتية ليامن من الرابط أدناه."
        },
        links: "cv"
      },
      {
        keys: ["ai", "claude", "chatgpt", "artificial", "ذكاء", "الذكاء الاصطناعي"],
        a: {
          en: "Yamen uses AI tools (Claude, ChatGPT) every day for technical research, code generation and review, debugging and documentation. That workflow let him ship the Video Review platform's first version in about 5 days.",
          ar: "يستخدم يامن أدوات الذكاء الاصطناعي (Claude وChatGPT) يومياً في البحث التقني وكتابة الشيفرة ومراجعتها وتصحيح الأخطاء والتوثيق. وبفضل ذلك أطلق الإصدار الأول من منصة مراجعة الفيديو خلال 5 أيام تقريباً."
        }
      },
      {
        keys: ["thank", "thanks", "great", "awesome", "شكرا", "يعطيك العافيه", "ممتاز"],
        a: {
          en: "You're welcome! Anything else you'd like to know about Yamen?",
          ar: "على الرحب والسعة! هل تودّ معرفة شيء آخر عن يامن؟"
        }
      }
    ],
    fallback: {
      en: "I'm not sure about that one. Try asking about Yamen's experience, skills, projects, education or contact details, or email him directly at yamen.abbas.422@gmail.com.",
      ar: "لستُ متأكداً من ذلك. جرّب أن تسألني عن خبرات يامن أو مهاراته أو مشاريعه أو تعليمه أو طريقة التواصل معه، أو راسله مباشرة على yamen.abbas.422@gmail.com."
    }
  }
};
