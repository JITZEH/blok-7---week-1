var cart = [];
const pizzas = [
	{name: 'Margherita', price:850, img: 'margherita.png'},
	{name: 'Marinara', price:750, img: 'marinara.png'},
	{name: 'Quattro Formaggi', price:850, img: 'quattro-formaggi.png'},
	{name: 'Vegetariana', price:1140, img: 'vegetariana.png'},
	{name: 'Quattro Stagioni', price:1100, img: 'quattro-stagioni.png'},
	{name: 'pannekoek', price:750, img: 'pannekoek.png'}
];

const sizes = [
	{size:'small', factor:0.6, img:'small.png', },
	{size:'kinder', factor:0.8, img:'kinder.png'},
	{size:'normal', factor:1, img:'normal.png'},
	{size:'medium', factor:1.2, img:'medium.png'},
	{size:'large', factor:1.4, img:'large.png'},
	{size:'kingsize', factor:2, img:'kingsize.png'}
]

const toppings = [
	{topping: 'salami', price:50, img: 'salami.png'},
	{topping: 'champignons', price:100, img: 'champignons.png'},
	{topping: 'ananas', price:125, img: 'ananas.png'},
	{topping: 'ham', price:60, img: 'ham.png'},
	{topping: 'kaas', price:25, img: 'kaas.png'},
	{topping: 'none', price:0, img: 'none.png'}
	]	
const cardsPizzas = document.getElementById("pizzas");
const cardsSizes = document.getElementById("sizes");
const cardsToppings = document.getElementById("toppings");
const templateDiv = document.getElementById("template");
const imgDiv = document.getElementsByClassName("card-img-top")[0];
const textDiv = document.getElementsByClassName("card-text")[0];
const priceDiv = document.getElementsByClassName("price")[0];
const cardDiv = document.getElementsByClassName("card")[0];
const shopImg = document.getElementById("shopimg");
const shopName = document.getElementById("shopname");
const shopMuch = document.getElementById("shopmuch");
const shopPrice = document.getElementById("shopprice");
const shoppingCart = document.getElementById("shoppingcart");
const checkBox = document.getElementById("checkbox");
const totalPrice = document.getElementById("totalprice");
const nextPageButton = document.getElementById("nextpage");
const openSC = document.getElementById("openSC");
const openSCimg = document.getElementById("openSCimg");                               
const sizeSC = document.getElementById("sizeSC");
const toppingSC = document.getElementById("toppingSC");
const templateSC = document.getElementById("templateSC"); 
const exitSC = document.getElementById("exitSC");
const newPizzaButton = document.getElementById("newPizza");

var colorOfCard;
const arrayGenerator = [
	{group:cardsPizzas, array:pizzas, color:'cardsalmon'},
	{group:cardsSizes, array:sizes, color:'cardblue'},
	{group:cardsToppings, array:toppings, color:'cardyellow'}];

 var currentArrayIndex = 0;

for (let pos = 0; pos < arrayGenerator.length; pos++) {
	colorOfCard = arrayGenerator[pos].color;
    arrayGenerator[pos].array.forEach(object => {
		createCards(object, pos)
	});	
}


showCardGroup();
nextPageButton.addEventListener('click', showCardGroup);
function showCardGroup() {
	if (currentArrayIndex > 0 ) {
		arrayGenerator[currentArrayIndex].group.classList.remove('hidden');
		arrayGenerator[currentArrayIndex-1].group.classList.add('hidden');
	}
	currentArrayIndex++;
	if (currentArrayIndex == arrayGenerator.length) {
		openSC.classList.remove("hidden");
		nextPageButton.classList.add("hidden");
		openSC.addEventListener('click', showShoppingCart);
		
	}
}
openSCimg.addEventListener('click', showShoppingCart);
function showShoppingCart() {
	shoppingCart.classList.remove("hidden");
}

exitSC.addEventListener('click', hideShoppingCart);
function hideShoppingCart() {
	shoppingCart.classList.add("hidden");
}

function createCards(object, pos) {
    cardDiv.classList.add(colorOfCard);
    textDiv.innerHTML = object.name || object.size || object.topping;
	priceDiv.innerHTML = priceCalc(object.price);
	imgDiv.src = 'img/'+object.img;
	
	const newTemplate = templateDiv.cloneNode(true);
	newTemplate.classList.remove("hidden");
	
	var cardGroup = arrayGenerator[pos].group;
	cardGroup.appendChild(newTemplate);
	
	let addButton = newTemplate.getElementsByClassName('addButton')[0];
	addButton.addEventListener('click', addtoCartButton);
	if (object.name == undefined) {
		addButton.dataset.pizzaSize = object.size;
		addButton.dataset.pizzaFactor = object.factor;
		addButton.dataset.pizzaTopping = object.topping;	
	}
	else{
		addButton.dataset.pizzaName = object.name;
		addButton.dataset.pizzaPrice = priceCalc(object.price);
		addButton.dataset.pizzaImg = object.img;
	}
}
function addtoCartButton() {
	 console.log(
		 {name:this.dataset.pizzaName, img:this.dataset.pizzaImg, price:this.dataset.pizzaPrice, factor:this.dataset.pizzaFactor, size:this.dataset.pizzaSize, topping:this.dataset.pizzaTopping}
	 )
}

function addItemToCart(object) {
	shopImg.src = 'img/'+object.img;
	shopName.innerHTML = object.name ;
	shopMuch.innerHTML = 'hoeveel';
	shopPrice.innerHTML= '€'+priceCalc(object.price);
	sizeSC.innerHTML = 'pizza.size';
	let newTemplateSC = document.getElementById('templateSC').cloneNode(true);
	document.getElementById('templateSC').classList.add("hidden");
	document.getElementById('SCelements').appendChild(newTemplateSC);
}


function priceCalc(price) {
    return "€" + (price/100).toFixed(2);
    }

	newPizzaButton.addEventListener('click', createANewPizza);
function createANewPizza() {
	arrayGenerator[currentArrayIndex-1].group.classList.add('hidden');
	currentArrayIndex = 0;
	arrayGenerator[currentArrayIndex].group.classList.remove('hidden');
	currentArrayIndex = 1;
	openSC.classList.add("hidden");
	nextPageButton.classList.remove("hidden");
	openSC.addEventListener('click', showShoppingCart);
		
}