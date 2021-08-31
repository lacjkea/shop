const urlParams = new URLSearchParams(window.location.search);
const subcat = urlParams.get("subcategory");
const url = "https://kea-alt-del.dk/t7/api/products?subcategory=" + subcat;


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



    // 3.change the content 
    clone.querySelector("a").setAttribute("href", "product.html?id=" + product.id);
    clone.querySelector(".label").textContent = `${product.articletype} | ${product.brandname}`;
    clone.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
    clone.querySelector("img").alt = `${product.productdisplayname}`;
    clone.querySelector("h3").textContent = `${product.productdisplayname}`;
    clone.querySelector(".price span").textContent = `${product.price}`;

    // soldOut 
    if (product.soldout) {
        clone.querySelector("article").classList.add("soldOut");
    }
    // onSale
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