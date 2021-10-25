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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFZOztBQUVMO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdEJZOztBQUVMO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCWTs7QUFFTDtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixnQ0FBZ0M7QUFDaEMsMEJBQTBCO0FBQzFCLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O1VDM0dBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05ZOztBQUVaLENBQXlDO0FBQ0E7QUFDTTs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFxQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQXFCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0REFBMkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3RwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5pdHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51cGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NvbnRhY3RQYWdlKCkge1xuXHRcblx0bGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cdFxuXHRsZXQgcGhvbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRwaG9uZURpdi5jbGFzc05hbWUgPSBcInBob25lXCI7XG5cdHBob25lRGl2LmlubmVyVGV4dCA9IFwiMzYgMjQgMzYgQ2FsbCFcIjtcblx0XG5cdGxldCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRsb2NhdGlvbkRpdi5jbGFzc05hbWUgPSBcImxvY2F0aW9uVGV4dFwiO1xuXHRsb2NhdGlvbkRpdi5pbm5lclRleHQgPSBcIjY3IE92ZXJoaWxsIFJvYWQgaW4gRWFzdCBEdWx3aWNoXCJcblx0XG5cdGxldCBsb2NhdGlvbkltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltYWdlXCIpO1xuXHRsb2NhdGlvbkltYWdlLmlkID0gXCJsb2NhdGlvbk1hcFwiO1xuXHRsb2NhdGlvbkltYWdlLnNyYyA9IFwiLi9pbWFnZXMvbG9jYXRpb24ucG5nXCI7XG5cdFxuXHRjb250ZW50RGl2LmFwcGVuZENoaWxkKHBob25lRGl2KTtcblx0Y29udGVudERpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdik7XG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25JbWFnZSk7XG5cdFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dJbml0UGFnZSgpIHtcblx0XG5cdGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRcblx0bGV0IHRleHQxRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGV4dDFEaXYuY2xhc3NOYW1lID0gXCJ0ZXh0MVwiO1xuXHR0ZXh0MURpdi5pbm5lclRleHQgPSBcIldlbGNvbWUgdG8gUHVuIFJlc3RhdXJhbnQhXCI7XG5cdFxuXHRsZXQgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1hZ2VcIik7XG5cdGltYWdlRGl2LmlkID0gXCJmcm9udEltYWdlXCI7XG5cdGltYWdlRGl2LnNyYyA9IFwiLi9pbWFnZXMvZnJvbnRpbWFnZS5qcGVnXCI7XG5cdFxuXHRsZXQgdGV4dDJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0ZXh0MkRpdi5jbGFzc05hbWUgPSBcInRleHQyXCI7XG5cdHRleHQyRGl2LmlubmVyVGV4dCA9IFwiQ29tZSB2aXNpdCB1cyFcIjtcblx0XG5cdGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGV4dDFEaXYpO1xuXHRjb250ZW50RGl2LmFwcGVuZENoaWxkKGltYWdlRGl2KTtcblx0Y29udGVudERpdi5hcHBlbmRDaGlsZCh0ZXh0MkRpdik7XG5cdFxufVxuIiwiXCJ1c2Ugc3RyaWN0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNZW51UGFnZSgpIHtcblx0XG5cdGxldCBtZW51ID0gW107XG5cdG1lbnUucHVzaChEaXNoKFxuXHRcdFx0XCJMZXR0dWNlIHVzIGNlbGVicmF0ZSFcIixcblx0XHRcdFwiTGV0dHVjZSB1cyBjZWxlYnJhdGUhXCIsXG5cdFx0XHRcIjEwLjUw4oKsXCIsXG5cdFx0XHRcIi4vaW1hZ2VzL2xldHR1Y2VjZWxlYnJhdGUuanBlZ1wiXG5cdCkpO1xuXHRtZW51LnB1c2goRGlzaChcblx0XHRcdFwiTmljZSB0byBtZWF0IHlvdS5cIixcblx0XHRcdFwiTmljZSB0byBtZWF0IHlvdS5cIixcblx0XHRcdFwiMTYuMDDigqxcIixcblx0XHRcdFwiLi9pbWFnZXMvbmljZXRvbWVhdHlvdS5qcGVnXCJcblx0KSk7XG5cdG1lbnUucHVzaChEaXNoKFxuXHRcdFx0XCJQYXN0YSBsYSB2aXN0YSwgYmFieSFcIixcblx0XHRcdFwiUGFzdGEgbGEgdmlzdGEsIGJhYnkhXCIsXG5cdFx0XHRcIjEzLjUw4oKsXCIsXG5cdFx0XHRcIi4vaW1hZ2VzL3Bhc3RhbGF2aXN0YS5qcGVnXCJcblx0KSk7XG5cdG1lbnUucHVzaChEaXNoKFxuXHRcdFx0XCJEb27igJl0IGdvIGJhY29uIG15IGhlYXJ0LlwiLFxuXHRcdFx0XCJEb27igJl0IGdvIGJhY29uIG15IGhlYXJ0LlwiLFxuXHRcdFx0XCIxNC41MOKCrFwiLFxuXHRcdFx0XCIuL2ltYWdlcy9kb250Z29iYWNvbm15aGVhcnQuanBlZ1wiXG5cdCkpO1xuXHRtZW51LnB1c2goRGlzaChcblx0XHRcdFwiTGV04oCZcyBnaXZlIOKAmWVtIHNvbWV0aGluZyB0byB0YWNvIOKAmWJvdXRcIixcblx0XHRcdFwiTGV04oCZcyBnaXZlIOKAmWVtIHNvbWV0aGluZyB0byB0YWNvIOKAmWJvdXRcIixcblx0XHRcdFwiMTMuMDDigqxcIixcblx0XHRcdFwiLi9pbWFnZXMvbGV0c2dpdmV0aGVtc29tZXRoaW5ndG90YWNvYWJvdXQuanBlZ1wiXG5cdCkpO1xuXHRcblx0bWVudS5mb3JFYWNoKChpdGVtLCBpbmRleCwgbWVudSkgPT4ge1xuXHRcdGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXHRcdGxldCBkaXNoRGl2ID0gY3JlYXRlRGlzaERpdihpdGVtKTtcblx0XHRjb250ZW50RGl2LmFwcGVuZENoaWxkKGRpc2hEaXYpO1xuXHR9KTtcblx0XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc2hEaXYoZGlzaCkge1xuXHRcblx0bGV0IGRpc2hEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkaXNoRGl2LmNsYXNzTmFtZSA9IFwiZGlzaFwiO1xuXHRcblx0bGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuXHR0aXRsZURpdi5jbGFzc05hbWUgPSBcImRpc2hUaXRsZVwiO1xuXHR0aXRsZURpdi5pbm5lclRleHQgPSBkaXNoLmdldFRpdGxlKCk7XG5cblx0bGV0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cdGRlc2NyaXB0aW9uRGl2LmNsYXNzTmFtZSA9IFwiZGlzaERlc2NyaXB0aW9uXCI7XG5cdGRlc2NyaXB0aW9uRGl2LmlubmVyVGV4dCA9IGRpc2guZ2V0RGVzY3JpcHRpb24oKTtcblx0XG5cdGxldCBwcmljZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXHRwcmljZURpdi5jbGFzc05hbWUgPSBcImRpc2hQcmljZVwiO1xuXHRwcmljZURpdi5pbm5lclRleHQgPSBkaXNoLmdldFByaWNlKCk7XG5cdFxuXHRsZXQgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1hZ2VcIik7XG5cdGltYWdlRGl2LmNsYXNzTmFtZSA9IFwiZGlzaEltYWdlXCI7XG5cdGltYWdlRGl2LnNyYyA9IGRpc2guZ2V0SW1hZ2V1cmwoKTtcblx0XG5cdGRpc2hEaXYuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xuXHRkaXNoRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KTtcblx0ZGlzaERpdi5hcHBlbmRDaGlsZChwcmljZURpdik7XG5cdFxuXHRyZXR1cm4gZGlzaERpdjtcblx0XG59XG5cbi8qKiBGYWN0b3J5IG9iamVjdCBEaXNoIGltcGxlbWVudGF0aW9uICoqL1xuZXhwb3J0IGNvbnN0IERpc2ggPSAoX3RpdGxlLCBfZGVzY3JpcHRpb24sIF9wcmljZSwgX2ltYWdldXJsKSA9PiB7XG5cdFxuXHQvKiogUHJpdmF0ZSBBdHRyaWJ1dGVzICoqL1xuXHRjb25zdCB0aXRsZSA9IF90aXRsZTtcblx0Y29uc3QgZGVzY3JpcHRpb24gPSBfZGVzY3JpcHRpb247XG5cdGNvbnN0IHByaWNlID0gX3ByaWNlO1xuXHRjb25zdCBpbWFnZXVybCA9IF9pbWFnZXVybDtcblx0XG5cdC8qKiBQcml2YXRlIE1ldGhvZHMgKiovXG5cdC8qXG5cdGNvbnN0IF9wcml2YXRlTWV0aG9kMSA9ICgpID0+IHtcblx0XHQvLyBjb2RlIG9mIF9wcml2YXRlTWV0aG9kMVxuXHR9O1xuXHQqL1xuXHRcblx0LyoqIFB1YmxpYyBBdHRyaWJ1dGVzICoqL1xuXHQvL2xldCBwdWJsaWNBdHRzID0ge307IC8vIGNvbnRhaW5lciBmb3IgcHVibGljIGF0dHJpYnV0ZXNcblx0Ly9wdWJsaWNBdHRzLmF0dHIyID0gMjtcblx0XG5cdC8qKiBQdWJsaWMgTWV0aG9kcyAqKi9cblx0Y29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7IHJldHVybiB0aXRsZTsgfTtcblx0Y29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7IHJldHVybiBkZXNjcmlwdGlvbjsgfTtcblx0Y29uc3QgZ2V0UHJpY2UgPSAoKSA9PiB7IHJldHVybiBwcmljZTsgfTtcblx0Y29uc3QgZ2V0SW1hZ2V1cmwgPSAoKSA9PiB7IHJldHVybiBpbWFnZXVybDsgfTtcblx0XG5cdC8vIE9iamVjdCByZXR1cm5lZFxuXHRyZXR1cm4ge1xuXHRcdGdldFRpdGxlLFxuXHRcdGdldERlc2NyaXB0aW9uLFxuXHRcdGdldFByaWNlLFxuXHRcdGdldEltYWdldXJsLFxuXHR9XG59O1xuT2JqZWN0LmZyZWV6ZShEaXNoKTtcblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlwidXNlIHN0cmljdFwiXG5cbmltcG9ydCAqIGFzIGluaXRwYWdlIGZyb20gXCIuL2luaXRwYWdlLmpzXCJcbmltcG9ydCAqIGFzIG1lbnVwYWdlIGZyb20gXCIuL21lbnVwYWdlLmpzXCJcbmltcG9ydCAqIGFzIGNvbnRhY3RwYWdlIGZyb20gXCIuL2NvbnRhY3RwYWdlLmpzXCJcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuXHRcblx0bGV0IGhlYWRlckRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyXCIpO1xuXHRsZXQgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblx0bmFtZURpdi5pbm5lclRleHQgPSBcIlBVTiBSRVNUQVVSQU5UXCJcblx0XG5cdGxldCB0YWJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGFic0Rpdi5pZCA9IFwidGFiTGlzdFwiXG5cdFxuXHRsZXQgdGFiMURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdHRhYjFEaXYuaWQgPSBcInRhYjFcIjtcblx0dGFiMURpdi5jbGFzc05hbWUgPSBcInRhYlwiO1xuXHR0YWIxRGl2LmlubmVyVGV4dCA9IFwiSE9NRVwiO1xuXHRcblx0bGV0IHRhYjJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHR0YWIyRGl2LmlkID0gXCJ0YWIyXCI7XG5cdHRhYjJEaXYuY2xhc3NOYW1lID0gXCJ0YWJcIjtcblx0dGFiMkRpdi5pbm5lclRleHQgPSBcIk1FTlVcIjtcblx0XG5cdGxldCB0YWIzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0dGFiM0Rpdi5pZCA9IFwidGFiM1wiO1xuXHR0YWIzRGl2LmNsYXNzTmFtZSA9IFwidGFiXCI7XG5cdHRhYjNEaXYuaW5uZXJUZXh0ID0gXCJDT05UQUNUXCI7XG5cdFxuXHR0YWJzRGl2LmFwcGVuZENoaWxkKHRhYjFEaXYpO1xuXHR0YWJzRGl2LmFwcGVuZENoaWxkKHRhYjJEaXYpO1xuXHR0YWJzRGl2LmFwcGVuZENoaWxkKHRhYjNEaXYpO1xuXHRcblx0aGVhZGVyRGl2LmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXHRoZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGFic0Rpdik7XG5cdFxufVxuXG5mdW5jdGlvbiBkZWxDb250ZW50KCkge1xuXHRsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcblx0Y29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjaGVja1RhYigpIHtcblx0XG5cdHN3aXRjaCAoY3VycmVudFRhYikge1xuXHRcblx0Y2FzZSAxOlxuXHRcdGRlbENvbnRlbnQoKTtcblx0XHRpbml0cGFnZS5zaG93SW5pdFBhZ2UoKTtcblx0XHRicmVhaztcblx0XHRcblx0Y2FzZSAyOlxuXHRcdGRlbENvbnRlbnQoKTtcblx0XHRtZW51cGFnZS5zaG93TWVudVBhZ2UoKTtcblx0XHRicmVhaztcblx0XHRcblx0Y2FzZSAzOlxuXHRcdGRlbENvbnRlbnQoKTtcblx0XHRjb250YWN0cGFnZS5zaG93Q29udGFjdFBhZ2UoKTtcblx0XHRicmVhaztcblx0XG5cdGRlZmF1bHQ6XG5cdFx0YnJlYWs7XG5cdH1cbn1cblxuXG5cblxuLyoqIExpc3RlbmVycyAqKi9cbmZ1bmN0aW9uIGFkZExpc3RlbmVycygpIHtcblx0bGV0IHRhYjFEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYjFcIik7XG5cdHRhYjFEaXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRpZiAoY3VycmVudFRhYiA9PSAxKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1cnJlbnRUYWIgPSAxO1xuXHRcdFx0Y2hlY2tUYWIoKTtcblx0XHR9XG5cdH0pO1xuXG5cdGxldCB0YWIyRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWIyXCIpO1xuXHR0YWIyRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0aWYgKGN1cnJlbnRUYWIgPT0gMikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJyZW50VGFiID0gMjtcblx0XHRcdGNoZWNrVGFiKCk7XG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgdGFiM0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiM1wiKTtcblx0dGFiM0Rpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdGlmIChjdXJyZW50VGFiID09IDMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFRhYiA9IDM7XG5cdFx0XHRjaGVja1RhYigpO1xuXHRcdH1cblx0fSk7XG59XG5cbi8qKiBNYWluICoqLyBcbmNyZWF0ZUhlYWRlcigpO1xubGV0IGN1cnJlbnRUYWIgPSAxO1xuY2hlY2tUYWIoKTtcbmFkZExpc3RlbmVycygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9