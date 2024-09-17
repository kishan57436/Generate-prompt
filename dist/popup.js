/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  background-color: #F5F7F8;
  height: 420px;
  width: 260px ;
}
form {
  max-width: 400px;
  margin: auto;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
  font-family: Arial, sans-serif;
}

fieldset {
  border: 1px solid #ccc;
  padding: 1em;
  margin-bottom: 1em;
}

legend {
  font-weight: bold;
  padding: 0 10px;
}

.topdiv{
  display:flex;
  flex-direction: row;
  align-content: space-between;
}

label {
  display: block;
  margin-bottom: 0.5em;
}

input[type="radio"] {
  margin-right: 10px;
}
input[type="checkbox"] {
  margin-right: 10px;
}

input[type="submit"] {
  padding: 0.7em;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

.clipboardbutton
{
  padding: 0.7em;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.clipboardbutton:hover {
  background-color: #45a049;
}
.generatebutton
{
  padding: 0.7em;
  color: #fff;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
}
.generatebutton:hover{
  background-color: #45a049;
}
.success-message {
  background-color: #d4edda; 
  color: #45a049; 
  border: 1px solid #c3e6cb; 
  padding: 1px 10px; 
  border-radius: 5px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  font-size: 12px; 
  font-family: Arial, sans-serif;
  margin: 20px 0; 
 
}
h3{
  line-height: 1.5;
  margin :16px auto 20px ;
}

 a {
  color: #564949; 
  text-decoration: none; 
  font-weight: bold; 
  transition: color 0.3s ease; 
  
}

 a:hover {
  color: #cfbcbc; 
  cursor: pointer;
   
}
.linkto{
  
  text-align: center;
  margin: 20px 60px 10px;
  
  
}

.pre-made-container {
  font-family: Arial, sans-serif;
  padding: 5px;
  margin-top: -20px;
}

.title {
  font-size: 16px;
  margin-bottom: 15px;
  color: #333;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 5px;
}

.card {
  border-radius: 8px;
  padding: 1px;  
  
}

.card-prompt {
  font-size: 12px;
  margin-bottom: 5px;
  transform: translateY(-10px);
}

.copy-button {
  font-size: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

.copy-button:hover {
  background-color: #45a049;
}

.copy-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);
}

.toggle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.toggle-button {
  width: 80px;
  height: 30px;
  background-color: #e0e0e0;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle-button .slider {
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 3px;
  transition: transform 0.3s;
}

.toggle-button.right {
  background-color: #007bff;
}

.toggle-button.right .slider {
  transform: translateX(45px);
}

.toggle-labels {
  display: flex;
  justify-content: space-between;
  width: 200px;
  margin-top: 10px;
}

.toggle-labels span {
  font-size: 14px;
  color: #666;
}

.toggle-labels span.active {
  font-weight: bold;
  color: #333;
}`, "",{"version":3,"sources":["webpack://./src/popup/popup.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,aAAa;EACb,aAAa;AACf;AACA;EACE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;;EAEE,cAAc;EACd,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;AACA;;EAEE,cAAc;EACd,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,mBAAmB;AACrB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,yBAAyB;EACzB,iBAAiB;EACjB,kBAAkB;EAClB,wCAAwC;EACxC,eAAe;EACf,8BAA8B;EAC9B,cAAc;;AAEhB;AACA;EACE,gBAAgB;EAChB,uBAAuB;AACzB;;CAEC;EACC,cAAc;EACd,qBAAqB;EACrB,iBAAiB;EACjB,2BAA2B;;AAE7B;;CAEC;EACC,cAAc;EACd,eAAe;;AAEjB;AACA;;EAEE,kBAAkB;EAClB,sBAAsB;;;AAGxB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,4DAA4D;EAC5D,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,YAAY;;AAEd;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,6CAA6C;AAC/C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,iCAAiC;AACnC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,kBAAkB;EAClB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,0BAA0B;AAC5B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,WAAW;AACb","sourcesContent":["body {\n  background-color: #F5F7F8;\n  height: 420px;\n  width: 260px ;\n}\nform {\n  max-width: 400px;\n  margin: auto;\n  padding: 1em;\n  border: 1px solid #ccc;\n  border-radius: 1em;\n  font-family: Arial, sans-serif;\n}\n\nfieldset {\n  border: 1px solid #ccc;\n  padding: 1em;\n  margin-bottom: 1em;\n}\n\nlegend {\n  font-weight: bold;\n  padding: 0 10px;\n}\n\n.topdiv{\n  display:flex;\n  flex-direction: row;\n  align-content: space-between;\n}\n\nlabel {\n  display: block;\n  margin-bottom: 0.5em;\n}\n\ninput[type=\"radio\"] {\n  margin-right: 10px;\n}\ninput[type=\"checkbox\"] {\n  margin-right: 10px;\n}\n\ninput[type=\"submit\"] {\n  padding: 0.7em;\n  color: #fff;\n  background-color: #007BFF;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\ninput[type=\"submit\"]:hover {\n  background-color: #45a049;\n}\n\n.clipboardbutton\n{\n  padding: 0.7em;\n  color: #fff;\n  background-color: #007BFF;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n\n.clipboardbutton:hover {\n  background-color: #45a049;\n}\n.generatebutton\n{\n  padding: 0.7em;\n  color: #fff;\n  background-color: #007BFF;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  margin-bottom: 10px;\n}\n.generatebutton:hover{\n  background-color: #45a049;\n}\n.success-message {\n  background-color: #d4edda; \n  color: #45a049; \n  border: 1px solid #c3e6cb; \n  padding: 1px 10px; \n  border-radius: 5px; \n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); \n  font-size: 12px; \n  font-family: Arial, sans-serif;\n  margin: 20px 0; \n \n}\nh3{\n  line-height: 1.5;\n  margin :16px auto 20px ;\n}\n\n a {\n  color: #564949; \n  text-decoration: none; \n  font-weight: bold; \n  transition: color 0.3s ease; \n  \n}\n\n a:hover {\n  color: #cfbcbc; \n  cursor: pointer;\n   \n}\n.linkto{\n  \n  text-align: center;\n  margin: 20px 60px 10px;\n  \n  \n}\n\n.pre-made-container {\n  font-family: Arial, sans-serif;\n  padding: 5px;\n  margin-top: -20px;\n}\n\n.title {\n  font-size: 16px;\n  margin-bottom: 15px;\n  color: #333;\n}\n\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 5px;\n}\n\n.card {\n  border-radius: 8px;\n  padding: 1px;  \n  \n}\n\n.card-prompt {\n  font-size: 12px;\n  margin-bottom: 5px;\n  transform: translateY(-10px);\n}\n\n.copy-button {\n  font-size: 12px;\n  background-color: #007bff;\n  color: white;\n  border: none;\n  padding: 8px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out;\n}\n\n.copy-button:hover {\n  background-color: #45a049;\n}\n\n.copy-button:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.5);\n}\n\n.toggle-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.toggle-button {\n  width: 80px;\n  height: 30px;\n  background-color: #e0e0e0;\n  border-radius: 20px;\n  position: relative;\n  cursor: pointer;\n  transition: background-color 0.3s;\n}\n\n.toggle-button .slider {\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  border-radius: 50%;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  transition: transform 0.3s;\n}\n\n.toggle-button.right {\n  background-color: #007bff;\n}\n\n.toggle-button.right .slider {\n  transform: translateX(45px);\n}\n\n.toggle-labels {\n  display: flex;\n  justify-content: space-between;\n  width: 200px;\n  margin-top: 10px;\n}\n\n.toggle-labels span {\n  font-size: 14px;\n  color: #666;\n}\n\n.toggle-labels span.active {\n  font-weight: bold;\n  color: #333;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/popup/popup.css":
/*!*****************************!*\
  !*** ./src/popup/popup.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/popup/custom.tsx":
/*!******************************!*\
  !*** ./src/popup/custom.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");



const Custom = () => {
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => ({
        focus: localStorage.getItem("focus") || "development",
        techStack: JSON.parse(localStorage.getItem("techStack") || "[]"),
    }));
    const [isCopied, setIsCopied] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [generatedPrompt, setGeneratedPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem("generatedPrompt") || "");
    const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        const { name, value, checked } = e.target;
        setIsCopied(false);
        setFormData((prevData) => {
            if (name === "focus") {
                // Reset techStack when focus changes
                return {
                    focus: value,
                    techStack: [],
                };
            }
            else if (name === "techStack") {
                return Object.assign(Object.assign({}, prevData), { techStack: checked
                        ? [...prevData.techStack, value]
                        : prevData.techStack.filter((tech) => tech !== value) });
            }
            else {
                return Object.assign(Object.assign({}, prevData), { [name]: value });
            }
        });
    }, []);
    const handleGenerate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e) => {
        e.preventDefault(); // Add this line to prevent default behavior
        console.log("Form Data Submitted:", formData);
        const cdata = formData.techStack.length > 0
            ? `Act as an expert ${formData.focus} programmer proficient in ${formData.techStack.join(", ")}. Your task is to provide detailed, accurate, and practical advice on ${formData.focus} programming challenges using these technologies. When responding, focus on ${formData.focus} best practices and provide specific examples and explanations for ${formData.techStack.join(", ")}. Offer step-by-step guidance when appropriate, utilizing the mentioned technologies. Your advice should include suggestions for optimizations and improvements within the context of ${formData.techStack.join(", ")}, as well as addressing potential pitfalls and how to avoid them when working with these technologies. 
  
      If the focus is on competitive programming, always include a clear analysis of the time and space complexity for any functions or algorithms you discuss. Explain these complexities in Big O notation and provide brief justifications for your analysis.
  
      Remember to tailor your responses to the specific needs of ${formData.focus} programming while leveraging your expertise in ${formData.techStack.join(", ")}. Your goal is to provide comprehensive, insightful, and actionable information that directly applies to the user's technical environment and programming objectives. Do not write anything right now. Just say understood if you understood the assignment.`
            : `Select at least 1 tech stack to generate the prompt`;
        setGeneratedPrompt(cdata);
        try {
            localStorage.setItem("generatedPrompt", cdata);
            localStorage.setItem("focus", formData.focus);
            localStorage.setItem("techStack", JSON.stringify(formData.techStack));
        }
        catch (error) {
            console.error("Error saving to localStorage:", error);
        }
    }, [formData]);
    const handleCopyPrompt = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        if (!generatedPrompt)
            return;
        navigator.clipboard.writeText(generatedPrompt)
            .then(() => {
            setIsCopied(true);
            console.log("Prompt copied to clipboard");
        })
            .catch((err) => {
            console.error("Failed to copy prompt:", err);
        });
    }, [generatedPrompt]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "AI Prompt Generator"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", null, "Choose Your Focus"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "radio", name: "focus", value: "development", checked: formData.focus === "development", onChange: handleChange }),
                "Development"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "radio", name: "focus", value: "competitive_programming", checked: formData.focus === "competitive_programming", onChange: handleChange }),
                "CP / Leetcode")),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", null, "Choose Your Programming Languages and Tech Stack"),
            (formData.focus === "development"
                ? [
                    "javascript",
                    "python",
                    "java",
                    "csharp",
                    "c++",
                    "html",
                    "css",
                    "react",
                    "nodejs",
                    "django",
                    "flask",
                    "spring",
                ]
                : ["python", "java", "c++"]).map((tech) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { key: tech },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { type: "checkbox", name: "techStack", value: tech, checked: formData.techStack.includes(tech), onChange: handleChange }),
                tech.charAt(0).toUpperCase() + tech.slice(1).replace("_", " & "))))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "generatebutton", onClick: handleGenerate }, "Generate"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", null, "Generated Prompt:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, generatedPrompt),
            generatedPrompt && formData.techStack.length > 0 && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "clipboardbutton", type: "button", onClick: handleCopyPrompt }, "Copy Generated Prompt")),
            isCopied && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "success-message" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Prompt is copied to clipboard")))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "linkto" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { href: "#", onClick: () => chrome.runtime.openOptionsPage() }, "ABOUT"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Custom);


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom */ "./src/popup/custom.tsx");
/* harmony import */ var _preMade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preMade */ "./src/popup/preMade.tsx");






const App = () => {
    const [isCustom, setIsCustom] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    const handleToggle = (event) => {
        event.preventDefault();
        setIsCustom(prevState => !prevState);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "toggle-container" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: `toggle-button ${isCustom ? 'left' : 'right'}`, onClick: handleToggle },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "slider" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "toggle-labels" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: isCustom ? 'active' : '' }, "Custom Prompt"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: !isCustom ? 'active' : '' }, "Explore"))),
            isCustom ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_custom__WEBPACK_IMPORTED_MODULE_3__["default"], null) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(_preMade__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);
const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(rootElement);
root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(App, null));


/***/ }),

/***/ "./src/popup/preMade.tsx":
/*!*******************************!*\
  !*** ./src/popup/preMade.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");
/* harmony import */ var _static_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/data.js */ "./src/static/data.js");




const PreMade = () => {
    const [copiedId, setCopiedId] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const copyToClipboard = (event, prompt, id) => {
        event.preventDefault();
        navigator.clipboard.writeText(prompt).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        });
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "pre-made-container" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { className: "title" }, "Explore Prompts : "),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "card-grid" }, _static_data_js__WEBPACK_IMPORTED_MODULE_2__["default"].map((e) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: e.id, className: "card" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("fieldset", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("legend", null,
                    e.name,
                    " "),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", { className: "card-prompt" },
                    e.prompt.substr(0, 100),
                    "..."),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", { className: "copy-button", onClick: (event) => copyToClipboard(event, e.prompt, e.id) }, copiedId === e.id ? "Copied!" : "Copy to Clipboard"))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreMade);


/***/ }),

/***/ "./src/static/data.js":
/*!****************************!*\
  !*** ./src/static/data.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Data = [
  {
    id: 1,
    name: "Act as Linux Terminal",
    prompt:
      "I want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing else. do not write explanations. do not type commands unless I instruct you to do so. When I need to tell you something in English, I will do so by putting text inside curly brackets {like this}. My first command is pwd",
  },
  {
    id: 2,
    name: "Academic Expert",
    prompt:
      "You are an academic expert, styled as a handsome, professorial figure in your hand-drawn profile picture. Your expertise lies in writing, interpreting, polishing, and rewriting academic papers.\n\nWhen writing:\n1. Use markdown format, including reference numbers [x], data tables, and LaTeX formulas.\n2. Start with an outline, then proceed with writing, showcasing your ability to plan and execute systematically.\n3. If the content is lengthy, provide the first part, followed by three short keywords instructions for continuing. If needed, prompt the user to ask for the next part.\n4. After completing a writing task, offer three follow-up  short keywords instructions in ordered list or suggest printing the next section.\n\nWhen rewriting or polishing:\nProvide at least three alternatives.\n\nEngage with users using emojis to add a friendly and approachable tone to your academic proficiency.🙂"
  },
  {
    id: 3,
    name: "Programming Expert",
    prompt:
      "You are a programming expert with strong coding skills.\nYou can solve all kinds of programming problems.\nYou can design projects, code structures, and code files step by step with one click.\nYou like using emojis😄\n1. Design first (Brief description in ONE sentence What framework do you plan to program in), act later.\n2. If it's a small question, answer it directly\n3. If it's a complex problem, please give the project structure ( or directory structor)  directly, and start coding, take one small step at a time, and then tell the user to print next or continue（Tell user print next or continue is VERY IMPORTANT!）\n4. use emojis"
  },
  {
    id: 4,
    name: "Act as SDE Interviewer",
    prompt: "I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the software Developer position. I want you to only reply as the interviewer. Do not write all the conservation at once. I want you to only do the interview with me. Ask me the questions and wait for my answers. Do not write explanations. Ask me the questions one by one like an interviewer does and wait for my answers. My first sentence is 'Hi'"
  },
 
  {
    id: 5,
    name: "Expert Prompt Creator",
    prompt: "I want you to become my Expert Prompt Creator. The objective is to assist me in creating the most effective prompts to be used with ChatGPT. The generated prompt should be in the first person (me), as if I were directly requesting a response from ChatGPT. Your response will be in the following format:\n\" **Prompt:**\n{Provide the best possible prompt according to my request. There are no restrictions to the length of the prompt. Utilize your knowledge of prompt creation techniques to craft an expert prompt. Frame the prompt as a request for a response from ChatGPT. An example would be \"You will act as an expert physicist to help me understand the nature of the universe...\". Use '>' Markdown format}\n**Possible Additions:** {Create five possible additions to incorporate directly in the prompt. These should be concise additions to expand the details of the prompt. Inference or assumptions may be used to determine these options. Options will be listed using uppercase-alpha. Always update with new Additions after every response.}\n**Questions:** {Frame three questions that seek additional information from me to further refine the prompt. If certain areas of the prompt require further detail or clarity, use these questions to gain the necessary information. I am not required to answer all questions.} \"\nInstructions: After sections Prompt, Possible Additions, and Questions are generated, I will respond with my chosen additions and answers to the questions. Incorporate my responses directly into the prompt wording in the next iteration. We will continue this iterative process with me providing additional information to you and you updating the prompt until the prompt is perfected. Be thoughtful and imaginative while crafting the prompt. At the end of each response, provide concise instructions on the next steps.\nBefore we start the process, first provide a greeting and ask me what the prompt should be about. Don't display the sections on this first response."
  },
  {
    id: 6,
    name: "Human-like Text Transformer",
    prompt: "You are an expert in natural language processing and human communication. Your task is to transform AI-generated text into more human-like, natural-sounding content. When I provide you with text, analyze it and rewrite it in a way that sounds more conversational, authentic, and human. Add nuances, imperfections, and stylistic elements that are characteristic of human writing. Maintain the original meaning and key information while making the text feel less robotic and more relatable.\n**Possible Additions:** A. Include occasional colloquialisms or idioms B. Vary sentence structure and length C. Introduce mild inconsistencies or tangents D. Add personal anecdotes or examples E. Incorporate emotive language and tone"
  },
  {
    id: 7,
    name: "AI Text Analyzer",
    prompt: "You are an expert AI language model analyst with extensive knowledge of natural language processing and machine learning techniques. Your task is to analyze text samples I provide and determine the likelihood that they were generated by an AI language model. For each text sample, carefully examine the writing style, structure, vocabulary, and overall coherence. After your analysis, provide a percentage estimate of how likely the text was written by AI, with 0% meaning definitely human-written and 100% meaning definitely AI-generated. Explain your reasoning, highlighting specific elements that influenced your decision. Be thorough in your analysis and consider both obvious and subtle indicators of AI-generated text.\n**Possible Additions:** A. Compare the text to known AI writing patterns and tendencies B. Assess the text for human-like errors, inconsistencies, or nuances C. Evaluate the use of context, creativity, and emotional depth D. Check for repetitive phrases or unusual word choices common in AI text E. Analyze sentence structure variety and complexity"
  }
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_chrome_extension"] = self["webpackChunkreact_chrome_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e"], () => (__webpack_require__("./src/popup/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map