"use strict"

export function showMenuPage() {
	
	let menu = [];
	menu.push(Dish(
			"Lettuce us celebrate!",
			"Your classical salad.",
			"10.50€",
			"./images/lettucecelebrate_600x400.jpeg"
	));
	menu.push(Dish(
			"Nice to meat you.",
			"Straight from the slaughterhouse.",
			"16.00€",
			"./images/nicetomeatyou_600x400.jpeg"
	));
	menu.push(Dish(
			"Pasta la vista, baby!",
			"A filling dish of spaghetti.",
			"13.50€",
			"./images/pastalavista_600x400.jpeg"
	));
	menu.push(Dish(
			"Don’t go bacon my heart.",
			"Pizza with bacon galore.",
			"14.50€",
			"./images/dontgobaconmyheart_600x400.jpeg"
	));
	menu.push(Dish(
			"Let’s give ’em something to taco ’bout",
			"Delicious mexican tacos.",
			"13.00€",
			"./images/letsgivethemsomethingtotacoabout_600X400.jpeg"
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
	
	let imageDiv = document.createElement("img");
	imageDiv.className = "dishImage";
	imageDiv.setAttribute("src", dish.getImageurl());
	imageDiv.setAttribute("alt", dish.getTitle());
	
	dishDiv.appendChild(titleDiv);
	dishDiv.appendChild(descriptionDiv);
	dishDiv.appendChild(priceDiv);
	dishDiv.appendChild(imageDiv);
	
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


