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

// const menuBtn = document.querySelector("#names .menu");

// menuBtn.addEventListener("click", () => {
//     setTimeout(() => {
//         location.reload();
//     }, 1000);
// });

const menu = document.querySelector(".all-cards");

const categories = document.querySelectorAll(".carousel-item");
// const  = document.querySelector(".all-cards");

let categoryName = "Breakfast";
menuCardfunc(categoryName);

categories.forEach((e) => {
    e.addEventListener("click", () => {
        categories.forEach((c) => c.classList.remove("active"));
        categoryName = e.id;
        e.classList.add("active");
        menuCardfunc(categoryName);
    });
});

const ingrediantlist = document.querySelector(
    ".menu-card .back-card #about-prod"
);

async function menuCardfunc(categoryName) {
    menu.innerHTML = "";

    try {
        const apiKey = `https://themealdb.com/api/json/v1/1/search.php?s=${categoryName}`;
        const response = await fetch(apiKey);
        const data = await response.json();

        if (data.meals) {
            data.meals.forEach((e) => {
                const price = Math.floor(e.idMeal % 7);

                let ingrediants = [];
                for (let i = 0; i < 7; i++) {
                    const event = e[`strIngredient${i + 1}`];
                    if (event != "") {
                        ingrediants.push(event);
                    }
                }
                    
                const ingredientsHTML = ingrediants
                    .map((ing) => `<li>${ing}</li>`)
                    .join("");
                menu.innerHTML += `<div class="menu-card" data-name="${e.strMeal}" data-id="${e.idMeal}" data-inst="${e.strInstructions}">
                    <div class="front-card">
                        <img src="${e.strMealThumb}" alt="${e.strMeal}" />
                        <h3>${e.strMeal}</h3>
                        <p id="desc">${e.strCategory}</p>
                        <p class="menu-price" price="${price}">$ ${price}.99</p>
                        <div class="cart-2">+</div>
                    </div>
            


                    <div class="back-card">
                        <h3>${e.strMeal}</h3>
                        <p class="ingre">Ingredients:</p>
                        <p id="about-prod">${ingredientsHTML}</p>
                        <div class="addTo-cartBtn">
                            <p class="addText">ADD TO CART</p>
                            <div class="cart-add">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="30px"
                                viewBox="0 -960 960 960"
                                width="30px"
                                fill="#FFFFFF"
                                >
                                    <path
                                        d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"
                                    />
                                </svg>
                            </div>

                            <div class="cart-remove">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="30px"
                                    viewBox="0 -960 960 960"
                                    width="30px"
                                    fill="#FFFFFF"
                                >
                                    <path
                                        d="M360-640v-80h240v80H360ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>`;
            });
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    const menuCard = document.querySelectorAll(".menu-card");
    const cardInfo = document.querySelector(".cardInfo");
    const cardInfoImg = document.querySelector(".cardInfo #left img");
    const cardInfoh2 = document.querySelector(".cardInfo #left h2");
    const cardInfoh4 = document.querySelector(".cardInfo #left h4");
    const instructions = document.querySelector(".cardInfo #right #inst");
    const cross = document.querySelector(".cardInfo .cross");

    cross.addEventListener("click", () => {
        cardInfo.classList.remove("active2");
    });

    menuCard.forEach((card) => {
        addToCardEff(card);

        card.addEventListener("click", (e) => {
            if (!e.target.closest(".addTo-cartBtn")) {
                cardInfo.classList.add("active2");

                cardInfo.dataset.name = card.dataset.name;

                cardInfoImg.src = card.querySelector(
                    ".menu-card .front-card img"
                ).src;
                cardInfoh2.innerHTML = card.querySelector(
                    ".menu-card .front-card h3"
                ).textContent;
                cardInfoh4.innerHTML = card.querySelector(
                    ".menu-card .front-card #desc"
                ).textContent;
                instructions.textContent = card.dataset.inst;
                gsap.to(cursor, {
                    scale: 1,
                });
                addToCardEff(cardInfo);
            }
        });

        card.addEventListener("mouseenter", () => {
            gsap.to(cursor, {
                scale: 6,
            });
            cursor.innerHTML = "View More";
            cursor.style.color = "black";
        });
        card.addEventListener("mouseleave", () => {
            gsap.to(cursor, {
                scale: 1,
            });
            cursor.textContent = "";
        });
    });

    cardInfoImg.addEventListener("mouseenter", () => {
        cardInfoImg.style.animationPlayState = "paused";
    });
    cardInfoImg.addEventListener("mouseleave", () => {
        cardInfoImg.style.animationPlayState = "running";
    });
}

function addToCardEff(e) {
    const message = document.querySelector(".message");

    const addIcon = e.querySelector(".cart-add");
    const removeIcon = e.querySelector(".cart-remove");
    const addText = e.querySelector(".addText");
    const mainBtn = e.querySelector(".addTo-cartBtn");

    const productName = e.dataset.name;
    console.log(productName);
    

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isInCart = storedCart.includes(productName);

    mainBtn.classList.toggle("added", isInCart);
    addIcon.style.display = isInCart ? "none" : "block";
    removeIcon.style.display = isInCart ? "block" : "none";
    addText.textContent = isInCart ? "REMOVED FROM CART" : "ADD TO CART";

    mainBtn.addEventListener("click", () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const isAdded = mainBtn.classList.toggle("added");

        if (isAdded) {
            if (!cart.includes(productName)) {
                cart = [...cart, productName];
                
                addIcon.style.display = "none";
                removeIcon.style.display = "block";
                addText.textContent = "REMOVED FROM CART";

                message.textContent = `${productName} added to Cart`;
                message.style.backgroundColor = "#22bb34dc";
            }
        } else {
            cart = cart.filter((item) => item !== productName);

            removeIcon.style.display = "none";
            addIcon.style.display = "block";
            addText.textContent = "ADD TO CART";

            message.textContent = `${productName} removed from Cart`;
            message.style.backgroundColor = "#ff0000bd";
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        message.classList.add("show");
        setTimeout(() => message.classList.remove("show"), 2500);
    });
}

menu.addEventListener("load", () => {
    (document.body.style.opacity = "0.8"),
        setTimeout(() => {
            document.body.style.opacity = "1";
            loader.classList.add("hide");
        }, 1200);
});
menuCardfunc();

const track = document.querySelector(".carousel-track");
const scrollAnim = gsap.to(track, {
    x: "-50%",
    duration: 18,
    repeat: -1,
    ease: "none",
});
track.addEventListener("mouseenter", () => scrollAnim.timeScale(0.5));

track.addEventListener("mouseleave", () => scrollAnim.timeScale(1));

const quantity = document.querySelector(".quantity .number");
const plus = document.querySelector(".quantity .increase");
const minus = document.querySelector(".quantity .decrease");
let count = 0;

plus.addEventListener("click", () => {
    count++;
    quantity.innerHTML = count;
});

minus.addEventListener("click", () => {
    if (count <= 1) {
        count = 1;
    } else {
        count--;
    }
    quantity.innerHTML = count;
});

const nav2 = document.querySelector("nav #names");
const sections = document.querySelectorAll("#all-parts, #employTitle, footer");

const openBtn = document.querySelector("nav .threeLine");
const closeBtn = document.querySelector("nav .cross");

console.log(sections);

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
