"use strict"

export function showContactPage() {
	
	let contentDiv = document.getElementById("content");
	
	let phoneDiv = document.createElement("div");
	phoneDiv.className = "phone";
	phoneDiv.innerText = "36 24 36 Call!";
	
	let locationDiv = document.createElement("p");
	locationDiv.className = "locationText";
	locationDiv.innerText = "67 Overhill Road in East Dulwich"
	
	let locationImage = document.createElement("image");
	locationImage.id = "locationMap";
	locationImage.src = "./images/location.png";
	
	contentDiv.appendChild(phoneDiv);
	contentDiv.appendChild(locationDiv);
	contentDiv.appendChild(locationImage);
	
}
