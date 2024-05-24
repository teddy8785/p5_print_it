const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowLeft = document.getElementById("arrow_left");
const arrowRight = document.getElementById("arrow_right");
let compteur = 0;
// let i = 0;

// for (i = 0; i < slides.length; i++) {
// 	bullet = document.createElement("span");
// 	document.querySelector(".dots").appendChild(bullet);
// 	(bullet).classList.add("dot");
// 	selectBullet();
// };

// function selectBullet() {
// 	if (i === compteur) {
// 		(bullet).classList.add("dot_selected");
// 	}
// 	else {
// 		(bullet).classList.remove("dot_selected");
// 	}
// }

let bullet = document.createElement("span");
let bullet2 = document.createElement("span");
let bullet3 = document.createElement("span");
let bullet4 = document.createElement("span");

document.querySelector(".dots").appendChild(bullet);
document.querySelector(".dots").appendChild(bullet2);
document.querySelector(".dots").appendChild(bullet3);
document.querySelector(".dots").appendChild(bullet4);
(bullet).classList.add("dot");
(bullet2).classList.add("dot");
(bullet3).classList.add("dot");
(bullet4).classList.add("dot");
(bullet).classList.add("dot_selected");

function selectBullet() {
	if (compteur === 0) {
		(bullet).classList.add("dot_selected");
		(bullet2).classList.remove("dot_selected");
		(bullet3).classList.remove("dot_selected");
		(bullet4).classList.remove("dot_selected");
	}

	else if (compteur === 1) {
		(bullet).classList.remove("dot_selected");
		(bullet2).classList.add("dot_selected");
		(bullet3).classList.remove("dot_selected");
		(bullet4).classList.remove("dot_selected");
	}

	else if (compteur === 2) {
		(bullet).classList.remove("dot_selected");
		(bullet2).classList.remove("dot_selected");
		(bullet3).classList.add("dot_selected");
		(bullet4).classList.remove("dot_selected");
	}

	else {
		(bullet).classList.remove("dot_selected");
		(bullet2).classList.remove("dot_selected");
		(bullet3).classList.remove("dot_selected");
		(bullet4).classList.add("dot_selected");
	}
}
// 0 1 2 3 4
arrowLeft.addEventListener("click", () => {
	// si compteur egale 0 alors je dois mettre le compteur a 3
	// sinon 
	if (compteur === 0) {
		compteur = slides.length;
	}

	compteur--;
	document.getElementById("banner").firstElementChild.src = "./assets/images/slideshow/" + (slides[compteur].image);
	document.querySelector("p").innerHTML = (slides[compteur].tagLine);
	selectBullet();
	// console.log(i);
	// console.log(compteur);
});

arrowRight.addEventListener("click", () => {

	if (compteur === slides.length - 1) {
		compteur = -1;
	}

	compteur++; // ajoute 1 a chaque click
	document.getElementById("banner").firstElementChild.src = "./assets/images/slideshow/" + (slides[compteur].image);
	document.querySelector("p").innerHTML = (slides[compteur].tagLine);
	selectBullet();
	// console.log(i);
	// console.log(compteur);
});
