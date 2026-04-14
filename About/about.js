const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        nav.style.height = "50px";
        nav.style.transform = "transform 0.7s ease";
    } else {
        nav.style.height = "75px";
        nav.style.transform = "transform 0.7s ease";
    }
});

document.querySelector("nav #logo").addEventListener("click",()=>{
    location.reload();
})

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
    (document.body.style.opacity = "0.8"),
        setTimeout(() => {
            document.body.style.opacity = "1";
            loader.classList.add("hide");
        }, 1200);
});

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.8,
        ease: "power2.out",
    });
});


const body = document.querySelector("body");
const textEff = document.querySelectorAll(".textEff");

textEff.forEach((element) => {
    const split = new SplitType(element, { types: "words" });

    gsap.from(split.words, {
        opacity: 0,
        duration: 4,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
            trigger: element,
            start: "center-=300 center",
            // markers:true
        },
    });
});

const imgEffLeft = document.querySelectorAll(".imgEffLeft");
const imgEffRight = document.querySelectorAll(".imgEffRight");

imgEffLeft.forEach((e) => {
    gsap.from(e, {
        opacity: 0,
        duration: 2,
        x: -100,
        ease: "power2.out",
        scrollTrigger: {
            trigger: e,
            start: "center-=300 center",
            // markers:true
        },
    });
});
imgEffRight.forEach((e) => {
    gsap.from(e, {
        opacity: 0,
        duration: 2,
        x: 100,
        ease: "power2.out",
        scrollTrigger: {
            trigger: e,
            start: "center-=300 center",
            // markers:true
        },
    });
});

const details = [
    {
        id: 0,
        img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Aryan Mehta",
        role: "Head Chef",
        experience: "10+ years",
        specialty: "Steaks and contemporary cuisine",
    },
    {
        id: 1,
        img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop",
        name: "Kunal Patel",
        role: "Senior Chef",
        experience: "7 years",
        specialty: "Indian and continental fusion",
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1689588532679-4bb5fdd8f6d5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Neeraj Gupta",
        role: "Chef",
        experience: "4 years",
        specialty: "Cakes, pastries, and desserts",
    },
    {
        id: 3,
        img: "https://plus.unsplash.com/premium_photo-1661778091956-15dbe6e47442?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Riya Rathod",
        role: "Chef",
        experience: "3 years",
        specialty: "Customer service & multitasking",
    },
    {
        id: 4,
        img: "https://plus.unsplash.com/premium_photo-1694557830984-7851a2625c2e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Sahil Ali",
        role: "Chef",
        experience: "5 years",
        specialty: "Corporate and private events",
    },
    {
        id: 5,
        img: "https://plus.unsplash.com/premium_photo-1664300594005-0491d349b91c?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Rohan Mehra",
        role: "Chef",
        experience: "6 years",
        specialty: "Cocktails and mixology",
    },
    {
        id: 6,
        img: "https://images.unsplash.com/photo-1717838206417-c4fe2b9fb043?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Ankit Singh",
        role: "Chef",
        experience: "2 years",
        specialty: "Desserts and confectionaries",
    },
];

const right = document.querySelector("#employDetail .right");
right.innerHTML = "";
const left = document.querySelector("#employDetail .left");

details.forEach((data) => {
    right.innerHTML += `
    <div class="employ">
        <div class="image">
            <img src="${data.img}" />
        </div>
        <h1 class="name">${data.name}</h1>
        <h3 class="role">${data.role}</h3>
    </div>`;
});

const allCards=document.querySelectorAll("#employDetail .right .employ")

allCards.forEach((event)=>{
    event.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            scale:6,
            // duration:0.3,
        })
        cursor.innerHTML = "View More";
        cursor.style.backgroundColor = "black";
    })
    event.addEventListener("mouseleave",()=>{
        gsap.to(cursor,{
            scale:1,
            // duration:0.3,
        })
        cursor.style.backgroundColor = "white";
    })

})

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



// const allCards = document.querySelectorAll("#employDetail .right .employ");

allCards.forEach((e, index) => {
    e.addEventListener("click", () => {
        const data = details[index];
        left.innerHTML = `
        <div class="image">
            <img src="${data.img}" />
        </div>
        <h1 class="name">Name: ${data.name}</h1>
        <h3 class="role">Role: ${data.role}</h3>
        <h3 class="experience">Experience: ${data.experience}</h3>
        <h3 class="specialty">Specialty: ${data.specialty}</h3>
        `;
    });
});

const navEvent = document.querySelector("nav #names #event");

const nav2 = document.querySelector("nav #names");
const sections = document.querySelectorAll("#all-parts, #employTitle, footer");

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
