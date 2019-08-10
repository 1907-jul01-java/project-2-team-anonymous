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

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation\" data-sidebarClass=\"navbar-dark bg-dark\">\r\n        <div class=\"container-fluid\">\r\n        <a class=\"navbar-brand\" href=\"#\">Anonymous</a>\r\n        <button class=\"navbar-toggler leftNavbarToggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\r\n            aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n            <ul class=\"nav navbar-nav nav-flex-icons ml-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['product']\">Add Products</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['transaction']\">Transaction</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['inventory']\">Inventory</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n\t\t\t\t\t <a class=\"nav-link\" [routerLink]=\"['']\" >Log Out</a>\r\n                </li>\r\n\t\t\t</ul>\r\n           <!--  <form class=\"form-inline my-2 my-lg-0\">\r\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form> -->\r\n        </div>\r\n    </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/inventory/inventory.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/inventory/inventory.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"well\">\n            <h1 class=\"text-center\">Products</h1>\n            <ul *ngFor=\"let product of products\" class=\"list-group\" style=\"list-style: none;\">\n                <li>\n                    <a href=\"#\" class=\"list-group-item\">\n                        <div class=\"media col-md-3\">\n                            <figure class=\"pull-left\">\n                                <img class=\"media-object img-rounded img-responsive\" src=\"http://placehold.it/350x250\"\n                                    alt=\"placehold.it/350x250\">\n                            </figure>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <h4 class=\"list-group-item-heading\"> {{product.name}} </h4>\n                            <p class=\"list-group-item-text\"> {{product.description}}</p>\n                            <p class=\"list-group-item-text\"> {{product.price}}\n                            </p>\n                        </div>\n                    </a>\n                    <hr>\n                </li>\n            </ul>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/product/product.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/product/product.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"text-center\">Add a product</h2>\n    <div class=\"row justify-content-center\">\n        <div class=\"col-12 col-md-8 col-lg-6 pb-5\">\n\n            <!--Form with header-->\n\n            <form (submit)=\"addproduct()\">\n                <div class=\"card border-primary rounded-0\">\n                    <div class=\"card-header p-0\">\n                        <div class=\"bg-info text-white text-center py-2\">\n                            <h3><i class=\"fa fa-comment text-info\"></i>product</h3>\n                        </div>\n                    </div>\n                    <div class=\"card-body p-3\">\n\n                        <!--Body-->\n                        <div class=\"form-group\">\n                            <div class=\"input-group mb-2\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-comment text-info\"></i></div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"product.name\" name=\"name\" class=\"form-control\"\n                                    placeholder=\"name\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group mb-2\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-comment text-info\"></i></div>\n                                </div>\n                                <input type=\"number\" [(ngModel)]=\"product.quantity\" name=\"quantity\" class=\"form-control\"\n                                    placeholder=\"quantities\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group mb-2\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-comment text-info\"></i></div>\n                                </div>\n                                <input type=\"text\" [(ngModel)]=\"product.image\" name=\"image\" class=\"form-control\"\n                                    placeholder=\"image url\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group mb-2\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-comment text-info\"></i></div>\n                                </div>\n                                <input type=\"number\" [(ngModel)]=\"product.price\" name=\"price\" class=\"form-control\"\n                                    placeholder=\"price\" required>\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <div class=\"input-group mb-2\">\n                                <div class=\"input-group-prepend\">\n                                    <div class=\"input-group-text\"><i class=\"fa fa-comment text-info\"></i></div>\n                                </div>\n                                <textarea [(ngModel)]=\"product.description\" name=\"description\" class=\"form-control\"\n                                    placeholder=\"Enter Description\" required></textarea>\n                            </div>\n                        </div>\n\n                        <div class=\"text-center\">\n                            <input type=\"submit\" value=\"Submit Product\" class=\"btn btn-info btn-block rounded-0 py-2\">\n                        </div>\n                    </div>\n\n                </div>\n            </form>\n            <!--Form with header-->\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/transaction/transaction.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/transaction/transaction.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>transaction works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/adminlogin/adminlogin.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/adminlogin/adminlogin.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-box\" >\r\n\t<div class=\"login-header\">Admin Login</div>\r\n\t<div class=\"login-body\">\r\n\t\t<form (submit) = \"adminlogin()\" class=\"form-group\">\r\n\t\t\t<label>Username</label>\r\n\t\t\t<input type=\"text\" name=\"adminname\" [(ngModel)]= \"admin.adminname\" class=\"form-control\" >\r\n\t\t\t<label>Password</label>\r\n\t\t\t<input type=\"password\" name=\"password\" [(ngModel)]=\"admin.password\" class=\"form-control\">\r\n\t\t\t<input type=\"checkbox\" value=\"checked\"><b>Remember</b>\r\n\t\t\t<input type=\"submit\" value=\"Login\" class=\"form-control btn btn-success \">\r\n\t\t</form>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation\" data-sidebarClass=\"navbar-dark bg-dark\">\r\n        <div class=\"container-fluid\">\r\n        <a class=\"navbar-brand\" href=\"#\">Anonymous</a>\r\n        <button class=\"navbar-toggler leftNavbarToggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\r\n            aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n            <ul class=\"nav navbar-nav nav-flex-icons ml-auto\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#\">Home\r\n                        <span class=\"sr-only\">(current)</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\">Link</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#\">Disabled</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n\t\t\t\t\t <a class=\"nav-link\" [routerLink]=\"['/signup']\" >My Account</a>\r\n                </li>\r\n\t\t\t</ul>\r\n           <!--  <form class=\"form-inline my-2 my-lg-0\">\r\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form> -->\r\n        </div>\r\n    </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/signup/signup.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/signup/signup.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"container\">\r\n        <h2 class=\"text-center\" id=\"title\">Anonymous</h2>\r\n\r\n        <hr>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\">\r\n                <form (submit)=\"create()\" role=\"form\">\r\n                    <fieldset>\r\n                        <p class=\"text-uppercase pull-center\"> SIGN UP.</p>\r\n                        <div class=\"form-group\">\r\n                            <input name=\"first name\" [(ngModel)]=\"user.username\" id=\"username\"\r\n                                class=\"form-control input-lg\" placeholder=\"UserName\" type=\"text\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input name=\"first name\" [(ngModel)]=\"user.firstname\" id=\"password\"\r\n                                class=\"form-control input-lg\" placeholder=\"First Name\" type=\"text\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input name=\"password\" id=\"password2\" class=\"form-control input-lg\"\r\n                                [(ngModel)]=\"user.password\" placeholder=\"Password\" type=\"password\">\r\n                        </div>\r\n                        <div class=\"form-check\">\r\n                            <label class=\"form-check-label\">\r\n                                <input type=\"checkbox\" class=\"form-check-input\">\r\n                                By Clicking register you're agree to our policy & terms\r\n                            </label>\r\n                        </div>\r\n                        <div>\r\n                            <input type=\"submit\" class=\"btn btn-primary\" value=\" Register\">\r\n                        </div>\r\n                    </fieldset>\r\n                </form>\r\n            </div>\r\n\r\n            <div class=\"col-md-2\">\r\n                <!-------null------>\r\n            </div>\r\n\r\n            <div class=\"col-md-5\">\r\n                <form (submit)=\"login()\" role=\"form\" >\r\n                    <fieldset>\r\n                        <p class=\"text-uppercase\"> Login using your account: </p>\r\n\r\n                        <div class=\"form-group\">\r\n                            <input type=\"email\" name=\"username\" [(ngModel)]=\"loginUser.username\" id=\"username\" class=\"form-control input-lg\"\r\n                                placeholder=\"username\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <input type=\"password\" name=\"password\" [(ngModel)]=\"loginUser.password\" id=\"password\" class=\"form-control input-lg\"\r\n                                placeholder=\"Password\">\r\n                        </div>\r\n                        <div>\r\n                            <!-- <input type=\"submit\" class=\"btn btn-success\" value=\"Sign In\"> -->\r\n                            <input type=\"submit\" class=\"btn btn-primary\" value=\" Login\">\r\n                        </div>\r\n\r\n                    </fieldset>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/account/account.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/account/account.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-9  admin-content\" id=\"profile\">\r\n\t\t\t<div class=\"panel panel-info\" style=\"margin: 1em;\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">Name</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\tTest User\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel panel-info\" style=\"margin: 1em;\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">Email</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\ttestuser@gmail.com\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"panel panel-info\" style=\"margin: 1em;\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t<h3 class=\"panel-title\">Purchase History</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\tPurchase detail\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-9  admin-content\" id=\"change-password\">\r\n\t\t\t<form action=\"/password\" method=\"post\">\r\n\r\n\r\n\t\t\t\t<div class=\"panel panel-info\" style=\"margin: 1em;\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\"><label for=\"new_password\" class=\"control-label panel-title\">New\r\n\t\t\t\t\t\t\t\tPassword</label></h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" id=\"new_password\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div class=\"panel panel-info\" style=\"margin: 1em;\">\r\n\t\t\t\t\t<div class=\"panel-heading\">\r\n\t\t\t\t\t\t<h3 class=\"panel-title\"><label for=\"confirm_password\" class=\"control-label panel-title\">Confirm\r\n\t\t\t\t\t\t\t\tpassword</label></h3>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password_confirmation\"\r\n\t\t\t\t\t\t\t\t\tid=\"confirm_password\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"pull-left\">\r\n\t\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" name=\"submit\" id=\"submit\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col-md-9  admin-content\" id=\"settings\"></div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/cart/cart.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/cart/cart.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<table id=\"cart\" class=\"table table-hover table-condensed\">\r\n\t\t<thead>\r\n\t\t\t<tr>\r\n\t\t\t\t<th style=\"width:50%\">Product</th>\r\n\t\t\t\t<th style=\"width:10%\">Price</th>\r\n\t\t\t\t<th style=\"width:8%\">Quantity</th>\r\n\t\t\t\t<th style=\"width:22%\" class=\"text-center\">Subtotal</th>\r\n\t\t\t\t<th style=\"width:10%\"></th>\r\n\t\t\t</tr>\r\n\t\t</thead>\r\n\t\t<tbody>\r\n\t\t\t<tr>\r\n\t\t\t\t<td data-th=\"Product\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-2 hidden-xs\"><img src=\"http://placehold.it/100x100\" alt=\"...\"\r\n\t\t\t\t\t\t\t\tclass=\"img-responsive\" /></div>\r\n\t\t\t\t\t\t<div class=\"col-sm-10\">\r\n\t\t\t\t\t\t\t<h4 class=\"nomargin\">Product 1</h4>\r\n\t\t\t\t\t\t\t<p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\r\n\t\t\t\t\t\t\t\tpariatur. Lorem ipsum dolor sit amet.</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</td>\r\n\t\t\t\t<td data-th=\"Price\">$150.00</td>\r\n\t\t\t\t<td data-th=\"Quantity\">\r\n\t\t\t\t\t<input type=\"number\" class=\"form-control text-center\" value=\"1\">\r\n\t\t\t\t</td>\r\n\t\t\t\t<td data-th=\"Subtotal\" class=\"text-center\">150.00</td>\r\n\t\t\t\t<td class=\"actions\" data-th=\"\">\r\n\t\t\t\t\t<button class=\"btn btn-info btn-sm\"><i class=\"fa fa-refresh\"></i></button>\r\n\t\t\t\t\t<button class=\"btn btn-danger btn-sm\"><i class=\"fa fa-trash-o\"></i></button>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</tbody>\r\n\t\t<tfoot>\r\n\t\t\t<tr class=\"visible-xs\">\r\n\t\t\t\t<td class=\"text-center\"><strong>Total 1.99</strong></td>\r\n\t\t\t</tr>\r\n\t\t\t<tr>\r\n\t\t\t\t<td><a href=\"#\" class=\"btn btn-warning\"><i class=\"fa fa-angle-left\"></i> Continue Shopping</a></td>\r\n\t\t\t\t<td colspan=\"2\" class=\"hidden-xs\"></td>\r\n\t\t\t\t<td class=\"hidden-xs text-center\"><strong>Total $150.00</strong></td>\r\n\t\t\t\t<td><a href=\"https://www.paypal.com/webapps/hermes?token=5EY097812P7754247&useraction=commit&mfid=1546377013907_cf1dec6830d7\"\r\n\t\t\t\t\t\tclass=\"btn btn-success btn-block\">Checkout <i class=\"fa fa-angle-right\"></i></a></td>\r\n\t\t\t</tr>\r\n\t\t</tfoot>\r\n\t</table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/checkproduct/checkproduct.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/checkproduct/checkproduct.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"span2\">\n      <img src=\"http://placehold.it/350x250\"  alt=\"\" class=\"img-rounded\">\n    </div>\n    <div class=\"span4\">\n      <blockquote>\n        <p>{{product.name}}</p>\n      </blockquote>\n      <p>\n        {{product.description}}<br>\n        <a [routerLink]=\"['/routePath']\" routerLinkActive=\"router-link-active\" >Add to cart</a><br>\n      </p>\n    </div>\n "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/shop/shop.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/shop/shop.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"well\">\r\n            <h1 class=\"text-center\">Products</h1>\r\n            <ul *ngFor=\"let product of products\" class=\"list-group\" style=\"list-style: none;\">\r\n                <li>\r\n                    <a href=\"#\" class=\"list-group-item\">\r\n                        <div class=\"media col-md-3\">\r\n                            <figure class=\"pull-left\">\r\n                                <a [routerLink]=\"[product.id]\">\r\n                                    <img class=\"media-object img-rounded img-responsive\" src=\"http://placehold.it/350x250\"\r\n                                        alt=\"placehold.it/350x250\">\r\n                                </a>\r\n                            </figure>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <h4 class=\"list-group-item-heading\"> {{product.name}} </h4>\r\n                            <p class=\"list-group-item-text\">Description: {{product.description}}</p><br>\r\n                            <p class=\"list-group-item-text\">Price: ${{product.price}}</p>\r\n                        </div>\r\n                    </a>\r\n                    <hr>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/user.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation\" data-sidebarClass=\"navbar-dark bg-dark\">\r\n        <div class=\"container-fluid\">\r\n        <a class=\"navbar-brand\" href=\"#\">Anonymous</a>\r\n        <button class=\"navbar-toggler leftNavbarToggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\"\r\n            aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n            <ul class=\"nav navbar-nav nav-flex-icons ml-auto\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['account']\">Account </a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['shop']\">Shop</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['cart']\">Cart(0)</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n\t\t\t\t\t <a class=\"nav-link\" [routerLink]=\"['']\" >Log Out</a>\r\n                </li>\r\n\t\t\t</ul>\r\n           <!--  <form class=\"form-inline my-2 my-lg-0\">\r\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n                <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n            </form> -->\r\n        </div>\r\n    </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/admin.service.ts":
/*!**********************************!*\
  !*** ./src/app/admin.service.ts ***!
  \**********************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AdminService = class AdminService {
    constructor(http) {
        this.http = http;
    }
    adminlogin(admin = {}) {
        console.log(admin);
        return this.http.post('/project2/adminlogin', admin);
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminService);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminComponent = class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/admin/inventory/inventory.component.css":
/*!*********************************************************!*\
  !*** ./src/app/admin/inventory/inventory.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.list-group-item {\r\n    height:auto;\r\n    min-height:220px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2ludmVudG9yeS9pbnZlbnRvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubGlzdC1ncm91cC1pdGVtIHtcclxuICAgIGhlaWdodDphdXRvO1xyXG4gICAgbWluLWhlaWdodDoyMjBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/inventory/inventory.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/inventory/inventory.component.ts ***!
  \********************************************************/
/*! exports provided: InventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryComponent", function() { return InventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let InventoryComponent = class InventoryComponent {
    constructor(productservice, router) {
        this.productservice = productservice;
        this.router = router;
        this.products = {};
    }
    ngOnInit() {
        this.getall();
    }
    getall() {
        this.productservice.getall().subscribe(result => {
            console.log(result);
            this.products = result;
        });
    }
};
InventoryComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
InventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory',
        template: __webpack_require__(/*! raw-loader!./inventory.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/inventory/inventory.component.html"),
        styles: [__webpack_require__(/*! ./inventory.component.css */ "./src/app/admin/inventory/inventory.component.css")]
    })
], InventoryComponent);



/***/ }),

/***/ "./src/app/admin/product/product.component.css":
/*!*****************************************************!*\
  !*** ./src/app/admin/product/product.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/product/product.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/product/product.component.ts ***!
  \****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ProductComponent = class ProductComponent {
    constructor(productservice, router) {
        this.productservice = productservice;
        this.router = router;
        this.product = {};
    }
    ngOnInit() {
    }
    addproduct() {
        this.productservice.addproduct(this.product).subscribe();
    }
};
ProductComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: __webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/product/product.component.html"),
        styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/admin/product/product.component.css")]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/admin/transaction/transaction.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin/transaction/transaction.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/transaction/transaction.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/transaction/transaction.component.ts ***!
  \************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TransactionComponent = class TransactionComponent {
    constructor() { }
    ngOnInit() {
    }
};
TransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction',
        template: __webpack_require__(/*! raw-loader!./transaction.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/transaction/transaction.component.html"),
        styles: [__webpack_require__(/*! ./transaction.component.css */ "./src/app/admin/transaction/transaction.component.css")]
    })
], TransactionComponent);



/***/ }),

/***/ "./src/app/adminlogin/adminlogin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/adminlogin/adminlogin.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-box\r\n\t\t{\r\n\t\t\theight: 50%;\r\n\t\t\twidth: 30%;\r\n\t\t\tborder: 1px solid grey;\r\n\t\t\tmargin-left: 35%;\r\n\t\t\tmargin-top: 10%;\r\n\t\t\tposition: relative;\r\n      \t\tbox-shadow: 21px 12px 24px 10px rgba(0, 0, 0, .5);\r\n      \t\tbackground: #dadada;\r\n\t\t}\r\n\t\t.login-header\r\n\t\t{\r\n\t\t\ttext-align: center;\r\n\t\t\tfont-family: \"vardhana\",cursive;\r\n\t\t\tfont-size: 35px;\r\n\t\t\tbackground: -webkit-gradient(linear, left top, left bottom, from(#00bfff), to(#0000ff));\r\n\t\t\tbackground: linear-gradient(to bottom, #00bfff 0%, #0000ff 100%);\r\n\t\t\tcolor:#fff;\r\n\t\t\tposition: relative;\r\n      \t\tbox-shadow: 1px 3px 14px  rgba(0, 0, 0, .5);\r\n\t\t}\r\n\t\t.login-body\r\n\t\t{\r\n\t\t\tpadding: 20px;\r\n\t\t\tline-height: 2;\r\n\t\t}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5sb2dpbi9hZG1pbmxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUcsV0FBVztHQUNYLFVBQVU7R0FDVixzQkFBc0I7R0FDdEIsZ0JBQWdCO0dBQ2hCLGVBQWU7R0FDZixrQkFBa0I7UUFDYixpREFBaUQ7UUFDakQsbUJBQW1CO0VBQ3pCO0VBQ0E7O0dBRUMsa0JBQWtCO0dBQ2xCLCtCQUErQjtHQUMvQixlQUFlO0dBQ2YsdUZBQWdFO0dBQWhFLGdFQUFnRTtHQUNoRSxVQUFVO0dBQ1Ysa0JBQWtCO1FBQ2IsMkNBQTJDO0VBQ2pEO0VBQ0E7O0dBRUMsYUFBYTtHQUNiLGNBQWM7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2FkbWlubG9naW4vYWRtaW5sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWJveFxyXG5cdFx0e1xyXG5cdFx0XHRoZWlnaHQ6IDUwJTtcclxuXHRcdFx0d2lkdGg6IDMwJTtcclxuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgZ3JleTtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDM1JTtcclxuXHRcdFx0bWFyZ2luLXRvcDogMTAlO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIFx0XHRib3gtc2hhZG93OiAyMXB4IDEycHggMjRweCAxMHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG4gICAgICBcdFx0YmFja2dyb3VuZDogI2RhZGFkYTtcclxuXHRcdH1cclxuXHRcdC5sb2dpbi1oZWFkZXJcclxuXHRcdHtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRmb250LWZhbWlseTogXCJ2YXJkaGFuYVwiLGN1cnNpdmU7XHJcblx0XHRcdGZvbnQtc2l6ZTogMzVweDtcclxuXHRcdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwYmZmZiAwJSwgIzAwMDBmZiAxMDAlKTtcclxuXHRcdFx0Y29sb3I6I2ZmZjtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBcdFx0Ym94LXNoYWRvdzogMXB4IDNweCAxNHB4ICByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHRcdH1cclxuXHRcdC5sb2dpbi1ib2R5XHJcblx0XHR7XHJcblx0XHRcdHBhZGRpbmc6IDIwcHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OiAyO1xyXG5cdFx0fSJdfQ== */"

/***/ }),

/***/ "./src/app/adminlogin/adminlogin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/adminlogin/adminlogin.component.ts ***!
  \****************************************************/
/*! exports provided: AdminloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminloginComponent", function() { return AdminloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../admin.service */ "./src/app/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AdminloginComponent = class AdminloginComponent {
    constructor(adminservice, router) {
        this.adminservice = adminservice;
        this.router = router;
        this.admin = {};
    }
    ngOnInit() {
    }
    adminlogin() {
        this.adminservice.adminlogin(this.admin).subscribe((result) => this.router.navigate(['/admin', result['id']]));
    }
};
AdminloginComponent.ctorParameters = () => [
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminlogin',
        template: __webpack_require__(/*! raw-loader!./adminlogin.component.html */ "./node_modules/raw-loader/index.js!./src/app/adminlogin/adminlogin.component.html"),
        styles: [__webpack_require__(/*! ./adminlogin.component.css */ "./src/app/adminlogin/adminlogin.component.css")]
    })
], AdminloginComponent);



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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_account_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/account/account.component */ "./src/app/user/account/account.component.ts");
/* harmony import */ var _user_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/cart/cart.component */ "./src/app/user/cart/cart.component.ts");
/* harmony import */ var _user_shop_shop_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/shop/shop.component */ "./src/app/user/shop/shop.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./adminlogin/adminlogin.component */ "./src/app/adminlogin/adminlogin.component.ts");
/* harmony import */ var _admin_product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/product/product.component */ "./src/app/admin/product/product.component.ts");
/* harmony import */ var _admin_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/transaction/transaction.component */ "./src/app/admin/transaction/transaction.component.ts");
/* harmony import */ var _admin_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/inventory/inventory.component */ "./src/app/admin/inventory/inventory.component.ts");
/* harmony import */ var _user_checkproduct_checkproduct_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/checkproduct/checkproduct.component */ "./src/app/user/checkproduct/checkproduct.component.ts");















const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], children: [{ path: "signup", component: _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] }] },
    { path: "user/:id", component: _user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"], children: [{ path: "account", component: _user_account_account_component__WEBPACK_IMPORTED_MODULE_6__["AccountComponent"] }, { path: "cart", component: _user_cart_cart_component__WEBPACK_IMPORTED_MODULE_7__["CartComponent"] }, { path: "shop", component: _user_shop_shop_component__WEBPACK_IMPORTED_MODULE_8__["ShopComponent"] }, { path: "shop/:id", component: _user_checkproduct_checkproduct_component__WEBPACK_IMPORTED_MODULE_14__["CheckproductComponent"] }] },
    { path: "admin", component: _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_10__["AdminloginComponent"] },
    { path: "admin/:id", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_9__["AdminComponent"], children: [{ path: "product", component: _admin_product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"] }, { path: "transaction", component: _admin_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_12__["TransactionComponent"] }, { path: "inventory", component: _admin_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_13__["InventoryComponent"] }] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/signup/signup.component */ "./src/app/home/signup/signup.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _user_account_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/account/account.component */ "./src/app/user/account/account.component.ts");
/* harmony import */ var _user_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/cart/cart.component */ "./src/app/user/cart/cart.component.ts");
/* harmony import */ var _user_shop_shop_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/shop/shop.component */ "./src/app/user/shop/shop.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./adminlogin/adminlogin.component */ "./src/app/adminlogin/adminlogin.component.ts");
/* harmony import */ var _admin_product_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/product/product.component */ "./src/app/admin/product/product.component.ts");
/* harmony import */ var _admin_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/transaction/transaction.component */ "./src/app/admin/transaction/transaction.component.ts");
/* harmony import */ var _admin_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/inventory/inventory.component */ "./src/app/admin/inventory/inventory.component.ts");
/* harmony import */ var _user_checkproduct_checkproduct_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user/checkproduct/checkproduct.component */ "./src/app/user/checkproduct/checkproduct.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
            _user_user_component__WEBPACK_IMPORTED_MODULE_9__["UserComponent"],
            _user_account_account_component__WEBPACK_IMPORTED_MODULE_10__["AccountComponent"],
            _user_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"],
            _user_shop_shop_component__WEBPACK_IMPORTED_MODULE_12__["ShopComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"],
            _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_14__["AdminloginComponent"],
            _admin_product_product_component__WEBPACK_IMPORTED_MODULE_15__["ProductComponent"],
            _admin_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_16__["TransactionComponent"],
            _admin_inventory_inventory_component__WEBPACK_IMPORTED_MODULE_17__["InventoryComponent"],
            _user_checkproduct_checkproduct_component__WEBPACK_IMPORTED_MODULE_18__["CheckproductComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{position:relative}\r\n.overlay,.sideMenu{position:fixed;bottom:0}\r\n.overlay{top:0;left:-100%;right:100%;margin:auto;background-color:rgba(0,0,0,.5);z-index:998;-webkit-transition:all ease 0.2s;transition:all ease 0.2s}\r\n.overlay.open{left:0;right:0}\r\n.sidebarNavigation{margin-bottom:0;z-index:999;-webkit-box-pack:start;justify-content:flex-start}\r\n.sidebarNavigation .leftNavbarToggler{margin-right:10px;-webkit-box-ordinal-group:0;order:-1}\r\n.sideMenu{left:-100%;top:52px;-webkit-transition:all ease 0.5s;transition:all ease 0.5s;overflow:hidden;width:100%;z-index:999;max-width:80%;margin-bottom:0;padding:1rem}\r\n.sideMenu.open{left:0;display:block;overflow-y:auto}\r\n.sideMenu ul{margin:0;padding:0 15px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsS0FBSyxpQkFBaUI7QUFDdEIsbUJBQW1CLGNBQWMsQ0FBQyxRQUFRO0FBQzFDLFNBQVMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLCtCQUErQixDQUFDLFdBQVcsQ0FBQyxnQ0FBdUIsQ0FBdkIsd0JBQXdCO0FBQ3JILGNBQWMsTUFBTSxDQUFDLE9BQU87QUFDNUIsbUJBQW1CLGVBQWUsQ0FBQyxXQUFXLENBQUMsc0JBQXlCLENBQXpCLDBCQUEwQjtBQUN6RSxzQ0FBc0MsaUJBQWlCLENBQUMsMkJBQU8sQ0FBUCxRQUFRO0FBQ2hFLFVBQVUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxnQ0FBd0IsQ0FBeEIsd0JBQXdCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxZQUFZO0FBQ3hJLGVBQWUsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlO0FBQ25ELGFBQWEsUUFBUSxDQUFDLGNBQWMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7cG9zaXRpb246cmVsYXRpdmV9XHJcbi5vdmVybGF5LC5zaWRlTWVudXtwb3NpdGlvbjpmaXhlZDtib3R0b206MH1cclxuLm92ZXJsYXl7dG9wOjA7bGVmdDotMTAwJTtyaWdodDoxMDAlO21hcmdpbjphdXRvO2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNSk7ei1pbmRleDo5OTg7dHJhbnNpdGlvbjphbGwgZWFzZSAwLjJzfVxyXG4ub3ZlcmxheS5vcGVue2xlZnQ6MDtyaWdodDowfVxyXG4uc2lkZWJhck5hdmlnYXRpb257bWFyZ2luLWJvdHRvbTowO3otaW5kZXg6OTk5O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fVxyXG4uc2lkZWJhck5hdmlnYXRpb24gLmxlZnROYXZiYXJUb2dnbGVye21hcmdpbi1yaWdodDoxMHB4O29yZGVyOi0xfVxyXG4uc2lkZU1lbnV7bGVmdDotMTAwJTt0b3A6NTJweDt0cmFuc2l0aW9uOmFsbCBlYXNlIDAuNXM7b3ZlcmZsb3c6aGlkZGVuO3dpZHRoOjEwMCU7ei1pbmRleDo5OTk7bWF4LXdpZHRoOjgwJTttYXJnaW4tYm90dG9tOjA7cGFkZGluZzoxcmVtfVxyXG4uc2lkZU1lbnUub3BlbntsZWZ0OjA7ZGlzcGxheTpibG9jaztvdmVyZmxvdy15OmF1dG99XHJcbi5zaWRlTWVudSB1bHttYXJnaW46MDtwYWRkaW5nOjAgMTVweH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
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
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/home/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {background-color:#eee;}\r\n.container-fluid {padding:50px;}\r\n.container{background-color:white;padding:50px;   }\r\n#title{font-family: 'Lobster', cursive;;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QixrQkFBa0IsWUFBWSxDQUFDO0FBQy9CLFdBQVcsc0JBQXNCLENBQUMsWUFBWSxJQUFJO0FBQ2xELE9BQU8sK0JBQStCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge2JhY2tncm91bmQtY29sb3I6I2VlZTt9XHJcbi5jb250YWluZXItZmx1aWQge3BhZGRpbmc6NTBweDt9XHJcbi5jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtwYWRkaW5nOjUwcHg7ICAgfVxyXG4jdGl0bGV7Zm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTs7fSJdfQ== */"

/***/ }),

/***/ "./src/app/home/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SignupComponent = class SignupComponent {
    constructor(userservice, router) {
        this.userservice = userservice;
        this.router = router;
        this.user = {};
        this.loginUser = {};
    }
    ngOnInit() {
    }
    create() {
        console.log(this.user);
        this.userservice.create(this.user).subscribe(() => this.router.navigate(['/']));
    }
    login() {
        this.userservice.login(this.loginUser).subscribe((result) => this.router.navigate(['/user', result['id'], 'shop']));
    }
};
SignupComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/home/signup/signup.component.css")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
    }
    addproduct(product = {}) {
        console.log(product);
        return this.http.post('/project2/addproduct', product);
    }
    getall() {
        return this.http.get('/project2/getallproduct');
    }
    getproductbyid(id) {
        return this.http.get(`/project2/getproductbyid/${id}`);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    create(user) {
        return this.http.post('/project2/create', user);
    }
    login(user) {
        return this.http.post('/project2/login', user);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/user/account/account.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/account/account.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user/account/account.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/account/account.component.ts ***!
  \***************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountComponent = class AccountComponent {
    constructor() { }
    ngOnInit() {
    }
};
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/account/account.component.html"),
        styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/user/account/account.component.css")]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/user/cart/cart.component.css":
/*!**********************************************!*\
  !*** ./src/app/user/cart/cart.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/user/cart/cart.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/cart/cart.component.ts ***!
  \*********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CartComponent = class CartComponent {
    constructor() { }
    ngOnInit() {
    }
};
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/user/cart/cart.component.css")]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/user/checkproduct/checkproduct.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/checkproduct/checkproduct.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvY2hlY2twcm9kdWN0L2NoZWNrcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/checkproduct/checkproduct.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/checkproduct/checkproduct.component.ts ***!
  \*************************************************************/
/*! exports provided: CheckproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckproductComponent", function() { return CheckproductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../product.service */ "./src/app/product.service.ts");




let CheckproductComponent = class CheckproductComponent {
    constructor(productservice, router, activatedroute) {
        this.productservice = productservice;
        this.router = router;
        this.activatedroute = activatedroute;
        this.product = {};
        console.log(this.activatedroute.params['value'].id);
    }
    ngOnInit() {
        this.getproductbyid();
    }
    getproductbyid() {
        this.productservice.getproductbyid(this.activatedroute.params['value'].id).subscribe(result => this.product = result);
    }
};
CheckproductComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CheckproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkproduct',
        template: __webpack_require__(/*! raw-loader!./checkproduct.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/checkproduct/checkproduct.component.html"),
        styles: [__webpack_require__(/*! ./checkproduct.component.css */ "./src/app/user/checkproduct/checkproduct.component.css")]
    })
], CheckproductComponent);



/***/ }),

/***/ "./src/app/user/shop/shop.component.css":
/*!**********************************************!*\
  !*** ./src/app/user/shop/shop.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".category-credit .post-content {\r\n    text-align: left;\r\n}\r\n.category-credit .post-meta {\r\n    text-align: right;\r\n}\r\n.category-credit .post-content h4 {\r\n    font-weight: bold;\r\n    margin: 0;\r\n}\r\n.category-credit .post-meta .price {\r\n    font-weight: bold;\r\n    color: #4BB047;\r\n}\r\n.category-credit .post-content span {\r\n    font-weight: bold;\r\n    color: #6FCAEB;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsU0FBUztBQUNiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhdGVnb3J5LWNyZWRpdCAucG9zdC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmNhdGVnb3J5LWNyZWRpdCAucG9zdC1tZXRhIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5jYXRlZ29yeS1jcmVkaXQgLnBvc3QtY29udGVudCBoNCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uY2F0ZWdvcnktY3JlZGl0IC5wb3N0LW1ldGEgLnByaWNlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICM0QkIwNDc7XHJcbn1cclxuLmNhdGVnb3J5LWNyZWRpdCAucG9zdC1jb250ZW50IHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzZGQ0FFQjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/shop/shop.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/shop/shop.component.ts ***!
  \*********************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ShopComponent = class ShopComponent {
    constructor(productservice, router) {
        this.productservice = productservice;
        this.router = router;
        this.products = {};
    }
    ngOnInit() {
        this.getall();
    }
    getall() {
        this.productservice.getall().subscribe(result => {
            console.log(result);
            this.products = result;
        });
    }
};
ShopComponent.ctorParameters = () => [
    { type: _product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shop',
        template: __webpack_require__(/*! raw-loader!./shop.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/shop/shop.component.html"),
        styles: [__webpack_require__(/*! ./shop.component.css */ "./src/app/user/shop/shop.component.css")]
    })
], ShopComponent);



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/user.component.html"),
        styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
    })
], UserComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jjgua\eclipse-workspace\project-2-team-anonymous\project2\angular-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map