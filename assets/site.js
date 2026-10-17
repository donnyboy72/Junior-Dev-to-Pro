(() => {
  "use strict";
  const themeToggle = document.getElementById("themeToggle");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let savedTheme;
  try {
    savedTheme = localStorage.getItem("jrdev-theme");
  } catch (_) {}
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  }
  applyTheme(
    savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : systemTheme.matches
        ? "dark"
        : "light",
  );
  themeToggle.addEventListener("click", () => {
    savedTheme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(savedTheme);
    try {
      localStorage.setItem("jrdev-theme", savedTheme);
    } catch (_) {}
  });
  systemTheme.addEventListener("change", () => {
    if (savedTheme !== "dark" && savedTheme !== "light")
      applyTheme(systemTheme.matches ? "dark" : "light");
  });
  window.addEventListener("storage", (event) => {
    if (event.key !== "jrdev-theme" && event.key !== null) return;
    savedTheme = event.newValue;
    applyTheme(
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : systemTheme.matches
          ? "dark"
          : "light",
    );
  });
  const sidebar = document.getElementById("courseSidebar");
  const menu = document.getElementById("menuToggle");
  const backdrop = document.getElementById("navBackdrop");
  const mobile = window.matchMedia("(max-width: 960px)");
  const page = document.querySelector(".main-container");
  let menuOpen = false;

  function setMenu(open, restoreFocus = false) {
    menuOpen = open && mobile.matches;
    sidebar.classList.toggle("open", menuOpen);
    document.body.classList.toggle("nav-open", menuOpen);
    backdrop.hidden = !menuOpen;
    menu.setAttribute("aria-expanded", String(menuOpen));
    menu.setAttribute(
      "aria-label",
      menuOpen ? "Close navigation" : "Open navigation",
    );
    sidebar.inert = mobile.matches && !menuOpen;
    page.inert = menuOpen;
    if (menuOpen) sidebar.querySelector("a").focus();
    else if (restoreFocus) menu.focus();
  }
  menu.addEventListener("click", () => setMenu(!menuOpen));
  backdrop.addEventListener("click", () => setMenu(false, true));
  mobile.addEventListener("change", () => setMenu(false));
  setMenu(false);
  document.addEventListener("keydown", (event) => {
    if (!menuOpen) return;
    if (event.key === "Escape") {
      setMenu(false, true);
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [...sidebar.querySelectorAll("a, input, summary")].filter(
      (el) => el.getClientRects().length,
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  sidebar.addEventListener("click", (event) => {
    if (event.target.closest("a") && mobile.matches) setMenu(false);
  });

  const navSearch = document.getElementById("navSearch");
  const topics = [...document.querySelectorAll(".nav-topic")];
  let previousOpen = null;
  navSearch.addEventListener("input", () => {
    const query = navSearch.value.trim().toLocaleLowerCase();
    if (query && previousOpen === null)
      previousOpen = topics.map((topic) => topic.open);
    let matches = 0;
    topics.forEach((topic, index) => {
      const titleMatch = topic
        .querySelector("summary")
        .textContent.toLocaleLowerCase()
        .includes(query);
      let visibleLinks = 0;
      topic.querySelectorAll("li").forEach((item) => {
        const match =
          !query ||
          titleMatch ||
          item.textContent.toLocaleLowerCase().includes(query);
        item.hidden = !match;
        if (match) visibleLinks++;
      });
      topic.hidden = visibleLinks === 0;
      if (visibleLinks) matches++;
      if (query) topic.open = visibleLinks > 0;
      else if (previousOpen) topic.open = previousOpen[index];
    });
    document.querySelectorAll(".nav-group").forEach((group) => {
      group.hidden = ![...group.querySelectorAll(".nav-topic")].some(
        (topic) => !topic.hidden,
      );
    });
    document.getElementById("navEmpty").hidden = matches > 0;
    if (!query) previousOpen = null;
  });

  const search = document.getElementById("topicSearch");
  if (search) {
    let filter = "all";
    const cards = [...document.querySelectorAll(".topic-card")];
    const filters = [...document.querySelectorAll("[data-filter]")];
    function updateTopics() {
      const query = search.value.trim().toLocaleLowerCase();
      let count = 0;
      cards.forEach((card) => {
        const match =
          (filter === "all" || card.dataset.group === filter) &&
          card.dataset.search.toLocaleLowerCase().includes(query);
        card.hidden = !match;
        if (match) count++;
      });
      filters.forEach((button) => {
        const selected = button.dataset.filter === filter;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
      document.getElementById("topicEmpty").hidden = count > 0;
      document.getElementById("topicResults").textContent =
        `${count} ${count === 1 ? "topic" : "topics"} found`;
    }
    filters.forEach((button) =>
      button.addEventListener("click", () => {
        filter = button.dataset.filter;
        updateTopics();
      }),
    );
    search.addEventListener("input", updateTopics);
    document.getElementById("resetTopics").addEventListener("click", () => {
      filter = "all";
      search.value = "";
      updateTopics();
      search.focus();
    });
    updateTopics();
  }

  const article = document.getElementById("lessonContent");
  if (article) {
    // Older lessons repeat the page title in Markdown. Show one title.
    const first = article.firstElementChild;
    const normalize = (text) =>
      text
        .trim()
        .toLocaleLowerCase()
        .replace(/[^\p{L}\p{N}]/gu, "");
    if (
      first?.tagName === "H1" &&
      normalize(first.textContent) ===
        normalize(document.querySelector(".lesson-heading h1").textContent)
    )
      first.remove();
    const readable = article.cloneNode(true);
    readable
      .querySelectorAll("script, style")
      .forEach((element) => element.remove());
    const words = readable.textContent.trim().split(/\s+/).length;
    document.getElementById("readingMeta").textContent =
      `${Math.max(1, Math.ceil(words / 200))} min read · Read, try, repeat`;
    const headings = [...article.querySelectorAll(":scope > h1, :scope > h2")];
    const links = document.getElementById("tocLinks");
    headings.forEach((heading, index) => {
      if (!heading.id) heading.id = `section-${index + 1}`;
      const link = document.createElement("a");
      link.href = `#${encodeURIComponent(heading.id)}`;
      link.textContent = heading.textContent;
      links.append(link);
    });
    document.getElementById("lessonToc").hidden = headings.length < 2;
    if (headings.length && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            [...links.children].forEach((link) => {
              if (link.hash === `#${encodeURIComponent(entry.target.id)}`)
                link.setAttribute("aria-current", "location");
              else link.removeAttribute("aria-current");
            });
          }
        },
        { rootMargin: "0px 0px -65% 0px" },
      );
      headings.forEach((heading) => observer.observe(heading));
    }
  }
})();
