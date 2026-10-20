/* =====================================================================
   Yamen Abbas — Portfolio behaviour
   No libraries: everything runs offline from these files.
   Text lives in js/content.js; this file only renders and animates it.
   ===================================================================== */
(() => {
  "use strict";

  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const root = document.documentElement;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

  const store = {
    get(k) { try { return localStorage.getItem("ya." + k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem("ya." + k, v); } catch (e) { /* storage unavailable */ } }
  };

  let lang = store.get("lang") === "ar" ? "ar" : "en";
  const tx = (v) => (v == null ? "" : typeof v === "string" ? v : v[lang] != null ? v[lang] : v.en);
  const t = (key) => (S.ui[key] ? tx(S.ui[key]) : key === "name" ? tx(S.profile.name) : key);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ------------------------------------------------------------------
     Icons (Lucide-style, inline SVG)
  ------------------------------------------------------------------ */
  const ICONS = {
    "code": '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    "globe": '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    "send": '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    "menu": '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>',
    "chevron-right": '<path d="m9 18 6-6-6-6"/>',
    "chevron-left": '<path d="m15 18-6-6 6-6"/>',
    "file-text": '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    "terminal": '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
    "shield-check": '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    "sparkles": '<path d="M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5a2 2 0 0 0 1.44 1.44l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z"/>',
    "database": '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    "users": '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    "server": '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    "copy": '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    "mail": '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    "phone": '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    "message": '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    "x": '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    "trash": '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    "volume": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
    "volume-x": '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/>',
    "arrow-up": '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    "external": '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"/>',
    "map-pin": '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    "clock": '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    "languages": '<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
    "lock": '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    "briefcase": '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    "graduation": '<path d="M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>'
  };
  const LINKEDIN = '<path fill="currentColor" stroke="none" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>';
  function icon(name) {
    const body = name === "linkedin" ? LINKEDIN : ICONS[name] || "";
    return `<svg class="i" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
  }
  const applyIcons = (scope = document) => $$("[data-icon]", scope).forEach((el) => { el.innerHTML = icon(el.dataset.icon); });

  /* ------------------------------------------------------------------
     Static text (data-i18n attributes)
  ------------------------------------------------------------------ */
  function applyText() {
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    document.title = t("pageTitle");
    $("#profilePhoto").alt = t("photoAlt");
    $("#profilePhoto").src = S.profile.photo;
    ["#cvLinkHero", "#cvLinkContact"].forEach((s) => { $(s).href = S.profile.cv; });
    $("#mailBtn").href = "mailto:" + S.profile.email;
    $("#year").textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------
     Rotating roles
  ------------------------------------------------------------------ */
  let roleIdx = 0, roleTimer = null, typingToken = 0, rolePauseUntil = 0;

  function hexToRgb(hex) {
    const n = parseInt(hex.slice(1), 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  let accentRgb = hexToRgb(S.roles[0].color);

  function renderRoleChips() {
    $("#roleChips").innerHTML = S.roles.map((r, i) =>
      `<button type="button" class="chip" data-role="${i}" aria-pressed="${i === roleIdx}">${esc(tx(r.label))}</button>`).join("");
  }

  function setRole(i, instant) {
    roleIdx = i;
    const r = S.roles[i];
    root.style.setProperty("--accent", r.color);
    root.style.setProperty("--accent-2", r.color2);
    // The scrollbar gets plain (non-animated) colours: Chrome won't repaint it during a fade
    root.style.setProperty("--sb-1", r.color);
    root.style.setProperty("--sb-2", r.color2);
    accentRgb = hexToRgb(r.color);
    $$("#roleChips .chip").forEach((c, k) => c.setAttribute("aria-pressed", String(k === i)));
    $("#cardRole").textContent = tx(r.label);
    $("#cardStack").textContent = tx(r.stack);
    $("#navRole").textContent = tx(r.label);
    typeRole(tx(r.label), instant);
  }

  async function typeRole(text, instant) {
    const el = $("#roleText");
    const token = ++typingToken;
    if (instant || reduceMotion) { el.textContent = text; return; }
    let cur = Array.from(el.textContent);
    while (cur.length) {
      if (token !== typingToken) return;
      cur.pop(); el.textContent = cur.join(""); await sleep(24);
    }
    const chars = Array.from(text);
    for (let k = 1; k <= chars.length; k++) {
      if (token !== typingToken) return;
      el.textContent = chars.slice(0, k).join(""); await sleep(55);
    }
  }

  function startRoles() {
    clearInterval(roleTimer);
    roleTimer = setInterval(() => {
      if (Date.now() < rolePauseUntil || document.hidden) return;
      setRole((roleIdx + 1) % S.roles.length);
    }, 4200);
  }

  $("#roleChips").addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    rolePauseUntil = Date.now() + 9000;
    setRole(+b.dataset.role);
  });

  /* ------------------------------------------------------------------
     About cards & stats
  ------------------------------------------------------------------ */
  function renderAbout() {
    $("#aboutCards").innerHTML = S.about.map((c) =>
      `<article class="about-card"><span class="ic">${icon(c.icon)}</span><h3>${esc(tx(c.title))}</h3><p>${esc(tx(c.text))}</p></article>`).join("");
    $("#aboutStats").innerHTML = S.stats.map((s) =>
      `<div class="stat"><strong>${esc(s.value)}</strong><span>${esc(tx(s.label))}</span></div>`).join("");
  }

  /* ------------------------------------------------------------------
     Pinned stage: hero → about, card slides across
  ------------------------------------------------------------------ */
  const wrap = $("#home"), inner = $("#stageInner"), card = $("#profileCard"), tilt = $("#cardTilt");
  const heroCopy = $("#heroCopy"), aboutCopy = $("#aboutCopy");
  let staticStage = false;

  function checkStageMode() {
    staticStage = reduceMotion || innerWidth < 960 || innerHeight < 600;
    root.classList.toggle("static-stage", staticStage);
    if (staticStage) {
      [card, heroCopy, aboutCopy].forEach((el) => { el.style.transform = ""; el.style.opacity = ""; el.style.filter = ""; el.inert = false; });
      $$(".about-copy > *").forEach((el) => { el.style.opacity = ""; el.style.transform = ""; });
    }
  }

  function stageProgress() {
    const total = wrap.offsetHeight - innerHeight;
    return total > 0 ? clamp(-wrap.getBoundingClientRect().top / total) : 0;
  }

  function updateStage() {
    if (staticStage) return;
    const p = stageProgress();
    const dir = root.dir === "rtl" ? 1 : -1;            // card travels towards the start side
    const cs = getComputedStyle(inner);
    const contentW = inner.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const dist = Math.max(0, contentW - card.offsetWidth);
    const m = easeInOut(clamp((p - 0.08) / 0.62));
    const swing = Math.sin(m * Math.PI);
    card.style.transform = `translate3d(${dir * dist * m}px, -50%, 0) rotateY(${dir * 10 * swing}deg) scale(${1 - 0.05 * swing})`;

    const ho = clamp(1 - p / 0.32);
    heroCopy.style.opacity = ho;
    heroCopy.style.filter = `blur(${(1 - ho) * 10}px)`;
    heroCopy.style.transform = `translate3d(${dir * 70 * (1 - ho)}px, -50%, 0)`;
    heroCopy.inert = ho < 0.05;

    const ao = clamp((p - 0.42) / 0.22);
    aboutCopy.style.opacity = ao > 0 ? 1 : 0;
    aboutCopy.inert = ao < 0.05;
    $$(".about-copy > :not(.anchor)").forEach((el, i) => {
      const k = clamp((p - 0.42 - i * 0.04) / 0.2);
      el.style.opacity = k;
      el.style.transform = `translate3d(${-dir * 50 * (1 - k)}px, ${16 * (1 - k)}px, 0)`;
    });
  }

  // Card tilt follows the pointer (desktop only)
  if (!reduceMotion && matchMedia("(hover: hover)").matches) {
    card.addEventListener("pointermove", (e) => {
      const r = tilt.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform = `rotateX(${-y * 8}deg) rotateY(${x * 10}deg)`;
    });
    card.addEventListener("pointerleave", () => { tilt.style.transform = ""; });
  }

  /* ------------------------------------------------------------------
     Navigation: smooth scroll, active link, mobile menu
  ------------------------------------------------------------------ */
  const menuBtn = $("#menuBtn"), mobileMenu = $("#mobileMenu");

  function targetY(id) {
    if (id === "home") return 0;
    if (id === "about") {
      if (!staticStage) return wrap.offsetTop + (wrap.offsetHeight - innerHeight) * 0.9;
      return aboutCopy.getBoundingClientRect().top + scrollY - 90;
    }
    const el = document.getElementById(id);
    return el ? el.getBoundingClientRect().top + scrollY - 70 : 0;
  }
  function goTo(id) {
    window.scrollTo({ top: targetY(id), behavior: reduceMotion ? "auto" : "smooth" });
    try { history.replaceState(null, "", "#" + id); } catch (e) { /* file:// may refuse */ }
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-nav]");
    if (!a) return;
    e.preventDefault();
    closeMenu();
    goTo(a.dataset.nav);
  });

  function closeMenu() { mobileMenu.hidden = true; menuBtn.setAttribute("aria-expanded", "false"); }
  menuBtn.addEventListener("click", () => {
    const open = mobileMenu.hidden;
    mobileMenu.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
  });

  function currentSection() {
    if (!staticStage) {
      const p = stageProgress();
      if (wrap.getBoundingClientRect().bottom > innerHeight * 0.5) return p < 0.42 ? "home" : "about";
    } else if (aboutCopy.getBoundingClientRect().top > innerHeight * 0.45) {
      return "home";
    } else if ($("#skills").getBoundingClientRect().top > innerHeight * 0.45) {
      return "about";
    }
    let cur = "about";
    ["skills", "projects", "experience", "contact"].forEach((id) => {
      if (document.getElementById(id).getBoundingClientRect().top < innerHeight * 0.45) cur = id;
    });
    if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) cur = "contact";
    return cur;
  }
  let lastSection = "";
  function updateNav() {
    $("#nav").classList.toggle("scrolled", scrollY > 20);
    const cur = currentSection();
    if (cur === lastSection) return;
    lastSection = cur;
    $$(".nav-links a, .mobile-menu a").forEach((a) => {
      const on = a.dataset.nav === cur;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current");
    });
  }

  /* ------------------------------------------------------------------
     Scroll reveal
  ------------------------------------------------------------------ */
  const revealObs = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); revealObs.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }) : null;
  function observeReveals(scope = document) {
    $$("[data-reveal]:not(.in)", scope).forEach((el) => { if (revealObs && !reduceMotion) revealObs.observe(el); else el.classList.add("in"); });
  }

  /* ------------------------------------------------------------------
     Skills network
  ------------------------------------------------------------------ */
  const mesh = $("#mesh"), meshTip = $("#meshTip");
  let meshSvg = null, edgeEls = [], nodeEls = [], particles = [], meshVisible = false;
  const nodeById = {};
  S.skillNodes.forEach((n, i) => { n.order = n.x / 1000; nodeById[n.id] = n; n.index = i; });

  function curve(a, b, i) {
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    const dx = b.x - a.x, dy = b.y - a.y, len = Math.hypot(dx, dy) || 1;
    const off = (i % 2 ? 1 : -1) * Math.min(26, len * 0.1);
    return `M${a.x} ${a.y} Q${(mx - (dy / len) * off).toFixed(1)} ${(my + (dx / len) * off).toFixed(1)} ${b.x} ${b.y}`;
  }

  function renderSkills() {
    const G = S.skillGroups;
    $("#skillLegend").innerHTML = Object.values(G).map((g) => `<span style="--c:${g.color}"><i></i>${esc(tx(g.label))}</span>`).join("");

    const edges = S.skillLinks.map(([a, b], i) => {
      const A = nodeById[a], B = nodeById[b];
      return `<path class="edge" data-a="${a}" data-b="${b}" pathLength="1" style="--c:${G[A.group].color}" d="${curve(A, B, i)}"/>`;
    }).join("");
    const nodes = S.skillNodes.map((n) => {
      const g = S.skillGauge(n.id);
      return `<g class="node" data-id="${n.id}" tabindex="0" role="button" aria-label="${esc(tx(n.label))}${g ? " " + g + "%" : ""}" transform="translate(${n.x} ${n.y})" style="--c:${G[n.group].color}">
        <g class="pop"><circle class="halo" r="26"/><circle class="ring" r="20"/><circle class="core" r="20"/><text class="glyph">${esc(n.glyph)}</text></g>
        <text class="label" y="40">${esc(tx(n.label))}</text></g>`;
    }).join("");
    mesh.querySelector("svg")?.remove();
    mesh.insertAdjacentHTML("afterbegin",
      `<svg class="mesh-svg" viewBox="-40 0 1080 450" role="group" aria-label="${esc(t("skillsAria"))}"><g class="edges">${edges}</g><g class="particles"></g><g class="nodes">${nodes}</g></svg>`);
    meshSvg = mesh.querySelector("svg");
    edgeEls = $$(".edge", meshSvg);
    nodeEls = $$(".node", meshSvg);
    particles = [];

    $("#skillLists").innerHTML = Object.entries(G).map(([key, g]) =>
      `<div class="skill-group" style="--c:${g.color}"><h3><i></i>${esc(tx(g.label))}</h3><ul>${
        S.skillNodes.filter((n) => n.group === key).map((n) => `<li>${esc(tx(n.label))}</li>`).join("")}</ul></div>`).join("");
    updateMesh();
  }
  // Find a gauge value that matches a node (for tooltips)
  S.skillGauge = (id) => {
    const map = { laravel: "Laravel", php: "PHP", rest: "REST APIs", mysql: "MySQL", auth: "Auth & Security", git: "Git", js: "JavaScript", react: "React · Inertia", deploy: "Deployment", linux: "Linux · VPS", vps: "Linux · VPS" };
    const g = S.gauges.find((x) => x.label.en === map[id]);
    return g ? g.value : null;
  };

  function updateMesh() {
    if (!meshSvg) return;
    const r = mesh.getBoundingClientRect();
    meshVisible = r.bottom > 0 && r.top < innerHeight;
    const p = reduceMotion ? 1 : clamp((innerHeight * 0.92 - r.top) / (innerHeight * 0.75));
    nodeEls.forEach((el) => {
      const n = nodeById[el.dataset.id];
      el.classList.toggle("lit", p > 0.04 + n.order * 0.8);
    });
    edgeEls.forEach((el) => {
      const a = nodeById[el.dataset.a], b = nodeById[el.dataset.b];
      el.classList.toggle("lit", p > 0.1 + Math.max(a.order, b.order) * 0.8);
    });
  }

  function focusNode(el) {
    if (!el) { meshSvg.classList.remove("focusing"); $$(".hot", meshSvg).forEach((x) => x.classList.remove("hot")); meshTip.classList.remove("show"); return; }
    const id = el.dataset.id, n = nodeById[id];
    meshSvg.classList.add("focusing");
    nodeEls.forEach((x) => x.classList.toggle("hot", x === el));
    edgeEls.forEach((e) => {
      const on = e.dataset.a === id || e.dataset.b === id;
      e.classList.toggle("hot", on);
      if (on) nodeEls.find((x) => x.dataset.id === (e.dataset.a === id ? e.dataset.b : e.dataset.a))?.classList.add("hot");
    });
    const links = S.skillLinks.filter(([a, b]) => a === id || b === id).length;
    const g = S.skillGauge(id);
    const G = S.skillGroups[n.group];
    meshTip.style.setProperty("--c", G.color);
    meshTip.innerHTML = `<b>${esc(tx(n.label))}</b>${g ? ` · ${g}%` : ""}<small>${esc(tx(G.label))} · ${links} ${esc(t("connections"))}</small>`;
    const box = mesh.getBoundingClientRect(), nb = el.getBoundingClientRect();
    const x = clamp(nb.left + nb.width / 2 - box.left, 90, box.width - 90);
    meshTip.style.left = x + "px";
    meshTip.style.top = (nb.top - box.top) + "px";
    meshTip.classList.add("show");
  }
  mesh.addEventListener("pointerover", (e) => { const n = e.target.closest(".node"); if (n) focusNode(n); });
  mesh.addEventListener("pointerleave", () => focusNode(null));
  mesh.addEventListener("focusin", (e) => { const n = e.target.closest(".node"); if (n) focusNode(n); });
  mesh.addEventListener("focusout", () => focusNode(null));

  // Light particles that travel along lit connections
  function tickParticles() {
    if (!meshSvg || reduceMotion) return;
    const layer = meshSvg.querySelector(".particles");
    const lit = edgeEls.filter((e) => e.classList.contains("lit"));
    while (particles.length < Math.min(16, lit.length)) {
      const edge = lit[Math.floor(Math.random() * lit.length)];
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("r", (1.6 + Math.random() * 1.4).toFixed(1));
      c.setAttribute("class", "particle");
      c.style.setProperty("--c", edge.style.getPropertyValue("--c"));
      layer.appendChild(c);
      particles.push({ el: c, edge, len: edge.getTotalLength(), t: 0, v: 0.003 + Math.random() * 0.005, back: Math.random() < 0.5 });
    }
    particles = particles.filter((pt) => {
      pt.t += pt.v;
      if (pt.t >= 1 || !pt.edge.classList.contains("lit")) { pt.el.remove(); return false; }
      const pos = pt.edge.getPointAtLength((pt.back ? 1 - pt.t : pt.t) * pt.len);
      pt.el.setAttribute("cx", pos.x.toFixed(1));
      pt.el.setAttribute("cy", pos.y.toFixed(1));
      pt.el.style.opacity = Math.sin(pt.t * Math.PI).toFixed(2);
      return true;
    });
  }

  /* ------------------------------------------------------------------
     Gauges
  ------------------------------------------------------------------ */
  let gaugesDone = false;
  function renderGauges() {
    $("#gaugeGrid").innerHTML = S.gauges.map((g) =>
      `<div class="gauge" style="--c:${S.skillGroups[g.group].color}">
        <div class="gauge-ring"><svg viewBox="0 0 44 44" aria-hidden="true"><circle class="track" cx="22" cy="22" r="18"/><circle class="bar" cx="22" cy="22" r="18" pathLength="100" data-v="${g.value}"/></svg>
        <span class="val" data-v="${g.value}">${gaugesDone ? g.value : 0}%</span></div>
        <span class="lbl">${esc(tx(g.label))}</span></div>`).join("");
    if (gaugesDone) fillGauges(true);
  }
  function fillGauges(instant) {
    gaugesDone = true;
    $$("#gaugeGrid .bar").forEach((b) => { b.style.strokeDashoffset = 100 - +b.dataset.v; });
    $$("#gaugeGrid .val").forEach((v) => {
      const target = +v.dataset.v;
      if (instant || reduceMotion) { v.textContent = target + "%"; return; }
      const t0 = performance.now();
      const step = (now) => {
        const k = clamp((now - t0) / 1600);
        v.textContent = Math.round(target * (1 - Math.pow(1 - k, 3))) + "%";
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }
  if ("IntersectionObserver" in window) {
    const go = new IntersectionObserver((en) => { if (en[0].isIntersecting) { fillGauges(); go.disconnect(); } }, { threshold: 0.35 });
    go.observe($("#gauges"));
  } else fillGauges(true);

  /* ------------------------------------------------------------------
     Projects slider
  ------------------------------------------------------------------ */
  let slideIdx = 0;
  const slidesEl = $("#slides");

  function seeded(str) {
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
    return () => { h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); return ((h ^= h >>> 16) >>> 0) / 4294967296; };
  }

  // A generated "system preview" image for each project
  function projectVisual(p, i) {
    const r = seeded(p.id), c = p.accent, id = "pv" + i;
    const pts = [];
    for (let k = 0; k <= 9; k++) pts.push([36 + k * 30, 190 - k * 7 - r() * 55]);
    const line = pts.map((q, k) => (k ? "L" : "M") + q[0].toFixed(0) + " " + q[1].toFixed(0)).join(" ");
    const area = line + ` L${pts[pts.length - 1][0]} 232 L36 232 Z`;
    const bars = Array.from({ length: 7 }, (_, k) => {
      const h = 20 + r() * 70;
      return `<rect class="pv-bar" style="--i:${k}" x="${352 + k * 15}" y="${232 - h}" width="9" height="${h}" rx="2" fill="${c}" fill-opacity="${0.35 + r() * 0.5}"/>`;
    }).join("");
    const nodes = Array.from({ length: 4 }, (_, k) => {
      const x = 360 + (k % 2) * 60 + r() * 20, y = 66 + Math.floor(k / 2) * 50 + r() * 10;
      return `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="${(5 + r() * 5).toFixed(1)}" fill="none" stroke="${c}" stroke-width="1.5"/><circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="2.5" fill="${c}"/>`;
    }).join("");
    return `<svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="${id}b" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c}" stop-opacity=".30"/><stop offset=".55" stop-color="#0a1226"/><stop offset="1" stop-color="#050913"/></linearGradient>
        <linearGradient id="${id}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}" stop-opacity=".45"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></linearGradient>
        <pattern id="${id}g" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" fill="none" stroke="#fff" stroke-opacity=".05"/></pattern>
        <filter id="${id}f" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4"/></filter>
      </defs>
      <rect width="480" height="300" fill="url(#${id}b)"/>
      <rect width="480" height="300" fill="url(#${id}g)"/>
      <rect x="24" y="48" width="300" height="200" rx="10" fill="#050913" fill-opacity=".55" stroke="#fff" stroke-opacity=".08"/>
      <rect x="36" y="60" width="90" height="8" rx="4" fill="#fff" fill-opacity=".18"/>
      <rect x="36" y="74" width="54" height="6" rx="3" fill="${c}" fill-opacity=".6"/>
      <path d="${area}" fill="url(#${id}a)"/>
      <path class="pv-line" d="${line}" pathLength="1" stroke-dasharray="1" fill="none" stroke="${c}" stroke-width="5" opacity=".5" filter="url(#${id}f)"/>
      <path class="pv-line" d="${line}" pathLength="1" stroke-dasharray="1" fill="none" stroke="${c}" stroke-width="2.4" stroke-linejoin="round"/>
      <rect x="340" y="48" width="118" height="200" rx="10" fill="#050913" fill-opacity=".55" stroke="#fff" stroke-opacity=".08"/>
      ${nodes}${bars}
      <text x="456" y="286" text-anchor="end" font-family="Orbitron, sans-serif" font-weight="800" font-size="40" fill="${c}" fill-opacity=".22">${esc(p.glyph)}</text>
    </svg>`;
  }

  // Project photo: tries the .jpg name, then .png, and falls back to the drawn preview
  function projectImage(p) {
    return `<img class="pv-img" src="${esc(p.image)}" alt="${esc(tx(p.title))}" decoding="async"
      onerror="if(!this.dataset.retry&&/\.jpg$/i.test(this.src)){this.dataset.retry=1;this.src=this.src.replace(/\.jpg$/i,'.png');}else{this.remove();}">`;
  }

  function renderProjects() {
    const N = S.projects.length;
    slidesEl.innerHTML = S.projects.map((p, i) => `
      <article class="slide${i === slideIdx ? " active" : ""}" style="--pc:${p.accent}" role="group" aria-roledescription="slide" aria-label="${i + 1} / ${N}: ${esc(tx(p.title))}" ${i === slideIdx ? "" : "inert"}>
        <div class="slide-visual">${projectVisual(p, i)}${p.image ? projectImage(p) : ""}
          <span class="badge cat">${esc(tx(p.category))}</span>
          <span class="badge status">${icon("shield-check")}${esc(tx(p.status))}</span>
        </div>
        <div class="slide-body">
          <h3>${esc(tx(p.title))}</h3>
          <p class="slide-sub">${esc(tx(p.subtitle))}</p>
          <p class="slide-company">${esc(tx(p.company))}</p>
          <p class="slide-desc">${esc(tx(p.description))}</p>
          <ul class="specs">${p.specs.map(([k, v]) => `<li>${esc(tx(k))}:<b>${esc(tx(v))}</b></li>`).join("")}</ul>
          <ul class="tags" dir="ltr">${p.tags.map((tg) => `<li>${esc(tg.replace(/\s+/g, ""))}</li>`).join("")}</ul>
          <div class="slide-actions">
            <button type="button" class="btn btn-accent btn-sm" data-ask="${i}">${icon("message")}<span>${esc(t("askProject"))}</span></button>
            <span class="private-note">${icon("lock")}${esc(t("privateNote"))}</span>
          </div>
        </div>
      </article>`).join("");
    $("#slideDots").innerHTML = S.projects.map((p, i) =>
      `<button type="button" aria-label="${esc(t("goToSlide"))} ${i + 1}: ${esc(tx(p.title))}" aria-current="${i === slideIdx}" data-go="${i}"></button>`).join("");
    updateSlideMeta();
  }

  function updateSlideMeta() {
    const N = S.projects.length, p = S.projects[slideIdx];
    $("#projCounter").textContent = `${t("project")} ${String(slideIdx + 1).padStart(2, "0")} / ${String(N).padStart(2, "0")}`;
    $("#termCmd").innerHTML = `<b>yamen@server</b>:~$ <em>./projects.sh</em> --id=${esc(p.id)}`;
    $$("#slideDots button").forEach((b, i) => b.setAttribute("aria-current", String(i === slideIdx)));
  }

  function goSlide(i, step) {
    const N = S.projects.length;
    i = (i + N) % N;
    if (i === slideIdx) return;
    const forward = step != null ? step > 0 : i > slideIdx;
    const dir = (forward ? 1 : -1) * (root.dir === "rtl" ? -1 : 1);
    const slides = $$(".slide", slidesEl);
    const out = slides[slideIdx], inn = slides[i];
    out.classList.remove("active"); out.inert = true;
    out.style.transform = `translateX(${-dir * 60}px)`;
    inn.style.transition = "none";
    inn.style.transform = `translateX(${dir * 60}px)`;
    void inn.offsetWidth;
    inn.style.transition = "";
    inn.style.transform = "";
    inn.classList.add("active"); inn.inert = false;
    slideIdx = i;
    updateSlideMeta();
  }

  $("#prevBtn").addEventListener("click", () => goSlide(slideIdx - 1, -1));
  $("#nextBtn").addEventListener("click", () => goSlide(slideIdx + 1, 1));
  $("#slideDots").addEventListener("click", (e) => { const b = e.target.closest("[data-go]"); if (b) goSlide(+b.dataset.go); });
  $("#terminal").addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) return;
    const rtl = root.dir === "rtl";
    if (e.key === "ArrowRight") { e.preventDefault(); goSlide(slideIdx + (rtl ? -1 : 1), rtl ? -1 : 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goSlide(slideIdx + (rtl ? 1 : -1), rtl ? 1 : -1); }
  });
  slidesEl.addEventListener("click", (e) => {
    const b = e.target.closest("[data-ask]");
    if (b) openChat(tx(S.projects[+b.dataset.ask].ask));
  });
  // Swipe on touch screens
  let swipeX = null, swipeY = null;
  slidesEl.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") { swipeX = e.clientX; swipeY = e.clientY; } });
  slidesEl.addEventListener("pointerup", (e) => {
    if (swipeX == null) return;
    const dx = e.clientX - swipeX, dy = e.clientY - swipeY;
    swipeX = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      const towardNext = (dx < 0) !== (root.dir === "rtl");
      goSlide(slideIdx + (towardNext ? 1 : -1), towardNext ? 1 : -1);
    }
  });

  /* ------------------------------------------------------------------
     Experience timeline
  ------------------------------------------------------------------ */
  function renderExperience() {
    $("#timelineItems").innerHTML = S.experience.map((x, i) => `
      <article class="tl-item panel" data-reveal style="--d:${(i % 2) * 0.06}s">
        <div class="tl-head"><h3>${esc(tx(x.title))}</h3><span class="tl-date">${esc(tx(x.date))}</span></div>
        <p class="tl-org">${esc(tx(x.org))}</p>
        <ul class="tl-points">${x.points.map((pt) => `<li>${esc(tx(pt))}</li>`).join("")}</ul>
      </article>`).join("");
    $("#eduGrid").innerHTML = S.education.map((x, i) => `
      <article class="edu-card panel" data-reveal style="--d:${i * 0.08}s">
        <span class="ic">${icon("graduation")}</span>
        <div><h4>${esc(tx(x.title))}</h4><p>${esc(tx(x.org))} · <span dir="ltr">${esc(tx(x.date))}</span></p></div>
      </article>`).join("");
  }
  function updateTimeline() {
    const tl = $("#timeline"), r = tl.getBoundingClientRect();
    const k = reduceMotion ? 1 : clamp((innerHeight * 0.65 - r.top) / r.height);
    $("#timelineFill").style.transform = `scaleY(${k})`;
  }

  /* ------------------------------------------------------------------
     Contact
  ------------------------------------------------------------------ */
  function renderContact() {
    $("#facts").innerHTML = S.facts.map((f, i) =>
      `<div class="fact" data-reveal style="--d:${0.16 + i * 0.05}s"><span class="k">${icon(f.icon)}${esc(tx(f.label))}</span><span class="v">${esc(tx(f.value))}</span></div>`).join("");
    const P = S.profile;
    const ch = [
      { icon: "linkedin", k: "LinkedIn", v: tx(P.name), s: t("chLinkedin"), href: P.linkedin, ext: true },
      { icon: "mail", k: lang === "ar" ? "البريد الإلكتروني" : "Email", v: P.email, s: t("chEmail"), href: "mailto:" + P.email },
      { icon: "message", k: lang === "ar" ? "واتساب" : "WhatsApp", v: P.phone, s: t("chWhatsapp"), href: "https://wa.me/" + P.phoneIntl, ext: true },
      { icon: "phone", k: lang === "ar" ? "الهاتف" : "Phone", v: P.phone, s: t("chPhone"), href: "tel:+" + P.phoneIntl }
    ];
    $("#channelGrid").innerHTML = ch.map((c, i) => `
      <a class="channel" data-reveal style="--d:${i * 0.07}s" href="${esc(c.href)}"${c.ext ? ' target="_blank" rel="noopener"' : ""}>
        <span class="ic">${icon(c.icon)}</span>
        <span class="meta"><span class="k">${esc(c.k)}</span><span class="v">${esc(c.v)}</span><span class="s">${esc(c.s)}</span></span>
        <span class="go">${icon("external")}</span>
      </a>`).join("");
  }

  function toast(msg) {
    const el = $("#toast");
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => el.classList.remove("show"), 2200);
  }
  $("#copyBtn").addEventListener("click", async () => {
    const email = S.profile.email;
    try { await navigator.clipboard.writeText(email); }
    catch (e) {
      const ta = document.createElement("textarea");
      ta.value = email; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); } catch (err) { /* ignore */ }
      ta.remove();
    }
    toast(t("copied"));
  });
  $("#topBtn").addEventListener("click", () => goTo("home"));

  /* ------------------------------------------------------------------
     Assistant (ready-made answers, works offline)
  ------------------------------------------------------------------ */
  const chatPanel = $("#chatPanel"), chatBody = $("#chatBody"), chatInput = $("#chatInput"), launcher = $("#chatLauncher");
  let chatStarted = false, chatBusy = false, speak = store.get("speak") !== "0";   // read-aloud is on unless turned off

  const normalize = (s) => String(s).toLowerCase()
    .replace(/[ً-ْـ]/g, "")
    .replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي")
    .replace(/[^\p{L}\p{N}\s.+#]/gu, " ").replace(/\s+/g, " ").trim();

  function findAnswer(q) {
    const text = " " + normalize(q) + " ";
    let best = null, bestScore = 0;
    S.chat.intents.forEach((it) => {
      let score = 0;
      it.keys.forEach((k) => {
        const nk = normalize(k);
        if (!nk) return;
        const latinShort = /^[a-z0-9 ]+$/.test(nk) && nk.length <= 4;
        const hit = latinShort ? text.includes(" " + nk + " ") : text.includes(nk);
        if (hit) score += nk.length > 4 ? 2 : 1;
      });
      if (score > bestScore) { bestScore = score; best = it; }
    });
    return best || { a: S.chat.fallback };
  }

  function linkButtons(kind) {
    const P = S.profile;
    if (kind === "cv") return `<a href="${esc(P.cv)}" target="_blank" rel="noopener">${icon("file-text")}${esc(t("myCv"))}</a>`;
    if (kind === "contact") return [
      `<a href="mailto:${esc(P.email)}">${icon("mail")}${lang === "ar" ? "البريد" : "Email"}</a>`,
      `<a href="https://wa.me/${esc(P.phoneIntl)}" target="_blank" rel="noopener">${icon("message")}${lang === "ar" ? "واتساب" : "WhatsApp"}</a>`,
      `<a href="${esc(P.linkedin)}" target="_blank" rel="noopener">${icon("linkedin")}LinkedIn</a>`
    ].join("");
    return "";
  }

  function addMsg(who, text, links) {
    const el = document.createElement("div");
    el.className = "msg " + who;
    el.textContent = text;
    if (links) {
      const l = document.createElement("div");
      l.className = "msg-links";
      l.innerHTML = linkButtons(links);
      el.appendChild(l);
    }
    chatBody.appendChild(el);
    chatBody.scrollTop = chatBody.scrollHeight;
    return el;
  }

  function setChatStatus(busy) {
    $("#chatStatus").classList.toggle("busy", busy);
    $("#chatStatusText").textContent = t(busy ? "chatThinking" : "chatOnline");
  }

  function renderSuggestions() {
    $("#chatSuggest").innerHTML = S.chat.suggestions.map((s) => `<button type="button">${esc(tx(s))}</button>`).join("");
  }

  function startChat() {
    chatBody.innerHTML = "";
    addMsg("bot", t("chatWelcome"));
    chatStarted = true;
  }

  /* Read-aloud: uses the best voice installed for the current language.
     Arabic needs an Arabic voice (Microsoft Edge has them built in; in other
     browsers add one in Windows Settings › Time & language › Speech). */
  const canSpeak = "speechSynthesis" in window;
  let voices = [];
  const warnedNoVoice = {};
  function loadVoices() { if (canSpeak) voices = speechSynthesis.getVoices(); }
  if (canSpeak) { loadVoices(); speechSynthesis.addEventListener("voiceschanged", loadVoices); }

  function pickVoice() {
    const want = lang === "ar" ? ["ar-sy", "ar-sa", "ar"] : ["en-us", "en-gb", "en"];
    const tag = (v) => (v.lang || "").toLowerCase().replace("_", "-");
    const score = (v) => {
      let s = 10 - want.findIndex((w) => tag(v).startsWith(w));
      if (/natural|online|neural/i.test(v.name)) s += 20;
      else if (/google/i.test(v.name)) s += 5;
      return s;
    };
    return voices.filter((v) => want.some((w) => tag(v).startsWith(w))).sort((a, b) => score(b) - score(a))[0] || null;
  }

  // Short pieces: Chrome stops long utterances after about 15 seconds
  function speechChunks(text) {
    return text.replace(/•/g, "").replace(/https?:\/\/\S+/g, "")
      .split(/\n+|(?<=[.!?؟])\s+/).map((s) => s.trim()).filter(Boolean);
  }

  function stopSpeaking() {
    if (canSpeak) speechSynthesis.cancel();
    launcher.classList.remove("speaking");
  }

  function sayAloud(text) {
    if (!speak || !canSpeak) return;
    stopSpeaking();
    if (!voices.length) loadVoices();
    const voice = pickVoice();
    if (!voice && voices.length) {
      if (!warnedNoVoice[lang]) { warnedNoVoice[lang] = true; addMsg("bot note", t("noVoice")); }
      return;
    }
    const parts = speechChunks(text);
    // Chrome can drop speech queued straight after cancel(), so wait a moment
    setTimeout(() => {
      parts.forEach((p, i) => {
        const u = new SpeechSynthesisUtterance(p);
        u.lang = voice ? voice.lang : lang === "ar" ? "ar-SA" : "en-US";
        if (voice) u.voice = voice;
        if (i === 0) u.onstart = () => launcher.classList.add("speaking");
        if (i === parts.length - 1) u.onend = u.onerror = () => launcher.classList.remove("speaking");
        speechSynthesis.speak(u);
      });
      speechSynthesis.resume();
    }, 120);
  }

  async function ask(q) {
    q = q.trim();
    if (!q || chatBusy) return;
    chatBusy = true;
    addMsg("user", q);
    setChatStatus(true);
    const typing = document.createElement("div");
    typing.className = "msg bot typing";
    typing.innerHTML = "<i></i><i></i><i></i>";
    chatBody.appendChild(typing);
    chatBody.scrollTop = chatBody.scrollHeight;
    await sleep(reduceMotion ? 150 : 650 + Math.random() * 600);
    typing.remove();
    const it = findAnswer(q);
    const answer = tx(it.a);
    addMsg("bot", answer, it.links);
    setChatStatus(false);
    sayAloud(answer);
    chatBusy = false;
  }

  function openChat(question) {
    if (!chatStarted) startChat();
    chatPanel.hidden = false;
    requestAnimationFrame(() => chatPanel.classList.add("open"));
    launcher.setAttribute("aria-expanded", "true");
    $("#chatBadge").classList.add("hide");
    if (question) ask(question);
    else setTimeout(() => chatInput.focus(), 60);
  }
  function closeChat() {
    chatPanel.classList.remove("open");
    launcher.setAttribute("aria-expanded", "false");
    setTimeout(() => { if (!chatPanel.classList.contains("open")) chatPanel.hidden = true; }, 320);
    stopSpeaking();
    launcher.focus();
  }
  launcher.addEventListener("click", () => (chatPanel.hidden ? openChat() : closeChat()));
  $("#chatClose").addEventListener("click", closeChat);
  $("#chatClear").addEventListener("click", () => { startChat(); chatInput.focus(); });
  $("#chatForm").addEventListener("submit", (e) => { e.preventDefault(); const q = chatInput.value; chatInput.value = ""; ask(q); });
  $("#chatSuggest").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) ask(b.textContent); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !chatPanel.hidden) closeChat(); });

  function updateVoiceBtn() {
    const b = $("#chatVoice");
    b.setAttribute("aria-pressed", String(speak));
    b.innerHTML = icon(speak ? "volume" : "volume-x");
  }
  if (!canSpeak) $("#chatVoice").hidden = true;
  $("#chatVoice").addEventListener("click", () => {
    speak = !speak;
    store.set("speak", speak ? "1" : "0");
    updateVoiceBtn();
    if (speak) sayAloud(t("voiceOn")); else stopSpeaking();
  });

  /* ------------------------------------------------------------------
     Background particles
  ------------------------------------------------------------------ */
  const canvas = $("#bgCanvas"), ctx = canvas.getContext("2d");
  let dots = [], cw = 0, ch = 0, dpr = 1;
  function sizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    cw = innerWidth; ch = innerHeight;
    canvas.width = cw * dpr; canvas.height = ch * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round(Math.min(70, (cw * ch) / 22000));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * cw, y: Math.random() * ch,
      vx: (Math.random() - 0.5) * 0.18, vy: (Math.random() - 0.5) * 0.18, r: Math.random() * 1.4 + 0.4
    }));
  }
  function drawCanvas() {
    ctx.clearRect(0, 0, cw, ch);
    const [r, g, b] = accentRgb;
    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      if (!reduceMotion) {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = cw; if (d.x > cw) d.x = 0;
        if (d.y < 0) d.y = ch; if (d.y > ch) d.y = 0;
      }
      ctx.fillStyle = `rgba(${r},${g},${b},.55)`;
      ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2); ctx.fill();
      for (let j = i + 1; j < dots.length; j++) {
        const e = dots[j], dx = d.x - e.x, dy = d.y - e.y, dist2 = dx * dx + dy * dy;
        if (dist2 < 13000) {
          ctx.strokeStyle = `rgba(${r},${g},${b},${(0.12 * (1 - dist2 / 13000)).toFixed(3)})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(e.x, e.y); ctx.stroke();
        }
      }
    }
  }

  /* ------------------------------------------------------------------
     Language switch
  ------------------------------------------------------------------ */
  function setLang(l, first) {
    lang = l;
    store.set("lang", l);
    root.lang = l;
    root.dir = l === "ar" ? "rtl" : "ltr";
    applyText();
    renderRoleChips();
    renderAbout();
    renderSkills();
    renderGauges();
    renderProjects();
    renderExperience();
    renderContact();
    renderSuggestions();
    setRole(roleIdx, true);
    if (!first) stopSpeaking();
    if (chatStarted && !first) {
      startChat();
      setChatStatus(false);
    }
    observeReveals();
    if (!first) $$("[data-reveal]").forEach((el) => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add("in"); });
    lastSection = "";
    onScroll();
  }
  $("#langBtn").addEventListener("click", () => setLang(lang === "ar" ? "en" : "ar"));

  /* ------------------------------------------------------------------
     Main loop
  ------------------------------------------------------------------ */
  let scrollQueued = false;
  function onScroll() {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => {
      scrollQueued = false;
      updateStage();
      updateNav();
      updateMesh();
      updateTimeline();
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { checkStageMode(); sizeCanvas(); if (reduceMotion) drawCanvas(); onScroll(); }, 120);
  });

  function frame() {
    if (!document.hidden) {
      drawCanvas();
      if (meshVisible) tickParticles();
    }
    requestAnimationFrame(frame);
  }

  // Start
  applyIcons();
  updateVoiceBtn();
  checkStageMode();
  sizeCanvas();
  setLang(lang, true);
  if (reduceMotion) drawCanvas(); else { requestAnimationFrame(frame); startRoles(); }

  // Open a section directly from the address bar (e.g. index.html#projects)
  const startHash = location.hash.slice(1);
  if (startHash && document.getElementById(startHash)) setTimeout(() => window.scrollTo({ top: targetY(startHash) }), 60);
})();
