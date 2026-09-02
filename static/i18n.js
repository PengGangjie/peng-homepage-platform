/* 彭岗杰主页中英切换：中文为 HTML 真源，英文写入本词典。 */
(function () {
  var EN = {
    "doc.title": "Gangjie Peng · Methods you can ship for inhabited space",
    "nav.belief": "Method",
    "nav.works": "Works",
    "nav.studio": "Studio",
    "nav.story": "Path",
    "nav.teach": "Teaching",
    "nav.certs": "Credentials",
    "nav.contact": "Contact",
    "nav.resume": "Resume",
    "brand.sub": "Gangjie Peng · Habitat methods",
    "hero.kicker": "Peng Gangjie · 岗杰",
    "hero.h1": "Turn inhabited space into <span class=\"tint\">shippable</span> methods.",
    "hero.lede": "I teach survey, BIM, and retrofit in a vocational college. A lab OS, vernacular habitat twins, daily tools, and an album are already live.",
    "cta.resume": "Resume",
    "cta.works": "Works",
    "cta.path": "The path",
    "hero.creds": "College lecturer · Indie builder · OPC · Trimble SketchUp Official Trainer · CUG (Wuhan) B.A. & M.A.",
    "hero.cap": "Gangjie Peng · Liuzhou",
    "see.more": "See more",
    "belief.h2": "After drawings are filed, is the space measurable, changeable, and runnable?",
    "belief.p1": "A render can sell an afternoon. Space has to be surveyed, retrofitted, and scheduled before a judgment counts.",
    "belief.p2": "I keep asking: after ship, who still uses it? Do admins still dig folders? Can students open the model? Can the house be measured once?",
    "m1.h3": "Methods that stay in hand",
    "m1.p": "Strip titles, schools, and seasonal tools—survey, modeling, and turning judgment into running systems remain.",
    "m2.h3": "Delivery the world can answer",
    "m2.p": "Someone opens it, rejects it, or asks for a revision—that matters more than tidy paperwork. The lab platform and album site already live by this bar.",
    "m3.h3": "Still usable after class",
    "m3.p": "After v1 ships, the thing keeps working: permissions hold, the grant runs, four tracks still play.",
    "quote.note1": "Habitat digitization is one line: spatial expression, to point clouds and BIM, to collaborative renewal workflows. Linluan Zhifu is field practice on the same stack—not a career switch into forestry.",
    "quote.note2": "Campus systems prove judgment can carry real school load. Indie products prove the method stands outside lesson plans.",
    "portrait.cap": "Portrait · 2026",
    "works.h2": "Already live. Already in use.",
    "works.lede": "Two lead films play here. The drone scan below can be rotated. Shixun, Chenfu, Lixing, and Gewuji open further down.",
    "reel1.h3": "Guangxi March 3 Folk Games Brand Film",
    "reel1.p": "Lead film · 1:19",
    "reel2.h3": "Digital Full-Pipeline Design for Building Renewal",
    "reel2.p": "Drone / AI / BIM / VR · 0:40",
    "scan.h3": "Drone scan of the retrofit site",
    "scan.p": "Oblique photogrammetry of an old factory retrofit, 960.45 m². Drag to orbit, scroll to zoom. <a href=\"https://skfb.ly/pGoCp\" target=\"_blank\" rel=\"noreferrer\">Open on Sketchfab →</a>",
    "card.shixun.p": "Nested Excel replaced by a permissioned lab OS. Entry is a hub of eight module pages. Campus delivery—filed under academic-affairs work.",
    "card.shixun.go": "Open site →",
    "card.habitat.h3": "Vernacular house digital preservation",
    "card.habitat.p": "Provincial grant 2025KY1625. BIM and point clouds turn Guangxi vernacular houses into measurable archives for conservation and teaching.",
    "card.chenfu.p": "Four-track album hub: lyric sync, guest board, album loop. Proof the method can leave the classroom.",
    "card.chenfu.go": "Open site →",
    "card.field.h3": "Linluan Zhifu · field practice",
    "card.field.p": "Same habitat-twin stack on site: align semantics with space, ship a demoable workflow.",
    "card.lixing.p": "11-module PWA. Density log, bias ring, Wheel of Life. Habit first, then sign-in sync.",
    "card.lixing.go": "Open site →",
    "card.gewuji.p": "Closet OS and outfit advice. Soft cap of 100 pieces, local-first. Wear what you own instead of buying another.",
    "card.gewuji.go": "Open repo →",
    "studio.h2": "How to change spaces people already live in and use.",
    "studio.lede": "Home and factory retrofit, storefront and concept-hall design, plus built public-space work for offices and exhibition halls. Boards, drawings, renderings, and an on-site video.",
    "proj.shuxiang.h3": "Shuxiangyuan home retrofit",
    "proj.shuxiang.p": "New Chinese interior renewal: living room, entry kitchen, study, primary bedroom. A shippable plan for an existing home—not collage concepts.",
    "quad.yunhai.h3": "Yunhai tea shop",
    "quad.yunhai.p": "Night storefront. Cloud motif, entry, and signage—brand landed on a buildable facade.",
    "quad.retro.h3": "Retrofit renewal",
    "quad.retro.p": "Existing building plus courtyard, stair, and yellow-frame openings. Spatial moves for stock renewal—not a staged new build.",
    "quad.museum.h3": "Liuzhou Industrial Museum · factory retrofit",
    "quad.museum.p": "Industrial-heritage board: site, demolition logic, masterplan, and scenes.",
    "quad.canglian.h3": "Cang Lian Mirage — Nansha Islands Ocean Pavilion concept",
    "quad.canglian.p": "Fiery Cross Reef. Form from water, boat, and reef; program, elevations, and interiors on one board.",
    "flat.h3": "Public space · Office & exhibition hall",
    "flat.lede": "Public-space design for offices and exhibition halls—a video record from scheme to built delivery.",
    "flat.video.h3": "Built-work video · Office & exhibition hall",
    "flat.video.p": "On-site record of the completed public-space project.",
    "flat.photo.h3": "Team portrait · Qingnan horticulture",
    "flat.photo.p": "Left: Changjiang New Town team poster. Right: Qingnan horticulture commercial shoot.",
    "flat.xs.h3": "Xiangsheng",
    "flat.xs.p": "Abstract diptych. Xiang / Sheng—warm against cool.",
    "story.h2": "From selling a scheme to running systems inside a school.",
    "story.lede": "Landscape bids taught me to fold concepts into text. The new town taught me how materials clear meetings. The college wires both into real rooms, real timetables, real deadlines.",
    "path1.h3": "Landscape designer",
    "path1.p": "Concept masterplans and bid decks. Interned 2016, hired 2017.",
    "path1.idx": "UDG",
    "path2.h3": "Development bureau (seconded)",
    "path2.p": "Plan decks, investment materials, bid liaison—the layer between consultants and sign-off.",
    "path2.idx": "Changjiang New Town",
    "path3.h3": "Architectural decoration / lab ops",
    "path3.p": "800–1,100 contact hours/year. Competition studio: GX Skills Contest env-art 2nd, Yongchuang Cup national 1st, Milan Design Week national 2nd.",
    "path3.idx": "Eco-engineering college",
    "path4.h3": "Env. design · M.A. Art Design",
    "path4.p": "2015 TU Berlin exchange studio Berlin 2030. 2025 IEEE ICEACE: multi-scale fusion and deep learning for traditional architecture preservation.",
    "path4.idx": "CUG Wuhan",
    "teach.h2": "Teach software in class; turn rooms into runnable archives after.",
    "teach.p1": "Trimble SketchUp Official Trainer (Standard, T-010-000179, Beijing ATC, Aug 2024). Teach SketchUp and BIM; co-edited a national vocational textbook on architectural drawing.",
    "teach.p2": "Habitat-twin studio makes existing houses measurable. Competition studio covers interior, exhibition, and digital design. One stack: draw, measure, deliver.",
    "teach.cap": "Guest teaching · Zhejiang University",
    "certs.h2": "Credentials & Memberships",
    "certs.lede": "Three core certificates open for online check; industry roles and issuers listed below.",
    "cert.aib1.p": "Superlinear Academy · 2026.09.01<br />Graduate note: ship trustworthy products in hard work",
    "cert.aib2.p": "Superlinear Academy · 2026.09.01<br />Graduate note: keep systems working and self-improving",
    "cert.skp.h3": "SketchUp Official Trainer (international)",
    "cert.skp.p": "Trimble Official Trainer · Standard · T-010-000179 · Beijing ATC · 2024.08",
    "cert.teacher": "Higher-ed teaching certificate",
    "cert.teacher.s": "Art design · Guangxi Education Department",
    "cert.interior": "Senior interior designer",
    "cert.interior.s": "MIIT Education & Exam Center · 2021.10",
    "cert.psy": "CAS psychological counselor",
    "cert.psy.s": "Institute of Psychology, CAS · basic training · 2023.01",
    "cert.skp2": "SketchUp Official Trainer (international)",
    "cert.skp2.s": "Trimble Official Trainer · T-010-000179 · course completion T-010-00086",
    "cert.bim": "ASC BIM Chapter member",
    "cert.bim.s": "Architectural Society of China",
    "cert.digital": "Digital Creative Committee member",
    "cert.digital.s": "National Association of Computer Basic Education in Colleges",
    "cert.bs": "buildingSMART China member",
    "cert.bs.s": "buildingSMART China",
    "cert.judge": "Merchandise display technology judge",
    "cert.judge.s": "Guangxi Zhuang Autonomous Region Skills Competition",
    "cert.icomos": "ICOMOS China member",
    "cert.icomos.s": "ICOMOS China",
    "cert.note": "Public check: SketchUp trainer ID T-010-000179. Other credentials list name and issuer only—no scans.",
    "foot.pages": "Pages",
    "foot.check": "Verify",
    "foot.contact": "Contact",
    "foot.mp": "Lixing WeChat",
    "foot.copy": "© 2026 Gangjie Peng",
    "lang.btn": "中文"
  };

  var ZH_TITLE = "彭岗杰 · 把已经住过的空间做成可交付的方法";

  function storeZh() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (!el.dataset.zh) el.dataset.zh = el.innerHTML;
    });
  }

  function apply(lang) {
    storeZh();
    var en = lang === "en";
    document.documentElement.lang = en ? "en" : "zh-CN";
    document.title = en ? EN["doc.title"] : ZH_TITLE;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (en) {
        if (EN[key] != null) el.innerHTML = EN[key];
      } else if (el.dataset.zh != null) {
        el.innerHTML = el.dataset.zh;
      }
    });
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = en ? "中文" : "EN";
    try {
      localStorage.setItem("peng-lang", en ? "en" : "zh");
    } catch (e) {}
  }

  function boot() {
    storeZh();
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = document.documentElement.lang === "en" ? "zh" : "en";
        apply(next);
      });
    }
    var saved = "zh";
    try {
      saved = localStorage.getItem("peng-lang") || "zh";
    } catch (e) {}
    if (saved === "en") apply("en");
    else {
      var btn2 = document.getElementById("lang-toggle");
      if (btn2) btn2.textContent = "EN";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
