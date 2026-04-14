const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    nav.style.height="50px";
    nav.style.transform='transform 0.7s ease';
  } else {
    nav.style.height="75px";
    nav.style.transform='transform 0.7s ease';
  }
});