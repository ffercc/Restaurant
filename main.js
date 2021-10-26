/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showContactPage": () => (/* binding */ showContactPage)
/* harmony export */ });


function showContactPage() {
	
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


/***/ }),

/***/ "./src/initpage.js":
/*!*************************!*\
  !*** ./src/initpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showInitPage": () => (/* binding */ showInitPage)
/* harmony export */ });


function showInitPage() {
	
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


/***/ }),

/***/ "./src/menupage.js":
/*!*************************!*\
  !*** ./src/menupage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMenuPage": () => (/* binding */ showMenuPage),
/* harmony export */   "Dish": () => (/* binding */ Dish)
/* harmony export */ });


function showMenuPage() {
	
	let menu = [];
	menu.push(Dish(
			"Lettuce celebrate!",
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
const Dish = (_title, _description, _price, _imageurl) => {
	
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initpage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initpage.js */ "./src/initpage.js");
/* harmony import */ var _menupage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menupage.js */ "./src/menupage.js");
/* harmony import */ var _contactpage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactpage.js */ "./src/contactpage.js");


;



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
		_initpage_js__WEBPACK_IMPORTED_MODULE_0__.showInitPage();
		break;
		
	case 2:
		delContent();
		_menupage_js__WEBPACK_IMPORTED_MODULE_1__.showMenuPage();
		break;
		
	case 3:
		delContent();
		_contactpage_js__WEBPACK_IMPORTED_MODULE_2__.showContactPage();
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

let currentTab = localStorage.getItem("currentTab");
if (currentTab === null) {
	currentTab = 1;
} else {
	currentTab = parseInt(currentTab);
}
checkTab();
addListeners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3RwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5pdHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NvbnRhY3RQYWdlKCkge1xuXHRcblx0bGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdFxuXHRsZXQgY29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0Y29udGFpbmVyRGl2LmNsYXNzTmFtZSA9IFwiY29udGFjdHBhZ2VcIjtcblx0XG5cdGxldCBwaG9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHBob25lRGl2LmNsYXNzTmFtZSA9IFwiY29udGFjdHBhZ2UgcGhvbmVcIjtcblx0cGhvbmVEaXYuaW5uZXJIVE1MID0gXCI8cD48aSBjbGFzcz0nZmEgZmEtcGhvbmUnPjwvaT4gUEhPTkU6PC9wPjxwPjM2IDI0IDM2IENhbGwhPC9wPlwiO1xuXHRcblx0XG5cdGxldCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRsb2NhdGlvbkRpdi5jbGFzc05hbWUgPSBcImNvbnRhY3RwYWdlIGFkZHJlc3NcIjtcblx0bG9jYXRpb25EaXYuaW5uZXJIVE1MID0gXCI8cD48aSBjbGFzcz0nZmEgZmEtYWRkcmVzcy1jYXJkJz48L2k+IEFERFJFU1M6PC9wPjxwPjY3IE92ZXJoaWxsIFJvYWQgaW4gRWFzdCBEdWx3aWNoPC9wPlwiXG5cdFxuXHRsZXQgbG9jYXRpb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGxvY2F0aW9uSW1hZ2UuaWQgPSBcImNvbnRhY3RwYWdlIGxvY2F0aW9uTWFwXCI7XG5cdGxvY2F0aW9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvbG9jYXRpb25fODAwWDYwMC5wbmdcIik7XG5cdGxvY2F0aW9uSW1hZ2Uuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwibG9jYXRpb25cIik7XG5cdFxuXHRcblx0Y29udGFpbmVyRGl2LmFwcGVuZENoaWxkKHBob25lRGl2KTtcblx0Y29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcblx0Y29udGFpbmVyRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uSW1hZ2UpO1xuXHRcblx0Y29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWluZXJEaXYpO1xuXHRcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93SW5pdFBhZ2UoKSB7XG5cdFxuXHRsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblx0XG5cdGxldCB0ZXh0MURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRleHQxRGl2LmNsYXNzTmFtZSA9IFwidGV4dDFcIjtcblx0dGV4dDFEaXYuaW5uZXJUZXh0ID0gXCJXZWxjb21lIHRvIFB1biBSZXN0YXVyYW50IVwiO1xuXHRcblx0bGV0IGltYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0aW1hZ2VEaXYuaWQgPSBcImZyb250SW1hZ2VcIjtcblx0aW1hZ2VEaXYuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvZnJvbnRpbWFnZS5qcGVnXCIpO1xuXHRpbWFnZURpdi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJmcm9udGltYWdlXCIpO1xuXHRcblx0bGV0IHRleHQyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGV4dDJEaXYuY2xhc3NOYW1lID0gXCJ0ZXh0MlwiO1xuXHR0ZXh0MkRpdi5pbm5lclRleHQgPSBcIkNvbWUgdmlzaXQgdXMhXCI7XG5cdFxuXHRjb250ZW50RGl2LmFwcGVuZENoaWxkKHRleHQxRGl2KTtcblx0Y29udGVudERpdi5hcHBlbmRDaGlsZChpbWFnZURpdik7XG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGV4dDJEaXYpO1xuXHRcbn1cbiIsIlwidXNlIHN0cmljdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TWVudVBhZ2UoKSB7XG5cdFxuXHRsZXQgbWVudSA9IFtdO1xuXHRtZW51LnB1c2goRGlzaChcblx0XHRcdFwiTGV0dHVjZSBjZWxlYnJhdGUhXCIsXG5cdFx0XHRcIllvdXIgY2xhc3NpY2FsIHNhbGFkLlwiLFxuXHRcdFx0XCIxMC41MOKCrFwiLFxuXHRcdFx0XCIuL2ltYWdlcy9sZXR0dWNlY2VsZWJyYXRlXzYwMHg0MDAuanBlZ1wiXG5cdCkpO1xuXHRtZW51LnB1c2goRGlzaChcblx0XHRcdFwiTmljZSB0byBtZWF0IHlvdS5cIixcblx0XHRcdFwiU3RyYWlnaHQgZnJvbSB0aGUgc2xhdWdodGVyaG91c2UuXCIsXG5cdFx0XHRcIjE2LjAw4oKsXCIsXG5cdFx0XHRcIi4vaW1hZ2VzL25pY2V0b21lYXR5b3VfNjAweDQwMC5qcGVnXCJcblx0KSk7XG5cdG1lbnUucHVzaChEaXNoKFxuXHRcdFx0XCJQYXN0YSBsYSB2aXN0YSwgYmFieSFcIixcblx0XHRcdFwiQSBmaWxsaW5nIGRpc2ggb2Ygc3BhZ2hldHRpLlwiLFxuXHRcdFx0XCIxMy41MOKCrFwiLFxuXHRcdFx0XCIuL2ltYWdlcy9wYXN0YWxhdmlzdGFfNjAweDQwMC5qcGVnXCJcblx0KSk7XG5cdG1lbnUucHVzaChEaXNoKFxuXHRcdFx0XCJEb27igJl0IGdvIGJhY29uIG15IGhlYXJ0LlwiLFxuXHRcdFx0XCJQaXp6YSB3aXRoIGJhY29uIGdhbG9yZS5cIixcblx0XHRcdFwiMTQuNTDigqxcIixcblx0XHRcdFwiLi9pbWFnZXMvZG9udGdvYmFjb25teWhlYXJ0XzYwMHg0MDAuanBlZ1wiXG5cdCkpO1xuXHRtZW51LnB1c2goRGlzaChcblx0XHRcdFwiTGV04oCZcyBnaXZlIOKAmWVtIHNvbWV0aGluZyB0byB0YWNvIOKAmWJvdXRcIixcblx0XHRcdFwiRGVsaWNpb3VzIG1leGljYW4gdGFjb3MuXCIsXG5cdFx0XHRcIjEzLjAw4oKsXCIsXG5cdFx0XHRcIi4vaW1hZ2VzL2xldHNnaXZldGhlbXNvbWV0aGluZ3RvdGFjb2Fib3V0XzYwMFg0MDAuanBlZ1wiXG5cdCkpO1xuXHRcblx0bWVudS5mb3JFYWNoKChpdGVtLCBpbmRleCwgbWVudSkgPT4ge1xuXHRcdGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRcdGxldCBkaXNoRGl2ID0gY3JlYXRlRGlzaERpdihpdGVtKTtcblx0XHRjb250ZW50RGl2LmFwcGVuZENoaWxkKGRpc2hEaXYpO1xuXHR9KTtcblx0XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc2hEaXYoZGlzaCkge1xuXHRcblx0bGV0IGRpc2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkaXNoRGl2LmNsYXNzTmFtZSA9IFwiZGlzaFwiO1xuXHRcblx0bGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHR0aXRsZURpdi5jbGFzc05hbWUgPSBcImRpc2hUaXRsZVwiO1xuXHR0aXRsZURpdi5pbm5lclRleHQgPSBkaXNoLmdldFRpdGxlKCk7XG5cblx0bGV0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGRlc2NyaXB0aW9uRGl2LmNsYXNzTmFtZSA9IFwiZGlzaERlc2NyaXB0aW9uXCI7XG5cdGRlc2NyaXB0aW9uRGl2LmlubmVyVGV4dCA9IGRpc2guZ2V0RGVzY3JpcHRpb24oKTtcblx0XG5cdGxldCBwcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRwcmljZURpdi5jbGFzc05hbWUgPSBcImRpc2hQcmljZVwiO1xuXHRwcmljZURpdi5pbm5lclRleHQgPSBkaXNoLmdldFByaWNlKCk7XG5cdFxuXHRsZXQgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRpbWFnZURpdi5jbGFzc05hbWUgPSBcImRpc2hJbWFnZVwiO1xuXHRpbWFnZURpdi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZGlzaC5nZXRJbWFnZXVybCgpKTtcblx0aW1hZ2VEaXYuc2V0QXR0cmlidXRlKFwiYWx0XCIsIGRpc2guZ2V0VGl0bGUoKSk7XG5cdFxuXHRkaXNoRGl2LmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcblx0ZGlzaERpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdik7XG5cdGRpc2hEaXYuYXBwZW5kQ2hpbGQocHJpY2VEaXYpO1xuXHRkaXNoRGl2LmFwcGVuZENoaWxkKGltYWdlRGl2KTtcblx0XG5cdHJldHVybiBkaXNoRGl2O1xuXHRcbn1cblxuLyoqIEZhY3Rvcnkgb2JqZWN0IERpc2ggaW1wbGVtZW50YXRpb24gKiovXG5leHBvcnQgY29uc3QgRGlzaCA9IChfdGl0bGUsIF9kZXNjcmlwdGlvbiwgX3ByaWNlLCBfaW1hZ2V1cmwpID0+IHtcblx0XG5cdC8qKiBQcml2YXRlIEF0dHJpYnV0ZXMgKiovXG5cdGNvbnN0IHRpdGxlID0gX3RpdGxlO1xuXHRjb25zdCBkZXNjcmlwdGlvbiA9IF9kZXNjcmlwdGlvbjtcblx0Y29uc3QgcHJpY2UgPSBfcHJpY2U7XG5cdGNvbnN0IGltYWdldXJsID0gX2ltYWdldXJsO1xuXHRcblx0LyoqIFByaXZhdGUgTWV0aG9kcyAqKi9cblx0Lypcblx0Y29uc3QgX3ByaXZhdGVNZXRob2QxID0gKCkgPT4ge1xuXHRcdC8vIGNvZGUgb2YgX3ByaXZhdGVNZXRob2QxXG5cdH07XG5cdCovXG5cdFxuXHQvKiogUHVibGljIEF0dHJpYnV0ZXMgKiovXG5cdC8vbGV0IHB1YmxpY0F0dHMgPSB7fTsgLy8gY29udGFpbmVyIGZvciBwdWJsaWMgYXR0cmlidXRlc1xuXHQvL3B1YmxpY0F0dHMuYXR0cjIgPSAyO1xuXHRcblx0LyoqIFB1YmxpYyBNZXRob2RzICoqL1xuXHRjb25zdCBnZXRUaXRsZSA9ICgpID0+IHsgcmV0dXJuIHRpdGxlOyB9O1xuXHRjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHsgcmV0dXJuIGRlc2NyaXB0aW9uOyB9O1xuXHRjb25zdCBnZXRQcmljZSA9ICgpID0+IHsgcmV0dXJuIHByaWNlOyB9O1xuXHRjb25zdCBnZXRJbWFnZXVybCA9ICgpID0+IHsgcmV0dXJuIGltYWdldXJsOyB9O1xuXHRcblx0Ly8gT2JqZWN0IHJldHVybmVkXG5cdHJldHVybiB7XG5cdFx0Z2V0VGl0bGUsXG5cdFx0Z2V0RGVzY3JpcHRpb24sXG5cdFx0Z2V0UHJpY2UsXG5cdFx0Z2V0SW1hZ2V1cmwsXG5cdH1cbn07XG5PYmplY3QuZnJlZXplKERpc2gpO1xuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCJcblxuaW1wb3J0ICogYXMgaW5pdHBhZ2UgZnJvbSBcIi4vaW5pdHBhZ2UuanNcIlxuaW1wb3J0ICogYXMgbWVudXBhZ2UgZnJvbSBcIi4vbWVudXBhZ2UuanNcIlxuaW1wb3J0ICogYXMgY29udGFjdHBhZ2UgZnJvbSBcIi4vY29udGFjdHBhZ2UuanNcIlxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG5cdFxuXHRsZXQgaGVhZGVyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJcIik7XG5cdGxldCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXHRuYW1lRGl2LmlubmVyVGV4dCA9IFwiUFVOIFJFU1RBVVJBTlRcIlxuXHRcblx0bGV0IHRhYnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0YWJzRGl2LmlkID0gXCJ0YWJMaXN0XCJcblx0XG5cdGxldCB0YWIxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGFiMURpdi5pZCA9IFwidGFiMVwiO1xuXHR0YWIxRGl2LmNsYXNzTmFtZSA9IFwidGFiXCI7XG5cdHRhYjFEaXYuaW5uZXJUZXh0ID0gXCJIT01FXCI7XG5cdFxuXHRsZXQgdGFiMkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhYjJEaXYuaWQgPSBcInRhYjJcIjtcblx0dGFiMkRpdi5jbGFzc05hbWUgPSBcInRhYlwiO1xuXHR0YWIyRGl2LmlubmVyVGV4dCA9IFwiTUVOVVwiO1xuXHRcblx0bGV0IHRhYjNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0YWIzRGl2LmlkID0gXCJ0YWIzXCI7XG5cdHRhYjNEaXYuY2xhc3NOYW1lID0gXCJ0YWJcIjtcblx0dGFiM0Rpdi5pbm5lclRleHQgPSBcIkNPTlRBQ1RcIjtcblx0XG5cdHRhYnNEaXYuYXBwZW5kQ2hpbGQodGFiMURpdik7XG5cdHRhYnNEaXYuYXBwZW5kQ2hpbGQodGFiMkRpdik7XG5cdHRhYnNEaXYuYXBwZW5kQ2hpbGQodGFiM0Rpdik7XG5cdFxuXHRoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobmFtZURpdik7XG5cdGhlYWRlckRpdi5hcHBlbmRDaGlsZCh0YWJzRGl2KTtcblx0XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhYlN0eWxlKGN1cnJlbnRUYWIpIHtcblx0XG5cdGxldCB0YWJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhYlwiKTtcblx0Wy4uLnRhYnNdLmZvckVhY2goKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4ge1xuXHRcdGVsZW1lbnQuc3R5bGUuY29sb3IgPSBcIlwiO1xuXHRcdGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJcIjtcblx0XHRlbGVtZW50LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJcIjtcblx0fSk7XG5cblx0bGV0IHRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiXCIgKyBjdXJyZW50VGFiKTtcblx0dGFiLnN0eWxlID0gXCJjb2xvcjogYmx1ZTsgXFxcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IGNvcmFsO1xcXG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgXFxcblx0XHRcdFwiO1xuXG59XG5cbmZ1bmN0aW9uIGRlbENvbnRlbnQoKSB7XG5cdGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNoZWNrVGFiKCkge1xuXHRcblx0c3dpdGNoIChjdXJyZW50VGFiKSB7XG5cdFxuXHRjYXNlIDE6XG5cdFx0ZGVsQ29udGVudCgpO1xuXHRcdGluaXRwYWdlLnNob3dJbml0UGFnZSgpO1xuXHRcdGJyZWFrO1xuXHRcdFxuXHRjYXNlIDI6XG5cdFx0ZGVsQ29udGVudCgpO1xuXHRcdG1lbnVwYWdlLnNob3dNZW51UGFnZSgpO1xuXHRcdGJyZWFrO1xuXHRcdFxuXHRjYXNlIDM6XG5cdFx0ZGVsQ29udGVudCgpO1xuXHRcdGNvbnRhY3RwYWdlLnNob3dDb250YWN0UGFnZSgpO1xuXHRcdGJyZWFrO1xuXHRcblx0ZGVmYXVsdDpcblx0XHRicmVhaztcblx0fVxuXHRjaGFuZ2VUYWJTdHlsZShjdXJyZW50VGFiKTtcblx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjdXJyZW50VGFiXCIsIGN1cnJlbnRUYWIpO1xufVxuXG5cblxuXG4vKiogTGlzdGVuZXJzICoqL1xuZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuXHRsZXQgdGFiMURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiMVwiKTtcblx0dGFiMURpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGN1cnJlbnRUYWIgPSAxO1xuXHRcdGNoZWNrVGFiKCk7XG5cdH0pO1xuXG5cdGxldCB0YWIyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWIyXCIpO1xuXHR0YWIyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0Y3VycmVudFRhYiA9IDI7XG5cdFx0Y2hlY2tUYWIoKTtcblx0fSk7XG5cblx0bGV0IHRhYjNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYjNcIik7XG5cdHRhYjNEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRjdXJyZW50VGFiID0gMztcblx0XHRjaGVja1RhYigpO1xuXHR9KTtcbn1cblxuLyoqIE1haW4gKiovIFxuY3JlYXRlSGVhZGVyKCk7XG5cbmxldCBjdXJyZW50VGFiID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXJyZW50VGFiXCIpO1xuaWYgKGN1cnJlbnRUYWIgPT09IG51bGwpIHtcblx0Y3VycmVudFRhYiA9IDE7XG59IGVsc2Uge1xuXHRjdXJyZW50VGFiID0gcGFyc2VJbnQoY3VycmVudFRhYik7XG59XG5jaGVja1RhYigpO1xuYWRkTGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=