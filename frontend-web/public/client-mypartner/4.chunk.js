webpackJsonp([4,10],{

/***/ 1439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_tracking_routing_module__ = __webpack_require__(1565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__order_tracking_component__ = __webpack_require__(1528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_module__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ot_search_ot_search_service__ = __webpack_require__(1532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_topbar_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ot_main_ot_main_component__ = __webpack_require__(1530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ot_search_ot_search_component__ = __webpack_require__(1531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ot_detail_ot_detail_component__ = __webpack_require__(1529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_ot_detail_card_ot_detail_card_service__ = __webpack_require__(1534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_ot_detail_card_ot_detail_card_model__ = __webpack_require__(1477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_ot_card_ot_card_component__ = __webpack_require__(1566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_ot_card_ot_card_service__ = __webpack_require__(1533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_ot_detail_card_ot_detail_card_component__ = __webpack_require__(1567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_form__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_config__ = __webpack_require__(113);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTrackingModule", function() { return OrderTrackingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var OrderTrackingModule = (function () {
    function OrderTrackingModule() {
    }
    return OrderTrackingModule;
}());
OrderTrackingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__order_tracking_routing_module__["a" /* OrderTrackingRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_8__shared_topbar_module__["a" /* TopbarSharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__shared_service_module__["a" /* ServiceShared */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__order_tracking_component__["a" /* OrderTrackingComponent */],
            __WEBPACK_IMPORTED_MODULE_9__ot_main_ot_main_component__["a" /* OtMainComponent */],
            __WEBPACK_IMPORTED_MODULE_10__ot_search_ot_search_component__["a" /* OtSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_11__ot_detail_ot_detail_component__["a" /* OtDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_ot_card_ot_card_component__["a" /* OtCardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__shared_ot_detail_card_ot_detail_card_component__["a" /* OtDetailCardComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__order_tracking_component__["a" /* OrderTrackingComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__shared_ot_card_ot_card_service__["a" /* otCardService */],
            __WEBPACK_IMPORTED_MODULE_17__services_form__["a" /* DataForm */],
            __WEBPACK_IMPORTED_MODULE_12__shared_ot_detail_card_ot_detail_card_service__["a" /* OtDetailCardService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_ot_detail_card_ot_detail_card_model__["a" /* OtDetailCardModel */],
            __WEBPACK_IMPORTED_MODULE_18__shared_config__["a" /* CommonFunc */],
            __WEBPACK_IMPORTED_MODULE_7__ot_search_ot_search_service__["a" /* OtSearchService */]
        ]
    })
], OrderTrackingModule);

//# sourceMappingURL=order-tracking.module.js.map

/***/ }),

/***/ 1477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtDetailCardModel; });
var OtDetailCardModel = (function () {
    function OtDetailCardModel() {
        this.ORNo = 0;
        this.PONo = 0;
        this.PODate = '';
        this.POStatus = '';
        this.ORList = [];
        this.AmountNoVat = 0;
        this.AmountBFVat = 0;
        this.Vat = 0;
        this.AmountSumVat = 0;
        this.Discount = 0;
        this.Withholding = 0;
        this.Total = 0;
        this.PayBy = '';
        this.NameOnTax = '';
        this.AddressOnTax = '';
    }
    return OtDetailCardModel;
}());

//# sourceMappingURL=ot-detail.card.model.js.map

/***/ }),

/***/ 1528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderTrackingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderTrackingComponent = (function () {
    function OrderTrackingComponent(route, router) {
        this.backLink = false;
        this.alert = {};
        var that = this;
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]; })
            .map(function () { return route; })
            .subscribe(function (event) {
            event.firstChild.data.subscribe(function (data) {
                that.headerTxt = data.topbar.headerText;
                that.backLink = data.topbar.backlink;
                that.urlBackLink = data.topbar.urlBackLink;
                that.alert = data.topbar.alert;
            });
        });
    }
    OrderTrackingComponent.prototype.onActivate = function (event) {
    };
    OrderTrackingComponent.prototype.ngOnInit = function () {
        $('body').css('background', '#e8e5e5');
    };
    return OrderTrackingComponent;
}());
OrderTrackingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-order-tracking',
        template: __webpack_require__(1650),
        styles: [__webpack_require__(1602)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], OrderTrackingComponent);

var _a, _b;
//# sourceMappingURL=order-tracking.component.js.map

/***/ }),

/***/ 1529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtDetailComponent = (function () {
    // @input("")
    function OtDetailComponent() {
    }
    OtDetailComponent.prototype.ngOnInit = function () {
    };
    return OtDetailComponent;
}());
OtDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ot-detail',
        template: __webpack_require__(1651),
        styles: [__webpack_require__(1603)]
    }),
    __metadata("design:paramtypes", [])
], OtDetailComponent);

//# sourceMappingURL=ot-detail.component.js.map

/***/ }),

/***/ 1530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_form__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_config__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_userInfo__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtMainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OtMainComponent = (function () {
    function OtMainComponent(route, router, dataForm, func, user) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.dataForm = dataForm;
        this.func = func;
        this.user = user;
        this.data = [];
        this.responseTxt = '';
        this.loadTest = false;
        route.params.subscribe(function (params) {
            var param = params['loadTest'];
            if (param) {
                _this.loadTest = true;
            }
        });
    }
    OtMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.loadTest) {
            this.dataForm.getOrderTrackingTest().then(function (res) {
            });
        }
        else {
            var that_1 = this;
            var date = new Date();
            var end = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
            date.setDate(date.getDate() - 3);
            var start = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
            var params = {
                SAPNo: '',
                PONo: '',
                startDate: start,
                endDate: end,
                DealerCode: this.user.getDealerCode()
            };
            $("#preload").css("display", "block");
            this.dataForm.getOrderTracking(params).then(function (res) {
                $("#preload").css("display", "none");
                if (typeof res.error !== 'undefined') {
                    _this.responseTxt = res.error;
                }
                else if (typeof res.listMonitorOrderMst !== 'undefined' && res.listMonitorOrderMst.length > 0) {
                    _this.data = [];
                    _this.dataForm.orderTracking = [];
                    for (var i in res.listMonitorOrderMst) {
                        var item = res.listMonitorOrderMst[i];
                        if (typeof item.sapSoAmt === 'undefined') {
                            item.sapSoAmt = 0;
                        }
                        var dt = {
                            reqOrderNo: item.reqOrderNo,
                            sapSoAmt: that_1.func.formatNumber(item.sapSoAmt),
                            reqOrderDt: item.reqOrderDt,
                            sapDescription: item.sapDescription,
                            reqDealerName: item.reqDealerName,
                            shipTo: item.shipTo,
                            sap: item.sapOrderShow,
                            sapOrderId: item.sapOrderShow,
                            poNoShow: item.poNoShow
                        };
                        _this.dataForm.orderTracking.push(dt);
                        _this.data.push(dt);
                    }
                }
                else {
                    _this.responseTxt = 'ไม่พบรายการสั่งซื้อ';
                }
            });
        }
    };
    OtMainComponent.prototype.linkToSearch = function () {
        this.router.navigate(['/order-tracking/search']);
    };
    OtMainComponent.prototype.linkToSort = function () {
        var item = [];
        for (var i = (this.data.length - 1); i >= 0; i--) {
            item.push(this.data[i]);
        }
        this.data = item;
    };
    OtMainComponent.prototype.routeToDetail = function (sapId, orderId) {
        this.router.navigate(['/order-tracking/detail/' + sapId + "|" + orderId]);
    };
    return OtMainComponent;
}());
OtMainComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ot-main',
        template: __webpack_require__(1652),
        styles: [__webpack_require__(1604)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_form__["a" /* DataForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_form__["a" /* DataForm */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_config__["a" /* CommonFunc */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_config__["a" /* CommonFunc */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_userInfo__["a" /* UserInfo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_userInfo__["a" /* UserInfo */]) === "function" && _e || Object])
], OtMainComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=ot-main.component.js.map

/***/ }),

/***/ 1531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ot_search_service__ = __webpack_require__(1532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_form__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_config__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_userInfo__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OtSearchComponent = (function () {
    function OtSearchComponent(otSearchService, dataForm, router, func, user) {
        this.otSearchService = otSearchService;
        this.dataForm = dataForm;
        this.router = router;
        this.func = func;
        this.user = user;
        this.data = this.otSearchService.data;
        this.responseTxt = '';
        this.name = '';
        this.SAPNo = this.otSearchService.SAPNo;
        this.PONo = this.otSearchService.PONo;
        this.startDate = this.otSearchService.startDate;
        this.endDate = this.otSearchService.endDate;
        this.minStart = this.otSearchService.minStart;
        this.minEnd = this.otSearchService.minEnd;
        this.maxStart = this.otSearchService.maxStart;
        this.maxEnd = this.otSearchService.maxEnd;
    }
    OtSearchComponent.prototype.getFullValue = function (val) {
        if (val.toString().length === 1) {
            return '0' + val;
        }
        return val;
    };
    OtSearchComponent.prototype.changeDate = function (eleRef) {
        if (eleRef === "end") {
            if (this.endDate !== "") {
                var date = new Date(this.endDate);
                date.setDate(date.getDate() - 7);
                this.minStart = date.getFullYear() +
                    "/" +
                    this.getFullValue(date.getMonth() + 1) +
                    "/" +
                    this.getFullValue(date.getDate());
                this.maxStart = this.endDate;
            }
            else {
                this.minStart = "2014-01-01";
                this.maxStart = new Date().toJSON().split('T')[0];
            }
        }
        else {
            if (this.startDate !== "") {
                var date = new Date(this.startDate);
                date.setDate(date.getDate() + 7);
                this.maxEnd = date.getFullYear() +
                    "/" +
                    this.getFullValue(date.getMonth() + 1) +
                    "/" +
                    this.getFullValue(date.getDate());
                this.minEnd = this.startDate;
            }
            else {
                this.minEnd = "2014-01-01";
                this.maxEnd = new Date().toJSON().split('T')[0];
            }
        }
    };
    OtSearchComponent.prototype.ngOnInit = function () {
    };
    OtSearchComponent.prototype.routeToDetail = function (sapId, orderId) {
        this.router.navigate(['/order-tracking/detail/' + sapId + "|" + orderId]);
    };
    OtSearchComponent.prototype.onSubmit = function () {
        var _this = this;
        var that = this;
        var params = {
            SAPNo: this.SAPNo,
            PONo: this.PONo,
            startDate: this.startDate,
            endDate: this.endDate,
            DealerCode: this.user.getDealerCode()
        };
        if ((this.SAPNo !== undefined || this.PONo !== undefined) ||
            (this.startDate !== undefined && this.endDate !== undefined)) {
            this.data = [];
            $("#preload").css("display", "block");
            this.dataForm.getOrderTracking(params)
                .then(function (res) {
                $("#preload").css("display", "none");
                if (typeof res.error !== 'undefined') {
                    _this.responseTxt = res.error;
                    _this.data = [];
                    _this.otSearchService.setData(_this);
                }
                else if (typeof res.listMonitorOrderMst !== 'undefined' && res.listMonitorOrderMst.length > 0) {
                    _this.responseTxt = '';
                    _this.data = [];
                    _this.dataForm.orderTracking = [];
                    for (var i in res.listMonitorOrderMst) {
                        var item = res.listMonitorOrderMst[i];
                        if (typeof item.sapSoAmt === 'undefined') {
                            item.sapSoAmt = 0;
                        }
                        var dt = {
                            reqOrderNo: item.reqOrderNo,
                            sapSoAmt: that.func.formatNumber(item.sapSoAmt),
                            reqOrderDt: item.reqOrderDt,
                            sapDescription: item.sapDescription,
                            reqDealerName: item.reqDealerName,
                            shipTo: item.shipTo,
                            sap: item.sapOrderShow,
                            sapOrderId: item.sapOrderShow,
                            poNoShow: item.poNoShow
                        };
                        _this.dataForm.orderTracking.push(dt);
                        _this.data.push(dt);
                        _this.otSearchService.setData(_this);
                    }
                }
                else if (typeof res.resultCode !== 'undefined' && res.resultCode === 'F') {
                    _this.responseTxt = res.resultMessage;
                    _this.data = [];
                    _this.otSearchService.setData(_this);
                }
                else {
                    _this.responseTxt = 'ไม่พบรายการสั่งซื้อ';
                    _this.data = [];
                    _this.otSearchService.setData(_this);
                }
            });
        }
    };
    return OtSearchComponent;
}());
OtSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ot-search',
        template: __webpack_require__(1653),
        styles: [__webpack_require__(1605)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ot_search_service__["a" /* OtSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ot_search_service__["a" /* OtSearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_form__["a" /* DataForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_form__["a" /* DataForm */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_config__["a" /* CommonFunc */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_config__["a" /* CommonFunc */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_userInfo__["a" /* UserInfo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_userInfo__["a" /* UserInfo */]) === "function" && _e || Object])
], OtSearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=ot-search.component.js.map

/***/ }),

/***/ 1532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OtSearchService = (function () {
    function OtSearchService(http) {
        this.http = http;
        this.data = [];
        this.minStart = "2014-01-01";
        this.maxStart = new Date().toJSON().split('T')[0];
        this.minEnd = "2014-01-01";
        this.maxEnd = new Date().toJSON().split('T')[0];
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    OtSearchService.prototype.setData = function (agr) {
        this.data = agr.data;
        this.SAPNo = agr.SAPNo;
        this.PONo = agr.PONo;
        this.startDate = agr.startDate;
        this.endDate = agr.endDate;
        this.status = agr.status;
        this.minStart = agr.minStart;
        this.maxStart = agr.maxStart;
        this.minEnd = agr.minEnd;
        this.maxEnd = agr.maxEnd;
    };
    return OtSearchService;
}());
OtSearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]) === "function" && _a || Object])
], OtSearchService);

var _a;
//# sourceMappingURL=ot-search.service.js.map

/***/ }),

/***/ 1533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return otCardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var otCardService = (function () {
    function otCardService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    otCardService.prototype.getObserver = function () {
        return this.subject.asObservable();
    };
    return otCardService;
}());
otCardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], otCardService);

//# sourceMappingURL=ot-card.service.js.map

/***/ }),

/***/ 1534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ot_detail_card_model__ = __webpack_require__(1477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_userInfo__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_form__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_config__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_client_mypartner_lib_src_services_auth_auth_http_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtDetailCardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var OtDetailCardService = (function () {
    function OtDetailCardService(otDetailCardModel, http, formSV, common, authHttpService, service) {
        this.otDetailCardModel = otDetailCardModel;
        this.http = http;
        this.formSV = formSV;
        this.common = common;
        this.authHttpService = authHttpService;
        this.service = service;
        this.url = '/api/mypartner/';
        this.subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.obj = this.otDetailCardModel;
    }
    OtDetailCardService.prototype.setContent = function (data, SAPNo) {
        var SAPNoConverted = SAPNo.split('|');
        this.obj = new __WEBPACK_IMPORTED_MODULE_1__ot_detail_card_model__["a" /* OtDetailCardModel */]();
        var DT = data.orderDetail;
        var refData;
        var that = this;
        this.formSV.orderTracking.map(function (obj, i) {
            if (obj !== undefined && obj.sap == SAPNoConverted[0]) {
                refData = obj;
            }
        });
        if (refData !== undefined) {
            this.obj.PONo = refData.poNoShow;
            this.obj.ORNo = refData.sapOrderId;
            this.obj.PODate = refData.reqOrderDt;
            this.obj.POStatus = refData.sapDescription;
            this.obj.Total = refData.sapSoAmt;
        }
        var AmountNoVat = 0;
        var AmountBFVat = 0;
        DT.items.map(function (obj, i) {
            if (obj.vat !== null && obj.vat !== 0 && obj.vat !== '' && obj.vat !== undefined) {
                AmountBFVat += obj.totalAmount;
            }
            else {
                AmountNoVat += obj.totalAmount;
            }
            that.obj.ORList.push({
                name: obj.matDesc + ' ' + obj.qty + ' ชิ้น',
                val: that.common.formatNumber(obj.netAmount)
            });
        });
        this.obj.AmountNoVat = that.common.formatNumber(AmountNoVat);
        this.obj.AmountBFVat = that.common.formatNumber(AmountBFVat);
        this.obj.Vat = that.common.formatNumber(DT.sumVat);
        this.obj.Discount = that.common.formatNumber(Math.abs(DT.sumDiscount));
        this.obj.Withholding = that.common.formatNumber(DT.sumWithHoldingTax);
        this.obj.PayBy = DT.changePayType;
        this.obj.NameOnTax = DT.reqTaxName;
        this.obj.AddOnTax = DT.reqTaxAddr;
        this.obj.NameOnShip = DT.reqShipToName;
        this.obj.AddOnShip = DT.reqShipToAddr;
        this.subject.next({
            obj: this.obj
        });
    };
    OtDetailCardService.prototype.getOrderTrackingDetailTest = function (agv) {
        var agr = agv.split('|');
        var data = { 'reqOrderNo': agr[1], 'sapOrderNo': agr[0] };
        return this.authHttpService.post('test/orderTrackingDetail', data).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    OtDetailCardService.prototype.getOrderTrackingDetail = function (agv) {
        var agr = agv.split('|');
        var data = {
            'reqOrderNo': agr[1],
            'sapOrderNo': agr[0],
            'temp': this.service.gToken(),
            'temp_': this.service.getAccessToken()
        };
        return this.authHttpService.post('orderTrackingDetail', data).toPromise()
            .then(this.extractData)
            .catch(function (error) {
            $("#preload").css("display", "none");
            var errMsg;
            if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Response"]) {
                var body = error.json() || '';
                var err = body.error || JSON.stringify(body);
                errMsg = error.status + " - " + (error.statusText || '') + " " + err;
            }
            else {
                errMsg = error.message ? error.message : error.toString();
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
        });
    };
    OtDetailCardService.prototype.getPutHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({
            headers: headers
        });
    };
    OtDetailCardService.prototype.extractData = function (res) {
        return res;
    };
    OtDetailCardService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(errMsg);
    };
    OtDetailCardService.prototype.getObserver = function () {
        return this.subject.asObservable();
    };
    return OtDetailCardService;
}());
OtDetailCardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ot_detail_card_model__["a" /* OtDetailCardModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ot_detail_card_model__["a" /* OtDetailCardModel */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__services_form__["a" /* DataForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_form__["a" /* DataForm */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_10__shared_config__["a" /* CommonFunc */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__shared_config__["a" /* CommonFunc */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_11_client_mypartner_lib_src_services_auth_auth_http_service__["a" /* AuthHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_client_mypartner_lib_src_services_auth_auth_http_service__["a" /* AuthHttpService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__services_userInfo__["a" /* UserInfo */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_userInfo__["a" /* UserInfo */]) === "function" && _f || Object])
], OtDetailCardService);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=ot-detail-card.service.js.map

/***/ }),

/***/ 1565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_tracking_component__ = __webpack_require__(1528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ot_main_ot_main_component__ = __webpack_require__(1530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ot_search_ot_search_component__ = __webpack_require__(1531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ot_detail_ot_detail_component__ = __webpack_require__(1529);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderTrackingRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var orderTrackingRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__order_tracking_component__["a" /* OrderTrackingComponent */],
        children: [
            {
                path: '', component: __WEBPACK_IMPORTED_MODULE_3__ot_main_ot_main_component__["a" /* OtMainComponent */],
                data: {
                    topbar: {
                        urlBackLink: '/index',
                        internal: false,
                        headerText: 'รายการสั่งซื้อ',
                        backlink: true,
                        alert: {
                            show: false,
                        }
                    },
                }
            },
            {
                path: 'search', component: __WEBPACK_IMPORTED_MODULE_4__ot_search_ot_search_component__["a" /* OtSearchComponent */],
                data: {
                    topbar: {
                        urlBackLink: '/order-tracking',
                        internal: false,
                        headerText: 'SEARCH',
                        backlink: true,
                        alert: {
                            show: false,
                        }
                    }
                }
            },
            {
                path: ':loadTest', component: __WEBPACK_IMPORTED_MODULE_3__ot_main_ot_main_component__["a" /* OtMainComponent */],
                data: {
                    topbar: {
                        urlBackLink: '/index',
                        internal: false,
                        headerText: 'รายการสั่งซื้อ',
                        backlink: true,
                        alert: {
                            show: false,
                        }
                    }
                }
            },
            {
                path: 'detail', component: __WEBPACK_IMPORTED_MODULE_5__ot_detail_ot_detail_component__["a" /* OtDetailComponent */],
                data: {
                    topbar: {
                        urlBackLink: '',
                        internal: false,
                        headerText: 'รายละเอียดคำสั่งซื้อ',
                        backlink: true,
                        alert: {
                            show: false,
                        }
                    }
                }
            },
            {
                path: 'detail/:sapNo',
                component: __WEBPACK_IMPORTED_MODULE_5__ot_detail_ot_detail_component__["a" /* OtDetailComponent */],
                data: {
                    topbar: {
                        urlBackLink: '',
                        internal: false,
                        headerText: 'รายละเอียดคำสั่งซื้อ',
                        backlink: true,
                        alert: {
                            show: false,
                        }
                    }
                }
            },
            {
                path: 'detail/:sapNo/:loadTest',
                component: __WEBPACK_IMPORTED_MODULE_5__ot_detail_ot_detail_component__["a" /* OtDetailComponent */],
                data: {
                    topbar: {
                        urlBackLink: '',
                        internal: false,
                        headerText: 'รายละเอียดคำสั่งซื้อ',
                        backlink: true,
                        alert: {
                            show: false,
                        }
                    }
                }
            }
        ]
    }
];
var OrderTrackingRoutingModule = (function () {
    function OrderTrackingRoutingModule() {
    }
    return OrderTrackingRoutingModule;
}());
OrderTrackingRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(orderTrackingRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], OrderTrackingRoutingModule);

//# sourceMappingURL=order-tracking-routing.module.js.map

/***/ }),

/***/ 1566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ot_card_service__ = __webpack_require__(1533);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OtCardComponent = (function () {
    function OtCardComponent(OtCardService) {
        var _this = this;
        this.OtCardService = OtCardService;
        this.date_ = '';
        this.iconPathMap = [
            { "name": "จัดส่งสินค้า", "path": "./assets/images/icon/delivered.png" },
            { "name": "Pending Verify", "path": "./assets/images/icon/packing.png" },
            { "name": "Wait Delivery", "path": "./assets/images/icon/deliver.png" },
            { "name": "Over Due", "path": "./assets/images/icon/overdue.png" },
            { "name": "Cancelled", "path": "./assets/images/icon/cancel.png" },
            { "name": "Goods Receive", "path": "./assets/images/icon/goodrecieve.png" },
            { "name": "Complete", "path": "./assets/images/icon/complete.png" },
            { "name": "Delivered", "path": "./assets/images/icon/delivered.png" },
        ];
        this.iconDefaultPath = "./assets/images/icon/default.png";
        this.subscription = this.OtCardService.getObserver().subscribe(function (message) {
            _this.trackNo = message.trackNo;
            _this.total = message.total;
            _this.date = message.date;
            _this.time = message.time;
            _this.status = message.status;
        });
        this.iconPath = this.iconDefaultPath;
        this.iconPathMap.map(function (obj, index) {
            if (obj.name === _this.status) {
                _this.iconPath = obj.path;
            }
        });
    }
    Object.defineProperty(OtCardComponent.prototype, "date", {
        set: function (date) {
            var dateSp = date.split(' ');
            this.date_ = dateSp[0];
        },
        enumerable: true,
        configurable: true
    });
    OtCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iconPath = this.iconDefaultPath;
        this.iconPathMap.map(function (obj, index) {
            if (obj.name === _this.status) {
                _this.iconPath = obj.path;
            }
        });
    };
    return OtCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('trackNo'),
    __metadata("design:type", String)
], OtCardComponent.prototype, "trackNo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('total'),
    __metadata("design:type", String)
], OtCardComponent.prototype, "total", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], OtCardComponent.prototype, "date", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('time'),
    __metadata("design:type", String)
], OtCardComponent.prototype, "time", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('status'),
    __metadata("design:type", String)
], OtCardComponent.prototype, "status", void 0);
OtCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ot-card',
        template: __webpack_require__(1654),
        styles: [__webpack_require__(1606)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ot_card_service__["a" /* otCardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ot_card_service__["a" /* otCardService */]) === "function" && _a || Object])
], OtCardComponent);

var _a;
//# sourceMappingURL=ot-card.component.js.map

/***/ }),

/***/ 1567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ot_detail_card_service__ = __webpack_require__(1534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ot_detail_card_model__ = __webpack_require__(1477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtDetailCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtDetailCardComponent = (function () {
    function OtDetailCardComponent(otDetailCardService, route) {
        var _this = this;
        this.otDetailCardService = otDetailCardService;
        this.route = route;
        this.loadTest = false;
        this.data = new __WEBPACK_IMPORTED_MODULE_2__ot_detail_card_model__["a" /* OtDetailCardModel */]();
        route.params.subscribe(function (params) {
            var param = params['loadTest'];
            if (param) {
                _this.loadTest = true;
            }
        });
        this.subscription = this.otDetailCardService
            .getObserver()
            .subscribe(function (message) {
            _this.data = message.obj;
        });
    }
    OtDetailCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.loadTest) {
            this.sub = this.route.params
                .subscribe(function (params) {
                _this.sapNo = params['sapNo'];
                _this.otDetailCardService
                    .getOrderTrackingDetailTest(_this.sapNo)
                    .then(function (res) {
                    _this.otDetailCardService
                        .setContent(res, _this.sapNo);
                });
            });
        }
        else {
            this.sub = this.route.params
                .subscribe(function (params) {
                _this.sapNo = params['sapNo'];
                $("#preload").css("display", "block");
                _this.otDetailCardService
                    .getOrderTrackingDetail(_this.sapNo)
                    .then(function (res) {
                    $("#preload").css("display", "none");
                    _this.otDetailCardService
                        .setContent(res, _this.sapNo);
                });
            });
        }
    };
    return OtDetailCardComponent;
}());
OtDetailCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-ot-detail-card',
        template: __webpack_require__(1655),
        styles: [__webpack_require__(1607)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ot_detail_card_service__["a" /* OtDetailCardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ot_detail_card_service__["a" /* OtDetailCardService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], OtDetailCardComponent);

var _a, _b;
//# sourceMappingURL=ot-detail-card.component.js.map

/***/ }),

/***/ 1602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1603:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".ot-detail {\n  padding: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1604:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".ot-topbar-header {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  background-color: white; }\n  .ot-topbar-header .ot-topbar {\n    background-color: white;\n    height: 50px;\n    color: #949494; }\n    @media screen and (max-width: 767px) {\n      .ot-topbar-header .ot-topbar {\n        height: 30px; } }\n    .ot-topbar-header .ot-topbar .columns {\n      text-align: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      display: -ms-flexbox;\n      display: flex; }\n    .ot-topbar-header .ot-topbar .search-bar {\n      display: inline-block; }\n      .ot-topbar-header .ot-topbar .search-bar .img {\n        cursor: pointer; }\n    .ot-topbar-header .ot-topbar .sort-bar {\n      display: inline-block;\n      border-left: 1px solid #e6e6e6; }\n\n.dataNotFound {\n  background-color: white;\n  text-align: center;\n  margin: 15px auto 0px auto;\n  width: 95%;\n  padding: 1em; }\n\n.ot-main-body {\n  width: 95%;\n  margin: auto; }\n  .ot-main-body .ot-main-body-item {\n    margin-top: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1605:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".search-box {\n  margin: .5rem 1.5rem 0 1.5rem;\n  background-color: #fafafa; }\n  .search-box .search-header {\n    color: ghostwhite;\n    padding: .5rem 1.3rem .5rem 1.3rem;\n    background-color: #8BC34A; }\n  .search-box .search-body {\n    padding: 0 1.3rem 0 1.3rem; }\n    .search-box .search-body .form-controls .form-label {\n      margin: 10px 0px 5px 0px; }\n    .search-box .search-body .form-controls .form-2input input {\n      width: 45%;\n      float: left; }\n    .search-box .search-body .form-controls .form-2input span {\n      width: 10%;\n      text-align: center;\n      line-height: 43px;\n      float: left; }\n  .search-box .search-footer {\n    width: 100%;\n    display: inline-block;\n    text-align: center; }\n    .search-box .search-footer button {\n      border: 1px solid #dadada;\n      border-radius: 3px;\n      background: #cfcfcf;\n      line-height: 2;\n      cursor: pointer;\n      padding: 0 5px 0 5px;\n      margin-bottom: 15px; }\n\n.dataNotFound {\n  background-color: white;\n  text-align: center;\n  margin: 15px 1.5rem 15px 1.5rem;\n  padding: 1em; }\n\n.ot-main-body {\n  margin: 15px 1.5rem 15px 1.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1606:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".ot-card {\n  cursor: pointer;\n  background-color: white;\n  border-radius: 6px; }\n  .ot-card .ot-card-top {\n    padding: 10px;\n    color: #74a122; }\n    .ot-card .ot-card-top .ot-card-top-left {\n      -ms-flex-pack: center;\n          justify-content: center;\n      -ms-flex-direction: column;\n          flex-direction: column;\n      display: -ms-flexbox;\n      display: flex; }\n    .ot-card .ot-card-top .ot-card-top-right {\n      font-size: 22px;\n      text-align: right; }\n      @media screen and (max-width: 767px) {\n        .ot-card .ot-card-top .ot-card-top-right {\n          font-size: 18px; } }\n  .ot-card .ot-card-bottom {\n    padding: 10px;\n    padding-top: 0px; }\n    .ot-card .ot-card-bottom .ot-card-bottom-left .date-time-tag {\n      color: #949494;\n      display: inline; }\n    .ot-card .ot-card-bottom .ot-card-bottom-right {\n      text-align: right;\n      color: #ff807d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1607:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n.ot-detail-card {\n  border-radius: 4px;\n  background-color: white;\n  color: #949494; }\n  .ot-detail-card .ot-detail-card-header {\n    border-radius: 4px 4px 0px 0px;\n    background-color: #8cc53f;\n    padding: 15px;\n    color: white; }\n  .ot-detail-card .ot-detail-card-top {\n    padding: 15px; }\n    .ot-detail-card .ot-detail-card-top .ot-detail-card-top-item {\n      margin-top: 5px; }\n      .ot-detail-card .ot-detail-card-top .ot-detail-card-top-item .ot-detail-card-top-item-right {\n        text-align: right;\n        padding-right: 0px; }\n  .ot-detail-card .ot-detail-card-top-sub {\n    padding: 15px;\n    background-color: #f1f1f1; }\n    .ot-detail-card .ot-detail-card-top-sub .ot-detail-card-top-sub-list {\n      padding: 15px;\n      padding-left: 0px;\n      padding-right: 0px; }\n      .ot-detail-card .ot-detail-card-top-sub .ot-detail-card-top-sub-list .ot-detail-card-top-sub-list-left {\n        padding-left: 30px;\n        display: -ms-flexbox;\n        display: flex; }\n      .ot-detail-card .ot-detail-card-top-sub .ot-detail-card-top-sub-list .ot-detail-card-top-sub-list-left::before {\n        content: \"\\2022   \";\n        color: #8cc53f;\n        padding-right: 5px; }\n      .ot-detail-card .ot-detail-card-top-sub .ot-detail-card-top-sub-list .ot-detail-card-top-sub-list-right {\n        text-align: right;\n        padding-right: 0; }\n    .ot-detail-card .ot-detail-card-top-sub .ot-detail-card-top-sub-row {\n      margin-top: 5px; }\n      .ot-detail-card .ot-detail-card-top-sub .ot-detail-card-top-sub-row .ot-detail-card-top-sub-right {\n        text-align: right;\n        padding-right: 0px; }\n  .ot-detail-card .ot-detail-card-total {\n    border-top: 1px solid #74a122;\n    border-bottom: 1px solid #74a122;\n    padding: 15px; }\n    .ot-detail-card .ot-detail-card-total .ot-detail-card-total-row {\n      margin-top: 5px; }\n      .ot-detail-card .ot-detail-card-total .ot-detail-card-total-row .ot-detail-card-total-right {\n        text-align: right;\n        padding-right: 0px; }\n      .ot-detail-card .ot-detail-card-total .ot-detail-card-total-row .ot-detail-card-total-left-money {\n        -ms-flex-pack: center;\n            justify-content: center;\n        -ms-flex-direction: column;\n            flex-direction: column;\n        display: -ms-flexbox;\n        display: flex; }\n      .ot-detail-card .ot-detail-card-total .ot-detail-card-total-row .ot-detail-card-total-right-money {\n        color: #74a122;\n        text-align: right;\n        padding-right: 0px;\n        font-size: 22px; }\n        @media screen and (max-width: 767px) {\n          .ot-detail-card .ot-detail-card-total .ot-detail-card-total-row .ot-detail-card-total-right-money {\n            font-size: 18px; } }\n  .ot-detail-card .ot-detail-card-bottom {\n    padding: 15px; }\n    .ot-detail-card .ot-detail-card-bottom .ot-detail-card-bottom-tax {\n      padding-left: 15px;\n      padding-top: 5px; }\n    .ot-detail-card .ot-detail-card-bottom .ot-detail-card-bottom-tracking {\n      padding-left: 15px;\n      padding-top: 5px; }\n\n.pink {\n  color: #ff807d; }\n\n.brown {\n  color: #614e47; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1650:
/***/ (function(module, exports) {

module.exports = "<app-topbar \n  [backLink]=backLink \n  [headerTxt]='headerTxt' \n  [linkURL]=\"urlBackLink\"\n  [cartLink]=\"cartLink\" ></app-topbar>\n<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n"

/***/ }),

/***/ 1651:
/***/ (function(module, exports) {

module.exports = "<div class=\"ot-detail\">\n  <app-ot-detail-card></app-ot-detail-card>\n</div>\n"

/***/ }),

/***/ 1652:
/***/ (function(module, exports) {

module.exports = "<div class=\"ot-topbar-header\">\n  <div class=\"row ot-topbar\">\n    <div class=\"large-6 columns search-bar\" (click)=\"linkToSearch()\">\n      <img src=\"./assets/images/search-icon.png\" style=\"width:30px;margin-right: 5px;\"/>\n      Search\n    </div>\n    <div class=\"large-6 columns sort-bar\" (click)=\"linkToSort()\">\n      <img src=\"./assets/images/sort.png\" style=\"width:30px;margin-right: 5px;\"/>\n      Sort\n    </div>\n  </div>\n</div>\n\n<div class=\"ot-main-body\" *ngFor='let value of data; trackBy: index;'>\n  <div class=\"ot-main-body-item\">\n    <app-ot-card [trackNo]=value.sap [total]=value.sapSoAmt [date]=value.reqOrderDt [status]=value.sapDescription (click)=\"routeToDetail(value.sap, value.reqOrderNo)\"></app-ot-card>\n  </div>\n</div>\n\n<div class=\"dataNotFound\" *ngIf=\"data.length === 0 && responseTxt !== ''\">\n  {{responseTxt}}\n</div>\n"

/***/ }),

/***/ 1653:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"search-box\">\n    <div class=\"search-header\">\n      ค้นหารายการสั่งซื้อ\n    </div>\n    <div class=\"search-body\">\n      <div class=\"form-controls\">\n        <div class=\"form-label\" >\n          เลขที่ใบสั่งซื้อ (Order No.)\n        </div>\n        <div class=\"form-input\">\n          <input placeholder=\"Order No.\" type=\"text\" [(ngModel)]=\"SAPNo\" />\n        </div>\n      </div>\n      <div class=\"form-controls\">\n        <div class=\"form-label\">\n          เลขที่คำสั่งซื้อ (PO No.)\n        </div>\n        <div class=\"form-input\">\n          <input placeholder=\"PO No.\" type=\"text\" [(ngModel)]=\"PONo\" />\n        </div>\n      </div>\n\n      <div class=\"form-controls\">\n        <div class=\"form-label\">\n          วันที่สั่งซื้อ (Order Date)\n        </div>\n        <div class=\"form-2input\">\n          <input  pattern=\"[0-9]{4}/[0-9]{2}/[0-9]{2}\"  (change)=\"changeDate('start')\" type=\"date\" [(ngModel)]=\"startDate\" />\n          <span class=\"span\"> &nbsp; To &nbsp;</span>\n          <input  pattern=\"[0-9]{4}/[0-9]{2}/[0-9]{2}\"  (change)=\"changeDate('end')\" type=\"date\" [(ngModel)]=\"endDate\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"search-footer\">\n      <button (click)=\"onSubmit()\">Search</button>\n    </div>\n  </div>\n  <div class=\"ot-main-body\" *ngFor='let value of data; trackBy: index;'>\n    <div class=\"ot-main-body-item\">\n      <app-ot-card [trackNo]=value.sap [total]=value.sapSoAmt [date]=value.reqOrderDt [status]=value.sapDescription (click)=\"routeToDetail(value.sap, value.reqOrderNo)\"></app-ot-card>\n    </div>\n  </div>\n  <div class=\"dataNotFound\" *ngIf=\"data.length === 0 && responseTxt !== ''\">\n      {{responseTxt}}\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ 1654:
/***/ (function(module, exports) {

module.exports = "<div class=\"ot-card\">\n  <div class=\"row ot-card-top\">\n    <div class=\"columns ot-card-top-left\">\n    เลขที่ใบสั่งซื้อ : #{{trackNo}}\n    </div>\n    <div class=\"columns ot-card-top-right\">\n    {{total}} ฿\n    </div>\n  </div>\n  <div class=\"row ot-card-bottom\">\n    <div class=\"columns col-xs-7 ot-card-bottom-left\">\n    วันที่สั่งซื้อ <p class=\"date-time-tag\">{{date_}}</p>\n    </div>\n    <div class=\"columns col-xs-5 ot-card-bottom-right\">\n      <img src=\"{{iconPath}}\" style=\"width:25px;margin-right: 5px;\"/>\n      {{status}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1655:
/***/ (function(module, exports) {

module.exports = "<div class=\"ot-detail-card\">\n  <div class=\"ot-detail-card-header\">\n    รายละเอียดคำสั่งซื้อ\n  </div>\n  <div class=\"ot-detail-card-top\">\n    <div class=\"row ot-detail-card-top-item brown\">\n      <div class=\"columns col-xs-5\">\n        เลขที่ใบสั่งซื้อ\n      </div>\n      <div class=\"columns col-xs-7 ot-detail-card-top-item-right\">\n        {{data.ORNo}}\n      </div>\n    </div>\n\n    <div class=\"row ot-detail-card-top-item\">\n      <div class=\"columns col-xs-5 \">\n        เลขที่คำสั่งซื้อ\n      </div>\n      <div class=\"columns col-xs-7 ot-detail-card-top-item-right\">\n        {{data.PONo}}\n      </div>\n    </div>\n    <div class=\"row ot-detail-card-top-item\">\n      <div class=\"columns col-xs-5\">\n        วันที่สั่งซื้อ\n      </div>\n      <div class=\"columns col-xs-7 ot-detail-card-top-item-right\">\n        {{data.PODate}}\n      </div>\n    </div>\n    <div class=\"row ot-detail-card-top-item\">\n      <div class=\"columns col-xs-8 \">\n        สถานะ\n      </div>\n      <div class=\"columns col-xs-4 ot-detail-card-top-item-right\">\n        {{data.POStatus}}\n      </div>\n    </div>\n  </div>\n  <div class=\"ot-detail-card-top-sub\">\n    <div class=\"row brown\">\n      <div class=\"columns\">\n        รายการสินค้า\n      </div>\n    </div>\n    <div class=\"ot-detail-card-top-sub-list\">\n      <div class=\"row \" *ngFor='let value of data.ORList; trackBy: index;'>\n        <div class=\"columns col-xs-8 ot-detail-card-top-sub-list-left\">\n            {{value.name}}\n        </div>\n        <div class=\"columns col-xs-4 ot-detail-card-top-sub-list-right\">\n            {{value.val}} ฿\n        </div>\n      </div>\n    </div>\n    <div class=\"row ot-detail-card-top-sub-row\">\n      <div class=\"columns col-xs-8 ot-detail-card-top-sub-left\">\n        รวมเงินสินค้าที่ไม่มี VAT\n      </div>\n      <div class=\"columns col-xs-4 ot-detail-card-top-sub-right\">\n        {{data.AmountNoVat}} ฿\n      </div>\n    </div>\n    <div class=\"row ot-detail-card-top-sub-row\">\n      <div class=\"columns col-xs-8 ot-detail-card-top-sub-left\">\n        รวมเงินสินค้าก่อน VAT\n      </div>\n      <div class=\"columns col-xs-4 ot-detail-card-top-sub-right\">\n        {{data.AmountBFVat}} ฿\n      </div>\n    </div>\n    <div class=\"row ot-detail-card-top-sub-row\">\n      <div class=\"columns col-xs-8 ot-detail-card-top-sub-left\">\n        ภาษีมูลค่าเพิ่ม\n      </div>\n      <div class=\"columns col-xs-4 ot-detail-card-top-sub-right\">\n        {{data.Vat}} ฿\n      </div>\n    </div>\n    <div class=\"row ot-detail-card-top-sub-row\">\n      <div class=\"columns pink col-xs-8 ot-detail-card-top-sub-left\">\n        ส่วนลดพิเศษ\n      </div>\n      <div class=\"columns pink col-xs-4 ot-detail-card-top-sub-right\">\n        {{data.Discount !== '0.00' ? '-' : ''}} {{data.Discount}} ฿\n      </div>\n    </div>\n    <div class=\"row ot-detail-card-top-sub-row\">\n      <div class=\"columns col-xs-8 ot-detail-card-top-sub-left\">\n        ภาษีหัก ณ ที่จ่าย\n      </div>\n      <div class=\"columns col-xs-4 ot-detail-card-top-sub-right\">\n        {{data.Withholding}} ฿\n      </div>\n    </div>\n  </div>\n  <div class=\"ot-detail-card-total\">\n    <div class=\"row ot-detail-card-total-row\">\n      <div class=\"columns col-xs-6 ot-detail-card-total-left-money brown\">\n        รวมจำนวนเงินที่ชำระ\n      </div>\n      <div class=\"columns col-xs-6 ot-detail-card-total-right-money\">\n        {{data.Total}} ฿\n      </div>\n    </div>\n    <div class=\"row ot-detail-card-total-row\">\n      <div class=\"columns col-xs-8 ot-detail-card-total-left\">\n        ชำระโดย\n      </div>\n      <div class=\"columns col-xs-4 ot-detail-card-total-right\">\n        {{data.PayBy}}\n      </div>\n    </div>\n  </div>\n  <div class=\"ot-detail-card-bottom\">\n    <div class=\"row \">\n      <div class=\"columns brown\">\n        ชื่อที่อยู่ตามใบกำกับภาษี\n      </div>\n    </div>\n    <div class=\"ot-detail-card-tax\">\n      <div class=\"row \">\n        <div class=\"columns\">\n          {{data.NameOnTax}}\n        </div>\n      </div>\n    </div>\n    <div class=\"ot-detail-card-bottom-tax\">\n      <div class=\"row \">\n        <div class=\"columns\">\n          {{data.AddOnTax}}\n        </div>\n      </div>\n    </div>\n    <div class=\"row \">\n      <div class=\"columns brown\">\n        สถานที่จัดส่งสินค้า\n      </div>\n    </div>\n    <div class=\"ot-detail-card-tracking\">\n      <div class=\"row \">\n        <div class=\"columns\">\n          {{data.NameOnShip}}\n        </div>\n      </div>\n    </div>\n    <div class=\"ot-detail-card-bottom-tracking\">\n      <div class=\"row \">\n        <div class=\"columns\">\n          {{data.AddOnShip}}\n        </div>\n      </div>\n    </div>\n\n\n</div>\n</div>\n"

/***/ })

});
//# sourceMappingURL=4.chunk.js.map