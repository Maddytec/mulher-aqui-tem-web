(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\" footer\">\r\n  <div class=\" container-fluid\">\r\n    <div class=\"fb-like\" \r\n      style=\"padding-left: 25px;\"\r\n      data-href=\"https://mulheraquitem.com.br\" \r\n      data-width=\"\" \r\n      data-layout=\"standard\" \r\n      data-action=\"like\" \r\n      data-size=\"small\" \r\n      data-share=\"true\">\r\n    </div>\r\n\r\n\r\n    <div class=\" copyright\">\r\n      &copy; {{ test | date: \"yyyy\" }} Desenvolvido com\r\n      <i class=\" tim-icons icon-heart-2\"> </i> por\r\n      <a href=\"https://www.maddytec.com.br\" target=\"_blank\"> Maddytec </a>\r\n      para você.\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\" navbar navbar-expand-lg navbar-absolute navbar-transparent\">\r\n  <div class=\" container-fluid\">\r\n    <div class=\" navbar-wrapper\">\r\n      <div class=\" navbar-toggle d-inline\">\r\n        <button class=\" navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n          <span class=\" navbar-toggler-bar bar1\"> </span>\r\n          <span class=\" navbar-toggler-bar bar2\"> </span>\r\n          <span class=\" navbar-toggler-bar bar3\"> </span>\r\n        </button>\r\n      </div>\r\n      <a class=\" navbar-brand\" href=\"javascript:void(0)\"> {{ getTitle() }} </a>\r\n    </div>\r\n    <button\r\n      aria-label=\"Toggle navigation\"\r\n      class=\" navbar-toggler\"\r\n      (click)=\"collapse()\"\r\n      [attr.aria-expanded]=\"!isCollapsed\"\r\n      aria-controls=\"collapseExample\"\r\n      id=\"navigation\"\r\n      type=\"button\"\r\n    >\r\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n      <span class=\" navbar-toggler-bar navbar-kebab\"> </span>\r\n    </button>\r\n    <div class=\" navbar-collapse\" [ngbCollapse]=\"isCollapsed\" id=\"navigation\">\r\n      <ul class=\" navbar-nav ml-auto\">\r\n        <li class=\" search-bar input-group\">\r\n          <button\r\n            class=\" btn btn-link\"\r\n            data-target=\"#searchModal\"\r\n            data-toggle=\"modal\"\r\n            (click)=\"open(content)\"\r\n            id=\"search-button\"\r\n          >\r\n            <i class=\" tim-icons icon-zoom-split\"> </i>\r\n            <span class=\" d-lg-none d-md-block\"> Pesquisa </span>\r\n          </button>\r\n        </li>\r\n        <li class=\" separator d-lg-none\"></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<ng-template #content let-modal>\r\n  <div class=\" modal-header\">\r\n    <input\r\n      class=\" form-control\"\r\n      id=\"inlineFormInputGroup\"\r\n      placeholder=\"SEARCH\"\r\n      type=\"text\"\r\n    />\r\n\r\n    <button\r\n      aria-label=\"Close\"\r\n      class=\" close\"\r\n      data-dismiss=\"modal\"\r\n      type=\"button\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <i class=\" tim-icons icon-simple-remove\"> </i>\r\n    </button>\r\n  </div>\r\n\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\r\n  <a [routerLink]=\"['/inicio']\" class=\"simple-text logo-normal\" style=\"font-size: 16px;\">\r\n    <span class=\"fa fa-home mr-1\"></span> \r\n    Mulher Aqui Tem\r\n  </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n  <ul class=\"nav\">\r\n    <li\r\n    routerLinkActive=\"active\"\r\n    *ngFor=\"let menuItem of menuItems\"\r\n    class=\"{{ menuItem.class }} nav-item\">\r\n    <a [routerLink]=\"[menuItem.path]\">\r\n      <i class=\"tim-icons  {{ menuItem.icon }}\"></i>\r\n      <p>{{ menuItem.title }}</p>\r\n    </a>\r\n  </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"sidebar\"><app-sidebar></app-sidebar></div>\r\n  <div class=\"main-panel\">\r\n    <app-navbar></app-navbar>\r\n    <router-outlet></router-outlet>\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n<div class=\" fixed-plugin\" style=\"width: 30px;\">\r\n  <div class=\" show-dropdown\" ngbDropdown>\r\n    <a data-toggle=\"dropdown\" ngbDropdownToggle>\r\n      <i class=\"fa fa-cog fa-spin fa-fw\"> </i>\r\n    </a>\r\n    <ul ngbDropdownMenu style=\"right: 40px\">\r\n      <li class=\" header-title\">Qual a cor você mais gosta?</li>\r\n      <li class=\" adjustments-line\">\r\n        <a class=\" switch-trigger background-color\" href=\"javascript:void(0)\">\r\n          <div class=\" badge-colors text-center\">\r\n            <span class=\" badge filter badge-danger\" [ngClass]=\"{'active':sidebarColor==='red'}\" (click)=\"changeSidebarColor('red')\"></span>\r\n            <span class=\" badge filter badge-primary\" [ngClass]=\"{'active':sidebarColor==='primary'}\" (click)=\"changeSidebarColor('primary')\"></span>\r\n            <span class=\" badge filter badge-info\" [ngClass]=\"{'active':sidebarColor==='blue'}\" (click)=\"changeSidebarColor('blue')\"> </span>\r\n            <span class=\" badge filter badge-success\" [ngClass]=\"{'active':sidebarColor==='green'}\" (click)=\"changeSidebarColor('green')\"></span>\r\n          </div>\r\n          <div class=\" clearfix\"></div>\r\n        </a>\r\n      </li>\r\n      <li class=\" header-title\">Cor do Tema</li>\r\n      <li class=\" adjustments-line text-center color-change\">\r\n        <span class=\" color-label\"> BRANCO </span>\r\n        <span class=\" badge light-badge mr-2\" (click)=\"changeDashboardColor('white-content')\"> </span>\r\n        <span class=\" badge dark-badge ml-2\" (click)=\"changeDashboardColor('black-content')\"> </span>\r\n        <span class=\" color-label\"> PRETO </span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/saude/saude.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/saude/saude.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\n    .checked {\n      color: orange;\n    }\n  </style>\n  <div class=\"content\">\n    <nav aria-label=\"breadcrumb\">\n      <ol class=\"breadcrumb\">\n        <li class=\"breadcrumb-item\"><a routerLink=\"/inicio\">Início</a></li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Saúde</li>\n      </ol>\n    </nav>\n\n    <div class=\"row\" style=\"text-align: center;\">\n      <div class=\"col-lg-4\">\n        <div class=\"card\">\n          <img\n            class=\"card-img-top\"\n            src=\"../../../../assets/img/saude/dietade17dias/desafio17dias.jpg\"\n            alt=\"Dieta de 17 Dias\"\n          />\n          <div class=\"card-body\">\n            <h4 class=\"card-title\">Dieta de 17 Dias</h4>\n            <p>Renata Souza</p>\n            <div>\n              <span style=\"color: orange; padding-right: 5px\">4.6</span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star checked\"></span>\n              <span class=\"fa fa-star\"></span>\n            </div>\n            <p class=\"card-text\">\n                A Dieta de 17 Dias, é um e-book completo para você aprender do ZERO a como emagrecer de forma saudável e rápida em apenas 17 dias!.\n            </p>\n            <a routerLink=\"/dietade17dias\" class=\"btn btn-primary\"\n              >Mais</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/bronzeamento/imperio-bronze/imperio-bronze.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/bronzeamento/imperio-bronze/imperio-bronze.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\r\n  <nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/inicio\">Início</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Império do Bronze</li>\r\n    </ol>\r\n  </nav>\r\n  \r\n  <div class=\" row\">\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\" style=\"margin-bottom: 5px;\">\r\n          <img alt=\"Curso de Bronzeamanto\" src=\"./assets/img/curso/imperio-bronze/curso-imperio-bronze.png\" />\r\n      </div>\r\n      <div class=\" card card-chart\" style=\"margin-top: 8px; margin-bottom: 5px; \">\r\n        <a href=\"http://mon.net.br/y27nj\" target=\"_blank\" class=\"btn btn-danger texto-responsivo-md\">SIM, EU QUERO O MELHOR CURSO DE BRONZEAMENTO</a>\r\n      </div>\r\n    </div>\r\n    <div class=\" col-lg-7\">\r\n      <div class=\" card card-chart\" style=\"margin-bottom: 0px;\">\r\n            <div class=\"embed-responsive embed-responsive-16by9\">\r\n              <iframe \r\n                src=\"https://www.youtube.com/embed/Y3yCZOaQSJk?start=32\" \r\n                frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" \r\n                allowfullscreen>\r\n              </iframe>\r\n        </div>\r\n      </div>\r\n      <div class=\" card card-chart\" style=\"margin-bottom: 10px;\">\r\n        <a href=\"https://imperiodobronze.com.br/?mcr=AFU10744381\" target=\"_blank\" class=\"btn btn-info texto-responsivo-lg\">QUERO SABER MAIS SOBRE O MELHOR CURSO DE BRONZEAMENTO</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\" row\">\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\">\r\n        <img alt=\"Imperio do Bronze\" src=\"./assets/img/curso/imperio-bronze/imperio-bronze.png\" />\r\n      </div>\r\n    </div>\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\">\r\n            <img alt=\"Modelo de Bequini com fita\" src=\"./assets/img/curso/imperio-bronze/modelo-de-bequini.png\" />\r\n      </div>\r\n    </div>\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\">\r\n            <img alt=\"bronze perfeito\" src=\"./assets/img/curso/imperio-bronze/bronze-perfeito.png\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/maquiagem/maquiagem-web/maquiagem-web.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/maquiagem/maquiagem-web/maquiagem-web.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\r\n  <nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/inicio\">Início</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Maquiagem na Web</li>\r\n    </ol>\r\n  </nav>\r\n  \r\n  <div class=\" row\">\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\" style=\"margin-bottom: 5px;\">\r\n          <img alt=\"curso Maquiagem na web\" src=\"./assets/img/curso/maquiagem-web/2.jpg\" />\r\n      </div>\r\n      <div class=\" card card-chart\" style=\"margin-top: 8px; margin-bottom: 5px; \">\r\n        <a href=\"https://www.hotmart.com/product/maquiagemnaweb/J3864784O?ref=S38497463D\" target=\"_blank\" class=\"btn btn-danger texto-responsivo-md\">SIM, EU QUERO O MELHOR CURSO DE MAQUIAGEM</a>\r\n      </div>\r\n    </div>\r\n    <div class=\" col-lg-7\">\r\n      <div class=\" card card-chart\" style=\"margin-bottom: 0px;\">\r\n            <div class=\"embed-responsive embed-responsive-16by9\">\r\n              <iframe \r\n                src=\"https://www.youtube.com/embed/bcPGCQPtpnw?start=32\" \r\n                frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" \r\n                allowfullscreen>\r\n              </iframe>\r\n        </div>\r\n      </div>\r\n      <div class=\" card card-chart\" style=\"margin-bottom: 10px;\">\r\n        <a href=\"https://www.cursomaquiagemnaweb.com/?ref=S38497463D\" target=\"_blank\" class=\"btn btn-info texto-responsivo-lg\">QUERO SABER MAIS SOBRE O MELHOR CURSO DE MAQUIAGEM</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\" row\">\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\">\r\n        <img alt=\"curso de maquiagem\" src=\"./assets/img/curso/maquiagem-web/IMG-20190916-WA0139.png\" />\r\n      </div>\r\n    </div>\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\">\r\n            <img alt=\"maquiagem web\" src=\"./assets/img/curso/maquiagem-web/IMG-20190807-WA00090.png\" />\r\n      </div>\r\n    </div>\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\">\r\n            <img alt=\"maquiagem\" src=\"./assets/img/curso/maquiagem-web/IMG-20190330-WA0009.png\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/saude/dietade17dias/dietade17dias.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/saude/dietade17dias/dietade17dias.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n  <nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\"/inicio\">Início</a></li>\n      <li class=\"breadcrumb-item\"><a routerLink=\"/saude\">Saúde</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Dieta de 17 dias</li>\n    </ol>\n  </nav>\n\n  <div class=\" row\">\n    <div class=\" col-lg-4\">\n      <div class=\" card card-chart\" style=\"margin-bottom: 5px;\">\n        <a href=\"https://go.hotmart.com/W41230879H\" target=\"_blank\" rel=\"nofollow\">\n          <img alt=\"Dieta de 17 dias\" src=\"../../../../../assets/img/curso/saude/dietade17dias/dietade17dias.jpg\" />\n        </a>\n      </div>\n      <div class=\" card card-chart\" style=\"margin-top: 8px; margin-bottom: 5px;\">\n        <a href=\"https://go.hotmart.com/W41230879H?ap=d915\" target=\"_blank\"\n          class=\"btn btn-danger texto-responsivo-md\">SIM, EU QUERO EMAGRECER</a>\n      </div>\n    </div>\n    <div class=\" col-lg-7\">\n      <div class=\" card card-chart\" style=\"margin-bottom: 0px;\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <iframe src=\"https://www.youtube.com/embed/gwv67cIBih4?start=32\" frameborder=\"0\"\n            allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n          </iframe>\n        </div>\n      </div>\n      <div class=\" card card-chart\" style=\"margin-bottom: 10px;\">\n        <a href=\"https://www.acessoadietade17dias.com.br/promocao/?ref=W41230879H\" target=\"_blank\"\n          class=\"btn btn-info texto-responsivo-lg\">QUERO SABER MAIS SOBRE A DIETA DE 17 DIAS</a>\n      </div>\n    </div>\n  </div>\n  <div class=\" row\">\n    <div class=\" col-lg-4\">\n      <div class=\" card card-chart\">\n        <img alt=\"alimentação saudavel\"\n          src=\"../../../../../assets/img/curso/saude/dietade17dias/alimentacao-saudavel.jpg\" />\n      </div>\n    </div>\n    <div class=\" col-lg-4\">\n      <div class=\" card card-chart\">\n        <img alt=\"reducao de medida\" src=\"../../../../../assets/img/curso/saude/dietade17dias/reducao-medida.png\" />\n      </div>\n    </div>\n    <div class=\" col-lg-4\">\n      <div class=\" card card-chart\">\n        <img alt=\"suco verde\" src=\"../../../../../assets/img/curso/saude/dietade17dias/suco-verde.png\" />\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/sobrancelhas/sobrancelhas-perfeitas/sobrancelhas-perfeitas.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/sobrancelhas/sobrancelhas-perfeitas/sobrancelhas-perfeitas.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\r\n  <nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/inicio\">Início</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Sobrancelhas Perfeitas</li>\r\n    </ol>\r\n  </nav>\r\n  \r\n  <div class=\" row\">\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\" style=\"margin-bottom: 5px;\">\r\n          <img alt=\"Curso Sobrancelha Perfeita\" src=\"./assets/img/curso/sobrancelha-perfeita/sobrancelhas_perfeitas4.png\" />\r\n      </div>\r\n      <div class=\" card card-chart\" style=\"margin-top: 8px; margin-bottom: 5px;\">\r\n        <a href=\"https://pay.hotmart.com/J4108478E?ref=D38199943H\" target=\"_blank\" class=\"btn btn-danger texto-responsivo-md\">SIM, EU QUERO O MELHOR CURSO DE SOBRANCELHAS</a>\r\n      </div>\r\n    </div>\r\n    <div class=\" col-lg-7\">\r\n      <div class=\" card card-chart\" style=\"margin-bottom: 0px;\">\r\n            <div class=\"embed-responsive embed-responsive-16by9\">\r\n              <iframe \r\n                src=\"https://www.youtube.com/embed/FxEYqxh0GMI?start=32\" \r\n                frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" \r\n                allowfullscreen>\r\n              </iframe>\r\n        </div>\r\n      </div>\r\n      <div class=\" card card-chart\" style=\"margin-bottom: 10px;\">\r\n        <a href=\"https://www.cursosobrancelhasperfeitas.com/?ref=D38199943H\" target=\"_blank\" class=\"btn btn-info texto-responsivo-lg\">QUERO SABER MAIS SOBRE O MELHOR CURSO DE SOBRANCELHAS</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\" row\">\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\">\r\n            <img alt=\"Curso Sobrancelha\" src=\"./assets/img/curso/sobrancelha-perfeita/3.jpg\" />\r\n      </div>\r\n    </div>\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\">\r\n            <img alt=\"Designer sobrancelha\" src=\"./assets/img/curso/sobrancelha-perfeita/5.jpg\" />\r\n      </div>\r\n    </div>\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\">\r\n            <img alt=\"sobrancelha desenhada\" src=\"./assets/img/curso/sobrancelha-perfeita/8.jpg\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/unhas/unha-curso/unha-curso01.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/unhas/unha-curso/unha-curso01.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\r\n  <nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/inicio\">Início</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Escola Designer de Unhas</li>\r\n    </ol>\r\n  </nav>\r\n\r\n  <div class=\" row\">\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\" style=\"margin-bottom: 5px;\">\r\n          <img alt=\"escola designer de unhas\" src=\"./assets/img/curso/unha-curso01/escola-designer-de-unhas.png\" />\r\n      </div>\r\n      <div class=\" card card-chart\" style=\"margin-top: 8px; margin-bottom: 5px; \">\r\n        <a href=\"https://go.hotmart.com/T40470233I?ap=b64d\" target=\"_blank\" class=\"btn btn-danger texto-responsivo-md\">SIM, EU QUERO O MELHOR CURSO DE UNHAS</a>\r\n      </div>\r\n    </div>\r\n    <div class=\" col-lg-7\">\r\n      <div class=\" card card-chart\" style=\"margin-bottom: 0px;\">\r\n            <div class=\"embed-responsive embed-responsive-16by9\">\r\n              <iframe \r\n                src=\"https://www.youtube.com/embed/6ggxcAidO28?start=32\" \r\n                frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" \r\n                allowfullscreen>\r\n              </iframe>\r\n        </div>\r\n      </div>\r\n      <div class=\" card card-chart\" style=\"margin-bottom: 10px;\">\r\n        <a href=\"https://escoladesignerdeunhas.com/?ref=T40470233I\" target=\"_blank\" class=\"btn btn-info texto-responsivo-lg\">QUERO SABER MAIS SOBRE O MELHOR CURSO DE UNHAS</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\" row\">\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\">\r\n        <img alt=\"unha decorada\" src=\"./assets/img/curso/unha-curso01/unha-decorada.png\" />\r\n      </div>\r\n    </div>\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\">\r\n            <img alt=\"unha de gel\" src=\"./assets/img/curso/unha-curso01/unha-de-gel.png\" />\r\n      </div>\r\n    </div>\r\n    <div class=\" col-lg-4\">\r\n      <div class=\" card card-chart\">\r\n            <img alt=\"alongamento de unha\" src=\"./assets/img/curso/unha-curso01/alongamento-de-unha.png\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");






var routes = [
    {
        path: "",
        redirectTo: "inicio",
        pathMatch: "full"
    },
    {
        path: "",
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutComponent"],
        children: [
            {
                path: "",
                loadChildren: "./layouts/admin-layout/admin-layout.module#AdminLayoutModule"
            }
        ]
    },
    {
        path: "**",
        redirectTo: "inicio"
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Mulher Aqui Tem";
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pages_categorias_saude_saude_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/categorias/saude/saude.component */ "./src/app/pages/categorias/saude/saude.component.ts");
/* harmony import */ var _pages_cursos_saude_dietade17dias_dietade17dias_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/cursos/saude/dietade17dias/dietade17dias.component */ "./src/app/pages/cursos/saude/dietade17dias/dietade17dias.component.ts");
/* harmony import */ var _pages_cursos_maquiagem_maquiagem_web_maquiagem_web_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/cursos/maquiagem/maquiagem-web/maquiagem-web.component */ "./src/app/pages/cursos/maquiagem/maquiagem-web/maquiagem-web.component.ts");
/* harmony import */ var _pages_cursos_sobrancelhas_sobrancelhas_perfeitas_sobrancelhas_perfeitas_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/cursos/sobrancelhas/sobrancelhas-perfeitas/sobrancelhas-perfeitas.component */ "./src/app/pages/cursos/sobrancelhas/sobrancelhas-perfeitas/sobrancelhas-perfeitas.component.ts");
/* harmony import */ var _pages_cursos_unhas_unha_curso_unha_curso01_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/cursos/unhas/unha-curso/unha-curso01.component */ "./src/app/pages/cursos/unhas/unha-curso/unha-curso01.component.ts");
/* harmony import */ var _pages_cursos_bronzeamento_imperio_bronze_imperio_bronze_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/cursos/bronzeamento/imperio-bronze/imperio-bronze.component */ "./src/app/pages/cursos/bronzeamento/imperio-bronze/imperio-bronze.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot()
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"],
                _pages_cursos_sobrancelhas_sobrancelhas_perfeitas_sobrancelhas_perfeitas_component__WEBPACK_IMPORTED_MODULE_15__["SobrancelhasPerfeitasComponent"],
                _pages_cursos_maquiagem_maquiagem_web_maquiagem_web_component__WEBPACK_IMPORTED_MODULE_14__["MaquiagemWebComponent"],
                _pages_cursos_unhas_unha_curso_unha_curso01_component__WEBPACK_IMPORTED_MODULE_16__["UnhaCurso01Component"],
                _pages_cursos_bronzeamento_imperio_bronze_imperio_bronze_component__WEBPACK_IMPORTED_MODULE_17__["ImperioBronzeComponent"],
                _pages_categorias_saude_saude_component__WEBPACK_IMPORTED_MODULE_12__["SaudeComponent"],
                _pages_cursos_saude_dietade17dias_dietade17dias_component__WEBPACK_IMPORTED_MODULE_13__["Dietade17diasComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");








var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]],
            declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]],
            exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, modalService) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.modalService = modalService;
        this.mobile_menu_visible = 0;
        this.isCollapsed = true;
        // function that adds color white/transparent to the navbar on resize (this is for the collapse)
        this.updateColor = function () {
            var navbar = document.getElementsByClassName('navbar')[0];
            if (window.innerWidth < 993 && !_this.isCollapsed) {
                navbar.classList.add('bg-white');
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.remove('bg-white');
                navbar.classList.add('navbar-transparent');
            }
        };
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener("resize", this.updateColor);
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName("navbar-toggler")[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName("close-layer")[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.collapse = function () {
        this.isCollapsed = !this.isCollapsed;
        var navbar = document.getElementsByTagName("nav")[0];
        if (!this.isCollapsed) {
            navbar.classList.remove("navbar-transparent");
            navbar.classList.add("bg-white");
        }
        else {
            navbar.classList.add("navbar-transparent");
            navbar.classList.remove("bg-white");
        }
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        var html = document.getElementsByTagName("html")[0];
        if (window.innerWidth < 991) {
            mainPanel.style.position = "fixed";
        }
        setTimeout(function () {
            toggleButton.classList.add("toggled");
        }, 500);
        html.classList.add("nav-open");
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName("html")[0];
        this.toggleButton.classList.remove("toggled");
        var mainPanel = (document.getElementsByClassName("main-panel")[0]);
        if (window.innerWidth < 991) {
            setTimeout(function () {
                mainPanel.style.position = "";
            }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove("nav-open");
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const html = document.getElementsByTagName('html')[0];
        var $toggle = document.getElementsByClassName("navbar-toggler")[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var html = document.getElementsByTagName("html")[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            html.classList.remove("nav-open");
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove("toggled");
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add("toggled");
            }, 430);
            var $layer = document.createElement("div");
            $layer.setAttribute("class", "close-layer");
            if (html.querySelectorAll(".main-panel")) {
                document.getElementsByClassName("main-panel")[0].appendChild($layer);
            }
            else if (html.classList.contains("off-canvas-sidebar")) {
                document
                    .getElementsByClassName("wrapper-full-page")[0]
                    .appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add("visible");
            }, 100);
            $layer.onclick = function () {
                //asign a function
                html.classList.remove("nav-open");
                this.mobile_menu_visible = 0;
                $layer.classList.remove("visible");
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove("toggled");
                }, 400);
            }.bind(this);
            html.classList.add("nav-open");
            this.mobile_menu_visible = 1;
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === "#") {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return "inicio";
    };
    NavbarComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { windowClass: 'modal-search' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    NavbarComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener("resize", this.updateColor);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ROUTES = [
    {
        path: "/sobrancelhas-perfeitas",
        title: "Sobrancelha Perfeita",
        rtlTitle: "لوحة القيادة",
        icon: "icon-gift-2",
        class: ""
    },
    {
        path: "/maquiagem-web",
        title: "Maquiagem na web",
        rtlTitle: "الرموز",
        icon: "icon-shape-star",
        class: ""
    },
    {
        path: "/unha-curso01",
        title: "Unha Designer",
        rtlTitle: "خرائط",
        icon: "icon-scissors",
        class: ""
    },
    {
        path: "/imperio-bronze",
        title: "Imperio do Bronze",
        rtlTitle: "إخطارات",
        icon: "icon-istanbul",
        class: ""
    },
    {
        path: "/saude",
        title: "Saúde",
        rtlTitle: "إخطارات",
        icon: "icon-heart-2",
        class: ""
    }
    /*,
    {
      path: "/user",
      title: "User Profile",
      rtlTitle: "ملف تعريفي للمستخدم",
      icon: "icon-single-02",
      class: ""
    },
    {
      path: "/tables",
      title: "Table List",
      rtlTitle: "قائمة الجدول",
      icon: "icon-puzzle-10",
      class: ""
    },
    {
      path: "/typography",
      title: "Typography",
      rtlTitle: "طباعة",
      icon: "icon-align-center",
      class: ""
    },
    {
      path: "/rtl",
      title: "RTL Support",
      rtlTitle: "ار تي ال",
      icon: "icon-world",
      class: ""
    } */
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if (window.innerWidth > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sidebar",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
        this.sidebarColor = "red";
    }
    AdminLayoutComponent.prototype.changeSidebarColor = function (color) {
        var sidebar = document.getElementsByClassName('sidebar')[0];
        var mainPanel = document.getElementsByClassName('main-panel')[0];
        this.sidebarColor = color;
        if (sidebar != undefined) {
            sidebar.setAttribute('data', color);
        }
        if (mainPanel != undefined) {
            mainPanel.setAttribute('data', color);
        }
    };
    AdminLayoutComponent.prototype.changeDashboardColor = function (color) {
        var body = document.getElementsByTagName('body')[0];
        if (body && color === 'white-content') {
            body.classList.add(color);
        }
        else if (body.classList.contains('white-content')) {
            body.classList.remove('white-content');
        }
    };
    AdminLayoutComponent.prototype.ngOnInit = function () { };
    AdminLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-admin-layout",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/categorias/saude/saude.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/categorias/saude/saude.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpYXMvc2F1ZGUvc2F1ZGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/categorias/saude/saude.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/categorias/saude/saude.component.ts ***!
  \***********************************************************/
/*! exports provided: SaudeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaudeComponent", function() { return SaudeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SaudeComponent = /** @class */ (function () {
    function SaudeComponent() {
    }
    SaudeComponent.prototype.ngOnInit = function () {
    };
    SaudeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-saude',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./saude.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/saude/saude.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./saude.component.scss */ "./src/app/pages/categorias/saude/saude.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SaudeComponent);
    return SaudeComponent;
}());



/***/ }),

/***/ "./src/app/pages/cursos/bronzeamento/imperio-bronze/imperio-bronze.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/cursos/bronzeamento/imperio-bronze/imperio-bronze.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ImperioBronzeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImperioBronzeComponent", function() { return ImperioBronzeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var ImperioBronzeComponent = /** @class */ (function () {
    function ImperioBronzeComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ImperioBronzeComponent.prototype.ngOnInit = function () { };
    ImperioBronzeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ImperioBronzeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-imperio-bronze",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./imperio-bronze.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/bronzeamento/imperio-bronze/imperio-bronze.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ImperioBronzeComponent);
    return ImperioBronzeComponent;
}());



/***/ }),

/***/ "./src/app/pages/cursos/maquiagem/maquiagem-web/maquiagem-web.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/cursos/maquiagem/maquiagem-web/maquiagem-web.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MaquiagemWebComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaquiagemWebComponent", function() { return MaquiagemWebComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var MaquiagemWebComponent = /** @class */ (function () {
    function MaquiagemWebComponent() {
    }
    MaquiagemWebComponent.prototype.ngOnInit = function () { };
    MaquiagemWebComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-maquiagem-web",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./maquiagem-web.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/maquiagem/maquiagem-web/maquiagem-web.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MaquiagemWebComponent);
    return MaquiagemWebComponent;
}());



/***/ }),

/***/ "./src/app/pages/cursos/saude/dietade17dias/dietade17dias.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/cursos/saude/dietade17dias/dietade17dias.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1cnNvcy9zYXVkZS9kaWV0YWRlMTdkaWFzL2RpZXRhZGUxN2RpYXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/cursos/saude/dietade17dias/dietade17dias.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/cursos/saude/dietade17dias/dietade17dias.component.ts ***!
  \*****************************************************************************/
/*! exports provided: Dietade17diasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dietade17diasComponent", function() { return Dietade17diasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var Dietade17diasComponent = /** @class */ (function () {
    function Dietade17diasComponent() {
    }
    Dietade17diasComponent.prototype.ngOnInit = function () {
    };
    Dietade17diasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dietade17dias',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dietade17dias.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/saude/dietade17dias/dietade17dias.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dietade17dias.component.scss */ "./src/app/pages/cursos/saude/dietade17dias/dietade17dias.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], Dietade17diasComponent);
    return Dietade17diasComponent;
}());



/***/ }),

/***/ "./src/app/pages/cursos/sobrancelhas/sobrancelhas-perfeitas/sobrancelhas-perfeitas.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/cursos/sobrancelhas/sobrancelhas-perfeitas/sobrancelhas-perfeitas.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: SobrancelhasPerfeitasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SobrancelhasPerfeitasComponent", function() { return SobrancelhasPerfeitasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SobrancelhasPerfeitasComponent = /** @class */ (function () {
    function SobrancelhasPerfeitasComponent() {
    }
    SobrancelhasPerfeitasComponent.prototype.ngOnInit = function () { };
    SobrancelhasPerfeitasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sobrancelhas-perfeitas",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sobrancelhas-perfeitas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/sobrancelhas/sobrancelhas-perfeitas/sobrancelhas-perfeitas.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SobrancelhasPerfeitasComponent);
    return SobrancelhasPerfeitasComponent;
}());



/***/ }),

/***/ "./src/app/pages/cursos/unhas/unha-curso/unha-curso01.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/cursos/unhas/unha-curso/unha-curso01.component.ts ***!
  \*************************************************************************/
/*! exports provided: UnhaCurso01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnhaCurso01Component", function() { return UnhaCurso01Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var UnhaCurso01Component = /** @class */ (function () {
    function UnhaCurso01Component() {
    }
    UnhaCurso01Component.prototype.ngOnInit = function () { };
    UnhaCurso01Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-unha-curso01",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./unha-curso01.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cursos/unhas/unha-curso/unha-curso01.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], UnhaCurso01Component);
    return UnhaCurso01Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");

/*
 =========================================================
 * Black Dashboard Angular - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard-angular
 * Copyright 2019 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projetos\mulher-aqui-tem\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map