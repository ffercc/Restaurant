"use strict"

export function showInitPage() {
	
	let contentDiv = document.getElementById("content");
	
	let text1Div = document.createElement("div");
	text1Div.className = "text1";
	text1Div.innerText = "Welcome to Pun Restaurant!";
	
	let imageDiv = document.createElement("img");
	imageDiv.id = "frontImage";
	imageDiv.setAttribute("src", "./images/frontimage.jpeg");
	imageDiv.setAttribute("alt", "frontimage");
	
	let text2Div = document.createElement("div");
	text2Div.className = "text2";
	text2Div.innerText = "Come visit us!";
	
	contentDiv.appendChild(text1Div);
	contentDiv.appendChild(imageDiv);
	contentDiv.appendChild(text2Div);
	
}
