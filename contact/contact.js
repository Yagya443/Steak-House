const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.8,
        ease: "power2.out",
    });
});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 5) {
        nav.style.height = "50px";
        nav.style.transform = "transform 0.7s ease";
    } else {
        nav.style.height = "75px";
        nav.style.transform = "transform 0.7s ease";
    }
});

const contactBtn = document.querySelector("#names #contact");

contactBtn.addEventListener("click", () => {
    setTimeout(() => {
        location.reload();
    }, 1000);
});

const mapsElements = document.querySelector('.maps');

mapsElements.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
        opacity: 0,
    });
});
mapsElements.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
        opacity: 1,
    });
});

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    (document.body.style.opacity = "0.8"),
        setTimeout(() => {
            document.body.style.opacity = "1";
            loader.classList.add("hide");
        }, 1500);
});

const nav2 = document.querySelector("nav #names");
const sections = document.querySelectorAll("#all-parts, #employTitle, footer");

const openBtn = document.querySelector("nav .threeLine");
const closeBtn = document.querySelector("nav .cross");

openBtn.addEventListener("click", () => {
    nav2.classList.add("active");
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    // sections.style.filter="blur(10px)"
    // document.body.style.filter="blur(10px)"

    sections.forEach((e) => {
        e.style.filter = "blur(5px)";
    });
    gsap.fromTo(
        "nav #names div",
        {
            x: 300,
            opacity: 0,
        },
        {
            x: 0,
            stagger: 0.1,
            delay: 0.2,
            opacity: 1,
        }
    );
});
closeBtn.addEventListener("click", () => {
    gsap.to("nav #names div", {
        x: 300,
        stagger: 0.1,
        duration: 0.8,
    });
    setTimeout(() => {
        nav2.classList.remove("active");
        closeBtn.style.display = "none";
        openBtn.style.display = "block";
        sections.forEach((e) => {
            e.style.filter = "blur(0px)";
        });
    }, 250);
});
