
import { menuArray } from "./data.js"
console.log(menuArray)

const main = document.getElementById("main")

document.addEventListener("click", function(e) {
    if(e.target.dataset.plus) {
        handleAddClick(e.target.dataset.plus)
    }
})

/* function handleAddClick(meee) {
    const targetMenuObj = menuArray.filter(function(menu){
        return meee === menu.id
    })[0]
    console.log(targetMenuObj)
} */



function handleAddClick(plusId) {
    console.log(plusId)
    // remove the .hide from order
    if(document.getElementById("order").classList.contains("hide")) {
        document.getElementById("order").classList.remove("hide")
    }
    const menuObjArray = menuArray.filter(function(item){
        return item.id === plusId
    })[0]

    console.log(menuObjArray)
    let cartRows = document.getElementById("cart-rows").innerHTML += `
                    <div class="order-flex">
                        <p class="ordered-item">${menuObjArray.name} <span class="remove-item">(remove)</span></p>
                        <p> <span class="see-price">$${menuObjArray.price}</span></p>
                    </div>
    `
    return cartRows
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

            <button id="remove-item-${restaurant.id}" class="add-icon" data-remove="${restaurant.id}" disabled><i class="fa-sharp fa-solid fa-minus"></i></button>
            <button id="add-item-${restaurant.id}" class="add-icon" data-add="${restaurant.id}"><i class="fa-regular fa-plus"></i></button>
        </section>
        `
        i++
    })
    return restaurantHtml
}
getRestaurantHtml()

function render() {
    main.innerHTML = getRestaurantHtml()
}

render()





/* 

orderBtn.addEventListener("click", function() {
    modal.style.display = 'inline'
})

payBtn.addEventListener("click", function() {
    modal.style.display = 'none'
    buyingMgs.style.display = "block"
}) */







/* const orderBtn = document.getElementById("order-btn")
const modal = document.getElementById("modal")
const payBtn = document.getElementById("pay-btn")
const buyingMgs = document.getElementById("buing-mgs") */









// let removeItem = document.getElementsByClassName("remove-item")

// for (let i = 0; i < removeItem.length; i++) {
//     let remove = removeItem[i]
//     remove.addEventListener("click", removeCartItem)
// }

// function removeCartItem(e) {
//     let removeClick = e.target
//     removeClick.parentElement.parentElement.remove()
// }


// function updateTotalPrice() {
//     let cardRows = document.getElementsByClassName("cart-rows")
//     for (let i = 0; i < cardRows.length; i++) {
//         let cartRow = cardRows[i]
//         let priceElement = cartRow.getElementsByClassName("")
//     }
// }