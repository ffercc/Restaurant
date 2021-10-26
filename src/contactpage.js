"use strict"

export function showContactPage() {
	
	let contentDiv = document.getElementById("content");
	
	let containerDiv = document.createElement("div");
	containerDiv.className = "contactpage";
	
	let phoneDiv = document.createElement("div");
	phoneDiv.className = "contactpage phone";
	phoneDiv.innerHTML = "<p><i class='fa fa-phone'></i> PHONE:</p><p>36 24 36 Call!</p>";
	
	
	let locationDiv = document.createElement("p");
	locationDiv.className = "contactpage address";
	locationDiv.innerHTML = "<p><i class='fa fa-address-card'></i> ADDRESS:</p><p>67 Overhill Road in East Dulwich</p>"
	
	let locationImage = document.createElement("img");
	locationImage.id = "contactpage locationMap";
	locationImage.setAttribute("src", "./images/location_800X600.png");
	locationImage.setAttribute("alt", "location");
	
	
	containerDiv.appendChild(phoneDiv);
	containerDiv.appendChild(locationDiv);
	containerDiv.appendChild(locationImage);
	
	contentDiv.appendChild(containerDiv);
	
}
