const url = "https://kea-alt-del.dk/t7/api/products";

fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        showList(data);
    })

function showList(data) {
    // console.log(data);
    data.forEach(showProduct);
}

function showProduct(product) {
    console.log(product);
    // 1.grab the template
    const template = document.querySelector("#inStocktemplate").content;

    // 2.clone it 
    const clone = template.cloneNode(true);



    // 3.changge the content 
    clone.querySelector("a").setAttribute("href", "product.html?id=" + product.id);
    clone.querySelector(".label").textContent = `${product.articletype} | ${product.brandname}`;
    clone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    clone.querySelector("img").alt = `${product.productdisplayname}`;
    clone.querySelector("h3").textContent = `${product.productdisplayname}`;
    clone.querySelector(".price span").textContent = `${product.price}`;

    // soldOut onSale

    if (product.soldout) {
        clone.querySelector("article").classList.add("soldOut");
    }
    if (product.discount) {
        clone.querySelector("article").classList.add("onSale");
        console.log(clone);
        clone.querySelector(".onSale", "::before").setAttribute("content", product.discount);

    }
    clone.querySelector(".discounted span").textContent = ((product.discount / 100) * product.price);

    // 4.grab the parent
    const parent = document.querySelector("main");
    // 5.append 
    parent.appendChild(clone);
}




/* <article class="inStock">
<a href="product.html"><img href="index.html" src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp"
<div class="infobox">

    <span>Originally</span>DKK 1595,-</p>
    <div class="discounted">
        Now DKK 1560,-</div>
</div>
</article> */