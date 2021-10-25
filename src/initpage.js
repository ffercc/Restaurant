"use strict"

export function showInitPage() {
	
	let contentDiv = document.getElementById("content");
	
	let text1Div = document.createElement("div");
	text1Div.className = "text1";
	text1Div.innerText = "Welcome to Pun Restaurant!";
	
	let imageDiv = document.createElement("image");
	imageDiv.id = "frontImage";
	imageDiv.src = "./images/frontimage.jpeg";
	
	let text2Div = document.createElement("div");
	text2Div.className = "text2";
	text2Div.innerText = "Come visit us!";
	
	contentDiv.appendChild(text1Div);
	contentDiv.appendChild(imageDiv);
	contentDiv.appendChild(text2Div);
	
}
