
var addToCartBtn = document.getElementsByClassName('btn-primary')
var cartContainer = document.getElementsByTagName('table')[0]
var itemQuantity = document.getElementsByClassName('num')
var deleteBtn = document.getElementsByClassName('btn-danger')



for (let i = 0; i < addToCartBtn.length; i++){
    addToCartBtn[i].addEventListener('click', addToCart)
}

for (let i = 0; i < deleteBtn.length; i++){
    deleteBtn[i].addEventListener('click', deleteCart)
}


function addToCart(event){

    let itemContainer = document.createElement('tr')
    let btn = event.target
    let btnParent = btn.parentElement
    let itemImage = btnParent.children[0].src
    let itemName = btnParent.children[1].innerText
    let itemPrice =btnParent.children[2].innerText

    itemContainer.innerHTML = `
    
    <td><img src=${itemImage} class="cartImg" alt="T's" height="100"></td>
    <td><h3 class="Item-name">${itemName}</h3></td>
    <td><h4 class="Item-Price">${itemPrice}</h4></td>
    <td><input type = 'number' class = 'num' value = '1'></td>  
    <td><h4 class="Total-Price">${itemPrice}</h4></td>
    <td><button class="btn btn-danger" type= "buttom">Remove Item</button></td> 
    
`
    cartContainer.append(itemContainer)


    for (let i = 0; i < itemQuantity.length; i++){
        itemQuantity[i].addEventListener('change', totalCost)
    }

    for (let i = 0; i < deleteBtn.length; i++){
        deleteBtn[i].addEventListener('click', deleteCart)
    }

    totalCartPrice()
}


function totalCost(event){
    let quantity = event.target
    quantityParent = quantity.parentElement.parentElement
    price = quantityParent.getElementsByClassName('Item-Price')[0]
    totalPrice = quantityParent.getElementsByClassName('Total-Price')[0]
    priceContent = price.innerText.replace('$', '') 
    totalPrice.innerText = '$' + quantity.value * priceContent
    totalCartPrice()
    if(isNaN(quantity.value)|| quantity.value <= 0){
        quantity.value = 1
        totalPrice.innerText = '$' + quantity.value * priceContent
        totalCartPrice()
    }
}


function totalCartPrice() {
    let total = 0
    let grandTotal = document.getElementsByClassName('Alltime-Price')[0]
    let allPrice_Fields = document.getElementsByClassName('Total-Price')
    for (let i = 0; i < allPrice_Fields.length; i++){
        all_prices = Number(allPrice_Fields[i].innerText.replace('$', ''))
        total+=all_prices
    }
    grandTotal.innerText= '$'+total
}



function deleteCart(event){
        delBtn = event.target
        delBtn_Parent = delBtn.parentElement.parentElement
        delBtn_Parent.remove()
        totalCartPrice()
    
} 


function colorIt(id) {
    //var likeBtn = document.getElementById(id).setAttribute("class", "fas fa-heart");
    var likeBtn = document.getElementById(id)
    if(likeBtn.classList.contains("far")){
        likeBtn.classList.remove("far");
        likeBtn.classList.add("fas");
    }else{
        likeBtn.classList.remove("fas");
        likeBtn.classList.add("far");
    }
}