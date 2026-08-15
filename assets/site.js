(function () {
  "use strict";

  function getStored(key, fallback) {
    try { return localStorage.getItem(key) || fallback; } catch (_) { return fallback; }
  }

  function setStored(key, value) {
    try { localStorage.setItem(key, value); } catch (_) {}
  }

  function applyLanguage(language) {
    var isZh = language !== "en";
    document.body.classList.toggle("lang-zh", isZh);
    document.documentElement.lang = isZh ? "zh-CN" : "en";
    document.querySelectorAll("[data-lang-toggle]").forEach(function (button) {
      button.textContent = isZh ? "EN" : "中文";
      button.setAttribute("aria-label", isZh ? "Switch to English" : "切换到中文");
    });
    document.dispatchEvent(new CustomEvent("chuanxu:language", { detail: isZh ? "zh" : "en" }));
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    var dark = theme === "dark";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (button) {
      button.setAttribute("aria-label", dark ? "切换到亮色模式" : "切换到暗色模式");
      button.setAttribute("title", dark ? "切换到亮色模式" : "切换到暗色模式");
      var sun = button.querySelector(".theme-sun");
      var moon = button.querySelector(".theme-moon");
      if (sun) sun.hidden = !dark;
      if (moon) moon.hidden = dark;
    });
  }

  window.toggleLanguage = function () {
    var next = document.body.classList.contains("lang-zh") ? "en" : "zh";
    setStored("chuanxu-language", next);
    applyLanguage(next);
  };

  window.toggleTheme = function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setStored("chuanxu-theme", next);
    applyTheme(next);
  };

  window.toggleMenu = function () {
    var nav = document.querySelector(".primary-nav");
    var button = document.querySelector("[data-menu-toggle]");
    if (!nav || !button) return;
    var open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  };

  applyLanguage(getStored("chuanxu-language", "zh"));
  applyTheme(getStored("chuanxu-theme", "light"));

  if (document.body.dataset.page === "home" && window.location.hash) {
    var legacyRoutes = {
      "#deploy": "docs.html",
      "#stats": "product.html",
      "#pain-points": "architecture.html#files",
      "#why-not-fs": "architecture.html#files",
      "#capabilities": "architecture.html#layers",
      "#vs": "architecture.html#layers",
      "#architecture": "architecture.html",
      "#features": "product.html",
      "#slogan": "#outcomes",
      "#loop-engineering": "architecture.html#engineering",
      "#search": "architecture.html#retrieval",
      "#security": "security.html",
      "#agent-security": "security.html#identity",
      "#token-efficiency": "architecture.html#retrieval",
      "#editions": "editions.html#compare",
      "#multi-db": "editions.html#databases",
      "#timeline": "releases.html"
    };
    var legacyTarget = legacyRoutes[window.location.hash];
    if (legacyTarget && legacyTarget !== window.location.hash) window.location.replace(legacyTarget);
  }

  document.querySelectorAll(".primary-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      var nav = document.querySelector(".primary-nav");
      var button = document.querySelector("[data-menu-toggle]");
      if (nav) nav.classList.remove("open");
      if (button) button.setAttribute("aria-expanded", "false");
    });
  });

  function setupSideNav() {
    var nav = document.querySelector(".side-nav");
    if (!nav) return;
    var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
    var items = links.map(function (link) {
      return { link: link, target: document.getElementById(link.getAttribute("href").slice(1)) };
    }).filter(function (item) { return item.target; });
    if (!items.length) return;

    var scheduled = false;
    function update() {
      scheduled = false;
      var marker = Math.min(window.innerHeight * 0.34, 300);
      var active = items[0];
      items.forEach(function (item) {
        if (item.target.getBoundingClientRect().top <= marker) active = item;
      });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = items[items.length - 1];
      items.forEach(function (item) {
        var selected = item === active;
        item.link.classList.toggle("active", selected);
        if (selected) item.link.setAttribute("aria-current", "location");
        else item.link.removeAttribute("aria-current");
      });
    }
    function schedule() {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(update);
    }
    links.forEach(function (link) { link.addEventListener("click", schedule); });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
  }

  function setupPromptPicker() {
    var picker = document.querySelector("[data-prompt-picker]");
    if (!picker) return;
    var databaseButtons = Array.prototype.slice.call(picker.querySelectorAll("[data-prompt-database]"));
    var modeButtons = Array.prototype.slice.call(picker.querySelectorAll("[data-prompt-mode]"));
    var output = picker.querySelector("[data-prompt-output]");
    var title = picker.querySelector("[data-prompt-title]");
    var status = picker.querySelector("[data-prompt-status]");
    var copy = picker.querySelector("[data-prompt-copy]");
    var promptDataElement = document.querySelector("[data-prompt-data]");
    var database = "oracle";
    var mode = "";
    var promptData = {};
    var names = { oracle: "Oracle 26ai", pg: "PostgreSQL 18.3", yashandb: "YashanDB 23.5.4+" };
    var modeNames = {
      standalone: { zh: "独立部署", en: "Standalone" },
      "admin-agent": { zh: "管理 Agent", en: "Admin Agent" },
      "business-agent": { zh: "业务 Agent", en: "Business Agent" }
    };

    function zh() { return document.body.classList.contains("lang-zh"); }
    function setStatus(zhText, enText) { status.textContent = zh() ? zhText : enText; }
    function select(buttons, selected) {
      buttons.forEach(function (button) {
        var active = button === selected;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    }
    function refreshLanguage() {
      if (!mode) return;
      title.textContent = names[database] + " · " + modeNames[mode][zh() ? "zh" : "en"];
      setStatus("当前仅显示这一项部署文本", "Only this deployment text is shown");
    }
    try {
      promptData = JSON.parse(promptDataElement ? promptDataElement.textContent : "{}");
    } catch (_) {
      promptData = {};
    }
    function loadPrompt() {
      if (!mode) return;
      title.textContent = names[database] + " · " + modeNames[mode][zh() ? "zh" : "en"];
      output.hidden = true;
      copy.hidden = true;
      try {
        var prompt = promptData[database][mode];
        if (typeof prompt !== "string" || !prompt.trim()) throw new Error("missing prompt");
        output.value = prompt.trim();
        output.hidden = false;
        copy.hidden = false;
        setStatus("当前仅显示这一项部署文本", "Only this deployment text is shown");
      } catch (_) {
        setStatus("当前组合没有可用的部署文本", "No deployment text is available for this selection");
      }
    }

    databaseButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        database = button.dataset.promptDatabase;
        select(databaseButtons, button);
        loadPrompt();
      });
    });
    modeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        mode = button.dataset.promptMode;
        select(modeButtons, button);
        loadPrompt();
      });
    });
    copy.addEventListener("click", async function () {
      try {
        await navigator.clipboard.writeText(output.value);
      } catch (_) {
        output.focus();
        output.select();
        document.execCommand("copy");
      }
      setStatus("已复制部署文本", "Deployment text copied");
      window.setTimeout(refreshLanguage, 1600);
    });
    document.addEventListener("chuanxu:language", refreshLanguage);
  }

  setupSideNav();
  setupPromptPicker();

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (element) { observer.observe(element); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (element) { element.classList.add("visible"); });
  }
})();
