(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  .checked {\r\n    color: orange;\r\n  }\r\n</style>\r\n<div class=\"content\">\r\n  <div class=\"row\" style=\"text-align: center;\">\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <img\r\n          class=\"card-img-top\"\r\n          src=\"./assets/img/curso/sobrancelha-perfeita/sobrancelhas_perfeitas4.png\"\r\n          alt=\"Curso Sobrancelhas Perfeitas\"\r\n        />\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Curso Sobrancelhas Perfeitas</h4>\r\n          <p>Jéssica Soares</p>\r\n          <div>\r\n            <span style=\"color: orange; padding-right: 5px\">4.7</span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star\"></span>\r\n          </div>\r\n          <p class=\"card-text\">\r\n            Descubra como se tornar uma Designer de Sobrancelhas de Sucesso e\r\n            ter a sua Independência Financeira com um Método Único e Simples.\r\n          </p>\r\n          <a routerLink=\"/sobrancelhas-perfeitas\" class=\"btn btn-primary\"\r\n            >Mais</a\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <img\r\n          class=\"card-img-top\"\r\n          src=\"./assets/img/curso/maquiagem-web/2.jpg\"\r\n          alt=\"Maquiagem na Web\"\r\n        />\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Maquiagem na Web</h4>\r\n          <p>Andreia Venturini</p>\r\n          <div>\r\n            <span style=\"color: orange; padding-right: 5px\">4.6</span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star\"></span>\r\n          </div>\r\n          <p class=\"card-text\">\r\n            Conheça agora o Curso Maquiagem na Web, são 35 Vídeo Aulas que\r\n            ensinam do Básico ao Avançado todas as técnicas para você se Maquiar\r\n            para os mais diversos tipos de ocasiões.\r\n          </p>\r\n          <a routerLink=\"/maquiagem-web\" class=\"btn btn-primary\">Mais</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <img\r\n          class=\"card-img-top\"\r\n          src=\"./assets/img/curso/unha-curso01/escola-designer-de-unhas.png\"\r\n          alt=\"Curso Sobrancelhas Perfeitas\"\r\n        />\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Curso de Designer de Unhas</h4>\r\n          <p>Escola Designer de Unhas</p>\r\n          <div>\r\n            <span style=\"color: orange; padding-right: 5px\">4.5</span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star\"></span>\r\n          </div>\r\n          <p class=\"card-text\">\r\n            Curso Completo Alongamento de Unhas com Paola Chaves possui 47 vídeo\r\n            aulas exclusivas, onde a aluna aprenderá do zero como fazer unhas de\r\n            qualidade com aspecto de naturalidade.\r\n          </p>\r\n          <a [routerLink]=\"['/unha-curso01']\" class=\"btn btn-primary\">Mais</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-4\">\r\n      <div class=\"card\">\r\n        <img\r\n          class=\"card-img-top\"\r\n          src=\"./assets/img/curso/imperio-bronze/curso-imperio-bronze.png\"\r\n          alt=\"Curso de Bronzeamanto\"\r\n        />\r\n        <div class=\"card-body\">\r\n          <h4 class=\"card-title\">Curso de Bronzeamanto</h4>\r\n          <p>Imperatriz do Bronze</p>\r\n          <div>\r\n            <span style=\"color: orange; padding-right: 5px\">4.4</span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star checked\"></span>\r\n            <span class=\"fa fa-star\"></span>\r\n          </div>\r\n          <p class=\"card-text\">\r\n            Curso de Bronzeamento Natural da Império do Bronze é para você que\r\n            quer entrar para o mundo dos negócios, se tornando uma empresária\r\n            especialista do universo do bronzeamento.\r\n          </p>\r\n          <a [routerLink]=\"['/imperio-bronze']\" class=\"btn btn-primary\">Mais</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");









var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule(config) {
        config.interval = 3000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = true;
    }
    AdminLayoutModule.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCarouselConfig"] }
    ]; };
    AdminLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
            ],
            declarations: [
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]
            ]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbCarouselConfig"]])
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var src_app_pages_cursos_sobrancelhas_sobrancelhas_perfeitas_sobrancelhas_perfeitas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/cursos/sobrancelhas/sobrancelhas-perfeitas/sobrancelhas-perfeitas.component */ "./src/app/pages/cursos/sobrancelhas/sobrancelhas-perfeitas/sobrancelhas-perfeitas.component.ts");
/* harmony import */ var src_app_pages_cursos_maquiagem_maquiagem_web_maquiagem_web_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/cursos/maquiagem/maquiagem-web/maquiagem-web.component */ "./src/app/pages/cursos/maquiagem/maquiagem-web/maquiagem-web.component.ts");
/* harmony import */ var src_app_pages_cursos_unhas_unha_curso_unha_curso01_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/cursos/unhas/unha-curso/unha-curso01.component */ "./src/app/pages/cursos/unhas/unha-curso/unha-curso01.component.ts");
/* harmony import */ var src_app_pages_cursos_bronzeamento_imperio_bronze_imperio_bronze_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/pages/cursos/bronzeamento/imperio-bronze/imperio-bronze.component */ "./src/app/pages/cursos/bronzeamento/imperio-bronze/imperio-bronze.component.ts");
/* harmony import */ var src_app_pages_categorias_saude_saude_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pages/categorias/saude/saude.component */ "./src/app/pages/categorias/saude/saude.component.ts");
/* harmony import */ var src_app_pages_cursos_saude_dietade17dias_dietade17dias_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pages/cursos/saude/dietade17dias/dietade17dias.component */ "./src/app/pages/cursos/saude/dietade17dias/dietade17dias.component.ts");








var AdminLayoutRoutes = [
    { path: "inicio", component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"] },
    { path: "sobrancelhas-perfeitas", component: src_app_pages_cursos_sobrancelhas_sobrancelhas_perfeitas_sobrancelhas_perfeitas_component__WEBPACK_IMPORTED_MODULE_2__["SobrancelhasPerfeitasComponent"] },
    { path: "maquiagem-web", component: src_app_pages_cursos_maquiagem_maquiagem_web_maquiagem_web_component__WEBPACK_IMPORTED_MODULE_3__["MaquiagemWebComponent"] },
    { path: "unha-curso01", component: src_app_pages_cursos_unhas_unha_curso_unha_curso01_component__WEBPACK_IMPORTED_MODULE_4__["UnhaCurso01Component"] },
    { path: "imperio-bronze", component: src_app_pages_cursos_bronzeamento_imperio_bronze_imperio_bronze_component__WEBPACK_IMPORTED_MODULE_5__["ImperioBronzeComponent"] },
    { path: "saude", component: src_app_pages_categorias_saude_saude_component__WEBPACK_IMPORTED_MODULE_6__["SaudeComponent"] },
    { path: "dietade17dias", component: src_app_pages_cursos_saude_dietade17dias_dietade17dias_component__WEBPACK_IMPORTED_MODULE_7__["Dietade17diasComponent"] }
];


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map