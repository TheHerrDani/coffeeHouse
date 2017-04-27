var coffeeBrand = [

	{
		name: "Amora",
		country: "Brazilia",
		strength: 8,
		stock: 6,
		price: 300,
		priceKg: 6000,
	}, {
		name: "Dallmayr",
		country: "Germany",
		strength: 6,
		stock: 16,
		price: 350,
		priceKg: 9000,
	}, {
		name: "Danesi",
		country: "Brazília",
		strength: 9,
		stock: 25,
		price: 450,
		priceKg: 15000,
	}, {
		name: "Nescaffé",
		country: "Switzerland",
		strength: 3,
		stock: 250,
		price: 150,
		priceKg: 3000,
	}, {
		name: "Tchibo",
		country: "India",
		strength: 5,
		stock: 43,
		price: 850,
		priceKg: 20000,
	}, {
		name: "Arabica",
		country: "Ivory Coast",
		strength: 4,
		stock: 18,
		price: 600,
		priceKg: 18000,
	}, {
		name: "Robuszta",
		country: "India",
		strength: 2,
		stock: 95,
		price: 782,
		priceKg: 19000,
	}, {
		name: "Jacobs",
		country: "Ivory Coast",
		strength: 8,
		stock: 43,
		price: 475,
		priceKg: 10000,
	}, {
		name: "Omnia",
		country: "Ivory Coast",
		strength: 9,
		stock: 89,
		price: 500,
		priceKg: 11000,
	}, {
		name: "Catshit",
		country: "Switzerland",
		strength: 10,
		stock: 76,
		price: 3000,
		priceKg: 180000,
	}
];

var coffeByCountry = coffeeBrand;

function show() {

	var place = document.getElementById('place')
	var input = document.getElementById('brand').value
	input = input.toLowerCase();
	var result = [];
	place.innerHTML = "";

	for (var i = 0; i < coffeeBrand.length; i++) {

		if (coffeeBrand[i].name.toLowerCase().indexOf(input) != -1) {
			result.push(coffeeBrand[i]);

		}
	}

	var write;
	for (var i = 0; i < result.length; i++) {
		write = result[i];
		for (var k in write) {
			place.innerHTML += write[k] + "<br>";

		}
		if (input == "") {
			place.innerHTML = "Nem kapható a termék";
		}

	}
	if (result.length == 0) {
		place.innerHTML = "Nem kapható a termék";
	}

}

function list() {

	var place2 = document.getElementById('place2');

	var result = [];
	place2.innerHTML = "";

	for (var i = 0; i < coffeeBrand.length; i++) {

		if (coffeeBrand[i].stock < 30) {
			result.push(coffeeBrand[i]);

		}
	}

	var write;
	for (var i = 0; i < result.length; i++) {
		write = result[i];

		place2.innerHTML += write.name + "  Készlethiány veszély van" + "<br>";

	}

}

function strength() {
	document.getElementById("table1").removeAttribute("hidden")
	var td1 = document.getElementById('td1');
	var td2 = document.getElementById('td2');
	var td3 = document.getElementById('td3');

	var result = [];
	var ligth = "";
	var medium = "";
	var strong = "";
	for (var i = 0; i < coffeeBrand.length; i++) {

		if (coffeeBrand[i].strength < 4) {
			ligth += coffeeBrand[i].name + "<br>";

		}
		if (coffeeBrand[i].strength < 9 && coffeeBrand[i].strength > 4) {
			medium += coffeeBrand[i].name + "<br>";

		}
		if (coffeeBrand[i].strength < 11 && coffeeBrand[i].strength > 8) {
			strong += coffeeBrand[i].name + "<br>";

		}
	}
	td1.innerHTML = ligth;
	td2.innerHTML = medium;
	td3.innerHTML = strong;


}

function country() {
	document.getElementById("table2").removeAttribute("hidden")
	for (var i = 0; i < coffeByCountry.length - 1; i++) {

		for (var j = i + 1; j < coffeByCountry.length; j++) {

			if (coffeByCountry[i].country > coffeByCountry[j].country) {
				var temp = [coffeByCountry[i], coffeByCountry[j]];
				coffeByCountry[i] = temp[1];
				coffeByCountry[j] = temp[0];
			}
		}

	}
	var td4 = document.getElementById("td4");
	var td5 = document.getElementById("td5");
	var td6 = document.getElementById("td6");
	var td7 = document.getElementById("td7");
	var td8 = document.getElementById("td8");

	var Brazilia = "";
	var Germany = "";
	var Switzerland = "";
	var India = "";
	var IvoryCoast = "";



	for (var key = 0; key < coffeByCountry.length; key++) {

		if (coffeByCountry[key].country == "Brazilia") {
			Brazilia += coffeeBrand[key].name + "<br>";

		}
		if (coffeByCountry[key].country == "Germany") {
			Germany += coffeeBrand[key].name + "<br>";

		}
		if (coffeByCountry[key].country == "Switzerland") {
			Switzerland += coffeeBrand[key].name + "<br>";

		}
		if (coffeByCountry[key].country == "India") {
			India += coffeeBrand[key].name + "<br>";

		}
		if (coffeByCountry[key].country == "Ivory Coast") {
			IvoryCoast += coffeeBrand[key].name + "<br>";

		}

	}

	td4.innerHTML = Brazilia;
	td5.innerHTML = Germany;
	td6.innerHTML = Switzerland;
	td7.innerHTML = India;
	td8.innerHTML = IvoryCoast;

}

function priceMin() {

	document.getElementById("min").removeAttribute("hidden")
	var min = coffeeBrand[0].price;
	for (var i = 1; i < coffeeBrand.length; i++) {

		if (coffeeBrand[i].price < min) {
			min = coffeeBrand[i].price;
		}
	}
	var place = document.getElementById("min");
	place.innerHTML += min + " Ft";

}

function priceMax() {
	document.getElementById("max").removeAttribute("hidden")
	var max = coffeeBrand[0].price;
	for (var i = 1; i < coffeeBrand.length; i++) {

		if (coffeeBrand[i].price > max) {
			max = coffeeBrand[i].price;
		}
	}
	var place = document.getElementById("max");
	place.innerHTML += max + " Ft";

}


function priceAtlag() {
	document.getElementById("atlag").removeAttribute("hidden")
	var atlag= 0;
	for (var i = 0; i < coffeeBrand.length; i++) {

		atlag += coffeeBrand[i].price;


	}
	atlag/=coffeeBrand.length;
	var place = document.getElementById("atlag");
	place.innerHTML += atlag + " Ft";

}

function coffeValue (){
document.getElementById("coffestore").removeAttribute("hidden");
		var place = document.getElementById("coffeValue");
		place.innerHTML = "<br>";
		for (var i=0; i < coffeeBrand.length; i++) {
			place.innerHTML += coffeeBrand[i].name + ": " +(coffeeBrand[i].stock*coffeeBrand[i].priceKg)+"Ft"+"<br>";

		}

}