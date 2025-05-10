/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.ts\");\n\nvar todos = [];\nvar nextId = 1;\ndocument.addEventListener('DOMContentLoaded', function () {\n    var form = document.getElementById('form');\n    var input = document.getElementById('ts_2do');\n    var table = document.getElementById('table');\n    // Check for the existence of necessary DOM elements\n    if (!form || !input || !table) {\n        console.error('Required DOM elements are missing.');\n        return;\n    }\n    form.addEventListener('submit', function (e) {\n        e.preventDefault();\n        var text = input.value.trim();\n        if (text === '')\n            return;\n        console.log(text);\n        var priority = detectPriority(text);\n        var todo = {\n            id: nextId++,\n            text: text.replace(/#\\d/, '').trim(),\n            priority: priority,\n            completed: false\n        };\n        todos.push(todo);\n        renderTodos(); // Rendering after adding the new todo\n        input.value = '';\n    });\n    function detectPriority(text) {\n        if (text.startsWith('#1'))\n            return _todo__WEBPACK_IMPORTED_MODULE_0__.Priority.High;\n        if (text.startsWith('#2'))\n            return _todo__WEBPACK_IMPORTED_MODULE_0__.Priority.Medium;\n        if (text.startsWith('#3'))\n            return _todo__WEBPACK_IMPORTED_MODULE_0__.Priority.Low;\n        return _todo__WEBPACK_IMPORTED_MODULE_0__.Priority.Low;\n    }\n    function renderTodos() {\n        if (!table)\n            return; // Make sure table exists before updating\n        table.innerHTML = todos.map(function (todo) { return \"\\n            <tr class=\\\"\".concat(todo.completed ? 'done' : '', \"\\\">\\n                <td><input type=\\\"checkbox\\\" data-id=\\\"\").concat(todo.id, \"\\\" \").concat(todo.completed ? 'checked' : '', \"></td>\\n                <td>\").concat(todo.text, \" (Priority: \").concat(_todo__WEBPACK_IMPORTED_MODULE_0__.Priority[todo.priority], \")</td>\\n                <td><button data-id=\\\"\").concat(todo.id, \"\\\" class=\\\"delete-btn\\\">Delete</button></td>\\n            </tr>\\n        \"); }).join('');\n        attachEventListeners(); // Attaching event listeners after rendering\n    }\n    function attachEventListeners() {\n        if (!table)\n            return; // Guard clause to ensure table exists\n        table.querySelectorAll('input[type=\"checkbox\"]').forEach(function (cb) {\n            cb.addEventListener('change', function (e) {\n                var id = Number(e.target.dataset.id);\n                toggleTodo(id);\n            });\n        });\n        table.querySelectorAll('.delete-btn').forEach(function (btn) {\n            btn.addEventListener('click', function (e) {\n                var id = Number(e.target.dataset.id);\n                deleteTodo(id);\n            });\n        });\n    }\n    function toggleTodo(id) {\n        var todo = todos.find(function (t) { return t.id === id; });\n        if (todo) {\n            todo.completed = !todo.completed;\n            renderTodos(); // Re-render todos after toggling completion\n        }\n    }\n    function deleteTodo(id) {\n        todos = todos.filter(function (t) { return t.id !== id; });\n        renderTodos(); // Re-render todos after deleting\n    }\n});\n\n\n//# sourceURL=webpack://todolist-ts/./src/index.ts?");

/***/ }),

/***/ "./src/todo.ts":
/*!*********************!*\
  !*** ./src/todo.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Priority: () => (/* binding */ Priority)\n/* harmony export */ });\nvar Priority;\n(function (Priority) {\n    Priority[Priority[\"High\"] = 1] = \"High\";\n    Priority[Priority[\"Medium\"] = 2] = \"Medium\";\n    Priority[Priority[\"Low\"] = 3] = \"Low\";\n})(Priority || (Priority = {}));\n\n\n//# sourceURL=webpack://todolist-ts/./src/todo.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;