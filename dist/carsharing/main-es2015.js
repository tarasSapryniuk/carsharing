(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-toolbar color=\"primary\" class=\"app-header\">\n    <div></div>\n    <span class=\"nav-tool-items\">\n      <a mat-button routerLink=\"sign-in\" routerLinkActive=\"active\">Log in</a>\n      <a mat-button mat-raised-button routerLink=\"register\" routerLinkActive=\"active\">Register</a>\n    </span>\n</mat-toolbar> -->\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/authenticated/authenticated.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/authenticated/authenticated.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<spa-body></spa-body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/car-detail/car-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/car-detail/car-detail.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"car\">\n  <spa-dynamic-form\n    [vm]=\"car\"\n    [vmDefinition]=\"carDefinitionInput\"\n    [operation]=\"operation\"\n    [errorMessage]=\"errorMessage\"\n    (update)=\"updateCar($event)\"\n    (create)=\"createCar($event)\"\n  ></spa-dynamic-form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/car-list/car-list.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/car-list/car-list.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>car-list works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/car-maint/car-maint.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/car-maint/car-maint.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n  <input\n    matInput\n    (keyup)=\"applyFilter($event.target.value)\"\n    placeholder=\"Filter\"\n  />\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <button mat-raised-button (click)=\"createCar()\">Add new car</button>\n  <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows matSort>\n    <!-- ID Column -->\n    <ng-container\n      matColumnDef=\"{{ column }}\"\n      *ngFor=\"let column of displayedColumns\"\n    >\n      <div *ngIf=\"column !== 'select'\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>\n          {{ column | uppercase }}\n        </th>\n        <!-- [ngClass]=\"screenService.isLarge() ? 'element-detail' : ''\" -->\n        <td mat-cell *matCellDef=\"let row\" class=\"element-detail\">\n          {{ row[column] }}\n        </td>\n      </div>\n      <div *ngIf=\"column === 'select'\">\n        <th mat-header-cell *matHeaderCellDef>\n          <mat-checkbox\n            (change)=\"$event ? masterToggle() : null\"\n            [checked]=\"selection.hasValue() && isAllSelected()\"\n            [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n            [aria-label]=\"checkboxLabel()\"\n          >\n          </mat-checkbox>\n        </th>\n        <td mat-cell *matCellDef=\"let row\">\n          <mat-checkbox\n            (click)=\"$event.stopPropagation()\"\n            (change)=\"$event ? selection.toggle(row) : null\"\n            [checked]=\"selection.isSelected(row)\"\n            [aria-label]=\"checkboxLabel(row)\"\n          >\n          </mat-checkbox>\n        </td>\n      </div>\n    </ng-container>\n\n    <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td\n        mat-cell\n        *matCellDef=\"let element\"\n        [attr.colspan]=\"displayedColumns.length\"\n      >\n        <mat-card\n          [ngClass]=\"screenService.isLarge() ? 'large-detail' : 'small-detail'\"\n          [@detailExpand]=\"\n            element == expandedElement ? 'expanded' : 'collapsed'\n          \"\n        >\n          <!-- [ngClass]=\"\n                  screenService.isLarge()\n                    ? large-element-image\n                    : small-element-image\n                \" -->\n          <mat-card-header>\n            <div>\n              <img\n                mat-card-image\n                [ngClass]=\"\n                  screenService.isLarge()\n                    ? 'large-element-image'\n                    : 'small-element-image'\n                \"\n                [src]=\"element.image\"\n              />\n            </div>\n          </mat-card-header>\n          <mat-card-content>\n            <div [ngClass]=\"screenService.isLarge() ? 'titleL' : 'titleS'\">\n              <span\n                >{{ element.name | uppercase }}&nbsp;\n                {{ element.model | uppercase }}</span\n              >\n            </div>\n            <div\n              [ngClass]=\"\n                screenService.isLarge() ? 'characteristicL' : 'characteristicS'\n              \"\n            >\n              <div>\n                <mat-icon\n                  *ngIf=\"element.type === 'SUV'\"\n                  svgIcon=\"jeep\"\n                ></mat-icon>\n                <mat-icon\n                  *ngIf=\"element.type === 'Van / Minibus'\"\n                  svgIcon=\"van\"\n                ></mat-icon>\n                <mat-icon\n                  *ngIf=\"element.type === 'Sports Car'\"\n                  svgIcon=\"sports-car\"\n                ></mat-icon>\n                <mat-icon\n                  *ngIf=\"\n                    element.type === 'Saloon' ||\n                    element.type === 'Coupe' ||\n                    element.type === 'EstateCar'\n                  \"\n                  svgIcon=\"car\"\n                ></mat-icon>\n                <span>{{ element.type }}</span>\n              </div>\n              <div>\n                <mat-icon svgIcon=\"shifter\"></mat-icon>\n                <span>{{ element.engine.transmission }}</span>\n              </div>\n              <div>\n                <mat-icon\n                  [svgIcon]=\"\n                    element.engine.fuel_type === 'Electric'\n                      ? 'battery'\n                      : 'car-engine'\n                  \"\n                ></mat-icon>\n                <span\n                  >{{ element.engine.fuel_type }},\n                  {{\n                    element.engine.fuel_type === \"Electric\"\n                      ? element.engine.cubic_capacity + \"kW\"\n                      : element.engine.cubic_capacity / 1000 + \"л.\"\n                  }}</span\n                >\n              </div>\n              <div>\n                <mat-icon svgIcon=\"calendar\"></mat-icon>\n                <span>{{ element.date }}</span>\n              </div>\n              <div>\n                <mat-icon svgIcon=\"location\"></mat-icon>\n                <span class=\"example-element-weight\">{{\n                  element.location\n                }}</span>\n              </div>\n              <div>\n                <mat-icon svgIcon=\"painted-car\"></mat-icon>\n                <span class=\"example-element-weight\">\n                  {{ element.ext_color }}\n                </span>\n              </div>\n              <div>\n                <mat-icon svgIcon=\"price\"></mat-icon>\n                <span>{{ element.price }}$</span>\n              </div>\n              <div>\n                <mat-icon svgIcon=\"car-seat\"></mat-icon>\n                <span>{{ element.numb_seats }} seats</span>\n              </div>\n            </div>\n\n            <div\n              *ngIf=\"element.id != deleteId\"\n              [ngClass]=\"\n                screenService.isLarge() ? 'actions' : 'actions actionsS'\n              \"\n            >\n              <button\n                mat-stroked-button\n                color=\"primary\"\n                (click)=\"showCarDetail(element.id)\"\n              >\n                Details\n              </button>\n              <button\n                mat-stroked-button\n                color=\"accent\"\n                (click)=\"editCar(element.id)\"\n              >\n                Edit\n              </button>\n              <button\n                mat-stroked-button\n                color=\"warn\"\n                (click)=\"deleteCarQuestion(element.id)\"\n              >\n                Delete\n              </button>\n            </div>\n\n            <div\n              *ngIf=\"element.id === deleteId && !isDeleting\"\n              [ngClass]=\"\n                screenService.isLarge() ? 'actions' : 'actions actionsS'\n              \"\n            >\n              <button\n                mat-stroked-button\n                color=\"accent\"\n                (click)=\"cancelDelete()\"\n              >\n                Cancel\n              </button>\n              <button\n                mat-stroked-button\n                color=\"warn\"\n                (click)=\"deleteCar(element.id)\"\n              >\n                Delete\n              </button>\n            </div>\n            <div\n            *ngIf=\"element.id === deleteId && isDeleting\"\n            [ngClass]=\"\n              screenService.isLarge() ? 'actions' : 'actions actionsS'\n            \">\n              Deleting....\n              <mat-spinner></mat-spinner>\n            </div\n            >\n          </mat-card-content>\n        </mat-card>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr\n      mat-row\n      *matRowDef=\"let element; columns: displayedColumns\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\"\n    ></tr>\n    <tr\n      mat-row\n      *matRowDef=\"let row; columns: ['expandedDetail']\"\n      [ngClass]=\"\n        screenService.isLarge()\n          ? 'example-detail-row'\n          : 'example-detail-row small'\n      \"\n    ></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/home/home.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/home/home.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>home works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/settings/settings.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/routes/settings/settings.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>settings works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/spa/body/body.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/spa/body/body.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<spa-header></spa-header>\n<spa-content></spa-content>\n<spa-footer></spa-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/spa/content/content.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/spa/content/content.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container>\n  <mat-sidenav\n    #appDrawer\n    [mode]=\"screenService.isLarge() ? 'side' : 'push'\"\n    [autoFocus]=\"false\"\n    fixedInViewport=\"true\"\n    closed\n  >\n    <div\n      class=\"mat-sidenav\"\n      *ngIf=\"\n        (menuService.isVertical && screenService.isLarge()) ||\n        (!menuService.showVerticalMenu && !screenService.isLarge())\n      \"\n    >\n      <spa-sidebar-menu\n        *ngFor=\"let item of menuService.items\"\n        [item]=\"item\"\n        class=\"vertical-menu\"\n      ></spa-sidebar-menu>\n\n      <div *screenSmall>\n        <hr class=\"small-display\" />\n        <spa-sidebar-menu\n          [item]=\"{\n            text: 'Account',\n            route: '/authenticated/account'\n          }\"\n          class=\"vertical-menu\"\n        ></spa-sidebar-menu>\n\n        <a (click)=\"userApi.signOut()\">\n          <spa-sidebar-menu\n            [item]=\"{ text: 'Sign out' }\"\n            class=\"vertical-menu\"\n          ></spa-sidebar-menu>\n        </a>\n      </div>\n\n      <div class=\"container\" *screenLarge>\n        <div [ngClass]=\"menuService.isVertical ? 'dropup' : 'dropleft'\">\n          <button\n            mat-mini-fab\n            color=\"accent\"\n            *ngIf=\"!menuService.showVerticalMenu\"\n            (click)=\"menuService.toggleOrientation(); navService.closeNav()\"\n          >\n            <mat-icon>{{\n              !menuService.isVertical\n                ? \"keyboard_arrow_left\"\n                : \"keyboard_arrow_up\"\n            }}</mat-icon>\n          </button>\n        </div>\n      </div>\n    </div>\n  </mat-sidenav>\n  <mat-sidenav-content >\n    <div [ngClass]=\"screenService.isLarge() && !menuService.isVertical ? 'body-style' : 'body-style-small'\">\n      <router-outlet></router-outlet>\n    </div>\n    <!-- <spa-footer></spa-footer> -->\n  </mat-sidenav-content>\n</mat-sidenav-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/spa/dynamicForms/dynamic-field/dynamic-field.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/spa/dynamicForms/dynamic-field/dynamic-field.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [hidden]=\"operation === 'create' && field.isId\" [formGroup]=\"form\">\n  <div [ngSwitch]=\"field.type\">\n    <div *ngSwitchCase=\"string\">\n      <label [for]=\"field.key\">{{ field.label }}</label>\n      <input\n        autocomplete=\"off\"\n        [formControlName]=\"field.key\"\n        [id]=\"field.key\"\n        [readonly]=\"operation === 'details' || field.isId\"\n        type=\"text\"\n      />\n    </div>\n    <div *ngSwitchCase=\"number\">\n      <label [for]=\"field.key\">{{ field.label }}</label>\n      <input\n        autocomplete=\"off\"\n        [formControlName]=\"field.key\"\n        [id]=\"field.key\"\n        [readonly]=\"operation === 'details' || field.isId\"\n        type=\"number\"\n      />\n    </div>\n    <div *ngSwitchDefault>output2</div>\n  </div>\n  <div\n    *ngIf=\"\n      form.get(field.key).hasError('required') &&\n      (submitted || form.get(field.key).touched)\n    \"\n  >\n  {{field.label}} is required\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/spa/dynamicForms/dynamic-form/dynamic-form.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/spa/dynamicForms/dynamic-form/dynamic-form.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>\n  <div <div [ngSwitch]=\"operation\">\n    <div *ngSwitchCase=\"'details'\">Reading panel</div>\n    <div *ngSwitchCase=\"'create'\">Adding panel</div>\n    <div *ngSwitchCase=\"'edit'\">Editing panel</div>\n  </div>\n</h3>\n<div>\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n    <div *ngFor=\"let field of vmDefinition\">\n      <spa-dynamic-field\n        [field]=\"field\"\n        [form]=\"form\"\n        [operation]=\"opeartion\"\n        [submitted]=\"submitted\"\n      ></spa-dynamic-field>\n    </div>\n    <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{ errorMessage }}</div>\n    <div *ngIf=\"status != waiting\">\n        <div *ngIf=\"operation === 'details'\">\n            <button (click)='onBack()'>Go back</button>\n            <button (click)='onEdit()'>Edit</button>\n        </div>\n        <div *ngIf=\"operation === 'edit'\">\n            <button (click)='onCancel()'>Cancel</button>\n            <button (click)='onSave()'>Save</button>\n        </div>\n        <div *ngIf=\"operation === 'create'\">\n            <button (click)='onBack()'>Go back</button>\n            <button (click)='onCreate()'>Create</button>\n        </div>\n    </div>\n    <div *ngIf=\"status === waiting\">\n        Waiting...\n    </div>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/spa/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/spa/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n    <div>&copy; {{ year }} {{ title }}</div>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/spa/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/spa/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"accent\">\n  <mat-toolbar-row *screenLarge>\n    <mat-icon\n      class=\"example-icon\"\n      aria-hidden=\"false\"\n      aria-label=\"Example heart icon\"\n      >favorite</mat-icon\n    >\n    <span>Car Sharing</span>\n    <spa-menu *ngIf=\"!menuService.isVertical\"></spa-menu>\n    <span class=\"example-spacer\"> </span>\n    <div>\n      <spa-icon-bar></spa-icon-bar>\n    </div>\n  </mat-toolbar-row>\n\n  <mat-toolbar-row *screenSmall>\n    <button mat-mini-fab (click)=\"navService.openNav(); \">\n      <mat-icon>menu</mat-icon>\n    </button>\n\n    <span class=\"example-spacer\"> </span>\n    <mat-icon\n      class=\"example-icon\"\n      aria-hidden=\"false\"\n      aria-label=\"Example heart icon\"\n      >favorite</mat-icon\n    >\n    <span>Car Sharing</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<!-- [matMenuTriggerFor]=\"menu\" -->\n<!-- <mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/spa/icon-bar/icon-bar.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/spa/icon-bar/icon-bar.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a *ngFor=\"let icon of appConfigService.socialIcons\" \n    [href]=\"icon.url\" [title]=\"icon.alt\" target=\"_blank\">\n    <mat-icon class=\"example-icon\" [svgIcon]=\"icon.name\"></mat-icon>\n</a>\n\n<div [ngClass]=\"{ 'forSmall': !showIcon }\" *ngIf=\"appConfigService.showUserControl\">\n    <span>User name</span>\n\n    <button *ngIf=\"!showLoader\" mat-raised-button routerLink=\".\" (click)=\"signOut()\">Sign out</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/spa/menus/menu/menu.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/spa/menus/menu/menu.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <span *ngFor=\"let item of menuService.items\">\n    <!-- Handle branch node buttons here -->\n    <span *ngIf=\"item.submenu && item.submenu.length > 0\">\n      <button mat-button [matMenuTriggerFor]=\"menu.childMenu\">\n        {{ item.text }}\n        <mat-icon>expand_more</mat-icon>\n      </button>\n      <spa-popup-menu\n        #menu\n        [menu]=\"item.submenu\"\n        [ngClass]=\"{ 'vertical-menu': menuService.isVertical }\"\n      ></spa-popup-menu>\n    </span>\n    <!-- Leaf node buttons here -->\n    <span *ngIf=\"!item.submenu || item.submenu.length === 0\">\n      <button mat-button [routerLink]=\"item.route\" routerLinkActive='active'>\n        {{ item.text }}\n      </button>\n    </span>\n  </span>\n</div>\n\n<div [ngClass]=\"menuService.isVertical ? 'dropup' : 'dropleft'\">\n  <button\n    mat-icon-button\n    color=\"primary\"\n    *ngIf=\"!menuService.showVerticalMenu\"\n    (click)=\"menuService.toggleOrientation(); navService.openNav();\"\n  >\n    <mat-icon>{{\n      !menuService.isVertical ? \"keyboard_arrow_left\" : \"keyboard_arrow_up\"\n    }}</mat-icon>\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/spa/menus/popup-menu/popup-menu.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/spa/menus/popup-menu/popup-menu.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-menu #childMenu=\"matMenu\" [overlapTrigger]=\"false\">\n  <span *ngFor=\"let child of menu\">\n    <!-- Handle branch node menu items -->\n    <span *ngIf=\"child.submenu && child.submenu.length > 0\">\n      <button mat-menu-item color=\"primary\" [matMenuTriggerFor]=\"menu.childMenu\">\n        <mat-icon>{{child.icon}}</mat-icon>\n        <span>{{child.text}}</span>\n      </button>\n      <spa-popup-menu #menu [menu]=\"child.submenu\"></spa-popup-menu>\n    </span>\n    <!-- Handle leaf node menu items -->\n    <span *ngIf=\"!child.submenu || child.submenu.length === 0\">\n      <button mat-menu-item [routerLink]=\"child.route\">\n        <mat-icon>{{child.icon}}</mat-icon>\n        <span>{{child.text}}</span>\n      </button>\n    </span>\n  </span>\n</mat-menu>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/spa/menus/sidebar-menu/sidebar-menu.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/spa/menus/sidebar-menu/sidebar-menu.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a [ngStyle]=\"{'padding-left': (depth * 16) + 'px', 'padding-right': '16px'}\" (click)=\"onItemSelected(item)\"\n   [ngClass]=\"{'active': item.route ? router.isActive(item.route, true): false, 'expanded': expanded}\"\n   class=\"menu-list-item\">\n  <mat-icon *ngIf=\"item.icon\" class=\"routeIcon\">{{item.icon}}</mat-icon>\n  <span>{{item.text}}</span> \n  <span fxFlex *ngIf=\"item.submenu && item.submenu.length\">\n    <span fxFlex></span>\n    <mat-icon [@indicatorRotate]=\"expanded ? 'expanded': 'collapsed'\">\n      expand_more\n    </mat-icon>\n  </span>\n</a>\n<div *ngIf=\"expanded\">\n  <spa-sidebar-menu *ngFor=\"let child of item.submenu\" [item]=\"child\" [depth]=\"depth+1\">\n  </spa-sidebar-menu>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/spa/users/password-reset/password-reset.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/spa/users/password-reset/password-reset.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>password-reset works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/spa/users/registration/registration.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/spa/users/registration/registration.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\"></div>\n<div class=\"register-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card class=\"box\">\n      <mat-card-header>\n        <mat-card-title>Register</mat-card-title>\n      </mat-card-header>\n  \n      <form (ngSubmit)=\"onSubmit(signUpForm)\" class=\"example-form\" #registerForm='ngForm'>\n  \n        <mat-card-content>\n\n          <!-- <mat-form-field class=\"example-full-width\">\n            <input autocomplete=\"off\" name=\"name\" matInput placeholder=\"Username\" #name='ngModel'>\n            <div class=\"alert alert-danger\" [hidden]='name.valid || name.pristine '>Please enter your name</div>\n          </mat-form-field>\n          \n          <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Email\" autocomplete=\"off\" name='email' required #email='ngModel'>\n            <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n              Please enter a valid email address\n            </mat-error>\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n              Email is <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n   -->\n          <mat-form-field class=\"example-full-width\">\n            <input matInput color=\"accent\" placeholder=\"Password\" [type]=\"hide1 ? 'password' : 'text'\" name=\"password\" required\n            ngModel #password='ngModel'>\n            <button mat-icon-button matSuffix (click)=\"hide1 = !hide1\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide1\">\n            <mat-icon>{{hide1 ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </button>\n            <div class=\"alert alert-danger\" [hidden]='password.valid || password.pristine '>Password is required</div>\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput color=\"accent\" placeholder=\"Confirm password\" [type]=\"hide2 ? 'password' : 'text'\" name=\"confirm-password\"\n            ngModel #password='ngModel'>\n            <button mat-icon-button matSuffix (click)=\"hide2 = !hide2\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide2\">\n            <mat-icon>{{hide2 ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </button>\n            <!-- <div class=\"alert alert-danger\" [hidden]='confirm-password.valid || confirm-password.pristine '>Password is required</div> -->\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\">\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Date of birth — mm/dd/yyyy\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n            <mat-datepicker touchUi #picker></mat-datepicker>\n          </mat-form-field>\n\n          <mat-radio-group aria-label=\"Select an option\" color=primary>\n            <mat-radio-button value=\"Male\">Male</mat-radio-button>\n            <mat-radio-button value=\"Female\">Female</mat-radio-button>\n            <mat-radio-button value=\"Non-binary\">Non-binary</mat-radio-button>\n          </mat-radio-group>\n\n          <mat-form-field class=\"example-full-width\">\n            <mat-label>Choose a role...</mat-label>\n            <mat-select [(value)]=\"selected\">\n              <mat-option [value]=\"roles\" *ngFor=\"let roles of Roles\">{{roles}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n  \n          <mat-checkbox color=primary>Share my registration data with Carsharing's content providers for marketing purposes.</mat-checkbox>\n\n        </mat-card-content>\n        <div class=\"sign-up\">\n          <button mat-raised-button color=\"primary\" class=\"btn-block\">{{ 'Sign up' | uppercase }}</button>\n        </div>\n        <div class=\"sign-in\">\n          <span>Already have an account?</span>\n          <a mat-button color=\"primary\" routerLink=\"/sign-in\" routerLinkActive=\"active\">{{ 'Log in' }}</a>\n        </div>\n  \n        <div *ngIf=\"formError\" [ngClass]=\"{ 'alert': formError, 'alert-danger': formError.type === 'error' }\">{{formError}}</div>\n        <div *ngIf=\"!regstering && !hasAdded\"></div>\n        <div *ngIf=\"regstering && !hasAdded\">\n          <span>Registering new user ...</span> \n          <mat-spinner></mat-spinner>\n        </div>\n        <div *ngIf=\"hasAdded\">\n          <span>New user has added to database</span> \n          <mat-spinner></mat-spinner>\n        </div>\n      </form>\n    </mat-card> \n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/spa/users/sign-in/sign-in.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/spa/users/sign-in/sign-in.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\"></div>\n<div class=\"login-wrapper\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\n    <mat-card class=\"box\">\n      <mat-card-header>\n        <mat-card-title>Log in</mat-card-title>\n      </mat-card-header>\n  \n      <form novalidate (ngSubmit)=\"onSubmit(signInForm)\" class=\"example-form\" #signInForm='ngForm'>\n        <mat-card-content>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput color=\"accent\" placeholder=\"Username\" name=\"username\" required\n            ngModel #username='ngModel'>\n            <div class=\"alert alert-danger\" [hidden]='username.valid || username.pristine '>Please enter your name</div>\n            \n            <!-- Mat Error -->\n            <!-- <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n              Please enter a valid email address\n            </mat-error> -->\n\n          </mat-form-field>\n  \n          <mat-form-field class=\"example-full-width\">\n            <input matInput color=\"accent\" placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" name=\"password\" required\n            ngModel #password='ngModel'>\n            <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n            <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n            </button>\n            <div class=\"alert alert-danger\" [hidden]='password.valid || password.pristine '>Password is required</div>\n          </mat-form-field>\n      \n        </mat-card-content>\n        <div class=\"sign-in\">\n          <mat-checkbox color=primary>Remember me</mat-checkbox>\n          <button mat-raised-button color=\"primary\" class=\"btn-block\">{{ 'Log in' | uppercase }}</button>  \n        </div>\n        <div class=\"forgot-pass\">\n          <a mat-button color=\"primary\" routerLink=\"/password-reset\" routerLinkActive=\"active\">Forgot your password?</a>\n        </div>\n        \n\n        <div *ngIf=\"formError\" [ngClass]=\"{ 'alert': formError, 'alert-danger': formError.type === 'error' }\">{{formError}}</div>\n        <div *ngIf=\"!submitting\"></div>\n        <div *ngIf=\"submitting\" class=\"loader\">\n          <mat-spinner></mat-spinner>\n        </div>\n\n        <div class=\"divider\"> <!-- ngIf: showOrLabel --> </div>\n        \n        <div class=\"sign-up\">Don't have an account?</div>\n        <a mat-stroked-button routerLink=\"/register\" routerLinkActive=\"active\" class=\"btn-block\">{{ 'Sign up for carsharing' | uppercase }}</a>\n        \n        <!-- <div class=\"divider\"></div> -->\n        \n      </form>\n    </mat-card>\n    \n</div>\n  ");

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

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"]
        ],
        providers: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"]]
    })
], AngularMaterialModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _routes_app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/app.routes */ "./src/app/routes/app.routes.ts");




let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes_app_routes__WEBPACK_IMPORTED_MODULE_3__["appRoutes"])],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alert-danger {\n    background-color: #f44336; /* Red */\n}\n.alert-success {\n    background-color: #36f456;  \n}\n.alert{\n    padding: 20px;\n    color: white;\n    margin-bottom: 15px;\n    text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUIsRUFBRSxRQUFRO0FBQ3ZDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsZXJ0LWRhbmdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgLyogUmVkICovXG59XG4uYWxlcnQtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2ZjQ1NjsgIFxufSBcbi5hbGVydHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _spa_services_spa_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spa/services/spa-config.service */ "./src/spa/services/spa-config.service.ts");
/* harmony import */ var _spa_services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spa/services/menu.service */ "./src/spa/services/menu.service.ts");
/* harmony import */ var _app_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.menu */ "./src/app/app.menu.ts");





let AppComponent = class AppComponent {
    constructor(spaConfigService, menuService) {
        this.spaConfigService = spaConfigService;
        this.menuService = menuService;
        this.title = "carsharing";
        this.spaConfigService.addSvgIcon("facebook");
        this.spaConfigService.addSvgIcon("instagram");
        this.spaConfigService.addSvgIcon("snapchat");
        this.spaConfigService.addSvgIcon("whatsapp");
        const config = {
            socialIcons: [
                { name: "facebook", alt: "Facebook", url: "https://facebook.com/" },
                { name: "instagram", alt: "Instagram", url: "https://facebook.com/" },
                { name: "snapchat", alt: "Snapchat", url: "https://facebook.com/" },
                { name: "whatsapp", alt: "WhatsApp", url: "https://facebook.com/" }
            ],
            showUserControl: true
        };
        spaConfigService.configure(config);
        menuService.items = _app_menu__WEBPACK_IMPORTED_MODULE_4__["AppMenuItems"];
    }
};
AppComponent.ctorParameters = () => [
    { type: _spa_services_spa_config_service__WEBPACK_IMPORTED_MODULE_2__["SpaConfigService"] },
    { type: _spa_services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.menu.ts":
/*!*****************************!*\
  !*** ./src/app/app.menu.ts ***!
  \*****************************/
/*! exports provided: AppMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMenuItems", function() { return AppMenuItems; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const AppMenuItems = [
    {
        text: "Cars",
        icon: "directions_car",
        route: "/authenticated/cars",
        submenu: [
            {
                text: "Select",
                icon: "mouse",
                route: "/authenticated/cars",
                submenu: [
                    {
                        text: "Ferrari",
                        icon: "360",
                        route: "/authenticated/car-detail/ferrari",
                        submenu: null
                    },
                    {
                        text: "Bugatti",
                        icon: "360",
                        route: "/authenticated/car-detail/bugatti",
                        submenu: null
                    },
                    {
                        text: "Lamburghini",
                        icon: "360",
                        route: "/authenticated/car-detail/lamburghini",
                        submenu: null
                    },
                    {
                        text: "Maseratti",
                        icon: "360",
                        route: "/authenticated/car-detail/maseratti",
                        submenu: null
                    }
                ]
            },
            {
                text: "Best one",
                icon: "directions_car",
                route: "/authenticated/car-list/1",
                submenu: null
            },
            {
                text: "Top 3",
                icon: "directions_car",
                route: "/authenticated/car-list/3",
                submenu: null
            },
            {
                text: "Top 5",
                icon: "directions_car",
                route: "/authenticated/car-list/5",
                submenu: null
            }
        ]
    },
    {
        text: "Maintenance",
        icon: "settings_applications",
        route: null,
        submenu: [
            {
                text: "Car maint",
                icon: "local_car_wash",
                route: "/authenticated/car-maint",
                submenu: null
            },
            {
                text: "Settings",
                icon: "settings",
                route: "/authenticated/settings",
                submenu: null
            }
        ]
    },
    {
        text: "Home",
        icon: "home",
        route: "/authenticated/home",
        submenu: null
    }
];


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/home/home.component */ "./src/app/routes/home/home.component.ts");
/* harmony import */ var _routes_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/settings/settings.component */ "./src/app/routes/settings/settings.component.ts");
/* harmony import */ var _routes_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/car-detail/car-detail.component */ "./src/app/routes/car-detail/car-detail.component.ts");
/* harmony import */ var _routes_car_maint_car_maint_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/car-maint/car-maint.component */ "./src/app/routes/car-maint/car-maint.component.ts");
/* harmony import */ var _routes_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/car-list/car-list.component */ "./src/app/routes/car-list/car-list.component.ts");
/* harmony import */ var _routes_authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/authenticated/authenticated.component */ "./src/app/routes/authenticated/authenticated.component.ts");
/* harmony import */ var _spa_spa_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../spa/spa.module */ "./src/spa/spa.module.ts");
/* harmony import */ var src_spa_users_users_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/spa/users/users-api */ "./src/spa/users/users-api.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_app_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/app-data.service */ "./src/app/services/app-data.service.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _routes_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _routes_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"],
            _routes_car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_8__["CarDetailComponent"],
            _routes_car_maint_car_maint_component__WEBPACK_IMPORTED_MODULE_9__["CarMaintComponent"],
            _routes_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_10__["CarListComponent"],
            _routes_authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_11__["AuthenticatedComponent"]
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _spa_spa_module__WEBPACK_IMPORTED_MODULE_12__["SpaModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_16__["CdkTableModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_17__["AngularMaterialModule"]],
        providers: [
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            {
                provide: src_spa_users_users_api__WEBPACK_IMPORTED_MODULE_13__["UserApi"],
                useExisting: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
            },
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"],
            _services_app_data_service__WEBPACK_IMPORTED_MODULE_15__["AppDataService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/routes/app.routes.ts":
/*!**************************************!*\
  !*** ./src/app/routes/app.routes.ts ***!
  \**************************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/routes/home/home.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/routes/settings/settings.component.ts");
/* harmony import */ var _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./car-detail/car-detail.component */ "./src/app/routes/car-detail/car-detail.component.ts");
/* harmony import */ var _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./car-list/car-list.component */ "./src/app/routes/car-list/car-list.component.ts");
/* harmony import */ var _car_maint_car_maint_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./car-maint/car-maint.component */ "./src/app/routes/car-maint/car-maint.component.ts");
/* harmony import */ var _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authenticated/authenticated.component */ "./src/app/routes/authenticated/authenticated.component.ts");
/* harmony import */ var _spa_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../spa/users/sign-in/sign-in.component */ "./src/spa/users/sign-in/sign-in.component.ts");
/* harmony import */ var _spa_users_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../spa/users/registration/registration.component */ "./src/spa/users/registration/registration.component.ts");
/* harmony import */ var _spa_users_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../spa/users/password-reset/password-reset.component */ "./src/spa/users/password-reset/password-reset.component.ts");










const appRoutes = [
    { path: "sign-in", component: _spa_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"] },
    { path: "register", component: _spa_users_registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"] },
    { path: "password-reset", component: _spa_users_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_9__["PasswordResetComponent"] },
    {
        path: "authenticated",
        component: _authenticated_authenticated_component__WEBPACK_IMPORTED_MODULE_6__["AuthenticatedComponent"],
        children: [
            {
                path: "",
                // canActivateChild: [AuthGuard],
                children: [
                    // { path: "", canActivateChild: [AuthGuard],children: [
                    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
                    { path: "settings", component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"] },
                    { path: "car-detail/:id/:operation", component: _car_detail_car_detail_component__WEBPACK_IMPORTED_MODULE_3__["CarDetailComponent"] },
                    { path: "car-list/:count", component: _car_list_car_list_component__WEBPACK_IMPORTED_MODULE_4__["CarListComponent"] },
                    { path: "car-maint", component: _car_maint_car_maint_component__WEBPACK_IMPORTED_MODULE_5__["CarMaintComponent"] }
                    // ]}
                ]
            }
        ]
    },
    { path: "", redirectTo: "sign-in", pathMatch: "full" },
    { path: "**", component: _spa_users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_7__["SignInComponent"] }
];


/***/ }),

/***/ "./src/app/routes/authenticated/authenticated.component.css":
/*!******************************************************************!*\
  !*** ./src/app/routes/authenticated/authenticated.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9hdXRoZW50aWNhdGVkL2F1dGhlbnRpY2F0ZWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/routes/authenticated/authenticated.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/routes/authenticated/authenticated.component.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatedComponent", function() { return AuthenticatedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthenticatedComponent = class AuthenticatedComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthenticatedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authenticated',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./authenticated.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/authenticated/authenticated.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./authenticated.component.css */ "./src/app/routes/authenticated/authenticated.component.css")).default]
    })
], AuthenticatedComponent);



/***/ }),

/***/ "./src/app/routes/car-detail/car-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/routes/car-detail/car-detail.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9jYXItZGV0YWlsL2Nhci1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/routes/car-detail/car-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/routes/car-detail/car-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: CarDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarDetailComponent", function() { return CarDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app-data.service */ "./src/app/services/app-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CarDetailComponent = class CarDetailComponent {
    constructor(router, route, appDataService) {
        this.router = router;
        this.route = route;
        this.appDataService = appDataService;
        this.carDefinitionInput = [
            { key: "id", type: "number", isId: true, label: "Id", required: true },
            {
                key: "name",
                type: "string",
                isId: false,
                label: "Car name",
                required: true
            },
            {
                key: "model",
                type: "string",
                isId: false,
                label: "Car model",
                required: true
            },
            {
                key: "price",
                type: "number",
                isId: false,
                label: "Car price value",
                required: true
            },
            {
                key: "date",
                type: "number",
                isId: false,
                label: "First registration",
                required: true
            },
            {
                key: "type",
                type: "string",
                isId: false,
                label: "Car type",
                required: true
            },
            {
                key: "numb_seats",
                type: "number",
                isId: false,
                label: "numb_seats",
                required: true
            },
            {
                key: "image",
                type: "string",
                isId: false,
                label: "image",
                required: true
            },
            {
                key: "location",
                type: "string",
                isId: false,
                label: "Location",
                required: true
            },
            {
                key: "ext_color",
                type: "string",
                isId: false,
                label: "Exterior color",
                required: true
            }
        ];
    }
    ngOnInit() {
        this.operation = this.route.snapshot.params["operation"];
        if (this.operation === "create") {
            this.car = {
                id: 0,
                name: "",
                model: "",
                date: null,
                type: "",
                numb_seats: null,
                engine: { fuel_type: "", transmission: "", cubic_capacity: null },
                price: null,
                image: "",
                location: "",
                ext_color: ""
            };
        }
        else {
            this.appDataService
                .getCar(+this.route.snapshot.params["id"])
                .subscribe((car) => (this.car = car));
        }
    }
    createCar(car) {
        // car.id = 0;
        // this.errorMessage = null;
        // this.appDataService.createCar(car).subscribe(
        //   c => this.router.navigate(['/authenticated/car-maint']),
        //   error => this.errorMessage ='Error creating car'
        // );
    }
    updateCar(car) {
        // this.errorMessage = null;
        // this.appDataService.updateCar(car).subscribe(
        //   c => this.router.navigate(['/authenticated/car-maint']),
        //   error => this.errorMessage ='Error updating car'
        // );
    }
};
CarDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_app_data_service__WEBPACK_IMPORTED_MODULE_2__["AppDataService"] }
];
CarDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-car-detail",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./car-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/car-detail/car-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./car-detail.component.css */ "./src/app/routes/car-detail/car-detail.component.css")).default]
    })
], CarDetailComponent);



/***/ }),

/***/ "./src/app/routes/car-list/car-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/routes/car-list/car-list.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9jYXItbGlzdC9jYXItbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/routes/car-list/car-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/car-list/car-list.component.ts ***!
  \*******************************************************/
/*! exports provided: CarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListComponent", function() { return CarListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CarListComponent = class CarListComponent {
    constructor() { }
    ngOnInit() {
    }
};
CarListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-car-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./car-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/car-list/car-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./car-list.component.css */ "./src/app/routes/car-list/car-list.component.css")).default]
    })
], CarListComponent);



/***/ }),

/***/ "./src/app/routes/car-maint/car-maint.component.css":
/*!**********************************************************!*\
  !*** ./src/app/routes/car-maint/car-maint.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* :host {\n  width: 90vw;\n} */\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd,\nth {\n  min-width: 10vw;\n  /* max-width: 50vw; */\n  padding-right: 0.5rem !important;\n}\n\ntr.example-detail-row {\n  height: 0;\n  \n}\n\ntr.small {\n  width: 100%;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n  cursor: pointer;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #777;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.large-detail {\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  /* width: 87vw; */\n}\n\n/* .large-detail * {\n  margin-top: 0.2rem;\n} */\n\n.small-detail {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n}\n\n.large-element-image {\n  background-size: cover;\n  width: 30vw;\n}\n\n.small-element-image {\n  background-size: cover;\n  width: 100%;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\n.large-element-image {\n  margin: 1rem;\n  max-width: 500px;\n}\n\n.characteristicL {\n  min-width: 330px;\n  max-width: 550px;\n}\n\n.characteristicL div, .characteristicS div {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 16px;\n}\n\n.characteristicL div {\n  margin-top: 1.2vw;\n  min-width: 10rem;\n}\n\n.characteristicS div {\n  padding-left: 20px;\n  width: 34vw;\n  margin-top: 2.5vh;\n}\n\n.characteristicS div > * {\n  flex: 1 0;\n  margin: 0.4rem;\n  flex-basis: auto;\n}\n\nmat-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.characteristicS div span {\n  /* margin: 0.2rem; */\n  \n  min-width: 4rem;\n}\n\n.characteristicL div > * {\n  margin: 0.5rem;\n}\n\n.titleL {\n  font-size: 1.8rem;\n  font-weight: 500;\n}\n\n.titleS {\n  font-size: 1.8rem;\n  font-weight: 500;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  /* overflow-x: none; */\n}\n\n.characteristicL,\n.characteristicS {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.characteristicS {\n  /* margin-bottom: 30px; */\n  display: flex;\n  justify-content: center;\n}\n\n.mat-icon {\n  width: 26px !important;\n  height: 26px !important;\n}\n\n.actionsS {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.actions > button {\n  margin: 0.5em;\n}\n\n.actions .mat-stroked-button {\n  border-width: 0.1rem;\n  border-radius: 30px;\n  /* color: #4e5153; */\n  line-height: 2.9rem;\n  background: #ffffff11;\n  margin-top: 16px;\n  letter-spacing: 0.15em;\n  font-weight: 500;\n  /* width: 7vw; */\n}\n\n.element-detail {\n  width: 25vw;\n}\n\nmat-card-content, mat-card-header {\n  margin: auto;\n  padding-bottom: 1rem;\n  padding-right: 1rem;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2Nhci1tYWludC9jYXItbWFpbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7QUFFSDtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxTQUFTOztBQUVYOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjs7RUFFcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9jYXItbWFpbnQvY2FyLW1haW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA6aG9zdCB7XG4gIHdpZHRoOiA5MHZ3O1xufSAqL1xuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCxcbnRoIHtcbiAgbWluLXdpZHRoOiAxMHZ3O1xuICAvKiBtYXgtd2lkdGg6IDUwdnc7ICovXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbSAhaW1wb3J0YW50O1xufVxuXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG4gIFxufVxuXG50ci5zbWFsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3Nzc7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmxhcmdlLWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiB3aWR0aDogODd2dzsgKi9cbn1cblxuLyogLmxhcmdlLWRldGFpbCAqIHtcbiAgbWFyZ2luLXRvcDogMC4ycmVtO1xufSAqL1xuXG4uc21hbGwtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiA4cHggMDtcbn1cblxuLmxhcmdlLWVsZW1lbnQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMzB2dztcbn1cblxuLnNtYWxsLWVsZW1lbnQtaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubGFyZ2UtZWxlbWVudC1pbWFnZSB7XG4gIG1hcmdpbjogMXJlbTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLmNoYXJhY3RlcmlzdGljTCB7XG4gIG1pbi13aWR0aDogMzMwcHg7XG4gIG1heC13aWR0aDogNTUwcHg7XG59XG5cbi5jaGFyYWN0ZXJpc3RpY0wgZGl2LCAuY2hhcmFjdGVyaXN0aWNTIGRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNoYXJhY3RlcmlzdGljTCBkaXYge1xuICBtYXJnaW4tdG9wOiAxLjJ2dztcbiAgbWluLXdpZHRoOiAxMHJlbTtcbn1cblxuLmNoYXJhY3RlcmlzdGljUyBkaXYge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHdpZHRoOiAzNHZ3O1xuICBtYXJnaW4tdG9wOiAyLjV2aDtcbn1cblxuLmNoYXJhY3RlcmlzdGljUyBkaXYgPiAqIHtcbiAgZmxleDogMSAwO1xuICBtYXJnaW46IDAuNHJlbTtcbiAgZmxleC1iYXNpczogYXV0bztcbn1cblxubWF0LWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNoYXJhY3RlcmlzdGljUyBkaXYgc3BhbiB7XG4gIC8qIG1hcmdpbjogMC4ycmVtOyAqL1xuICBcbiAgbWluLXdpZHRoOiA0cmVtO1xufVxuXG4uY2hhcmFjdGVyaXN0aWNMIGRpdiA+ICoge1xuICBtYXJnaW46IDAuNXJlbTtcbn1cblxuLnRpdGxlTCB7XG4gIGZvbnQtc2l6ZTogMS44cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGl0bGVTIHtcbiAgZm9udC1zaXplOiAxLjhyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogb3ZlcmZsb3cteDogbm9uZTsgKi9cbn1cblxuLmNoYXJhY3RlcmlzdGljTCxcbi5jaGFyYWN0ZXJpc3RpY1Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jaGFyYWN0ZXJpc3RpY1Mge1xuICAvKiBtYXJnaW4tYm90dG9tOiAzMHB4OyAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hdC1pY29uIHtcbiAgd2lkdGg6IDI2cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hY3Rpb25zUyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWN0aW9ucyA+IGJ1dHRvbiB7XG4gIG1hcmdpbjogMC41ZW07XG59XG5cbi5hY3Rpb25zIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICBib3JkZXItd2lkdGg6IDAuMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLyogY29sb3I6ICM0ZTUxNTM7ICovXG4gIGxpbmUtaGVpZ2h0OiAyLjlyZW07XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYxMTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLyogd2lkdGg6IDd2dzsgKi9cbn1cblxuLmVsZW1lbnQtZGV0YWlsIHtcbiAgd2lkdGg6IDI1dnc7XG59XG5cbm1hdC1jYXJkLWNvbnRlbnQsIG1hdC1jYXJkLWhlYWRlciB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/routes/car-maint/car-maint.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/routes/car-maint/car-maint.component.ts ***!
  \*********************************************************/
/*! exports provided: CarMaintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarMaintComponent", function() { return CarMaintComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_app_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app-data.service */ "./src/app/services/app-data.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_spa_services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/spa/services/menu.service */ "./src/spa/services/menu.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var src_spa_services_spa_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/spa/services/spa-config.service */ "./src/spa/services/spa-config.service.ts");
/* harmony import */ var src_spa_services_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/spa/services/screen.service */ "./src/spa/services/screen.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");










let CarMaintComponent = class CarMaintComponent {
    constructor(router, appDataService, menuService, spaConfigService, screenService) {
        this.router = router;
        this.appDataService = appDataService;
        this.menuService = menuService;
        this.spaConfigService = spaConfigService;
        this.screenService = screenService;
        this.isDeleting = false;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](true, []);
        this.displayedColumns = ["select", "id", "name", "model", "price"];
        this.icons = [
            "battery",
            "car",
            "car-oil",
            "car-engine",
            "sports-car",
            "shifter",
            "calendar",
            "car-seat",
            "jeep",
            "painted-car",
            "price",
            "location",
            "van"
        ];
        appDataService.getCars().subscribe(data => (this.carList = data));
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.carList);
        this.icons.forEach(icon => this.spaConfigService.addSvgIcon(icon));
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected()
            ? this.selection.clear()
            : this.dataSource.data.forEach(row => this.selection.select(row));
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? "select" : "deselect"} all`;
        }
        return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${row.id + 1}`;
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    createCar() {
        this.router.navigate(["/authenticated/car-detail", 0, "create"]);
    }
    showCarDetail(id) {
        this.router.navigate(["/authenticated/car-detail", id, "details"]);
    }
    editCar(id) {
        this.router.navigate(["/authenticated/car-detail", id, "edit"]);
    }
    deleteCarQuestion(id) {
        this.deleteError = null;
        this.deleteId = id;
    }
    cancelDelete() {
        this.isDeleting = false;
        this.deleteId = null;
    }
    deleteCar(id) {
        this.isDeleting = true;
        this.appDataService.deleteCar(id).subscribe(car => {
            this.cancelDelete();
            this.router
                .navigateByUrl("/authenticated", {
                skipLocationChange: true
            })
                .then(() => {
                this.router.navigate(["/authenticated/car-maint"]);
            });
        }, error => {
            this.deleteError = error;
            this.isDeleting = false;
        });
    }
};
CarMaintComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_app_data_service__WEBPACK_IMPORTED_MODULE_3__["AppDataService"] },
    { type: src_spa_services_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] },
    { type: src_spa_services_spa_config_service__WEBPACK_IMPORTED_MODULE_7__["SpaConfigService"] },
    { type: src_spa_services_screen_service__WEBPACK_IMPORTED_MODULE_8__["ScreenService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true })
], CarMaintComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], CarMaintComponent.prototype, "sort", void 0);
CarMaintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-car-maint",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./car-maint.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/car-maint/car-maint.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])("detailExpand", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])("collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: "0px", minHeight: "0" })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])("expanded", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({ height: "*" })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])("expanded <=> collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./car-maint.component.css */ "./src/app/routes/car-maint/car-maint.component.css")).default]
    })
], CarMaintComponent);



/***/ }),

/***/ "./src/app/routes/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/routes/home/home.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/routes/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/routes/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/routes/settings/settings.component.css":
/*!********************************************************!*\
  !*** ./src/app/routes/settings/settings.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/routes/settings/settings.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/settings/settings.component.ts ***!
  \*******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/routes/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.css */ "./src/app/routes/settings/settings.component.css")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/services/app-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/app-data.service.ts ***!
  \**********************************************/
/*! exports provided: AppDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDataService", function() { return AppDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AppDataService = class AppDataService {
    constructor(userService) {
        this.userService = userService;
        this.CarsColection = [
            {
                id: 1,
                name: "Toyota",
                model: "Camry",
                date: 2010,
                type: "Saloon",
                numb_seats: 5,
                engine: {
                    fuel_type: "Petrol",
                    transmission: "Automatic",
                    cubic_capacity: 3500
                },
                price: 11000,
                image: "assets/cars/camry2010.png",
                location: "Lviv, Ukraine",
                ext_color: "Silver"
            },
            {
                id: 2,
                name: "Honda",
                model: "Accord",
                date: 2010,
                type: "Coupe",
                numb_seats: 4,
                engine: {
                    fuel_type: "Petrol",
                    transmission: "Automatic",
                    cubic_capacity: 2400
                },
                price: 10400,
                image: "assets/cars/accord-coupe2010.png",
                location: "Lviv, Ukraine",
                ext_color: "Silver"
            },
            {
                id: 3,
                name: "Audi",
                model: "A6",
                date: 2010,
                type: "EstateCar",
                numb_seats: 5,
                engine: {
                    fuel_type: "Diesel",
                    transmission: "Automatic",
                    cubic_capacity: 3000
                    // Turbo
                },
                price: 12600,
                image: "assets/cars/AudiA62010.png",
                location: "Lviv, Ukraine",
                ext_color: "Silver"
            },
            {
                id: 4,
                name: "BMW",
                model: "535i",
                date: 2010,
                type: "Saloon",
                numb_seats: 5,
                engine: {
                    fuel_type: "Petrol",
                    transmission: "Automatic",
                    cubic_capacity: 3000
                    // Turbo
                },
                price: 12600,
                image: "assets/cars/bmw535i2010.png",
                location: "Lviv, Ukraine",
                ext_color: "Silver"
            },
            {
                id: 5,
                name: "Mercedes-Benz",
                model: "E-320",
                date: 2010,
                type: "Saloon",
                numb_seats: 5,
                engine: {
                    fuel_type: "Petrol",
                    transmission: "Automatic",
                    cubic_capacity: 3200
                },
                price: 14000,
                image: "assets/cars/mercw2112009.png",
                location: "Lviv, Ukraine",
                ext_color: "silver"
            },
            {
                id: 6,
                name: "Volkswagen",
                model: "Touareg",
                date: 2013,
                type: "SUV",
                numb_seats: 5,
                engine: {
                    fuel_type: "Petrol",
                    transmission: "Automatic",
                    cubic_capacity: 3000
                },
                price: 22900,
                image: "assets/cars/touareg2013.png",
                location: "Lviv, Ukraine",
                ext_color: "Silver"
            },
            {
                id: 7,
                name: "Tesla",
                model: "Model S",
                date: 2015,
                type: "Saloon",
                numb_seats: 5,
                engine: {
                    fuel_type: "Electric",
                    transmission: "Automatic",
                    cubic_capacity: 100
                    // Turbo
                },
                price: 25000,
                image: "assets/cars/tesla2015.png",
                location: "Lviv, Ukraine",
                ext_color: "Silver"
            },
            {
                id: 8,
                name: "Infinity",
                model: "G37",
                date: 2010,
                type: "Coupe",
                numb_seats: 4,
                engine: {
                    fuel_type: "Petrol",
                    transmission: "Automatic",
                    cubic_capacity: 3700
                    // Turbo
                },
                price: 14500,
                image: "assets/cars/infinitig37.png",
                location: "Lviv, Ukraine",
                ext_color: "Silver"
            },
            {
                id: 9,
                name: "Hyundai",
                model: "Grandeur",
                date: 2009,
                type: "Saloon",
                numb_seats: 5,
                engine: {
                    fuel_type: "Petrol",
                    transmission: "Automatic",
                    cubic_capacity: 3300
                    // Turbo
                },
                price: 7500,
                image: "assets/cars/grandeur2009.png",
                location: "Lviv, Ukraine",
                ext_color: "Silver"
            },
            {
                id: 10,
                name: "Nissan",
                model: "GT-R",
                date: 2009,
                type: "Sports Car",
                numb_seats: 5,
                engine: {
                    fuel_type: "Petrol",
                    transmission: "Automatic",
                    cubic_capacity: 3800
                    // Turbo
                },
                price: 75000,
                image: "assets/cars/gt-r35.png",
                location: "Kyiv, Ukraine",
                ext_color: "White Mettalic"
            },
            {
                id: 11,
                name: "Nissan",
                model: "370z",
                date: 2013,
                type: "Coupe",
                numb_seats: 5,
                engine: {
                    fuel_type: "Petrol",
                    transmission: "Automatic",
                    cubic_capacity: 3700
                    // Turbo
                },
                price: 22000,
                image: "assets/cars/370z.png",
                location: "Kyiv, Ukraine",
                ext_color: "White Mettalic"
            },
            {
                id: 12,
                name: "Nissan",
                model: "Leaf",
                date: 2013,
                type: "Saloon",
                numb_seats: 5,
                engine: {
                    fuel_type: "Electric",
                    transmission: "Automatic",
                    cubic_capacity: 30
                    // Turbo
                },
                price: 11200,
                image: "assets/cars/leaf.png",
                location: "Lviv, Ukraine",
                ext_color: "White Mettalic"
            },
            {
                id: 13,
                name: "Volkswagen",
                model: "Passat B8",
                date: 2018,
                type: "Saloon",
                numb_seats: 5,
                engine: {
                    fuel_type: "Patrol",
                    transmission: "Automatic",
                    cubic_capacity: 2000
                    // Turbo
                },
                price: 19500,
                image: "assets/cars/passatb8.png",
                location: "Lviv, Ukraine",
                ext_color: "Milano Red"
            },
            {
                id: 14,
                name: "Volkswagen",
                model: "Golf 4",
                date: 2001,
                type: "EstateCar",
                numb_seats: 5,
                engine: {
                    fuel_type: "Diesel",
                    transmission: "Manual",
                    cubic_capacity: 1900
                    // Turbo
                },
                price: 4500,
                image: "assets/cars/golf-IV.png",
                location: "Lviv, Ukraine",
                ext_color: "Red"
            },
            {
                id: 15,
                name: "Audi",
                model: "A4",
                date: 2010,
                type: "Saloon",
                numb_seats: 5,
                engine: {
                    fuel_type: "Patrol",
                    transmission: "Automatic",
                    cubic_capacity: 1800
                    // Turbo
                },
                price: 10600,
                image: "assets/cars/Audi-A42010.png",
                location: "Lviv, Ukraine",
                ext_color: "Silver"
            },
            {
                id: 16,
                name: "Renault",
                model: "Trafic",
                date: 2010,
                type: "Van / Minibus",
                numb_seats: 9,
                engine: {
                    fuel_type: "Diesel",
                    transmission: "Manual",
                    cubic_capacity: 2500
                    // Turbo
                },
                price: 9800,
                image: "assets/cars/trafic.png",
                location: "Lviv, Ukraine",
                ext_color: "Silver"
            }
        ];
    }
    getCars() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.CarsColection);
    }
    getCar(id) {
        const car = this.CarsColection.find(item => item.id === id);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(car);
    }
    deleteCar(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => this.CarsColection.splice(this.CarsColection.findIndex(item => item.id === id), 1)));
    }
};
AppDataService.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AppDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppDataService);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivate() {
        if (!this.userService.isAuthenticated) {
            this.router.navigate(["/sign-in"]);
        }
        return this.userService.isAuthenticated;
    }
    canActivateChild() {
        return this.canActivate();
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UserService = class UserService {
    constructor(router) {
        this.router = router;
        this.isAuthenticated = false;
    }
    signIn(username, password) {
        if (username === "test@gmail.com" && password === "qwerty") {
            this.isAuthenticated = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(2000));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Invalid name or password');
        }
    }
    signOut() {
        this.isAuthenticated = false;
        this.router.navigate(['/sign-in']);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({});
    }
};
UserService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserService);



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

const environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/spa/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/spa/body/body.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* :host {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n} */\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcGEvYm9keS9ib2R5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0dBUUciLCJmaWxlIjoic3JjL3NwYS9ib2R5L2JvZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIDpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbn0gKi9cblxuXG5cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/spa/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/spa/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BodyComponent = class BodyComponent {
    constructor() { }
    ngOnInit() {
    }
};
BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'spa-body',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./body.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/spa/body/body.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./body.component.css */ "./src/spa/body/body.component.css")).default]
    })
], BodyComponent);



/***/ }),

/***/ "./src/spa/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/spa/content/content.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: relative;\n  display: flex;\n  flex-shrink: 1;\n  overflow-x: hidden;\n  /* overflow-y: auto; */\n  height: 100vh;\n}\n\n.mat-sidenav {\n  padding-top: 30px;\n}\n\n.body-style {\n  padding: 0 12vw;\n}\n\n.body-style-small {\n  padding: 0 3vw;\n  /* width: 96vw; */\n}\n\n.dropup {\n  margin: 16px;\n}\n\nmat-drawer div {\n  padding: 8px 0;\n}\n\n.small-display {\n  display: flex;\n  flex-direction: column;\n  margin: 16px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcGEvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTs7QUFFZCIsImZpbGUiOiJzcmMvc3BhL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIC8qIG92ZXJmbG93LXk6IGF1dG87ICovXG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5tYXQtc2lkZW5hdiB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uYm9keS1zdHlsZSB7XG4gIHBhZGRpbmc6IDAgMTJ2dztcbn1cblxuLmJvZHktc3R5bGUtc21hbGwge1xuICBwYWRkaW5nOiAwIDN2dztcbiAgLyogd2lkdGg6IDk2dnc7ICovXG59XG5cbi5kcm9wdXAge1xuICBtYXJnaW46IDE2cHg7XG59XG5cbm1hdC1kcmF3ZXIgZGl2IHtcbiAgcGFkZGluZzogOHB4IDA7XG59XG5cbi5zbWFsbC1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxNnB4O1xuICBcbn0iXX0= */");

/***/ }),

/***/ "./src/spa/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/spa/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/menu.service */ "./src/spa/services/menu.service.ts");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/screen.service */ "./src/spa/services/screen.service.ts");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/nav.service */ "./src/spa/services/nav.service.ts");
/* harmony import */ var _users_users_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users/users-api */ "./src/spa/users/users-api.ts");






let ContentComponent = class ContentComponent {
    constructor(menuService, screenService, navService, userApi) {
        this.menuService = menuService;
        this.screenService = screenService;
        this.navService = navService;
        this.userApi = userApi;
    }
    ngAfterViewInit() {
        this.navService.appDrawer = this.appDrawer;
    }
};
ContentComponent.ctorParameters = () => [
    { type: _services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: _services_screen_service__WEBPACK_IMPORTED_MODULE_3__["ScreenService"] },
    { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"] },
    { type: _users_users_api__WEBPACK_IMPORTED_MODULE_5__["UserApi"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("appDrawer", { static: false })
], ContentComponent.prototype, "appDrawer", void 0);
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spa-content",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/spa/content/content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.css */ "./src/spa/content/content.component.css")).default]
    })
], ContentComponent);



/***/ }),

/***/ "./src/spa/directives/screen-large.directive.ts":
/*!******************************************************!*\
  !*** ./src/spa/directives/screen-large.directive.ts ***!
  \******************************************************/
/*! exports provided: ScreenLargeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenLargeDirective", function() { return ScreenLargeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen.service */ "./src/spa/services/screen.service.ts");



let ScreenLargeDirective = class ScreenLargeDirective {
    constructor(template, screenService, viewContainer) {
        this.template = template;
        this.screenService = screenService;
        this.viewContainer = viewContainer;
        this.hasView = false;
        screenService.resize$.subscribe(() => {
            this.onResize();
        });
    }
    onResize() {
        this.screenLarge = false;
    }
    set screenLarge(condition) {
        condition =
            this.screenService.screenWidth >= this.screenService.largePixels;
        if (condition && !this.hasView) {
            this.hasView = true;
            this.viewContainer.createEmbeddedView(this.template);
        }
        else if (!condition && this.hasView) {
            this.hasView = false;
            this.viewContainer.clear();
        }
    }
};
ScreenLargeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _services_screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScreenLargeDirective.prototype, "screenLarge", null);
ScreenLargeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[screenLarge]"
    })
], ScreenLargeDirective);



/***/ }),

/***/ "./src/spa/directives/screen-small.directive.ts":
/*!******************************************************!*\
  !*** ./src/spa/directives/screen-small.directive.ts ***!
  \******************************************************/
/*! exports provided: ScreenSmallDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSmallDirective", function() { return ScreenSmallDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen.service */ "./src/spa/services/screen.service.ts");



let ScreenSmallDirective = class ScreenSmallDirective {
    constructor(template, screenService, viewContainer) {
        this.template = template;
        this.screenService = screenService;
        this.viewContainer = viewContainer;
        this.hasView = false;
        screenService.resize$.subscribe(() => {
            this.onResize();
        });
    }
    onResize() {
        this.screenSmall = false;
    }
    set screenSmall(condition) {
        condition = this.screenService.screenWidth < this.screenService.largePixels;
        if (condition && !this.hasView) {
            this.hasView = true;
            this.viewContainer.createEmbeddedView(this.template);
        }
        else if (!condition && this.hasView) {
            this.hasView = false;
            this.viewContainer.clear();
        }
    }
};
ScreenSmallDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _services_screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScreenSmallDirective.prototype, "screenSmall", null);
ScreenSmallDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[screenSmall]"
    })
], ScreenSmallDirective);



/***/ }),

/***/ "./src/spa/dynamicForms/dynamic-field/dynamic-field.component.css":
/*!************************************************************************!*\
  !*** ./src/spa/dynamicForms/dynamic-field/dynamic-field.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvc3BhL2R5bmFtaWNGb3Jtcy9keW5hbWljLWZpZWxkL2R5bmFtaWMtZmllbGQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/spa/dynamicForms/dynamic-field/dynamic-field.component.ts":
/*!***********************************************************************!*\
  !*** ./src/spa/dynamicForms/dynamic-field/dynamic-field.component.ts ***!
  \***********************************************************************/
/*! exports provided: DynamicFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldComponent", function() { return DynamicFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DynamicFieldComponent = class DynamicFieldComponent {
    constructor() { }
    get isValid() {
        return this.form.controls[this.field.key].valid;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DynamicFieldComponent.prototype, "field", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DynamicFieldComponent.prototype, "form", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DynamicFieldComponent.prototype, "operation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DynamicFieldComponent.prototype, "submitted", void 0);
DynamicFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'spa-dynamic-field',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dynamic-field.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/spa/dynamicForms/dynamic-field/dynamic-field.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dynamic-field.component.css */ "./src/spa/dynamicForms/dynamic-field/dynamic-field.component.css")).default]
    })
], DynamicFieldComponent);



/***/ }),

/***/ "./src/spa/dynamicForms/dynamic-form/dynamic-form.component.css":
/*!**********************************************************************!*\
  !*** ./src/spa/dynamicForms/dynamic-form/dynamic-form.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvc3BhL2R5bmFtaWNGb3Jtcy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/spa/dynamicForms/dynamic-form/dynamic-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/spa/dynamicForms/dynamic-form/dynamic-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let DynamicFormComponent = class DynamicFormComponent {
    constructor(route, router, location) {
        this.route = route;
        this.router = router;
        this.location = location;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.create = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitted = false;
    }
    clearForm() {
        const group = {};
        this.vmCopy = Object.assign({}, this.vm);
        this.vmDefinition.forEach(field => {
            group[field.key] = field.required
                ? new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.vmCopy[field.key], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
                : new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.vmCopy[field.key]);
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"](group);
    }
    ngOnInit() {
        this.clearForm();
        this.route.params.subscribe(params => {
            this.operation = params["operation"];
            this.clearForm();
        });
    }
    ngOnChanges(changes) {
        if (changes["errorMessage"].currentValue && this.status === "waiting") {
            this.status = "";
        }
    }
    onBack() {
        this.errorMessage = null;
        this.location.back();
    }
    onEdit() {
        this.router.navigate(["../", "edit"], { relativeTo: this.route });
    }
    onCancel() {
        this.onBack();
    }
    onSave() {
        this.submitted = true;
        if (this.form.valid) {
            this.status = 'waiting';
            this.update.emit(this.form.value);
        }
    }
    onCreate() {
        this.submitted = true;
        if (this.form.valid) {
            this.status = 'waiting';
            this.create.emit(this.form.value);
        }
    }
};
DynamicFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DynamicFormComponent.prototype, "vm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DynamicFormComponent.prototype, "vmDefinition", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DynamicFormComponent.prototype, "operation", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DynamicFormComponent.prototype, "errorMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DynamicFormComponent.prototype, "update", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DynamicFormComponent.prototype, "create", void 0);
DynamicFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spa-dynamic-form",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dynamic-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/spa/dynamicForms/dynamic-form/dynamic-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dynamic-form.component.css */ "./src/spa/dynamicForms/dynamic-form/dynamic-form.component.css")).default]
    })
], DynamicFormComponent);



/***/ }),

/***/ "./src/spa/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/spa/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    min-height: 30px;\n    background-color: #16484b;\n    float: right;\n    width: 100%;\n    left: 0;\n}\nmat-toolbar {\n    /* margin-left: -258px; */\n    /* margin-right: -258px; */\n    position: relative;\n    z-index: 100;\n}\ndiv {\n    margin: 5;\n    color: #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcGEvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLE9BQU87QUFDWDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksU0FBUztJQUNULFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvc3BhL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjQ4NGI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDA7XG59XG5tYXQtdG9vbGJhciB7XG4gICAgLyogbWFyZ2luLWxlZnQ6IC0yNThweDsgKi9cbiAgICAvKiBtYXJnaW4tcmlnaHQ6IC0yNThweDsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTAwO1xufVxuZGl2IHtcbiAgICBtYXJnaW46IDU7XG4gICAgY29sb3I6ICNkZGQ7XG59Il19 */");

/***/ }),

/***/ "./src/spa/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/spa/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.title = 'All rights reserved';
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'spa-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/spa/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/spa/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/spa/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/spa/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\n  flex: 1 1 auto;\n}\nmat-toolbar {\n  position: sticky;\n  position: -webkit-sticky; /* For macOS/iOS Safari */\n  top: 0; /* Sets the sticky toolbar to be on top */\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcGEvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHdCQUF3QixFQUFFLHlCQUF5QjtFQUNuRCxNQUFNLEVBQUUseUNBQXlDO0VBQ2pELGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvc3BhL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxubWF0LXRvb2xiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7IC8qIEZvciBtYWNPUy9pT1MgU2FmYXJpICovXG4gIHRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXG4gIHotaW5kZXg6IDEwMDA7XG59Il19 */");

/***/ }),

/***/ "./src/spa/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/spa/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/screen.service */ "./src/spa/services/screen.service.ts");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/menu.service */ "./src/spa/services/menu.service.ts");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/nav.service */ "./src/spa/services/nav.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(screenService, menuService, navService) {
        this.screenService = screenService;
        this.menuService = menuService;
        this.navService = navService;
    }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"] },
    { type: _services_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] },
    { type: _services_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spa-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/spa/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/spa/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/spa/icon-bar/icon-bar.component.css":
/*!*************************************************!*\
  !*** ./src/spa/icon-bar/icon-bar.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 60px;\n  text-align: right;\n  padding-top: 6px;\n  color: #eee;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\ndiv {\n  display: inline;\n  margin-left: 30px;\n  font-size: 22px;\n  vertical-align: middle;\n}\n\na {\n  text-decoration: none;\n}\n\nmat-icon {\n  width: 33px;\n  height: 33px;\n  margin-left: 10px;\n}\n\nspan {\n  margin-right: 10px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcGEvaWNvbi1iYXIvaWNvbi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9zcGEvaWNvbi1iYXIvaWNvbi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgY29sb3I6ICNlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpdiB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubWF0LWljb24ge1xuICB3aWR0aDogMzNweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/spa/icon-bar/icon-bar.component.ts":
/*!************************************************!*\
  !*** ./src/spa/icon-bar/icon-bar.component.ts ***!
  \************************************************/
/*! exports provided: IconBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBarComponent", function() { return IconBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_spa_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/spa-config.service */ "./src/spa/services/spa-config.service.ts");
/* harmony import */ var _users_users_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users-api */ "./src/spa/users/users-api.ts");




let IconBarComponent = class IconBarComponent {
    constructor(appConfigService, userApi) {
        this.appConfigService = appConfigService;
        this.userApi = userApi;
    }
    ngOnInit() {
        this.showLoader = false;
    }
    signOut() {
        this.showLoader = true;
        setTimeout(() => { this.userApi.signOut(); }, 2000);
        console.log('Sign out!');
    }
};
IconBarComponent.ctorParameters = () => [
    { type: _services_spa_config_service__WEBPACK_IMPORTED_MODULE_2__["SpaConfigService"] },
    { type: _users_users_api__WEBPACK_IMPORTED_MODULE_3__["UserApi"] }
];
IconBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'spa-icon-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./icon-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/spa/icon-bar/icon-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./icon-bar.component.css */ "./src/spa/icon-bar/icon-bar.component.css")).default]
    })
], IconBarComponent);



/***/ }),

/***/ "./src/spa/menus/menu/menu.component.css":
/*!***********************************************!*\
  !*** ./src/spa/menus/menu/menu.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-end;\n    flex-grow: 1;\n}\n\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\nli {\n    display: inline ;\n}\n\n:host(.vertical-menu) {\n    display: inline-block;\n    max-width: 160px;\n    min-width: 160px;\n    height: 100vh;\n    padding-left: 4px;\n    flex-grow: 0;\n    background-color: rgb(53, 133, 138);\n    overflow-x: hidden;\n    overflow-y: auto;\n} \n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcGEvbWVudXMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvc3BhL21lbnVzL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5saSB7XG4gICAgZGlzcGxheTogaW5saW5lIDtcbn1cblxuOmhvc3QoLnZlcnRpY2FsLW1lbnUpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWF4LXdpZHRoOiAxNjBweDtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgZmxleC1ncm93OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MywgMTMzLCAxMzgpO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufSBcblxuIl19 */");

/***/ }),

/***/ "./src/spa/menus/menu/menu.component.ts":
/*!**********************************************!*\
  !*** ./src/spa/menus/menu/menu.component.ts ***!
  \**********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/menu.service */ "./src/spa/services/menu.service.ts");
/* harmony import */ var src_spa_services_nav_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/spa/services/nav.service */ "./src/spa/services/nav.service.ts");




let MenuComponent = class MenuComponent {
    constructor(menuService, navService) {
        this.menuService = menuService;
        this.navService = navService;
    }
    ngOnInit() {
    }
};
MenuComponent.ctorParameters = () => [
    { type: _services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: src_spa_services_nav_service__WEBPACK_IMPORTED_MODULE_3__["NavService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'spa-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/spa/menus/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/spa/menus/menu/menu.component.css")).default]
    })
], MenuComponent);



/***/ }),

/***/ "./src/spa/menus/popup-menu/popup-menu.component.css":
/*!***********************************************************!*\
  !*** ./src/spa/menus/popup-menu/popup-menu.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  position: absolute;\n  display: inline-block;\n  width: 160px;\n  background-color: #16484b;\n  /* border: 1px solid black; */\n  z-index: 1;\n  box-shadow: 2px 2px 5px #bcbcbc;\n}\n\n:host(.vertical-menu) {\n  position: static;\n  display: block;\n  width: 100%;\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n  \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcGEvbWVudXMvcG9wdXAtbWVudS9wb3B1cC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDViwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGdCQUFnQjs7QUFFbEIiLCJmaWxlIjoic3JjL3NwYS9tZW51cy9wb3B1cC1tZW51L3BvcHVwLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2NDg0YjtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4ICNiY2JjYmM7XG59XG5cbjpob3N0KC52ZXJ0aWNhbC1tZW51KSB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgXG59XG4iXX0= */");

/***/ }),

/***/ "./src/spa/menus/popup-menu/popup-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/spa/menus/popup-menu/popup-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: PopupMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupMenuComponent", function() { return PopupMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_spa_services_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/spa/services/menu.service */ "./src/spa/services/menu.service.ts");



let PopupMenuComponent = class PopupMenuComponent {
    constructor(menuService) {
        this.menuService = menuService;
    }
    ngOnInit() {
    }
};
PopupMenuComponent.ctorParameters = () => [
    { type: src_spa_services_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopupMenuComponent.prototype, "menu", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('childMenu', { static: true })
], PopupMenuComponent.prototype, "childMenu", void 0);
PopupMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'spa-popup-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/spa/menus/popup-menu/popup-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-menu.component.css */ "./src/spa/menus/popup-menu/popup-menu.component.css")).default]
    })
], PopupMenuComponent);



/***/ }),

/***/ "./src/spa/menus/sidebar-menu/sidebar-menu.component.css":
/*!***************************************************************!*\
  !*** ./src/spa/menus/sidebar-menu/sidebar-menu.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span mat-icon {\n  margin-left: 40px;\n}\n:host {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  outline: none;\n  width: 100%;\n}\n:host .menu-list-item.active {\n  background-color:rgba(0, 0, 0, 0.87);\n  opacity: .7;\n}\n:host:hover > .menu-list-item:not(.expanded), :host:focus > .menu-list-item:not(.expanded) {\n  background-color: rgb(120, 129, 192)!important;\n}\n.menu-list-item {\n  padding: 6px;\n  display: flex;\n  width: auto;\n  cursor: pointer;\n}\n.menu-list-item .routeIcon {\n  margin-right: 40px;\n}\n.menu-list-item > *  {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcGEvbWVudXMvc2lkZWJhci1tZW51L3NpZGViYXItbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsV0FBVztBQUNiO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztBQUNiO0FBQ0E7RUFDRSw4Q0FBOEM7QUFDaEQ7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvc3BhL21lbnVzL3NpZGViYXItbWVudS9zaWRlYmFyLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4gbWF0LWljb24ge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAubWVudS1saXN0LWl0ZW0uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBvcGFjaXR5OiAuNztcbn1cbjpob3N0OmhvdmVyID4gLm1lbnUtbGlzdC1pdGVtOm5vdCguZXhwYW5kZWQpLCA6aG9zdDpmb2N1cyA+IC5tZW51LWxpc3QtaXRlbTpub3QoLmV4cGFuZGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjAsIDEyOSwgMTkyKSFpbXBvcnRhbnQ7XG59XG4ubWVudS1saXN0LWl0ZW0ge1xuICBwYWRkaW5nOiA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWVudS1saXN0LWl0ZW0gLnJvdXRlSWNvbiB7XG4gIG1hcmdpbi1yaWdodDogNDBweDtcbn1cblxuLm1lbnUtbGlzdC1pdGVtID4gKiAge1xuICBtYXJnaW46IDEwcHggMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/spa/menus/sidebar-menu/sidebar-menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/spa/menus/sidebar-menu/sidebar-menu.component.ts ***!
  \**************************************************************/
/*! exports provided: SidebarMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarMenuComponent", function() { return SidebarMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_spa_services_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/spa/services/menu.service */ "./src/spa/services/menu.service.ts");
/* harmony import */ var src_spa_services_nav_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/spa/services/nav.service */ "./src/spa/services/nav.service.ts");
/* harmony import */ var src_spa_services_screen_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/spa/services/screen.service */ "./src/spa/services/screen.service.ts");







let SidebarMenuComponent = class SidebarMenuComponent {
    constructor(navService, screenService, menuService, router) {
        this.navService = navService;
        this.screenService = screenService;
        this.menuService = menuService;
        this.router = router;
        this.ariaExpanded = this.expanded;
        if (this.depth === undefined) {
            this.depth = 1;
        }
    }
    ngOnInit() {
        this.navService.currentUrl.subscribe((url) => {
            if (this.item.route && url) {
                // console.log(`Checking '/${this.item.route}' against '${url}'`);
                this.expanded = url.indexOf(`/${this.item.route}`) === 0;
                this.ariaExpanded = this.expanded;
                // console.log(`${this.item.route} is expanded: ${this.expanded}`);
            }
        });
    }
    onItemSelected(item) {
        if (!item.submenu || !item.submenu.length) {
            if (item.route)
                this.router.navigate([item.route]);
            if (this.screenService.isSmall()) {
                // console.log(this.navService.appDrawer)
                // debugger;
                // Close Sidebar after select item
                this.navService.closeNav();
                // this.menuService.toggleMenu();
            }
        }
        if (item.submenu && item.submenu.length) {
            this.expanded = !this.expanded;
        }
    }
};
SidebarMenuComponent.ctorParameters = () => [
    { type: src_spa_services_nav_service__WEBPACK_IMPORTED_MODULE_5__["NavService"] },
    { type: src_spa_services_screen_service__WEBPACK_IMPORTED_MODULE_6__["ScreenService"] },
    { type: src_spa_services_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("attr.aria-expanded")
], SidebarMenuComponent.prototype, "ariaExpanded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarMenuComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SidebarMenuComponent.prototype, "depth", void 0);
SidebarMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "spa-sidebar-menu",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/spa/menus/sidebar-menu/sidebar-menu.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("indicatorRotate", [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "rotate(0deg)" })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("expanded", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: "rotate(180deg)" })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("expanded <=> collapsed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("225ms cubic-bezier(0.4,0.0,0.2,1)"))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar-menu.component.css */ "./src/spa/menus/sidebar-menu/sidebar-menu.component.css")).default]
    })
], SidebarMenuComponent);



/***/ }),

/***/ "./src/spa/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/spa/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }
    success(message, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    }
    error(message, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    }
    getMessage() {
        return this.subject.asObservable();
    }
};
AlertService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AlertService);



/***/ }),

/***/ "./src/spa/services/menu.service.ts":
/*!******************************************!*\
  !*** ./src/spa/services/menu.service.ts ***!
  \******************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuService = class MenuService {
    constructor() {
        this.isVertical = false;
        this.showVerticalMenu = false;
    }
    toggleMenu() {
        this.isVertical = true;
        this.showVerticalMenu = !this.showVerticalMenu;
    }
    toggleOrientation() {
        this.isVertical = !this.isVertical;
    }
};
MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MenuService);



/***/ }),

/***/ "./src/spa/services/nav.service.ts":
/*!*****************************************!*\
  !*** ./src/spa/services/nav.service.ts ***!
  \*****************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let NavService = class NavService {
    constructor(router) {
        this.router = router;
        this.currentUrl = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.currentUrl.next(event.urlAfterRedirects);
            }
        });
    }
    closeNav() {
        this.appDrawer.close();
    }
    openNav() {
        this.appDrawer.open();
    }
};
NavService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
NavService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NavService);



/***/ }),

/***/ "./src/spa/services/screen.service.ts":
/*!********************************************!*\
  !*** ./src/spa/services/screen.service.ts ***!
  \********************************************/
/*! exports provided: ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return ScreenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ScreenService = class ScreenService {
    constructor() {
        this.resizeSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.resize$ = this.resizeSource.asObservable();
        this.largePixels = 850;
        try {
            this.screenWidth = window.innerWidth;
            this.screenHeight = window.innerHeight;
            window.addEventListener("resize", event => this.onResize(event));
        }
        catch (e) {
            console.error(e);
        }
    }
    onResize(event) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.resizeSource.next();
    }
    isLarge() {
        return this.screenWidth >= this.largePixels;
    }
    isSmall() {
        return this.screenWidth < this.largePixels;
    }
};
ScreenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ScreenService);



/***/ }),

/***/ "./src/spa/services/spa-config.service.ts":
/*!************************************************!*\
  !*** ./src/spa/services/spa-config.service.ts ***!
  \************************************************/
/*! exports provided: SpaConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaConfigService", function() { return SpaConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let SpaConfigService = class SpaConfigService {
    constructor(httpClient, matIconRegistry, domSanitizer) {
        this.httpClient = httpClient;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.showUserControls = true;
        this.socialIcons = new Array();
    }
    configure(settings) {
        // Assign transferred settings to that element from which method 'configure' was called.
        Object.assign(this, settings);
    }
    addSvgIcon(iconName) {
        // this.appConfigService.getSvgFile(`../assets/svg/${iconName}.svg`).subscribe(element => {
        //   console.log(element);
        this.matIconRegistry.addSvgIcon(iconName, this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/svg/${iconName}.svg`));
        // });
    }
};
SpaConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
SpaConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], SpaConfigService);



/***/ }),

/***/ "./src/spa/spa.module.ts":
/*!*******************************!*\
  !*** ./src/spa/spa.module.ts ***!
  \*******************************/
/*! exports provided: SpaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaModule", function() { return SpaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/spa/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/content.component */ "./src/spa/content/content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/spa/footer/footer.component.ts");
/* harmony import */ var _services_spa_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/spa-config.service */ "./src/spa/services/spa-config.service.ts");
/* harmony import */ var _icon_bar_icon_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icon-bar/icon-bar.component */ "./src/spa/icon-bar/icon-bar.component.ts");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/screen.service */ "./src/spa/services/screen.service.ts");
/* harmony import */ var _directives_screen_small_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/screen-small.directive */ "./src/spa/directives/screen-small.directive.ts");
/* harmony import */ var _directives_screen_large_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/screen-large.directive */ "./src/spa/directives/screen-large.directive.ts");
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/menu.service */ "./src/spa/services/menu.service.ts");
/* harmony import */ var _menus_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menus/menu/menu.component */ "./src/spa/menus/menu/menu.component.ts");
/* harmony import */ var _menus_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menus/popup-menu/popup-menu.component */ "./src/spa/menus/popup-menu/popup-menu.component.ts");
/* harmony import */ var _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./users/sign-in/sign-in.component */ "./src/spa/users/sign-in/sign-in.component.ts");
/* harmony import */ var _users_registration_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users/registration/registration.component */ "./src/spa/users/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_nav_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/nav.service */ "./src/spa/services/nav.service.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/alert.service */ "./src/spa/services/alert.service.ts");
/* harmony import */ var _users_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./users/password-reset/password-reset.component */ "./src/spa/users/password-reset/password-reset.component.ts");
/* harmony import */ var _app_angular_material_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../app/angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./body/body.component */ "./src/spa/body/body.component.ts");
/* harmony import */ var _menus_sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./menus/sidebar-menu/sidebar-menu.component */ "./src/spa/menus/sidebar-menu/sidebar-menu.component.ts");
/* harmony import */ var _dynamicForms_dynamic_field_dynamic_field_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dynamicForms/dynamic-field/dynamic-field.component */ "./src/spa/dynamicForms/dynamic-field/dynamic-field.component.ts");
/* harmony import */ var _dynamicForms_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dynamicForms/dynamic-form/dynamic-form.component */ "./src/spa/dynamicForms/dynamic-form/dynamic-form.component.ts");





























let SpaModule = class SpaModule {
};
SpaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _body_body_component__WEBPACK_IMPORTED_MODULE_25__["BodyComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
            _content_content_component__WEBPACK_IMPORTED_MODULE_4__["ContentComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
            _icon_bar_icon_bar_component__WEBPACK_IMPORTED_MODULE_7__["IconBarComponent"],
            _menus_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
            _menus_popup_menu_popup_menu_component__WEBPACK_IMPORTED_MODULE_13__["PopupMenuComponent"],
            _users_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__["SignInComponent"],
            _users_registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"],
            _users_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_19__["PasswordResetComponent"],
            _menus_sidebar_menu_sidebar_menu_component__WEBPACK_IMPORTED_MODULE_26__["SidebarMenuComponent"],
            _directives_screen_small_directive__WEBPACK_IMPORTED_MODULE_9__["ScreenSmallDirective"],
            _directives_screen_large_directive__WEBPACK_IMPORTED_MODULE_10__["ScreenLargeDirective"],
            _dynamicForms_dynamic_field_dynamic_field_component__WEBPACK_IMPORTED_MODULE_27__["DynamicFieldComponent"],
            _dynamicForms_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_28__["DynamicFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _app_angular_material_module__WEBPACK_IMPORTED_MODULE_20__["AngularMaterialModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"]
        ],
        exports: [_body_body_component__WEBPACK_IMPORTED_MODULE_25__["BodyComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _dynamicForms_dynamic_field_dynamic_field_component__WEBPACK_IMPORTED_MODULE_27__["DynamicFieldComponent"]],
        providers: [_services_spa_config_service__WEBPACK_IMPORTED_MODULE_6__["SpaConfigService"], _services_screen_service__WEBPACK_IMPORTED_MODULE_8__["ScreenService"], _services_menu_service__WEBPACK_IMPORTED_MODULE_11__["MenuService"], _services_nav_service__WEBPACK_IMPORTED_MODULE_17__["NavService"], _services_alert_service__WEBPACK_IMPORTED_MODULE_18__["AlertService"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], SpaModule);



/***/ }),

/***/ "./src/spa/users/password-reset/password-reset.component.css":
/*!*******************************************************************!*\
  !*** ./src/spa/users/password-reset/password-reset.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvc3BhL3VzZXJzL3Bhc3N3b3JkLXJlc2V0L3Bhc3N3b3JkLXJlc2V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/spa/users/password-reset/password-reset.component.ts":
/*!******************************************************************!*\
  !*** ./src/spa/users/password-reset/password-reset.component.ts ***!
  \******************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PasswordResetComponent = class PasswordResetComponent {
    constructor() { }
    ngOnInit() {
    }
};
PasswordResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-reset',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-reset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/spa/users/password-reset/password-reset.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-reset.component.css */ "./src/spa/users/password-reset/password-reset.component.css")).default]
    })
], PasswordResetComponent);



/***/ }),

/***/ "./src/spa/users/registration/registration.component.css":
/*!***************************************************************!*\
  !*** ./src/spa/users/registration/registration.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* * {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n} */\n\n.divider {\n  border-top: 1px solid #d9dadc;\n  display: block;\n  line-height: 1px;\n  position: relative;\n  text-align: center;\n  margin: 30px 0;\n}\n\n.app-header {\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),\n    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\nmat-card-content {\n  margin-bottom: 16px;\n}\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-infix,\n::ng-deep .mat-button-wrapper {\n  padding: 0.8375em 0;\n}\n\n::ng-deep .mat-form-field-underline {\n  background-color: rgb(217, 218, 220) !important;\n  color: rgb(217, 218, 220) !important;\n}\n\n::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: rgb(145, 145, 145);\n}\n\n::ng-deep .mat-datepicker-toggle,\n::ng-deep .mat-select-arrow {\n  color: #000;\n}\n\n::ng-deep .mat-checkbox-frame, \n::ng-deep .mat-radio-outer-circle  {\n  border-color: rgb(145, 145, 145) !important;\n}\n\n::ng-deep .mat-checkbox-checkmark-path {\n  stroke: #fff !important; \n}\n\n::ng-deep .mat-checkbox-label, \n::ng-deep .mat-radio-label-content {\n  color: rgb(145, 145, 145);\n  line-height: 1.2rem !important;\n  white-space: normal !important;\n}\n\n::ng-deep .mat-checkbox-label {\n  font-size: 0.8rem;\n}\n\n::ng-deep .mat-radio-button {\n  padding-right: 15px;\n  margin: 10px 0;\n}\n\n:host ::ng-deep .mat-radio-container{\n  height: 16px;\n  width: 16px;\n}\n\n:host ::ng-deep .mat-radio-outer-circle{\n  height: 16px;\n  width: 16px;\n}\n\n:host ::ng-deep .mat-radio-inner-circle{\n  height: 16px;\n  width: 16px;\n}\n\n:host ::ng-deep .mat-radio-button .mat-radio-ripple{\n  height: 32px; /*double of your required circle radius*/\n  width: 32px;  /*double of your required circle radius*/\n  left: calc(50% - 16px); /*'10px'-same as your required circle radius*/\n  top: calc(50% - 16px); /*'10px'-same as your required circle radius*/\n}\n\n.background {\n  position: fixed; \n  top: -50%;\n  left: -50%; \n  width: 200%; \n  height: 200%;\n  background-image: url(\"http://prod-upp-image-read.ft.com/75f94f02-be86-11e9-9381-78bab8a70848\") !important;\n  filter: blur(2px);\n  -webkit-filter: blur(2px);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.register-wrapper {\n  min-height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.register-wrapper mat-card {\n  padding: 5vh 5.9vw 6vh;\n  border-radius: 6px;\n}\n\n.positronx {\n  text-decoration: none;\n  /* color: #ffffff; */\n}\n\n.box {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 330px;\n  margin: 50px 0;\n}\n\n.box.back {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.box:before {\n  content: \"\";\n  width: 100%;\n  height: 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: -10px;\n  background: rgba(255, 255, 255, 0.7);\n  left: 0;\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  z-index: -1;\n}\n\n.register-wrapper .example-form {\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n\n.register-wrapper .example-full-width,\n.register-wrapper .btn-block {\n  width: 100%;\n}\n\n.register-wrapper mat-card-header {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.register-wrapper mat-card-header mat-card-title {\n  font-size: 30px;\n  margin: 0;\n}\n\n.register-wrapper .mat-card {\n  padding: 40px 70px 50px;\n}\n\n.register-wrapper .mat-raised-button {\n  border-radius: 30px;\n  line-height: 3rem;\n  letter-spacing: 0.15em;\n  font-weight: 800;\n}\n\n.register-wrapper .mat-stroked-button {\n  border: 0.1rem solid #616467;\n  border-radius: 30px;\n  color: #4e5153;\n  line-height: 2.9rem;\n  background: #ffffff;\n  margin-top: 16px;\n  letter-spacing: 0.15em;\n  font-weight: 500;\n}\n\n.register-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.8375em 0;\n}\n\n.register-wrapper .sign-in > * {\n  align-self: center;\n  font-size: 0.9rem;\n}\n\n.register-wrapper .sign-up,\n.register-wrapper .forgot-pass,\n.register-wrapper .sign-in {\n  display: flex;\n  justify-content: center;\n}\n\n.register-wrapper .sign-up {\n  font-weight: 600;\n  padding: 5px 0;\n  margin-top: 20px;\n}\n\n.register-wrapper .forgot-pass {\n  padding-top: 15px;\n}\n\n.register-wrapper .sign-in {\n  margin-top: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcGEvdXNlcnMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7R0FHRzs7QUFFSDtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsVUFBVTtFQUNWO3NFQUNvRTtBQUN0RTs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwrQ0FBK0M7RUFDL0Msb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBOztFQUVFLFdBQVc7QUFDYjs7QUFDQTs7RUFFRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5Qiw4QkFBOEI7QUFDaEM7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVksRUFBRSx3Q0FBd0M7RUFDdEQsV0FBVyxHQUFHLHdDQUF3QztFQUN0RCxzQkFBc0IsRUFBRSw2Q0FBNkM7RUFDckUscUJBQXFCLEVBQUUsNkNBQTZDO0FBQ3RFOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWiwwR0FBMEc7RUFDMUcsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG9DQUFvQztFQUNwQyxPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsV0FBVztBQUNiOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBQ0E7O0VBRUUsV0FBVztBQUNiOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFDQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL3NwYS91c2Vycy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufSAqL1xuXG4uZGl2aWRlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDlkYWRjO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGluZS1oZWlnaHQ6IDFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxubWF0LWNhcmQtY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4LFxuOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwLjgzNzVlbSAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDIxOCwgMjIwKSAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiKDIxNywgMjE4LCAyMjApICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZW1wdHkubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiKDE0NSwgMTQ1LCAxNDUpO1xufVxuOjpuZy1kZWVwIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG46Om5nLWRlZXAgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogIzAwMDtcbn1cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWZyYW1lLCBcbjo6bmctZGVlcCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSAge1xuICBib3JkZXItY29sb3I6IHJnYigxNDUsIDE0NSwgMTQ1KSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gIHN0cm9rZTogI2ZmZiAhaW1wb3J0YW50OyBcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtbGFiZWwsIFxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gIGNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW0gIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LXJhZGlvLWNvbnRhaW5lcntcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZXtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZXtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXJhZGlvLWJ1dHRvbiAubWF0LXJhZGlvLXJpcHBsZXtcbiAgaGVpZ2h0OiAzMnB4OyAvKmRvdWJsZSBvZiB5b3VyIHJlcXVpcmVkIGNpcmNsZSByYWRpdXMqL1xuICB3aWR0aDogMzJweDsgIC8qZG91YmxlIG9mIHlvdXIgcmVxdWlyZWQgY2lyY2xlIHJhZGl1cyovXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTZweCk7IC8qJzEwcHgnLXNhbWUgYXMgeW91ciByZXF1aXJlZCBjaXJjbGUgcmFkaXVzKi9cbiAgdG9wOiBjYWxjKDUwJSAtIDE2cHgpOyAvKicxMHB4Jy1zYW1lIGFzIHlvdXIgcmVxdWlyZWQgY2lyY2xlIHJhZGl1cyovXG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkOyBcbiAgdG9wOiAtNTAlO1xuICBsZWZ0OiAtNTAlOyBcbiAgd2lkdGg6IDIwMCU7IFxuICBoZWlnaHQ6IDIwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly9wcm9kLXVwcC1pbWFnZS1yZWFkLmZ0LmNvbS83NWY5NGYwMi1iZTg2LTExZTktOTM4MS03OGJhYjhhNzA4NDhcIikgIWltcG9ydGFudDtcbiAgZmlsdGVyOiBibHVyKDJweCk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDJweCk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnJlZ2lzdGVyLXdyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucmVnaXN0ZXItd3JhcHBlciBtYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDV2aCA1Ljl2dyA2dmg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLnBvc2l0cm9ueCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgLyogY29sb3I6ICNmZmZmZmY7ICovXG59XG4uYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgei1pbmRleDogNTtcbiAgbWF4LXdpZHRoOiAzMzBweDtcbiAgbWFyZ2luOiA1MHB4IDA7XG59XG4uYm94LmJhY2sge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0b3A6IC0yMHB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIHotaW5kZXg6IC0xO1xufVxuLmJveDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgei1pbmRleDogLTE7XG59XG4ucmVnaXN0ZXItd3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZWdpc3Rlci13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsXG4ucmVnaXN0ZXItd3JhcHBlciAuYnRuLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucmVnaXN0ZXItd3JhcHBlciBtYXQtY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5yZWdpc3Rlci13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwO1xufVxuLnJlZ2lzdGVyLXdyYXBwZXIgLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogNDBweCA3MHB4IDUwcHg7XG59XG4ucmVnaXN0ZXItd3JhcHBlciAubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnJlZ2lzdGVyLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICM2MTY0Njc7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiAjNGU1MTUzO1xuICBsaW5lLWhlaWdodDogMi45cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucmVnaXN0ZXItd3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC44Mzc1ZW0gMDtcbn1cblxuLnJlZ2lzdGVyLXdyYXBwZXIgLnNpZ24taW4gPiAqIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLnJlZ2lzdGVyLXdyYXBwZXIgLnNpZ24tdXAsXG4ucmVnaXN0ZXItd3JhcHBlciAuZm9yZ290LXBhc3MsXG4ucmVnaXN0ZXItd3JhcHBlciAuc2lnbi1pbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVnaXN0ZXItd3JhcHBlciAuc2lnbi11cCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucmVnaXN0ZXItd3JhcHBlciAuZm9yZ290LXBhc3Mge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLnJlZ2lzdGVyLXdyYXBwZXIgLnNpZ24taW4ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/spa/users/registration/registration.component.ts":
/*!**************************************************************!*\
  !*** ./src/spa/users/registration/registration.component.ts ***!
  \**************************************************************/
/*! exports provided: MyErrorStateMatcher, RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
let RegistrationComponent = class RegistrationComponent {
    constructor() {
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
    }
};
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/spa/users/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/spa/users/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/spa/users/sign-in/sign-in.component.css":
/*!*****************************************************!*\
  !*** ./src/spa/users/sign-in/sign-in.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".divider {\n  border-top: 1px solid #d9dadc;\n  display: block;\n  line-height: 1px;\n  margin: 15px 0;\n  position: relative;\n  text-align: center;\n  margin: 30px 0;\n}\n\n.app-header {\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),\n    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\nmat-card-content {\n  margin-bottom: 16px;\n}\n\n::ng-deep .mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.8375em 0;\n}\n\n::ng-deep .mat-form-field-underline {\n  background-color: rgb(217, 218, 220) !important;\n  color: rgb(217, 218, 220) !important;\n}\n\n::ng-deep .mat-form-field-empty.mat-form-field-label {\n  color: rgb(145, 145, 145);\n}\n\n::ng-deep .mat-checkbox-frame {\n  border-color: #c2185b;\n}\n\n::ng-deep .mat-checkbox-checkmark-path {\n  stroke: #fff !important;\n}\n\n::ng-deep .mat-checkbox-label {\n  color: #4e5153;\n}\n\n.loader {\n  display: flex;\n  justify-content: center;\n  padding-top: 10px;\n}\n\n.background {\n  background-image: url(\"http://prod-upp-image-read.ft.com/75f94f02-be86-11e9-9381-78bab8a70848\") !important;\n  filter: blur(2px);\n  -webkit-filter: blur(2px);\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.login-wrapper {\n  height: 100%;\n  min-height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.login-wrapper mat-card {\n  padding: 5vh 5.9vw 6vh;\n  border-radius: 6px;\n}\n\n.positronx {\n  text-decoration: none;\n  /* color: #ffffff; */\n}\n\n.box {\n  position: relative;\n  top: 0;\n  opacity: 1;\n  float: left;\n  padding: 60px 50px 40px 50px;\n  width: 100%;\n  background: #fff;\n  border-radius: 10px;\n  transform: scale(1);\n  -webkit-transform: scale(1);\n  -ms-transform: scale(1);\n  z-index: 5;\n  max-width: 330px;\n}\n\n.box.back {\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  top: -20px;\n  opacity: 0.8;\n  z-index: -1;\n}\n\n.box:before {\n  content: \"\";\n  width: 100%;\n  height: 30px;\n  border-radius: 10px;\n  position: absolute;\n  top: -10px;\n  background: rgba(255, 255, 255, 0.7);\n  left: 0;\n  transform: scale(0.95);\n  -webkit-transform: scale(0.95);\n  -ms-transform: scale(0.95);\n  z-index: -1;\n}\n\n.login-wrapper .example-form {\n  min-width: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n\n.login-wrapper .example-full-width,\n.login-wrapper .btn-block {\n  width: 100%;\n}\n\n.login-wrapper mat-card-header {\n  text-align: center;\n  width: 100%;\n  display: block;\n  font-weight: 700;\n}\n\n.login-wrapper mat-card-header mat-card-title {\n  font-size: 30px;\n  margin: 0;\n}\n\n.login-wrapper .mat-card {\n  padding: 40px 70px 50px;\n}\n\n.login-wrapper .mat-raised-button {\n  border-radius: 30px;\n  line-height: 3rem;\n  width: 50%;\n  letter-spacing: 0.15em;\n  font-weight: 800;\n}\n\n.login-wrapper .mat-stroked-button {\n  border: 0.1rem solid #616467;\n  border-radius: 30px;\n  color: #4e5153;\n  line-height: 2.9rem;\n  background: #ffffff;\n  margin-top: 16px;\n  letter-spacing: 0.15em;\n  font-weight: 500;\n}\n\n.login-wrapper .mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.8375em 0;\n}\n\n.login-wrapper .sign-in {\n  margin-top: 16px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.login-wrapper .sign-in > * {\n  align-self: center;\n}\n\n.login-wrapper .sign-up,\n.login-wrapper .forgot-pass {\n  display: flex;\n  justify-content: center;\n}\n\n.login-wrapper .sign-up {\n  font-weight: 600;\n  padding: 5px 0;\n}\n\n.login-wrapper .forgot-pass {\n  padding-top: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zcGEvdXNlcnMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1Y7c0VBQ29FO0FBQ3RFOztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBHQUEwRztFQUMxRyxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTtFQUNWLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysb0NBQW9DO0VBQ3BDLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFDQTs7RUFFRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL3NwYS91c2Vycy9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZpZGVyIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWRhZGM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMXB4O1xuICBtYXJnaW46IDE1cHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG4uYXBwLWhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyO1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxubWF0LWNhcmQtY29udGVudCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC44Mzc1ZW0gMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCAyMTgsIDIyMCkgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYigyMTcsIDIxOCwgMjIwKSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWVtcHR5Lm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYigxNDUsIDE0NSwgMTQ1KTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItY29sb3I6ICNjMjE4NWI7XG59XG5cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgc3Ryb2tlOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgY29sb3I6ICM0ZTUxNTM7XG59XG5cbi5sb2FkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59IFxuXG4uYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly9wcm9kLXVwcC1pbWFnZS1yZWFkLmZ0LmNvbS83NWY5NGYwMi1iZTg2LTExZTktOTM4MS03OGJhYjhhNzA4NDhcIikgIWltcG9ydGFudDtcbiAgZmlsdGVyOiBibHVyKDJweCk7XG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDJweCk7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubG9naW4td3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmxvZ2luLXdyYXBwZXIgbWF0LWNhcmQge1xuICBwYWRkaW5nOiA1dmggNS45dncgNnZoO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5wb3NpdHJvbngge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC8qIGNvbG9yOiAjZmZmZmZmOyAqL1xufVxuLmJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAxO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNjBweCA1MHB4IDQwcHggNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHotaW5kZXg6IDU7XG4gIG1heC13aWR0aDogMzMwcHg7XG59XG4uYm94LmJhY2sge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICB0b3A6IC0yMHB4O1xuICBvcGFjaXR5OiAwLjg7XG4gIHotaW5kZXg6IC0xO1xufVxuLmJveDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcbiAgei1pbmRleDogLTE7XG59XG4ubG9naW4td3JhcHBlciAuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5sb2dpbi13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsXG4ubG9naW4td3JhcHBlciAuYnRuLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubG9naW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5sb2dpbi13cmFwcGVyIG1hdC1jYXJkLWhlYWRlciBtYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbWFyZ2luOiAwO1xufVxuLmxvZ2luLXdyYXBwZXIgLm1hdC1jYXJkIHtcbiAgcGFkZGluZzogNDBweCA3MHB4IDUwcHg7XG59XG4ubG9naW4td3JhcHBlciAubWF0LXJhaXNlZC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDUwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gIGJvcmRlcjogMC4xcmVtIHNvbGlkICM2MTY0Njc7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiAjNGU1MTUzO1xuICBsaW5lLWhlaWdodDogMi45cmVtO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubG9naW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC44Mzc1ZW0gMDtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLnNpZ24taW4ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5sb2dpbi13cmFwcGVyIC5zaWduLWluID4gKiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLnNpZ24tdXAsXG4ubG9naW4td3JhcHBlciAuZm9yZ290LXBhc3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLnNpZ24tdXAge1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLmxvZ2luLXdyYXBwZXIgLmZvcmdvdC1wYXNzIHtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/spa/users/sign-in/sign-in.component.ts":
/*!****************************************************!*\
  !*** ./src/spa/users/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_spa_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/spa/services/alert.service */ "./src/spa/services/alert.service.ts");
/* harmony import */ var _users_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users-api */ "./src/spa/users/users-api.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SignInComponent = class SignInComponent {
    constructor(alertService, userApi, userService, router) {
        this.alertService = alertService;
        this.userApi = userApi;
        this.userService = userService;
        this.router = router;
        this.hide = true;
        this.submitting = false;
    }
    onSubmit(signInForm) {
        if (signInForm.valid) {
            this.submitting = true;
            this.formError = null;
            this.userApi
                .signIn(signInForm.value.username, signInForm.value.password)
                .subscribe(data => {
                this.router.navigate(["/authenticated"]);
            }, error => {
                this.submitting = false;
                this.formError = error;
            });
        }
    }
    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => {
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
SignInComponent.ctorParameters = () => [
    { type: src_spa_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] },
    { type: _users_api__WEBPACK_IMPORTED_MODULE_3__["UserApi"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sign-in",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/spa/users/sign-in/sign-in.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in.component.css */ "./src/spa/users/sign-in/sign-in.component.css")).default]
    })
], SignInComponent);



/***/ }),

/***/ "./src/spa/users/users-api.ts":
/*!************************************!*\
  !*** ./src/spa/users/users-api.ts ***!
  \************************************/
/*! exports provided: UserApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return UserApi; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UserApi {
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Default/carsharing/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);