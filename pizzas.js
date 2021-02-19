var cart = [];
const pizzas = [
	{name: 'Margherita', price:850, img: 'margherita.png', description: 'tomaat, mozzarella, basilicum'},
	{name: 'Marinara', price:750, img: 'marinara.png', description: 'tomaat, knoflook, olie en oregano (pas als de pizza uit de oven komt)'},
	{name: 'Quattro Formaggi', price:850, img: 'quattro-formaggi.png', description: 'gorgonzola, mozzarella, pecorino en taleggio. In Nederland wordt de pecorino en taleggio vaak vervangen door Parmezaanse kaas en gewone Hollandse (Goudse) kaas'},
	{name: 'Vegetariana', price:1140, img: 'vegetariana.png', description: 'tomaat, mozzarella, paprika en (gegrilde) courgette en aubergine. Soms ook broccoli of spinazie'},
	{name: 'Quattro Stagioni', price:1100, img: 'quattro-stagioni.png', description: 'tomaat, mozzarella, ham, champignons, olijven, artisjokken (soms doperwten in plaats van artisjok)'},
	{name: 'pannekoek', price:750, img: 'pannekoek.png', description: 'pannekoek zonder iets er op. helemaal kaal.'}
];

const sizes = [
{size:'normal', factor:1},
{size:'medium', factor:1.2},
{size:'large', factor:1.4},
{size:'kingsize', factor:2}
]

toppings = [
	{name: 'salami', price:50, img: 'salami.png'},
	{name: 'champignons', price:100, img: 'champignons.png'},
	{name: 'ananas', price:125, img: 'ananas.png'},
	{name: 'ham', price:60, img: 'ham.png'},
	{name: 'kaas', price:25, img: 'kaas.png'},
	{name: 'ananas', price:125, img: 'ananas.png'},
	]	
let cardsDiv = document.getElementById("pizzas");
let cardsDiv2 = document.getElementById("toppings");
let templateDiv = document.getElementById("template");
let imgDiv = document.getElementsByClassName("card-img-top")[0];
let textDiv = document.getElementsByClassName("card-text")[0];
let priceDiv = document.getElementsByClassName("price")[0];
let cardDiv = document.getElementsByClassName("card")[0];
let shopImg = document.getElementById("shopimg");
let shopName = document.getElementById("shopname");
let shopMuch = document.getElementById("shopmuch");
let	shopPrice = document.getElementById("shopprice");
let shoppingCart = document.getElementById("shoppingcart");
let checkBox = document.getElementById("checkbox");
let totalPrice = document.getElementById("totalprice");
var buttonIndex = 0;

pizzas.forEach(element => {
	cloneCard(element)
	
});

function cloneCard(pizzacollection) {
	
	let prices = (pizzacollection.price / 100);
	textDiv.innerHTML = pizzacollection.name;
	priceDiv.innerHTML= '€'+prices.toFixed(2);
	imgDiv.src = 'img/'+pizzacollection.img;
	let newTemplate = templateDiv.cloneNode(true);
	newTemplate.classList.remove("hidden");
	cardsDiv.appendChild(newTemplate);
	addButton(pizzacollection);
}

toppings.forEach(element2 => {
	cloneCard2(element2)
});
function cloneCard2(toppingcollection) {
		cardDiv.classList.add("cardyellow");
	cardDiv.classList.remove("cardsalmon");
	let prices = (toppingcollection.price / 100);
	textDiv.innerHTML = toppingcollection.name;
	priceDiv.innerHTML= '€'+prices.toFixed(2);
	imgDiv.src = 'img/'+toppingcollection.img;
	let newTemplate = templateDiv.cloneNode(true);
	newTemplate.classList.remove("hidden");
	cardsDiv2.appendChild(newTemplate);
	addButton(toppingcollection);

}

// button
function addButton(pizza) {
	var buttonDiv = document.getElementsByClassName("addbutton")[buttonIndex];
	buttonDiv.addEventListener('click', function(){
		addToCart(pizza);
		cardsDiv2.classList.remove("hidden");
		cardsDiv.classList.add("hidden");
	}) ;
	buttonIndex+=1;
}
 

// shoppingcart

function addToCart(pizza) {
	var price = 0;
	price+=pizza.price ;
	cart.push(pizza);
	let ultraprice = price.toFixed(2);	
	document.getElementById("priceall").lastChild.innerHTML = '€'+ultraprice ;
	shopCart(pizza);

}


function shoppingcart() {
	document.getElementById("shoppingcart").classList.remove("hidden");
	totalShoppingcart();
}

function shopCart(pizza) {
	shopImg.src = 'img/'+pizza.img;
	shopName.innerHTML = pizza.name ;
	shopMuch.innerHTML = 'hoeveel';
	shopPrice.innerHTML= pizza.price;
	let newTemplateSC = document.getElementById('templateSC').cloneNode(true);
	document.getElementById('templateSC').classList.add("hidden");
	document.getElementById('SCelements').appendChild(newTemplateSC);
}

function exitShoppingcart() {
	shoppingCart.classList.add("hidden");
}


function totalShoppingcart() {
	
if (checkBox.checked == true){
  	totalPrice.innerHTML = '€' +(cart - 2);
	console.log('deze function werkt');  
  } else {
	totalPrice.innerHTML = '€'+price;
  }

}

