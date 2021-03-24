const cart = [];
const pizzas = [
	{name: 'Margherita', price:850, img: 'margherita.png', description: 'tomaat, mozzarella, basilicum'},
	{name: 'Marinara', price:750, img: 'marinara.png', description: 'tomaat, knoflook, olie en oregano (pas als de pizza uit de oven komt)'},
	{name: 'Quattro Formaggi', price:850, img: 'quattro-formaggi.png', description: 'gorgonzola, mozzarella, pecorino en taleggio. In Nederland wordt de pecorino en taleggio vaak vervangen door Parmezaanse kaas en gewone Hollandse (Goudse) kaas'},
	{name: 'Vegetariana', price:1140, img: 'vegetariana.png', description: 'tomaat, mozzarella, paprika en (gegrilde) courgette en aubergine. Soms ook broccoli of spinazie'},
	{name: 'Quattro Stagioni', price:1100, img: 'quattro-stagioni.png', description: 'tomaat, mozzarella, ham, champignons, olijven, artisjokken (soms doperwten in plaats van artisjok)'},
	{name: 'pannekoek', price:750, img: 'pannekoek.png', description: 'pannekoek zonder iets er op. helemaal kaal.'}
];

const sizes = [
{size:'small', factor:0.6, img:'small.png'},
{size:'kinder', factor:0.8, img:'kinder.png'},
{size:'normal', factor:1, img:'normal.png'},
{size:'medium', factor:1.2, img:'medium.png'},
{size:'large', factor:1.4, img:'large.png'},
{size:'kingsize', factor:2, img:'kingsize.png'}
]

const toppings = [
	{name: 'salami', price:50, img: 'salami.png'},
	{name: 'champignons', price:100, img: 'champignons.png'},
	{name: 'ananas', price:125, img: 'ananas.png'},
	{name: 'ham', price:60, img: 'ham.png'},
	{name: 'kaas', price:25, img: 'kaas.png'},
	{name: 'none', price:0, img: 'none.png'},
	]	
let cardsPizzas = document.getElementById("pizzas");
let cardsSizes = document.getElementById("sizes");
let cardsToppings = document.getElementById("toppings");
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
let nextPage = document.getElementById("nextpage");
let openSC = document.getElementById("openSC");
let openSC1 = document.getElementById("openSC1");
let sizeSC = document.getElementById("sizeSC");
let templateSC = document.getElementById("templateSC"); 
let exitButton = document.getElementById("exit");
buttonIndex = 0;
totalPrice.innerHTML = '€'+0+',-';

function priceCalc(price) {
return "€" + (price/100).toFixed(2);
}

function addSize() {
		
}



pizzas.forEach(element => {
	cloneCard(element)
	
});

function cloneCard(pizzacollection) {
	textDiv.innerHTML = pizzacollection.name;
	priceDiv.innerHTML= priceCalc(pizzacollection.price);
	imgDiv.src = 'img/'+pizzacollection.img;
	let newTemplate = templateDiv.cloneNode(true);
	newTemplate.classList.remove("hidden");
	cardsPizzas.appendChild(newTemplate);
	addButton(pizzacollection);
}

sizes.forEach(element2 => {
	cloneCard2(element2)
});

function cloneCard2(sizes) {
	cardDiv.classList.add("cardblue");
	cardDiv.classList.remove("cardsalmon");
	textDiv.innerHTML = sizes.size;
	priceDiv.innerHTML= '€'+(5*sizes.factor).toFixed(2); // 5 moet veranderd worden met de pizza prijs van de gesecelteerde pizza  //calcer
	imgDiv.style = "background-image: url('img/margherita.png'); background-size:cover;"; // img/margherita.png moet de aan geklikte pizza worden
	imgDiv.src = 'img/'+sizes.img;
	let newTemplate = templateDiv.cloneNode(true);
	newTemplate.classList.remove("hidden");
	cardsSizes.appendChild(newTemplate);
	addButton(sizes);
}

toppings.forEach(element3 => {
	cloneCard3(element3)
});
function cloneCard3(toppingcollection) {
	cardDiv.classList.add("cardyellow");
	cardDiv.classList.remove("cardblue");
	textDiv.innerHTML = toppingcollection.name;
	priceDiv.innerHTML= priceCalc(toppingcollection.price);
	imgDiv.src = 'img/'+toppingcollection.img;
	let newTemplate = templateDiv.cloneNode(true);
	newTemplate.classList.remove("hidden");
	cardsToppings.appendChild(newTemplate);
	addButton(toppingcollection);

}

// button
function addButton(object) {
	var buttonDiv = document.getElementsByClassName("addbutton")[buttonIndex];
	buttonDiv.addEventListener('click', function(){
		test634(object);
	}) ;
	buttonIndex+=1;
}
 
//navigation
var up = 0;
var pageup = [cardsPizzas, cardsSizes, cardsToppings];

nextPage.addEventListener('click', nextPage2);
function nextPage2(){
var test = pageup[up+=1];
var test2 = pageup[up-1];
test.classList.remove("hidden");
test2.classList.add("hidden")
if (up == 2) {
	nextPage.classList.add('hidden');
	openSC.classList.remove('hidden');
	totalShoppingcart();
}}
//navigation

/*   
selected verzamelen
in een object zetten
in cart gooien
*/
var item = [];
function test634 (object) {
 	
}


// shoppingcart
function addToCart(object) {
	var price = 0;
	price+=object.price;
	cart.push(object);
	let ultraprice = priceCalc(price);	
	document.getElementById("priceall").lastChild.innerHTML = ultraprice ;
	addItemToCart(object);
	totalShoppingcart(ultraprice);
	templateSC.classList.remove("hidden");
}

openSC.addEventListener('click', shoppingcart);
openSC1.addEventListener('click', shoppingcart);
function shoppingcart() {
	document.getElementById("shoppingcart").classList.remove("hidden");	
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

exit.addEventListener('click', exitShoppingcart);
function exitShoppingcart() {
	shoppingCart.classList.add("hidden");
}


function totalShoppingcart(price) {
if (checkBox.checked == true){
  	totalPrice.innerHTML = (price - 2);
	console.log('deze function werkt');  
  } else {
	totalPrice.innerHTML = price;
  }

}
