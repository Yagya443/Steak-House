const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        nav.style.height = "50px";
        nav.style.transform = "transform 0.7s ease";
    } else {
        nav.style.height = "75px";
        nav.style.transform = "transform 0.7s ease";
    }
});

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    (document.body.style.opacity = "0.8"),
        setTimeout(() => {
            document.body.style.opacity = "1";
            loader.classList.add("hide");
        }, 1200);
});

const section5 = document.getElementById("section5");
const navEvent = document.querySelector("nav #names #event");

navEvent.addEventListener("click", () => {
    window.scrollTo({
        top: 3700,
        behavior: "smooth",
    });
});

//CURSOR
const cursor = document.querySelector(".cursor");
const container = document.querySelectorAll(
    "#section2 #container,#section5 #container"
);

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.8,
        ease: "power2.out",
    });
});

window.addEventListener("click", () => {
    gsap.timeline()
        .to(cursor, {
            scale: 3,
            duration: 0.2,
            ease: "power2.out",
        })
        .to(cursor, {
            scale: 1,
            duration: 1.2,
            ease: "elastic.out(1, 0.5)",
        });
});

container.forEach((box, index) => {
    box.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 6,
            backgroundColor: "black",
            duration: 0.3,
        });
        if (index === 0) {
            cursor.textContent = "Explore";
        } else if (index === 1) {
            cursor.textContent = "Contact";
        }
    });

    box.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 1,
            backgroundColor: "white",
            duration: 0.3,
        });
        cursor.textContent = "";
    });
});

//PAN
gsap.from("#section1 #onlyPan", {
    ease: "power3.out",
    rotation: -5,
    scale: 1.1,
    scrollTrigger: {
        trigger: "#section1",
        scrub: 2,
        pin: true,
        // markers: true
    },
});

//VEGGIES
gsap.from("#section1 #onlyVeggies", {
    rotation: 70,
    scale: 0.95,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#section1",
        scrub: 4,
    },
});

//VEGGIES UP
gsap.to("#section1 #onlyVeggies", {
    y: -300,
    opacity: 0.2,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#section1",
        start: "center center",
        end: "bottom top",
        scrub: 2,
        // markers: true
    },
});

//PAN UP
gsap.to("#section1 #onlyPan", {
    y: -300,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#section1",
        start: "center+=100 center",
        end: "bottom top",
        scrub: 1,
        // markers:true,
    },
});

//SECTION2 CONTAINER UP
gsap.to(container, {
    y: -100,
    opacity: 0,
    duration: 0.6,
    scrollTrigger: {
        trigger: "#section2",
        start: "center+=150 center",
        end: "bottom top",
        scrub: 1,
        // markers:true,
    },
});

//SECTION2 CONTAINER TEXT & LEAF UP
gsap.to("#section2 #container #part2,#section2 #leaf", {
    y: -200,
    opacity: 0,
    duration: 0.6,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#section2",
        start: "center+=75 center",
        end: "bottom top",
        // markers:true,
        scrub: 1,
    },
});

gsap.utils.toArray("#section3 .boximages").forEach((boxImage, index) => {
    const img = boxImage.querySelector("img");
    let startPos, endPos;

    switch (index) {
        case 0:
            startPos = "top 80%";
            endPos = "bottom 35%";
            break;
        case 1:
            startPos = "top 70%";
            endPos = "bottom 35%";
            break;
        case 2:
            startPos = "top 80%";
            endPos = "bottom 40%";
            break;
        case 3:
            startPos = "top 70%";
            endPos = "bottom 45%";
            break;
        default:
            startPos = "top 100%";
            endPos = "bottom 0%";
    }
    gsap.to(img, {
        rotate: 360,
        repeat: -1,
        ease: "none",
        duration: 25,
        scrollTrigger: {
            trigger: boxImage,
            start: startPos,
            end: endPos,
            toggleActions: "play pause resume pause",
            // markers: true,
        },
    });
});

const textBlocks = document.querySelectorAll(".text-anim");

textBlocks.forEach((block) => {
    const split = new SplitType(block, { types: "words" });
    gsap.from(split.words, {
        opacity: 0,
        stagger: 0.2,
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: block,
            // markers:true,
            start: "top 80%",
        },
    });
});

gsap.from("#section3 #line1", {
    opacity: 0,
    duration: 2,
    y: 200,
    ease: "power4.out",
    scrollTrigger: {
        trigger: "#section2",
        // markers: true,
        start: "bottom+=100 bottom",
        scrub: 2,
    },
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#section5",
        start: "center bottom-=150",
        end: "bottom top",
        scrub: 4,
        // markers: true,
    },
});

tl.fromTo(
    "#section5 #container",
    {
        y: 300,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        ease: "power1.out",
    }
);

tl.to("#section5 #container", {
    y: -300,
    opacity: 0,
    ease: "power1.out",
    duration: 2,
});

const saltPaths = document.querySelectorAll(
    ".saltPath1, .saltPath2, .saltPath3, .saltPath4"
);

saltPaths.forEach((path) => {
    gsap.from(path, {
        opacity: 0,
        scrollTrigger: {
            trigger: path,
            start: "top 68%",
            end: "top 20%",
            scrub: true,
            // markers: true,
        },
    });
});

//section7
const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section7 img",
        start: "top-=100 85%",
        // markers: true,
        scrub: 2,
    },
});

tl3.fromTo(
    "#section7 img,#section7 .text,#section7 footer",
    {
        y: 100,
        duration: 0.8,
        opacity: 0.2,
    },
    {
        y: 0,
        duration: 1.5,
        opacity: 1,
    }
);

gsap.from("#section6 img", {
    opacity: 0,
    scale: 0.8,
    scrollTrigger: {
        trigger: "#section6",
        start: "center center",
        end: "+=100",
        // markers: true,
        // scrub: 2,
    },
});

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#section6",
        start: "center+=200 center",
        end: "+=100",
        // markers: true,
        scrub: 2,
    },
});

tl5.to(
    "#section6 img",
    {
        ease: "power4.out",
        scale: 1.1,
    },
    "orange"
);
tl5.to(
    "#section6 .img1",
    {
        y: -100,
    },
    "orange"
);
tl5.to(
    "#section6 .img2",
    {
        y: -100,
        x: -50,
    },
    "orange"
);
tl5.to(
    "#section6 .img3",
    {
        y: -100,
        x: -50,
    },
    "orange"
);
tl5.to(
    "#section6 .img4",
    {
        y: -100,
        x: 40,
    },
    "orange"
);
tl5.to(
    "#section6 .img5",
    {
        y: -70,
        x: 60,
    },
    "orange"
);
tl5.to(
    "#section6 .img6",
    {
        y: -70,
        x: 80,
    },
    "orange"
);
tl5.to(
    "#section6 .img7",
    {
        y: -100,
        x: 60,
    },
    "orange"
);
tl5.to(
    "#section6 .img8",
    {
        y: -100,
        x: -40,
    },
    "orange"
);

const nav2 = document.querySelector("nav #names");
const sections = document.querySelectorAll("section");

const openBtn = document.querySelector("nav .threeLine");
const closeBtn = document.querySelector("nav .cross");

openBtn.addEventListener("click", () => {
    nav2.classList.add("active");
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    // sections.style.filter="blur(10px)"

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
