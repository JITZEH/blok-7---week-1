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
var buttonIndex = 0;
var buttonDiv = document.getElementsByClassName("addbutton")[buttonIndex];
var arrayGend;
var colorOfCard;
const arrayGenerator = [
	{array:pizzas, color:'cardsalmon'},
	{array:sizes, color:'cardblue'},
	{array:toppings, color:'cardyellow'}];

 var currentArrayIndex = 0;
SwitchPage();


nextPage.addEventListener('click', SwitchPage);
function SwitchPage() {
    colorOfCard = arrayGenerator[currentArrayIndex].color;
    arrayGenerator[currentArrayIndex].array.forEach(object => {
		CreateCards(object)
	});
	
	console.log(currentArrayIndex-2);
	if (currentArrayIndex < 0) {
		var testg = document.getElementsByClassName("'"+arrayGenerator[currentArrayIndex-1].color+"'") 
		testg.classList.add('hidden');
	}
	currentArrayIndex++;
	
}

function CreateCards(object) {
	console.log(object);
    cardDiv.classList.add(colorOfCard);
    textDiv.innerHTML = object.name;
	priceDiv.innerHTML= PriceCalc(object.price);
	imgDiv.src = 'img/'+object.img;
	let newTemplate = templateDiv.cloneNode(true);
	newTemplate.classList.remove("hidden");
	cardsPizzas.appendChild(newTemplate);
	AddButton(object); 
	console.log('kleur van de kaart = '+colorOfCard);
}

function AddButton(object) {
	buttonDiv.addEventListener('click', function(){
	}) ;
	buttonIndex+=1;
}
function PriceCalc(price) {
    return "€" + (price/100).toFixed(2);
    }

