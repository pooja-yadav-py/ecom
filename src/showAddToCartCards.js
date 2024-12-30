import  products  from '../api/products.json';
import { getCartProductFromLS } from './getCartProducts';
import { incrementDecrement } from './incrementDecrement';
import { removeProdFromCart } from './removeProdFromCart';
import { updateCartProductTotal } from './updateCartProductTotal';

let cartAddedProducts = getCartProductFromLS();

let filterProducts = products.filter((currProduct)=>{
    return cartAddedProducts.some((currElem) => currElem.id === currProduct.id)
})


console.log(filterProducts)

/* ===========to update the addToCart Page================= */

const templateContainer = document.getElementById('productCartTemplate');
const cartElement = document.getElementById('productCartContainer');



const showCartProduct = () =>{
    filterProducts.forEach((currProd)=>{
        const { category, id, image, name, stock, price } = currProd;
        let productClone = document.importNode(templateContainer.content, true);
        

        productClone.querySelector('#cardValue').setAttribute("id", `card${id}`);

        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productImage').src = image;
        let LSActualData = cartAddedProducts.find((item)=>item.id === id);
        productClone.querySelector('.productPrice').textContent = LSActualData.price;
        productClone.querySelector('.productQuantity').textContent = LSActualData.quantity;

        /* handle increment and decrement button  */

        productClone.querySelector('.stockElement').addEventListener('click',(event)=>{ incrementDecrement( event, id, stock, price )})


        productClone.querySelector('.remove-to-cart-button').addEventListener('click',()=>removeProdFromCart(id)
    )
        
        cartElement.appendChild(productClone);
    })
}

/* =================showing the cart Product====================== */

showCartProduct();

// -----------------------------------------------------
  // calculating the card total in our cartProducts page
  // --------------------------------------------------------
  updateCartProductTotal();
