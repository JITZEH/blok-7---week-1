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
	{name:'small', factor:0.6, img:'small.png', },
	{name:'kinder', factor:0.8, img:'kinder.png'},
	{name:'normal', factor:1, img:'normal.png'},
	{name:'medium', factor:1.2, img:'medium.png'},
	{name:'large', factor:1.4, img:'large.png'},
	{name:'kingsize', factor:2, img:'kingsize.png'}
]

const toppings = [
	{name: 'salami', price:50, img: 'salami.png'},
	{name: 'champignons', price:100, img: 'champignons.png'},
	{name: 'ananas', price:125, img: 'ananas.png'},
	{name: 'ham', price:60, img: 'ham.png'},
	{name: 'kaas', price:25, img: 'kaas.png'},
	{name: 'none', price:0, img: 'none.png'}
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
const templateSC = document.getElementById("templateSC"); 
const exitSC = document.getElementById("exitSC");
const newPizzaButton = document.getElementById("newPizza");
var buttonIndex = 0;
var buttonDiv = document.getElementsByClassName("addbutton")[buttonIndex];
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
    textDiv.innerHTML = object.name;
	priceDiv.innerHTML = priceCalc(object.price);
	imgDiv.src = 'img/'+object.img;
	const newTemplate = templateDiv.cloneNode(true);
	newTemplate.classList.remove("hidden");
	var cardGroup = arrayGenerator[pos].group;
	cardGroup.appendChild(newTemplate);
	addtoCartButton(object); 
}

function addtoCartButton(object) {
	buttonDiv.addEventListener('click', function(){
	}) ;
	buttonIndex+=1;
	cart.push(object);
	addItemToCart(object);
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