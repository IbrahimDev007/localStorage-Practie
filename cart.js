const addProduct = () => {
    const product = document.getElementById('product_id').value;
    const quantity = document.getElementById('quantity_id').value;
    document.getElementById('product_id').value = '';
    document.getElementById('quantity_id').value = ``;
    showproduct(
        product, quantity
    );
    saveProductLocal(product,quantity);
}
const showproduct =(product,quantity)=>{
    const li=document.createElement('li');
    li.innerText=`${product} ${quantity}`
    const ul_container=document.getElementById("product_container");
    ul_container.appendChild(li);
}
const getshopingCart=()=>{
    const storeCart=localStorage.getItem('cart');
    let cart={};
    if(storeCart){
        cart=JSON.parse(storeCart);
        return cart;

    }
    else{
        return cart;
    }

}

const saveProductLocal=(product,quantity)=>{
let cart=getshopingCart();
console.log(cart);
cart[product]=quantity;
const cartStringifyed=JSON.stringify(cart);
console.log(cartStringifyed);
localStorage.setItem('cart',cartStringifyed)
}

const displayLocalStorageItem=()=>{
    const data=getshopingCart();
    for (product in data){
        console.log(product ,data[product]);
        showproduct(product,data[product])
    }
}
displayLocalStorageItem();