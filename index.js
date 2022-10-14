import { menuArray } from "./data.js"

const main = document.getElementById("main")
let totalPriceDiv = document.getElementById("total-price-div")
let cartRows = document.getElementById("cart-rows")
const consentForm = document.getElementById("consent-form")

let order = initializeOrder()

// targeting the clicks in documents. 
document.addEventListener("click", function(e) {
    if(e.target.dataset.add) {
        addToOrder(e.target.dataset.add)
    } else if(e.target.dataset.remove) {
        removeOrder(e.target.dataset.remove)
    } else if(e.target.id === "order-btn"){
        handleOrder()
    }
})

//  FORM data in here !! 
document.addEventListener("submit", function(e){
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get("fullName")

    document.getElementById("loading").classList.remove("hide")
    setTimeout(function(){
        document.getElementById("loading").classList.add("hide")

        document.getElementById("buying-mgs-div").innerHTML = `
            <div class="buying-mgs" id="buying-mgs">
                <p>Thanks, ${fullName}! Your order is way!</p>
            </div>
        `
    }, 3000)
    document.getElementById("modal").classList.add("hide")
    document.getElementById("order").classList.add("hide")
})

function addToOrder(addId) {
    if(document.getElementById("order").classList.contains("hide")) {
        document.getElementById("order").classList.remove("hide")
    }
    let targetItem = getItem(addId)
    targetItem.orders++
    renderSum()
}

function removeOrder(id) {
    let targetItem = getItem(id)
    targetItem.orders--
    if(targetItem.orders === 0){
        document.getElementById("order").classList.add("hide")
    }
    renderSum()
}

function handleOrder() {

    setTimeout(function() {
        document.getElementById("modal").classList.remove("hide")
    }, 200)
}

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

// filter the id's in a fucntion(new to me)
function getItem(id) {
    let newItem = order.filter(function(item) {
        return item.id === parseInt(id)
    })[0]
    return newItem
}

// calculating function()(new to me)
function calculateOrderPrice(){
    let price = 0
    for(let item of order) {
        price += item.price*item.orders
    }
    return price
}

// render order function(new to me)
function renderSum() {
    let orderFood = ''
    let orderHTML = ''
    let total = calculateOrderPrice()
    for (let item of order){
        if(item.orders > 0){
            orderFood +=  `
            <div class="order-flex">
                <p class="ordered-item"><span class="how-many-order">${item.orders} </span> ${item.name} <span id="remove-food-${item.id}" class="remove-item" data-remove="${item.id}">(remove)</span></p>

                <p> <span class="see-price">$${item.price}</span></p>
            </div>
`
        }
    }
    orderHTML += `
                <p class="total-price-text">Total price:</p>
                <p class="total-price">$${total}</p> 
                `

    cartRows.innerHTML = orderFood
    totalPriceDiv.innerHTML = orderHTML
}

// main section
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

            <div id="add-food-${restaurant.id}" class="add-icon"><i class="fa-solid fa-plus" data-add="${restaurant.id}"></i></div>
        </section>
        `
    })
    return restaurantHtml
}

function render() {
    main.innerHTML = getRestaurantHtml()
}
render()