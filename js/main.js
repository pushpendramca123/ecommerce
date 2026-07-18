document.addEventListener("DOMContentLoaded", () => {
  setupStickyHeader();
});

// ─── Sticky Header Transition ────────────────────────────────────────────────
function setupStickyHeader() {
  const header = document.querySelector(".header-glass");
  if (!header) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.style.padding = "0.4rem 0";
      header.style.boxShadow = "var(--shadow-md)";
    } else {
      header.style.padding = "0.75rem 0";
      header.style.boxShadow = "var(--shadow-sm)";
    }
  });
}
