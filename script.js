
fetch('https://dummyjson.com/products')
  .then(response => response.json())
  .then(data => {
    const productContainer = document.getElementById('productContainer');
    let newHtml= data.products.map((products)=>
    {
      return `
        <div class="product-item">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>ID: ${product.id}</p>
          <p>Price: $${product.price}</p>
          <p>Discount: ${product.discount}%</p>
          <p>Stock: ${product.stock}</p>
        </div>
      `;
    });
     productContainer.innerHTML= newHtml;
  });