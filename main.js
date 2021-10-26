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
}




/** Listeners **/
function addListeners() {
	let tab1Div = document.getElementById("tab1");
	tab1Div.addEventListener("click", () => {
		if (currentTab == 1) {
			return;
		} else {
			currentTab = 1;
			checkTab();
		}
	});

	let tab2Div = document.getElementById("tab2");
	tab2Div.addEventListener("click", () => {
		if (currentTab == 2) {
			return;
		} else {
			currentTab = 2;
			checkTab();
		}
	});

	let tab3Div = document.getElementById("tab3");
	tab3Div.addEventListener("click", () => {
		if (currentTab == 3) {
			return;
		} else {
			currentTab = 3;
			checkTab();
		}
	});
}

/** Main **/ 
createHeader();
let currentTab = 1;
checkTab();
addListeners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbml0cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29udGFjdFBhZ2UoKSB7XG5cdFxuXHRsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblx0XG5cdGxldCBjb250YWluZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRjb250YWluZXJEaXYuY2xhc3NOYW1lID0gXCJjb250YWN0cGFnZVwiO1xuXHRcblx0bGV0IHBob25lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0cGhvbmVEaXYuY2xhc3NOYW1lID0gXCJjb250YWN0cGFnZSBwaG9uZVwiO1xuXHRwaG9uZURpdi5pbm5lckhUTUwgPSBcIjxwPjxpIGNsYXNzPSdmYSBmYS1waG9uZSc+PC9pPiBQSE9ORTo8L3A+PHA+MzYgMjQgMzYgQ2FsbCE8L3A+XCI7XG5cdFxuXHRcblx0bGV0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGxvY2F0aW9uRGl2LmNsYXNzTmFtZSA9IFwiY29udGFjdHBhZ2UgYWRkcmVzc1wiO1xuXHRsb2NhdGlvbkRpdi5pbm5lckhUTUwgPSBcIjxwPjxpIGNsYXNzPSdmYSBmYS1hZGRyZXNzLWNhcmQnPjwvaT4gQUREUkVTUzo8L3A+PHA+NjcgT3ZlcmhpbGwgUm9hZCBpbiBFYXN0IER1bHdpY2g8L3A+XCJcblx0XG5cdGxldCBsb2NhdGlvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0bG9jYXRpb25JbWFnZS5pZCA9IFwiY29udGFjdHBhZ2UgbG9jYXRpb25NYXBcIjtcblx0bG9jYXRpb25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlcy9sb2NhdGlvbl84MDBYNjAwLnBuZ1wiKTtcblx0bG9jYXRpb25JbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJsb2NhdGlvblwiKTtcblx0XG5cdFxuXHRjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocGhvbmVEaXYpO1xuXHRjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xuXHRjb250YWluZXJEaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25JbWFnZSk7XG5cdFxuXHRjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhaW5lckRpdik7XG5cdFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJbml0UGFnZSgpIHtcblx0XG5cdGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRcblx0bGV0IHRleHQxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGV4dDFEaXYuY2xhc3NOYW1lID0gXCJ0ZXh0MVwiO1xuXHR0ZXh0MURpdi5pbm5lclRleHQgPSBcIldlbGNvbWUgdG8gUHVuIFJlc3RhdXJhbnQhXCI7XG5cdFxuXHRsZXQgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRpbWFnZURpdi5pZCA9IFwiZnJvbnRJbWFnZVwiO1xuXHRpbWFnZURpdi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlcy9mcm9udGltYWdlLmpwZWdcIik7XG5cdGltYWdlRGl2LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImZyb250aW1hZ2VcIik7XG5cdFxuXHRsZXQgdGV4dDJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0ZXh0MkRpdi5jbGFzc05hbWUgPSBcInRleHQyXCI7XG5cdHRleHQyRGl2LmlubmVyVGV4dCA9IFwiQ29tZSB2aXNpdCB1cyFcIjtcblx0XG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGV4dDFEaXYpO1xuXHRjb250ZW50RGl2LmFwcGVuZENoaWxkKGltYWdlRGl2KTtcblx0Y29udGVudERpdi5hcHBlbmRDaGlsZCh0ZXh0MkRpdik7XG5cdFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNZW51UGFnZSgpIHtcblx0XG5cdGxldCBtZW51ID0gW107XG5cdG1lbnUucHVzaChEaXNoKFxuXHRcdFx0XCJMZXR0dWNlIHVzIGNlbGVicmF0ZSFcIixcblx0XHRcdFwiWW91ciBjbGFzc2ljYWwgc2FsYWQuXCIsXG5cdFx0XHRcIjEwLjUw4oKsXCIsXG5cdFx0XHRcIi4vaW1hZ2VzL2xldHR1Y2VjZWxlYnJhdGVfNjAweDQwMC5qcGVnXCJcblx0KSk7XG5cdG1lbnUucHVzaChEaXNoKFxuXHRcdFx0XCJOaWNlIHRvIG1lYXQgeW91LlwiLFxuXHRcdFx0XCJTdHJhaWdodCBmcm9tIHRoZSBzbGF1Z2h0ZXJob3VzZS5cIixcblx0XHRcdFwiMTYuMDDigqxcIixcblx0XHRcdFwiLi9pbWFnZXMvbmljZXRvbWVhdHlvdV82MDB4NDAwLmpwZWdcIlxuXHQpKTtcblx0bWVudS5wdXNoKERpc2goXG5cdFx0XHRcIlBhc3RhIGxhIHZpc3RhLCBiYWJ5IVwiLFxuXHRcdFx0XCJBIGZpbGxpbmcgZGlzaCBvZiBzcGFnaGV0dGkuXCIsXG5cdFx0XHRcIjEzLjUw4oKsXCIsXG5cdFx0XHRcIi4vaW1hZ2VzL3Bhc3RhbGF2aXN0YV82MDB4NDAwLmpwZWdcIlxuXHQpKTtcblx0bWVudS5wdXNoKERpc2goXG5cdFx0XHRcIkRvbuKAmXQgZ28gYmFjb24gbXkgaGVhcnQuXCIsXG5cdFx0XHRcIlBpenphIHdpdGggYmFjb24gZ2Fsb3JlLlwiLFxuXHRcdFx0XCIxNC41MOKCrFwiLFxuXHRcdFx0XCIuL2ltYWdlcy9kb250Z29iYWNvbm15aGVhcnRfNjAweDQwMC5qcGVnXCJcblx0KSk7XG5cdG1lbnUucHVzaChEaXNoKFxuXHRcdFx0XCJMZXTigJlzIGdpdmUg4oCZZW0gc29tZXRoaW5nIHRvIHRhY28g4oCZYm91dFwiLFxuXHRcdFx0XCJEZWxpY2lvdXMgbWV4aWNhbiB0YWNvcy5cIixcblx0XHRcdFwiMTMuMDDigqxcIixcblx0XHRcdFwiLi9pbWFnZXMvbGV0c2dpdmV0aGVtc29tZXRoaW5ndG90YWNvYWJvdXRfNjAwWDQwMC5qcGVnXCJcblx0KSk7XG5cdFxuXHRtZW51LmZvckVhY2goKGl0ZW0sIGluZGV4LCBtZW51KSA9PiB7XG5cdFx0bGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdFx0bGV0IGRpc2hEaXYgPSBjcmVhdGVEaXNoRGl2KGl0ZW0pO1xuXHRcdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGlzaERpdik7XG5cdH0pO1xuXHRcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzaERpdihkaXNoKSB7XG5cdFxuXHRsZXQgZGlzaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRpc2hEaXYuY2xhc3NOYW1lID0gXCJkaXNoXCI7XG5cdFxuXHRsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5cdHRpdGxlRGl2LmNsYXNzTmFtZSA9IFwiZGlzaFRpdGxlXCI7XG5cdHRpdGxlRGl2LmlubmVyVGV4dCA9IGRpc2guZ2V0VGl0bGUoKTtcblxuXHRsZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblx0ZGVzY3JpcHRpb25EaXYuY2xhc3NOYW1lID0gXCJkaXNoRGVzY3JpcHRpb25cIjtcblx0ZGVzY3JpcHRpb25EaXYuaW5uZXJUZXh0ID0gZGlzaC5nZXREZXNjcmlwdGlvbigpO1xuXHRcblx0bGV0IHByaWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdHByaWNlRGl2LmNsYXNzTmFtZSA9IFwiZGlzaFByaWNlXCI7XG5cdHByaWNlRGl2LmlubmVyVGV4dCA9IGRpc2guZ2V0UHJpY2UoKTtcblx0XG5cdGxldCBpbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdGltYWdlRGl2LmNsYXNzTmFtZSA9IFwiZGlzaEltYWdlXCI7XG5cdGltYWdlRGl2LnNldEF0dHJpYnV0ZShcInNyY1wiLCBkaXNoLmdldEltYWdldXJsKCkpO1xuXHRpbWFnZURpdi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgZGlzaC5nZXRUaXRsZSgpKTtcblx0XG5cdGRpc2hEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXHRkaXNoRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblx0ZGlzaERpdi5hcHBlbmRDaGlsZChwcmljZURpdik7XG5cdGRpc2hEaXYuYXBwZW5kQ2hpbGQoaW1hZ2VEaXYpO1xuXHRcblx0cmV0dXJuIGRpc2hEaXY7XG5cdFxufVxuXG4vKiogRmFjdG9yeSBvYmplY3QgRGlzaCBpbXBsZW1lbnRhdGlvbiAqKi9cbmV4cG9ydCBjb25zdCBEaXNoID0gKF90aXRsZSwgX2Rlc2NyaXB0aW9uLCBfcHJpY2UsIF9pbWFnZXVybCkgPT4ge1xuXHRcblx0LyoqIFByaXZhdGUgQXR0cmlidXRlcyAqKi9cblx0Y29uc3QgdGl0bGUgPSBfdGl0bGU7XG5cdGNvbnN0IGRlc2NyaXB0aW9uID0gX2Rlc2NyaXB0aW9uO1xuXHRjb25zdCBwcmljZSA9IF9wcmljZTtcblx0Y29uc3QgaW1hZ2V1cmwgPSBfaW1hZ2V1cmw7XG5cdFxuXHQvKiogUHJpdmF0ZSBNZXRob2RzICoqL1xuXHQvKlxuXHRjb25zdCBfcHJpdmF0ZU1ldGhvZDEgPSAoKSA9PiB7XG5cdFx0Ly8gY29kZSBvZiBfcHJpdmF0ZU1ldGhvZDFcblx0fTtcblx0Ki9cblx0XG5cdC8qKiBQdWJsaWMgQXR0cmlidXRlcyAqKi9cblx0Ly9sZXQgcHVibGljQXR0cyA9IHt9OyAvLyBjb250YWluZXIgZm9yIHB1YmxpYyBhdHRyaWJ1dGVzXG5cdC8vcHVibGljQXR0cy5hdHRyMiA9IDI7XG5cdFxuXHQvKiogUHVibGljIE1ldGhvZHMgKiovXG5cdGNvbnN0IGdldFRpdGxlID0gKCkgPT4geyByZXR1cm4gdGl0bGU7IH07XG5cdGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4geyByZXR1cm4gZGVzY3JpcHRpb247IH07XG5cdGNvbnN0IGdldFByaWNlID0gKCkgPT4geyByZXR1cm4gcHJpY2U7IH07XG5cdGNvbnN0IGdldEltYWdldXJsID0gKCkgPT4geyByZXR1cm4gaW1hZ2V1cmw7IH07XG5cdFxuXHQvLyBPYmplY3QgcmV0dXJuZWRcblx0cmV0dXJuIHtcblx0XHRnZXRUaXRsZSxcblx0XHRnZXREZXNjcmlwdGlvbixcblx0XHRnZXRQcmljZSxcblx0XHRnZXRJbWFnZXVybCxcblx0fVxufTtcbk9iamVjdC5mcmVlemUoRGlzaCk7XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIlxuXG5pbXBvcnQgKiBhcyBpbml0cGFnZSBmcm9tIFwiLi9pbml0cGFnZS5qc1wiXG5pbXBvcnQgKiBhcyBtZW51cGFnZSBmcm9tIFwiLi9tZW51cGFnZS5qc1wiXG5pbXBvcnQgKiBhcyBjb250YWN0cGFnZSBmcm9tIFwiLi9jb250YWN0cGFnZS5qc1wiXG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcblx0XG5cdGxldCBoZWFkZXJEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclwiKTtcblx0bGV0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cdG5hbWVEaXYuaW5uZXJUZXh0ID0gXCJQVU4gUkVTVEFVUkFOVFwiXG5cdFxuXHRsZXQgdGFic0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhYnNEaXYuaWQgPSBcInRhYkxpc3RcIlxuXHRcblx0bGV0IHRhYjFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0YWIxRGl2LmlkID0gXCJ0YWIxXCI7XG5cdHRhYjFEaXYuY2xhc3NOYW1lID0gXCJ0YWJcIjtcblx0dGFiMURpdi5pbm5lclRleHQgPSBcIkhPTUVcIjtcblx0XG5cdGxldCB0YWIyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGFiMkRpdi5pZCA9IFwidGFiMlwiO1xuXHR0YWIyRGl2LmNsYXNzTmFtZSA9IFwidGFiXCI7XG5cdHRhYjJEaXYuaW5uZXJUZXh0ID0gXCJNRU5VXCI7XG5cdFxuXHRsZXQgdGFiM0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhYjNEaXYuaWQgPSBcInRhYjNcIjtcblx0dGFiM0Rpdi5jbGFzc05hbWUgPSBcInRhYlwiO1xuXHR0YWIzRGl2LmlubmVyVGV4dCA9IFwiQ09OVEFDVFwiO1xuXHRcblx0dGFic0Rpdi5hcHBlbmRDaGlsZCh0YWIxRGl2KTtcblx0dGFic0Rpdi5hcHBlbmRDaGlsZCh0YWIyRGl2KTtcblx0dGFic0Rpdi5hcHBlbmRDaGlsZCh0YWIzRGl2KTtcblx0XG5cdGhlYWRlckRpdi5hcHBlbmRDaGlsZChuYW1lRGl2KTtcblx0aGVhZGVyRGl2LmFwcGVuZENoaWxkKHRhYnNEaXYpO1xuXHRcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFiU3R5bGUoY3VycmVudFRhYikge1xuXHRcblx0bGV0IHRhYnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFiXCIpO1xuXHRbLi4udGFic10uZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgsIGFycmF5KSA9PiB7XG5cdFx0ZWxlbWVudC5zdHlsZS5jb2xvciA9IFwiXCI7XG5cdFx0ZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuXHRcdGVsZW1lbnQuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIlwiO1xuXHR9KTtcblxuXHRsZXQgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJcIiArIGN1cnJlbnRUYWIpO1xuXHR0YWIuc3R5bGUgPSBcImNvbG9yOiBibHVlOyBcXFxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogY29yYWw7XFxcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBcXFxuXHRcdFx0XCI7XG5cbn1cblxuZnVuY3Rpb24gZGVsQ29udGVudCgpIHtcblx0bGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY2hlY2tUYWIoKSB7XG5cdFxuXHRzd2l0Y2ggKGN1cnJlbnRUYWIpIHtcblx0XG5cdGNhc2UgMTpcblx0XHRkZWxDb250ZW50KCk7XG5cdFx0aW5pdHBhZ2Uuc2hvd0luaXRQYWdlKCk7XG5cdFx0YnJlYWs7XG5cdFx0XG5cdGNhc2UgMjpcblx0XHRkZWxDb250ZW50KCk7XG5cdFx0bWVudXBhZ2Uuc2hvd01lbnVQYWdlKCk7XG5cdFx0YnJlYWs7XG5cdFx0XG5cdGNhc2UgMzpcblx0XHRkZWxDb250ZW50KCk7XG5cdFx0Y29udGFjdHBhZ2Uuc2hvd0NvbnRhY3RQYWdlKCk7XG5cdFx0YnJlYWs7XG5cdFxuXHRkZWZhdWx0OlxuXHRcdGJyZWFrO1xuXHR9XG5cdFxuXHRjaGFuZ2VUYWJTdHlsZShjdXJyZW50VGFiKTtcbn1cblxuXG5cblxuLyoqIExpc3RlbmVycyAqKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcblx0bGV0IHRhYjFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYjFcIik7XG5cdHRhYjFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoY3VycmVudFRhYiA9PSAxKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRUYWIgPSAxO1xuXHRcdFx0Y2hlY2tUYWIoKTtcblx0XHR9XG5cdH0pO1xuXG5cdGxldCB0YWIyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWIyXCIpO1xuXHR0YWIyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aWYgKGN1cnJlbnRUYWIgPT0gMikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VGFiID0gMjtcblx0XHRcdGNoZWNrVGFiKCk7XG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgdGFiM0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiM1wiKTtcblx0dGFiM0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmIChjdXJyZW50VGFiID09IDMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFRhYiA9IDM7XG5cdFx0XHRjaGVja1RhYigpO1xuXHRcdH1cblx0fSk7XG59XG5cbi8qKiBNYWluICoqLyBcbmNyZWF0ZUhlYWRlcigpO1xubGV0IGN1cnJlbnRUYWIgPSAxO1xuY2hlY2tUYWIoKTtcbmFkZExpc3RlbmVycygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9