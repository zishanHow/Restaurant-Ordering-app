import { menuArray } from "./data.js"

const main = document.getElementById("main")



let order = initializeOrder()

document.addEventListener("click", function(e) {
    if(e.target.dataset.add) {
        addToOrder(e.target.dataset.add)
    }
})

function addToOrder(addId) {
    let cartRows = document.getElementById("cart-rows")
    let targetItem = getItem(addId)
    console.log(targetItem)
    cartRows.innerHTML += `
                    <div class="order-flex">
                        <p class="ordered-item"><span class="how-many-order">1 </span> ${targetItem.name} <span class="remove-item">(remove)</span></p>
                        <p> <span class="see-price">$${targetItem.price}</span></p>
                    </div>
    `
    return cartRows
}


//utility functions =>  all the data in this order function() line 7
function initializeOrder() {
    let newOrder = menuArray.map( item => (
        {
            name: item.name,
            id: item.id,
            price: item.price,
            orders: 0
        }
    ))
    return newOrder
}


// filter the id in a fucntion ()
function getItem(id) {
    let newItem = order.filter(function(item) {
        return item.id === parseInt(id)
    })[0]
    return newItem
}




















// main section
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