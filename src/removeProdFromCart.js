import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";


export const removeProdFromCart = (id)=>{
    let cartAddedProducts = getCartProductFromLS();
     let cartProducts = cartAddedProducts.filter((currProd)=>{
        return currProd.id!==id
     })
        console.log(cartProducts)
        
    /* update the localStorage after removing the item */
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));



    // to remove div the onclick
    let removeDiv = document.getElementById(`card${id}`);
    if(removeDiv){
        removeDiv.remove()
    }
    // show toast when product remove to the cart
    showToast("delete",id);
       
    updateCartValue(cartProducts);
    updateCartProductTotal();

}