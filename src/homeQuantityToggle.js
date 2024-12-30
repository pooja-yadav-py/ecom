export const homeQuantityToggle = (event, id, stock)=>{
    console.log(event.target)
    const currentCardElement = document.querySelector(`#card${id}`)
    console.log(currentCardElement)
    const productQuantity = currentCardElement.querySelector('.productQuantity');

    let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

    if(event.target.className === "cartIncrement"){
        if(quantity < stock){
            quantity = quantity+1;
        }else if(quantity === stock){
            quantity = stock;
        }
    }
    if(event.target.className === "cartDecrement"){
        if(quantity>1){
            quantity = quantity-1
        }
    }

    productQuantity.innerText = quantity;
    productQuantity.setAttribute("data-quantity",quantity);

}