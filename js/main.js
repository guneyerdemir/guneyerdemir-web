/**
 * GÜNEY ERDEMİR — ANA UYGULAMA MANTIĞI (main.js)
 * - Dinamik veri tabanlı proje portföyü render sistemi
 * - Çift dilli (TR | EN) anlık dil değiştirme motoru
 * - Erişilebilir proje detay modalı (klavye / ESC / focus yönetimi)
 * - XSS, Honeypot ve Rate-Limit korumalı güvenli iletişim formu
 * - prefers-reduced-motion uyumlu hafif scroll-reveal
 */

(function () {
  "use strict";

  let currentLang = localStorage.getItem("ge_site_lang") || "tr";
  if (currentLang !== "tr" && currentLang !== "en") {
    currentLang = "tr";
  }
  let currentFilter = "all";
  let lastFocusedElement = null;
  let lastFormSubmitTime = 0;

  /**
   * XSS Korumalı HTML Kaçış Fonksiyonu
   */
  function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /**
   * Çeviri Metni Getirici
   */
  function t(key) {
    const dict = (window.I18N_DATA && window.I18N_DATA[currentLang]) || {};
    return dict[key] || key;
  }

  /**
   * Dinamik Proje Kartlarını Render Etme
   */
  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid || !Array.isArray(window.PROJECTS_DATA)) return;

    const filtered = window.PROJECTS_DATA.filter(function (item) {
      if (currentFilter === "all") return true;
      return item.categoryKey === currentFilter;
    });

    const html = filtered
      .map(function (proj) {
        const content = proj[currentLang] || proj.tr;
        const techPills = (proj.technologies || [])
          .slice(0, 6)
          .map(function (tech) {
            return '<span class="tech-pill">' + escapeHtml(tech) + "</span>";
          })
          .join("");

        const extraTechCount =
          proj.technologies && proj.technologies.length > 6
            ? '<span class="tech-pill">+' +
              (proj.technologies.length - 6) +
              "</span>"
            : "";

        let actionButtons =
          '<button type="button" class="btn btn-sm btn-dark js-open-project-modal" data-project-id="' +
          escapeHtml(proj.id) +
          '">' +
          escapeHtml(t("project.btnDetails")) +
          "</button>";

        if (proj.caseStudyUrl) {
          actionButtons +=
            '<a href="' +
            escapeHtml(proj.caseStudyUrl) +
            '" class="btn btn-sm btn-primary">' +
            escapeHtml(t("project.btnCaseStudy")) +
            "</a>";
        }

        if (proj.url) {
          actionButtons +=
            '<a href="' +
            escapeHtml(proj.url) +
            '" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">' +
            escapeHtml(t("project.btnLive")) +
            "</a>";
        }

        return (
          '<article class="project-card" data-category="' +
          escapeHtml(proj.categoryKey) +
          '">' +
          '<div class="project-thumb-wrap">' +
          '<img src="' +
          escapeHtml(proj.image) +
          '" alt="' +
          escapeHtml(content.title) +
          '" class="project-thumb" loading="lazy" width="800" height="480" />' +
          '<span class="project-status-badge">' +
          escapeHtml(content.status) +
          "</span>" +
          "</div>" +
          '<div class="project-body">' +
          '<div class="project-category">' +
          escapeHtml(content.category) +
          "</div>" +
          '<h3 class="project-title">' +
          escapeHtml(content.title) +
          "</h3>" +
          '<p class="project-desc">' +
          escapeHtml(content.description) +
          "</p>" +
          '<div class="project-ps-summary">' +
          '<div class="project-ps-row"><strong>' +
          escapeHtml(t("project.labelProblem")) +
          "</strong> " +
          escapeHtml(content.problem) +
          "</div>" +
          '<div class="project-ps-row"><strong>' +
          escapeHtml(t("project.labelSolution")) +
          "</strong> " +
          escapeHtml(content.solution) +
          "</div>" +
          "</div>" +
          '<div class="project-tech-list" aria-label="Technologies">' +
          techPills +
          extraTechCount +
          "</div>" +
          '<div class="project-actions">' +
          actionButtons +
          "</div>" +
          "</div>" +
          "</article>"
        );
      })
      .join("");

    grid.innerHTML = html;

    // Modal açma butonlarına dinleyici bağla
    const detailBtns = grid.querySelectorAll(".js-open-project-modal");
    detailBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const projId = btn.getAttribute("data-project-id");
        openProjectModal(projId, btn);
      });
    });
  }

  /**
   * Proje Detay Modalını Açma
   */
  function openProjectModal(projectId, triggerEl) {
    const modalBackdrop = document.getElementById("project-modal-backdrop");
    const modalContent = document.getElementById("project-modal-content");
    if (!modalBackdrop || !modalContent || !Array.isArray(window.PROJECTS_DATA))
      return;

    const proj = window.PROJECTS_DATA.find(function (p) {
      return p.id === projectId;
    });
    if (!proj) return;

    lastFocusedElement = triggerEl || document.activeElement;
    const content = proj[currentLang] || proj.tr;

    const highlightsList = (content.verifiedHighlights || [])
      .map(function (h) {
        return (
          '<li style="margin-bottom:8px;color:var(--text-secondary);font-size:0.92rem;">' +
          escapeHtml(h) +
          "</li>"
        );
      })
      .join("");

    const techBadges = (proj.technologies || [])
      .map(function (tech) {
        return '<span class="skill-tag">' + escapeHtml(tech) + "</span>";
      })
      .join("");

    let footerLinks = "";
    if (proj.caseStudyUrl) {
      footerLinks +=
        '<a href="' +
        escapeHtml(proj.caseStudyUrl) +
        '" class="btn btn-primary">' +
        escapeHtml(t("project.btnCaseStudy")) +
        "</a>";
    }
    if (proj.url) {
      footerLinks +=
        '<a href="' +
        escapeHtml(proj.url) +
        '" target="_blank" rel="noopener noreferrer" class="btn btn-outline">' +
        escapeHtml(proj.urlDisplay || proj.url) +
        " ↗</a>";
    }

    modalContent.innerHTML =
      '<div class="project-category" style="margin-bottom:6px;">' +
      escapeHtml(content.category) +
      " • " +
      escapeHtml(content.status) +
      "</div>" +
      '<h2 id="modal-project-title" style="font-size:1.55rem;font-weight:800;margin-bottom:12px;color:var(--text-primary);">' +
      escapeHtml(content.title) +
      "</h2>" +
      '<p style="font-size:0.96rem;color:var(--text-secondary);margin-bottom:20px;">' +
      escapeHtml(content.description) +
      "</p>" +
      '<div style="display:grid;grid-template-columns:1fr;gap:14px;margin-bottom:20px;">' +
      '<div class="timeline-box">' +
      '<div class="timeline-box-title">' +
      escapeHtml(t("modal.problem")) +
      "</div>" +
      '<p style="font-size:0.9rem;color:var(--text-secondary);">' +
      escapeHtml(content.problem) +
      "</p>" +
      "</div>" +
      '<div class="timeline-box">' +
      '<div class="timeline-box-title">' +
      escapeHtml(t("modal.solution")) +
      "</div>" +
      '<p style="font-size:0.9rem;color:var(--text-secondary);">' +
      escapeHtml(content.solution) +
      "</p>" +
      "</div>" +
      "</div>" +
      '<h3 style="font-size:1rem;font-weight:700;margin-bottom:10px;color:var(--text-primary);">' +
      escapeHtml(t("modal.highlights")) +
      "</h3>" +
      '<ul style="padding-left:20px;margin-bottom:20px;">' +
      highlightsList +
      "</ul>" +
      '<h3 style="font-size:1rem;font-weight:700;margin-bottom:10px;color:var(--text-primary);">' +
      escapeHtml(t("modal.tech")) +
      "</h3>" +
      '<div class="skill-tags" style="margin-bottom:22px;">' +
      techBadges +
      "</div>" +
      '<div style="display:flex;flex-wrap:wrap;gap:10px;padding-top:16px;border-top:1px solid var(--border-light);">' +
      footerLinks +
      "</div>";

    modalBackdrop.classList.add("open");
    modalBackdrop.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    const closeBtn = document.getElementById("modal-close-btn");
    if (closeBtn) closeBtn.focus();
  }

  /**
   * Proje Detay Modalını Kapatma
   */
  function closeProjectModal() {
    const modalBackdrop = document.getElementById("project-modal-backdrop");
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove("open");
    modalBackdrop.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus();
    }
  }

  /**
   * Dil Değiştirme (TR | EN)
   */
  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "tr";
    localStorage.setItem("ge_site_lang", currentLang);
    document.documentElement.setAttribute("lang", currentLang);

    // Tüm data-i18n etiketli elemanları güncelle
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const translated = t(key);
      if (translated && translated !== key) {
        el.textContent = translated;
      }
    });

    // Dil butonlarının aktif durumunu güncelle
    const langBtns = document.querySelectorAll(".lang-btn");
    langBtns.forEach(function (btn) {
      const btnLang = btn.getAttribute("data-lang");
      const isActive = btnLang === currentLang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    // Proje kartlarını seçili dilde yeniden oluştur
    renderProjects();
  }

  /**
   * Güvenli İletişim Formu İşleyicisi (XSS, Honeypot, Rate-Limit, Validation)
   */
  function initContactForm() {
    const form = document.getElementById("secure-contact-form");
    const statusBox = document.getElementById("contact-form-status");
    if (!form || !statusBox) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // 1. Honeypot Spam Kontrolü
      const hpInput = form.querySelector('input[name="website_hp"]');
      if (hpInput && hpInput.value.trim() !== "") {
        return; // Bot tespit edildi, sessizce durdur
      }

      // 2. Rate-Limit Kontrolü (15 saniye bekleme)
      const now = Date.now();
      if (now - lastFormSubmitTime < 15000) {
        return;
      }

      // 3. Girdi Temizliği ve Doğrulama
      const nameInput = form.querySelector("#contact-name");
      const emailInput = form.querySelector("#contact-email");
      const topicInput = form.querySelector("#contact-topic");
      const msgInput = form.querySelector("#contact-message");

      const name = nameInput ? nameInput.value.trim().slice(0, 100) : "";
      const email = emailInput ? emailInput.value.trim().slice(0, 120) : "";
      const topic = topicInput ? topicInput.value.trim().slice(0, 150) : "";
      const message = msgInput ? msgInput.value.trim().slice(0, 2000) : "";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!name || !emailRegex.test(email) || !message) {
        statusBox.className = "form-status error";
        statusBox.textContent = t("contact.formError");
        return;
      }

      lastFormSubmitTime = now;
      statusBox.className = "form-status success";
      statusBox.textContent = t("contact.formSuccess");

      const subject = encodeURIComponent(
        "[Güney Erdemir Web] " + topic + " — " + name
      );
      const body = encodeURIComponent(
        "Gönderen / Sender: " +
          name +
          "\nE-Posta / Email: " +
          email +
          "\nKonu / Topic: " +
          topic +
          "\n\nMesaj / Message:\n" +
          message
      );

      window.location.href =
        "mailto:guneyerdemir@gmail.com?subject=" + subject + "&body=" + body;
      form.reset();
    });
  }

  /**
   * Mobil Menü, Filtreler ve Scroll Reveal Başlatma
   */
  function initUI() {
    // Dil değiştirici butonlar
    const langBtns = document.querySelectorAll(".lang-btn");
    langBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });

    // Kategori filtre butonları
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterBtns.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");
        currentFilter = btn.getAttribute("data-filter") || "all";
        renderProjects();
      });
    });

    // Mobil menü aç/kapat
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileDrawer = document.getElementById("mobile-nav-drawer");
    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener("click", function () {
        const isOpen = mobileDrawer.classList.toggle("open");
        mobileToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      const mobileLinks = mobileDrawer.querySelectorAll("a");
      mobileLinks.forEach(function (link) {
        link.addEventListener("click", function () {
          mobileDrawer.classList.remove("open");
          mobileToggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Modal kapatma olayları
    const modalCloseBtn = document.getElementById("modal-close-btn");
    const modalBackdrop = document.getElementById("project-modal-backdrop");
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", closeProjectModal);
    }
    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", function (e) {
        if (e.target === modalBackdrop) {
          closeProjectModal();
        }
      });
    }
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeProjectModal();
      }
    });

    // Scroll Reveal (prefers-reduced-motion duyarlı)
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const revealEls = document.querySelectorAll(".reveal");
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) {
        el.classList.add("visible");
      });
    } else {
      const observer = new IntersectionObserver(
        function (entries, obs) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
      );
      revealEls.forEach(function (el) {
        observer.observe(el);
      });
    }

    initContactForm();
    applyLanguage(currentLang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initUI);
  } else {
    initUI();
  }
})();

