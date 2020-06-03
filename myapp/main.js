(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about-me/about-me.component */ "./src/app/components/about-me/about-me.component.ts");
/* harmony import */ var _components_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact-me/contact-me.component */ "./src/app/components/contact-me/contact-me.component.ts");
/* harmony import */ var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/questions/questions.component */ "./src/app/components/questions/questions.component.ts");
/* harmony import */ var _components_my_tabs_my_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/my-tabs/my-tabs.component */ "./src/app/components/my-tabs/my-tabs.component.ts");







var routes = [
    { path: '', component: _components_my_tabs_my_tabs_component__WEBPACK_IMPORTED_MODULE_6__["MyTabsComponent"] },
    { path: 'about-me', component: _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"] },
    { path: 'contact-me', component: _components_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_4__["ContactMeComponent"] },
    { path: 'questions', component: _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_5__["QuestionsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-my-navbar></app-my-navbar> -->\n\n\n<article class=\"scroller\">\n  <div>\n<section><app-my-intro></app-my-intro></section>\n</div>\n\n\n<section class=\"fullscreen\"><app-image-upload class=\"frontpage\"></app-image-upload></section>\n<section class=\"fullscreen\"><app-about-me></app-about-me></section>\n<section class=\"fullscreen\"><app-my-conceptual ></app-my-conceptual></section>\n<section class=\"fullscreen\"><app-my-interpersonal></app-my-interpersonal></section>\n<section class=\"fullscreen\"><app-my-education></app-my-education></section>\n<section class=\"fullscreen\">\n  <app-my-workexp></app-my-workexp>\n</section>\n<section class=\"fullscreen\">\n<app-my-projects></app-my-projects></section>\n<section><app-contact-me></app-contact-me></section>\n<section class=\"fullscreen\"><app-my-footer></app-my-footer></section>\n\n</article>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  position: fixed;\n  overflow-x: hidden; }\n\n.frontpage {\n  padding: 30px; }\n\n.scroller {\n  overflow-y: scroll;\n  -ms-scroll-snap-type: y mandatory;\n      scroll-snap-type: y mandatory; }\n\n.scroller, section {\n  scroll-snap-align: start;\n  height: 100vh; }\n\n.fullscreen {\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDakIsa0JBQWtCLEVBQUE7O0FBR2xCO0VBQ0EsYUFBYSxFQUFBOztBQUdiO0VBRUEsa0JBQWtCO0VBQ2xCLGlDQUE2QjtNQUE3Qiw2QkFBNkIsRUFBQTs7QUFFN0I7RUFDQSx3QkFBd0I7RUFDeEIsYUFBYSxFQUFBOztBQUViO0VBQ0EsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxib2R5e1xuICBwb3NpdGlvbjogZml4ZWQ7XG5vdmVyZmxvdy14OiBoaWRkZW47XG5cbn1cbi5mcm9udHBhZ2V7XG5wYWRkaW5nOiAzMHB4O1xufVxuXG4uc2Nyb2xsZXJ7XG5cbm92ZXJmbG93LXk6IHNjcm9sbDtcbnNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xufVxuLnNjcm9sbGVyLCBzZWN0aW9ue1xuc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuaGVpZ2h0OiAxMDB2aDtcbn1cbi5mdWxsc2NyZWVue1xuaGVpZ2h0OiBhdXRvO1xufVxuXG5cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Angular app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/post-create/post-create.component */ "./src/app/components/post-create/post-create.component.ts");
/* harmony import */ var _components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/image-upload/image-upload.component */ "./src/app/components/image-upload/image-upload.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _components_mat_dash_mat_dash_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mat-dash/mat-dash.component */ "./src/app/components/mat-dash/mat-dash.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _components_my_tabs_my_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/my-tabs/my-tabs.component */ "./src/app/components/my-tabs/my-tabs.component.ts");
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/about-me/about-me.component */ "./src/app/components/about-me/about-me.component.ts");
/* harmony import */ var _components_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/contact-me/contact-me.component */ "./src/app/components/contact-me/contact-me.component.ts");
/* harmony import */ var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/questions/questions.component */ "./src/app/components/questions/questions.component.ts");
/* harmony import */ var _components_my_navbar_my_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/my-navbar/my-navbar.component */ "./src/app/components/my-navbar/my-navbar.component.ts");
/* harmony import */ var _components_my_education_my_education_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/my-education/my-education.component */ "./src/app/components/my-education/my-education.component.ts");
/* harmony import */ var _components_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/my-projects/my-projects.component */ "./src/app/components/my-projects/my-projects.component.ts");
/* harmony import */ var _components_my_footer_my_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/my-footer/my-footer.component */ "./src/app/components/my-footer/my-footer.component.ts");
/* harmony import */ var _components_description_modal_description_modal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/description-modal/description-modal.component */ "./src/app/components/description-modal/description-modal.component.ts");
/* harmony import */ var _components_my_conceptual_my_conceptual_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/my-conceptual/my-conceptual.component */ "./src/app/components/my-conceptual/my-conceptual.component.ts");
/* harmony import */ var _components_my_interpersonal_my_interpersonal_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/my-interpersonal/my-interpersonal.component */ "./src/app/components/my-interpersonal/my-interpersonal.component.ts");
/* harmony import */ var _components_my_intro_my_intro_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/my-intro/my-intro.component */ "./src/app/components/my-intro/my-intro.component.ts");
/* harmony import */ var _components_my_workexp_my_workexp_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/my-workexp/my-workexp.component */ "./src/app/components/my-workexp/my-workexp.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_7__["PostCreateComponent"],
                _components_image_upload_image_upload_component__WEBPACK_IMPORTED_MODULE_8__["ImageUploadComponent"],
                _components_mat_dash_mat_dash_component__WEBPACK_IMPORTED_MODULE_11__["MatDashComponent"],
                _components_my_tabs_my_tabs_component__WEBPACK_IMPORTED_MODULE_14__["MyTabsComponent"],
                _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_15__["AboutMeComponent"],
                _components_contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_16__["ContactMeComponent"],
                _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_17__["QuestionsComponent"],
                _components_my_navbar_my_navbar_component__WEBPACK_IMPORTED_MODULE_18__["MyNavbarComponent"],
                _components_my_education_my_education_component__WEBPACK_IMPORTED_MODULE_19__["MyEducationComponent"],
                _components_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_20__["MyProjectsComponent"],
                _components_my_footer_my_footer_component__WEBPACK_IMPORTED_MODULE_21__["MyFooterComponent"],
                _components_description_modal_description_modal_component__WEBPACK_IMPORTED_MODULE_22__["DescriptionModalComponent"],
                _components_my_conceptual_my_conceptual_component__WEBPACK_IMPORTED_MODULE_23__["MyConceptualComponent"],
                _components_my_interpersonal_my_interpersonal_component__WEBPACK_IMPORTED_MODULE_24__["MyInterpersonalComponent"],
                _components_my_intro_my_intro_component__WEBPACK_IMPORTED_MODULE_25__["MyIntroComponent"],
                _components_my_workexp_my_workexp_component__WEBPACK_IMPORTED_MODULE_26__["MyWorkexpComponent"],
            ],
            imports: [
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about-me/about-me.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"heading-main\">\n  <h1 class=\"headings\" style=\"color: white;\">Technical Skills</h1>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <h3>Angular</h3>\n    </div>\n    <div class=\"card\">\n      <h3>JavaScript</h3>\n    </div>\n    <div class=\"card\">\n      <h3>Node.JS</h3>\n    </div>\n    <div class=\"card\">\n      <h3>Express.JS</h3>\n    </div>\n\n    <div class=\"card\">\n      <h3>SaaS</h3>\n    </div>\n    <div class=\"card\">\n      <h3>MongoDB</h3>\n    </div>\n    <div class=\"card\">\n      <h3>Typescript</h3>\n    </div>\n\n    <div class=\"card\">\n      <h3>HTML5</h3>\n    </div>\n  </div>\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <h3>CSS3</h3>\n    </div>\n\n    <div class=\"card\">\n      <h3>DBMS and RDBMS</h3>\n    </div>\n\n    <div class=\"card\">\n      <h3>AJAX</h3>\n    </div>\n    <div class=\"card\">\n      <h3>REST API</h3>\n    </div>\n    <div class=\"card\">\n      <h3>MySQL</h3>\n    </div>\n\n    <div class=\"card\">\n      <h3>Vue.JS</h3>\n    </div>\n\n    <div class=\"card\">\n      <h3>AWS Cloud Services</h3>\n    </div>\n    <div class=\"card\">\n      <h3>ASP.NET</h3>\n    </div>\n  </div>\n\n  <div class=\"col-sm-4\">\n    <div class=\"card\">\n      <h3>Springboot</h3>\n    </div>\n\n    <div class=\"card\">\n      <h3>Hibernate</h3>\n    </div>\n\n    <div class=\"card\">\n      <h3>Hadoop</h3>\n    </div>\n\n    <div class=\"card\">\n      <h3>Redux.JS</h3>\n    </div>\n    <div class=\"card\">\n      <h3>REACT</h3>\n    </div>\n\n    <div class=\"card\">\n      <h3>Python</h3>\n    </div>\n\n    <div class=\"card\">\n      <h3>Git(Version Control)</h3>\n    </div>\n    <div class=\"card\">\n      <h3>Spring Framework</h3>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/about-me/about-me.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h3 {\n  margin: 0px; }\n\n.heading-main {\n  text-align: center; }\n\n.card {\n  text-align: center;\n  background-color: white;\n  display: flex;\n  content: \"\";\n  margin: 1%;\n  box-shadow: 0 1px 3px 0 rgba(58, 62, 75, 0.25);\n  flex: 0 0 25%;\n  align-items: center;\n  justify-content: center;\n  align-content: flex-start;\n  border-radius: .2rem;\n  transition: all 250ms ease-out;\n  -moz-transition: all 250ms ease-out;\n  -ms-transition: all 250ms ease-out;\n  -webkit-transition: all 250ms ease-out;\n  -o-transition: all 250ms ease-out; }\n\n.card:hover {\n    transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -webkit-filter: saturate(50%);\n            filter: saturate(50%);\n    transform: scale(1.2);\n    -moz-transform: scale(1.2);\n    -webkit-transform: scale(1.2);\n    -o-transform: scale(1.2);\n    -ms-transform: scale(1.2); }\n\n.container {\n  overflow-x: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxXQUFXLEVBQUE7O0FBRVg7RUFDQSxrQkFBa0IsRUFBQTs7QUEyQmxCO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsV0FBVztFQUNYLFVBQVU7RUFDViw4Q0FBOEM7RUFDOUMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQWpDcEIsOEJBa0N3QztFQWpDeEMsbUNBaUN3QztFQWhDeEMsa0NBZ0N3QztFQS9CeEMsc0NBK0J3QztFQTlCeEMsaUNBOEJ3QyxFQUFBOztBQVoxQztJQVJFLHFCQUFvQjtJQUNwQiwwQkFBeUI7SUFDekIsNkJBQTRCO0lBQzVCLHdCQUF1QjtJQUN2Qix5QkFBd0I7SUFvQnRCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUF4QnZCLHFCQUFvQjtJQUNwQiwwQkFBeUI7SUFDekIsNkJBQTRCO0lBQzVCLHdCQUF1QjtJQUN2Qix5QkFBd0IsRUFBQTs7QUF3QjFCO0VBQ0Esa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmgze1xubWFyZ2luOiAwcHg7XG59XG4uaGVhZGluZy1tYWlue1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbkBtaXhpbiB0cmFuc2l0aW9uKCR4LCAkeSwgJHope1xuICB0cmFuc2l0aW9uOiAkeCAkeSAkejtcbiAgLW1vei10cmFuc2l0aW9uOiAkeCAkeSAkejtcbiAgLW1zLXRyYW5zaXRpb246ICR4ICR5ICR6O1xuICAtd2Via2l0LXRyYW5zaXRpb246ICR4ICR5ICR6O1xuICAtby10cmFuc2l0aW9uOiAkeCAkeSAkejtcbn1cblxuQG1peGluIHJvdGF0ZSgkeCl7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgkeCk7IC8qIElFIDkgKi9cbiAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoJHgpOyAvKiBDaHJvbWUsIFNhZmFyaSwgT3BlcmEgKi9cbiAgIHRyYW5zZm9ybTogcm90YXRlKCR4KTtcbn1cblxuQG1peGluIHNjYWxlKCR4KXtcbiAgdHJhbnNmb3JtOiBzY2FsZSgkeCk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgkeCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgkeCk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoJHgpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgkeCk7XG59XG5cblxuLmNhcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb250ZW50OiBcIlwiO1xuICBtYXJnaW46IDElO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDU4LCA2MiwgNzUsIDAuMjUpO1xuICBmbGV4OiAwIDAgMjUlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgYm9yZGVyLXJhZGl1czogLjJyZW07XG4gIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAyNTBtcywgZWFzZS1vdXQpO1xuXG4gICY6aG92ZXIge1xuICAgIEBpbmNsdWRlIHNjYWxlKDEuMSk7XG4gICAgZmlsdGVyOiBzYXR1cmF0ZSg1MCUpO1xuICAgIEBpbmNsdWRlIHNjYWxlKDEuMilcbiAgfVxufVxuLmNvbnRhaW5lcntcbm92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/about-me/about-me.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/app/components/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.scss */ "./src/app/components/about-me/about-me.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/components/contact-me/contact-me.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/contact-me/contact-me.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n  <div>\n  <div class=\"heading\" style=\"text-align: center; color: white;\">\n    <h1>Contact Information</h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <img\n        class=\"img1\"\n        src=\"assets/images/phone.png\"\n        width=\"40px\"\n        height=\"40px\"\n        alt=\"phone\"\n      />\n      <b style=\"color: white; padding: 10px;\">+1 (518) 331-3177 </b>\n    </div>\n\n    <div class=\"col-md-4\">\n      <img\n        src=\"assets/images/location.png\"\n        width=\"40px\"\n        height=\"40px\"\n        alt=\"location\"\n      />\n\n      <b style=\"color: white; padding: 10px;\">Boston,Massachusetts</b>\n    </div>\n\n    <div class=\"col-md-4\">\n      <img\n        src=\"assets/images/email.png\"\n        width=\"60px\"\n        height=\"40px\"\n        alt=\"email\"\n      />\n\n      <b style=\"color: white; padding: 10px;\">pujariakash@gmail.com</b>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <img\n        class=\"img1\"\n        src=\"assets/images/linkedin.png\"\n        width=\"40px\"\n        height=\"40px\"\n        alt=\"phone\"\n      />\n      <a href=\"http://www.linkedin.com/in/akashpjr\"\n        ><b style=\"color: white; padding: 10px;\">LinkedIn</b></a\n      >\n    </div>\n\n    <div class=\"col-md-4\">\n      <img\n        src=\"assets/images/fb.png\"\n        width=\"40px\"\n        height=\"40px\"\n        alt=\"location\"\n      />\n\n      <a href=\"http://www.facebook.com/pujariakash\"\n        ><b style=\"color: white; padding: 10px;\">Facebook</b></a\n      >\n    </div>\n\n    <div class=\"col-md-4\">\n      <img\n        src=\"assets/images/twitter.png\"\n        width=\"40px\"\n        height=\"40px\"\n        alt=\"email\"\n      />\n\n      <a href=\"http://www.linkedin.com/in/akashpjr\"\n        ><b style=\"color: white; padding: 10px;\">Twitter</b></a\n      >\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/contact-me/contact-me.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/contact-me/contact-me.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p {\n  display: flex;\n  justify-content: center; }\n\n.col-md-4 {\n  padding: 5%;\n  text-align: center; }\n\n.row {\n  width: 100%; }\n\n.contact {\n  padding: 10%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC1tZS9jb250YWN0LW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFFcEI7RUFDQSxXQUFXLEVBQUE7O0FBRVg7RUFDQSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRhY3QtbWUvY29udGFjdC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5we1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb2wtbWQtNHtcbiAgcGFkZGluZzogNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yb3d7XG53aWR0aDogMTAwJTtcbn1cbi5jb250YWN0e1xucGFkZGluZzogMTAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/contact-me/contact-me.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/contact-me/contact-me.component.ts ***!
  \***************************************************************/
/*! exports provided: ContactMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeComponent", function() { return ContactMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactMeComponent = /** @class */ (function () {
    function ContactMeComponent() {
    }
    ContactMeComponent.prototype.ngOnInit = function () {
    };
    ContactMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-me',
            template: __webpack_require__(/*! ./contact-me.component.html */ "./src/app/components/contact-me/contact-me.component.html"),
            styles: [__webpack_require__(/*! ./contact-me.component.scss */ "./src/app/components/contact-me/contact-me.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactMeComponent);
    return ContactMeComponent;
}());



/***/ }),

/***/ "./src/app/components/description-modal/description-modal.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/description-modal/description-modal.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isOpen\"\n  class=\"modal\"\n  id=\"id1\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"description1\">Description</h5>\n        <button\n          type=\"button\"\n          class=\"close\"\n          data-dismiss=\"modal\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        {{ description }}\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"onCancel()\">\n          Back\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/description-modal/description-modal.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/description-modal/description-modal.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGVzY3JpcHRpb24tbW9kYWwvZGVzY3JpcHRpb24tbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/description-modal/description-modal.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/description-modal/description-modal.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DescriptionModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionModalComponent", function() { return DescriptionModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DescriptionModalComponent = /** @class */ (function () {
    function DescriptionModalComponent() {
        this.isOpen = false;
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DescriptionModalComponent.prototype.ngOnInit = function () {
    };
    DescriptionModalComponent.prototype.onCancel = function () {
        this.cancel.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DescriptionModalComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], DescriptionModalComponent.prototype, "isOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DescriptionModalComponent.prototype, "cancel", void 0);
    DescriptionModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-description-modal',
            template: __webpack_require__(/*! ./description-modal.component.html */ "./src/app/components/description-modal/description-modal.component.html"),
            styles: [__webpack_require__(/*! ./description-modal.component.scss */ "./src/app/components/description-modal/description-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DescriptionModalComponent);
    return DescriptionModalComponent;
}());



/***/ }),

/***/ "./src/app/components/image-upload/image-upload.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-upload/image-upload.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card text-center\">\n    <div class=\"card-header\">\n      <h1 style=\"color: white;\">What I Can Offer</h1>\n    </div>\n    <div class=\"tab-content\" id=\"pills-tabContent\">\n      <div\n        class=\"tab-pane fade show active\"\n        style=\"opacity: 1;\"\n        id=\"pills-home\"\n        role=\"tabpanel\"\n        aria-labelledby=\"pills-home-tab\"\n      >\n        <div class=\"card-body\">\n          <p class=\"card-text\">\n            Talented Software Developer with focus on Front-End Development\n            offering 2 years of experience. Team Leader and a strategic thinker\n            with proficiency in Object Oriented Programming, Data Structures and\n            Algorithms. Competent for Problem-Solving in fast-paced settings.\n            Adaptable and driven with strong work ethic and ability to thrive in\n            team-based or individually motivated settings. Demonstrated talents\n            in guiding teams engaged in Software Development. Proficiency in\n            Agile Process, Software Development Life Cycle, Design Patterns and\n            Databases(SQL and noSQL).\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/image-upload/image-upload.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/image-upload/image-upload.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  background-color: white;\n  display: contents; }\n\n.card-header {\n  display: flex;\n  justify-content: center; }\n\n.card-body {\n  text-align: center;\n  min-height: 200px; }\n\n.card-text {\n  padding: 5%;\n  font-size: 20px;\n  color: white;\n  text-align: justify; }\n\n.card-title {\n  color: white; }\n\n.nav-link {\n  font-size: x-large;\n  color: white; }\n\n.nav-link:hover, .nav-link:focus, .nav-link:active {\n    color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaW1hZ2UtdXBsb2FkL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQTs7QUFFbEI7RUFDQyxhQUFhO0VBQ1osdUJBQXVCLEVBQUE7O0FBRTFCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRmQ7SUFPSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ltYWdlLXVwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuIC5jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiB9XG4uY2FyZC1ib2R5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cbi5jYXJkLXRleHQge1xuICBwYWRkaW5nOiA1JTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY2FyZC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdi1saW5rIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpob3ZlcixcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/image-upload/image-upload.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/image-upload/image-upload.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImageUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadComponent", function() { return ImageUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageUploadComponent = /** @class */ (function () {
    function ImageUploadComponent() {
    }
    ImageUploadComponent.prototype.ngOnInit = function () {
    };
    ImageUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-upload',
            template: __webpack_require__(/*! ./image-upload.component.html */ "./src/app/components/image-upload/image-upload.component.html"),
            styles: [__webpack_require__(/*! ./image-upload.component.scss */ "./src/app/components/image-upload/image-upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageUploadComponent);
    return ImageUploadComponent;
}());



/***/ }),

/***/ "./src/app/components/mat-dash/mat-dash.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/mat-dash/mat-dash.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/mat-dash/mat-dash.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/mat-dash/mat-dash.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container {\n  padding: 20px; }\n\n.dashboard-card-content {\n  width: 100%; }\n\n.image {\n  width: 250px;\n  height: 200px;\n  background-size: cover; }\n\n.dashboard-card {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  background: transparent; }\n\n.more-button {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.dashboard-card-content {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbWF0LWRhc2gvbWF0LWRhc2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhLEVBQUE7O0FBSWY7RUFDQSxXQUFXLEVBQUE7O0FBRVg7RUFDSSxZQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUUxQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWF0LWRhc2gvbWF0LWRhc2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1jb250YWluZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuXG4gIH1cblxuLmRhc2hib2FyZC1jYXJkLWNvbnRlbnR7XG53aWR0aDogMTAwJTtcbn1cbi5pbWFnZXtcbiAgICB3aWR0aDogIDI1MHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5kYXNoYm9hcmQtY2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDVweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG5cbi5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/mat-dash/mat-dash.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/mat-dash/mat-dash.component.ts ***!
  \***********************************************************/
/*! exports provided: MatDashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDashComponent", function() { return MatDashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MatDashComponent = /** @class */ (function () {
    // cards = [
    //   { title: 'Bruno', name: 'Bruno' ,cols: 1, rows: 1 , imagePath: 'assets/images/dog1.jpg'},
    //   { title: 'Cai', name: 'Cali' , cols: 1, rows: 1 , imagePath: 'assets/images/dog2.jpg'},
    //   { title: 'Puppe', name: 'Pakistan' , cols: 1, rows: 1 , imagePath: 'assets/images/dog3.jpg'},
    //   { title: 'Danger', name: 'Nawab' , cols: 1, rows: 1 , imagePath: 'assets/images/dog4.jpg'}
    // ];
    function MatDashComponent() {
    }
    MatDashComponent.prototype.ngOnInit = function () {
        this.cards = this.cardsDetails;
        this.cards2 = this.cardsDetails;
        this.cards3 = this.cardsDetails;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], MatDashComponent.prototype, "cardsDetails", void 0);
    MatDashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mat-dash',
            template: __webpack_require__(/*! ./mat-dash.component.html */ "./src/app/components/mat-dash/mat-dash.component.html"),
            styles: [__webpack_require__(/*! ./mat-dash.component.scss */ "./src/app/components/mat-dash/mat-dash.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MatDashComponent);
    return MatDashComponent;
}());



/***/ }),

/***/ "./src/app/components/my-conceptual/my-conceptual.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/my-conceptual/my-conceptual.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"heading-main\">\n  <h1 style=\"color: white;\">Conceptual Knowledge</h1>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n  <div class=\"card\">\n    <h3>OO Programming</h3>\n  </div>\n  <div class=\"card\">\n    <h3>AGILE Methodlogies</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Algorithms</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Networking</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Machine Learning</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Cryptography</h3>\n  </div>\n  <div class=\"card\">\n    <h3>OpenCV</h3>\n  </div>\n\n\n</div>\n<div class=\"col-sm-4\">\n  <div class=\"card\">\n    <h3>Data Structures</h3>\n  </div>\n  <div class=\"card\">\n    <h3>User Experience(UX)</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Front-End Development</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Cloud Computing</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Data Mining</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Jenkins</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Cuda</h3>\n  </div>\n</div>\n<div class=\"col-sm-4\">\n  <div class=\"card\">\n    <h3>Resposive Web Design</h3>\n  </div>\n  <div class=\"card\">\n    <h3>SCRUM</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Test Automation</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Artificial Intelligence</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Cryptography</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Docker</h3>\n  </div>\n  <div class=\"card\">\n    <h3>TensorFlow</h3>\n  </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/my-conceptual/my-conceptual.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/my-conceptual/my-conceptual.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h3 {\n  margin: 0px; }\n\n.heading-main {\n  text-align: center; }\n\n.card {\n  text-align: center;\n  background-color: white;\n  display: flex;\n  content: \"\";\n  margin: 1%;\n  box-shadow: 0 1px 3px 0 rgba(58, 62, 75, 0.25);\n  flex: 0 0 25%;\n  align-items: center;\n  justify-content: center;\n  align-content: flex-start;\n  border-radius: .2rem;\n  transition: all 250ms ease-out;\n  -moz-transition: all 250ms ease-out;\n  -ms-transition: all 250ms ease-out;\n  -webkit-transition: all 250ms ease-out;\n  -o-transition: all 250ms ease-out; }\n\n.card:hover {\n    transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -webkit-filter: saturate(50%);\n            filter: saturate(50%);\n    transform: scale(1.2);\n    -moz-transform: scale(1.2);\n    -webkit-transform: scale(1.2);\n    -o-transform: scale(1.2);\n    -ms-transform: scale(1.2); }\n\n.container {\n  overflow-x: hidden; }\n\n.nav-link {\n  font-size: x-large;\n  color: white; }\n\n.nav-link:hover, .nav-link:focus, .nav-link:active {\n    color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbXktY29uY2VwdHVhbC9teS1jb25jZXB0dWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVyxFQUFBOztBQUVYO0VBQ0Esa0JBQWtCLEVBQUE7O0FBMkJsQjtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVO0VBQ1YsOENBQThDO0VBQzlDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFqQ3BCLDhCQWtDd0M7RUFqQ3hDLG1DQWlDd0M7RUFoQ3hDLGtDQWdDd0M7RUEvQnhDLHNDQStCd0M7RUE5QnhDLGlDQThCd0MsRUFBQTs7QUFaMUM7SUFSRSxxQkFBb0I7SUFDcEIsMEJBQXlCO0lBQ3pCLDZCQUE0QjtJQUM1Qix3QkFBdUI7SUFDdkIseUJBQXdCO0lBb0J0Qiw2QkFBcUI7WUFBckIscUJBQXFCO0lBeEJ2QixxQkFBb0I7SUFDcEIsMEJBQXlCO0lBQ3pCLDZCQUE0QjtJQUM1Qix3QkFBdUI7SUFDdkIseUJBQXdCLEVBQUE7O0FBd0IxQjtFQUNBLGtCQUFrQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7O0FBRmQ7SUFPSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215LWNvbmNlcHR1YWwvbXktY29uY2VwdHVhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oM3tcbiAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLmhlYWRpbmctbWFpbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICBAbWl4aW4gdHJhbnNpdGlvbigkeCwgJHksICR6KXtcbiAgICB0cmFuc2l0aW9uOiAkeCAkeSAkejtcbiAgICAtbW96LXRyYW5zaXRpb246ICR4ICR5ICR6O1xuICAgIC1tcy10cmFuc2l0aW9uOiAkeCAkeSAkejtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR4ICR5ICR6O1xuICAgIC1vLXRyYW5zaXRpb246ICR4ICR5ICR6O1xuICB9XG5cbiAgQG1peGluIHJvdGF0ZSgkeCl7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCR4KTsgLyogSUUgOSAqL1xuICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCR4KTsgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gICAgIHRyYW5zZm9ybTogcm90YXRlKCR4KTtcbiAgfVxuXG4gIEBtaXhpbiBzY2FsZSgkeCl7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgkeCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCR4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHgpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoJHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKCR4KTtcbiAgfVxuXG5cbiAgLmNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDU4LCA2MiwgNzUsIDAuMjUpO1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAyNTBtcywgZWFzZS1vdXQpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBAaW5jbHVkZSBzY2FsZSgxLjEpO1xuICAgICAgZmlsdGVyOiBzYXR1cmF0ZSg1MCUpO1xuICAgICAgQGluY2x1ZGUgc2NhbGUoMS4yKVxuICAgIH1cbiAgfVxuICAuY29udGFpbmVye1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cblxuICAubmF2LWxpbmsge1xuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMsXG4gICAgJjphY3RpdmUge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/my-conceptual/my-conceptual.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/my-conceptual/my-conceptual.component.ts ***!
  \*********************************************************************/
/*! exports provided: MyConceptualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyConceptualComponent", function() { return MyConceptualComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyConceptualComponent = /** @class */ (function () {
    function MyConceptualComponent() {
    }
    MyConceptualComponent.prototype.ngOnInit = function () {
    };
    MyConceptualComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-conceptual',
            template: __webpack_require__(/*! ./my-conceptual.component.html */ "./src/app/components/my-conceptual/my-conceptual.component.html"),
            styles: [__webpack_require__(/*! ./my-conceptual.component.scss */ "./src/app/components/my-conceptual/my-conceptual.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyConceptualComponent);
    return MyConceptualComponent;
}());



/***/ }),

/***/ "./src/app/components/my-education/my-education.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/my-education/my-education.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"educational\">\n  <section class=\"text-center\">\n    <h2 class=\"h1 py-5 font-weight-bold\" style=\"padding: 50px;\">Educational Background</h2>\n\n    <p class=\"px-5 mb-5 pb-3 lead grey-text\">\n      Title: Master of Science(Computer Science)\n    </p>\n\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <h4 class=\"font-weight-bold mt-3\">Master in Computer Science</h4>\n        <!-- <hr style=\"color: white;\" /> -->\n        <p class=\"grey-text\" style=\"font-size: 12px;\">\n          University at Albany, SUNY, Albany, New York, U.S.\n        </p>\n        <!-- <hr style=\"color: white;\" /> -->\n        <p class=\"grey-text\">\n          May 2020\n        </p>\n        <!-- <hr style=\"color: white;\" /> -->\n      </div>\n\n      <div class=\"col-md-4\">\n        <h4 class=\"font-weight-bold mt-3\">Bachelor in Computer Engineering</h4>\n        <!-- <hr style=\"color: white;\" /> -->\n          <p class=\"grey-text\" style=\"font-size: 10px;\">\n          Thakur College of Engineering and Technology, Mumbai, Maharashtra,\n          India\n        </p>\n        <!-- <hr style=\"color: white;\" /> -->\n        <p class=\"grey-text\">\n          June 2017\n        </p>\n        <!-- <hr style=\"color: white;\" /> -->\n      </div>\n\n      <div class=\"col-md-4\">\n        <h4 class=\"font-weight-bold mt-3\">Diploma in Computer Engineering</h4>\n        <!-- <hr style=\"color: white;\" /> -->\n        <p class=\"grey-text\" style=\"font-size: 12px;\">\n          Thakur Polytechnic, Mumbai, Maharashtra, India\n        </p>\n        <!-- <hr style=\"color: white;\" /> -->\n        <p class=\"grey-text\">\n          June 2014\n        </p>\n        <!-- <hr style=\"color: white;\" /> -->\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/my-education/my-education.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/my-education/my-education.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center {\n  color: white; }\n\n.educational {\n  padding-right: 5%;\n  padding-left: 5%; }\n\n.col-md-4 {\n  padding-top: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbXktZWR1Y2F0aW9uL215LWVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLFlBQVksRUFBQTs7QUFFWjtFQUNDLGlCQUFpQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFFaEI7RUFDQSxlQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215LWVkdWNhdGlvbi9teS1lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXJ7XG5jb2xvcjogd2hpdGU7XG59XG4uZWR1Y2F0aW9uYWx7XG4gcGFkZGluZy1yaWdodDogNSU7XG5wYWRkaW5nLWxlZnQ6IDUlO1xufVxuLmNvbC1tZC00e1xucGFkZGluZy10b3A6NSU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/my-education/my-education.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/my-education/my-education.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyEducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyEducationComponent", function() { return MyEducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyEducationComponent = /** @class */ (function () {
    function MyEducationComponent() {
    }
    MyEducationComponent.prototype.ngOnInit = function () {
    };
    MyEducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-education',
            template: __webpack_require__(/*! ./my-education.component.html */ "./src/app/components/my-education/my-education.component.html"),
            styles: [__webpack_require__(/*! ./my-education.component.scss */ "./src/app/components/my-education/my-education.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyEducationComponent);
    return MyEducationComponent;
}());



/***/ }),

/***/ "./src/app/components/my-footer/my-footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/my-footer/my-footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\n<div class=\"mini-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"copyright-text\">\n          <p>\n            © 2020 All rights reserved. Created by\n            <a href=\"#\">Akash</a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/my-footer/my-footer.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/my-footer/my-footer.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700);\nbody {\n  font-family: Rubik,sans-serif;\n  position: relative;\n  font-weight: 400;\n  font-size: 15px; }\nul {\n  padding: 0;\n  margin: 0; }\nli {\n  list-style: none; }\na:focus, a:hover {\n  text-decoration: none;\n  transition: .3s ease; }\na:focus {\n  outline: 0; }\nimg {\n  max-width: 100%; }\np {\n  font-size: 16px;\n  line-height: 30px;\n  color: black;\n  font-weight: 300; }\nh4 {\n  font-family: Rubik,sans-serif;\n  margin: 0;\n  font-weight: 400;\n  padding: 0;\n  color: #363940; }\na {\n  color: black; }\n.no-padding {\n  padding: 0 !important; }\n.go_top {\n  line-height: 40px;\n  cursor: pointer;\n  width: 40px;\n  background: #5867dd;\n  color: #fff;\n  position: fixed;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 50%;\n  right: calc((100% - 1140px)/ 2);\n  z-index: 111;\n  bottom: 80px;\n  text-align: center; }\n.go_top span {\n  display: inline-block; }\n.footer-big {\n  padding: 105px 0 65px 0; }\n.footer-big .footer-widget {\n  margin-bottom: 40px; }\n.footer--light {\n  background: #e7e8ed; }\n.footer-big .footer-menu ul li a, .footer-big p, .footer-big ul li {\n  color: #898b96; }\n.footer-menu {\n  padding-left: 48px; }\n.footer-menu ul li a {\n  font-size: 15px;\n  line-height: 32px;\n  transition: .3s; }\n.footer-menu ul li a:hover {\n  color: #5867dd; }\n.footer-menu--1 {\n  width: 100%; }\n.footer-widget-title {\n  line-height: 42px;\n  margin-bottom: 10px;\n  font-size: 18px; }\n.mini-footer {\n  background: black;\n  text-align: center;\n  padding: 32px 0; }\n.mini-footer p {\n  margin: 0;\n  line-height: 26px;\n  font-size: 15px;\n  color: white; }\n.mini-footer p a {\n  color: lightcoral; }\n.mini-footer p a:hover {\n  color: #34bfa3; }\n.widget-about img {\n  display: block;\n  margin-bottom: 30px; }\n.widget-about p {\n  font-weight: 400; }\n.widget-about .contact-details {\n  margin: 30px 0 0 0; }\n.widget-about .contact-details li {\n  margin-bottom: 10px; }\n.widget-about .contact-details li:last-child {\n  margin-bottom: 0; }\n.widget-about .contact-details li span {\n  padding-right: 12px; }\n.widget-about .contact-details li a {\n  color: lightcoral; }\n@media (max-width: 991px) {\n  .footer-menu {\n    padding-left: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbXktZm9vdGVyL215LWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRUFBWTtBQUNaO0VBRUMsNkJBQTRCO0VBQzVCLGtCQUFpQjtFQUNqQixnQkFBZTtFQUNmLGVBQ0QsRUFBQTtBQUNBO0VBQ0MsVUFBUztFQUNULFNBQ0QsRUFBQTtBQUNBO0VBQ0MsZ0JBQ0QsRUFBQTtBQUNBO0VBQ0MscUJBQW9CO0VBR3BCLG9CQUNELEVBQUE7QUFDQTtFQUNDLFVBQ0QsRUFBQTtBQUNBO0VBQ0MsZUFDRCxFQUFBO0FBQ0E7RUFDQyxlQUFjO0VBQ2QsaUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFDRCxFQUFBO0FBQ0E7RUFDQyw2QkFBNEI7RUFDNUIsU0FBUTtFQUNSLGdCQUFlO0VBQ2YsVUFBUztFQUNULGNBQ0QsRUFBQTtBQUNBO0VBRUMsWUFBWSxFQUFBO0FBRWI7RUFDQyxxQkFBbUIsRUFBQTtBQUVwQjtFQUNDLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsV0FBVTtFQUNWLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsZUFBYztFQUVkLHdDQUFtQztFQUVuQyxrQkFBaUI7RUFFakIsK0JBQThCO0VBQzlCLFlBQVc7RUFDWCxZQUFXO0VBQ1gsa0JBQ0QsRUFBQTtBQUNBO0VBQ0MscUJBQ0QsRUFBQTtBQUNBO0VBQ0MsdUJBQ0QsRUFBQTtBQUNBO0VBQ0MsbUJBQ0QsRUFBQTtBQUNBO0VBQ0MsbUJBQ0QsRUFBQTtBQUNBO0VBQ0MsY0FDRCxFQUFBO0FBQ0E7RUFDQyxrQkFDRCxFQUFBO0FBQ0E7RUFDQyxlQUFjO0VBQ2QsaUJBQWdCO0VBR2hCLGVBQ0QsRUFBQTtBQUNBO0VBQ0MsY0FDRCxFQUFBO0FBQ0E7RUFDQyxXQUNELEVBQUE7QUFDQTtFQUNDLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsZUFDRCxFQUFBO0FBQ0E7RUFDQyxpQkFBaUI7RUFDakIsa0JBQWlCO0VBQ2pCLGVBQ0QsRUFBQTtBQUNBO0VBQ0MsU0FBUTtFQUNSLGlCQUFnQjtFQUNoQixlQUFjO0VBQ2QsWUFBWSxFQUFBO0FBRWI7RUFDQyxpQkFBaUIsRUFBQTtBQUVsQjtFQUNDLGNBQ0QsRUFBQTtBQUNBO0VBQ0MsY0FBYTtFQUNiLG1CQUNELEVBQUE7QUFDQTtFQUNDLGdCQUNELEVBQUE7QUFDQTtFQUNDLGtCQUNELEVBQUE7QUFDQTtFQUNDLG1CQUNELEVBQUE7QUFDQTtFQUNDLGdCQUNELEVBQUE7QUFDQTtFQUNDLG1CQUNELEVBQUE7QUFDQTtFQUNFLGlCQUNGLEVBQUE7QUFDQTtFQUNDO0lBQ0MsZUFDRCxFQUFBLEVBQUMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215LWZvb3Rlci9teS1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UnViaWs6MzAwLDQwMCw1MDAsNzAwKTtcbmJvZHkge1xuXG4gZm9udC1mYW1pbHk6UnViaWssc2Fucy1zZXJpZjtcbiBwb3NpdGlvbjpyZWxhdGl2ZTtcbiBmb250LXdlaWdodDo0MDA7XG4gZm9udC1zaXplOjE1cHhcbn1cbnVsIHtcbiBwYWRkaW5nOjA7XG4gbWFyZ2luOjBcbn1cbmxpIHtcbiBsaXN0LXN0eWxlOm5vbmVcbn1cbmE6Zm9jdXMsYTpob3ZlciB7XG4gdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gLXdlYmtpdC10cmFuc2l0aW9uOi4zcyBlYXNlO1xuIC1vLXRyYW5zaXRpb246LjNzIGVhc2U7XG4gdHJhbnNpdGlvbjouM3MgZWFzZVxufVxuYTpmb2N1cyB7XG4gb3V0bGluZTowXG59XG5pbWcge1xuIG1heC13aWR0aDoxMDAlXG59XG5wIHtcbiBmb250LXNpemU6MTZweDtcbiBsaW5lLWhlaWdodDozMHB4O1xuIGNvbG9yOiBibGFjaztcbiBmb250LXdlaWdodDozMDBcbn1cbmg0IHtcbiBmb250LWZhbWlseTpSdWJpayxzYW5zLXNlcmlmO1xuIG1hcmdpbjowO1xuIGZvbnQtd2VpZ2h0OjQwMDtcbiBwYWRkaW5nOjA7XG4gY29sb3I6IzM2Mzk0MFxufVxuYSB7XG5cbiBjb2xvcjogYmxhY2s7XG59XG4ubm8tcGFkZGluZyB7XG4gcGFkZGluZzowIWltcG9ydGFudFxufVxuLmdvX3RvcCB7XG4gbGluZS1oZWlnaHQ6NDBweDtcbiBjdXJzb3I6cG9pbnRlcjtcbiB3aWR0aDo0MHB4O1xuIGJhY2tncm91bmQ6IzU4NjdkZDtcbiBjb2xvcjojZmZmO1xuIHBvc2l0aW9uOmZpeGVkO1xuIC13ZWJraXQtYm94LXNoYWRvdzowIDRweCA0cHggcmdiYSgwLDAsMCwuMSk7XG4gYm94LXNoYWRvdzowIDRweCA0cHggcmdiYSgwLDAsMCwuMSk7XG4gLXdlYmtpdC1ib3JkZXItcmFkaXVzOjUwJTtcbiBib3JkZXItcmFkaXVzOjUwJTtcbiByaWdodDotd2Via2l0LWNhbGMoKDEwMCUgLSAxMTQwcHgpLyAyKTtcbiByaWdodDpjYWxjKCgxMDAlIC0gMTE0MHB4KS8gMik7XG4gei1pbmRleDoxMTE7XG4gYm90dG9tOjgwcHg7XG4gdGV4dC1hbGlnbjpjZW50ZXJcbn1cbi5nb190b3Agc3BhbiB7XG4gZGlzcGxheTppbmxpbmUtYmxvY2tcbn1cbi5mb290ZXItYmlnIHtcbiBwYWRkaW5nOjEwNXB4IDAgNjVweCAwXG59XG4uZm9vdGVyLWJpZyAuZm9vdGVyLXdpZGdldCB7XG4gbWFyZ2luLWJvdHRvbTo0MHB4XG59XG4uZm9vdGVyLS1saWdodCB7XG4gYmFja2dyb3VuZDojZTdlOGVkXG59XG4uZm9vdGVyLWJpZyAuZm9vdGVyLW1lbnUgdWwgbGkgYSwuZm9vdGVyLWJpZyBwLC5mb290ZXItYmlnIHVsIGxpIHtcbiBjb2xvcjojODk4Yjk2XG59XG4uZm9vdGVyLW1lbnUge1xuIHBhZGRpbmctbGVmdDo0OHB4XG59XG4uZm9vdGVyLW1lbnUgdWwgbGkgYSB7XG4gZm9udC1zaXplOjE1cHg7XG4gbGluZS1oZWlnaHQ6MzJweDtcbiAtd2Via2l0LXRyYW5zaXRpb246LjNzO1xuIC1vLXRyYW5zaXRpb246LjNzO1xuIHRyYW5zaXRpb246LjNzXG59XG4uZm9vdGVyLW1lbnUgdWwgbGkgYTpob3ZlciB7XG4gY29sb3I6IzU4NjdkZFxufVxuLmZvb3Rlci1tZW51LS0xIHtcbiB3aWR0aDoxMDAlXG59XG4uZm9vdGVyLXdpZGdldC10aXRsZSB7XG4gbGluZS1oZWlnaHQ6NDJweDtcbiBtYXJnaW4tYm90dG9tOjEwcHg7XG4gZm9udC1zaXplOjE4cHhcbn1cbi5taW5pLWZvb3RlciB7XG4gYmFja2dyb3VuZDogYmxhY2s7XG4gdGV4dC1hbGlnbjpjZW50ZXI7XG4gcGFkZGluZzozMnB4IDBcbn1cbi5taW5pLWZvb3RlciBwIHtcbiBtYXJnaW46MDtcbiBsaW5lLWhlaWdodDoyNnB4O1xuIGZvbnQtc2l6ZToxNXB4O1xuIGNvbG9yOiB3aGl0ZTtcbn1cbi5taW5pLWZvb3RlciBwIGEge1xuIGNvbG9yOiBsaWdodGNvcmFsO1xufVxuLm1pbmktZm9vdGVyIHAgYTpob3ZlciB7XG4gY29sb3I6IzM0YmZhM1xufVxuLndpZGdldC1hYm91dCBpbWcge1xuIGRpc3BsYXk6YmxvY2s7XG4gbWFyZ2luLWJvdHRvbTozMHB4XG59XG4ud2lkZ2V0LWFib3V0IHAge1xuIGZvbnQtd2VpZ2h0OjQwMFxufVxuLndpZGdldC1hYm91dCAuY29udGFjdC1kZXRhaWxzIHtcbiBtYXJnaW46MzBweCAwIDAgMFxufVxuLndpZGdldC1hYm91dCAuY29udGFjdC1kZXRhaWxzIGxpIHtcbiBtYXJnaW4tYm90dG9tOjEwcHhcbn1cbi53aWRnZXQtYWJvdXQgLmNvbnRhY3QtZGV0YWlscyBsaTpsYXN0LWNoaWxkIHtcbiBtYXJnaW4tYm90dG9tOjBcbn1cbi53aWRnZXQtYWJvdXQgLmNvbnRhY3QtZGV0YWlscyBsaSBzcGFuIHtcbiBwYWRkaW5nLXJpZ2h0OjEycHhcbn1cbi53aWRnZXQtYWJvdXQgLmNvbnRhY3QtZGV0YWlscyBsaSBhIHtcbiAgY29sb3I6IGxpZ2h0Y29yYWxcbn1cbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSB7XG4gLmZvb3Rlci1tZW51IHtcbiAgcGFkZGluZy1sZWZ0OjBcbiB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/my-footer/my-footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/my-footer/my-footer.component.ts ***!
  \*************************************************************/
/*! exports provided: MyFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFooterComponent", function() { return MyFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyFooterComponent = /** @class */ (function () {
    function MyFooterComponent() {
    }
    MyFooterComponent.prototype.ngOnInit = function () {
    };
    MyFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-footer',
            template: __webpack_require__(/*! ./my-footer.component.html */ "./src/app/components/my-footer/my-footer.component.html"),
            styles: [__webpack_require__(/*! ./my-footer.component.scss */ "./src/app/components/my-footer/my-footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyFooterComponent);
    return MyFooterComponent;
}());



/***/ }),

/***/ "./src/app/components/my-interpersonal/my-interpersonal.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/my-interpersonal/my-interpersonal.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"heading-main\">\n  <h1 style=\"color: white;\">Interpersonal Skills</h1>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n  <div class=\"card\">\n    <h3>Critical Thinking</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Time Management</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Analytical Skills</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Creativity</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Approachability</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Helpfulness</h3>\n  </div>\n  </div>\n  <div class=\"col-sm-4\">\n  <div class=\"card\">\n    <h3>Team Work</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Patience</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Strong Written Communication</h3>\n  </div>\n\n  <div class=\"card\">\n    <h3>Problem-Solving</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Adaptability</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Accountability</h3>\n  </div>\n</div>\n<div class=\"col-sm-4\">\n  <div class=\"card\">\n    <h3>Strong Verbal Communication</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Active Listening</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Leadership</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Open-Mindedness</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Productivity</h3>\n  </div>\n  <div class=\"card\">\n    <h3>Strong Work Ethics</h3>\n  </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/my-interpersonal/my-interpersonal.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/my-interpersonal/my-interpersonal.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".h3 {\n  margin: 0px; }\n\n.heading-main {\n  text-align: center; }\n\n.card {\n  text-align: center;\n  background-color: white;\n  display: flex;\n  content: \"\";\n  margin: 1%;\n  box-shadow: 0 1px 3px 0 rgba(58, 62, 75, 0.25);\n  flex: 0 0 25%;\n  align-items: center;\n  justify-content: center;\n  align-content: flex-start;\n  border-radius: .2rem;\n  transition: all 250ms ease-out;\n  -moz-transition: all 250ms ease-out;\n  -ms-transition: all 250ms ease-out;\n  -webkit-transition: all 250ms ease-out;\n  -o-transition: all 250ms ease-out; }\n\n.card:hover {\n    transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -webkit-filter: saturate(50%);\n            filter: saturate(50%);\n    transform: scale(1.2);\n    -moz-transform: scale(1.2);\n    -webkit-transform: scale(1.2);\n    -o-transform: scale(1.2);\n    -ms-transform: scale(1.2); }\n\n.container {\n  overflow-x: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbXktaW50ZXJwZXJzb25hbC9teS1pbnRlcnBlcnNvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsV0FBVyxFQUFBOztBQUVYO0VBQ0Esa0JBQWtCLEVBQUE7O0FBMkJsQjtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVO0VBQ1YsOENBQThDO0VBQzlDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFqQ3BCLDhCQWtDd0M7RUFqQ3hDLG1DQWlDd0M7RUFoQ3hDLGtDQWdDd0M7RUEvQnhDLHNDQStCd0M7RUE5QnhDLGlDQThCd0MsRUFBQTs7QUFaMUM7SUFSRSxxQkFBb0I7SUFDcEIsMEJBQXlCO0lBQ3pCLDZCQUE0QjtJQUM1Qix3QkFBdUI7SUFDdkIseUJBQXdCO0lBb0J0Qiw2QkFBcUI7WUFBckIscUJBQXFCO0lBeEJ2QixxQkFBb0I7SUFDcEIsMEJBQXlCO0lBQ3pCLDZCQUE0QjtJQUM1Qix3QkFBdUI7SUFDdkIseUJBQXdCLEVBQUE7O0FBd0IxQjtFQUNBLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS1pbnRlcnBlcnNvbmFsL215LWludGVycGVyc29uYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5oM3tcbiAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLmhlYWRpbmctbWFpbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICBAbWl4aW4gdHJhbnNpdGlvbigkeCwgJHksICR6KXtcbiAgICB0cmFuc2l0aW9uOiAkeCAkeSAkejtcbiAgICAtbW96LXRyYW5zaXRpb246ICR4ICR5ICR6O1xuICAgIC1tcy10cmFuc2l0aW9uOiAkeCAkeSAkejtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246ICR4ICR5ICR6O1xuICAgIC1vLXRyYW5zaXRpb246ICR4ICR5ICR6O1xuICB9XG5cbiAgQG1peGluIHJvdGF0ZSgkeCl7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCR4KTsgLyogSUUgOSAqL1xuICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCR4KTsgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gICAgIHRyYW5zZm9ybTogcm90YXRlKCR4KTtcbiAgfVxuXG4gIEBtaXhpbiBzY2FsZSgkeCl7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgkeCk7XG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCR4KTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHgpO1xuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoJHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKCR4KTtcbiAgfVxuXG5cbiAgLmNhcmQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDU4LCA2MiwgNzUsIDAuMjUpO1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGJvcmRlci1yYWRpdXM6IC4ycmVtO1xuICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsLCAyNTBtcywgZWFzZS1vdXQpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBAaW5jbHVkZSBzY2FsZSgxLjEpO1xuICAgICAgZmlsdGVyOiBzYXR1cmF0ZSg1MCUpO1xuICAgICAgQGluY2x1ZGUgc2NhbGUoMS4yKVxuICAgIH1cbiAgfVxuICAuY29udGFpbmVye1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/my-interpersonal/my-interpersonal.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/my-interpersonal/my-interpersonal.component.ts ***!
  \***************************************************************************/
/*! exports provided: MyInterpersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyInterpersonalComponent", function() { return MyInterpersonalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyInterpersonalComponent = /** @class */ (function () {
    function MyInterpersonalComponent() {
    }
    MyInterpersonalComponent.prototype.ngOnInit = function () {
    };
    MyInterpersonalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-interpersonal',
            template: __webpack_require__(/*! ./my-interpersonal.component.html */ "./src/app/components/my-interpersonal/my-interpersonal.component.html"),
            styles: [__webpack_require__(/*! ./my-interpersonal.component.scss */ "./src/app/components/my-interpersonal/my-interpersonal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyInterpersonalComponent);
    return MyInterpersonalComponent;
}());



/***/ }),

/***/ "./src/app/components/my-intro/my-intro.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/my-intro/my-intro.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"background\">\n\n  <div class=\"row\">\n\n          <div class=\"col\" style=\"padding-bottom: 1%;\">\n      <p style=\"color: white; text-align: center;\">\n\n        <b style=\"font-size: 500%;\">Akash Pramod Pujari</b><br />\n        Recent graduate | Seeking Software Developer Opportunities\n      </p>\n      </div>\n    </div>\n  </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/my-intro/my-intro.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/my-intro/my-intro.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.p {\n  display: flex;\n  justify-content: center; }\n\n.col-md-4 {\n  padding: 2%;\n  text-align: center; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbXktaW50cm8vbXktaW50cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFFbkI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0EsV0FBVTtFQUNWLGtCQUFrQixFQUFBOztBQUdsQjtFQUNDLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215LWludHJvL215LWludHJvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAuY29udGFpbmVye1xuaGVpZ2h0OiAxMDB2aDtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29sLW1kLTR7XG5wYWRkaW5nOjIlO1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5ib2R5IHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/my-intro/my-intro.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/my-intro/my-intro.component.ts ***!
  \***********************************************************/
/*! exports provided: MyIntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyIntroComponent", function() { return MyIntroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyIntroComponent = /** @class */ (function () {
    function MyIntroComponent() {
    }
    MyIntroComponent.prototype.ngOnInit = function () {
    };
    MyIntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-intro',
            template: __webpack_require__(/*! ./my-intro.component.html */ "./src/app/components/my-intro/my-intro.component.html"),
            styles: [__webpack_require__(/*! ./my-intro.component.scss */ "./src/app/components/my-intro/my-intro.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyIntroComponent);
    return MyIntroComponent;
}());



/***/ }),

/***/ "./src/app/components/my-navbar/my-navbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/my-navbar/my-navbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"assets/images/Logo.png\" width=\"150\" height=\"100\" class=\"d-inline-block align-top\" alt=\"\">\n\n  </a>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/my-navbar/my-navbar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/my-navbar/my-navbar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\n  color: white; }\n\n.navbar {\n  background: transparent; }\n\n* {\n  box-sizing: content-box; }\n\n.navbar-brand > img {\n  display: initial; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbXktbmF2YmFyL215LW5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFFZDtFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtFQUNJLHVCQUNKLEVBQUE7O0FBQ0E7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktbmF2YmFyL215LW5hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94XG59XG4ubmF2YmFyLWJyYW5kID4gaW1nIHtcbiAgZGlzcGxheTogaW5pdGlhbDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/my-navbar/my-navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/my-navbar/my-navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: MyNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNavbarComponent", function() { return MyNavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyNavbarComponent = /** @class */ (function () {
    function MyNavbarComponent() {
    }
    MyNavbarComponent.prototype.ngOnInit = function () {
    };
    MyNavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-navbar',
            template: __webpack_require__(/*! ./my-navbar.component.html */ "./src/app/components/my-navbar/my-navbar.component.html"),
            styles: [__webpack_require__(/*! ./my-navbar.component.scss */ "./src/app/components/my-navbar/my-navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyNavbarComponent);
    return MyNavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/my-projects/my-projects.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/my-projects/my-projects.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"heading\">\n    <h1 style=\"color: white; padding-bottom: 50px;\">Projects Created</h1>\n  </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-4 text-center\">\n        <div class=\"flip-card\">\n          <div class=\"flip-card-inner\">\n            <div class=\"flip-card-front\">\n              <h2>Real Time Object Detection</h2>\n            </div>\n            <div class=\"flip-card-back\">\n              <span>\n                <p>Tech used: <br />Java (Swing), MySQL, OpenCV, TensorFlow</p>\n                <div></div>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-sm-8\" style=\"padding: 30px; color: white;\">\n        <ul>\n          <li>\n            The project detects human faces from an image, video or live camera\n            using OpenCV and TensorFlow\n          </li>\n          <li>\n            Designed and implemented User Interface for the application with\n            revisions based on requests from the project owner.\n          </li>\n          <li>\n            Created and managed a database using MySQL to store registered users\n            with authorization and authentication functionalities.\n          </li>\n          <li>\n            Developed a human detector using Haar feature-based cascade\n            classifiers.\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-4 text-center\">\n      <div class=\"flip-card\">\n        <div class=\"flip-card-inner\">\n          <div class=\"flip-card-front\">\n            <h2>Hospital Management System</h2>\n          </div>\n          <div class=\"flip-card-back\">\n            <p>\n              Tech used: <br />JavaScript, JSP, HTML, CSS, MVC Framework, MySQL,\n              Amazon Web Services (RDS, BeanStalk, EC2, DynamoDB, S3)\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\" style=\"padding: 30px; color: white;\">\n      <ul>\n        <li>\n          Lead a group of 7 members to develop a versatile hospital management\n          system. It provides many functionalities such as patient\n          registrations, management of appointments and prescriptions.\n        </li>\n        <li>\n          This project will help hospitals to automate the management process\n          such as assigning doctors to patients with specific conditions. It\n          helps the patients and doctors to efficiently schedule and manage\n          their meetings. Doctors can easily update patient prescriptions and\n          notify about the update.\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-sm-4 text-center\">\n      <div class=\"flip-card\">\n        <div class=\"flip-card-inner\">\n          <div class=\"flip-card-front\">\n            <h2>Go-Amigo</h2>\n          </div>\n          <div class=\"flip-card-back\">\n            <p>\n              Tech used: <br />\n              Angular, NodeJS, ExpressJS, MongoDB, HTTP Client API, Bootstrap,\n              HTML5, CSS3, Amazon Web Services (RDS, BeanStalk, EC2, DynamoDB,\n              S3)\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-8\" style=\"padding: 30px; color: white;\">\n      <ul>\n        <li>\n          Collabrated with a team of 6 members and implemented smart trip planner\n          with budget management, restaurant suggestions and gallery management\n        </li>\n        <li>\n          Implemented HTTP Client API in Angular to communicate with backend\n          services over HTTP protocol.\n        </li>\n        <li>\n          Established communication between MongoDB and ExpressJS framework to\n          service requests.\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4 text-center\">\n      <div class=\"flip-card\">\n        <div class=\"flip-card-inner\">\n          <div class=\"flip-card-front\">\n            <h2>A visual saliency-based video Hashing Algorithm</h2>\n          </div>\n          <div class=\"flip-card-back\">\n            <p>\n              Tech used: <br />Python(Libraries used: Nmap, Numpy, Scapy,\n              Cryptography)\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-8\" style=\"padding: 30px; color: white;\">\n      <ul>\n        <li>\n          Due to the rise of video blogging, the video retrieval and copyright\n          protection, it is crucial to protect it from various attacks from\n          attackers who might use them for their personal gain.\n        </li>\n        <li>\n          The implemented project plays a crucial role in eliminating the threat\n          and protecting the video from different non-validated users. It uses a\n          combination of two different types of Hashing functions in order to\n          increase the security.\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4 text-center\">\n      <div class=\"flip-card\">\n        <div class=\"flip-card-inner\">\n          <div class=\"flip-card-front\">\n            <h2>Smart Weighing Machine</h2>\n          </div>\n          <div class=\"flip-card-back\">\n            <p>\n              Tech used: <br />ASP.NET, Microsoft SQL Server, Bootstrap\n              Templates, Raspberry Pi 3 B model\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-8\" style=\"padding: 30px; color: white;\">\n      <ul>\n        <li>\n          The proposed model is based on standard weighing machine which is\n          available in market but instead of using a microcontroller, we incorporated raspberry pi to measure weight, enable web connectivity and different\n          sensor interfaces.\n        </li>\n        <li>\n          This project will help farmers to automate the cataloging process by\n          using this weighing machine and will reduce the human errors. It helps\n          in reducing hoarding and increase transparency between farmers and\n          customers. This project was nominated for DR. APJ Abdul Kalam National\n          Award.\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4 text-center\">\n      <div class=\"flip-card\">\n        <div class=\"flip-card-inner\">\n          <div class=\"flip-card-front\">\n            <h2>Android Travel Mate</h2>\n          </div>\n          <div class=\"flip-card-back\">\n            <p>\n              Tech used: <br />Tesseract Engine version 3.01, Android SDK,\n              Eclipse IDE, Microsoft Translator Java API\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-8\" style=\"padding: 30px; color: white;\">\n      <ul>\n        <li>\n          The project, enables Travelers and tourists to easily capture the\n          native country language books pages, signboards, banners and hotel\n          menus into their own understandable language.\n        </li>\n        <li>\n          The project aims to develop set of tools for translating texts between\n          multiple languages in real time with high quality.\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/my-projects/my-projects.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/my-projects/my-projects.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */\n.flip-card {\n  background-color: transparent;\n  width: 300px;\n  height: 200px;\n  border: 1px solid #e4dede;\n  perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */ }\n/* This container is needed to position the front and back side */\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d; }\n/* Do an horizontal flip when you move the mouse over the flip box container */\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg); }\n/* Position the front and back side */\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden; }\n/* Style the front side (fallback if image is missing) */\n.flip-card-front {\n  background-color: black;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n/* Style the back side */\n.flip-card-back {\n  background-color: black;\n  color: white;\n  transform: rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.row {\n  padding: 0% 5% 5% 5%; }\n.flip-card {\n  display: inline-block;\n  max-width: 300px;\n  min-width: 150px;\n  content: \"\";\n  box-shadow: 0 1px 3px 0 rgba(58, 62, 75, 0.25);\n  flex: 0 0 25%;\n  align-items: flex-start;\n  align-content: flex-start;\n  border-radius: .2rem;\n  transition: all 250ms ease-out;\n  -moz-transition: all 250ms ease-out;\n  -ms-transition: all 250ms ease-out;\n  -webkit-transition: all 250ms ease-out;\n  -o-transition: all 250ms ease-out; }\n.flip-card:hover {\n    transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -webkit-filter: saturate(50%);\n            filter: saturate(50%);\n    transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    -ms-transform: scale(1.1); }\n.heading {\n  text-align: center; }\n.text-center {\n  text-align: center; }\n.container {\n  overflow-x: hidden; }\nul {\n  text-align: justify;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px; }\n.flip-card:before, .flip-card:after {\n  content: '';\n  position: absolute;\n  left: -2px;\n  top: -2px;\n  background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);\n  background-size: 400%;\n  width: calc(100% + 4px);\n  height: calc(100% + 4px);\n  z-index: -1;\n  -webkit-animation: steam 20s linear infinite;\n          animation: steam 20s linear infinite; }\n@-webkit-keyframes steam {\n  0% {\n    background-position: 0 0; }\n  50% {\n    background-position: 400% 0; }\n  100% {\n    background-position: 0 0; } }\n@keyframes steam {\n  0% {\n    background-position: 0 0; }\n  50% {\n    background-position: 400% 0; }\n  100% {\n    background-position: 0 0; } }\n.flip-card:after {\n  -webkit-filter: blur(50px);\n          filter: blur(50px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbXktcHJvamVjdHMvbXktcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb09BQUE7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFBRSxnREFBQSxFQUFpRDtBQUd4RSxpRUFBQTtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQiw0QkFBNEIsRUFBQTtBQUc5Qiw4RUFBQTtBQUNBO0VBQ0UsMEJBQTBCLEVBQUE7QUFHNUIscUNBQUE7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztFQUFFLFdBQUE7RUFDckMsMkJBQTJCLEVBQUE7QUFHN0Isd0RBQUE7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBRVosYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTtBQUd6Qix3QkFBQTtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTtBQXdCckI7RUFDRSxvQkFBb0IsRUFBQTtBQUd0QjtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCw4Q0FBOEM7RUFDOUMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsb0JBQW9CO0VBakNwQiw4QkFrQ3dDO0VBakN4QyxtQ0FpQ3dDO0VBaEN4QyxrQ0FnQ3dDO0VBL0J4QyxzQ0ErQndDO0VBOUJ4QyxpQ0E4QndDLEVBQUE7QUFWMUM7SUFWRSxxQkFBb0I7SUFDcEIsMEJBQXlCO0lBQ3pCLDZCQUE0QjtJQUM1Qix3QkFBdUI7SUFDdkIseUJBQXdCO0lBcUJ0Qiw2QkFBcUI7WUFBckIscUJBQXFCO0lBekJ2QixxQkFBb0I7SUFDcEIsMEJBQXlCO0lBQ3pCLDZCQUE0QjtJQUM1Qix3QkFBdUI7SUFDdkIseUJBQXdCLEVBQUE7QUF5QjFCO0VBQ0Esa0JBQWtCLEVBQUE7QUFJbEI7RUFDQSxrQkFBa0IsRUFBQTtBQUdsQjtFQUNBLGtCQUFrQixFQUFBO0FBR2xCO0VBQ0EsbUJBQW1CO0VBQ25CLDBCQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtBQUl6QjtFQUNDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCw0SEFDbUM7RUFDbkMscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDRDQUFvQztVQUFwQyxvQ0FBb0MsRUFBQTtBQUdyQztFQUNDO0lBQ0Msd0JBQXdCLEVBQUE7RUFFekI7SUFDQywyQkFBMkIsRUFBQTtFQUU1QjtJQUNDLHdCQUF3QixFQUFBLEVBQUE7QUFSMUI7RUFDQztJQUNDLHdCQUF3QixFQUFBO0VBRXpCO0lBQ0MsMkJBQTJCLEVBQUE7RUFFNUI7SUFDQyx3QkFBd0IsRUFBQSxFQUFBO0FBSTFCO0VBQ0MsMEJBQWtCO1VBQWxCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS1wcm9qZWN0cy9teS1wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBmbGlwIGNhcmQgY29udGFpbmVyIC0gc2V0IHRoZSB3aWR0aCBhbmQgaGVpZ2h0IHRvIHdoYXRldmVyIHlvdSB3YW50LiBXZSBoYXZlIGFkZGVkIHRoZSBib3JkZXIgcHJvcGVydHkgdG8gZGVtb25zdHJhdGUgdGhhdCB0aGUgZmxpcCBpdHNlbGYgZ29lcyBvdXQgb2YgdGhlIGJveCBvbiBob3ZlciAocmVtb3ZlIHBlcnNwZWN0aXZlIGlmIHlvdSBkb24ndCB3YW50IHRoZSAzRCBlZmZlY3QgKi9cblxuLmZsaXAtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGRlZGU7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7IC8qIFJlbW92ZSB0aGlzIGlmIHlvdSBkb24ndCB3YW50IHRoZSAzRCBlZmZlY3QgKi9cbn1cblxuLyogVGhpcyBjb250YWluZXIgaXMgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXG4uZmxpcC1jYXJkLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4vKiBEbyBhbiBob3Jpem9udGFsIGZsaXAgd2hlbiB5b3UgbW92ZSB0aGUgbW91c2Ugb3ZlciB0aGUgZmxpcCBib3ggY29udGFpbmVyICovXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLyogUG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cbi5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IC8qIFNhZmFyaSAqL1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi8qIFN0eWxlIHRoZSBmcm9udCBzaWRlIChmYWxsYmFjayBpZiBpbWFnZSBpcyBtaXNzaW5nKSAqL1xuLmZsaXAtY2FyZC1mcm9udCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qIFN0eWxlIHRoZSBiYWNrIHNpZGUgKi9cbi5mbGlwLWNhcmQtYmFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1peGluIHRyYW5zaXRpb24oJHgsICR5LCAkeil7XG4gIHRyYW5zaXRpb246ICR4ICR5ICR6O1xuICAtbW96LXRyYW5zaXRpb246ICR4ICR5ICR6O1xuICAtbXMtdHJhbnNpdGlvbjogJHggJHkgJHo7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogJHggJHkgJHo7XG4gIC1vLXRyYW5zaXRpb246ICR4ICR5ICR6O1xufVxuXG5AbWl4aW4gcm90YXRlKCR4KXtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKCR4KTsgLyogSUUgOSAqL1xuICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgkeCk7IC8qIENocm9tZSwgU2FmYXJpLCBPcGVyYSAqL1xuICAgdHJhbnNmb3JtOiByb3RhdGUoJHgpO1xufVxuXG5AbWl4aW4gc2NhbGUoJHgpe1xuICB0cmFuc2Zvcm06IHNjYWxlKCR4KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKCR4KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKCR4KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgkeCk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKCR4KTtcbn1cbi5yb3d7XG4gIHBhZGRpbmc6IDAlIDUlIDUlIDUlO1xufVxuXG4uZmxpcC1jYXJke1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoNTgsIDYyLCA3NSwgMC4yNSk7XG4gIGZsZXg6IDAgMCAyNSU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDI1MG1zLCBlYXNlLW91dCk7XG5cblxuICAmOmhvdmVyIHtcbiAgICBAaW5jbHVkZSBzY2FsZSgxLjEpO1xuICAgIGZpbHRlcjogc2F0dXJhdGUoNTAlKTtcbiAgICBAaW5jbHVkZSBzY2FsZSgxLjEpXG4gIH1cbn1cbi5oZWFkaW5ne1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi50ZXh0LWNlbnRlcntcbnRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lcntcbm92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxudWx7XG50ZXh0LWFsaWduOiBqdXN0aWZ5O1xucGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbn1cblxuXG4uZmxpcC1jYXJkOmJlZm9yZSwgLmZsaXAtY2FyZDphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IC0ycHg7XG5cdHRvcDogLTJweDtcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmIwMDk0LCAjMDAwMGZmLCAjMDBmZjAwLCNmZmZmMDAsICNmZjAwMDAsICNmYjAwOTQsXG5cdFx0IzAwMDBmZiwgIzAwZmYwMCwjZmZmZjAwLCAjZmYwMDAwKTtcblx0YmFja2dyb3VuZC1zaXplOiA0MDAlO1xuXHR3aWR0aDogY2FsYygxMDAlICsgNHB4KTtcblx0aGVpZ2h0OiBjYWxjKDEwMCUgKyA0cHgpO1xuXHR6LWluZGV4OiAtMTtcblx0YW5pbWF0aW9uOiBzdGVhbSAyMHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHN0ZWFtIHtcblx0MCUge1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcblx0fVxuXHQ1MCUge1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDQwMCUgMDtcblx0fVxuXHQxMDAlIHtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG5cdH1cbn1cblxuLmZsaXAtY2FyZDphZnRlciB7XG5cdGZpbHRlcjogYmx1cig1MHB4KTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/my-projects/my-projects.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-projects/my-projects.component.ts ***!
  \*****************************************************************/
/*! exports provided: MyProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsComponent", function() { return MyProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyProjectsComponent = /** @class */ (function () {
    function MyProjectsComponent() {
        this.isOpen = false;
        this.description = "Hello";
    }
    MyProjectsComponent.prototype.ngOnInit = function () {
    };
    MyProjectsComponent.prototype.showModal = function () {
        this.isOpen = true;
    };
    MyProjectsComponent.prototype.hideModal = function () {
        this.isOpen = false;
    };
    MyProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-projects',
            template: __webpack_require__(/*! ./my-projects.component.html */ "./src/app/components/my-projects/my-projects.component.html"),
            styles: [__webpack_require__(/*! ./my-projects.component.scss */ "./src/app/components/my-projects/my-projects.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyProjectsComponent);
    return MyProjectsComponent;
}());



/***/ }),

/***/ "./src/app/components/my-tabs/my-tabs.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/my-tabs/my-tabs.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/components/my-tabs/my-tabs.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/my-tabs/my-tabs.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs .mat-tab-label {\n  background-color: indianred !important; }\n\n:host ::ng-deep .mat-tab-labels .mat-tab-label .mat-tab-label-content {\n  color: yellow; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbXktdGFicy9teS10YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Esc0NBQXNDLEVBQUE7O0FBR3RDO0VBRUksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS10YWJzL215LXRhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicyAubWF0LXRhYi1sYWJlbCB7XG5iYWNrZ3JvdW5kLWNvbG9yOiBpbmRpYW5yZWQgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIHtcbiAgLm1hdC10YWItbGFiZWxzIC5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/my-tabs/my-tabs.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/my-tabs/my-tabs.component.ts ***!
  \*********************************************************/
/*! exports provided: MyTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTabsComponent", function() { return MyTabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyTabsComponent = /** @class */ (function () {
    function MyTabsComponent() {
        this.cards = [
            {
                title: "Bruno",
                name: "Bruno",
                cols: 1,
                rows: 1,
                imagePath: "assets/images/dog1.jpg",
            },
            {
                title: "Cai",
                name: "Cali",
                cols: 1,
                rows: 1,
                imagePath: "assets/images/dog2.jpg",
            },
            {
                title: "Puppe",
                name: "Pakistan",
                cols: 1,
                rows: 1,
                imagePath: "assets/images/dog3.jpg",
            },
            {
                title: "Danger",
                name: "Nawab",
                cols: 1,
                rows: 1,
                imagePath: "assets/images/dog4.jpg",
            },
        ];
        this.cards2 = [
            {
                title: "Dota 2",
                name: "Chandu",
                cols: 1,
                rows: 1,
                imagePath: "assets/images/dog1.jpg",
            },
            {
                title: "Cs Go",
                name: "Cali",
                cols: 1,
                rows: 1,
                imagePath: "assets/images/dog2.jpg",
            },
            {
                title: "Apex",
                name: "Pakistan",
                cols: 1,
                rows: 1,
                imagePath: "assets/images/dog3.jpg",
            },
            {
                title: "Fortnite",
                name: "Nawab",
                cols: 1,
                rows: 1,
                imagePath: "assets/images/dog4.jpg",
            },
        ];
        this.cards3 = [
            {
                title: "Bruno",
                name: "Bruno",
                cols: 1,
                rows: 1,
                imagePath: "assets/images/dog1.jpg",
            },
            {
                title: "Cai",
                name: "Cali",
                cols: 1,
                rows: 1,
                imagePath: "assets/images/dog2.jpg",
            },
            {
                title: "Puppe",
                name: "Pakistan",
                cols: 1,
                rows: 1,
                imagePath: "assets/images/dog3.jpg",
            },
            {
                title: "Danger",
                name: "Nawab",
                cols: 1,
                rows: 1,
                imagePath: "assets/images/dog4.jpg",
            },
        ];
    }
    MyTabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-my-tabs",
            template: __webpack_require__(/*! ./my-tabs.component.html */ "./src/app/components/my-tabs/my-tabs.component.html"),
            styles: [__webpack_require__(/*! ./my-tabs.component.scss */ "./src/app/components/my-tabs/my-tabs.component.scss")]
        })
    ], MyTabsComponent);
    return MyTabsComponent;
}());



/***/ }),

/***/ "./src/app/components/my-workexp/my-workexp.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-workexp/my-workexp.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <!-- Flexbox container for aligning the toasts -->\n\n  <h1 style=\"color: white; padding: 3%; text-align: center;\">Work Experience</h1>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n\n      <div class=\"flip-card\">\n        <div class=\"flip-card-inner\">\n          <div class=\"flip-card-front\">\n            <h2>Freelancer</h2>\n          </div>\n          <div class=\"flip-card-back\">\n            <span>\n              <p>\n              Jan 2019 - Present</p>\n              <div></div>\n            </span>\n          </div>\n        </div>\n      </div>\n    </div>\n    </div>\n\n      <div class=\"text-center\" style=\"padding: 0% 20% 5% 20%; color: white;\">\n        <ul>\n          <li>\n            Successful developed and deployed projects with Angular, Node.js, Express.js, NoSQL(MongoDB), SQL(mySQL)\n\n          </li>\n          <li>\n            Designed and implemented user interface for e-commerce website using Angular. Developed reusable components for future use.\n\n          </li>\n          <li>\n            Integrated PayPal Payment for accepting payment\n\n          </li>\n          <li>\n            Collaborating with a team of other developers, designers, producers, creative directors, and various agencies to build rich websites.\n\n          </li>\n          <li>\n            Developed a Full Stack Web application for a restaurant.\n\n          </li>\n        </ul>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"flip-card\">\n            <div class=\"flip-card-inner\">\n              <div class=\"flip-card-front\">\n                <h2>Front-End Developer</h2>\n              </div>\n              <div class=\"flip-card-back\">\n                <span>\n                  <p>At:<br />Computer Society of India (CSI) <br>\n                  Jun 2015 - Jun 2017</p>\n                  <div></div>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n        </div>\n          <div class=\"text-center\" style=\"padding: 0% 20% 5% 20%; color: white;\">\n            <ul>\n              <li>\n                Optimized website to increase performance ensuring scalability, created clean, precise and all browser-compatible code.\n\n              </li>\n              <li>\n                Developed dynamic and interactive website that ensured high traffic, page views, and user experience, resulting in 20% increase in registrations for events held in technical festival.\n\n              </li>\n              <li>\n                Actively participated in all team meetings and made revisions to projects as per the client requests.\n\n              </li>\n              <li>\n                Managed and Supported marketing based design for publicly hosting website for the technical festival (Zephyr).\n\n              </li>\n              <li>\n                Took ownership for increasing publicity of all events hosted by CSI.\n\n              </li>\n            </ul>\n          </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/components/my-workexp/my-workexp.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-workexp/my-workexp.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */\n.flip-card {\n  background-color: transparent;\n  width: 300px;\n  height: 200px;\n  border: 1px solid #e4dede;\n  perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */ }\n/* This container is needed to position the front and back side */\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d; }\n/* Do an horizontal flip when you move the mouse over the flip box container */\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg); }\n/* Position the front and back side */\n.flip-card-front, .flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden; }\n/* Style the front side (fallback if image is missing) */\n.flip-card-front {\n  background-color: black;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n/* Style the back side */\n.flip-card-back {\n  background-color: black;\n  color: white;\n  transform: rotateY(180deg);\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.row {\n  padding: 0% 5% 5% 5%;\n  display: flex;\n  justify-content: center; }\n.flip-card {\n  display: inline-block;\n  max-width: 300px;\n  min-width: 150px;\n  content: \"\";\n  box-shadow: 0 1px 3px 0 rgba(58, 62, 75, 0.25);\n  flex: 0 0 25%;\n  align-items: flex-start;\n  align-content: flex-start;\n  border-radius: .2rem;\n  transition: all 250ms ease-out;\n  -moz-transition: all 250ms ease-out;\n  -ms-transition: all 250ms ease-out;\n  -webkit-transition: all 250ms ease-out;\n  -o-transition: all 250ms ease-out; }\n.flip-card:hover {\n    transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    -ms-transform: scale(1.1);\n    -webkit-filter: saturate(50%);\n            filter: saturate(50%);\n    transform: scale(1.1);\n    -moz-transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    -o-transform: scale(1.1);\n    -ms-transform: scale(1.1); }\n.heading {\n  text-align: center; }\n.text-center {\n  display: flex;\n  justify-content: center; }\n.text-center {\n  text-align: center; }\n.container {\n  overflow-x: hidden; }\nul {\n  text-align: justify;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px; }\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: #000; }\n.flip-card:before, .flip-card:after {\n  content: '';\n  position: absolute;\n  left: -2px;\n  top: -2px;\n  background: linear-gradient(45deg, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000, #fb0094, #0000ff, #00ff00, #ffff00, #ff0000);\n  background-size: 400%;\n  width: calc(100% + 4px);\n  height: calc(100% + 4px);\n  z-index: -1;\n  -webkit-animation: steam 20s linear infinite;\n          animation: steam 20s linear infinite; }\n@-webkit-keyframes steam {\n  0% {\n    background-position: 0 0; }\n  50% {\n    background-position: 400% 0; }\n  100% {\n    background-position: 0 0; } }\n@keyframes steam {\n  0% {\n    background-position: 0 0; }\n  50% {\n    background-position: 400% 0; }\n  100% {\n    background-position: 0 0; } }\n.flip-card:after {\n  -webkit-filter: blur(50px);\n          filter: blur(50px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbXktd29ya2V4cC9teS13b3JrZXhwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9PQUFBO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQUUsZ0RBQUEsRUFBaUQ7QUFHeEUsaUVBQUE7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsNEJBQTRCLEVBQUE7QUFHOUIsOEVBQUE7QUFDQTtFQUNFLDBCQUEwQixFQUFBO0FBRzVCLHFDQUFBO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0FBbUM7RUFBRSxXQUFBO0VBQ3JDLDJCQUEyQixFQUFBO0FBRzdCLHdEQUFBO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUVaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7QUFHekIsd0JBQUE7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7QUF3QnJCO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYix1QkFBdUIsRUFBQTtBQUd6QjtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCw4Q0FBOEM7RUFDOUMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsb0JBQW9CO0VBbkNwQiw4QkFvQ3dDO0VBbkN4QyxtQ0FtQ3dDO0VBbEN4QyxrQ0FrQ3dDO0VBakN4QyxzQ0FpQ3dDO0VBaEN4QyxpQ0FnQ3dDLEVBQUE7QUFWMUM7SUFaRSxxQkFBb0I7SUFDcEIsMEJBQXlCO0lBQ3pCLDZCQUE0QjtJQUM1Qix3QkFBdUI7SUFDdkIseUJBQXdCO0lBdUJ0Qiw2QkFBcUI7WUFBckIscUJBQXFCO0lBM0J2QixxQkFBb0I7SUFDcEIsMEJBQXlCO0lBQ3pCLDZCQUE0QjtJQUM1Qix3QkFBdUI7SUFDdkIseUJBQXdCLEVBQUE7QUEyQjFCO0VBQ0Esa0JBQWtCLEVBQUE7QUFHbEI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7QUFFekI7RUFFQSxrQkFBa0IsRUFBQTtBQUdsQjtFQUNBLGtCQUFrQixFQUFBO0FBR2xCO0VBQ0EsbUJBQW1CO0VBQ25CLDBCQUF5QjtVQUF6Qix5QkFBeUIsRUFBQTtBQUd6QjtFQUNDLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCLEVBQUE7QUFJdkI7RUFDQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0VBQ1QsNEhBQ21DO0VBQ25DLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCw0Q0FBb0M7VUFBcEMsb0NBQW9DLEVBQUE7QUFHckM7RUFDQztJQUNDLHdCQUF3QixFQUFBO0VBRXpCO0lBQ0MsMkJBQTJCLEVBQUE7RUFFNUI7SUFDQyx3QkFBd0IsRUFBQSxFQUFBO0FBUjFCO0VBQ0M7SUFDQyx3QkFBd0IsRUFBQTtFQUV6QjtJQUNDLDJCQUEyQixFQUFBO0VBRTVCO0lBQ0Msd0JBQXdCLEVBQUEsRUFBQTtBQUkxQjtFQUNDLDBCQUFrQjtVQUFsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktd29ya2V4cC9teS13b3JrZXhwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIGZsaXAgY2FyZCBjb250YWluZXIgLSBzZXQgdGhlIHdpZHRoIGFuZCBoZWlnaHQgdG8gd2hhdGV2ZXIgeW91IHdhbnQuIFdlIGhhdmUgYWRkZWQgdGhlIGJvcmRlciBwcm9wZXJ0eSB0byBkZW1vbnN0cmF0ZSB0aGF0IHRoZSBmbGlwIGl0c2VsZiBnb2VzIG91dCBvZiB0aGUgYm94IG9uIGhvdmVyIChyZW1vdmUgcGVyc3BlY3RpdmUgaWYgeW91IGRvbid0IHdhbnQgdGhlIDNEIGVmZmVjdCAqL1xuXG4uZmxpcC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZGVkZTtcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDsgLyogUmVtb3ZlIHRoaXMgaWYgeW91IGRvbid0IHdhbnQgdGhlIDNEIGVmZmVjdCAqL1xufVxuXG4vKiBUaGlzIGNvbnRhaW5lciBpcyBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cbi5mbGlwLWNhcmQtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi8qIERvIGFuIGhvcml6b250YWwgZmxpcCB3aGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIHRoZSBmbGlwIGJveCBjb250YWluZXIgKi9cbi5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4vKiBQb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xuLmZsaXAtY2FyZC1mcm9udCwgLmZsaXAtY2FyZC1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjsgLyogU2FmYXJpICovXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogU3R5bGUgdGhlIGZyb250IHNpZGUgKGZhbGxiYWNrIGlmIGltYWdlIGlzIG1pc3NpbmcpICovXG4uZmxpcC1jYXJkLWZyb250IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogU3R5bGUgdGhlIGJhY2sgc2lkZSAqL1xuLmZsaXAtY2FyZC1iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkeCwgJHksICR6KXtcbiAgdHJhbnNpdGlvbjogJHggJHkgJHo7XG4gIC1tb3otdHJhbnNpdGlvbjogJHggJHkgJHo7XG4gIC1tcy10cmFuc2l0aW9uOiAkeCAkeSAkejtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAkeCAkeSAkejtcbiAgLW8tdHJhbnNpdGlvbjogJHggJHkgJHo7XG59XG5cbkBtaXhpbiByb3RhdGUoJHgpe1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoJHgpOyAvKiBJRSA5ICovXG4gICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKCR4KTsgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXG4gICB0cmFuc2Zvcm06IHJvdGF0ZSgkeCk7XG59XG5cbkBtaXhpbiBzY2FsZSgkeCl7XG4gIHRyYW5zZm9ybTogc2NhbGUoJHgpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoJHgpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHgpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKCR4KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJHgpO1xufVxuLnJvd3tcbiAgcGFkZGluZzogMCUgNSUgNSUgNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmxpcC1jYXJke1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoNTgsIDYyLCA3NSwgMC4yNSk7XG4gIGZsZXg6IDAgMCAyNSU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3JkZXItcmFkaXVzOiAuMnJlbTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihhbGwsIDI1MG1zLCBlYXNlLW91dCk7XG5cblxuICAmOmhvdmVyIHtcbiAgICBAaW5jbHVkZSBzY2FsZSgxLjEpO1xuICAgIGZpbHRlcjogc2F0dXJhdGUoNTAlKTtcbiAgICBAaW5jbHVkZSBzY2FsZSgxLjEpXG4gIH1cbn1cbi5oZWFkaW5ne1xudGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC1jZW50ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnRleHQtY2VudGVye1xuXG50ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXJ7XG5vdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbnVse1xudGV4dC1hbGlnbjoganVzdGlmeTtcbnBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG59XG5cbmJvZHkge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG5cblxuLmZsaXAtY2FyZDpiZWZvcmUsIC5mbGlwLWNhcmQ6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAtMnB4O1xuXHR0b3A6IC0ycHg7XG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZiMDA5NCwgIzAwMDBmZiwgIzAwZmYwMCwjZmZmZjAwLCAjZmYwMDAwLCAjZmIwMDk0LFxuXHRcdCMwMDAwZmYsICMwMGZmMDAsI2ZmZmYwMCwgI2ZmMDAwMCk7XG5cdGJhY2tncm91bmQtc2l6ZTogNDAwJTtcblx0d2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XG5cdGhlaWdodDogY2FsYygxMDAlICsgNHB4KTtcblx0ei1pbmRleDogLTE7XG5cdGFuaW1hdGlvbjogc3RlYW0gMjBzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzdGVhbSB7XG5cdDAlIHtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG5cdH1cblx0NTAlIHtcblx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiA0MDAlIDA7XG5cdH1cblx0MTAwJSB7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuXHR9XG59XG5cbi5mbGlwLWNhcmQ6YWZ0ZXIge1xuXHRmaWx0ZXI6IGJsdXIoNTBweCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/my-workexp/my-workexp.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-workexp/my-workexp.component.ts ***!
  \***************************************************************/
/*! exports provided: MyWorkexpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkexpComponent", function() { return MyWorkexpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyWorkexpComponent = /** @class */ (function () {
    function MyWorkexpComponent() {
    }
    MyWorkexpComponent.prototype.ngOnInit = function () {
    };
    MyWorkexpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-workexp',
            template: __webpack_require__(/*! ./my-workexp.component.html */ "./src/app/components/my-workexp/my-workexp.component.html"),
            styles: [__webpack_require__(/*! ./my-workexp.component.scss */ "./src/app/components/my-workexp/my-workexp.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MyWorkexpComponent);
    return MyWorkexpComponent;
}());



/***/ }),

/***/ "./src/app/components/post-create/post-create.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/post-create/post-create.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" ;\"> -->\n<div class=\"card-container\" >\n  <mat-card >\n    <form class=\"example-form\">\n      <h4> Please leave details below! </h4>\n      <table class=\"example-full-width\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width text-padding \">\n              <mat-label>First name</mat-label>\n              <input matInput />\n            </mat-form-field>\n          </td>\n          <td>\n            <mat-form-field class=\"example-full-width text-padding \">\n              <mat-label>Last Name</mat-label>\n              <input matInput />\n            </mat-form-field>\n          </td>\n        </tr>\n      </table>\n\n      <p>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Address</mat-label>\n          <input matInput placeholder=\"Ex. 100 Main St\">\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <mat-label>Address 2</mat-label>\n          <input matInput>\n        </mat-form-field>\n      </p>\n\n      <table class=\"example-full-width\" cellspacing=\"0\">\n        <tr>\n          <td>\n            <mat-form-field class=\"example-full-width text-padding \">\n              <mat-label>City</mat-label>\n              <input matInput placeholder=\"Ex. San Francisco\" />\n            </mat-form-field>\n          </td>\n          <td>\n            <mat-form-field class=\"example-full-width text-padding \">\n              <mat-label>State</mat-label>\n              <input matInput placeholder=\"Ex. California\" />\n            </mat-form-field>\n          </td>\n          <td>\n            <mat-form-field class=\"example-full-width text-padding \">\n              <mat-label>Postal Code</mat-label>\n              <input\n              matInput\n              #postalCode\n              maxlength=\"5\"\n              placeholder=\"Ex. 94105\"\n              />\n              <mat-hint align=\"end\">\n                {{ postalCode.value.length }} / 5</mat-hint\n              >\n            </mat-form-field>\n          </td>\n\n        </tr>\n        <mat-form-field class=\"example-full-width text-padding\">\n          <mat-label>Email</mat-label>\n          <input matInput\n          #Email\n          placeholder=\"Ex. example@example.com\">\n        </mat-form-field>\n        <td>\n          <mat-form-field class=\"example-full-width text-padding \">\n            <mat-label>Phone</mat-label>\n            <input\n              matInput\n              #postalCode\n              maxlength=\"10\"\n              placeholder=\"Ex. 1234567890\"\n            />\n            <mat-hint align=\"end\">\n              {{ postalCode.value.length }} / 10</mat-hint\n            >\n          </mat-form-field>\n        </td>\n      </table>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label>Your Questions?</mat-label>\n        <textarea matInput placeholder=\"Ex. 100 Main St\"></textarea>\n      </mat-form-field>\n      <div class=\"center\">\n        <button mat-raised-button color=\"accent\" (click)=\"onAddText()\">\n          Submit\n        </button>\n      </div>\n      <mat-card *ngIf=\"isSubmitted\">\n        <p>{{textInput}}</p>\n        </mat-card>\n    </form>\n\n    <!-- <mat-form-field>\n    <input matInput [(ngModel)]=\"userInput\" />\n  </mat-form-field>\n  <div class=\"center\">\n    <button mat-raised-button color=\"accent\" (click)=\"onAddText()\">\n      Click Me\n    </button>\n  </div>\n</mat-card>-->\n\n\n"

/***/ }),

/***/ "./src/app/components/post-create/post-create.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/post-create/post-create.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  width: 80%;\n  margin: auto;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  background-color: white;\n  text-align: center; }\n\nmat-form-field,\ninput {\n  text-align: left;\n  width: 100%; }\n\n.center {\n  text-align: center; }\n\n.text-padding {\n  padding-right: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQixFQUFBOztBQUdwQjs7RUFFRSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmR7XG4gIHdpZHRoOiA4MCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQsXG5pbnB1dHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LXBhZGRpbmcge1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/post-create/post-create.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/post-create/post-create.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent() {
        this.userInput = "Your Questions have been submitted. Our team will contact you in 2 - 3 business days";
        this.textInput = "";
        this.isSubmitted = false;
    }
    PostCreateComponent.prototype.onAddText = function () {
        this.textInput = this.userInput;
        this.isSubmitted = true;
    };
    PostCreateComponent.prototype.ngOnInit = function () {
    };
    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-create',
            template: __webpack_require__(/*! ./post-create.component.html */ "./src/app/components/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.scss */ "./src/app/components/post-create/post-create.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/questions/questions.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/questions/questions.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n<app-post-create></app-post-create>\n</div>\n"

/***/ }),

/***/ "./src/app/components/questions/questions.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/questions/questions.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaWhhcmlrYS9teWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3h7XG5oZWlnaHQ6IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/questions/questions.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/questions/questions.component.ts ***!
  \*************************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent() {
    }
    QuestionsComponent.prototype.ngOnInit = function () {
    };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/components/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.scss */ "./src/app/components/questions/questions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuestionsComponent);
    return QuestionsComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Niharika/myapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map