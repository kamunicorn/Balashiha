!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/js",r(r.s="./src/index.js")}({"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(e,t,n){"use strict";var o=n(/*! ./parts/forms.js */"./src/parts/forms.js"),r=n(/*! ./parts/map.js */"./src/parts/map.js"),a=n(/*! ./parts/modals.js */"./src/parts/modals.js");o(),r(),a()},"./src/parts/forms.js":
/*!****************************!*\
  !*** ./src/parts/forms.js ***!
  \****************************/
/*! no static exports found */function(e,t){e.exports=function(){"use strict";document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll("input[type=tel]"),t=document.querySelectorAll("input[type=text]");e.forEach(function(e){e.addEventListener("input",function(){this.value=verifyTelephone(this.value)})}),t.forEach(function(e){e.addEventListener("input",function(){this.value=removeNotLetters(this.value)})}),document.querySelectorAll(".offer-form").forEach(function(e){e.addEventListener("submit",function(e){e.preventDefault(),submitForm(this)})})})}},"./src/parts/map.js":
/*!**************************!*\
  !*** ./src/parts/map.js ***!
  \**************************/
/*! no static exports found */function(e,t){e.exports=function(){"use strict";var o=document.querySelector(".map-container .loader"),r=!1;function a(){var e=new ymaps.Map("map-yandex",{center:[55.738024,37.510322],zoom:13,controls:["zoomControl","typeSelector","fullscreenControl","routeButtonControl"]},{searchControlProvider:"yandex#search"}),t=new ymaps.Placemark(e.getCenter(),{balloonContentBody:'<div class="placemark"><div class="placemark__image"><img src="img/map-image.jpg" alt="Здание завода"></div><div class="placemark__info"><div class="placemark__title">Мы находимся:</div><p class="placemark__text">г. Москва, ул. Неверовского, д. 9<br>Телефон: <a class="placemark__tel" href="tel:+74954444444">+7 (495) 444-44-44</a><br>E-mail: <a class="placemark__mail" href="mailto:info@ied.ru">info@ied.ru</a></p></div></div>',hintContent:"Балашиха хлеб"});e.geoObjects.add(t),t.balloon.open();var r,n=e.layers.get(0).get(0);(r=n,new ymaps.vow.Promise(function(e,t){var n=function(e){for(var t in e)if(e.hasOwnProperty(t)&&(e[t]instanceof ymaps.layer.tileContainer.CanvasContainer||e[t]instanceof ymaps.layer.tileContainer.DomContainer))return e[t];return null}(r),o=!0;n.tiles.each(function(e,t){e.isReady()||(o=!1)}),o?e():n.events.once("ready",function(){e()})})).then(function(){o.classList.remove("is-active")})}var e=function(){document.querySelector(".map-container").onmouseenter=function(){var e,t,n;r||(r=!0,o.classList.add("is-active"),e="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1&amp;apikey=9c0254fc-b560-4b57-9b85-d3b36ca89ee5",t=function(){ymaps.load(a)},(n=document.createElement("script")).readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,t())}:n.onload=function(){t()},n.src=e,document.getElementsByTagName("head")[0].appendChild(n))}};document.addEventListener("DOMContentLoaded",function(){e()})}},"./src/parts/modals.js":
/*!*****************************!*\
  !*** ./src/parts/modals.js ***!
  \*****************************/
/*! no static exports found */function(e,t){e.exports=function(){"use strict";document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("button.product__button").forEach(function(e){e.addEventListener("click",function(){showPopup(this.id)})}),document.querySelector(".call-me__request .call-me__text").addEventListener("click",function(){showPopup("call-offer")}),document.querySelectorAll(".popup").forEach(function(t){t.querySelector(".popup__close").addEventListener("click",function(){closePopup(t)}),t.addEventListener("click",function(e){(e||window.event).target==this&&closePopup(t)})})})}}});