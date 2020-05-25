/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/quantity.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/quantity.jsx":
/*!*******************************************!*\
  !*** ./app/javascript/packs/quantity.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/nilya/Share/dar-app/app/javascript/packs/quantity.jsx: Unexpected token, expected \",\" (14:26)\n\n  12 | \n  13 |   handlePlus(event) {\n> 14 |     this.setState(quantity: this.state.quantity + 1)\n     |                           ^\n  15 |   }\n  16 | \n  17 |   handleMinus(event) {\n    at Object._raise (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:742:17)\n    at Object.raiseWithData (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:735:17)\n    at Object.raise (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:729:17)\n    at Object.unexpected (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:8779:16)\n    at Object.expect (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:8765:28)\n    at Object.parseCallExpressionArguments (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:9792:14)\n    at Object.parseSubscript (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:9718:31)\n    at Object.parseSubscripts (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:9647:19)\n    at Object.parseExprSubscripts (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:9630:17)\n    at Object.parseMaybeUnary (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:9604:21)\n    at Object.parseExprOps (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:9474:23)\n    at Object.parseMaybeConditional (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:9447:23)\n    at Object.parseMaybeAssign (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:9402:21)\n    at Object.parseExpression (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:9354:23)\n    at Object.parseStatementContent (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:11233:23)\n    at Object.parseStatement (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:11104:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:11679:25)\n    at Object.parseBlockBody (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:11665:10)\n    at Object.parseBlock (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:11649:10)\n    at Object.parseFunctionBody (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:10656:24)\n    at Object.parseFunctionBodyAndFinish (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:10639:10)\n    at Object.parseMethod (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:10601:10)\n    at Object.pushClassMethod (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:12104:30)\n    at Object.parseClassMemberWithIsStatic (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:12021:12)\n    at Object.parseClassMember (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:11963:10)\n    at /Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:11908:14\n    at Object.withTopicForbiddingContext (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:10979:14)\n    at Object.parseClassBody (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:11885:10)\n    at Object.parseClass (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:11859:22)\n    at Object.parseExportDefaultExpression (/Users/nilya/Share/dar-app/node_modules/@babel/parser/lib/index.js:12295:19)");

/***/ })

/******/ });
//# sourceMappingURL=quantity-bd9a8e30dfcd6f7cc7da.js.map