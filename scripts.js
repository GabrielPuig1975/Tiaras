
const faBars = document.querySelector('.fa-bars');
const hideList = document.querySelector('.hideList');

faBars.addEventListener('click', ()=> {
   hideList.classList.toggle('show');
})


const productList = [];

productList.push({
   image: './images/tiara1.jpg',
   price: "USD 9,00",
   descrip: "Conjunto de Tiara en perlas y plata. Boutonniere de acompañante de regalo!!"
});

productList.push({
   image: './images/tiarabeige.jpeg',
   price: "USD 9,00",
   descrip: "Conjunto en perlas beige y plata. Boutonniere de acompañante de regalo!!"
});

productList.push({
   image: './images/tiaraBlack&white.jpeg',
   price: "USD 9,00",
   descrip: "Conjunto B&W. Boutonniere de acompañante de regalo!!"
});

const cardContainer = document.querySelector('.cards-container');
const productCard = document.querySelector('.product-card');

function renderProducts(arr) {
   
   for(product of productList) {

      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      const imgs = document.createElement('img');
      imgs.setAttribute('src', product.image);
      productCard.appendChild(imgs);
      
      const divInfo = document.createElement('div');
      divInfo.classList.add('product-info');
      productCard.appendChild(divInfo)
      
      //Div intermedio

      const divHalfInfo = document.createElement('div');
      divInfo.appendChild(divHalfInfo);

      const priceInfo = document.createElement('p');
      priceInfo.innerText = product.price ;
      divHalfInfo.appendChild(priceInfo);

      divHalfInfo.appendChild(priceInfo);
      
      const infoDescription = document.createElement('p');
      infoDescription.innerText = product.descrip;

      divHalfInfo.appendChild(infoDescription);
      
      const cartImgCont = document.createElement('figure');
      
      const cartImg = document.createElement('img');
      cartImg.src="./icons/bt_add_to_cart.svg";
      cartImgCont.appendChild(cartImg);
      
      divInfo.appendChild(cartImgCont);

      productCard.appendChild(divInfo);

      //General
      cardContainer.appendChild(productCard);
      
   }
}
      renderProducts(productList);









