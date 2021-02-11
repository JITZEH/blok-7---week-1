pizzas = [
	{name: 'Margherita', price:850, img: 'margherita.png', description: 'tomaat, mozzarella, basilicum'},
	{name: 'Marinara', price:750, img: 'marinara.png', description: 'tomaat, knoflook, olie en oregano (pas als de pizza uit de oven komt)'},
	{name: 'Quattro Formaggi', price:850, img: 'quattro-formaggi.png', description: 'gorgonzola, mozzarella, pecorino en taleggio. In Nederland wordt de pecorino en taleggio vaak vervangen door Parmezaanse kaas en gewone Hollandse (Goudse) kaas'},
	{name: 'Vegetariana', price:1140, img: 'vegetariana.png', description: 'tomaat, mozzarella, paprika en (gegrilde) courgette en aubergine. Soms ook broccoli of spinazie'},
	{name: 'Quattro Stagioni', price:1100, img: 'quattro-stagioni.png', description: 'tomaat, mozzarella, ham, champignons, olijven, artisjokken (soms doperwten in plaats van artisjok)'}
]

// for (var i = pizzas.length - 1; i >= 0; i--) {
// 	function myFunction() {
// 		let pricepizza = pizzas[i].price/100;
//   		document.getElementById("pizzas").innerHTML += 
  		 

//   		"<img class='pizzaimg' src='img/"+pizzas[i].img+"'>"+
//    		'<br/>' +
//   		pizzas[i].name + 
//   		'&nbsp;'+
//   		'-' +
//   		'&nbsp;'+
//   		'€' +
//   		pricepizza.toFixed(2) +
// 		'<br/>';
// 	}
function myFunction(i) {
		let pricepizza = pizzas[i].price / 100;
  		document.getElementById("pizzas").innerHTML += 
  		 
  		"<div class='col-6 col-sm-2'>"+
  		"<div class='card card2' style='width: 18rem;'>" +
		"<img src='img/"+pizzas[i].img+"' class='card-img-top' alt='...''>" +
   		"<div class='card-body'>" + 
   		"<p class='card-text'>"+pizzas[i].name+'&nbsp;'+'€'+pricepizza.toFixed(2)+"</p>" +
   		"</div></div>"
		'<br/>';
  		
	}   


for (var i = pizzas.length - 1; i >= 0; i--) {
 	myFunction(i);
 		console.log(pizzas[i]);
	
}
	




