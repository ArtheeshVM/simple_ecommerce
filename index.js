// function changeCart(n){
//     document.getElementsByClassName("cart")[n].innerHTML="Added to cart";
// }

function addToCart(name,price,image){
    const product={
        name,
        price,
        image,
        quantity:1
    };

    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex=cart.findIndex(item=>item.name===name);
    if(existingProductIndex!==-1){
        cart[existingProductIndex].quantity+=1;
    }
    else{
        cart.push(product);
    }

    localStorage.setItem("cart",JSON.stringify(cart));
    

    alert(`${name} added to cart!`);
}

document.getElementById("searchInput").addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    const products = document.querySelectorAll(".product_image");

    products.forEach(product => {
      const name = product.querySelector(".product_description").textContent.toLowerCase();
      if (name.includes(searchValue)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });