const url = "https://kea-alt-del.dk/t7/api/products/1553";
console.log("hello?");
fetch(url)
    .then((res) => res.json())
    .then((data) => showProduct(data));

function showProduct(product) {
    console.log(product);
    document.querySelector(".brandbio").textContent = product.brandbio;
    document.querySelector(".color").textContent = product.colour1;
    document.querySelector(".inventorynumber").textContent = product.id;
    document.querySelector(".priceproduct").textContent = product.price;
    document.querySelector(".producttitle").textContent = product.productdisplayname;
    document.querySelector("img.firstimage").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    document.querySelector("img.firstimage").alt = product.productdisplayname;
    document.querySelector("img.secondimage").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    document.querySelector("img.secondimage").alt = product.productdisplayname;
}