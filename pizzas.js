//vars
var cart = 0;
// pizza's
pizzas = [
	{name: 'Margherita', price:850, img: 'margherita.png', description: 'tomaat, mozzarella, basilicum'},
	{name: 'Marinara', price:750, img: 'marinara.png', description: 'tomaat, knoflook, olie en oregano (pas als de pizza uit de oven komt)'},
	{name: 'Quattro Formaggi', price:850, img: 'quattro-formaggi.png', description: 'gorgonzola, mozzarella, pecorino en taleggio. In Nederland wordt de pecorino en taleggio vaak vervangen door Parmezaanse kaas en gewone Hollandse (Goudse) kaas'},
	{name: 'Vegetariana', price:1140, img: 'vegetariana.png', description: 'tomaat, mozzarella, paprika en (gegrilde) courgette en aubergine. Soms ook broccoli of spinazie'},
	{name: 'Quattro Stagioni', price:1100, img: 'quattro-stagioni.png', description: 'tomaat, mozzarella, ham, champignons, olijven, artisjokken (soms doperwten in plaats van artisjok)'},
	{name: 'pannekoek', price:750, img: 'pannekoek.png', description: 'pannekoek zonder iets er op. helemaal kaal.'}
]
function pizzascards(i) {
		let pricepizza = (pizzas[i].price / 100).toFixed(2);
  		document.getElementById("pizzas").innerHTML += 
  		 
  		"<div class='col-6 col-sm-2'>"+
  		"<div class='card card2' style='width: 18rem;'>" +
		"<img src='img/"+pizzas[i].img+"' class='card-img-top' alt='...''>" +
   		"<div class='card-body'>" + 
   		"<p class='card-text'>"+pizzas[i].name+"</p>" +"<br/><div class='price'>"+'€'+pricepizza+'</div>'+
   		"<button class='addbutton' onclick='addToCart("+pricepizza+");'>+</button>"+
   		"</div></div>";
  		
	}   

for (var i = pizzas.length - 1; i >= 0; i--) {
 	pizzascards(i);
 		// console.log(pizzas[i]);
}
// toppings
toppings = [
	{name: 'salami', price:50, img: 'salami.png'},
	{name: 'paprika', price:75, img: 'paprika.png'},
	{name: 'champignons', price:100, img: 'champignons.png'},
	{name: 'ananas', price:125, img: 'ananas.png'},
	{name: 'ham', price:60, img: 'ham.png'},
	{name: 'kaas', price:25, img: 'kaas.png'},
	]	


function toppingscards(t) {
		let pricetopping = (toppings[t].price / 100).toFixed(2);
  		document.getElementById("toppings").innerHTML += 
  		 
  		"<div class='col-6 col-sm-2'>"+
  		"<div class='card card3' style='width: 18rem;'>" +
		"<img src='img/"+toppings[t].img+"' class='card-img-top' alt='...''>" +
   		"<div class='card-body'>" + 
   		"<p class='card-text'>"+toppings[t].name+"</p>" +"<br/><div class='price'>"+'€'+pricetopping+'</div>'+
   		"<button class='addbutton' onclick='addToCart("+pricetopping+");'>+</button>"+
   		"</div></div>";
  		
	}   

for (var t = toppings.length - 1; t >= 0; t--) {
 	toppingscards(t);
 		// console.log(toppings[t]);
}

// shoppingcart

function addToCart(prices) {
	cart+=prices 	
// console.log(cart);
document.getElementById("priceall").innerHTML = '€'+cart.toFixed(2)+'<img src="img/shopping-cart.png">' ;
}

