const productContainer = document.getElementById("product-container");

export async function renderProducts() {
  const data = await fetch("/api/productos");

  const products = await data.json();

  productContainer.innerHTML = "";

//   products.forEach(product => {
//       productContainer.innerHTML += `
//           <tr>
//               <td>${product.title}</td>
//               <td>$ ${product.price}</td>
//               <td><img src="${product.image}" alt="${product.title}"></td>
//           </tr>
//       `;
//   });


  products.map((p, i) => {
    productContainer.innerHTML +=
        `<tr>
            <td>${p.title}</td>
            <td>$ ${p.price}</td>
            <td><img src="${p.image}" alt="${p.title}"></td>
        </tr>
        `
  });

}

renderProducts();
