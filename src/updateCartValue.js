
let cartValue = document.getElementById('cartValue');

export const updateCartValue = (arrayLocalStorageProduct) =>{
    console.log(typeof arrayLocalStorageProduct)
    let length = Array.isArray(arrayLocalStorageProduct) 
        ? arrayLocalStorageProduct.length 
        : JSON.parse(arrayLocalStorageProduct || '[]').length;
    console.log(length)
    cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${length} </i> `

}