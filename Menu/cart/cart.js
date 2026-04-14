const allBoxes = document.querySelector(".leftbox .all-boxes");

async function fetchData(e) {

    const response=await fetch('https://themealdb.com/api/json/v1/1/lookup.php?i=52795')

}

const products=JSON.parse(localStorage.getItem('cart'))
console.log(products);


function addBox(products) {
    products.forEach((element) => {
        allBoxes.innerHTML += `
    <div id="${element.id}" class="box" data-price="${element.price}">     
        <img src="${element.image}"/>
        <div class="part1">
            <h2>${element.name}</h2>
            <h4>${element.category}</h4>
            <h3>${element.time}</h3>
        </div>    
        <div class="part2">
            <h2 class="price">
                Each <br />
                $${element.price}
            </h2>
        </div>
        <div class="part3">
            <h2>Quantity</h2>
            <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        <div class="part4">Total 
            <p>$${element.price}</p>
        </div>
        <div class="remove">Remove</div>
    </div>
    `;
    });
}

allBoxes.addEventListener("change", (e) => {
    const selectedVal = e.target.value;
    const box = e.target.closest(".box");
    const price = Number(box.dataset.price);
    box.querySelector(".part4 p").innerText = `$${(selectedVal * price).toFixed(2)}`;
});

allBoxes.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        const box = e.target.closest(".box");
        box.remove();
    }
});

addBox(products);

let totalPrice = 0;
for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price;
}
const total = document.querySelectorAll(".rightbox .bills .row span")[1];
total.innerText = totalPrice;

const afterTax = (totalPrice / 18).toFixed(2);
document.querySelector(".rightbox .bills .row .taxes").innerText = afterTax;

const afterDiscount = (totalPrice / 10).toFixed(2);
document.querySelector(".rightbox .bills .row .discount").innerText =
    afterDiscount;

const grandTotal = Number(totalPrice) + Number(afterTax) - Number(afterDiscount);
document.querySelector(".rightbox .bills .row .grandTotal").innerText =`$${(grandTotal).toFixed(2)}`;

const freeMessage = document.querySelector(".free-message");
const remaining = 100 - grandTotal;

if (remaining > 0) {
    freeMessage.innerHTML = `
        You are <span>${remaining.toFixed(2)}</span> far from a free dessert
    `;
} else {
    freeMessage.innerHTML = `
        🎉 You have unlocked a <span>FREE</span> dessert!
    `;
}
