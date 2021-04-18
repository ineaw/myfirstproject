const url = "https://ineaw.no/rainydays/wp-json/wc/store/products/";

// const key = "consumer_key=ck_805849d86188f7b6115b02b0f46312c46a13276f";
// const secret = "consumer_secret=cs_9d27e84f1790c49225ddd52f201a93dc7b59cc63";

// const url = `${api}?${key}&${secret}`;

const productContainer = document.querySelector(".new-products");

async function getProducts() {
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);
  } catch (error) {
    console.log(error);
    productContainer.innerHTML = message("An error occurred when when try to load the", error);
  }
}

getProducts();

function createHTML(products) {
  console.log(products);

  products.forEach(function (product) {
    productContainer.innerHTML += `
    <div class="newPurple">
    <a href="product.html?id=${product.id}">
    <img src="${product.images[0].src}" alt="Image of product${product.name}">
    </a>

    <h3>${product.name}</h3>
      <a href="product.html?id=${product.id}" class="item buy-now">See more</a> 
   </div> `;
  });
}
