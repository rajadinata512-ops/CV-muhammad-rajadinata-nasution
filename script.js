// Efek shadow navbar saat scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 10) {
    nav.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  } else {
    nav.style.boxShadow = "none";
  }
});
