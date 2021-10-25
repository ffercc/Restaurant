"use strict"

export function showMenuPage() {
	
	let menu = [];
	menu.push(Dish(
			"Lettuce us celebrate!",
			"Lettuce us celebrate!",
			"10.50€",
			"./images/lettucecelebrate.jpeg"
	));
	menu.push(Dish(
			"Nice to meat you.",
			"Nice to meat you.",
			"16.00€",
			"./images/nicetomeatyou.jpeg"
	));
	menu.push(Dish(
			"Pasta la vista, baby!",
			"Pasta la vista, baby!",
			"13.50€",
			"./images/pastalavista.jpeg"
	));
	menu.push(Dish(
			"Don’t go bacon my heart.",
			"Don’t go bacon my heart.",
			"14.50€",
			"./images/dontgobaconmyheart.jpeg"
	));
	menu.push(Dish(
			"Let’s give ’em something to taco ’bout",
			"Let’s give ’em something to taco ’bout",
			"13.00€",
			"./images/letsgivethemsomethingtotacoabout.jpeg"
	));
	
	menu.forEach((item, index, menu) => {
		let contentDiv = document.getElementById("content");
		let dishDiv = createDishDiv(item);
		contentDiv.appendChild(dishDiv);
	});
	
}

function createDishDiv(dish) {
	
	let dishDiv = document.createElement("div");
	dishDiv.className = "dish";
	
	let titleDiv = document.createElement("h3");
	titleDiv.className = "dishTitle";
	titleDiv.innerText = dish.getTitle();

	let descriptionDiv = document.createElement("p");
	descriptionDiv.className = "dishDescription";
	descriptionDiv.innerText = dish.getDescription();
	
	let priceDiv = document.createElement("p");
	priceDiv.className = "dishPrice";
	priceDiv.innerText = dish.getPrice();
	
	let imageDiv = document.createElement("image");
	imageDiv.className = "dishImage";
	imageDiv.src = dish.getImageurl();
	
	dishDiv.appendChild(titleDiv);
	dishDiv.appendChild(descriptionDiv);
	dishDiv.appendChild(priceDiv);
	
	return dishDiv;
	
}

/** Factory object Dish implementation **/
export const Dish = (_title, _description, _price, _imageurl) => {
	
	/** Private Attributes **/
	const title = _title;
	const description = _description;
	const price = _price;
	const imageurl = _imageurl;
	
	/** Private Methods **/
	/*
	const _privateMethod1 = () => {
		// code of _privateMethod1
	};
	*/
	
	/** Public Attributes **/
	//let publicAtts = {}; // container for public attributes
	//publicAtts.attr2 = 2;
	
	/** Public Methods **/
	const getTitle = () => { return title; };
	const getDescription = () => { return description; };
	const getPrice = () => { return price; };
	const getImageurl = () => { return imageurl; };
	
	// Object returned
	return {
		getTitle,
		getDescription,
		getPrice,
		getImageurl,
	}
};
Object.freeze(Dish);


