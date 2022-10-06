import { menuArray } from "./data.js"

const orderBtn = document.getElementById("order-btn")
const modal = document.getElementById("modal")
const payBtn = document.getElementById("pay-btn")
const buyingMgs = document.getElementById("buing-mgs")

const main = document.getElementById("main")
// console.log(main)

function getRestaurantHtml() {
    let restaurantHtml = ""
    menuArray.forEach(function (restaurant) {
        restaurantHtml += `
        <section>
            <div class="item-flex">
                <div class="item">${restaurant.emoji}</div>
                <div class="item-details">
                        <h3 class="item-header">${restaurant.name}</h3>
                        <p class="about-item">${restaurant.ingredients}</p>
                        <p class="item-price">$${restaurant.price}</p>
                </div>
            </div>

            <div class="add-icon"><i class="fa-solid fa-plus"></i></div>
        </section>
        `
    })
    main.innerHTML = restaurantHtml
}

getRestaurantHtml()

orderBtn.addEventListener("click", function() {
    modal.style.display = 'inline'
})

payBtn.addEventListener("click", function() {
    modal.style.display = 'none'
    buyingMgs.style.display = "block"
})