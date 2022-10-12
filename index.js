import { menuArray } from "./data.js"

const main = document.getElementById("main")

document.addEventListener("click", function(e) {
    if(e.target.dataset.add) {
        addToOrder(e.target.dataset.add)
    }
})

function addToOrder(addId) {
    let targetItem = getItem(addId)
    if(targetItem.orders === 0) {
        document.getElementById(`remove-food-${id}`).disabled = false
    }targetItem.orders++
}


function getRestaurantHtml() {
    let restaurantHtml = ""

    let i = 0
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

            <button id="remove-food-${restaurant.id}" class="add-icon" disabled><i class="fa-sharp fa-solid fa-minus" data-remove="${restaurant.id}"></i></button>
            <button id="add-food-${restaurant.id}" class="add-icon"><i class="fa-solid fa-plus" data-add="${restaurant.id}"></i></button>
        </section>
        `
    i++
    })
    return restaurantHtml
}


function render() {
    main.innerHTML = getRestaurantHtml()
}
render()