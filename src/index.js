"use strict"

import * as initpage from "./initpage.js"
import * as menupage from "./menupage.js"
import * as contactpage from "./contactpage.js"

function createHeader() {
	
	let headerDiv = document.getElementById("header");
	let nameDiv = document.createElement("h1");
	nameDiv.innerText = "PUN RESTAURANT"
	
	let tabsDiv = document.createElement("div");
	tabsDiv.id = "tabList"
	
	let tab1Div = document.createElement("div");
	tab1Div.id = "tab1";
	tab1Div.className = "tab";
	tab1Div.innerText = "HOME";
	
	let tab2Div = document.createElement("div");
	tab2Div.id = "tab2";
	tab2Div.className = "tab";
	tab2Div.innerText = "MENU";
	
	let tab3Div = document.createElement("div");
	tab3Div.id = "tab3";
	tab3Div.className = "tab";
	tab3Div.innerText = "CONTACT";
	
	tabsDiv.appendChild(tab1Div);
	tabsDiv.appendChild(tab2Div);
	tabsDiv.appendChild(tab3Div);
	
	headerDiv.appendChild(nameDiv);
	headerDiv.appendChild(tabsDiv);
	
}

function changeTabStyle(currentTab) {
	
	let tabs = document.getElementsByClassName("tab");
	[...tabs].forEach((element, index, array) => {
		element.style.color = "";
		element.style.backgroundColor = "";
		element.style.textDecoration = "";
	});

	let tab = document.getElementById("tab" + currentTab);
	tab.style = "color: blue; \
			background-color: coral;\
			text-decoration: underline; \
			";

}

function delContent() {
	let contentDiv = document.getElementById("content");
	contentDiv.innerHTML = "";
}

function checkTab() {
	
	switch (currentTab) {
	
	case 1:
		delContent();
		initpage.showInitPage();
		break;
		
	case 2:
		delContent();
		menupage.showMenuPage();
		break;
		
	case 3:
		delContent();
		contactpage.showContactPage();
		break;
	
	default:
		break;
	}
	changeTabStyle(currentTab);
	localStorage.setItem("currentTab", currentTab);
}




/** Listeners **/
function addListeners() {
	let tab1Div = document.getElementById("tab1");
	tab1Div.addEventListener("click", () => {
		currentTab = 1;
		checkTab();
	});

	let tab2Div = document.getElementById("tab2");
	tab2Div.addEventListener("click", () => {
		currentTab = 2;
		checkTab();
	});

	let tab3Div = document.getElementById("tab3");
	tab3Div.addEventListener("click", () => {
		currentTab = 3;
		checkTab();
	});
}

/** Main **/ 
createHeader();

let currentTab = parseInt(localStorage.getItem("currentTab"));
if (currentTab === null) {
	currentTab = 1;
}
checkTab();
addListeners();
