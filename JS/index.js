var products = [];
var serchproduct = [];
var mainIndex;
var product = {};

if (localStorage.getItem("products") != null) {
  products = JSON.parse(localStorage.getItem("products"));
  displayproduct(products);
} else {
  products = [];
}

function addProduct() {
  product = {
    productName: document.getElementById("product-name-input").value,
    productprice: document.getElementById("product-price-input").value,
    productcategory: document.getElementById("product-category-input").value,
    productdescription: document.getElementById("product-description-input")
      .value,
    id: Date.now(),
  };
  if (addproduct.innerHTML == "Add Product") {
    products.push(product);
  } else {
    // console.log(mainIndex);
    products.splice(mainIndex, 1, product);
    document.getElementById("addproduct").innerHTML = "Add Product";
  }
  // console.log(product.id);
  displayproduct(products);
  cleardata();
}

function displayproduct(array) {
  var productCiontainer = "";

  for (var i = 0; i < array.length; i++) {
    productCiontainer += `<tr>
    <td>${i}</td>
    <td>${array[i].productName}</td>
    <td>${array[i].productprice}</td>
    <td>${array[i].productcategory}</td>
    <td>${array[i].productdescription}</td>
    <td><button onclick="updateproduct(${array[i].id})" class="btn btn-outline-warning">update</button></td>
    <td><button onclick="deleteproduct(${array[i].id})" class="btn btn-outline-danger">delete</button></td>
    </tr>`;
  }
  document.getElementById("table-body").innerHTML = productCiontainer;
  localStorage.setItem("products", JSON.stringify(products));
}

function deleteproduct(id) {
  for (var i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      products.splice(i, 1);
    }
  }
  displayproduct(products);
}

function updateproduct(id) {
  document.getElementById("addproduct").innerHTML = "Update Product";

  for (var i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      mainIndex = i;
    }
  }

  document.getElementById("product-name-input").value =
    products[mainIndex].productName;
  document.getElementById("product-price-input").value =
    products[mainIndex].productprice;
  document.getElementById("product-category-input").value =
    products[mainIndex].productcategory;
  document.getElementById("product-description-input").value =
    products[mainIndex].productdescription;
}

function cleardata() {
  document.getElementById("product-name-input").value = "";
  document.getElementById("product-price-input").value = "";
  document.getElementById("product-category-input").value = "";
  document.getElementById("product-description-input").value = "";
}

function findproduct(term) {
  serchproduct = [];
  for (var i = 0; i < products.length; i++) {
    if (
      products[i].productName.toLowerCase().includes(term.toLowerCase()) == true
    ) {
      serchproduct.push(products[i]);
      // console.log(serchproduct);
    }
  }

  displayproduct(serchproduct);
}
