//Render API data on screen and also add a button.
//when user click this button that object will show on console.
//Create an empty array and push that object in array and console it.


// const div = document.querySelector('#showData');

// axios.get('https://fakestoreapi.com/products')
// .then((res)=>{
//     // console.log(res.data);
//     for (let i = 0; i < res.data.length; i++) {
//         // console.log(res.data[i]);  
//         div.innerHTML += `title: ${res.data[i].title} <br/>
//         <button>click</button>
//         `
//     }
// }).catch((err)=>{
//     console.log(err);
// })


// app.js


// app.js
// app.js
const div = document.querySelector('#showData');
const clickedObjects = [];

axios.get('https://fakestoreapi.com/products')
  .then((res) => {
    console.log(res.data);
    for (let i = 0; i < res.data.length; i++) {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product');

      const productTitle = document.createElement('div');
      productTitle.classList.add('product-title');
      productTitle.textContent = res.data[i].title;

      const productImage = document.createElement('img');
      productImage.src = res.data[i].image;

      const productPrice = document.createElement('div');
      productPrice.classList.add('product-price');
      productPrice.textContent = `$${res.data[i].price}`;

      const showButton = document.createElement('button');
      showButton.classList.add('product-button');
      showButton.textContent = 'Show Details';

      showButton.addEventListener('click', (event) => {
        const index = i;
        const clickedObject = res.data[index];
        clickedObjects.push(clickedObject);
        console.log('Clicked Object:', clickedObject);
        console.log('Array of Clicked Objects:', clickedObjects);
      });

      productContainer.appendChild(productTitle);
      productContainer.appendChild(productImage);
      productContainer.appendChild(productPrice);
      productContainer.appendChild(showButton);

      div.appendChild(productContainer);
    }
  })
  .catch((err) => {
    console.log(err);
  });
