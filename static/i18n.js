/* 彭岗杰主页中英切换：中文为 HTML 真源，英文写入本词典。
   V2.0（2026-09-25）：新增 v2.* 词条；旧词条全量保留，v1.html 留档页仍可切换。 */
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
    "hero.lede": "I teach survey, BIM, and retrofit at a college. A lab OS, vernacular habitat twins, daily tools, and an album are already live.",
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
    "card.habitat.p": "Guangxi vernacular houses become measurable archives—provincial grant 2025KY1625 running, serving conservation and teaching.",
    "card.chenfu.p": "Proof the method can leave the classroom: a four-track album hub—lyric sync, guest board, album loop.",
    "card.chenfu.go": "Open site →",
    "card.field.h3": "LinTwin OS",
    "card.field.p": "Same habitat-twin stack on site: align semantics with space, ship a demoable workflow.",
    "card.lixing.p": "Habit first, then sign-in sync—density log, bias ring, Wheel of Life, across 11 modules.",
    "card.lixing.go": "Open site →",
    "card.gewuji.p": "Wear what you own instead of buying another—closet OS and outfit advice, soft cap of 100 pieces, local-first.",
    "card.gewuji.go": "Open repo →",
    "studio.h2": "How to change spaces people already live in and use.",
    "studio.lede": "Home and factory retrofit, storefront and concept-hall design, plus built public-space work for offices and exhibition halls. Boards, drawings, renderings, and an on-site video.",
    "proj.shuxiang.h3": "Home retrofit",
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
    "path3.p": "Competition studio: GX Skills Contest env-art 2nd, Yongchuang Cup national 1st, Milan Design Week national 2nd.",
    "path3.idx": "Eco-engineering college",
    "path4.h3": "Env. design · M.A. Art Design",
    "path4.p": "2015 TU Berlin exchange studio Berlin 2030. 2025 IEEE ICEACE: multi-scale fusion and deep learning for traditional architecture preservation.",
    "path4.idx": "CUG Wuhan",
    "teach.h2": "Teach software in class; turn rooms into runnable archives after.",
    "teach.p1": "Trimble SketchUp Official Trainer (Standard, T-010-000179, Beijing ATC, Aug 2024). Teach SketchUp and BIM; co-edited a national vocational textbook on architectural drawing.",
    "teach.p2": "Teaches architectural decoration engineering technology; outstanding academic mentor and class advisor. Five second prizes and four third prizes at the national Digital-Creative Teaching Skills Competition; students took two silver medals at the regional vocational skills competition and 40+ design industry awards. Runs lab construction and safety, skills-competition organization, and industry-education integration; leads a Guangxi young-faculty research grant project.",
    "teach.cap": "Guest teaching · Zhejiang University",
    "certs.h2": "Credentials & Memberships",
    "certs.lede": "Six core certificates open for online check; industry roles and issuers listed below.",
    "cert.bsi.p": "buildingSMART International · 2026.09.14<br />Certificate ID: BgB5XZlAbY · ISO 19650 / openBIM foundation",
    "cert.bsi2": "buildingSMART International Foundation",
    "cert.bsi2.s": "buildingSMART International · Certificate ID BgB5XZlAbY · 2026.09.14",
    "cert.icomos.p": "ICOMOS China · member<br />valid until 2027/01",
    "cert.icomos2": "ICOMOS China member (monuments & sites)",
    "cert.icomos2.s": "ICOMOS China · valid until 2027/01",
    "cert.psy.img.p": "Institute of Psychology, CAS · 2023.01<br />Cert No. 221101450253 (ID number masked)",
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
    "cert.bs": "BuildingSMART China member",
    "cert.bs.s": "BuildingSMART China",
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
    "lang.btn": "中文",

    /* ———— V2.0（2026-09-25）———— */
    "v2.sn.works": "Live systems and two films",
    "v2.sn.studio": "Ten years on drawings, before systems",
    "v2.sn.story": "From bid decks to school systems",
    "v2.sn.teach": "In class and after class",
    "v2.sn.certs": "Only what can be verified",
    "v2.sn.resume": "Bilingual · PDF",
    "v2.sn.mail": "Email me",
    "v2.hero.kicker": "Peng Gangjie · Habitat methods",
    "v2.hero.h1": "Turn inhabited space into <em class=\"tint\">shippable</em> methods.",
    "v2.hero.lede": "I teach surveying, BIM, and retrofit at a college in Liuzhou. After class, I turn what I teach into systems that actually run: a lab platform for the school, habitat archives in the field, and tools I use every day.",
    "v2.hero.loc": "College lecturer · SketchUp Official Trainer · Liuzhou, Guangxi",
    "v2.m1.idx": "Method",
    "v2.m2.idx": "Delivery",
    "v2.m3.idx": "Horizon",
    "v2.works.h2": "Start with what's running.",
    "v2.works.lede": "Every piece opens. Collected in three lines: at school, in the field, and in my own hands.",
    "v2.ch.school": "At school",
    "v2.ch.field": "In the field",
    "v2.ch.own": "In my own hands",
    "v2.chip.run": "In campus use",
    "v2.chip.grant": "Grant running",
    "v2.chip.live": "Live",
    "v2.chip.open": "Open source",
    "scan.p2": "Drag to orbit, scroll to zoom. <a href=\"https://skfb.ly/pGoCp\" target=\"_blank\" rel=\"noreferrer\">Open on Sketchfab →</a>",
    "v2.scan.tap": "Oblique photogrammetry · 960.45 m² · Tap to load the 3D model",
    "v2.films.t": "Two films",
    "v2.films.lede": "They load only when you tap. Stop anytime.",
    "v2.studio.h2": "Before systems, I spent ten years on space.",
    "v2.studio.lede": "From landscape bids to home, factory, and storefront retrofit. The drawn part lives here; the running part is above.",
    "flat.dur": "Built record",
    "v2.teach.p1": "Trimble SketchUp Official Trainer (Standard, T-010-000179, Beijing ATC, Aug 2024). Teach SketchUp and BIM; co-edited a national vocational textbook on architectural drawing. Teach architectural decoration engineering; run lab construction and safety, skills competitions, and industry-education integration.",
    "v2.teach.p2": "Outstanding academic mentor and class advisor. Five 2nd and four 3rd prizes at the national Digital-Creative Teaching Skills Competition; students took two regional silver medals and 40+ design industry awards.",
    "v2.stat.1": "teaching hours / year",
    "v2.stat.2": "National 2nd ×5 · 3rd ×4",
    "v2.stat.3": "student awards",
    "v2.stat.4": "Provincial grant, as PI",
    "v2.certs.h2": "Only what can be verified.",
    "v2.certs.lede": "Three core certificates open for online check; the remaining roles and IDs are folded in below.",
    "v2.cert.more": "All roles & certificates",
    "v2.contact.h2": "Next step: let's talk.",
    "v2.contact.lede": "Courses, research, retrofit projects, or building something together—it can all start with one email.",
    "v2.foot.v1": "V1.0 archive",

    /* ———— V2.1（2026-09-25 · 八点观察室 / 见面礼 / 更新日志）———— */
    "nav.show": "The show",
    "v2.sn.show": "Every night at eight, Pengba's take",
    "v2.show.h2": "Work goes to the machines. Life stays in your hands.",
    "v2.show.lede": "After class, I run a show: eight o'clock every night, eight minutes a talk. AI Observe looks outward at how machines deliver the work; Life Observe looks inward at how we answer life's paper.",
    "v2.show.bili.h4": "Bilibili · 彭八PUMBAA",
    "v2.show.ep": "AI isn't useless—you're using it wrong | Four contrasts you can apply tonight",
    "v2.show.bili.p": "\u201cHelp me write a notice\u201d—the ask and the brief are two different results. Four contrasts: the problem is rarely the tool, it's the usage.",
    "v2.show.bili.go": "Watch this episode →",
    "v2.show.space": "Bilibili home @彭八PUMBAA",
    "v2.chip.latest": "Latest episode",
    "v2.show.gzh.h4": "WeChat · 彭八八点ROOM",
    "v2.show.gzh.p": "Text versions and quote cards of every episode, curated weekly. Scan to follow.",
    "v2.show.tagline": "See AI clearly. Live life well.",
    "v2.chip.updating": "Updating",
    "v2.gift.tag": "One more thing · A gift",
    "v2.gift.h3": "Superlinear community · 30-day pass",
    "v2.gift.p": "Where I learned to turn AI into a production line. I've set aside a 30-day pass for you: no card required, ends automatically.",
    "v2.gift.go": "Claim the pass →",
    "v2.foot.changelog": "Changelog",
    "v2.cl.h1": "Changelog",
    "v2.cl.lede": "Every revision of this homepage is logged here. Older versions stay archived.",
    "v2.cl.back": "← Back to homepage",
    "v2.cl.21a": "New \"8PM Observe\" section: Bilibili @彭八PUMBAA video entry + WeChat \"彭八八点ROOM\" follow card with QR code.",
    "v2.cl.21b": "Welcome gift in Contact: a 30-day Superlinear community pass (stay.superlinear.academy/invite/pumbaa).",
    "v2.cl.21c": "Lixing logo integrated: work-card badge + official-account card mark, unified with the all-platform brand.",
    "v2.cl.21d": "This changelog page launched; V1.0 archived at <a href=\"v1.html\">v1.html</a>; favicon added.",
    "v2.cl.21e": "Brand font: headlines and mottos now use KaiOldstyle (WOFF2 subset, display-position glyphs only, 342KB).",

    /* ———— V2.2（2026-09-25 · Supastack 模式补全）———— */
    "v2.strip.label": "Already running",
    "v2.gift.b1": "No card required—ends automatically",
    "v2.gift.b2": "Self-serve: verify your email and it's active",
    "v2.gift.b3": "7 member spaces + 3 member courses",
    "v2.faq.t": "Three common questions",
    "v2.faq.q1": "Do you do SketchUp / BIM training or talks?",
    "v2.faq.a1": "Yes. Trimble-certified trainer (T-010-000179). Campus training and public talks—Zhejiang University, the OPC online session. Email the scenario and headcount.",
    "v2.faq.q2": "Do you still take retrofit design work?",
    "v2.faq.a2": "Yes—existing homes, storefronts, and small public spaces. Same method: survey, design, build, and ship a runnable archive, not just renders.",
    "v2.faq.q3": "How does a product or research collaboration start?",
    "v2.faq.a3": "Lixing and Gewuji were built in the open. Direction: habitat digitization and daily tools. Email who you are and what you want to build.",
    "v2.cl.22a": "Hero gained an \"already running\" strip—four live systems shown up front as proof.",
    "v2.cl.22b": "Welcome gift became a ✓ checklist; Contact gained a three-question FAQ (training / retrofit / collaboration).",
    "v2.cl.22c": "Work cards rewritten conclusion-first; the Show section moved onto white ground, separated from Teaching.",
    "v2.cl.23a": "Brand icon set launched: nine \"ink-line diamond\" icons generated via the oil-icon pipeline; method rows and work chapters re-dressed, a TV mark added to the Show section. Small functional icons stay lucide.",

    /* ———— V2.4（2026-09-25 · 内容修订）———— */
    "v2.cl.24a": "Teaching: annual teaching-hours figure removed (stat row now three items).",
    "v2.cl.24b": "Show section re-dressed: features the latest episode (AI isn't useless—you're using it wrong) with cover, duration and a direct link; side card no longer stretches; topic screenshot slot reserved pending the WeChat topic link.",
    "v2.cl.24c": "WeChat QR updated to the current official artwork; the gift card re-framed with the brand gift icon and the account card boxed as an aligned mini-card.",

    /* ———— V2.5（2026-09-25 · App 图标 / 时效信号）———— */
    "v2.cl.25a": "Lixing mark switched to the orange App icon (same as the iOS TestFlight build); footer changelog link now carries the update date.",

    /* ———— V2.6（2026-09-25 · 话题卡 / 修订）———— */
    "v2.show.gzh.read": "Read the article →",
    "v2.cl.26a": "Official-account card now features the article \"把 AI 用成产线\" with a screenshot and direct link.",
    "v2.cl.26b": "Removed the research-grant stat from Teaching (two stats remain).",
    "v2.cl.26c": "Studio headline: seven years changed to ten (counting from the 2016 internship); brand-font subset updated to match.",
    "v2.cl.20a": "Narrative rebuild: declarative headlines, works in three lines (at school / in the field / in my own hands), timeline path, stat-row teaching, collapsible credentials.",
    "v2.cl.20b": "Navigation simplified: desktop 3 anchors + primary resume button; mobile brand + resume + full-screen menu.",
    "v2.cl.20c": "Performance: click-to-load videos and Sketchfab 3D; Google Fonts dropped for system stack; lazy images; one-shot entrance animations only.",
    "v2.cl.20d": "Icons switched to lucide (inline SVG sprite, zero JS).",
    "v2.cl.12a": "Added buildingSMART International Foundation certificate card (Certificate ID BgB5XZlAbY).",
    "v2.cl.11a": "Videos moved out of the Docker image to GitHub Releases links (image ~110MB → ~10MB), sharply cutting cold-start wait.",
    "v2.cl.10a": "Standalone launch on penggangjie.ai-builders.space; bilingual toggle; English resume page (YC v2).",
    "v2.cl.10b": "→ View the archived V1.0",
    "v2.cl.00v": "Project start",
    "v2.cl.00a": "First local build: dark + burnt-orange layout with works / path / teaching information architecture."
  };

  var ZH_TITLE = document.title;
  var EN_TITLE_FALLBACK = EN["doc.title"];

  function storeZh() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (!el.dataset.zh) el.dataset.zh = el.innerHTML;
    });
  }

  function apply(lang) {
    storeZh();
    var en = lang === "en";
    document.documentElement.lang = en ? "en" : "zh-CN";
    document.title = en
      ? (document.documentElement.getAttribute("data-title-en") || EN_TITLE_FALLBACK)
      : ZH_TITLE;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (en) {
        if (EN[key] != null) el.innerHTML = EN[key];
      } else if (el.dataset.zh != null) {
        el.innerHTML = el.dataset.zh;
      }
    });
    document.querySelectorAll("[data-lang-btn], #lang-toggle").forEach(function (btn) {
      btn.textContent = en ? "中文" : "EN";
    });
    try {
      localStorage.setItem("peng-lang", en ? "en" : "zh");
    } catch (e) {}
  }

  function boot() {
    storeZh();
    document.querySelectorAll("[data-lang-btn], #lang-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = document.documentElement.lang === "en" ? "zh" : "en";
        apply(next);
      });
    });
    var saved = "zh";
    try {
      saved = localStorage.getItem("peng-lang") || "zh";
    } catch (e) {}
    if (saved === "en") apply("en");
    else {
      document.querySelectorAll("[data-lang-btn], #lang-toggle").forEach(function (btn) {
        btn.textContent = "EN";
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
