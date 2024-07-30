/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/Chart.js":
/*!******************************!*\
  !*** ./src/classes/Chart.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chart: () => (/* binding */ Chart)
/* harmony export */ });
/* harmony import */ var _Chore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chore */ "./src/classes/Chore.js");


class Chart {
    DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    TIMES = ['Morning', 'Afternoon', 'Night'];

    constructor() {
        this.heading;
        this.chores = []; // Array to hold Chore instances
    }

    get heading() {
        return this._heading;
    }

    set heading(heading) {
        this._heading = heading;
    }

    addChore(chore) {
        if (chore instanceof _Chore__WEBPACK_IMPORTED_MODULE_0__.Chore) {
            this.chores.push(chore);
        } else {
            console.error('Invalid chore. Must be an instance of Chore.');
        }
    }

    render() {
        let html = `
            <div class="chart-header">
                <h1>${this.heading}</h1>
            </div>
            <div class="chart-content">
                <div class="points-container">
                    <div class="points">Points: </div>
                    <div class="high-score">High Score: </div>
                </div>
        `;

        // Render each day of the week
        this.DAYS.forEach(day => {
            html += `<div class="day">${day}</div>`;
        });

        // Render each time of day and any chores that are scheduled for that time
        if (this.chores.length > 0) {
            this.TIMES.forEach(time => {
                var chores = this.chores.filter(chore => chore.time === time);

                if (chores.length) {
                    html += `<div class="${time.toLowerCase()} full-row">${time}</div>`;

                    chores.forEach(chore => {
                        html += chore.render(); // Render the chore and add to HTML
                    });
                }
            });
        }

        // Add the rest of the chart
        html += `
            </div>
        </div>`;

        return html;
    }
}

/***/ }),

/***/ "./src/classes/Chore.js":
/*!******************************!*\
  !*** ./src/classes/Chore.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chore: () => (/* binding */ Chore)
/* harmony export */ });
class Chore {
    DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    MULTIPLIER_PREFIX = 'x';

    constructor(name, points, time, days, multipliers) {
        this.name = name;
        this.points = points;
        this.time = time;          // example: 'Morning'
        this.days = days;               // example: ['Monday', 'Tuesday', 'Wednesday', 'Saturday']
        this.multipliers = multipliers; // example: { 'Monday': 2, 'Saturday': 3 }
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get points() {
        return this._points;
    }

    set points(points) {
        this._points = points;
    }

    get days() {
        return this._days;
    }

    set days(days) {
        this._days = days;
    }

    get multipliers() {
        return this._multipliers;
    }

    set multipliers(multipliers) {
        this._multipliers = multipliers;
    }

    render() {
        let html = `<div class="chore">${this.name} <span class="points">${this.points}</span></div>`;

        // Create a grid for each day of the week
        for (let i = 0; i < this.DAYS.length; i++) {
            const day = this.DAYS[i];
            if (this.days.includes(day)) {
                if (this.multipliers[day]) {
                    html += `<div class="multiplier">${this.MULTIPLIER_PREFIX}${this.multipliers[day]}</div>`;
                } else {
                    html += `<div class="filled"></div>`;
                }
            } else {
                html += `<div class="empty"></div>`;
            }
        }

        return html;
    }
}

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Chart */ "./src/classes/Chart.js");
/* harmony import */ var _classes_Chore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Chore */ "./src/classes/Chore.js");



// Create some Chore instances
const chore1 = new _classes_Chore__WEBPACK_IMPORTED_MODULE_1__.Chore('Make your bed', 5, 'Morning', ['Monday', 'Tuesday', 'Wednesday'], { 'Monday': 2 });
const chore2 = new _classes_Chore__WEBPACK_IMPORTED_MODULE_1__.Chore('Brush your teeth', 5, 'Night', ['Monday', 'Friday'], { 'Friday': 3 });

// Create a Chart instance and add chores to it
const chart = new _classes_Chart__WEBPACK_IMPORTED_MODULE_0__.Chart();
chart.addChore(chore1);
chart.addChore(chore2);

// Render the chart and add it to the page
document.getElementById('chart-container').innerHTML = chart.render();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "style.css");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNoQztBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlDQUFLO0FBQ2xDO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsSUFBSTtBQUM1QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsb0JBQW9CLFlBQVksS0FBSztBQUNoRjtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsd0NBQXdDO0FBQ3hDLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsV0FBVyx1QkFBdUIsWUFBWTtBQUN2RjtBQUNBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSx1REFBdUQsdUJBQXVCLEVBQUUsc0JBQXNCO0FBQ3RHLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUMvREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJ3QztBQUNBO0FBQ3hDO0FBQ0E7QUFDQSxtQkFBbUIsaURBQUssc0VBQXNFLGFBQWE7QUFDM0csbUJBQW1CLGlEQUFLLHlEQUF5RCxhQUFhO0FBQzlGO0FBQ0E7QUFDQSxrQkFBa0IsaURBQUs7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRTs7Ozs7Ozs7Ozs7O0FDYkEsaUVBQWUscUJBQXVCLGNBQWMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nob3Jlcy8uL3NyYy9jbGFzc2VzL0NoYXJ0LmpzIiwid2VicGFjazovL2Nob3Jlcy8uL3NyYy9jbGFzc2VzL0Nob3JlLmpzIiwid2VicGFjazovL2Nob3Jlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaG9yZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nob3Jlcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nob3Jlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nob3Jlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nob3Jlcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jaG9yZXMvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9jaG9yZXMvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENob3JlIH0gZnJvbSAnLi9DaG9yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcnQge1xyXG4gICAgREFZUyA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXTtcclxuICAgIFRJTUVTID0gWydNb3JuaW5nJywgJ0FmdGVybm9vbicsICdOaWdodCddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGVhZGluZztcclxuICAgICAgICB0aGlzLmNob3JlcyA9IFtdOyAvLyBBcnJheSB0byBob2xkIENob3JlIGluc3RhbmNlc1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWFkaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWFkaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBoZWFkaW5nKGhlYWRpbmcpIHtcclxuICAgICAgICB0aGlzLl9oZWFkaW5nID0gaGVhZGluZztcclxuICAgIH1cclxuXHJcbiAgICBhZGRDaG9yZShjaG9yZSkge1xyXG4gICAgICAgIGlmIChjaG9yZSBpbnN0YW5jZW9mIENob3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hvcmVzLnB1c2goY2hvcmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgY2hvcmUuIE11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgQ2hvcmUuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgaHRtbCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0LWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPiR7dGhpcy5oZWFkaW5nfTwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvaW50cy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRzXCI+UG9pbnRzOiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGlnaC1zY29yZVwiPkhpZ2ggU2NvcmU6IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgLy8gUmVuZGVyIGVhY2ggZGF5IG9mIHRoZSB3ZWVrXHJcbiAgICAgICAgdGhpcy5EQVlTLmZvckVhY2goZGF5ID0+IHtcclxuICAgICAgICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cImRheVwiPiR7ZGF5fTwvZGl2PmA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFJlbmRlciBlYWNoIHRpbWUgb2YgZGF5IGFuZCBhbnkgY2hvcmVzIHRoYXQgYXJlIHNjaGVkdWxlZCBmb3IgdGhhdCB0aW1lXHJcbiAgICAgICAgaWYgKHRoaXMuY2hvcmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5USU1FUy5mb3JFYWNoKHRpbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNob3JlcyA9IHRoaXMuY2hvcmVzLmZpbHRlcihjaG9yZSA9PiBjaG9yZS50aW1lID09PSB0aW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hvcmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9XCIke3RpbWUudG9Mb3dlckNhc2UoKX0gZnVsbC1yb3dcIj4ke3RpbWV9PC9kaXY+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2hvcmVzLmZvckVhY2goY2hvcmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sICs9IGNob3JlLnJlbmRlcigpOyAvLyBSZW5kZXIgdGhlIGNob3JlIGFuZCBhZGQgdG8gSFRNTFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCB0aGUgcmVzdCBvZiB0aGUgY2hhcnRcclxuICAgICAgICBodG1sICs9IGBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuXHJcbiAgICAgICAgcmV0dXJuIGh0bWw7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQ2hvcmUge1xyXG4gICAgREFZUyA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXTtcclxuICAgIE1VTFRJUExJRVJfUFJFRklYID0gJ3gnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHBvaW50cywgdGltZSwgZGF5cywgbXVsdGlwbGllcnMpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xyXG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7ICAgICAgICAgIC8vIGV4YW1wbGU6ICdNb3JuaW5nJ1xyXG4gICAgICAgIHRoaXMuZGF5cyA9IGRheXM7ICAgICAgICAgICAgICAgLy8gZXhhbXBsZTogWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnU2F0dXJkYXknXVxyXG4gICAgICAgIHRoaXMubXVsdGlwbGllcnMgPSBtdWx0aXBsaWVyczsgLy8gZXhhbXBsZTogeyAnTW9uZGF5JzogMiwgJ1NhdHVyZGF5JzogMyB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IG5hbWUobmFtZSkge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwb2ludHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvaW50cztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgcG9pbnRzKHBvaW50cykge1xyXG4gICAgICAgIHRoaXMuX3BvaW50cyA9IHBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGF5cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF5cztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZGF5cyhkYXlzKSB7XHJcbiAgICAgICAgdGhpcy5fZGF5cyA9IGRheXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG11bHRpcGxpZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tdWx0aXBsaWVycztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbXVsdGlwbGllcnMobXVsdGlwbGllcnMpIHtcclxuICAgICAgICB0aGlzLl9tdWx0aXBsaWVycyA9IG11bHRpcGxpZXJzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgaHRtbCA9IGA8ZGl2IGNsYXNzPVwiY2hvcmVcIj4ke3RoaXMubmFtZX0gPHNwYW4gY2xhc3M9XCJwb2ludHNcIj4ke3RoaXMucG9pbnRzfTwvc3Bhbj48L2Rpdj5gO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYSBncmlkIGZvciBlYWNoIGRheSBvZiB0aGUgd2Vla1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5EQVlTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRheSA9IHRoaXMuREFZU1tpXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF5cy5pbmNsdWRlcyhkYXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tdWx0aXBsaWVyc1tkYXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cIm11bHRpcGxpZXJcIj4ke3RoaXMuTVVMVElQTElFUl9QUkVGSVh9JHt0aGlzLm11bHRpcGxpZXJzW2RheV19PC9kaXY+YDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbCArPSBgPGRpdiBjbGFzcz1cImZpbGxlZFwiPjwvZGl2PmA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBodG1sICs9IGA8ZGl2IGNsYXNzPVwiZW1wdHlcIj48L2Rpdj5gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IENoYXJ0IH0gZnJvbSAnLi9jbGFzc2VzL0NoYXJ0JztcclxuaW1wb3J0IHsgQ2hvcmUgfSBmcm9tICcuL2NsYXNzZXMvQ2hvcmUnO1xyXG5cclxuLy8gQ3JlYXRlIHNvbWUgQ2hvcmUgaW5zdGFuY2VzXHJcbmNvbnN0IGNob3JlMSA9IG5ldyBDaG9yZSgnTWFrZSB5b3VyIGJlZCcsIDUsICdNb3JuaW5nJywgWydNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknXSwgeyAnTW9uZGF5JzogMiB9KTtcclxuY29uc3QgY2hvcmUyID0gbmV3IENob3JlKCdCcnVzaCB5b3VyIHRlZXRoJywgNSwgJ05pZ2h0JywgWydNb25kYXknLCAnRnJpZGF5J10sIHsgJ0ZyaWRheSc6IDMgfSk7XHJcblxyXG4vLyBDcmVhdGUgYSBDaGFydCBpbnN0YW5jZSBhbmQgYWRkIGNob3JlcyB0byBpdFxyXG5jb25zdCBjaGFydCA9IG5ldyBDaGFydCgpO1xyXG5jaGFydC5hZGRDaG9yZShjaG9yZTEpO1xyXG5jaGFydC5hZGRDaG9yZShjaG9yZTIpO1xyXG5cclxuLy8gUmVuZGVyIHRoZSBjaGFydCBhbmQgYWRkIGl0IHRvIHRoZSBwYWdlXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFydC1jb250YWluZXInKS5pbm5lckhUTUwgPSBjaGFydC5yZW5kZXIoKTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3R5bGUuY3NzXCI7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9