import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

/* 
   to get the cart data from localStorage 
   to update the cart value and also to get the data always ready from localStorage
*/

getCartProductFromLS();

/* to add  data into localStorage */

export const homeAddToCard = (event, id, stock) => {
  let arrayLocalStorageProduct = getCartProductFromLS();
  console.log(arrayLocalStorageProduct);
  let currentProduct = document.getElementById(`card${id}`);
  let quantity = currentProduct.querySelector(".productQuantity").innerText;

  let price = currentProduct.querySelector(".productPrice").innerText;

  price = price.replace("₹", "");

  // check existing item
  let existingProduct = arrayLocalStorageProduct.find(
    (currentElem) => currentElem.id === id
  );
  console.log(existingProduct);

  quantity = Number(quantity);
  if (existingProduct && quantity > 1) {
    quantity = quantity + existingProduct.quantity;
    price = Number(price * quantity);
    let updateCart = { id, quantity, price };
    updateCart = arrayLocalStorageProduct.map((item) => {
      return item.id === id ? updateCart : item;
    });
    localStorage.setItem("cartProducts", JSON.stringify(updateCart));

    // show toast when product added to the cart
    showToast("add",id);
  }

  if (existingProduct) {
    console.log("no can added");
    return false;
  }
  quantity = Number(quantity);
  price = Number(price * quantity);
  arrayLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem(
    "cartProducts",
    JSON.stringify(arrayLocalStorageProduct)
  );

  // Update the cart button Value
  updateCartValue(arrayLocalStorageProduct);

  // show toast when product added to the cart
    showToast("add",id);
};
