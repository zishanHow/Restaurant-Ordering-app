import { menuArray } from "./data.js"

const orderBtn = document.getElementById("order-btn")
const modal = document.getElementById("modal")
const payBtn = document.getElementById("pay-btn")
const buyingMgs = document.getElementById("buing-mgs")
const main = document.getElementById("main")

let removeItem = document.getElementsByClassName("remove-item")

for (let i = 0; i < removeItem.length; i++) {
    let remove = removeItem[i]
    remove.addEventListener("click", removeCartItem)
}

function removeCartItem(e) {
    let removeClick = e.target
    removeClick.parentElement.parentElement.remove()
}




// document.addEventListener("click", function(e) {
//     if(e.target.dataset.add) {
//         handleAddClick(e.target.dataset.add)
//     }
// })



/* function handleAddClick(addId) {
    const order = document.getElementById("order")
    menuArray.forEach(function(orders) {
        order.innerHTML = ` 
            <div class="order-section" id="order-section">
                <div class="order-section-header">Your order</div>
                <div class="order-flex">

                    <div>
                        <p class="ordered-item">${orders.name} <span class="remove-item">(remove)</span></p>
                    </div>
                    <div>
                        <p> <span class="see-price">$${orders.price}</span></p>
                    </div>
                </div>
                <div class="total-price-div">
                    <p class="total-price-text">Total price:</p>
                    <p class="total-price">$24</p>
                </div>
                <button class="order-btn" id="order-btn">Complete order</button>
            </div>
    `
    })

    /* const targerMenuObj = menuArray.filter(function(menu) {
        return menu.id === addId
    }) 

    return order
}
 */






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

            <div class="add-icon"><i class="fa-solid fa-plus" data-add="${restaurant.id}"></i></div>
        </section>
        `
    })
    main.innerHTML = restaurantHtml
}

getRestaurantHtml()






/* 

orderBtn.addEventListener("click", function() {
    modal.style.display = 'inline'
})

payBtn.addEventListener("click", function() {
    modal.style.display = 'none'
    buyingMgs.style.display = "block"
}) */