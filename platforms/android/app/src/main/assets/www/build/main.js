webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_list_product_list__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_service_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout__ = __webpack_require__(211);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//@IonicPage()
var CartPage = (function () {
    // plp:any=this;
    function CartPage(toastCtrl, dataService, navCtrl, navParams) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        CartPage_1.dataservice = dataService;
        CartPage_1.navctrl = navCtrl;
        CartPage_1.item = this.dataService.item;
        this.cartProduct = this.dataService.getCartProduct();
        CartPage_1.cost = this.dataService.cartCost;
        this.dataService.getProducts().then(function (data) {
            _this.products = data;
        });
    }
    CartPage_1 = CartPage;
    CartPage.prototype.getCartCost = function () {
        return CartPage_1.cost;
    };
    CartPage.prototype.getCartItem = function () {
        return CartPage_1.item;
    };
    CartPage.prototype.removeProduct = function (product) {
        product.inCart = "Add";
        product.disabled = false;
        CartPage_1.item--;
        --__WEBPACK_IMPORTED_MODULE_0__product_list_product_list__["a" /* ProductListPage */].notifier;
        if (__WEBPACK_IMPORTED_MODULE_0__product_list_product_list__["a" /* ProductListPage */].notifier === 0) {
            __WEBPACK_IMPORTED_MODULE_0__product_list_product_list__["a" /* ProductListPage */].show = false;
        }
        console.log(CartPage_1.dataservice);
        CartPage_1.cost = CartPage_1.dataservice.removeCartProduct(product, CartPage_1.cost);
        // let toast = this.toastCtrl.create({
        //   message: product.productName+' removed from cart successfully',
        //   duration: 1500
        // });
        // toast.present();
        if (CartPage_1.cost === 0) {
            CartPage_1.navctrl.pop();
        }
    };
    CartPage.prototype.itemIncrease = function (product) {
        this.cartProduct.forEach(function (pro) {
            if (product.productName === pro.productName) {
                if (pro.item !== 5) {
                    pro.item++;
                    CartPage_1.cost += pro.price;
                }
            }
        });
    };
    CartPage.prototype.itemDecrease = function (product) {
        this.cartProduct.forEach(function (pro) {
            if (product.productName === pro.productName) {
                if (pro.item !== 1) {
                    pro.item--;
                    CartPage_1.cost -= pro.price;
                    console.log(CartPage_1.cost);
                }
                else if (pro.item === 1) {
                    console.log(CartPage_1.prototype.removeProduct(pro));
                }
            }
        });
    };
    CartPage.prototype.checkout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */], { cost: CartPage_1.cost });
    };
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.cost = 0;
    CartPage.item = 0;
    CartPage = CartPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\cart\cart.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>ΚΑΛΑΘΙ</ion-title>\n    </ion-navbar>\n\n  </ion-header>\n\n\n  <ion-content padding>\n\n      <ion-list no-margin *ngFor="let p of cartProduct; let i = index">\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="{{p.thumbnail}}">\n            </ion-thumbnail>\n            <h2 text-wrap>{{p.productName}}</h2>\n            <p>ΚΩΔΙΚΟΣ ΠΡΟΪΌΝΤΟΣ: {{p.productCode}}</p>\n            <h2>{{p.price}} €</h2>\n            <ion-item no-padding>\n              <ion-icon item-start color="button-color" name="remove-circle" (click)="itemDecrease(p)"></ion-icon>\n              <p item-start class="zero-margin">{{cartProduct[i].item}}</p>\n              <ion-icon item-start color="button-color" name="add-circle" (click)="itemIncrease(p)"></ion-icon>\n            </ion-item>\n            <button item-end clear ion-button color="button-color" outline round (click)="removeProduct(p)"><ion-icon name="trash"></ion-icon></button>\n\n          </ion-item>\n        </ion-list>\n  </ion-content>\n\n  <ion-footer>\n      <ion-toolbar>\n        <p margin-left class="footer-left">Προϊόντα: {{getCartItem()}}</p>\n        <p margin-left class="footer-left">Συνολικό Κόστος: {{getCartCost()}} €</p>\n        <ion-buttons right end>\n            <button right color="light" clear ion-button icon-right (click)="checkout()">Πληρωμη<ion-icon name="ios-arrow-forward-outline"></ion-icon></button>\n        </ion-buttons>\n\n      </ion-toolbar>\n    </ion-footer>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], CartPage);
    return CartPage;
    var CartPage_1;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var NotificationPage = (function () {
    function NotificationPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-notification',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\notification\notification.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ΕΙΔΟΠΟΙΗΣΗ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item class="notification" no-lines>\n    <ion-icon name="notifications"></ion-icon>\n  </ion-item>\n  <ion-item class="notification-text" no-lines>\n    <h1>Δεν υπάρχει κάποια ειδοποίηση αυτή τη στιγμή</h1>\n    <h3>Θα σας ειδοποιήσουμε σύντομα...</h3>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataServiceProvider = (function () {
    function DataServiceProvider(http) {
        var _this = this;
        this.http = http;
        this.countryurl = "assets/data/countries.json";
        this.cartCost = 0.00;
        this.apiUrl = "assets/data/menu.json";
        this.productsData = "assets/data/products.json";
        this.user = "assets/data/userDetail.json";
        this.userInfo = [];
        this.cartProduct = [];
        this.item = 0;
        this.wishlist = [];
        this.getUser().then(function (data) {
            _this.userCredentials = data;
        });
        console.log('Hello DataServiceProvider Provider');
    }
    DataServiceProvider.prototype.getCountry = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.countryurl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataServiceProvider.prototype.getUser = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get("assets/data/users.json").subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataServiceProvider.prototype.validateUser = function (email, pass) {
        var _this = this;
        var flag = false;
        this.userCredentials.forEach(function (element) {
            if (element.email === email && element.password === pass) {
                flag = true;
                _this.loggedInUser = { "username": element.username, "email": element.email, "password": element.password };
            }
        });
        return flag;
    };
    DataServiceProvider.prototype.getMenus = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataServiceProvider.prototype.getProducts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.productsData).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataServiceProvider.prototype.addToCart = function (product) {
        this.item++;
        this.cartProduct.push(product);
        this.cartCost += product.price * product.item;
    };
    DataServiceProvider.prototype.checkoutAddr = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.user).subscribe(function (data) {
                _this.userInfo = data;
                resolve(_this.userInfo);
            }, function (err) {
                console.log(err);
            });
        });
    };
    DataServiceProvider.prototype.addCheckoutAddr = function (data) {
        this.userInfo.push(data);
        console.log(this.userInfo);
    };
    DataServiceProvider.prototype.getCartProduct = function () {
        return this.cartProduct;
    };
    DataServiceProvider.prototype.removeCartProduct = function (product, cost) {
        this.item--;
        this.cartCost = cost;
        var index = this.cartProduct.indexOf(product);
        this.cartProduct.splice(index, 1);
        return this.cartCost = Number((this.cartCost - (product.price * product.item)).toFixed(2));
    };
    DataServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataServiceProvider);
    return DataServiceProvider;
}());

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//@IonicPage()
var ProductDetailPage = (function () {
    function ProductDetailPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.self = this;
        this.data = this.navParams.get('data');
    }
    ProductDetailPage.prototype.addToCart = function () {
        this.viewCtrl.dismiss(true);
    };
    ProductDetailPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-product-detail',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\product-detail\product-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n    <ion-title>ΠΛΗΡΟΦΟΡΙΕΣ ΠΡΟΙΟΝΤΟΣ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <img style="width:40%;margin-left:25%;" src="{{data.thumbnail}}"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{data.productName}}\n      </ion-card-title>\n      <p>{{data.productCode}}</p>\n      <p>{{data.price}} €</p>\n    </ion-card-content>\n    <button *ngIf="!data.disabled" item-end color="button-color" ion-button block icon-left (click)="addToCart()"><ion-icon name="cart"></ion-icon> ΠΡΟΣΘΗΚΗ ΣΤΟ ΚΑΛΑΘΙ</button>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      Description\n    </ion-card-header>\n    <ion-card-content>\n        <p text-wrap>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quos? Eveniet neque architecto esse est delectus corporis quibusdam facilis explicabo dolore! Debitis est quidem, quisquam saepe quibusdam accusantium impedit atque.</p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\product-detail\product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeSettingsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_password_validation__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validator__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//@IonicPage()
var ChangeSettingsModalPage = (function () {
    function ChangeSettingsModalPage(alertCtrl, formBuilder, viewCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.passwordForm = this.formBuilder.group({
            oldPassword: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validator__["a" /* regexValidators */].password),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validator__["a" /* regexValidators */].password)
            ])),
            confirmPass: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].compose([
                this.confirmPass,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validator__["a" /* regexValidators */].password)
            ]))
        }, { validator: __WEBPACK_IMPORTED_MODULE_4__signup_password_validation__["a" /* PasswordValidation */].MatchPassword });
    }
    ChangeSettingsModalPage.prototype.confirmPass = function () {
        return function (control) {
            return { 'confirm_pass': false };
        };
    };
    ChangeSettingsModalPage.prototype.change = function () {
        if (__WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* MyApp */].loggedInUser.password === this.passwordForm.value.oldPassword) {
            __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* MyApp */].loggedInUser.password = this.passwordForm.value.password;
            var alert_1 = this.alertCtrl.create({
                title: 'Change Settings',
                subTitle: 'Password has been successfully changed.',
                buttons: ['Dismiss']
            });
            alert_1.present();
        }
        else if (__WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* MyApp */].loggedInUser.password !== this.passwordForm.value.oldPassword) {
            var alert_2 = this.alertCtrl.create({
                title: 'Change Settings',
                subTitle: 'Old password is incorrect',
                buttons: ['Dismiss']
            });
            alert_2.present();
        }
        this.navCtrl.pop();
    };
    ChangeSettingsModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeSettingsModalPage');
    };
    ChangeSettingsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-change-settings-modal',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\change-settings-modal\change-settings-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="viewCtrl.dismiss()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title>ΑΛΛΑΓΗ ΚΩΔΙΚΟΥ ΠΡΟΣΒΑΣΗΣ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content margin-top padding>\n        <form [formGroup]="passwordForm">\n            <ion-item no-padding>\n                <ion-input [formControl]="passwordForm.controls[\'oldPassword\']" type="password" placeholder="ΠΑΛΙΟΣ ΚΩΔΙΚΟΣ"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                <ion-input [formControl]="passwordForm.controls[\'password\']" type="password" placeholder="ΝΕΟΣ ΚΩΔΙΚΟΣ"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                  <ion-input [formControl]="passwordForm.controls[\'confirmPass\']" type="password" placeholder="ΕΠΑΛΗΘΕΥΣΗ ΚΩΔΙΚΟΥ"></ion-input>\n                </ion-item>\n              <div>\n                <button margin-top [disabled]="!passwordForm.valid" ion-button block (click)="change()">ΑΛΛΑΓΗ</button>\n              </div>\n        </form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\change-settings-modal\change-settings-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], ChangeSettingsModalPage);
    return ChangeSettingsModalPage;
}());

//# sourceMappingURL=change-settings-modal.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__change_settings_modal_change_settings_modal__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feedback_feedback__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//@IonicPage()
var SettingsPage = (function () {
    function SettingsPage(modalCtrl, alertCtrl, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.username = __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */].loggedInUser.username;
        this.email = __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */].loggedInUser.email;
        this.password = __WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MyApp */].loggedInUser.password;
        console.log(this.username, this.email, this.password);
    }
    SettingsPage.prototype.change = function () {
        var changeModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__change_settings_modal_change_settings_modal__["a" /* ChangeSettingsModalPage */]);
        changeModal.present();
    };
    SettingsPage.prototype.feed = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__feedback_feedback__["a" /* FeedbackPage */]);
    };
    SettingsPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__profile_profile__["a" /* ProfilePage */]);
    };
    SettingsPage.prototype.about = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__about_about__["a" /* AboutPage */]);
    };
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\settings\settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ΡΥΘΜΙΣΕΙΣ ΧΡΗΣΤΗ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list class="ios-top-line">\n      <ion-item (click)="profile()">\n          <ion-icon name=\'contact\' item-start></ion-icon>\n            <ion-label>Προφίλ</ion-label>\n        </ion-item>\n    <ion-item (click)="change()">\n        <ion-icon name=\'key\' item-start></ion-icon>\n          <ion-label>Αλλαγή Κωδικού</ion-label>\n      </ion-item>\n\n      <ion-item>\n          <ion-toggle checked="false"></ion-toggle>\n          <ion-label>\n              Ειδοποιήσεις\n            </ion-label>\n            <ion-icon name=\'notifications\' item-start></ion-icon>\n        </ion-item>\n\n        <ion-item (click)="feed()">\n            <ion-icon name=\'paper\' item-start></ion-icon>\n              <ion-label>Σχόλια</ion-label>\n          </ion-item>\n\n          <ion-item (click)="about()">\n              <ion-icon name=\'information-circle\' item-start></ion-icon>\n                <ion-label>Ποιοι Είμαστε</ion-label>\n            </ion-item>\n            <ion-footer>\n              <div text-center>\n                  <ion-note>Version 0.0.1</ion-note>\n              </div>\n            </ion-footer>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//@IonicPage()
var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ΠΟΙΟΙ ΕΙΜΑΣΤΕ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row  no-padding >\n    <ion-col>\n        <img src="assets/icon/fastdelivery-logo-2.png" class="logo">\n    </ion-col>\n  </ion-row>\n  <div>\n    <p>Το <b>Fast Delivery</b> είναι η εφαρμογή που σας επιτρέπει να έχετε τα καλύτερα προϊόντα της πόλης σας μέσα σε λίγα λεπτά. Πείτε μας τι θέλετε και εμείς θα σας παραδώσουμε όπου κι αν βρίσκεστε.<br/>\n<br/>\nΤα καλύτερα προϊόντα της πόλης σας; Σαν τι; Ένας φορτιστής, ένα φαγητό, ένα smoothie, ένα ζεστό γεύμα από το αγαπημένο σας εστιατόριο, τα κλειδιά σας ...<br/>\n<br/>\nΑπλά σκεφτείτε τι θέλετε ... Όλα στην πόλη σας, παραδίδονται μέσα σε λίγα λεπτά.</p>\n    <ion-card>\n      <ion-card-header>\n        ΥΠΗΡΕΣΙΕΣ\n      </ion-card-header>\n      <ion-card-content>\n          <ul>\n              <li>Παραγγελία μέσα σε λίγα λεπτά</li>\n              <li>Διανομή στο χώρο σας</li>\n              <li> > 100 Επιχειρήσεις</li>\n              <li> > 1000 Προϊόντα</li>\n              <li>Πληρωμή με Visa, MasterCard και American Express</li>\n              <li>Online Αγορές</li>\n              <li>Ειδοποιήσεις Διανομής</li>\n            </ul>\n      </ion-card-content>\n    </ion-card>\n    <ion-card margin-top>\n      <ion-card-header>\n        ΕΠΙΚΟΙΝΩΝΙΑ\n      </ion-card-header>\n      <ion-card-content>\n          Μέσω email <b>info@fastdeliveryhellas.gr</b> ή καλώντας στο <b>6936683202</b> Μην διστάσετε να επικοινωνήσετε μαζί μας για οποιοδήποτε πρόβλημα ή απορία\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//@IonicPage()
var FeedbackPage = (function () {
    function FeedbackPage(emailComposer, alertCtrl, navCtrl, navParams) {
        this.emailComposer = emailComposer;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.subject = "";
    }
    /*this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
     //Now we know we can send
    }
  });*/
    FeedbackPage.prototype.sendFeed = function () {
        var _this = this;
        var email = {
            to: "info@fastdeliveryhellas.gr",
            cc: "gmanias90@gmail.com",
            subject: this.subject,
            isHtml: true
        };
        this.emailComposer.open(email);
        var alert = this.alertCtrl.create({
            title: 'Σχόλια',
            subTitle: 'Σας ευχαριστούμε για τα σχόλια σας. Προσπαθούμε πάντα να γινόμαστε καλύτεροι.',
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-feedback',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\feedback\feedback.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Σχόλια</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item-divider margin-top>\n      <p item-start>Μήνυμα:</p>\n    </ion-item-divider>\n    <ion-item margin-top no-lines>\n      <ion-label color="primary" stacked>Μήνυμα</ion-label>\n      <ion-input [(ngModel)]="subject" type="text" placeholder="Μήνυμα"></ion-input>\n      <!---<textarea cols="20" rows="8"></textarea>--->\n    </ion-item>\n    <div class="btn">\n      <button ion-button block icon-left (click)="sendFeed()">ΑΠΟΣΤΟΛΗ</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\feedback\feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_component__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//@IonicPage()
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.getLoggedInUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1__app_app_component__["a" /* MyApp */].loggedInUser.username;
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ΠΡΟΦΙΛ ΧΡΗΣΤΗ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <div class="custom-item">\n      <ion-item no-lines>Όνομα Χρήστη</ion-item>\n      <ion-note margin>OpenSource</ion-note>\n    </div>\n\n    <div class="custom-item">\n      <ion-item no-lines>Email</ion-item>\n      <ion-note margin>ost@gmail.com</ion-note>\n    </div>\n\n    <div class="custom-item">\n      <ion-item no-lines>Τηλέφωνο</ion-item>\n      <ion-note margin>+91-9312222750, 011-41833189</ion-note>\n    </div>\n\n    <div class="custom-item">\n      <ion-item no-lines>Facebook</ion-item>\n      <ion-note margin>manish.osuniverse</ion-note>\n    </div>\n\n    <div class="custom-item">\n      <ion-item no-lines>Διεύθυνση</ion-item>\n      <ion-note margin>WZ-106/140 Rajouri Garden,</ion-note><br>\n      <ion-note margin>Ext-P block,</ion-note><br>\n      <ion-note margin>Delhi-110027</ion-note>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__address_modal_address_modal__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_service_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__finding_finding__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__product_list_product_list__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CheckoutPage = (function () {
    function CheckoutPage(modalCtrl, toastCtrl, dataService, alertCtrl, navCtrl, navParams, storage) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.checkout = {
            'product': null,
            'address': null,
            'shipMethod': '',
            'date': new Date().toISOString(),
            'time': new Date().toISOString(),
            'payMethod': ''
        };
        this.cartDetail = {
            subTotal: 0,
            shipMethod: 'extend',
            extra: 0,
            gross: 0
        };
        this.item = this.dataService.item;
        this.addrbtn = true;
        this.cartDetail.subTotal = this.navParams.get('cost');
        this.cartDetail.shipMethod = 'extend';
        this.cartDetail.gross = this.navParams.get('cost');
        this.cartDetail.extra = 0;
        this.dataService.checkoutAddr()
            .then(function (response) {
            _this.addr = response;
        });
    }
    CheckoutPage.prototype.lockNextSlide = function (lock) {
        var shouldLockSwipeToNext = lock;
        this.slides.lockSwipeToNext(shouldLockSwipeToNext);
    };
    CheckoutPage.prototype.next = function () {
        var _this = this;
        if (this.slides.getActiveIndex() == 0) {
            if (this.checkout.address == null) {
                this.lockNextSlide(true);
                var toast = this.toastCtrl.create({
                    message: 'Παρακαλώ επιλέξτε τοποθεσία',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                this.checkout.address = this.dataService.userInfo.filter(function (i) {
                    return i.address == _this.checkout.address;
                });
                this.addrbtn = false;
                this.lockNextSlide(false);
                this.slides.slideNext(500, false);
                this.lockNextSlide(true);
            }
        }
        else if (this.slides.getActiveIndex() == 1) {
            if (this.checkout.shipMethod == '' || this.checkout.date == '' || this.checkout.time == '') {
                this.lockNextSlide(true);
                var toast = this.toastCtrl.create({
                    message: 'Δεν έχετε συμπληρώσει όλα τα στοιχεία',
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
            }
            else {
                if (this.slides.getActiveIndex() == 1) {
                    if (this.checkout.shipMethod === 'extend') {
                        this.cartDetail.shipMethod = 'Extend Free Shipping';
                        this.cartDetail.gross = this.navParams.get('cost') + 20;
                        this.cartDetail.extra = 20;
                    }
                    else if (this.checkout.shipMethod === 'store') {
                        this.cartDetail.shipMethod = 'Παραλαβή από το κατάστημα';
                        this.cartDetail.gross = this.navParams.get('cost');
                        this.cartDetail.extra = 0;
                    }
                    this.lockNextSlide(false);
                    this.slides.slideNext(500, false);
                    this.lockNextSlide(true);
                }
            }
        }
    };
    CheckoutPage.prototype.addAddr = function () {
        var _this = this;
        var addressModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__address_modal_address_modal__["a" /* AddressModalPage */]);
        addressModal.present();
        addressModal.onDidDismiss(function (data) {
            if (data !== undefined) {
                _this.dataService.addCheckoutAddr(data);
            }
        });
    };
    CheckoutPage.prototype.placeOrder = function () {
        var _this = this;
        if (this.checkout.payMethod !== '') {
            var alert_1 = this.alertCtrl.create({
                title: 'Κατάσταση Παραγγελία;',
                subTitle: 'Η παραγγελία σας τοποθετήθηκε επιτυχώς. Σύντομα ένας υπεύθυνος θα επικοινωνήσει μαζί σας.',
                buttons: [
                    {
                        text: 'OK',
                        handler: function () {
                            _this.checkout.product = _this.dataService.cartProduct;
                            _this.dataService.cartProduct = [];
                            _this.dataService.item = 0;
                            __WEBPACK_IMPORTED_MODULE_6__product_list_product_list__["a" /* ProductListPage */].notifier = 0;
                            __WEBPACK_IMPORTED_MODULE_6__product_list_product_list__["a" /* ProductListPage */].show = false;
                            _this.dataService.cartCost = 0;
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__category_category__["a" /* CategoryPage */]);
                            _this.checkout['gross amount'] = _this.cartDetail.gross;
                            console.log(_this.checkout);
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Παρακαλώ επιλέξτε τρόπο πληρωμής.',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    CheckoutPage.prototype.finding = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__finding_finding__["a" /* FindingPage */]);
    };
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
        this.lockNextSlide(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Slides */])
    ], CheckoutPage.prototype, "slides", void 0);
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-checkout',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\checkout\checkout.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ΠΛΗΡΩΜΗ</ion-title>\n    <ion-buttons *ngIf=addrbtn end>\n        <ion-fab>\n            <button ion-fab mini item-end (click)="addAddr()"><ion-icon color="button-color" name="add"></ion-icon></button>\n          </ion-fab>\n        <!-- <button ion-fab mini item-end icon-only (click)="addAddr()"> -->\n          <!-- <ion-icon margin name="add"></ion-icon> -->\n        <!-- </button>    -->\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides>\n\n    <ion-slide>\n      <ion-header no-border>\n        <div margin-top class="line">\n          <div>\n            <ion-icon class="check1" name="ios-checkmark-circle-outline"></ion-icon>\n            <ion-icon class="check2" name="ios-checkmark-circle-outline"></ion-icon>\n            <ion-icon class="check3" name="ios-checkmark-circle-outline"></ion-icon>\n          </div>\n        </div>\n      </ion-header>\n      <ion-list class="addr-list" radio-group [(ngModel)]="checkout.address">\n          <ion-list-header no-lines>\n            <p item-start>Επιλογή Διεύθυνσης</p>\n          </ion-list-header>\n\n          <ion-item *ngFor="let a of addr; let i = index">\n            <ion-label>{{a.address}}</ion-label>\n            <ion-radio value={{a.address}}></ion-radio>\n          </ion-item>\n      </ion-list>\n        <ion-footer>\n            <ion-toolbar>\n              <p margin-left class="footer-left">Σύνολο Προϊόντων: {{item}}</p>\n              <p margin-left class="footer-left">Συνολικό Κόστος: {{cartDetail.gross}} €</p>\n              <ion-buttons right end>\n                  <button color="light" clear ion-button block icon-right (click)="next()">ΣΥΝΕΧΕΙΑ<ion-icon name="ios-arrow-forward-outline"></ion-icon></button>\n              </ion-buttons>\n            </ion-toolbar>\n          </ion-footer>\n    </ion-slide>\n\n    <ion-slide>\n        <ion-header no-border>\n          <div margin-top class="line">\n            <div>\n              <ion-icon class="check1" name="ios-checkmark-circle"></ion-icon>\n              <ion-icon class="check2" name="ios-checkmark-circle-outline"></ion-icon>\n              <ion-icon class="check3" name="ios-checkmark-circle-outline"></ion-icon>\n            </div>\n          </div>\n        </ion-header>\n        <ion-list class="addr-list" radio-group [(ngModel)]="checkout.shipMethod">\n            <ion-list-header no-lines>\n              <p item-start>Επιλογή Τρόπου Παραλαβής </p>\n            </ion-list-header>\n\n            <ion-item>\n              <ion-label>10€ Έξτρα Κόστος Delivery</ion-label>\n              <ion-radio value="extend"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n              <ion-label>0€ Παραλαβή από το κατάστημα</ion-label>\n              <ion-radio value="store"></ion-radio>\n            </ion-item>\n          </ion-list>\n          <ion-item-divider no-lines>\n\n          </ion-item-divider>\n          <ion-list no-lines margin-top>\n            <ion-list-header>\n              <p item-start>Delivery</p>\n            </ion-list-header>\n              <ion-item>\n                  <ion-label>Ημέρα</ion-label>\n                  <ion-datetime displayFormat="MM/DD/YYYY" min="2018" max="2018-12-31" [(ngModel)]="checkout.date"></ion-datetime>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Ώρα</ion-label>\n                    <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="checkout.time"></ion-datetime>\n                  </ion-item>\n          </ion-list>\n\n          <ion-footer>\n              <ion-toolbar>\n                <p margin-left class="footer-left">Σύνολο Προϊόντων: {{item}}</p>\n                <p margin-left class="footer-left">Συνολικό Κόστος: {{cartDetail.gross}} €</p>\n                <ion-buttons right end>\n                    <button color="light" clear ion-button block icon-right (click)="next()">ΣΥΝΕΧΕΙΑ<ion-icon name="ios-arrow-forward-outline"></ion-icon></button>\n                </ion-buttons>\n              </ion-toolbar>\n            </ion-footer>\n      </ion-slide>\n\n    <ion-slide>\n        <ion-header no-border>\n          <div margin-top class="line">\n            <div>\n              <ion-icon class="check1" name="ios-checkmark-circle"></ion-icon>\n              <ion-icon class="check2" name="ios-checkmark-circle"></ion-icon>\n              <ion-icon class="check3" name="ios-checkmark-circle-outline"></ion-icon>\n            </div>\n          </div>\n        </ion-header>\n\n\n\n          <ion-list no-lines class="addr-list">\n            <ion-list-header no-lines>\n              <p item-start>Λεπτομέρειες Καλαθιού</p>\n            </ion-list-header>\n            <ion-item >\n                <p item-start>Υποσύνολο</p>\n                <p item-end>{{cartDetail.subTotal}} €</p>\n            </ion-item>\n            <ion-item >\n                <p item-start>{{cartDetail.shipMethod}}</p>\n                <p item-end>{{cartDetail.extra}} €</p>\n            </ion-item>\n            <ion-item >\n                <p item-start>Τελικό Σύνολο</p>\n                <p item-end>{{cartDetail.gross}} €</p>\n            </ion-item>\n          </ion-list>\n          <ion-list radio-group [(ngModel)]="checkout.payMethod">\n              <ion-list-header margin-top>\n                <p item-start>Επιλογή Τρόπου Πληρωμής</p>\n              </ion-list-header>\n\n              <ion-item>\n                <ion-label>Πληρωμή με πιστωτική</ion-label>\n                <ion-radio value="payU"></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Μετρητά</ion-label>\n                <ion-radio value="COD"></ion-radio>\n              </ion-item>\n            </ion-list>\n\n        <ion-footer>\n            <ion-toolbar>\n              <p margin-left class="footer-left">Σύνολο Προϊόντων: {{item}}</p>\n              <p margin-left class="footer-left">Συνολικό Κόστος: {{cartDetail.gross}} €</p>\n              <ion-buttons right end>\n                  <!---<button color="light" clear ion-button block icon-right (click)="placeOrder()">Ολοκληρωση Παραγγελιας<ion-icon name="ios-arrow-forward-outline"></ion-icon></button> -->\n                  <button color="light" clear ion-button block icon-right (click)="finding()">Ολοκληρωση Παραγγελιας<ion-icon name="ios-arrow-forward-outline"></ion-icon></button>\n              </ion-buttons>\n            </ion-toolbar>\n          </ion-footer>\n      </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\checkout\checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_service_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__validator__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//@IonicPage()
var AddressModalPage = (function () {
    function AddressModalPage(dataService, viewCtrl, navCtrl, navParams) {
        this.dataService = dataService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Himanshu', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_1__validator__["a" /* regexValidators */].name)
            ])),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('abc@gmail.com', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_1__validator__["a" /* regexValidators */].email)
            ])),
            mobile: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('1234567890', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(15),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(10),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_1__validator__["a" /* regexValidators */].phone)
            ])),
            lastName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Sharma', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_1__validator__["a" /* regexValidators */].name)
            ])),
            country: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('United States', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            address: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('123, Food Street, Mathura', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_1__validator__["a" /* regexValidators */].address),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(20),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(150)
            ])),
            city: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('New York', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_1__validator__["a" /* regexValidators */].location),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(3),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(20)
            ])),
            postCode: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('123456', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_1__validator__["a" /* regexValidators */].postalCode)
            ]))
        });
    }
    AddressModalPage.prototype.saveAddr = function () {
        var data = {
            firstName: this.userInfo.value.firstName,
            lastName: this.userInfo.value.lastName,
            country: this.userInfo.value.country,
            address: this.userInfo.value.address,
            city: this.userInfo.value.city,
            postCode: this.userInfo.value.postCode
        };
        this.viewCtrl.dismiss(data);
    };
    AddressModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AddressModalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad AddressModalPage');
        this.dataService.getCountry().then(function (data) {
            _this.countries = data;
        });
    };
    AddressModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-address-modal',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\address-modal\address-modal.html"*/'<ion-header no-border >\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="viewCtrl.dismiss()">\n          <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>ΠΡΟΣΘΗΚΗ ΔΙΕΥΘΥΝΣΗΣ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form [formGroup]="userInfo">\n    <ion-list margin>\n      <ion-item class="addrInput">\n        <ion-label><ion-icon name="contact" item-left></ion-icon></ion-label>\n        <ion-input maxlength="30" type="text" formControlName="firstName" placeholder="ΟΝΟΜΑ" ></ion-input>\n      </ion-item>\n      <ion-item class="addrInput">\n        <ion-label><ion-icon class="addrIcon" name="contact" item-left></ion-icon></ion-label>\n        <ion-input maxlength="30" class="addrInput" formControlName="lastName" type="text" placeholder="ΕΠΙΘΕΤΟ" ></ion-input>\n      </ion-item>\n      <ion-item class="addrInput">\n        <ion-select class="addrInput myCustomSelect" formControlName="country" placeholder="ΕΠΙΛΟΓΗ ΧΩΡΑΣ">\n          <ion-label>Χώρα</ion-label>\n          <ion-option *ngFor="let c of countries" [value]="c.country" >{{c.country}}</ion-option>\n        </ion-select>\n        <ion-icon class="globe addrIcon" name="globe" item-left></ion-icon>\n      </ion-item >\n      <ion-item class="addrInput">\n        <ion-label><ion-icon class="addrIcon" name="pin" item-left></ion-icon></ion-label>\n        <ion-input maxlength="80" class="addrInput" formControlName="address" type="text" placeholder="ΔΙΕΥΘΥΝΣΗ" ></ion-input>\n      </ion-item>\n      <ion-item class="addrInput">\n        <ion-label><ion-icon class="addrIcon" name="pin" item-left></ion-icon></ion-label>\n        <ion-input maxlength="20" class="addrInput" formControlName="city" type="text" placeholder="ΠΟΛΗ" ></ion-input>\n      </ion-item>\n      <ion-item class="addrInput">\n        <ion-label><ion-icon class="addrIcon" name="pin" item-left></ion-icon></ion-label>\n        <ion-input maxlength="8" class="addrInput" formControlName="postCode" type="text" placeholder="Τ.Κ." ></ion-input>\n      </ion-item>\n      <ion-item class="addrInput">\n        <ion-label><ion-icon class="addrIcon" name="call" item-left></ion-icon></ion-label>\n        <ion-input maxlength="15" class="addrInput" formControlName="mobile" type="text" placeholder="ΚΙΝΗΤΟ ΤΗΛΕΦΩΝΟ" ></ion-input>\n      </ion-item>\n      <ion-item class="addrInput">\n        <ion-label><ion-icon class="addrIcon" name="mail" item-left></ion-icon></ion-label>\n        <ion-input maxlength="30" class="addrInput" formControlName="email" type="text" placeholder="EMAIL" ></ion-input>\n      </ion-item>\n    </ion-list>\n    <div margin-top>\n      <button class="form-button" color="button-color" [disabled]="!userInfo.valid" (click)="saveAddr()" ion-button round>ΑΠΟΘΗΚΕΥΣΗ</button>\n    </div>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\address-modal\address-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], AddressModalPage);
    return AddressModalPage;
}());

//# sourceMappingURL=address-modal.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driver_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__driver_driver__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the FindingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FindingPage = (function () {
    function FindingPage(nav, driverService) {
        var _this = this;
        this.nav = nav;
        this.driverService = driverService;
        // get list drivers
        this.drivers = driverService.getAll();
        setTimeout(function () {
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_3__driver_driver__["a" /* DriverPage */]);
        }, 5000);
    }
    FindingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-finding',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\finding\finding.html"*/'<!--\n  Generated template for the FindingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-navbar color="primary" >\n      <ion-title>Βρίσκουμε για εσάς τον κοντινότερο Διανομέα</ion-title>\n    </ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- Green circle with marker icon in the center -->\n  <div padding text-center="">\n    <div class="location-animation circle">\n      <ion-icon name="pin" color="light" ></ion-icon>\n    </div>\n  </div>\n\n  <ion-list class="list-no-border list-drivers" padding>\n    <ion-item *ngFor="let driver of drivers">\n      <span>{{ driver.name }}</span>\n      <span class="pull-right">{{ driver.status }}...</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\finding\finding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_driver_service__["a" /* DriverService */]])
    ], FindingPage);
    return FindingPage;
}());

//# sourceMappingURL=finding.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driver_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tracking_tracking__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverPage = (function () {
    function DriverPage(nav, driverService, navParams) {
        this.nav = nav;
        this.driverService = driverService;
        this.navParams = navParams;
        // get driver info
        this.driver = driverService.getItem(1);
    }
    DriverPage.prototype.track = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__tracking_tracking__["a" /* TrackingPage */]);
    };
    DriverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverPage');
    };
    DriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-driver',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\driver\driver.html"*/'<!--\n  Generated template for the DriverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-navbar color="primary" >\n      <ion-title>Εύρεση Διανομέα</ion-title>\n    </ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="driver-top dark-bg light" text-center>\n    <span>Ουαου! Βρήκαμε για εσάς τον κοντινότερο διανομέα</span>\n  </div>\n\n  <div class="driver-info rlt" text-center>\n\n    <div class="driver-picture" padding-bottom>\n\n      <img class="circle" src="assets/img/thumb/adam.jpg" alt=""/>\n    </div>\n\n    <div no-margin>Γεια, το όνομα μου είναι</div>\n    <h3 no-margin ion-text color="primary" >{{ driver.name }}</h3>\n    <div no-margin>και βρίσκομαι {{ driver.distance }}KM μακρυά</div>\n\n    <ion-grid class="driver-plate">\n      <ion-row>\n        <ion-col>\n          <div class="text-hint">Αριθμός Πινακίδας</div>\n          <strong margin-top>{{ driver.plate }}</strong>\n        </ion-col>\n        <ion-col>\n          <div class="text-hint">Παρακαλώ πληρώστε με</div>\n          <strong>Μετρητά</strong>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div ion-button block color="primary" (click)="track()">ΕΠΟΜΕΝΟ</div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\driver\driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], DriverPage);
    return DriverPage;
}());

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_driver_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the TrackingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TrackingPage = (function () {
    function TrackingPage(nav, navParams, driverService, platform, alertCtrl) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.driverService = driverService;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        // map height
        this.mapHeight = 480;
        // get driver info
        this.driver = driverService.getItem(1);
        // show rating popup
        setTimeout(function () {
            _this.showRating();
        }, 3000);
    }
    TrackingPage.prototype.ionViewDidLoad = function () {
        // init map
        this.initializeMap();
    };
    TrackingPage.prototype.initializeMap = function () {
        var _this = this;
        var latLng = new google.maps.LatLng(21.0318202, 105.8495298);
        var mapOptions = {
            center: latLng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false
        };
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        // get ion-view height
        var viewHeight = window.screen.height - 44; // minus nav bar
        // get info block height
        var infoHeight = document.getElementsByClassName('tracking-info')[0].scrollHeight;
        this.mapHeight = viewHeight - infoHeight;
        var options = { timeout: 120000, enableHighAccuracy: true };
        navigator.geolocation.getCurrentPosition(function (position) {
            var newLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.map.setCenter(newLatLng);
            new google.maps.Marker({
                map: _this.map,
                animation: google.maps.Animation.DROP,
                position: _this.map.getCenter()
            });
        }, function (error) {
            console.log(error);
        }, options);
        // refresh map
        setTimeout(function () {
            google.maps.event.trigger(_this.map, 'resize');
        }, 300);
    };
    // show rating popup
    TrackingPage.prototype.showRating = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Σας ευχαριστούμε που επιλέξατε το FastDeliveryHellas',
            message: 'Ελπίζουμε να απολάυσατε τις υπηρεσίες μας. Για τυχόν παρατηρήσεις παρακαλούμε μην διστάσετε να επικοινωνήσετε μαζί μας',
            buttons: [
                {
                    text: 'Ακυρωση',
                    handler: function (data) {
                        console.log('Cancel clicked');
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                },
                {
                    text: 'Αποστολη',
                    handler: function (data) {
                        console.log('Saved clicked');
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        prompt.present();
    };
    TrackingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tracking',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\tracking\tracking.html"*/'<!--\n  Generated template for the TrackingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-navbar color="primary" >\n      <ion-title>Ο Διανομέας είναι καθοδόν</ion-title>\n    </ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <!-- Show map here -->\n  <div id="map" [ngStyle]="{height: mapHeight + \'px\'}"></div>\n\n  <ion-list class="list-no-border">\n\n    <ion-item class="tracking-info no-border">\n      <img class="circle icon pull-left" src="assets/img/thumb/adam.jpg" item-left alt=""/>\n      <div class="item-content">\n        <div>\n          <strong>{{ driver.plate }}</strong>\n          <div>{{ driver.name }}</div>\n        </div>\n\n        <div class="action-icons">\n          <ion-icon name="call" color="secondary" ></ion-icon>\n          <ion-icon name="mail" color="secondary" ></ion-icon>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\tracking\tracking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_driver_service__["a" /* DriverService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TrackingPage);
    return TrackingPage;
}());

//# sourceMappingURL=tracking.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_service_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validator__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_password_validation__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_category__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//@IonicPage()
var SignupPage = (function () {
    function SignupPage(dataService, formBuilder, navCtrl, navParams) {
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.signUpForm = this.formBuilder.group({
            firstName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Himanshu', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validator__["a" /* regexValidators */].name)
            ])),
            lastName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Sharma', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validator__["a" /* regexValidators */].name)
            ])),
            mobile: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('1234567890', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(10),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(15),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validator__["a" /* regexValidators */].phone)
            ])),
            postCode: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('123456', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validator__["a" /* regexValidators */].postalCode)
            ])),
            country: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('United States', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required),
            location: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('Florida', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validator__["a" /* regexValidators */].location),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(3),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(20)
            ])),
            address: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('123, Melbourne street', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validator__["a" /* regexValidators */].address),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].minLength(20),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].maxLength(150)
            ])),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('abc@gmail.com', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validator__["a" /* regexValidators */].email)
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('ost@2018', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validator__["a" /* regexValidators */].password)
            ])),
            confirmPass: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('ost@2018', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].compose([
                this.confirmPass,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_5__validator__["a" /* regexValidators */].password)
            ]))
        }, { validator: __WEBPACK_IMPORTED_MODULE_6__signup_password_validation__["a" /* PasswordValidation */].MatchPassword });
    }
    SignupPage.prototype.confirmPass = function () {
        return function (control) {
            return { 'confirm_pass': false };
        };
    };
    SignupPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__category_category__["a" /* CategoryPage */]);
    };
    SignupPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SignupPage');
        this.dataService.getCountry().then(function (data) {
            _this.countries = data;
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\signup\signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ΕΓΓΡΑΦΗ ΧΡΗΣΤΗ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="auth-bg">\n\n  <div class="auth-content">\n\n  <div class="light-bg">\n  <form [formGroup]="signUpForm" style="height:100%" >\n    <ion-row>\n     <ion-col >\n        <ion-item no-padding>\n            <ion-label><ion-icon name="contact"></ion-icon></ion-label>\n          <ion-input maxlength="20" type="text" [formControl]="signUpForm.controls[\'firstName\']" placeholder="ΟΝΟΜΑ" ></ion-input>\n        </ion-item>\n     </ion-col>\n     <ion-col >\n        <ion-item no-padding>\n            <ion-label><ion-icon name="contact"></ion-icon></ion-label>\n          <ion-input maxlength="20" type="text" [formControl]="signUpForm.controls[\'lastName\']" placeholder="ΕΠΙΘΕΤΟ" ></ion-input>\n        </ion-item>\n     </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col >\n           <ion-item no-padding>\n              <ion-label><ion-icon name="call"></ion-icon></ion-label>\n             <ion-input maxlength="15" type="text" [formControl]="signUpForm.controls[\'mobile\']" placeholder="ΚΙΝΗΤΟ ΤΗΛ" ></ion-input>\n           </ion-item>\n        </ion-col>\n        <ion-col >\n           <ion-item no-padding>\n              <ion-label><ion-icon name="pin"></ion-icon></ion-label>\n             <ion-input maxlength="8" type="text" [formControl]="signUpForm.controls[\'postCode\']" placeholder="Τ.Κ." ></ion-input>\n           </ion-item>\n        </ion-col>\n       </ion-row>\n\n    <ion-item no-padding>\n      <ion-select [formControl]="signUpForm.controls[\'country\']" placeholder="Select Country" class="myCustomSelect">\n        <ion-label>ΧΩΡΑ</ion-label>\n        <ion-option  *ngFor="let c of countries" [value]="c.country" >{{c.country}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item no-padding>\n      <ion-label><ion-icon name="pin"></ion-icon></ion-label>\n      <ion-input maxlength="30" type="text" [formControl]="signUpForm.controls[\'location\']" placeholder="ΠΟΛΗ" ></ion-input>\n    </ion-item>\n    <ion-item no-padding>\n        <ion-label><ion-icon name="pin"></ion-icon></ion-label>\n      <ion-input maxlength="80" type="text" interface="popover" [formControl]="signUpForm.controls[\'address\']" placeholder="ΔΙΕΥΘΥΝΣΗ" ></ion-input>\n    </ion-item>\n    <ion-item no-padding>\n        <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n      <ion-input maxlength="30" type="email" [formControl]="signUpForm.controls[\'email\']" placeholder="EMAIL" ></ion-input>\n    </ion-item>\n\n    <ion-row>\n        <ion-col>\n           <ion-item no-padding>\n              <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n             <ion-input maxlength="20" type="password" [formControl]="signUpForm.controls[\'password\']" placeholder="ΚΩΔΙΚΟΣ" ></ion-input>\n           </ion-item>\n        </ion-col>\n        <ion-col>\n           <ion-item no-padding>\n              <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n             <ion-input maxlength="20" type="password" [formControl]="signUpForm.controls[\'confirmPass\']" placeholder="ΕΠΑΛΗΘΕΥΣΗ ΚΩΔΙΚΟΥ" ></ion-input>\n           </ion-item>\n        </ion-col>\n       </ion-row>\n\n    <div margin-top>\n      <button ion-button block [disabled]="!signUpForm.valid" (click)="signUp()">ΕΓΓΡΑΦΗ</button>\n    </div>\n  </form>\n\n  </div>\n\n\n  <div padding=""></div>\n\n  <!-- Other links -->\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <span ion-text color="light" >Ξεχάσατε τον κωδικό σας;</span>\n      </ion-col>\n      <ion-col>\n        <span ion-text color="light" >\n          Έχετε ήδη λογαριασμό;\n          <span ion-text color="primary"  (click)="login()">Σύνδεση</span>\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidation; });
var PasswordValidation = (function () {
    function PasswordValidation() {
    }
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPass').value; // to get value in input tag
        if (password != confirmPassword) {
            AC.get('confirmPass').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());

//# sourceMappingURL=password-validation.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_service_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validator__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//@IonicPage()
var LoginPage = (function () {
    function LoginPage(facebook, toastCtrl, dataService, formBuilder, navCtrl, navParams, alertCtrl) {
        var _this = this;
        this.facebook = facebook;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.FB_APP_ID = 2089135334738809;
        this.loginForm = "login";
        this.isLoggedIn = false;
        this.credentialsForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('test', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__validator__["a" /* regexValidators */].email),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required
            ])),
            password: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('ost@2018', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__validator__["a" /* regexValidators */].password),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].minLength(8),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].maxLength(20)
            ]))
        });
        facebook.getLoginStatus()
            .then(function (res) {
            console.log(res.status);
            if (res.status === "connect") {
                _this.isLoggedIn = true;
            }
            else {
                _this.isLoggedIn = false;
            }
        })
            .catch(function (e) { return console.log(e); });
        this.resetForm = this.formBuilder.group({
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]('sales@opensourcetechnologies.com', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__validator__["a" /* regexValidators */].email),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required
            ]))
        });
    }
    LoginPage.prototype.login = function () {
        var valid = this.dataService.validateUser(this.credentialsForm.value.email, this.credentialsForm.value.password);
        if (valid) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__category_category__["a" /* CategoryPage */]);
        }
        else {
            var loginFailed = this.toastCtrl.create({
                message: 'Το email ή ο κωδικός σας είναι λάθος. Δοκιμάστε ξανά.',
                duration: 1000,
                position: 'bottom'
            });
            loginFailed.present();
        }
    };
    /*loginFB() {
    this.facebook.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if(res.status === "connected") {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }*/
    /*login(loginType: string) {
      //var loader = this.presentLoading();
    
      this.getToken(loginType)
        .then((token) => {
          /*var catProm = this.setCategories(token);
          var ticketProm = this.setTickets(token);
          var userProm = this.setUserInfo(token);
          var tokenProm = this.setToken(token);
          /*var scoresProm = this.setHighscores(token);
    
          //Promise.all([catProm, ticketProm, userProm, tokenProm, scoresProm]).then(() => {
          Promise.all([userProm, tokenProm]).then(() => {
            loader.dismiss();
            this.navCtrl.setRoot(TabsPage);
          }, (error) => {
            loader.dismiss();
            console.log(error);
          });
        }, (error) => {
          loader.dismiss();
          console.log(error);
        })
    }
    
    getUserDetail(userid) {
    this.facebook.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
      .then(res => {
        console.log(res);
        this.users = res;
      })
      .catch(e => {
        console.log(e);
      });
    }*/
    LoginPage.prototype.logout = function () {
        var _this = this;
        this.facebook.logout()
            .then(function (res) { return _this.isLoggedIn = false; })
            .catch(function (e) { return console.log('Error logout from Facebook', e); });
    };
    /*getToken(loginType: string) {
      if (loginType == "FB")
        return this.getTokenByFB();
      /*else if (loginType == "TW")
        return this.getTokenByTW();
      else if (loginType == "GL")
        return this.getTokenByGL();
      else
        return this.getTokenBySQ();
    }
  
    getTokenByFB() {
      //the permissions your facebook app needs from the user
      var permissions = ["public_profile", "email"];
  
      return new Promise<string>((resolve, reject) => {
        this.facebook.login(permissions)
          .then((response) => {
            this.getTokenUsingFbToken(response.authResponse.accessToken)
              .then((token) => {
                resolve(token);
              } , (error) => {
                if (error.status == 412 && error.json() && error.json().fbid && error.json().firstName && error.json().lastName){
                  this.goToRegisterEmailOnlyPage(error.json().fbid, error.json().firstName, error.json().lastName);
                  reject(error);
                }
                else {
                  reject(error);
                  this.showError("Could not login");
                  console.log(error);
                }
              });
          }, (error) => {
            reject(error);
            this.showError("Could not login");
            console.log(error);
          });
      });
    }
  
    getTokenUsingFbToken(FbToken) {
      return new Promise<string>((resolve, reject) => {
        //TODO: take api url from enviroment config
        this.http.get("https://api.shopping-quiz.com/v1/fblogin/" + FbToken)
          .map((res) => {
            return res.text();
          })
          .toPromise()
          .then((token) => {
            resolve(token);
          }, (error) => {
            reject(error);
            console.log(error);
          });
      });
    }
  
    getTokenBySQ() {
      var loginBody = {
        username: this.credentialsForm.controls["email"].value.toLowerCase().trim(),
        password: this.credentialsForm.controls["password"].value
      };
  
      return new Promise<string>((resolve, reject) => {
        //TODO: take api url from enviroment config
        this.http.post("https://api.shopping-quiz.com/v1/login", loginBody)
          .map(res => res.text())
          .toPromise()
          .then((token) => {
            resolve(token);
          }, (resp) => {
            if (resp.status == 401) this.showError("Λάθος Κωδικός. Βεβαιωθείτε ότι έχετε επαληθεύσει τον email λογαριασμό σας και ότι τα στοιχεία που έχετε εισάγει είναι σωστά.");
            else if (resp.status == 406) this.showError("Έχετε εγγραφεί με facebook. Παρακαλώ συνδεθείτε με τον αντίστοιχο τρόπο.");
            reject(resp);
            console.log(resp);
          });
      });
    }
  
    setToken(SQtoken: string): Promise<any> {
      return new Promise((resolve, reject) => {
        this.nativeStorage.setItem('SQtoken', SQtoken)
          .then(() => {
            resolve();
          }, (error) => {
            reject(error);
            console.log(error);
          });
      });
    }
  
    setUserInfo(SQtoken: string): Promise<any> {
      return new Promise((resolve, reject) => {
  
        var headers = new Headers();
        headers.append('x-sqtoken', SQtoken);
        var requestOption = new RequestOptions({ headers: headers });
  
        //TODO: take api url from enviroment config
        this.http.get("https://api.shopping-quiz.com/v1/data/me", requestOption)
          .map((res) => {
            var user = res.json();
            user.name = ((user.firstName) ? user.firstName : "") + " " + ((user.lastName) ? user.lastName : "");
            return user;
          })
          .toPromise()
          .then((user) => {
            this.nativeStorage.setItem('user', user)
              .then(() => {
                resolve();
              }, (error) => {
                reject(error);
                console.log(error);
              });
          }, (error) => {
            reject(error);
            console.log(error);
          });
  
      });
    }*/
    LoginPage.prototype.reset = function () {
        var alert = this.alertCtrl.create({
            title: 'Επαναφορά Κωδικού',
            subTitle: 'Ένας νέος κωδικός στάλθηκε στην διεύθυνση email σας.',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\login\login.html"*/'<ion-header no-border class="header">\n\n  <ion-navbar no-margin no-padding>\n    <ion-title>ΣΥΝΔΕΣΗ</ion-title>\n  </ion-navbar>\n  <div no-lines padding>\n    <ion-segment class="menu" [(ngModel)]="loginForm">\n      <ion-segment-button value="login">\n        ΣΥΝΔΕΣΗ\n      </ion-segment-button>\n      <ion-segment-button value="reset">\n        ΕΠΑΝΑΦΟΡΑ ΚΩΔΙΚΟΥ\n      </ion-segment-button>\n    </ion-segment>\n    </div>\n\n</ion-header>\n\n\n<ion-content margin-top padding-right padding-left [ngSwitch]="loginForm">\n  <form [formGroup]="credentialsForm" *ngSwitchCase="\'login\'" margin>\n    <ion-item no-padding no-lines>\n      <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n      <ion-input maxlength="35" [formControl]="credentialsForm.controls[\'email\']" type="email" placeholder="EMAIL"></ion-input>\n    </ion-item>\n    <ion-item no-padding no-lines>\n      <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n      <ion-input maxlength="15" [formControl]="credentialsForm.controls[\'password\']" type="password" placeholder="ΚΩΔΙΚΟΣ"></ion-input>\n    </ion-item>\n    <div>\n      <button margin-top ion-button block [disabled]="!credentialsForm.valid" (click)="login()">ΣΥΝΔΕΣΗ</button>\n    </div>\n    <div>\n    <button ion-button round icon-left class="button-fb" (click)="loginFB()">\n      <ion-icon name="logo-facebook"></ion-icon>\n      ΣΥΝΔΕΣΗ ΜΕΣΩ FACEBOOK\n    </button>\n    <!--<button ion-button round icon-left (click)="login(\'TW\')">\n      <ion-icon name="logo-twitter"></ion-icon>\n      ΣΥΝΔΕΣΗ ΜΕΣΩ TWITTER\n    </button>\n    <button ion-button round icon-left (click)="login(\'GL\')">\n      <ion-icon name="logo-google"></ion-icon>\n      ΣΥΝΔΕΣΗ ΜΕΣΩ GOOGLE\n    </button>--->\n  </div>\n</form>\n\n\n  <form [formGroup]="resetForm" *ngSwitchCase="\'reset\'" margin>\n    <ion-item no-padding>\n        <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n      <ion-input maxlength="35" [formControl]="resetForm.controls[\'email\']" type="email" placeholder="EMAIL"></ion-input>\n    </ion-item>\n      <div>\n        <button margin-top ion-button block color="primary" [disabled]="!resetForm.valid" (click)="reset()">ΕΠΑΝΑΦΟΡΑ ΚΩΔΙΚΟΥ</button>\n      </div>\n  </form>\n  <ion-item text-center no-lines>\n    <ion-note>FASTDELIVERYHELLAS</ion-note><br>\n    <ion-note>info@fastdeliveryhellas.gr</ion-note>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_0__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__location_modal_location_modal__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_category__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//@IonicPage()
var LocationPage = (function () {
    function LocationPage(modalCtrl, nativeGeocoder, geolocation, navCtrl, navParams) {
        this.modalCtrl = modalCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.location = '';
    }
    LocationPage.prototype.locate = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
                .then(function (result) {
                // console.log(JSON.stringify(result));
                _this.location = JSON.stringify(result);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */]);
            })
                .catch(function (error) { console.log(error); _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */]); });
        }).catch(function (error) {
            console.log('Error getting location', error);
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */]);
        });
    };
    LocationPage.prototype.locateManually = function () {
        var _this = this;
        var locationModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__location_modal_location_modal__["a" /* LocationModalPage */]);
        locationModal.present();
        locationModal.onDidDismiss(function (data) {
            _this.location = data;
            console.log('User Location : ', _this.location);
            if (_this.location !== undefined) {
                setTimeout(function () {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */]);
                }, 2000);
            }
        });
    };
    LocationPage.prototype.skip = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */]);
    };
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-location',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\location\location.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ΕΠΙΛΟΓΗ ΤΟΠΟΘΕΣΙΑΣ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="top-marg" text-center>\n    <img class="logo-size" src="assets/icon/map.png">\n    <p class="logo-title">Η Τοποθεσία σας</p>\n    <p>{{location}}</p>\n  </div>\n  <div text-center>\n    <button color="button-color" class="top-marg width" ion-button round (click)="locate()">\n      ΧΡΗΣΗ ΤΗΣ ΤΟΠΟΘΕΣΙΑΣ ΣΑΣ\n    </button>\n    <button class="width btn" margin-top ion-button round (click)="locateManually()">\n      ΕΠΙΛΟΓΗ ΤΟΠΟΘΕΣΙΑΣ ΧΕΙΡΟΚΙΝΗΤΑ\n    </button>\n  </div>\n  <div text-center>\n    <button clear margin-top ion-button round (click)="skip()">\n      <b>Skip</b>\n    </button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\location\location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], LocationPage);
    return LocationPage;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//@IonicPage()
var LocationModalPage = (function () {
    function LocationModalPage(ref, viewCtrl, navCtrl, navParams) {
        this.ref = ref;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.autocomplete = {
            query: ''
        };
    }
    LocationModalPage.prototype.updateSearch = function () {
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            self.autocompleteItems = [];
            if (predictions !== null) {
                predictions.forEach(function (prediction) {
                    self.autocompleteItems.push(prediction);
                    self.ref.detectChanges();
                });
            }
        });
    };
    LocationModalPage.prototype.getLocation = function (pos) {
        console.log(pos);
        this.viewCtrl.dismiss(pos);
    };
    LocationModalPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    LocationModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-location-modal',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\location-modal\location-modal.html"*/'<ion-header no-border>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="viewCtrl.dismiss()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title>ΕΠΙΛΟΓΗ ΤΟΠΟΘΕΣΙΑΣ</ion-title>\n  </ion-navbar>\n  <ion-searchbar\n[(ngModel)]="autocomplete.query"\n[showCancelButton]="true"\n(ionInput)="updateSearch()"\nplaceholder="Εισάγετε και επιλέξτε την τοποθεσία σας ...">\n</ion-searchbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-item *ngFor="let item of autocompleteItems" (click)="getLocation(item.description)">\n        {{ item.description }}\n        </ion-item>\n        </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\location-modal\location-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LocationModalPage);
    return LocationModalPage;
}());

//# sourceMappingURL=location-modal.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_data_service_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//@IonicPage()
var FilterModalPage = (function () {
    function FilterModalPage(dataService, viewCtrl, navCtrl, navParams) {
        var _this = this;
        this.dataService = dataService;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.filterCost = 0;
        this.prodCode = [];
        this.checkedProd = [];
        dataService.getProducts().then(function (data) {
            console.log(data);
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    var element = data[key];
                    if (_this.prodCode.indexOf(element['productCode']) === -1) {
                        _this.prodCode.push(element['productCode']);
                    }
                }
            }
        });
    }
    FilterModalPage.prototype.datachanged = function (e) {
        console.log(e);
        if (this.checkedProd.indexOf(e._item._label.text) === -1) {
            this.checkedProd.push(e._item._label.text);
        }
        else {
            var index = this.checkedProd.indexOf(e._item._label.text);
            this.checkedProd.splice(index, 1);
        }
        console.log(this.checkedProd);
    };
    FilterModalPage.prototype.dismiss = function () {
        var data = { 'filterCost': this.filterCost, 'filterBrand': this.checkedProd };
        this.viewCtrl.dismiss(data);
    };
    FilterModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FilterModalPage');
    };
    FilterModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-filter-modal',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\filter-modal\filter-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="viewCtrl.dismiss()">\n              <ion-icon name="close"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title>ΦΙΛΤΡΑ</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n        <ion-list-header no-margin>\n            ΕΥΡΟΣ ΤΙΜΗΣ\n      </ion-list-header>\n        <ion-item>\n          <ion-range [(ngModel)]="filterCost" color="primary" pin="true">\n              <ion-icon small range-left name="logo-euro"></ion-icon>\n              <ion-icon range-right name="logo-euro"></ion-icon>\n          </ion-range>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n          <ion-list-header no-margin>\n              ΕΠΙΧΕΙΡΗΣΕΙΣ\n        </ion-list-header>\n        <ion-item *ngFor="let p of prodCode">\n            <ion-label>{{p}}</ion-label>\n            <ion-checkbox [(ngModel)]="p.checked" (ionChange)="datachanged($event)"></ion-checkbox>\n          </ion-item>\n        </ion-list>\n        <button ion-button (click)="dismiss()">ΕΦΑΡΜΟΓΗ</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\filter-modal\filter-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]])
    ], FilterModalPage);
    return FilterModalPage;
}());

//# sourceMappingURL=filter-modal.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_notification_notification__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_product_detail_product_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_change_settings_modal_change_settings_modal__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_settings_settings__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_location_modal_location_modal__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_location_location__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_address_modal_address_modal__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_sort_sort__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_search_search__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_filter_filter__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_product_list_product_list__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_email_composer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_signaturepad__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_storage__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_driver_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_signup_signup__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_category_category__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_login_login__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_cart_cart__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_checkout_checkout__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_data_service_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_filter_modal_filter_modal__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_driver_driver__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_feedback_feedback__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_finding_finding__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_tracking_tracking__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_profile_profile__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_about_about__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_vibration__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// import services

// end import services

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_16__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_26__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_driver_driver__["a" /* DriverPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_product_list_product_list__["a" /* ProductListPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_finding_finding__["a" /* FindingPage */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_36__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_sort_sort__["a" /* SortPipe */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_filter_filter__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_32__pages_filter_modal_filter_modal__["a" /* FilterModalPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_address_modal_address_modal__["a" /* AddressModalPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_location_modal_location_modal__["a" /* LocationModalPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_change_settings_modal_change_settings_modal__["a" /* ChangeSettingsModalPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_notification_notification__["a" /* NotificationPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_20_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_17_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_21__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_26__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_driver_driver__["a" /* DriverPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_product_list_product_list__["a" /* ProductListPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_filter_modal_filter_modal__["a" /* FilterModalPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_tracking_tracking__["a" /* TrackingPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_finding_finding__["a" /* FindingPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_address_modal_address_modal__["a" /* AddressModalPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_location_location__["a" /* LocationPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_location_modal_location_modal__["a" /* LocationModalPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_2__pages_change_settings_modal_change_settings_modal__["a" /* ChangeSettingsModalPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_notification_notification__["a" /* NotificationPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_22__services_driver_service__["a" /* DriverService */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_vibration__["a" /* Vibration */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_facebook__["a" /* Facebook */],
                { provide: __WEBPACK_IMPORTED_MODULE_16__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_17_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__providers_data_service_data_service__["a" /* DataServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_email_composer__["a" /* EmailComposer */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DRIVERS; });
var DRIVERS = [
    {
        id: 1,
        name: "George Manias",
        plate: "AΡΝ4933",
        brand: "Suzuki",
        distance: 0.6,
        status: "Bidding"
    },
    {
        id: 2,
        name: "Aggelos Dimitriou",
        plate: "ΚΡΒ4566",
        brand: "BMW",
        distance: 0.7,
        status: "Contacting"
    },
    {
        id: 3,
        name: "Ioannis Papadakis",
        plate: "HΡΚ5568",
        brand: "Ideal",
        distance: 0.8,
        status: "Contacting"
    },
    {
        id: 4,
        name: "Bill Kampetsis",
        plate: "IBK3894",
        brand: "VW",
        distance: 0.9,
        status: "Contacting"
    },
];
//# sourceMappingURL=mock-drivers.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsAndConditionsPage = (function () {
    function TermsAndConditionsPage() {
    }
    TermsAndConditionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'terms-and-conditions',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\TermsAndConditions\TermsAndConditions.html"*/'<ion-header>\n  <ion-navbar color="navbar">\n    <ion-title>\n      ΟΡΟΙ ΧΡΗΣΗΣ\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color" padding>\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n        <p>\n          Σας καλωσορίζουμε στην Ιστοσελίδα/Εφαρμογή ‘’ShoppingQuiz’’. Η Ιστοσελίδα αποτελεί μια online πλατφόρμα μέσω της οποίας προωθούνται παροχές και υπηρεσίες συμβεβλημένων επιχειρήσεων. Μέσω της online πλατφόρμας, ο επισκέπτης / χρήστης της ιστοσελίδας μπορεί\n          να προμηθευτεί τις ως άνω παροχές και υπηρεσίες αφού προηγηθεί από μέρους του επιλογή της συνεργαζόμενης επιχείρησης μέσα από λίστα συνεργαζόμενων επιχειρήσεων και σειρά νικηφόρων παιχνιδιών – quiz τα οποία κερδίζοντας του παρέχουν πόντους,\n          υπό τους όρους που περιγράφονται κατωτέρω και τους οποίους ο επισκέπτης / χρήστης αποδέχεται πλήρως και ανεπιφύλακτα. Βεβαιωθείτε ότι συμφωνείτε με τους παρακάτω όρους, διότι η περαιτέρω χρήση και η περιήγησή σας στην Ιστοσελίδα/Εφαρμογή συνεπάγεται\n          τη ρητή και ανεπιφύλακτη αποδοχή αυτών. ΣΗΜΕΙΩΣΗ: Η πολιτική Προστασίας Προσωπικών Δεδομένων (Πολιτική Απορρήτου) αποτελεί αναπόσπαστο μέρος των Όρων Χρήσης της ιστοσελίδας/εφαρμογή ‘’ShoppingQuiz’’\n        </p>\n        <h3>1. ΕΙΣΑΓΩΓΗ</h3>\n        <p>\n          Η Ιστοσελίδα/Εφαρμογή ‘’ShoppingQuiz’’ αποτελεί ιδιοκτησία της επιχείρησης "ShoppingQuiz Μονοπρόσωπη Ι.Κ.Ε”, με έδρα την Αθήνα Αττικής, οδός Κειριαδών αριθμός 5, Τ.Κ. 11854 (ΑΦΜ: 800856596 ΔΟΥ ΣΤ’ ΑΘΗΝΩΝ).\n        </p>\n        <h3>2. ΠΝΕΥΜΑΤΙΚΗ ΙΔΙΟΚΤΗΣΙΑ</h3>\n        <p>\n          Όλο το περιεχόμενο της Ιστοσελίδας/Εφαρμογής, συμπεριλαμβανομένων εικόνων, γραφικών, φωτογραφιών, σχεδίων, κειμένων, παρεχομένων υπηρεσιών αποτελούν πνευματική ιδιοκτησία της " ShoppingQuiz Μονοπρόσωπη Ι.Κ.Ε” και / ή των συμβεβλημένων επιχειρήσεων και\n          προστατεύονται κατά τις σχετικές διατάξεις του ελληνικού δικαίου, του ευρωπαϊκού δικαίου και των διεθνών συμβάσεων. Τα ονόματα, εικόνες, λογότυπα και διακριτικά γνωρίσματα που αντιπροσωπεύουν την ‘’ShoppingQuiz’’ και τις υπηρεσίες της, είναι\n          αποκλειστικά σήματα και διακριτικά γνωρίσματά της και προστατεύονται από τους ελληνικούς, κοινοτικούς και διεθνείς νόμους περί εμπορικών σημάτων και βιομηχανικής και πνευματικής ιδιοκτησίας. Σε κάθε περίπτωση η εμφάνιση και έκθεσή τους στην\n          παρούσα Ιστοσελίδα/Εφαρμογή δεν θα πρέπει κατά κανένα τρόπο να εκληφθεί ως μεταβίβαση ή εκχώρηση άδειας ή δικαιώματος χρήσης τους από την δικαιούχο επιχείρηση “ ShoppingQuiz Μονοπρόσωπη Ι.Κ.Ε”. Για τους λόγους αυτούς απαγορεύεται οποιαδήποτε\n          αντιγραφή, αναλογική / ψηφιακή εγγραφή και μηχανική αναπαραγωγή, διανομή, μεταφορά, καταφόρτωση (downloading), μεταποίηση, μεταπώληση, δημιουργία παράγωγης εργασίας ή παραπλάνηση του κοινού. Τυχόν αναπαραγωγή, επανέκδοση, φόρτωση, ανακοίνωση,\n          διάδοση ή μετάδοση ή οποιαδήποτε άλλη χρήση του περιεχομένου της Ιστοσελίδας/Εφαρμογής με οποιονδήποτε τρόπο ή μέσο για εμπορικούς ή άλλους σκοπούς επιτρέπεται μόνο κατόπιν προηγούμενης γραπτής άδειας της “ShoppingQuiz Μονοπρόσωπη Ι.Κ.Ε ” ή\n          οποιουδήποτε άλλου νόμιμου Δικαιούχου των ανωτέρω δικαιωμάτων.\n        </p>\n        <h3>3. ΑΝΤΙΚΕΙΜΕΝΟ ΥΠΗΡΕΣΙΩΝ</h3>\n        <p>\n          Μέσω της Ιστοσελίδας/Εφαρμογής δύνανται να διαφημίζονται και να εμφανίζονται και προωθούνται παροχές τις οποίες ο επισκέπτης / μέλος / χρήστης της Ιστοσελίδας/Εφαρμογής μπορεί να προμηθευτεί πραγματοποιώντας ΔΩΡΕΑΝ παιχνίδια ερωτήσεων απαντήσεων - quiz,\n          απαντώντας δηλαδή σωστά σε ερωτήσεις που τίθενται από την ‘’ShoppingQuiz’’, υπό τους όρους του παρόντος. Κάθε χρήστης έχει τη δυνατότητα, μόνο αν ο ίδιος το επιλέξει, να επισπεύσει την πρόοδο του παιχνιδιού και να αυξήσει τους πόντους του αγοράζοντας\n          ‘’βοήθειες’’. Σε καμία περίπτωση και σε κανένα επίπεδο του παιχνιδιού δεν είναι υποχρεωτική η αγορά ‘’βοηθειών’’. Η ‘’ShoppingQuiz’’ και η “ShoppingQuiz Μονοπρόσωπη Ι.Κ.Ε” δεν αποκτά καθ’ οιονδήποτε τρόπο την ιδιότητα του πωλητή, συμμετέχει,\n          δε, στη διαδικασία προώθησης των προϊόντων/δώρων/δωροεπιταγών των συνεργαζόμενων επιχειρήσεων αποκλειστικά και μόνο ως τρίτος-διαμεσολαβητής. Πραγματοποιώντας ο χρήστης ένα ή ένα σύνολο νικηφόρων παιχνιδιών με την αντίστοιχη συλλογή πόντων μέσω\n          της ‘’ShoppingQuiz’’ δημιουργείται σχέση συμβολαίου (νομικά δεσμευτική) ανάμεσα στο χρήστη και τη συνεργαζόμενη επιχείρηση για την οποία επέλεξε να παίξει ο χρήστης. Από τη στιγμή της ολοκλήρωσης της διαδικασίας συλλογής των πόντων και τη μετατροπή\n          τους σε δωροεπιταγή συγκεκριμένης αξίας, η οποία θα εξαργυρωθεί με προϊόντα της χορηγούσας τη δωροεπιταγή επιχείρησης, η ‘’ShoppingQuiz’’ ενεργεί αποκλειστικά ως μεσάζων ανάμεσα στον χρήστη και τη συνεργαζόμενη επιχείρηση, μεταφέροντας τα στοιχεία\n          του χρήστη που κέρδισε, ήτοι το ονοματεπώνυμο και την ηλεκτρονική διεύθυνσή του καθώς και το ύψος του ποσού που κέρδισε. Κατά συνέπεια η ‘’ShoppingQuiz’’ και η “ShoppingQuiz Μονοπρόσωπη Ι.Κ.Ε ” δεν ευθύνονται έναντι των μελών / χρηστών της Ιστοσελίδας/Εφαρμογής\n          για τις πληροφορίες που περιέχονται στην Ιστοσελίδα/Εφαρμογή ή την ποιότητα των υπηρεσιών που παρέχονται από τις συνεργαζόμενες επιχειρήσεις ή από ζημιές που τυχόν προκύψουν κατά την εκτέλεση ή μη της παροχής/χορηγίας τους (βλ. ΑΡΘΡΟ 8. ΔΗΛΩΣΗ\n          ΑΠΟΠΟΙΗΣΗΣ ΕΥΘΥΝΗΣ του παρόντος). Οι υπηρεσίες της ‘’ShoppingQuiz’’ διατίθενται μόνο για προσωπική και όχι για εμπορική χρήση. Για το λόγο αυτό, ο επισκέπτης / μέλος / χρήστης της Ιστοσελίδας/Εφαρμογής δεν έχει δικαίωμα μεταπώλησης, απευθείας\n          συνδέσμου, χρήσης, αντιγραφής, παρακολούθησης, παρουσίασης, καταφόρτωσης (downloading) ή αναπαραγωγής οποιουδήποτε περιεχομένου ή πληροφορίας, λογισμικού, προϊόντων ή υπηρεσιών που διατίθενται στην Ιστοσελίδα/Εφαρμογή για οποιαδήποτε εμπορική\n          ή ανταγωνιστική δραστηριότητα ή σκοπό.\n        </p>\n        <h3>4. ΕΝΝΟΙΕΣ – ΟΡΙΣΜΟΙ / ΔΙΑΔΙΚΑΣΙΑ & ΟΡΟΙ ΠΑΡΟΧΗΣ ΥΠΗΡΕΣΙΩΝ</h3>\n        <p>\n          Σχετικά με τους όρους και τις προϋποθέσεις χρήσης των υπηρεσιών της Ιστοσελίδας και τη διαδικασία απόκτησης των κερδισμένων προϊόντων ισχύουν τα παρακάτω: ‘’ShoppingQuiz’’ (ή Ιστοσελίδα/Εφαρμογή): Ο δικτυακός τόπος με διακριτικό τίτλο «ShoppingQuiz»,\n          o οποίος αποτελεί πλατφόρμα διεξαγωγής παιχνιδιών ερωτήσεων και απαντήσεων – quiz μέσω των οποίων κάθε νίκη μεταφράζεται σε πόντους, οι οποίοι εξαργυρώνονται σε χρήματα που ενσωματώνονται σε δωροεπιταγή/δώρο/προϊόντα συμβεβλημένων με την ‘’ShoppingQuiz’’\n          – “ShoppingQuiz Μονοπρόσωπη Ι.Κ.Ε” επιχειρήσεων, που ο χρήστης επιλέγει πριν την έναρξη του παιχνιδιού του, σύμφωνα με τους όρους και τις προϋποθέσεις του παρόντος. Συμβεβλημένη/συνεργαζόμενη Επιχείρηση: Η συμβεβλημένη επιχείρηση (ατομική ή\n          εταιρία υπό οιαδήποτε εταιρική μορφή) με την ‘’ShoppingQuiz’’ – “ShoppingQuiz Μονοπρόσωπη Ι.Κ.Ε” που εκμεταλλεύεται ένα ή περισσότερα καταστήματα πώλησης προϊόντων, παροχής υπηρεσιών, μαζικής εστίασης κλπ και η οποία συμφωνεί να παρέχει δωροεπιταγές/δώρα\n          μέσω της Ιστοσελίδας/Εφαρμογής. Ηλεκτρονικό παιχνίδι ερωτήσεων απαντήσεων - quiz: Ο χρήστης αφού εγγραφεί στην εφαρμογή με τα προσωπικά στοιχεία που θα του ζητηθούν επιλέγει από μία λίστα συνεργαζόμενων/συμβεβλημένων επιχειρήσεων για ποια από\n          αυτές επιθυμεί να συλλέξει πόντους απαντώντας σωστά στις ερωτήσεις του παιχνιδιού. Στη συνέχεια οι πόντοι που θα συλλέξει θα μετατραπούν σε χρήματα και στην αντίστοιχη δωροεπιταγή που θα εκδώσει η συνεργαζόμενη επιχείρηση αφού η ‘’ShoppingQuiz’’\n          της αποστείλει το ονοματεπώνυμο του χρήστη που κέρδισε και την ηλεκτρονική του διεύθυνση. Η συμμετοχή στα παιχνίδια είναι ΔΩΡΕΑΝ. Κάθε χρήστης έχει τη δυνατότητα, μόνο αν ο ίδιος το επιλέξει, να επισπεύσει την πρόοδο του παιχνιδιού και να αυξήσει\n          τους πόντους του αγοράζοντας ‘’βοήθειες’’. Σε καμία περίπτωση και σε κανένα επίπεδο του παιχνιδιού δεν είναι υποχρεωτική η αγορά ‘’βοηθειών’’. Δεν είναι δυνατή η μεταφορά των πόντων μεταξύ των χρηστών της Ιστοσελίδας/Εφαρμογής ή μεταξύ δύο λογαριασμών\n          του ίδιου χρήστη στην Ιστοσελίδα/Εφαρμογή. Μέλος: Ο επισκέπτης της Ιστοσελίδας/Εφαρμογής ο οποίος προκειμένου να κάνει χρήση των υπηρεσιών της Ιστοσελίδας/Εφαρμογής εγγράφεται στην Ιστοσελίδα/Εφαρμογή δημιουργώντας τον προσωπικό του λογαριασμό,\n          μέσω του οποίου έχει τη δυνατότητα να συμμετέχει ΔΩΡΕΑΝ σε παιχνίδια ερωτήσεων απαντήσεων - quiz. Με την εγγραφή του ο επισκέπτης γίνεται μέλος της ‘’ShoppingQuiz’’ και δεσμεύεται με τους όρους του παρόντος. Ως μέλη της Ιστοσελίδας/Εφαρμογής\n          μπορούν να εγγραφούν μόνο ενήλικοι. Χρήστης: κάθε μέλος της Ιστοσελίδας που κάνει χρήση των υπηρεσιών της Ιστοσελίδας/εφαρμογής. Δικαιούχος Δώρου/δωροεπιταγής (ή Δικαιούχος): Ο δικαιούχος, ο οποίος συμπίπτει με τον χρήστη που συμμετείχε στο\n          παιχνίδι, παραχώρησε τα προσωπικά στοιχεία του και κέρδισε τους αντίστοιχους πόντους. Η συνεργαζόμενη επιχείρηση απευθύνεται στον Δικαιούχο προκειμένου να προσφέρει τις προβλεπόμενες παροχές και υπηρεσίες βάσει των όρων και προϋποθέσεων του\n          παρόντος. Αργοπορημένη Προσέλευση του Δικαιούχου στην επιχείρηση για την παραλαβή του δώρου/χρήση της δωροεπιταγής ή Μη εμφάνιση του Δικαιούχου στην επιχείρηση: Και στις δύο περιπτώσεις η επιχείρηση διατηρεί το δικαίωμα να αρνηθεί κατά την διακριτική\n          του ευχέρεια την οποιαδήποτε παροχή αν ο δικαιούχος αφήσει το χρονικό διάστημα που του έταξε η επιχείρηση για την εμφάνισή του να περάσει χωρίς να εμφανιστεί κα να αξιώσει την παροχή ή αν δεν ειδοποιήσει για τους σοβαρούς λόγους που τον ανάγκασαν\n          να μην εμφανιστεί.\n        </p>\n        <h3>5. ΕΥΘΥΝΗ ΧΡΗΣΤΗ</h3>\n        <p>\n          Ο επισκέπτης / μέλος που κάνει χρήση των σελίδων και των υπηρεσιών της ‘’ShoppingQuiz’’ αποδέχεται ότι θα χρησιμοποιεί την Ιστοσελίδα/Εφαρμογή σύμφωνα με τις διατάξεις της κείμενης Ελληνικής και Ευρωπαϊκής νομοθεσίας και τα χρηστά ήθη. Δηλαδή δεν θα τη\n          χρησιμοποιεί για δημιουργία ή / και μετάδοση οποιουδήποτε περιεχομένου που είναι ψευδές, ανακριβές ή παραπλανητικό, παράνομο, βλαβερό, άσεμνο, δυσφημιστικό, απειλητικό ή εκβιαστικό, αποτελεί παραβίαση του απορρήτου κάποιου άλλου, δύναται να\n          προκαλέσει βλάβες σε ανήλικους με οποιονδήποτε τρόπο, υπονοεί ή σχετίζεται με οποιονδήποτε τρόπο με παιδική πορνογραφία, καταφέρεται εναντίον κοινωνικών μειονοτήτων, ομάδων πληθυσμού και φυλετικών χαρακτηριστικών, δεν δικαιούται να μεταδοθεί\n          σύμφωνα με την νομοθεσία ή τις συμβατικές ή διαχειριστικές σχέσεις (όπως εσωτερικές πληροφορίες, ιδιοκτησιακές και εμπιστευτικές πληροφορίες που αποκτήθηκαν ή αποκαλύφθηκαν ως μέρος εργασιακών σχέσεων ή που καλύπτονται σε συμφωνίες εμπιστευτικότητας),\n          παραβιάζει οποιοδήποτε δικαίωμα βιομηχανικής ή πνευματικής ιδιοκτησίας, περιέχει ιούς λογισμικού ή, ηθελημένα ή αθέλητα παραβαίνει την ισχύουσα ελληνική και κοινοτική νομοθεσία και τις διατάξεις αυτής, δύναται να παρενοχλήσει τρίτους με οποιοδήποτε\n          τρόπο, χρησιμοποιείται για συλλογή ή αποθήκευση προσωπικών δεδομένων σχετικά με άλλους χρήστες. Ο επισκέπτης ή μέλος που κάνει χρήση των σελίδων και των υπηρεσιών της ‘’ShoppingQuiz’’ αναλαμβάνει την ευθύνη για οποιαδήποτε ζημία προκαλείται\n          στην ‘’ShoppingQuiz’’ από κακή ή αθέμιτη χρήση των σχετικών υπηρεσιών. Σε περίπτωση που διαπιστωθεί κάποιου είδους χρήση από τις ενδεικτικά προαναφερόμενες, η ‘’ShoppingQuiz’’ διατηρεί το δικαίωμα αυτόματης διαγραφής του μέλους χωρίς προειδοποίηση\n          προχωρώντας σε κάθε ενέργεια που προβλέπεται από την κείμενη νομοθεσία και τις σχετικές διατάξεις. Το κάθε μέλος ευθύνεται επίσης για τη διατήρηση της μυστικότητας του λογαριασμού του προκειμένου να αποφευχθεί οποιαδήποτε κακόβουλη χρήση από\n          τρίτους.\n        </p>\n        <h3>6. ΑΣΦΑΛΕΙΑ ΠΡΟΣΩΠΙΚΩΝ ΔΕΔΟΜΕΝΩΝ</h3>\n        <p>\n          Η ‘’ShoppingQuiz’’ αναγνωρίζει τη σημασία του θέματος της ασφαλείας των Προσωπικών Δεδομένων καθώς και των ηλεκτρονικών υπηρεσιών και λαμβάνει όλα τα απαραίτητα μέτρα, με σύγχρονες και προηγμένες μεθόδους, ώστε να εξασφαλίζεται η μέγιστη δυνατή ασφάλεια.\n          Λεπτομέρειες αναφέρονται στη σύμβαση Προστασίας Προσωπικών Δεδομένων της ‘’ShoppingQuiz’’ (εφεξής «Πολιτική Απορρήτου»), η οποία αποτελεί αναπόσπαστο μέρος των Όρων Χρήσης και αποδεχόμενος ο χρήστης τους όρους χρήσης αυτομάτως αποδέχεται και\n          τα οριζόμενα στην ‘’Πολιτική Απορρήτου’’.\n        </p>\n        <h3>7. ΥΠΗΡΕΣΙΕΣ ΕΝΗΜΕΡΩΣΗΣ – NEWSLETTERS</h3>\n        <p>\n          Η ‘’ShoppingQuiz’’ διατηρεί αρχείο με τις ηλεκτρονικές διευθύνσεις των χρηστών / μελών της Ιστοσελίδας/Εφαρμογής για την αποστολή αυτόματων email που σχετίζονται άμεσα με τις υπηρεσίες της Ιστοσελίδας/Εφαρμογής αλλά και email ενημερωτικού χαρακτήρα (όπως\n          newsletters). Στην περίπτωση των email ενημερωτικού χαρακτήρα ο χρήστης / μέλος μπορεί να επιλέξει, αν και εφόσον επιθυμεί, να τα λαμβάνει ή όχι ενώ στην περίπτωση που έχει επιλέξει να μην τα λαμβάνει μπορεί να διαγραφεί από την υπηρεσία αυτή\n          κάνοντας χρήση του σχετικού συνδέσμου διαγραφής που υπάρχει σε κάθε email ενημερωτικού χαρακτήρα που αποστέλλεται. Η ‘’ShoppingQuiz’’ διατηρεί το δικαίωμα να διαγράφει οποιονδήποτε παραλήπτη αναιτιολόγητα. Η ‘’ShoppingQuiz’’ μπορεί να αποστείλει\n          email για τους ακόλουθους σκοπούς (η λίστα δεν είναι εξαντλητική):\n        </p>\n          <ul>\n            <li>Μετά την εγγραφή νέου μέλους ή την τροποποίηση των στοιχείων του λογαριασμού μέλους στην Ιστοσελίδα/Εφαρμογή. </li>\n            <li>Μετά την συμμετοχή σε παιχνίδι προς ενημέρωση ή / και υπενθύμιση των πόντων που έχουν συλλεγεί από το χρήστη. </li>\n            <li>Υπενθυμίσεις για τις υπηρεσίες που προσφέρει. </li>\n            <li>Προς ενημέρωση σχετικά με τις νέες συνεργαζόμενες με την εφαρμογή επιχειρήσεις. </li>\n            <li>Για σκοπούς ενημέρωσης (newsletter). </li>\n            <li>Για σκοπούς προωθητικών ενεργειών.</li>\n            <li>Για προτάσεις υπηρεσιών σχετικών με την ‘’ShoppingQuiz’’ </li>\n            <li>Για προτροπή προς συμπλήρωση ερωτηματολογίων ή εν γένει λήψη αποκρίσεων των επισκεπτών / χρηστών / μελών σχετικών με την ικανοποίησή τους σχετικά με τις υπηρεσίες της ‘’ShoppingQuiz’’ και των συνεργαζόμενων επιχειρήσεων.</li>\n          </ul>\n        <h3>8. ΔΗΛΩΣΗ ΑΠΟΠΟΙΗΣΗΣ ΕΥΘΥΝΗΣ</h3>\n        <p>\n          Η ‘’ShoppingQuiz’’ δεν ευθύνεται έναντι των μελών για την ποιότητα των υπηρεσιών που παρέχονται από τις Συμβεβλημένες Επιχειρήσεις ή από ζημιές που τυχόν προκύψουν κατά την εκτέλεση ή μη της παροχής. Η υφιστάμενη συναλλακτική σχέση διέπει τα συμβαλλόμενα\n          μέρη και εν προκειμένω τους χρήστες της ‘’ShoppingQuiz’’ και τις Συμβεβλημένες Επιχειρήσεις και μόνον αυτά. Υπό οποιεσδήποτε συνθήκες, συμπεριλαμβανομένης και της περίπτωσης αμέλειας, η ‘’ShoppingQuiz’’ δεν ευθύνεται για οποιασδήποτε μορφής\n          ζημία υποστεί το μέλος ή ο επισκέπτης της Ιστοσελίδας/Εφαρμογής από την χρήση των σελίδων, υπηρεσιών και επιλογών της ‘’ShoppingQuiz’’ στις οποίες προβαίνει με δική του πρωτοβουλία και με τη γνώση των όρων του παρόντος. Επισημαίνεται ότι η ‘’ShoppingQuiz’’\n          δεν φέρει ουδεμία ευθύνη αναφορικά με τα προϊόντα / παροχές / υπηρεσίες που προωθούνται και προσφέρονται μέσω της εφαρμογής, για τα οποία αποκλειστικά υπεύθυνος έναντι του Δικαιούχου είναι η εκάστοτε επιχείρηση. Ενδεικτικά και όχι περιοριστικά\n          η ‘’ShoppingQuiz’’ δεν ευθύνεται για την ποιότητα, τις ιδιότητες, τα επιμέρους χαρακτηριστικά των προϊόντων / παροχών / υπηρεσιών των συνεργαζόμενων επιχειρήσεων, για τυχόν νομικά ή πραγματικά ελαττώματα καθώς και για τον τρόπο και χρόνο παράδοσης\n          αυτών στους Δικαιούχους. Η ‘’ShoppingQuiz’’ δεν εγγυάται ότι οι σελίδες, οι υπηρεσίες, οι επιλογές και τα περιεχόμενα της Ιστοσελίδας/Εφαρμογής θα παρέχονται χωρίς διακοπή, χωρίς σφάλματα και ότι τα λάθη θα διορθώνονται. Επίσης δεν εγγυάται\n          ότι η ίδια ή οποιοσδήποτε άλλος συγγενικός δικτυακός τόπος ή οι εξυπηρετητές "servers" μέσω των οποίων αυτοί τίθενται στη διάθεση των μελών της Ιστοσελίδας/Εφαρμογής και των επισκεπτών της, παρέχονται χωρίς "ιούς" ή άλλα επιζήμια συστατικά.\n          Δεν εγγυάται σε καμία περίπτωση την ορθότητα, την πληρότητα ή / και διαθεσιμότητα των περιεχομένων, σελίδων, υπηρεσιών, επιλογών ή τα αποτελέσματά τους. Το κόστος των ενδεχόμενων διορθώσεων ή εξυπηρετήσεων, το αναλαμβάνει το μέλος ή ο επισκέπτης\n          / χρήστης της Ιστοσελίδας/Εφαρμογής. Κατά την παροχή των υπηρεσιών της Ιστοσελίδας/Εφαρμογής, οι πληροφορίες που δημοσιοποιούνται βασίζονται στις πληροφορίες που παρέχονται από τις συνεργαζόμενες επιχειρήσεις. Για αυτό το λόγο, οι παραπάνω επιχειρήσεις\n          είναι απόλυτα υπεύθυνες για τις πληροφορίες και τις εκάστοτε παροχές που υπόσχονται αλλά και για την ποιότητα αυτών, των προδιαγραφών των προϊόντων / παροχών / υπηρεσιών τους, οι οποίες εμφανίζονται στην Ιστοσελίδα/Εφαρμογή ‘’ShoppingQuiz’’.\n          Παρά το γεγονός ότι η ‘’ShoppingQuiz’’ καταβάλλει κάθε προσπάθεια για τη σωστή λειτουργία των υπηρεσιών της Ιστοσελίδας/Εφαρμογής, δεν μπορεί ούτε να επιβεβαιώσει ούτε να εγγυηθεί ότι όλες οι πληροφορίες είναι ακριβείς, πλήρεις ή σωστές, και\n          ούτε μπορεί να θεωρηθεί υπεύθυνη για τυχόν λάθη (συμπεριλαμβανομένων προφανών και τυπογραφικών λαθών), για παρεμβολές λόγω (προσωρινής ή / και μερικής) αναστολής λειτουργίας, εργασιών αποκατάστασης, αναβάθμισης ή συντήρησης της Ιστοσελίδας/Εφαρμογής\n          ή από οποιοδήποτε άλλη αιτία), για ανακριβείς, παραπλανητικές ή αναληθείς πληροφορίες ή για τη μη διανομή των πληροφοριών. Κάθε επιχείρηση διατηρεί την ευθύνη ανά πάσα στιγμή για την ακρίβεια, την πληρότητα και την ορθότητα των (περιγραφικών)\n          πληροφοριών που εμφανίζονται στην Ιστοσελίδα/Εφαρμογή. Στο βαθμό που επιτρέπεται από τη νομοθεσία, ούτε η ‘’ShoppingQuiz’’ ούτε οποιαδήποτε από τις συνεργαζόμενες εταιρίες, τους online συνεργάτες ή άλλους που εμπλέκονται στη δημιουργία, τη χορηγία,\n          την προώθηση ή την καθ` οιονδήποτε άλλο τρόπο παροχή της Ιστοσελίδας/Εφαρμογής και του περιεχομένου της, δεν ευθύνονται για (i) οποιαδήποτε ποινική, ειδική, έμμεση ή επακόλουθη ζημία ή απώλεια, οποιαδήποτε απώλεια παραγωγής, απώλεια κέρδους,\n          απώλεια εσόδων, απώλεια συμβολαίου, απώλεια ή ζημία στην πελατεία ή την φήμη, απώλεια δικαιώματος για αποζημίωση, (ii) οποιαδήποτε ασάφεια σχετικά με τις πληροφορίες (περιγραφή) των επιχειρήσεων που παρέχονται στην Ιστοσελίδα/Εφαρμογή, (iii)\n          υπηρεσίες ή προϊόντα που προσφέρονται από τις συνεργαζόμενες επιχειρήσεις, (iv) οποιεσδήποτε (άμεσες, έμμεσες, επακόλουθες ή ποινικές) φθορές, απώλειες ή χρεώσεις τις οποίες υπέστησαν ή πλήρωσαν τα μέλη, σύμφωνα με, έπειτα από ή σε σχέση με\n          τη χρήση, την αδυναμία χρήσης ή την καθυστέρηση στη χρήση της Ιστοσελίδας/Εφαρμογής, ή (v) για τυχόν (προσωπικό) τραυματισμό, θάνατο, φθορά προσωπικής ιδιοκτησίας ή άλλες (άμεσες, έμμεσες, ειδικές, επακόλουθες ή ποινικά κολάσιμες) φθορές, απώλειες\n          ή χρεώσεις τις οποίες υπέστησαν ή πλήρωσαν τα μέλη, είτε εξαιτίας (νομικών) πράξεων, σφαλμάτων, παραβιάσεων, (βαριάς) αμέλειας, σκόπιμου πταίσματος, παραλείψεων, μη εκτέλεσης, ψευδών δηλώσεων, αδικοπραξίας ή απόλυτης ευθύνης των επιχειρήσεων\n          ή ευθύνης που αποδίδεται (πλήρως ή μερικώς) στη συνεργαζόμενη επιχείρηση (τους υπαλλήλους της, τη διεύθυνση, τα στελέχη, τους πράκτορες, εκπροσώπους ή τις συνεργαζόμενες εταιρίες), συμπεριλαμβανομένης τυχόν απεργίας, ανωτέρας βίας ή για οποιοδήποτε\n          άλλο περιστατικό πέρα από τον έλεγχο της ‘’ShoppingQuiz’’. Οι παραπάνω περιπτώσεις είναι ενδεικτικές και δεν αποτελούν εξαντλητική λίστα με όλες τις περιπτώσεις μη υπαιτιότητας της ‘’ShoppingQuiz’’.\n        </p>\n        <h3>9. ΑΛΛΑΓΗ ΠΟΛΙΤΙΚΗΣ</h3>\n        <p>\n          Είναι δυνατόν για λόγους βελτίωσης των υπηρεσιών της ‘’ShoppingQuiz’’ να υπάρξουν αλλαγές πολιτικής ή υπηρεσιών χωρίς προειδοποίηση. Ο χρήστης μπορεί να ενημερώνεται σχετικά στην παρούσα Ιστοσελίδα/Εφαρμογή. Για το λόγο αυτό συστήνεται στους χρήστες /\n          μέλη / επισκέπτες να διαβάζουν τους όρους χρήσης σε τακτά χρονικά διαστήματα, προκειμένου να ενημερώνονται για τυχόν αλλαγές στο περιεχόμενό τους. Η ‘’ShoppingQuiz’’ διατηρεί το δικαίωμα να μεταβάλει ή να τροποποιεί τους εφαρμοστέους όρους για\n          τη χρήση της Ιστοσελίδας/Εφαρμογής σε οποιαδήποτε χρονική στιγμή, χωρίς ειδοποίηση των χρηστών / μελών. Τέτοιες αλλαγές, τροποποιήσεις, προσθήκες ή διαγραφές στους όρους χρήσης θα τίθενται σε ισχύ αμέσως, δηλαδή από την ανάρτησή τους στην Ιστοσελίδα/Εφαρμογή.\n          Κάθε χρήση της Ιστοσελίδας/Εφαρμογής κατόπιν τέτοιας αλλαγής ή τροποποίησης θα θεωρείται ότι αποτελεί αποδοχή εκ μέρους του χρήστη / μέλους των αλλαγών, τροποποιήσεων, προσθηκών ή διαγραφών. Η ‘’ShoppingQuiz’’ μπορεί, σε οποιαδήποτε χρονική\n          στιγμή, να καταγγείλει, αλλάξει, αναστείλει ή διακόψει οποιαδήποτε επιμέρους λειτουργία της Ιστοσελίδας/Εφαρμογής.\n        </p>\n        <h3>10. ΕΦΑΡΜΟΣΤΕΟ ΔΙΚΑΙΟ</h3>\n        <p>\n          Οι ανωτέρω όροι χρήσης, καθώς και οποιαδήποτε τροποποίηση, αλλαγή ή αλλοίωσή τους διέπονται και συμπληρώνονται από το ελληνικό δίκαιο, το δίκαιο της ευρωπαϊκής ένωσης και τις σχετικές διεθνείς συνθήκες. Οποιαδήποτε διάταξη των ανωτέρω όρων καταστεί αντίθετη\n          προς το νόμο, παύει αυτοδικαίως να ισχύει και αφαιρείται από το παρόν, χωρίς σε καμία περίπτωση να θίγεται η ισχύς των λοιπών όρων. Το παρόν αποτελεί τη συνολική συμφωνία μεταξύ της ‘’ShoppingQuiz’’, των επισκεπτών / χρηστών καθώς και των μελών\n          του και δε δεσμεύει παρά μόνο αυτούς. Καμία τροποποίηση των όρων αυτών δε θα λαμβάνεται υπόψη και δε θα αποτελεί τμήμα της συμφωνίας αυτής, εάν δεν έχει διατυπωθεί εγγράφως και δεν έχει ενσωματωθεί σε αυτή. Η ‘’ShoppingQuiz’’ διατηρεί το δικαίωμα\n          να τροποποιεί μονομερώς ή να ανανεώνει τους παρόντες όρους, σύμφωνα με τις ανάγκες της και τα συναλλακτικά ήθη. Κατά τόπον αρμόδια για οποιαδήποτε διαφορά υπάρξει είναι τα δικαστήρια των Αθηνών. 11. ΛΟΙΠΟΙ ΟΡΟΙ ΧΡΗΣΗΣ Η χρήση των υπηρεσιών,\n          προϊόντων και ιστοσελίδων των συμβεβλημένων επιχειρήσεων μπορεί να συνεπάγεται την άμεση αποδοχή επιπρόσθετων Όρων Χρήσεων. Οι επιπρόσθετοι αυτοί Όροι Χρήσης ισχύουν ως συμπλήρωμα των παρόντων και δεν τους αντικαθιστούν. Το πρωτότυπο ελληνικό\n          κείμενο των Όρων Χρήσης και της Πολιτικής Απορρήτου της Ιστοσελίδας/Εφαρμογής μπορεί να έχει μεταφραστεί σε άλλες γλώσσες. Οι μεταφράσεις αποτελούν διευκόλυνση και δεν απορρέουν δικαιώματα από τα κείμενά τους. Σε περίπτωση διαφωνίας σχετικά\n          με το περιεχόμενο ή την ερμηνεία των Όρων Χρήσης ή της Πολιτικής Απορρήτου ή διαφοράς μεταξύ της ελληνικής εκδοχής τους και οποιασδήποτε άλλης μεταφρασμένης εκδοχής τους, οι ελληνικές εκδοχές των κειμένων, στο βαθμό που επιτρέπεται από τη νομοθεσία,\n          ισχύουν, υπερισχύουν και είναι οριστικές. Η ελληνική εκδοχή των Όρων Χρήσης και της Πολιτικής Απορρήτου διατίθενται στην Ιστοσελίδα (απαιτείται επιλογή της ελληνικής γλώσσας) ή μπορούν να αποσταλούν μετά από γραπτό αίτημα. Ημερομηνία τελευταίας\n          αναθεώρησης: 18/05/2017\n        </p>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\TermsAndConditions\TermsAndConditions.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TermsAndConditionsPage);
    return TermsAndConditionsPage;
}());

//# sourceMappingURL=TermsAndConditions.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (args.property === 'htl') {
                if (a.price < b.price) {
                    return 1;
                }
            }
            else if (args.property === 'lth') {
                if (a.price > b.price) {
                    return 1;
                }
            }
            else if (args.property === 'atoz') {
                if (a.productName > b.productName) {
                    return 1;
                }
            }
            else if (args.property === 'ztoa') {
                if (a.productName < b.productName) {
                    return 1;
                }
            }
        });
        return array;
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.productName.toLowerCase().includes(terms);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
        this.filt = [];
    }
    FilterPipe.prototype.transform = function (array, args) {
        var _this = this;
        console.log(args);
        if (typeof (args) != 'undefined' && typeof (args.filterCost) != 'undefined' && typeof (args.filterBrand) != 'undefined') {
            if (args.filterCost !== 0 && args.filterBrand.length !== 0) {
                console.log('both not zero');
                this.filt = [];
                args.filterBrand.forEach(function (element) {
                    _this.filt.push(array.filter(function (obj) {
                        return obj['productCode'] == element;
                    }));
                });
                array = [].concat.apply([], this.filt);
                return array.filter(function (i) {
                    if (args.filterCost !== 0) {
                        return (i['price'] <= args.filterCost);
                    }
                });
            }
            else if (args.filterCost !== 0) {
                console.log('filter cost');
                if (args.filterBrand.length == 0) {
                    return array.filter(function (i) {
                        if (args.filterCost !== 0) {
                            return (i['price'] <= args.filterCost);
                        }
                    });
                }
            }
            else if (args.filterCost == 0) {
                if (args.filterBrand.length !== 0) {
                    console.log('have brands');
                    this.filt = [];
                    args.filterBrand.forEach(function (element) {
                        _this.filt.push(array.filter(function (obj) {
                            return obj['productCode'] == element;
                        }));
                    });
                    array = [].concat.apply([], this.filt);
                    return array;
                }
            }
            else {
                return array;
            }
        }
        return array;
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter',
        })
    ], FilterPipe);
    return FilterPipe;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_notification_notification__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_product_list_product_list__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(menuCtrl, dataService, platform, statusBar, splashScreen) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.dataService = dataService;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.showLevel1 = null;
        this.showLevel2 = null;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.menuCtrl.close();
        this.dataService.getMenus()
            .then(function (response) {
            _this.pages = response;
        });
    }
    MyApp_1 = MyApp;
    /*platform.ready().then(() => {
        // Here we will check if the user is already logged in
        // because we don't want to ask users to log in each time they open the app
        let env = this;
        this.nativeStorage.getItem('user')
        .then( function (data) {
          // user is previously logged and we have his data
          // we will let him access the app
          env.nav.push(UserPage);
          env.splashScreen.hide();
        }, function (error) {
          //we don't have the user data so we will ask him to log in
          env.nav.push(LoginPage);
          env.splashScreen.hide();
        });
  
        this.statusBar.styleDefault();
      });*/
    MyApp.prototype.notification = function () {
        this.menuCtrl.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_0__pages_notification_notification__["a" /* NotificationPage */]);
    };
    MyApp.prototype.settings = function () {
        this.menuCtrl.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_1__pages_settings_settings__["a" /* SettingsPage */]);
    };
    MyApp.prototype.logOut = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.getLoggedInUser = function () {
        return MyApp_1.loggedInUser.username;
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.toggleLevel1 = function (idx) {
        if (this.isLevel1Shown(idx)) {
            this.showLevel1 = null;
        }
        else {
            this.showLevel1 = idx;
        }
    };
    ;
    MyApp.prototype.toggleLevel2 = function (idx) {
        if (this.isLevel2Shown(idx)) {
            this.showLevel1 = null;
            this.showLevel2 = null;
        }
        else {
            this.showLevel1 = idx;
            this.showLevel2 = idx;
        }
    };
    ;
    MyApp.prototype.isLevel1Shown = function (idx) {
        return this.showLevel1 === idx;
    };
    ;
    MyApp.prototype.isLevel2Shown = function (idx) {
        return this.showLevel2 === idx;
    };
    ;
    MyApp.prototype.openPage = function () {
        this.menuCtrl.close();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__pages_product_list_product_list__["a" /* ProductListPage */]);
    };
    MyApp.loggedInUser = '';
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = MyApp_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\app\app.html"*/'<ion-menu persistent [content]="content">\n  <ion-header no-border>\n    <ion-toolbar>\n      <ion-item no-lines>\n          <ion-icon color="button-color" item-left name="contact"></ion-icon>\n      </ion-item>\n      <p class="txt"><b>{{getLoggedInUser()}}</b></p>\n      <p class="txt"><ion-icon name="pin"></ion-icon> Πειραιώς 100, Αθήνα</p>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n      <ion-list no-lines>\n          <ion-item *ngFor="let p of pages; let i=index" text-wrap (click)="toggleLevel1(\'idx\'+i)" [ngClass]="{active: isLevel1Shown(\'idx\'+i)}">\n            <h2>\n              <p class="list-title"><img margin-right src="{{p.logo}}" class="list-icon"/>\n               {{p.category}}</p>\n              <ion-icon color="success" class="icon-right" item-right [name]="isLevel1Shown(\'idx\'+i) ? \'arrow-dropdown\' : \'arrow-dropright\'" style="margin:5px 8px 9px 0px;opacity:0.5;"></ion-icon>\n            </h2>\n            <ion-list *ngIf="isLevel1Shown(\'idx\'+i)">\n              <ion-item *ngFor="let s of p.subs; let i2=index" text-wrap (click)="toggleLevel2(\'idx\'+i+\'idx\'+i2)" [ngClass]="{active: isLevel2Shown(\'idx\'+i+\'idx\'+i2)}">\n                <h4>\n                  {{s.subcategory}}\n                  <ion-icon class="icon-right" item-right [name]="isLevel2Shown(\'idx\'+i+\'idx\'+i2) ? \'arrow-dropdown\' : \'arrow-dropright\'" style="opacity:0.5;"></ion-icon>\n                </h4>\n                <ion-list *ngIf="isLevel2Shown(\'idx\'+i+\'idx\'+i2)">\n                  <ion-item *ngFor="let m of s.subSubs" text-wrap (click)="openPage()">\n                    {{m.subSubcategory}}\n                  </ion-item>\n                </ion-list>\n              </ion-item>\n            </ion-list>\n          </ion-item>\n          <ion-item (click)="settings()">\n            <h2>\n              <p class="list-title"><img margin-right src="assets/icon/settings.svg" class="list-icon"/>\n             Ρυθμίσεις</p>\n          </h2>\n          </ion-item>\n          <ion-item (click)="notification()">\n            <h2>\n              <p class="list-title"><img margin-right src="assets/icon/notification.svg" class="list-icon"/>\n             Ειδοποιήσεις</p>\n             <ion-badge color="danger" class="icon-right" item-right style="font-size:1em;margin:5px 8px 9px 0px;">0</ion-badge>\n          </h2>\n          </ion-item>\n          <ion-item (click)="logOut()">\n            <h2>\n              <p class="list-title"><img margin-right src="assets/icon/logout.svg" class="list-icon"/>\n             Αποσύνδεση</p>\n          </h2>\n            </ion-item>\n        </ion-list>\n  </ion-content>\n  <ion-footer>\n    Version 0.0.1\n  </ion-footer>\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n<!--\n  1: Change location page button color\n -->\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
    var MyApp_1;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_detail_product_detail__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_service_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filter_modal_filter_modal__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_vibration__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










//@IonicPage()
var ProductListPage = (function () {
    function ProductListPage(vibration, modalCtrl, alertCtrl, toastCtrl, dataService, navCtrl, navParams) {
        var _this = this;
        this.vibration = vibration;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.terms = '';
        this.sortName = 'default';
        this.item = 1;
        this.cartProduct = this.dataService.getCartProduct();
        this.dataService.getProducts()
            .then(function (response) {
            _this.products = response;
            console.log(response);
        });
    }
    ProductListPage_1 = ProductListPage;
    ProductListPage.prototype.selectCost = function (p, e) {
        p.unit.forEach(function (element) {
            if (element.weight === e) {
                p.defaultPrice = element.price;
                p.weight = element.weight;
            }
        });
    };
    ProductListPage.prototype.detail = function (p) {
        var _this = this;
        var detailmodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__product_detail_product_detail__["a" /* ProductDetailPage */], { data: p });
        detailmodal.present();
        detailmodal.onDidDismiss(function (data) {
            if (data) {
                _this.addProduct(p);
            }
        });
    };
    ProductListPage.prototype.cartItem = function () {
        var _this = this;
        if (this.products !== undefined) {
            this.products.filter(function (object) {
                _this.cartProduct.forEach(function (element) {
                    if (element === object) {
                        object['item'] = element['item'];
                    }
                });
            });
        }
    };
    ProductListPage.prototype.itemIncrease = function (product) {
        var _this = this;
        this.dataService.cartProduct.forEach(function (element) {
            if (element == product) {
                if (product.item < 5) {
                    product.item++;
                    _this.dataService.cartCost = product.price * product.item;
                }
            }
        });
    };
    ProductListPage.prototype.itemDecrease = function (product) {
        var _this = this;
        this.dataService.cartProduct.forEach(function (element) {
            if (element == product) {
                if (product.item !== 1) {
                    product.item--;
                    _this.dataService.cartCost = product.price * product.item;
                }
                else if (product.item === 1) {
                    product.inCart = "Προσθήκη";
                    product.disabled = false;
                    _this.dataService.removeCartProduct(product, product.price);
                    ProductListPage_1.notifier--;
                    if (ProductListPage_1.notifier === 0) {
                        ProductListPage_1.show = false;
                    }
                }
            }
        });
    };
    ProductListPage.prototype.addOrNot = function (p) {
        if (p.inCart === "Προσθήκη") {
            p.inCart = "Προστέθηκε";
            p.disabled = true;
        }
    };
    ProductListPage.prototype.getItem = function () {
        return __WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */].item;
    };
    ProductListPage.prototype.notification = function () {
        return ProductListPage_1.notifier;
    };
    ProductListPage.prototype.show = function () {
        return ProductListPage_1.show;
    };
    ProductListPage.prototype.addProduct = function (product) {
        var weight = this.weightSelect["_text"];
        product.unit.filter(function (data) {
            if (data.weight === weight) {
                product.price = data.price;
                product.weight = data.weight;
            }
        });
        this.addOrNot(product);
        var item = this.dataService.cartProduct.find(function (p) { return p == product; });
        if (item === undefined || ProductListPage_1.notifier === undefined) {
            // product.item=1;
            this.dataService.addToCart(product);
            ++ProductListPage_1.notifier;
            ProductListPage_1.show = true;
            this.show();
            this.cartItem();
            this.vibration.vibrate([200, 100, 300]);
            var toast = this.toastCtrl.create({
                message: product.productName + ' προστέθηκε επιτυχώς στο καλάθι σας',
                duration: 1500
            });
            toast.present();
        }
        else {
            var toast = this.toastCtrl.create({
                message: product.productName + ' έχει προστεθεί ήδη στο καλάθι σας',
                duration: 1500
            });
            toast.present();
        }
    };
    ProductListPage.prototype.cart = function () {
        if (this.dataService.cartCost != 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Δεν υπάρχουν προϊόντα στο καλάθι σας',
                duration: 1500
            });
            toast.present();
        }
    };
    ProductListPage.prototype.sort = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Ταξινόμηση Προϊόντων');
        alert.addInput({
            type: 'radio',
            label: 'Με βάση τον τίτλο Α-Ω',
            value: 'atoz',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Με βάση τον τίτλο Ω-Α',
            value: 'ztoa',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Με βάση την τιμή- Χαμηλότερη προς Υψηλότερη',
            value: 'lth',
            checked: false
        });
        alert.addInput({
            type: 'radio',
            label: 'Με βάση την τιμή- Υψηλότερη προς Χαμηλότερη',
            value: 'htl',
            checked: false
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                _this.sortName = data;
            }
        });
        alert.present();
    };
    ProductListPage.prototype.filter = function () {
        var _this = this;
        var filtermodal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__filter_modal_filter_modal__["a" /* FilterModalPage */]);
        filtermodal.present();
        filtermodal.onDidDismiss(function (data) {
            _this.filterData = data;
        });
    };
    ProductListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductListPage');
    };
    ProductListPage.prototype.ionViewWillEnter = function () {
        this.cartItem();
    };
    ProductListPage.notifier = 0;
    ProductListPage.show = false;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('weightSelect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], ProductListPage.prototype, "weightSelect", void 0);
    ProductListPage = ProductListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-product-list',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\product-list\product-list.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>ΛΙΣΤΑ ΠΡΟΪΌΝΤΩΝ</ion-title>\n    <ion-buttons end>\n      <button ion-button clear (click)="cart()">\n          <ion-icon class="cart" name="cart"></ion-icon>\n          <ion-badge *ngIf="show()" id="notifications-badge" color="danger">{{notification()}}</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid no-margin>\n    <ion-row margin-top *ngFor="let p of products | search : terms | sort:{property:sortName} | filter:filterData let i = index">\n      <ion-col col-3>\n        <ion-thumbnail item-start (click)="detail(p)">\n          <img src="{{p.thumbnail}}">\n        </ion-thumbnail>\n      </ion-col>\n      <ion-col col-6>\n          <h6 style="margin-bottom:0;margin-left:5px;" text-wrap >{{p.productName}}</h6>\n          <p style="margin-bottom:0;margin-top:0;margin-left:5px;">{{p.productCode}}</p>\n          <button style="height:2.8rem" ion-button outline color="button-color">\n            <ion-select class="custom-select" interface=popover #weightSelect  (ionChange)="selectCost(p,$event)" [selectOptions]="{title:\'Select Weight\'}">\n              <ion-option *ngFor="let w of p.unit" [selected]="w.weight === p.weight">{{w.weight}}</ion-option>\n              <!-- <ion-option value="m">500 g</ion-option> -->\n            </ion-select>\n          </button>\n          <!-- <h6 style="margin-top:0;margin-left:5px;">$ {{p.price}}</h6> -->\n      </ion-col>\n      <ion-col col-3>\n          <h6 style="text-align:center;margin-left:25%;">{{p.defaultPrice}} €</h6>\n\n          <div item-end style="margin-left:30%;margin-top:10px;display:inline-flex;">\n              <ion-icon *ngIf="p.disabled" color="button-color" class="icon-size" name="remove-circle" (click)="itemDecrease(p)"></ion-icon>\n              <p *ngIf="p.disabled" item-end class="zero-margin">{{p.item}}</p>\n              <ion-icon *ngIf="p.disabled" color="button-color" class="icon-size" name="add-circle" (click)="itemIncrease(p)"></ion-icon>\n          </div>\n          <button item-end style="display:inline-flex;height:3rem" ion-button *ngIf="p.disabled ? hidden : show" outline round (click)="addProduct(p)">{{p.inCart}}</button>\n\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n    <!-- <ion-list no-margin *ngFor="let p of products | search : terms | sort:{property:sortName} | filter:filterData let i = index">\n        <ion-item style="position:relative;">\n          <ion-thumbnail item-start (click)="detail(p)">\n            <img src="{{p.thumbnail}}">\n          </ion-thumbnail>\n          <div item-start text-wrap style="max-width:185px; width:150px;">\n            <h2 text-wrap >{{p.productName}}</h2>\n            <p>{{p.productCode}}</p>\n            <ion-select style="padding:0;max-width:70px;">\n              <ion-option value="f" selected>1 Kg</ion-option>\n              <ion-option value="m">500 g</ion-option>\n            </ion-select>\n            <h2>$ {{p.price}}</h2>\n          </div>\n          <div item-end>\n            <button ion-button *ngIf="p.disabled ? hidden : show" outline round (click)="addProduct(p)">{{p.inCart}}</button>\n            <ion-icon *ngIf="p.disabled" color="button-color" class="icon-size" name="remove-circle" (click)="itemDecrease(p)"></ion-icon>\n            <p *ngIf="p.disabled" item-end class="zero-margin">{{p.item}}</p>\n            <ion-icon *ngIf="p.disabled" color="button-color" class="icon-size" name="add-circle" (click)="itemIncrease(p)"></ion-icon>\n          </div>\n\n        </ion-item>\n      </ion-list> -->\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n      <ion-grid no-margin no-padding>\n        <ion-row no-margin no-padding>\n          <ion-col text-center>\n            <button color="light" clear ion-button block icon-left (click)="filter()"><ion-icon name="ios-funnel"></ion-icon> ΦΙΛΤΡΑ</button>\n          </ion-col>\n          <ion-col text-center>\n            <button color="light" clear ion-button block (click)="sort()"><ion-icon class="footer-icon" name="shuffle"></ion-icon>ΤΑΞΙΝΟΜΗΣΗ</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\product-list\product-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_vibration__["a" /* Vibration */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], ProductListPage);
    return ProductListPage;
    var ProductListPage_1;
}());

//# sourceMappingURL=product-list.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_cart__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_list_product_list__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//@IonicPage()
var CategoryPage = (function () {
    function CategoryPage(toastCtrl, dataService, menuCtrl, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl.enable(true);
        if (this.dataService.loggedInUser === undefined) {
            this.loggedInUser = { "email": "sales@opensourcetechnologies.com", "username": "OpenSource", "password": "ost@2018" };
        }
        else {
            this.loggedInUser = this.dataService.loggedInUser;
        }
        __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* MyApp */].loggedInUser = this.loggedInUser;
    }
    CategoryPage.prototype.badge = function () {
        return __WEBPACK_IMPORTED_MODULE_3__product_list_product_list__["a" /* ProductListPage */].notifier;
    };
    CategoryPage.prototype.show = function () {
        return __WEBPACK_IMPORTED_MODULE_3__product_list_product_list__["a" /* ProductListPage */].show;
    };
    CategoryPage.prototype.cart = function () {
        if (this.dataService.cartCost != 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__cart_cart__["a" /* CartPage */]);
        }
        else {
            var toast = this.toastCtrl.create({
                message: 'Δεν υπάρχουν προϊόντα στο καλάθι',
                duration: 1500
            });
            toast.present();
        }
    };
    CategoryPage.prototype.product = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_list_product_list__["a" /* ProductListPage */]);
    };
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-category',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\category\category.html"*/'<ion-header no-border no-padding>\n\n  <ion-navbar hideBackButton="true">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n    <ion-title class="titl">FASTDELIVERYHELLAS</ion-title>\n    <ion-buttons end>\n      <button ion-button clear (click)="cart()">\n          <ion-icon name="cart"></ion-icon>\n          <ion-badge *ngIf="show()" id="notifications-badge" color="danger">{{badge()}}</ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-item class="slides-main" no-margin>\n      <ion-slides no-margin spaceBetween=5 pager="false" effect=cube  autoplay="3000" loop="true" speed="3000">\n          <ion-slide>\n            <img src="assets/icon/fast_banner_1408x180.png">\n          </ion-slide>\n          <ion-slide>\n            <img src="assets/icon/fast_banner_1408x180_2.png">\n          </ion-slide>\n          <!---<ion-slide>\n            <img src="https://fastdeliveryhellas.gr/ionic-image-3.jpg">\n          </ion-slide>--->\n        </ion-slides>\n  </ion-item>\n  <ion-item no-margin no-padding>\n        <ion-slides border-top padding class="category" slidesPerView=3>\n            <ion-slide (click)="product()">\n              <img src="assets/icon/groceries.svg"><p>Super Market</p>\n            </ion-slide>\n            <ion-slide (click)="product()">\n              <img src="assets/icon/grocery.svg"><p>Μανάβικα</p>\n            </ion-slide>\n            <ion-slide (click)="product()">\n              <img src="assets/icon/shop.svg"><p>Κρεοπωλεία</p>\n            </ion-slide>\n            <ion-slide (click)="product()">\n              <img src="assets/icon/can.svg"><p>Καφετέριες</p>\n            </ion-slide>\n            <ion-slide (click)="product()">\n              <img src="assets/icon/deliver.svg"><p>Υπηρεσίες</p>\n            </ion-slide>\n          </ion-slides>\n  </ion-item>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid no-margin>\n    <h1 class="business-top">Προτεινόμενες Επιχειρήσεις</h1>\n    <ion-row>\n      <ion-col>\n          <img src="assets/imgs/best-pharmacy.jpg" (click)="product()">\n      </ion-col>\n      <ion-col>\n          <img src="assets/imgs/stamatakis-bakery.jpg" (click)="product()">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <img src="assets/imgs/happy-feet.jpg" (click)="product()">\n      </ion-col>\n      <ion-col>\n          <img src="assets/imgs/xalkiadakis.jpg" (click)="product()">\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\category\category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return regexValidators; });
var PURE_EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// Passwords should be at least 8 characters long and should contain one number, one character and one special character.
var PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
var PHONE_REGEXP = /^[0-9]*$/;
var NAME_REGEXP = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
var POSTAL_CODE_REGEXP = /\d{6}/;
var ADDRESS_REGEXP = /^[0-9]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
var LOCATION_REGEXP = /^[A-z ]+$/;
var regexValidators = {
    email: PURE_EMAIL_REGEXP,
    password: PASSWORD_REGEXP,
    phone: PHONE_REGEXP,
    name: NAME_REGEXP,
    postalCode: POSTAL_CODE_REGEXP,
    address: ADDRESS_REGEXP,
    location: LOCATION_REGEXP
};
//# sourceMappingURL=validator.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_drivers__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DriverService = (function () {
    function DriverService() {
        this.drivers = __WEBPACK_IMPORTED_MODULE_1__mock_drivers__["a" /* DRIVERS */];
    }
    DriverService.prototype.getAll = function () {
        return this.drivers;
    };
    DriverService.prototype.getItem = function (id) {
        for (var i = 0; i < this.drivers.length; i++) {
            if (this.drivers[i].id === parseInt(id)) {
                return this.drivers[i];
            }
        }
        return null;
    };
    DriverService.prototype.remove = function (item) {
        this.drivers.splice(this.drivers.indexOf(item), 1);
    };
    DriverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DriverService);
    return DriverService;
}());

//# sourceMappingURL=driver-service.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__location_location__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TermsAndConditions_TermsAndConditions__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(menu, navCtrl) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.menu.enable(false);
    }
    HomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.openTermsAndConditionsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__TermsAndConditions_TermsAndConditions__["a" /* TermsAndConditionsPage */]);
    };
    HomePage.prototype.skip = function () {
        this.menu.enable(true);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__location_location__["a" /* LocationPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\admin\FastDelivery-All\src\pages\home\home.html"*/'<ion-navbar hideBackButton="true">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n  <ion-title class="titl">FASTDELIVERYHELLAS</ion-title>\n</ion-navbar>\n\n<ion-content text-center class=" auth-bg">\n  <div class="auth-content">\n\n    <div class="light-bg">\n\n      <!-- Logo -->\n      <div padding text-center>\n        <div>\n        <!---<div class="logo primary-bg">\n          <i class="icon-sedan" ion-text color="light" ></i>--->\n          <img src="/assets/imgs/fast_round_500_5.png">\n        </div>\n        <h2 ion-text color="dark" >\n          FastDeliveryHellas\n        </h2>\n        <p ion-text color="dark" >Η νέα μορφή Delivery στην Ελλάδα</p>\n      </div>\n\n      <!-- Login form -->\n\n      <ion-list class="list-form" padding>\n\n        <ion-item>\n          <ion-input type="text" placeholder="Email"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-input type="password" placeholder="Password"></ion-input>\n        </ion-item>\n\n      </ion-list>\n\n      <div padding>\n        <button  ion-button color="primary"  block (click)="login()">\n          Συνδεση\n        </button>\n        <button ion-button round icon-left class="button-fb" (click)="loginFB()">\n          <ion-icon name="logo-facebook"></ion-icon>\n          ΣΥΝΔΕΣΗ ΜΕΣΩ FACEBOOK\n        </button>\n        <button ion-button round icon-left class="button-gl" (click)="loginGL()">\n          <ion-icon name="logo-google"></ion-icon>\n          ΣΥΝΔΕΣΗ ΜΕΣΩ GOOGLE\n        </button>\n        <button ion-button round icon-left class="button-tw" (click)="loginTW()">\n          <ion-icon name="logo-twitter"></ion-icon>\n          ΣΥΝΔΕΣΗ ΜΕΣΩ TWITTER\n        </button>\n      </div>\n\n    </div>\n\n    <div padding=""></div>\n\n    <!-- Other links -->\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <span ion-text color="light" >Ξεχάσατε τον κωδικό σας;</span>\n        </ion-col>\n        <ion-col>\n          <span ion-text color="light" >\n            Δεν έχετε λογαριασμό;\n            <span ion-text color="primary"  (click)="signup()">Εγγραφή</span>\n          </span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\admin\FastDelivery-All\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.js.map