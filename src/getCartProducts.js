import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = ()=>{
    let cartProducts = localStorage.getItem("cartProducts");
    console.log(cartProducts)
    
    if(!cartProducts){
        return [];
    }

    updateCartValue(cartProducts);

    cartProducts = JSON.parse(cartProducts)
    return cartProducts;
}