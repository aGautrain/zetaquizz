webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/api/accounts.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zetapush_angular__ = __webpack_require__("../../../../zetapush-angular/zetapush-angular.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AccountApi; });
/* unused harmony export AccountApiFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountApiProvider; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var AccountApi = (function (_super) {
    __extends(AccountApi, _super);
    function AccountApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountApi.prototype.signup = function (_a) {
        var login = _a.login, password = _a.password;
        return this.$publish('signup', { login: login, password: password });
    };
    return AccountApi;
}(__WEBPACK_IMPORTED_MODULE_1_zetapush_angular__["d" /* Api */]));

function AccountApiFactory(client, zone) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_zetapush_angular__["e" /* createApi */])(client, zone, AccountApi);
}
var AccountApiProvider = {
    provide: AccountApi,
    useFactory: AccountApiFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1_zetapush_angular__["c" /* ZetaPushClient */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]
};
//# sourceMappingURL=accounts.api.js.map

/***/ }),

/***/ "../../../../../src/app/api/rooms.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zetapush_angular__ = __webpack_require__("../../../../zetapush-angular/zetapush-angular.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RoomApi; });
/* unused harmony export RoomApiFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomApiProvider; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var RoomApi = (function (_super) {
    __extends(RoomApi, _super);
    function RoomApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoomApi.prototype.listRooms = function (_a) {
        return this.$publish('listRooms', {});
    };
    // For some macros a Promise has more sense
    RoomApi.prototype.joinRoom = function (_a) {
        var id = _a.id;
        return this.$publish('joinRoom', { id: id });
    };
    RoomApi.prototype.leaveRoom = function (_a) {
        var id = _a.id;
        return this.$publish('leaveRoom', { id: id });
    };
    RoomApi.prototype.createRoom = function (_a) {
        var name = _a.name, password = _a.password, delay = _a.delay, questions = _a.questions, chronomode = _a.chronomode;
        return this.$publish('createRoom', { name: name, password: password, delay: delay, questions: questions, chronomode: chronomode });
    };
    RoomApi.prototype.createCustomRoom = function (_a) {
        var name = _a.name, password = _a.password, delay = _a.delay, chronomode = _a.chronomode, seed = _a.seed;
        return this.$publish('createCustomRoom', { name: name, password: password, delay: delay, chronomode: chronomode, seed: seed });
    };
    RoomApi.prototype.detailRoomMember = function (_a) {
        var userKey = _a.userKey;
        return this.$publish('detailRoomMember', { userKey: userKey });
    };
    RoomApi.prototype.answerQuestion = function (_a) {
        var room = _a.room, givenAnswer = _a.givenAnswer;
        return this.$publish('answerQuestion', { room: room, givenAnswer: givenAnswer });
    };
    return RoomApi;
}(__WEBPACK_IMPORTED_MODULE_1_zetapush_angular__["d" /* Api */]));

function RoomApiFactory(client, zone) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_zetapush_angular__["e" /* createApi */])(client, zone, RoomApi);
}
var RoomApiProvider = {
    provide: RoomApi,
    useFactory: RoomApiFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1_zetapush_angular__["c" /* ZetaPushClient */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]
};
//# sourceMappingURL=rooms.api.js.map

/***/ }),

/***/ "../../../../../src/app/api/seeds.api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zetapush_angular__ = __webpack_require__("../../../../zetapush-angular/zetapush-angular.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SeedApi; });
/* unused harmony export SeedApiFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeedApiProvider; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SeedApi = (function (_super) {
    __extends(SeedApi, _super);
    function SeedApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeedApi.prototype.export = function (_a) {
        var seed = _a.seed;
        return this.$publish('setSeed', { seed: seed });
    };
    SeedApi.prototype.import = function (_a) {
        var id = _a.id;
        return this.$publish('getSeed', { id: id });
    };
    return SeedApi;
}(__WEBPACK_IMPORTED_MODULE_1_zetapush_angular__["d" /* Api */]));

function SeedApiFactory(client, zone) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_zetapush_angular__["e" /* createApi */])(client, zone, SeedApi);
}
var SeedApiProvider = {
    provide: SeedApi,
    useFactory: SeedApiFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1_zetapush_angular__["c" /* ZetaPushClient */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]
};
//# sourceMappingURL=seeds.api.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"demo-layout mdl-layout mdl-layout--fixed-header mdl-js-layout mdl-color--grey-100\">\n    <div class=\"demo-ribbon\"></div>\n    <main class=\"demo-main mdl-layout__content\">-->\n        <router-outlet></router-outlet>\n    <!--</main>\n</div>-->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lobby_lobby_component__ = __webpack_require__("../../../../../src/app/lobby/lobby.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__creation_creation_component__ = __webpack_require__("../../../../../src/app/creation/creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__creation_customizer_customizer_component__ = __webpack_require__("../../../../../src/app/creation/customizer/customizer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__game_lobby_lobby_component__ = __webpack_require__("../../../../../src/app/game/lobby/lobby.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__game_leaderboard_leaderboard_component__ = __webpack_require__("../../../../../src/app/game/leaderboard/leaderboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_zetapush_angular__ = __webpack_require__("../../../../zetapush-angular/zetapush-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__api_seeds_api__ = __webpack_require__("../../../../../src/app/api/seeds.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__api_rooms_api__ = __webpack_require__("../../../../../src/app/api/rooms.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__api_accounts_api__ = __webpack_require__("../../../../../src/app/api/accounts.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_pipes__ = __webpack_require__("../../../../../src/app/services/pipes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_rooms_service__ = __webpack_require__("../../../../../src/app/services/rooms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_quizz_service__ = __webpack_require__("../../../../../src/app/services/quizz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__room_room_component__ = __webpack_require__("../../../../../src/app/room/room.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// primeng dependencies

// components








// services








var appRoutes = [
    {
        path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'lobby', component: __WEBPACK_IMPORTED_MODULE_8__lobby_lobby_component__["a" /* LobbyComponent */]
    },
    {
        path: 'creation', component: __WEBPACK_IMPORTED_MODULE_9__creation_creation_component__["a" /* CreationComponent */]
    },
    {
        path: 'game/:game', component: __WEBPACK_IMPORTED_MODULE_11__game_game_component__["a" /* GameComponent */]
    },
    {
        path: 'game', component: __WEBPACK_IMPORTED_MODULE_8__lobby_lobby_component__["a" /* LobbyComponent */]
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__lobby_lobby_component__["a" /* LobbyComponent */],
            __WEBPACK_IMPORTED_MODULE_9__creation_creation_component__["a" /* CreationComponent */],
            __WEBPACK_IMPORTED_MODULE_11__game_game_component__["a" /* GameComponent */],
            __WEBPACK_IMPORTED_MODULE_12__game_lobby_lobby_component__["a" /* GameLobbyComponent */],
            __WEBPACK_IMPORTED_MODULE_13__game_leaderboard_leaderboard_component__["a" /* GameLeaderboardComponent */],
            __WEBPACK_IMPORTED_MODULE_21__room_room_component__["a" /* RoomComponent */],
            __WEBPACK_IMPORTED_MODULE_18__services_pipes__["a" /* isOpenPipe */],
            __WEBPACK_IMPORTED_MODULE_18__services_pipes__["b" /* isClosedPipe */],
            __WEBPACK_IMPORTED_MODULE_10__creation_customizer_customizer_component__["a" /* CustomizerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_14_zetapush_angular__["a" /* ZetaPushModule */],
            __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(appRoutes)
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_14_zetapush_angular__["b" /* ZetaPushClientConfig */],
                useValue: {
                    sandboxId: 'q1Yds09l'
                }
            },
            __WEBPACK_IMPORTED_MODULE_17__api_accounts_api__["a" /* AccountApiProvider */],
            __WEBPACK_IMPORTED_MODULE_16__api_rooms_api__["a" /* RoomApiProvider */],
            __WEBPACK_IMPORTED_MODULE_15__api_seeds_api__["a" /* SeedApiProvider */],
            __WEBPACK_IMPORTED_MODULE_19__services_rooms_service__["a" /* RoomService */],
            __WEBPACK_IMPORTED_MODULE_20__services_quizz_service__["a" /* QuizzService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/creation/creation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host article\n{\n    padding-bottom: 150px;\n}\n\n:host .creation-steps ul\n{\n    padding: 30px 0px 30px 0px;\n}\n\n:host .creation-steps ul li\n{\n    display: inline-block;\n    padding: 15px 18px 15px 25px;\n    margin-right: 20px;\n    margin-left: 20px;\n    text-align: center;\n}\n\n:host .creation-steps ul li:not(:last-child)::after\n{\n    position: relative;\n    left: 40px;\n    content: '>';\n    font-weight: normal;\n    color: rgb(62, 63, 58);\n}\n\n:host .creation-steps ul li.active\n{\n    font-weight: bold;\n    background-color: rgb(62, 63, 58);\n    border-radius: 5px;\n    color: white;\n}\n\n\n\n:host .type {\n    position: relative;\n\tdisplay: inline-block;\n\tpadding: 50px 20px 50px 100px;\n\ttext-align: right;\n\tbackground-color: lightgray;\n\tmax-width: 300px;\n\tmargin: 30px 30px 30px 30px;\n    font-size: 120%;\n    overflow: hidden;\n}\n\n:host .type h3 {\n    position: relative;\n    z-index: 1;\n    font-family: 'Rubik', sans-serif;\n}\n\n:host .type p {\n    position: relative;\n    z-index: 1;\n}\n\n:host .type:not(.type--disabled):hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n}\n\n:host .type--custom {\n    background-color: #80CD3D;\n    color: white;\n}\n\n:host .type--random {\n    background-color: #F1452A;\n    color: white;\n}\n\n:host .type .icon {\n    position: absolute;\n    z-index: 0;\n    bottom: -50px;\n    left: -50px;\n    color: white;\n    font-size: 2000%;\n    opacity: 0.3;\n}\n\n:host .type--selected {\n    -webkit-transform: scale(1.1) !important;\n            transform: scale(1.1) !important;\n}\n\n:host .type--disabled {\n    opacity: 0.5;\n}\n\n:host .type--disabled .icon {\n    color: gray;\n}\n\n:host .form-settings .form-group {\n    margin-bottom: 40px;\n}\n\n\n/*\n\n:host .input-group\n{\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n:host .tabs\n{\n    padding-left: 0px;\n    margin-bottom: 0px;\n    width: 100%;\n}\n\n:host .tabs li\n{\n    display: inline-block;\n    color: lightgray;\n}\n\n\n\n:host .tabs--active\n{\n    background-color: #F8F5F0;\n}\n\n:host .tabs li a.btn\n{\n    color: gray;\n    font-size: 110%;\n    transition: 0.1s;\n}\n\n:host .tabs .tabs--active a.btn\n{\n    color: black;\n    font-size: 130%;\n}\n\n\n\n:host .input-quizz-type\n{\n    position: relative;\n    right: 30%;\n}\n\n\n:host .form-horizontal .control-label\n{\n    margin-bottom: 6px;\n}\n\n:host .container\n{\n    padding-bottom: 100px;\n}\n\n:host article\n{\n    position: relative;\n}\n\n:host .btn-group a.btn {\n    margin-left: 0px;\n    margin-right: 0px;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/creation/creation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"area-main\">\n    <header>\n        <div class=\"header-bckg\">\n            <h1 class=\"main-title\">Creation</h1>\n            <h4>Let's create the quizz, following three easy steps</h4>\n            <a (click)=\"backLobby()\" class=\"btn btn-info btn-disconnect\">\n                BACK <i class=\"fa fa-home\" aria-hidden=\"true\"></i>\n            </a>\n        </div>\n    </header>\n    <section class=\"container\">\n        <div class=\"creation-steps\">\n            <ul>\n              <li [ngClass]=\"{'active': stepIsFirst()}\">Type</li>\n              <li [ngClass]=\"{'active': stepIsSecond()}\">Questions</li>\n              <li [ngClass]=\"{'active': stepIsThird()}\">Settings</li>\n            </ul>\n        </div>\n\n        <article *ngIf=\"stepIsFirst()\" class=\"step-type\">\n            <h2>1°) Choosing quizz type</h2>\n            <div class=\"sub-title--diviser\"></div>\n\n            <div (click)=\"selectCustomType()\" [ngClass]=\"{'type': true, 'type--custom': true, 'type--selected': typeIsCustom()}\" title=\"Chose custom\">\n                <i class=\"icon fa fa-wrench\" aria-hidden=\"true\"></i>\n                <h3>Custom</h3>\n                <p>Write your own questions</p>\n            </div>\n\n            <div class=\"type type--random\" title=\"Chose random\">\n                <i class=\"icon fa fa-random\" aria-hidden=\"true\"></i>\n                <h3>Random</h3>\n                <p>Pick a bunch of random questions</p>\n            </div>\n\n            <div class=\"type type--music type--disabled\" title=\"Coming soon !\">\n                <i class=\"icon fa fa-clock-o\" aria-hidden=\"true\"></i>\n                <h3>Music</h3>\n                <p>Listen to famous music extracts from Deezer</p>\n            </div>\n\n            <a (click)=\"nextStep()\" [ngClass]=\"{'btn': true, 'btn-info': true, 'btn-action': true, 'disabled': typeIsUnknown()}\">\n                <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i> Next step\n            </a>\n\n        </article>\n\n        <article *ngIf=\"stepIsSecond()\" class=\"step-type\">\n            <h2>2°) Writing questions</h2>\n            <div class=\"sub-title--diviser\"></div>\n\n            <questions-customizer class=\"row col-xs-6 col-xs-offset-3\" #seed></questions-customizer>\n\n            <a (click)=\"nextStep()\" [ngClass]=\"{'btn': true, 'btn-info': true, 'btn-action': true, 'disabled': seedIsUnknown()}\">\n                <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i> Next step\n            </a>\n\n        </article>\n\n        <article *ngIf=\"stepIsThird()\" class=\"step-type\">\n            <h2>3°) Setting parameters</h2>\n            <div class=\"sub-title--diviser\"></div>\n\n            <div class=\"row col-xs-6 col-xs-offset-3\">\n                <form class=\"form-settings\">\n                        <div class=\"form-group\">\n                            <p>Name of the room</p>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-flag\" aria-hidden=\"true\"></i></span>\n                                <input [(ngModel)]=\"roomName\" class=\"form-control\" name=\"roomName\" placeholder=\"Will appear in lobby\" type=\"text\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <p>Password (room open if not specified)</p>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-unlock-alt\" aria-hidden=\"true\"></i></span>\n                                <input [(ngModel)]=\"roomPassword\" class=\"form-control\" name=\"roomPassword\" placeholder=\"Prevents random people from entering\" type=\"text\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <p>Time spent before launch</p>\n                            <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><i class=\"fa fa-hourglass-half\" aria-hidden=\"true\"></i></span>\n                                <input [(ngModel)]=\"roomTime\" class=\"form-control\" name=\"roomTime\" min=\"10\" max=\"75\" step=\"5\" placeholder=\"Leave time for people to join room\" type=\"number\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <p>Game mode</p>\n                            <div class=\"col-lg-12 text-left\">\n                                <div class=\"radio\">\n                                    <label>\n                                        <input [(ngModel)]=\"roomChronomode\" name=\"roomChronomode\" value=\"default\" type=\"radio\">\n                                        DEFAULT - Right answer + 5 points, wrong answers -1 point\n                                    </label>\n                                </div>\n                                <div class=\"radio\">\n                                    <label>\n                                        <input [(ngModel)]=\"roomChronomode\" name=\"roomChronomode\" value=\"chronomode\" type=\"radio\">\n                                        CHRONOMODE - Earn points based on how fast you answer\n                                    </label>\n                                </div>\n                            </div>\n                        </div>\n                </form>\n            </div>\n\n\n            <a (click)=\"create()\" [ngClass]=\"{'btn': true, 'btn-info': true, 'btn-action': true, 'disabled': !formComplete()}\">\n                <i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i> Go !\n            </a>\n\n        </article>\n\n\n\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/creation/creation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_rooms_service__ = __webpack_require__("../../../../../src/app/services/rooms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__customizer_customizer_component__ = __webpack_require__("../../../../../src/app/creation/customizer/customizer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_zetapush_angular__ = __webpack_require__("../../../../zetapush-angular/zetapush-angular.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreationComponent = (function () {
    function CreationComponent(router, roomService, zpClient) {
        this.router = router;
        this.roomService = roomService;
        this.zpClient = zpClient;
        this.stepNumber = 0;
        this.quizzType = "";
        this.quizzSeed = "";
        this.roomName = "";
        this.roomTime = 0;
        this.roomQuestions = 0;
        this.roomPassword = "";
        this.roomChronomode = "default";
        this.goingToLobby = false;
    }
    CreationComponent.prototype.ngOnInit = function () {
        if (!this.zpClient.isConnected()) {
            this.redirectLogin();
        }
        else {
            this.roomTime = 30;
            this.roomQuestions = 5;
        }
    };
    CreationComponent.prototype.backLobby = function () {
        this.goingToLobby = true;
        this.router.navigate(['/lobby']);
    };
    CreationComponent.prototype.formComplete = function () {
        var complete = false;
        complete = (this.roomName != ""
            && this.roomTime > 0
            && this.roomTime < 100
            && this.quizzSeed !== "");
        return complete;
    };
    CreationComponent.prototype.createCustomRoom = function () {
        var _this = this;
        if (this.formComplete()) {
            var isInChronomode = (this.roomChronomode === "chronomode");
            this.roomService.createCustom(this.roomName, this.roomPassword, Math.floor(this.roomTime), isInChronomode, this.quizzSeed).then(function (result) {
                // redirection (to game) + add parameters
                _this.router.navigate(['/game', JSON.stringify(result['room'])]);
            }, function (error) {
                console.log('error happend');
            });
        }
    };
    // redirection to the corresponding method
    CreationComponent.prototype.create = function () {
        this.createCustomRoom();
    };
    /* Step gestion */
    CreationComponent.prototype.nextStep = function () {
        if (this.stepNumber === 1) {
            // saving seed
            this.quizzSeed = this.seed.getSeed();
        }
        this.stepNumber++;
    };
    CreationComponent.prototype.previousStep = function () {
        this.stepNumber--;
    };
    CreationComponent.prototype.stepIsFirst = function () {
        return this.stepNumber === 0;
    };
    CreationComponent.prototype.stepIsSecond = function () {
        return this.stepNumber === 1;
    };
    CreationComponent.prototype.stepIsThird = function () {
        return this.stepNumber === 2;
    };
    /* End step gestion */
    /* Step 1 */
    CreationComponent.prototype.selectCustomType = function () {
        this.quizzType = "custom";
    };
    CreationComponent.prototype.typeIsCustom = function () {
        return this.quizzType === "custom";
    };
    CreationComponent.prototype.typeIsUnknown = function () {
        return !this.typeIsCustom();
    };
    /* Step 2 */
    CreationComponent.prototype.seedIsUnknown = function () {
        if (this.seed != null) {
            return this.seed.getSeed() === "";
        }
        else {
            return true;
        }
    };
    CreationComponent.prototype.redirectLogin = function () {
        console.log('tried to access a page without being logged in');
        this.router.navigate(['/login']);
    };
    CreationComponent.prototype.ngOnDestroy = function () {
        // when forced exit OR going to game -> leaving lobby
        if (this.zpClient.isConnected() && !this.goingToLobby) {
            this.roomService.leaveLobby();
        }
    };
    return CreationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__customizer_customizer_component__["a" /* CustomizerComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__customizer_customizer_component__["a" /* CustomizerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__customizer_customizer_component__["a" /* CustomizerComponent */]) === "function" && _a || Object)
], CreationComponent.prototype, "seed", void 0);
CreationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-creation',
        template: __webpack_require__("../../../../../src/app/creation/creation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/creation/creation.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_rooms_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_rooms_service__["a" /* RoomService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_zetapush_angular__["c" /* ZetaPushClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_zetapush_angular__["c" /* ZetaPushClient */]) === "function" && _d || Object])
], CreationComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=creation.component.js.map

/***/ }),

/***/ "../../../../../src/app/creation/customizer/customizer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host .input-group\n{\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n:host .custom-question\n{\n    margin-top: 10px;\n    margin-bottom: 15px;\n}\n\n:host .custom-question .btn\n{\n    font-size: 120%;\n}\n\n:host .popup-close\n{\n    position: absolute;\n    top: -15px;\n    right: -10px;\n}\n\n:host .popup-close .btn\n{\n    border-radius: 0px;\n    padding: 8px 12px 10px 12px;\n}\n\n:host .btn-group a.btn {\n    margin-left: 0px;\n    margin-right: 0px;\n}\n\n:host .titles\n{\n    font-size: 130%;\n}\n\n:host .seed-input\n{\n    text-align: center;\n    height: auto;\n    font-size: 150%;\n    padding: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/creation/customizer/customizer.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- EDITING VIEW -->\n<article *ngIf=\"isEditingInstance\" [@rightItem]=\"'in'\"style=\"width: 100%;\">\n\n    <div class=\"custom-question btn-group popup-close\">\n        <a (click)=\"closeEditor()\" class=\"btn btn-danger\">\n            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </a>\n    </div>\n\n    <form>\n        <legend>Question {{ instanceEdited + 1 }}</legend>\n\n        <div class=\"input-group\">\n            <input [(ngModel)]=\"instanceTemporary['question']\" type=\"text\" name=\"question\" class=\"form-control\" placeholder=\"Question\">\n        </div>\n\n        <p>Check the right answer</p>\n\n        <div *ngFor=\"let k of answersKeys()\" class=\"input-group\">\n            <span class=\"input-group-addon\">\n                <input [(ngModel)]=\"instanceTemporary['solution']\" type=\"radio\" name=\"solution\" [value]=\"k\">\n            </span>\n            <input [(ngModel)]=\"instanceTemporary['answers'][k]\" type=\"text\"  [name]=\"getAnswerName(k)\" class=\"form-control\" [placeholder]=\"getAnswerName(k)\">\n        </div>\n    </form>\n\n    <p *ngIf=\"!isValidInstance()\">\n        <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n        You must fill at least the question and the answer checked as valid !\n    </p>\n\n    <div class=\"custom-question btn-group popup-validate\">\n        <a (click)=\"validateEditor()\" [ngClass]=\"{'btn':true, 'btn-primary':true,'disabled':!isValidInstance()}\">\n            Validate\n        </a>\n    </div>\n\n</article>\n<!-- END EDITING VIEW -->\n\n<!-- RECAP VIEW -->\n<article *ngIf=\"!isEditingInstance\" [@fading]=\"'in'\" style=\"width: 100%;\">\n\n\n\n    <p class=\"titles\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i> Use the code below to play again</p>\n\n    <div class=\"form-group\">\n        <div class=\"input-group\">\n            <!--<span class=\"input-group-btn\">\n              <button (click)=\"exportQuizz()\" [ngClass]=\"{'btn': true, 'btn-primary': true, 'disabled': !isValidQuizz()}\" type=\"button\" title=\"Export your quizz and get a seed (must have a quizz above)\"><i class=\"fa fa-cloud-upload\" aria-hidden=\"true\"></i></button>\n          </span>-->\n            <input [(ngModel)]=\"quizzSeed\" name=\"quizzSeed\" class=\"form-control seed-input\" placeholder=\"No code\" type=\"text\">\n            <!--<span class=\"input-group-btn\">\n              <button (click)=\"importQuizz()\" [ngClass]=\"{'btn': true, 'btn-danger': true, 'disabled': !isValidSeed()}\" type=\"button\" title=\"Load quizz from existant seed (must give a seed)\"><i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i></button>\n          </span>-->\n        </div>\n    </div>\n\n    <p>\n        Share that code to let other players starting a copy of your quizz !<br/>\n        If you have a code just type it here and then load the quizz.\n    </p>\n\n    <div class=\"separator\"></div>\n\n    <p class=\"titles\"><i class=\"fa fa-th-list\" aria-hidden=\"true\"></i> There is {{ instances.length }} question(s) yet</p>\n\n    <div *ngFor=\"let k of instancesKeys()\" [@leftItem]=\"'in'\">\n        <div class=\"custom-question btn-group\">\n            <a class=\"btn btn-primary disabled\">Question {{ k + 1 }}</a>\n            <a (click)=\"goToEditor(k)\" class=\"btn btn-default\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></a>\n            <a (click)=\"deleteInstance(k)\" class=\"btn btn-danger\"><i class=\"fa fa-ban\" aria-hidden=\"true\"></i></a>\n        </div>\n    </div>\n\n    <div *ngIf=\"canImportQuizz()\" class=\"custom-question btn-group btn-group--new-question\">\n        <a (click)=\"importQuizz()\" class=\"btn btn-warning\">Import quizz</a>\n    </div>\n\n    <div class=\"custom-question btn-group btn-group--new-question\">\n        <a (click)=\"goToEditor(instances.length)\" class=\"btn btn-default\">Add question</a>\n    </div>\n\n    <div *ngIf=\"canExportQuizz()\" class=\"custom-question btn-group btn-group--new-question\">\n        <a (click)=\"exportQuizz()\" class=\"btn btn-success\">Send quizz</a>\n    </div>\n\n\n\n</article>\n<!-- END RECAP VIEW -->\n"

/***/ }),

/***/ "../../../../../src/app/creation/customizer/customizer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_seeds_api__ = __webpack_require__("../../../../../src/app/api/seeds.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomizerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomizerComponent = (function () {
    function CustomizerComponent(seedApi) {
        this.seedApi = seedApi;
        this.isEditingInstance = false;
        this.instanceEdited = 0;
        this.instances = [];
        this.quizzSeed = "";
        this.lastWorkingSeed = "";
    }
    CustomizerComponent.prototype.goToEditor = function (numero) {
        this.instanceEdited = numero;
        this.isEditingInstance = true;
        // the instance edited is a temporary object
        // this will allow to cancel changes
        if (numero < this.instances.length) {
            // editing a shallow copy of existing instance
            this.instanceTemporary = JSON.parse(JSON.stringify(this.instances[numero]));
        }
        else {
            // editing new instance
            this.instanceTemporary = {
                "question": "",
                "answers": ["", "", "", ""],
                "solution": 0
            };
        }
    };
    CustomizerComponent.prototype.closeEditor = function () {
        this.isEditingInstance = false;
    };
    CustomizerComponent.prototype.isValidInstance = function () {
        var index = this.instanceTemporary['solution'];
        var indexIsValid = index >= 0 && index < 4;
        var answerIsValid = this.instanceTemporary['answers'][index] != "";
        var questionIsValid = this.instanceTemporary['question'] != "";
        return indexIsValid && answerIsValid && questionIsValid;
    };
    CustomizerComponent.prototype.isValidQuizz = function () {
        return this.instances.length >= 1;
    };
    CustomizerComponent.prototype.validateEditor = function () {
        if (this.isValidInstance()) {
            this.isEditingInstance = false;
            // we apply changes
            this.instances[this.instanceEdited] = this.instanceTemporary;
        }
    };
    CustomizerComponent.prototype.deleteInstance = function (numero) {
        this.instances.splice(numero, 1);
    };
    CustomizerComponent.prototype.instancesKeys = function () {
        var numbers = [];
        for (var i = 0; i < this.instances.length; i++) {
            numbers.push(i);
        }
        return numbers;
    };
    CustomizerComponent.prototype.answersKeys = function () {
        return [0, 1, 2, 3];
    };
    CustomizerComponent.prototype.getAnswerName = function (k) {
        return "answer" + k;
    };
    // seed process
    CustomizerComponent.prototype.isValidSeed = function () {
        return this.quizzSeed !== "";
    };
    CustomizerComponent.prototype.getSeed = function () {
        return this.quizzSeed;
    };
    CustomizerComponent.prototype.canExportQuizz = function () {
        return this.instances.length > 0;
    };
    CustomizerComponent.prototype.canImportQuizz = function () {
        return this.quizzSeed !== "" && this.quizzSeed !== this.lastWorkingSeed;
    };
    CustomizerComponent.prototype.exportQuizz = function () {
        var _this = this;
        if (this.isValidQuizz()) {
            this.seedApi.export({ seed: this.instances }).then(function (res) {
                _this.quizzSeed = res['id'];
                _this.lastWorkingSeed = res['id'];
            }, function (err) {
                console.error('Error happend during export');
            });
        }
    };
    CustomizerComponent.prototype.importQuizz = function () {
        var _this = this;
        if (this.isValidSeed()) {
            this.seedApi.import({ id: this.quizzSeed }).then(function (res) {
                _this.lastWorkingSeed = _this.quizzSeed;
                var instances = res['instances'];
                _this.formatInstances(instances);
                _this.instances = instances;
                console.log('Seed imported : ', instances);
            }, function (err) { console.error('Error happend during export'); });
        }
    };
    CustomizerComponent.prototype.formatInstances = function (instances) {
        instances.map(function (x) { return x['solution'] = x['answers'].indexOf(x['solution']); });
        for (var i = 0; i < instances.length; i++) {
            while (instances[i]['answers'].length < 4) {
                instances[i]['answers'].push("");
            }
        }
    };
    return CustomizerComponent;
}());
CustomizerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'questions-customizer',
        template: __webpack_require__("../../../../../src/app/creation/customizer/customizer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/creation/customizer/customizer.component.css")],
        // for animations comprehension : https://angular.io/guide/animations
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('fading', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(100)
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('rightItem', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translateX(0)', opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translateX(100px)', opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(100)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translateX(100px)', opacity: 0 }))
                ])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('leftItem', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translateX(0)', opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translateX(-100px)', opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(100)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translateX(-100px)', opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_seeds_api__["b" /* SeedApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_seeds_api__["b" /* SeedApi */]) === "function" && _a || Object])
], CustomizerComponent);

var _a;
//# sourceMappingURL=customizer.component.js.map

/***/ }),

/***/ "../../../../../src/app/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/* STEPS */\n\n:host .quizz-steps\n{\n    padding-left: 0px;\n    padding-top: 30px;\n}\n\n:host .quizz-step\n{\n    display: inline-block;\n    padding: 10px;\n    margin-right: 10px;\n    margin-left: 10px;\n    color: #ABABAB;\n    border-bottom: solid transparent 2px;\n    transition: 0.3s;\n}\n\n:host .quizz-step:not(.quizz-step--active) i.fa-caret-up\n{\n    opacity: 0;\n}\n\n:host .quizz-step i.fa-home\n{\n    color: #40C4FF;\n}\n\n:host .quizz-step i.fa-trophy\n{\n    color: #FBC81F;\n}\n\n:host .quizz-step--correct\n{\n    color: #009C47;\n}\n\n:host .quizz-step--incorrect\n{\n    color: #E52F39;\n}\n\n:host .quizz-step--active i.fa-caret-up\n{\n    opacity: 1;\n    transition: 0.2s;\n    color: black;\n}\n\n/* END STEPS */\n\n\n/* TIMER */\n\n:host .quizz-timer\n{\n    position: fixed;\n    bottom: 30px;\n    right: 50px;\n}\n\n:host .quizz-timer span\n{\n    font-size: 500%;\n    font-family: 'Source Sans Pro', sans-serif;\n    font-weight: 200;\n    letter-spacing: 2px;\n}\n\n/* END TIMER */\n\n\n/* INSTANCES */\n\n@-webkit-keyframes spin {\n    0%   {-webkit-transform: rotateZ(0deg);transform: rotateZ(0deg);}\n    50% { -webkit-transform: rotateZ(-180deg); transform: rotateZ(-180deg);}\n    100% {-webkit-transform: rotateZ(-360deg);transform: rotateZ(-360deg);}\n}\n\n@keyframes spin {\n    0%   {-webkit-transform: rotateZ(0deg);transform: rotateZ(0deg);}\n    50% { -webkit-transform: rotateZ(-180deg); transform: rotateZ(-180deg);}\n    100% {-webkit-transform: rotateZ(-360deg);transform: rotateZ(-360deg);}\n}\n\n@-webkit-keyframes blink {\n    /**\n     * At the start of the animation the dot\n     * has an opacity of .2\n     */\n    0% {\n      opacity: .2;\n    }\n    /**\n     * At 20% the dot is fully visible and\n     * then fades out slowly\n     */\n    20% {\n      opacity: 1;\n    }\n    /**\n     * Until it reaches an opacity of .2 and\n     * the animation can start again\n     */\n    100% {\n      opacity: 0;\n    }\n}\n\n@keyframes blink {\n    /**\n     * At the start of the animation the dot\n     * has an opacity of .2\n     */\n    0% {\n      opacity: .2;\n    }\n    /**\n     * At 20% the dot is fully visible and\n     * then fades out slowly\n     */\n    20% {\n      opacity: 1;\n    }\n    /**\n     * Until it reaches an opacity of .2 and\n     * the animation can start again\n     */\n    100% {\n      opacity: 0;\n    }\n}\n\n:host .dots span {\n    -webkit-animation-name: blink;\n            animation-name: blink;\n    -webkit-animation-duration: 1.5s;\n            animation-duration: 1.5s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n\n:host .dots span:nth-child(2) {\n    /**\n     * Starts the animation of the third dot\n     * with a delay of .2s, otherwise all dots\n     * would animate at the same time\n     */\n    -webkit-animation-delay: .3s;\n            animation-delay: .3s;\n}\n\n:host .dots span:nth-child(3) {\n    /**\n     * Starts the animation of the third dot\n     * with a delay of .4s, otherwise all dots\n     * would animate at the same time\n     */\n    -webkit-animation-delay: .6s;\n            animation-delay: .6s;\n}\n\n:host .fa-hourglass-half\n{\n    -webkit-animation-name: spin;\n            animation-name: spin;\n    -webkit-animation-duration: 3s;\n            animation-duration: 3s;\n    -webkit-animation-direction: alternate;\n            animation-direction: alternate;\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: cubic-bezier(.68,-0.55,.27,1.55);\n            animation-timing-function: cubic-bezier(.68,-0.55,.27,1.55);\n}\n\n:host .dots span\n{\n    font-size: 100%;\n    display: inline-block;\n    margin: 30px 10px 20px 10px;\n}\n\n\n/* QUIZZ STYLES V2 */\n:host .game-container article\n{\n    margin: auto;\n}\n\n:host .instance--question\n{\n    display: block;\n    padding-top: 35px;\n    font-weight: bold;\n    padding-bottom: 35px;\n}\n\n:host .instance--answer\n{\n    display: inline-block;\n    padding: 50px 30px 50px 30px;\n    background-color: black;\n    color: white;\n    margin-top: 20px;\n    margin-bottom: 20px;\n    font-size: 120%;\n    font-family: 'Rubik', sans-serif;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    background-color: gray;\n    opacity: 0.5;\n}\n\n:host .instance--answers\n{\n    display: inline-block;\n    padding-left: 40px;\n    border-left: solid gray 5px;\n}\n\n:host .instance--answer:nth-child(1):hover { background-color: #80CD3D; border-color: #80CD3D; }\n\n:host .instance--answer:nth-child(2):hover { background-color: #1AB5F1; border-color: #1AB5F1; }\n\n:host .instance--answer:nth-child(3):hover { background-color: #F1452A; border-color: #F1452A; }\n\n:host .instance--answer:nth-child(4):hover { background-color: #FBC81E; border-color: #FBC81E; }\n\n:host .instance--answer:nth-child(even)\n{\n    margin-left: 20px;\n}\n\n:host .instance--answer:nth-child(odd)\n{\n    margin-right: 20px;\n}\n\n:host .instance--answer:hover\n{\n    cursor: pointer;\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n    opacity: 1;\n}\n\n/* PROGRESSBAR */\n\n.quizz-progress {\n\tposition: absolute;\n\tbottom: 0px;\n\tleft: 0px;\n\twidth: 100%;\n\theight: 20px;\n\tbackground-color: darkslateblue;\n}\n\n.quizz-progress div {\n    position: absolute;\n    bottom: 0px;\n    right: 0px;\n    height: 20px;\n    background-color: white;\n    transition: 1s;\n}\n\n.quizz-progress--0 {\n    width: 100%;\n}\n\n.quizz-progress--10 {\n    width: 90%;\n}\n\n.quizz-progress--20 {\n    width: 80%;\n}\n\n.quizz-progress--30 {\n    width: 70%;\n}\n\n.quizz-progress--40 {\n    width: 60%;\n}\n\n.quizz-progress--50 {\n    width: 50%;\n}\n\n.quizz-progress--60 {\n    width: 40%;\n}\n\n.quizz-progress--70 {\n    width: 30%;\n}\n\n.quizz-progress--80 {\n    width: 20%;\n}\n\n.quizz-progress--90 {\n    width: 10%;\n}\n\n.quizz-progress--100 {\n    width: 0%;\n}\n\n/* END PROGRESSBAR */\n\n/* RESPONSE */\n\n:host article.response\n{\n    padding: 80px 40px 40px 40px;\n    font-size: 150%;\n}\n\n:host .response i.fa-times\n{\n    color: #CB2028;\n}\n\n:host .response i.fa-check\n{\n    color: #009B47;\n}\n\n:host .response--text\n{\n    font-family: 'Rubik', sans-serif;\n    font-weight: 700;\n}\n/* END QUIZZ STYLES */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"area-main\">\n    <header *ngIf=\"!gameStarted\" [@swipeTop]>\n        <div class=\"header-bckg\">\n            <h1 class=\"main-title\">à toi de jouer</h1>\n            <a (click)=\"backLobby()\" class=\"btn btn-danger\">\n                <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Partir\n            </a>\n        </div>\n    </header>\n\n    <a *ngIf=\"gameStarted\" (click)=\"backLobby()\" class=\"btn btn-danger btn-disconnect\">\n        partir\n    </a>\n\n    <!-- STEPS OF THE QUIZZ -->\n    <section class=\"container\">\n        <ul class=\"quizz-steps\">\n            <li [ngClass]=\"{'quizz-step': true, 'quizz-step--active': isInLobby()}\">\n                <i class=\"fa fa-home\" aria-hidden=\"true\"></i><br/>\n                <i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i>\n            </li>\n            <li *ngFor=\"let step of gameSteps\"\n                [ngClass]=\"{'quizz-step': true, 'quizz-step--active': isActive(step), 'quizz-step--correct': isCorrect(step), 'quizz-step--incorrect': isIncorrect(step)}\">\n                <i class=\"fa fa-circle\" aria-hidden=\"true\"></i><br/>\n                <i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i>\n            </li>\n            <li [ngClass]=\"{'quizz-step': true, 'quizz-step--active': isInScores()}\">\n                <i class=\"fa fa-trophy\" aria-hidden=\"true\"></i><br/>\n                <i class=\"fa fa-caret-up\" aria-hidden=\"true\"></i>\n            </li>\n        </ul>\n\n    </section>\n    <!-- END STEPS OF THE QUIZZ -->\n\n\n    <game-lobby *ngIf=\"!gameStarted\" [players]=\"participants\"></game-lobby>\n\n    <!-- TIMER -->\n    <section *ngIf=\"timeLeft > 0\" class=\"quizz-timer\">\n        <span>{{ timeLeft }}</span>\n    </section>\n    <!-- END TIMER -->\n\n    <!-- TIMER PROGRESSBAR *ngIf=\"timeLeft > 0\" -->\n    <section *ngIf=\"gameStarted\" class=\"quizz-progress\">\n        <div [class]=\"timeRemaining()\"></div>\n    </section>\n    <!-- END PROGRESSBAR -->\n\n    <!-- INSTANCE -->\n    <section *ngIf=\"gameStarted\" class=\"container game-container\">\n        <!-- QUESTION AND ANSWERS *ngIf=\"canAnswer || !responseReceived; else questionResult\" -->\n        <div class=\"row\">\n            <article *ngIf=\"canAnswer || !responseReceived; else questionResult\" class=\"col-xs-12 col-md-11 col-md-offset-1\">\n                <h1 class=\"instance--question\">Q{{instanceNumero}} - {{instance?.question}}</h1>\n                <ul class=\"col-xs-10 col-xs-offset-2 instance--answers\">\n                    <li *ngFor=\"let answer of instance?.answers\" (click)=\"answerQuestion(answer)\" class=\"col-md-5 instance--answer\">\n                        <span>\n                            {{answer}}\n                        </span>\n                    </li>\n                </ul>\n            </article>\n        </div>\n        <!-- END Q&A -->\n\n\n\n        <!-- PLAYER RESPONDED -->\n        <ng-template #questionResult >\n\n            <article class=\"col-xs-12 response\">\n                <i class=\"fa fa-3x fa-{{ getAnswerIcon() }}\" aria-hidden=\"true\"></i>\n                <br/>\n                <h2 class=\"response--text\">\n                    {{ getAnswerResult() }}\n                </h2>\n                <a *ngIf=\"isNotLastQuestion(); else quizzEndedMsg\">En attente de la prochaine question</a><br/>\n                <span *ngIf=\"isNotLastQuestion()\" class=\"dots\">\n                    <span>\n                        <i class=\"fa fa-square\" aria-hidden=\"true\"></i>\n                    </span>\n                    <span>\n                        <i class=\"fa fa-square\" aria-hidden=\"true\"></i>\n                    </span>\n                    <span>\n                        <i class=\"fa fa-square\" aria-hidden=\"true\"></i>\n                    </span>\n                </span>\n                <ng-template #quizzEndedMsg>\n                    <a>Quizz terminé, merci de votre participation !</a>\n                </ng-template>\n            </article>\n        </ng-template>\n        <!-- END PLAYER RESPONDED -->\n    </section>\n    <!-- END INSTANCE -->\n\n    <!-- LEADERBOARD -->\n    <game-leaderboard *ngIf=\"gameStarted\" [players]=\"participants\"></game-leaderboard>\n    <!-- END LEADERBOARD -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_quizz_interfaces__ = __webpack_require__("../../../../../src/app/services/quizz.interfaces.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_quizz_service__ = __webpack_require__("../../../../../src/app/services/quizz.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_rooms_service__ = __webpack_require__("../../../../../src/app/services/rooms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_zetapush_angular__ = __webpack_require__("../../../../zetapush-angular/zetapush-angular.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GameComponent = (function () {
    function GameComponent(route, roomService, quizzService, router, zpConnection, zpClient) {
        this.route = route;
        this.roomService = roomService;
        this.quizzService = quizzService;
        this.router = router;
        this.zpConnection = zpConnection;
        this.zpClient = zpClient;
        // List of players in our room
        this.participants = [];
        this.membersSubscription = false;
        this.questionSubscription = false;
        this.notifSubscription = false;
        this.scoreSubscription = false;
        this.gameSteps = [];
        // Time before something happens (game or question)
        this.timeLeft = 60;
        // Boolean changing the displayed view
        this.gameStarted = false;
        this.gameEnded = false;
        // Boolean allowing to send answers
        this.canAnswer = false;
        this.responseReceived = false;
        // Timer stored to be cleared
        this.timer = false;
        this.instanceNumero = 0;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.zpClient.isConnected()) {
            this.redirectLogin();
        }
        else {
            // 1°) load the nav parameters
            this.gameData = JSON.parse(this.route.snapshot.params['game']);
            // 2°) join the room
            this.roomService.join(this.gameData.id).then(function () {
                // 3°) subscribe to the members given by the room service
                _this.membersSubscription = _this.roomService.roomMembers.subscribe(function (result) {
                    _this.participants = result;
                });
            }, function (err) { console.log('error joining the game, game.component.ts:80'); });
            // 4°) calculation of the time left before starting
            var now = Date.now();
            var willCloseAt = this.gameData.metadata.createdAt + this.gameData.metadata.openDelay;
            // We parse it in milliseconds
            this.timeLeft = Math.floor((willCloseAt - now) / 1000);
            // 5°) other game variables initialization
            this.gameStarted = false;
            this.gameEnded = false;
            // 6°) steps of the quizz
            for (var i = 1; i <= this.gameData.metadata.progressMaxQ; i++) {
                var step = {
                    stepNumber: i,
                    state: __WEBPACK_IMPORTED_MODULE_3__services_quizz_interfaces__["a" /* ResponseState */].NotResponded
                };
                this.gameSteps.push(step);
            }
            // Interval decreasing the counter before game starts
            this.timer = setInterval(function () {
                if (!_this.decreaseTime()) {
                    // Game has started
                    clearInterval(_this.timer);
                    _this.startGame();
                }
            }, 1000);
        }
    };
    // Function decreasing time before game starts
    GameComponent.prototype.decreaseTime = function () {
        if (this.timeLeft > 1) {
            this.timeLeft--;
            return true;
        }
        else if (this.timeLeft === 1) {
            this.timeLeft--;
            return false;
        }
    };
    // Starting the game and initializing things
    GameComponent.prototype.startGame = function () {
        var _this = this;
        this.gameStarted = true;
        this.responseReceived = true;
        this.timer = false;
        this.quizzService.open();
        // Subscribing to the different observables available
        console.log('game starts !');
        this.questionSubscription = this.quizzService.questions.subscribe(function (question) {
            _this.receiveQuestion(question);
        }, function (error) {
            console.error(error);
        }, function () {
            _this.endQuizz();
        });
        this.notifSubscription = this.quizzService.notifs.subscribe(function (notif) {
            _this.responseReceived = true;
            if (notif.content.correct) {
                _this.gameSteps[_this.instanceNumero - 1].state = __WEBPACK_IMPORTED_MODULE_3__services_quizz_interfaces__["a" /* ResponseState */].Correct;
            }
            else {
                _this.gameSteps[_this.instanceNumero - 1].state = __WEBPACK_IMPORTED_MODULE_3__services_quizz_interfaces__["a" /* ResponseState */].Incorrect;
            }
        });
        this.scoreSubscription = this.quizzService.scores.subscribe(function (scores) {
            _this.receiveScores(scores);
        });
    };
    // Logic applied when we received a question
    GameComponent.prototype.receiveQuestion = function (communication) {
        var _this = this;
        console.log('QUESTION: ', communication);
        this.instance = communication['content'];
        this.instanceNumero++;
        this.timeLeft = this.instance.time;
        this.canAnswer = true;
        this.responseReceived = false;
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.timer = setInterval(function () {
            // If it was the last decrease tick
            if (!_this.decreaseQuestionTime()) {
                _this.canAnswer = false;
                _this.responseReceived = true;
                clearInterval(_this.timer);
                _this.timer = false;
                console.log('waiting next questions');
            }
        }, 1000);
    };
    // Function decreasing time before question ends
    GameComponent.prototype.decreaseQuestionTime = function () {
        if (this.timeLeft > 1) {
            this.timeLeft--;
            return true;
        }
        else if (this.timeLeft === 1) {
            this.timeLeft--;
            return false;
        }
    };
    // Once answer is selected => submitting it to server
    GameComponent.prototype.answerQuestion = function (answerChosen) {
        if (this.canAnswer) {
            this.canAnswer = false;
            // Sending response to server
            this.quizzService.answer(this.gameData.id, answerChosen);
        }
    };
    GameComponent.prototype.endQuizz = function () {
        console.log('END OF THE QUIZZ');
        this.gameEnded = true;
    };
    GameComponent.prototype.receiveScores = function (scores) {
        for (var i = 0; i < scores.length; i++) {
            for (var j = 0; j < this.participants.length; j++) {
                if (scores[i].userKey === this.participants[j].userKey) {
                    this.participants[j].score = scores[i].score;
                }
            }
        }
    };
    // Functions allowing us to know where we are
    GameComponent.prototype.isInScores = function () {
        return this.gameEnded;
    };
    GameComponent.prototype.isInLobby = function () {
        return this.instanceNumero === 0;
    };
    GameComponent.prototype.isActive = function (step) {
        return step.stepNumber === this.instanceNumero && !this.gameEnded && this.gameStarted;
    };
    GameComponent.prototype.isCorrect = function (step) {
        return step.state === __WEBPACK_IMPORTED_MODULE_3__services_quizz_interfaces__["a" /* ResponseState */].Correct;
    };
    GameComponent.prototype.isIncorrect = function (step) {
        return step.state === __WEBPACK_IMPORTED_MODULE_3__services_quizz_interfaces__["a" /* ResponseState */].Incorrect;
    };
    GameComponent.prototype.isNotLastQuestion = function () {
        return this.gameData.metadata.progressMaxQ !== this.instanceNumero;
    };
    GameComponent.prototype.timeRemaining = function () {
        switch (this.timeLeft) {
            case 0:
                return 'quizz-progress--0';
            case 1:
                return 'quizz-progress--100';
            case 2:
                return 'quizz-progress--90';
            case 3:
                return 'quizz-progress--80';
            case 4:
                return 'quizz-progress--70';
            case 5:
                return 'quizz-progress--60';
            case 6:
                return 'quizz-progress--50';
            case 7:
                return 'quizz-progress--40';
            case 8:
                return 'quizz-progress--30';
            case 9:
                return 'quizz-progress--20';
            case 10:
                return 'quizz-progress--10';
            default:
                return 'quizz-progress--0';
        }
    };
    GameComponent.prototype.getAnswerResult = function () {
        var res = "Le quizz va bientôt commencer";
        if (this.gameSteps.length > 0 && this.instanceNumero > 0) {
            var step = this.gameSteps[this.instanceNumero - 1];
            if (step.state === __WEBPACK_IMPORTED_MODULE_3__services_quizz_interfaces__["a" /* ResponseState */].Correct) {
                res = "Bonne réponse !";
            }
            else if (step.state === __WEBPACK_IMPORTED_MODULE_3__services_quizz_interfaces__["a" /* ResponseState */].Incorrect) {
                res = "Mauvaise réponse.";
            }
            else {
                res = "Vous n'avez pas répondu à temps";
            }
        }
        return res;
    };
    GameComponent.prototype.getAnswerIcon = function () {
        var res = "hourglass-half";
        if (this.gameSteps.length > 0 && this.instanceNumero > 0) {
            var step = this.gameSteps[this.instanceNumero - 1];
            if (step.state === __WEBPACK_IMPORTED_MODULE_3__services_quizz_interfaces__["a" /* ResponseState */].Correct) {
                res = "check";
            }
            else if (step.state === __WEBPACK_IMPORTED_MODULE_3__services_quizz_interfaces__["a" /* ResponseState */].Incorrect) {
                res = "times";
            }
            else {
                res = "question";
            }
        }
        return res;
    };
    GameComponent.prototype.backLobby = function () {
        if (!this.gameEnded) {
            this.roomService.leave(this.gameData.id);
        }
        this.roomService.joinLobby();
        this.router.navigate(['/lobby']);
    };
    GameComponent.prototype.redirectLogin = function () {
        this.router.navigate(['/login']);
    };
    GameComponent.prototype.ngOnDestroy = function () {
        if (this.notifSubscription) {
            this.notifSubscription.unsubscribe();
        }
        if (this.scoreSubscription) {
            this.scoreSubscription.unsubscribe();
        }
        if (this.questionSubscription) {
            this.questionSubscription.unsubscribe();
        }
        if (this.membersSubscription) {
            this.membersSubscription.unsubscribe();
        }
        if (this.timer) {
            clearInterval(this.timer);
        }
        this.quizzService.close();
    };
    return GameComponent;
}());
GameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-game',
        template: __webpack_require__("../../../../../src/app/game/game.component.html"),
        styles: [__webpack_require__("../../../../../src/app/game/game.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["trigger"])('swipeTop', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["state"])('present', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ transform: 'translateY(0)', opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["animate"])(200, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["style"])({ transform: 'translateY(-1000px)', opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_rooms_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_rooms_service__["a" /* RoomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_quizz_service__["a" /* QuizzService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_quizz_service__["a" /* QuizzService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_zetapush_angular__["f" /* ZetaPushConnection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_zetapush_angular__["f" /* ZetaPushConnection */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_zetapush_angular__["c" /* ZetaPushClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_zetapush_angular__["c" /* ZetaPushClient */]) === "function" && _f || Object])
], GameComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=game.component.js.map

/***/ }),

/***/ "../../../../../src/app/game/leaderboard/leaderboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* LEADERBOARD */\n:host .leaderboard-players\n{\n    padding-left: 0px;\n}\n\n:host .leaderboard-players li\n{\n    display: inline-block;\n    padding: 10px;\n}\n/* END LEADERBOARD */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/leaderboard/leaderboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"quizz-leaderboard\">\n    <h3 class=\"sub-title\">Scores</h3>\n    <div class=\"sub-title--diviser\"></div>\n\n    <ul class=\"leaderboard-players\">\n        <li *ngFor=\"let player of players\">\n            <i class=\"fa fa-user-o\"></i> <b>{{player.login}}</b> {{player.score}} points\n        </li>\n    </ul>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/game/leaderboard/leaderboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameLeaderboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameLeaderboardComponent = (function () {
    function GameLeaderboardComponent() {
        this.players = [];
    }
    GameLeaderboardComponent.prototype.ngOnInit = function () {
    };
    return GameLeaderboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], GameLeaderboardComponent.prototype, "players", void 0);
GameLeaderboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'game-leaderboard',
        template: __webpack_require__("../../../../../src/app/game/leaderboard/leaderboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/game/leaderboard/leaderboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GameLeaderboardComponent);

//# sourceMappingURL=leaderboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/game/lobby/lobby.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* LOBBY */\n:host .quizz-lobby\n{\n    text-align: center;\n}\n\n:host .quizz-lobby .user\n{\n    display: inline-block;\n    margin: 50px;\n}\n\n:host .quizz-lobby .user--img\n{\n    font-size: 600%;\n}\n\n:host .quizz-lobby .user--login\n{\n    font-size: 150%;\n    font-weight: bold;\n    font-family: 'Rubik', sans-serif;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/lobby/lobby.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"container-fluid quizz-lobby\">\n    <h3 class=\"sub-title\">Joueurs</h3>\n    <div class=\"sub-title--diviser\"></div>\n    <article *ngFor=\"let player of players\" [@element] class=\"user\">\n        <i class=\"fa fa-user user--img\" aria-hidden=\"true\"></i><br/>\n        <span class=\"user--login\">{{player.login}}</span>\n    </article>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/game/lobby/lobby.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameLobbyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameLobbyComponent = (function () {
    function GameLobbyComponent() {
        this.players = [];
    }
    GameLobbyComponent.prototype.ngOnInit = function () {
    };
    return GameLobbyComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], GameLobbyComponent.prototype, "players", void 0);
GameLobbyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'game-lobby',
        template: __webpack_require__("../../../../../src/app/game/lobby/lobby.component.html"),
        styles: [__webpack_require__("../../../../../src/app/game/lobby/lobby.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('element', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('present', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translateY(0)', opacity: 1 })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('void => *', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translateY(-50px)', opacity: 0 }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(200)
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => void', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(100, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ transform: 'translateY(50px)', opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], GameLobbyComponent);

//# sourceMappingURL=lobby.component.js.map

/***/ }),

/***/ "../../../../../src/app/lobby/lobby.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .room-card\n{\n    max-width: 400px;\n    display: inline-block;\n    margin: 10px;\n}\n\n:host .room-card--closed\n{\n    opacity: 0.8;\n}\n\n:host .room-card--closed i\n{\n    background-color: gray !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lobby/lobby.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"area-main\">\n    <header>\n        <div class=\"header-bckg\">\n            <h1 class=\"main-title\">LOBBY</h1>\n            <h4>From here you can join a quizz or access creation mode with the rocket button</h4>\n            <a (click)=\"hostRoom()\" class=\"btn btn-info btn-action\">\n                Create my own quizz <i class=\"fa fa-rocket\" aria-hidden=\"true\"></i>\n            </a>\n            <a (click)=\"quitApp()\" class=\"btn btn-danger btn-disconnect\">\n                <i class=\"fa fa-power-off\" aria-hidden=\"true\"></i>\n            </a>\n        </div>\n    </header>\n    <section class=\"container-fluid\">\n        <div *ngIf=\"thereIsRoomAvailable(); else noRoomAvailable\">\n            <h3 class=\"sub-title\">You can join</h3>\n            <div class=\"sub-title--diviser\"></div>\n\n            <article *ngFor=\"let room of getOpenRooms()\" class=\"room-card room-card--open\">\n                <app-room (click)=\"joinRoom(room)\" [room]=\"room\"></app-room>\n            </article>\n        </div>\n\n        <ng-template #noRoomAvailable>\n            <div>\n                <h1 class=\"main-message\">No quizz available now</h1>\n            </div>\n        </ng-template>\n\n    </section>\n    <section class=\"container-fluid\">\n        <h3 class=\"sub-title\">Recently started</h3>\n        <div class=\"sub-title--diviser\"></div>\n\n        <article *ngFor=\"let room of existingRooms | cantJoin:room\" class=\"room-card room-card--closed\">\n            <app-room [room]=\"room\"></app-room>\n        </article>\n\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/lobby/lobby.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zetapush_angular__ = __webpack_require__("../../../../zetapush-angular/zetapush-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rooms_service__ = __webpack_require__("../../../../../src/app/services/rooms.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LobbyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LobbyComponent = (function () {
    function LobbyComponent(roomService, router, zpConnection, zpClient) {
        this.roomService = roomService;
        this.router = router;
        this.zpConnection = zpConnection;
        this.zpClient = zpClient;
        this.msgs = [];
        this.roomsSubscription = false;
        this.membersSubscription = false;
        this.goingToCreation = false;
        if (!this.zpClient.isConnected()) {
            this.redirectLogin();
        }
    }
    LobbyComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.zpClient.isConnected()) {
            this.roomsSubscription = this.roomService.rooms.subscribe(function (result) {
                _this.existingRooms = result;
            });
            this.membersSubscription = this.roomService.roomMembers.subscribe(function (result) {
                console.debug("ROOM > MEMBERS UPDATED ", result);
            });
            this.roomService.list();
        }
    };
    // When joining a room
    LobbyComponent.prototype.joinRoom = function (data) {
        var _this = this;
        // 1°) Check if open
        if (data.metadata.open) {
            // 2°) Check if private
            if (data.metadata.needPassword) {
                // If so, ask for password
                var pass = prompt('Password ?');
                // And check it matches the room password
                if (pass !== data.metadata.password) {
                    console.log('INPUT > WRONG PASSWORD');
                    alert('Wrong password !');
                    return false;
                }
            }
            // 3°) Joining the room
            this.roomService.join(data.id).then(function (result) {
                if (result.isOpen) {
                    // 4°) Room well joined
                    _this.router.navigate(['/game', JSON.stringify(data)]);
                    return true;
                }
                else {
                    // Room not joinable anymore
                    _this.roomService.joinLobby();
                    _this.roomService.list();
                    return false;
                }
            }, function (error) {
                // Error joining room
                return false;
            });
        }
        else {
            return false;
        }
    };
    LobbyComponent.prototype.getOpenRooms = function () {
        return this.existingRooms.filter(function (room) { return room.metadata.open; });
    };
    LobbyComponent.prototype.thereIsRoomAvailable = function () {
        return (this.getOpenRooms().length > 0);
    };
    // When the user would like to create his own room
    LobbyComponent.prototype.hostRoom = function () {
        this.goingToCreation = true;
        this.router.navigate(['/creation']);
    };
    // called  when user wants to disconnect
    LobbyComponent.prototype.quitApp = function () {
        var _this = this;
        this.roomService.leaveLobby().then(function () {
            _this.zpConnection.disconnect();
            _this.router.navigate(['/']);
        });
    };
    // called when not logged in
    LobbyComponent.prototype.redirectLogin = function () {
        this.router.navigate(['/login']);
    };
    LobbyComponent.prototype.ngOnDestroy = function () {
        // unsubscribe the different observables
        if (this.membersSubscription) {
            this.membersSubscription.unsubscribe();
        }
        if (this.roomsSubscription) {
            this.roomsSubscription.unsubscribe();
        }
        // Except when creating a room, we leave lobby
        if (this.zpClient.isConnected() && !this.goingToCreation) {
            this.roomService.leaveLobby();
        }
    };
    return LobbyComponent;
}());
LobbyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lobby',
        template: __webpack_require__("../../../../../src/app/lobby/lobby.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lobby/lobby.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_rooms_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_rooms_service__["a" /* RoomService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_zetapush_angular__["f" /* ZetaPushConnection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_zetapush_angular__["f" /* ZetaPushConnection */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_zetapush_angular__["c" /* ZetaPushClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_zetapush_angular__["c" /* ZetaPushClient */]) === "function" && _d || Object])
], LobbyComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=lobby.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n:host .area-main\n{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    background-image: url(" + __webpack_require__("../../../../../src/assets/bckg.png") + ");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: rgba(0,0,0,0.8);\n    color: white;\n}\n\n:host section\n{\n    position: fixed;\n    left: 0px;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0,0,0,0.2);\n    text-align: left;\n}\n\n@-webkit-keyframes leave {\n    from {bottom: -100px; left: 0px; opacity: 1; -webkit-transform: rotateZ(-30deg); transform: rotateZ(-30deg);}\n    to {bottom: 1500px; left: 700px; opacity: 0.8; -webkit-transform: rotateZ(-10deg); transform: rotateZ(-10deg);}\n}\n\n@keyframes leave {\n    from {bottom: -100px; left: 0px; opacity: 1; -webkit-transform: rotateZ(-30deg); transform: rotateZ(-30deg);}\n    to {bottom: 1500px; left: 700px; opacity: 0.8; -webkit-transform: rotateZ(-10deg); transform: rotateZ(-10deg);}\n}\n\n@-webkit-keyframes enter {\n    from {right: 0px; top: -100px; opacity: 1;}\n    to {right: 0px; top: 2000px; opacity: 0.8;}\n}\n\n@keyframes enter {\n    from {right: 0px; top: -100px; opacity: 1;}\n    to {right: 0px; top: 2000px; opacity: 0.8;}\n}\n\n:host .rocket-enter\n{\n    position: absolute;\n    opacity: 0;\n    font-size: 500%;\n    -webkit-animation-name: enter;\n            animation-name: enter;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s;\n    color: #669999;\n    z-index: 20;\n    -webkit-transform: rotateZ(135deg) scale(1.5);\n            transform: rotateZ(135deg) scale(1.5);\n}\n\n\n\n:host .rocket-leave\n{\n    position: absolute;\n    opacity: 0;\n    font-size: 500%;\n    -webkit-animation-name: leave;\n            animation-name: leave;\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    -webkit-animation-delay: 4s;\n            animation-delay: 4s;\n    color: #669999;\n}\n\n\n:host .fa-fire\n{\n\t-webkit-transform: rotateZ(-137deg);\n\t        transform: rotateZ(-137deg);\n\tposition: relative;\n\tleft: -70px;\n\tbottom: -10px;\n\tfont-size: 50%;\n}\n\n:host .login-form\n{\n    position: absolute;\n    right:0px;\n    top: 0px;\n    height: 100%;\n    width: 600px;\n    z-index: 10;\n    color: black;\n    margin: auto;\n    background-color: white;\n    text-align: center;\n    padding: 50px;\n    box-shadow: 0px 0px 200px 1px lightgray inset;\n    overflow-y: scroll;\n}\n\n\n:host .login-form h1 {\n\tfont-family: 'Source Sans Pro', sans-serif;\n\tcolor: gray;\n    font-size: 400%;\n    margin: 0px;\n    padding: 50px;\n}\n\n:host .login-form .btn\n{\n    margin-bottom: 30px;\n\tmargin-right: 0px;\n\tmargin-top: 0px;\n\tfont-size: 150%;\n    font-family: 'Rubik', sans-serif;\n}\n\n:host .login-form--input label\n{\n    display: block;\n    text-align: left;\n    padding: 30px 0px 10px 40px;\n    font-family: 'Rubik', sans-serif;\n    color: gray;\n}\n\n:host .login-form--input input:focus\n{\n    border-bottom-color: gray;\n}\n\n:host .login-form--input input\n{\n    background-color: transparent;\n    border: none;\n    border-bottom: solid lightgray 2px;\n    font-size: 120%;\n    padding: 10px;\n    font-family: 'Rubik', sans-serif;\n    letter-spacing: 0px;\n    color: #3E3F3A;\n    margin-bottom: 50px;\n    text-align: center;\n}\n\n:host .login-form--register\n{\n    display: inline-block;\n    font-size: 80%;\n    color: black;\n    padding: 20px;\n}\n\n:host .login-form--register a\n{\n    color: #28AAE3;\n    text-decoration: underline;\n}\n\n:host .login-form--register a:hover\n{\n    cursor: pointer;\n    text-decoration: none;\n}\n\n:host .login-form--error\n{\n    padding: 10px;\n    color: #D9534F;\n    font-size: 110%;\n    font-family: 'Rubik', sans-serif;\n    font-weight: 400;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"area-main\">\n\n    <section class=\"container\">\n\n        <div class=\"rocket-enter\"><i class=\"fa fa-rocket\"></i><i class=\"fa fa-fire\"></i></div>\n        <div class=\"rocket-leave\"><i class=\"fa fa-rocket\"></i><i class=\"fa fa-fire\"></i></div>\n\n        <form *ngIf=\"isInLogin; else isInSignup\" action=\"#\" class=\"login-form\">\n\n            <h1>ZetaQuizz</h1>\n\n            <div class=\"login-form--input\">\n                <label for=\"login\">Name</label>\n                <input [(ngModel)]=\"login\" [disabled]=\"submited\" type=\"text\" name=\"login\">\n            </div>\n\n            <div class=\"login-form--input\">\n                <label for=\"password\">Password</label>\n                <input [(ngModel)]=\"password\" [disabled]=\"submited\" class=\"mdl-textfield__input\" type=\"password\" name=\"password\">\n            </div>\n\n            <a (click)=\"signin()\" [ngClass]=\"{'btn': true, 'btn-default': true, 'disabled': !canSubmit()}\">\n                <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i> Sign in\n            </a>\n\n            <br/>\n\n            <p *ngIf=\"error\" class=\"login-form--error\"><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> {{error}}</p>\n\n            <p class=\"login-form--register\">No account yet ? Don't wait and join us, <a (click)=\"switchScreen()\">by going there</a></p>\n\n        </form>\n\n        <ng-template #isInSignup>\n            <form action=\"#\" class=\"login-form\">\n\n                <h1>ZetaQuizz</h1>\n\n                <p>\n                    Create quizz with your own questions and join others to play in real-time !\n                </p>\n\n                <div class=\"login-form--input\">\n                    <label for=\"login\">Name</label>\n                    <input [(ngModel)]=\"login\" [disabled]=\"submited\" type=\"text\" name=\"login\">\n                </div>\n\n                <div class=\"login-form--input\">\n                    <label for=\"password\">Password</label>\n                    <input [(ngModel)]=\"password\" [disabled]=\"submited\" class=\"mdl-textfield__input\" type=\"password\" name=\"password\">\n                </div>\n\n                <a (click)=\"signup()\" [ngClass]=\"{'btn': true, 'btn-default': true, 'disabled': !canSubmit()}\">\n                    <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> Sign up\n                </a>\n\n                <br/>\n\n                <p *ngIf=\"error\" class=\"login-form--error\"><i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i> {{error}}</p>\n\n                <p class=\"login-form--register\">Already have an account ? <a (click)=\"switchScreen()\">Sign in now</a></p>\n\n            </form>\n        </ng-template>\n\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zetapush_angular__ = __webpack_require__("../../../../zetapush-angular/zetapush-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_rooms_service__ = __webpack_require__("../../../../../src/app/services/rooms.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_accounts_api__ = __webpack_require__("../../../../../src/app/api/accounts.api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(zpConnection, roomService, accountApi, router) {
        this.zpConnection = zpConnection;
        this.roomService = roomService;
        this.accountApi = accountApi;
        this.router = router;
        this.isInLogin = true;
        this.login = "";
        this.password = "";
        this.submited = false;
        this.msgs = [];
        this.error = "";
    }
    LoginComponent.prototype.signin = function () {
        var _this = this;
        if (this.formFull()) {
            this.submited = true;
            this.zpConnection.connect({ login: this.login, password: this.password }).then(function () {
                _this.connectionSuccess();
            }, function (err) {
                _this.error = "Wrong username/password";
                _this.connectionFailed();
            });
        }
    };
    LoginComponent.prototype.signup = function () {
        var _this = this;
        if (this.formFull()) {
            this.submited = true;
            this.zpConnection.connect({}).then(function () {
                _this.accountApi.signup({ login: _this.login, password: _this.password }).then(function (res) {
                    alert('Signup successful !');
                    _this.submited = false;
                    _this.switchScreen();
                    _this.zpConnection.disconnect();
                }, function (err) {
                    _this.submited = false;
                    _this.error = err[0]['message'];
                    _this.zpConnection.disconnect();
                });
            }, function (err) {
                _this.connectionFailed();
            });
        }
    };
    LoginComponent.prototype.resetForm = function () {
        this.submited = false;
        this.login = "";
        this.password = "";
    };
    LoginComponent.prototype.formFull = function () {
        return this.login != "" && this.password != "";
    };
    LoginComponent.prototype.connectionFailed = function () {
        this.resetForm();
    };
    LoginComponent.prototype.canSubmit = function () {
        return this.formFull() && !this.submited;
    };
    LoginComponent.prototype.connectionSuccess = function () {
        this.resetForm();
        this.roomService.joinLobby();
        this.router.navigate(['/lobby']);
    };
    LoginComponent.prototype.switchScreen = function () {
        this.isInLogin = !this.isInLogin;
        this.error = "";
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_zetapush_angular__["f" /* ZetaPushConnection */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_zetapush_angular__["f" /* ZetaPushConnection */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_rooms_service__["a" /* RoomService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_rooms_service__["a" /* RoomService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__api_accounts_api__["b" /* AccountApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_accounts_api__["b" /* AccountApi */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/room/room.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host .quizz-item\n{\n    background-color: #d9d9d9;\n    color: #1a1a1a;\n    margin: 10px;\n    max-width: 250px;\n    width: 250px;\n}\n\n:host .quizz-item--name\n{\n    font-family: 'Rubik', sans-serif;\n    font-weight: bold;\n    text-transform: uppercase;\n    background-color: #1a1a1a;\n    color: white;\n    padding: 20px 30px 20px 30px;\n    margin: 0px;\n}\n\n:host .quizz-item--properties\n{\n    font-family: 'Rubik', sans-serif;\n    font-weight: 700;\n    padding-left: 0px;\n    font-size: 100%;\n    text-align: left;\n}\n\n:host .quizz-item--properties li\n{\n    display: block;\n}\n\n:host .quizz-item--property-value\n{\n    display: inline-block;\n    padding-left: 15px;\n    padding-right: 30px;\n    text-align: left;\n}\n\n:host .quizz-item--blocked:hover\n{\n    cursor: not-allowed;\n}\n\n:host article:not(.quizz-item--blocked) .quizz-item--properties li:hover\n{\n    background-color: #bfbfbf;\n}\n\n:host .quizz-item--property-icon\n{\n    display: inline-block;\n    background-color: #1a1a1a;\n    color: white;\n    width: 50px;\n    height: 50px;\n    text-align: center;\n    line-height: 50px;\n}\n\n:host article:not(.quizz-item--blocked) .quizz-item--properties li:nth-child(1) .quizz-item--property-icon\n{\n    background-color: #80CD3D;\n}\n\n:host article:not(.quizz-item--blocked) .quizz-item--properties li:nth-child(2) .quizz-item--property-icon\n{\n    background-color: #1AB5F1;\n}\n\n:host article:not(.quizz-item--blocked) .quizz-item--properties li:nth-child(3) .quizz-item--property-icon\n{\n    background-color: #F1452A;\n}\n\n:host article:not(.quizz-item--blocked) .quizz-item--properties li:nth-child(4) .quizz-item--property-icon\n{\n    background-color: #FBC81E;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/room/room.component.html":
/***/ (function(module, exports) {

module.exports = "<article [ngClass]=\"{'quizz-item': true, 'quizz-item--blocked': isBlocked()}\">\n    <h3 class=\"quizz-item--name\">{{room.name}}</h3>\n    <ul class=\"quizz-item--properties\">\n        <li>\n            <i class=\"quizz-item--property-icon fa fa-th-list\" aria-hidden=\"true\"></i>\n            <span class=\"quizz-item--property-value\">{{room.metadata?.progressCurrentQ}}/{{room.metadata?.progressMaxQ}} questions</span>\n        </li>\n        <li>\n            <i class=\"quizz-item--property-icon fa fa-users\" aria-hidden=\"true\"></i>\n            <span class=\"quizz-item--property-value\">{{room.members?.length}} participant(s)</span>\n        </li>\n        <li>\n            <i class=\"quizz-item--property-icon fa fa-clock-o\" aria-hidden=\"true\"></i>\n            <span class=\"quizz-item--property-value\">{{getSinceTime()}}</span>\n        </li>\n        <li *ngIf=\"room.metadata?.needPassword; else publicRoom\">\n            <i class=\"quizz-item--property-icon fa fa-lock\" aria-hidden=\"true\"></i>\n            <span class=\"quizz-item--property-value\">Private</span>\n        </li>\n        <ng-template #publicRoom>\n             <li>\n                 <i class=\"quizz-item--property-icon fa fa-home\" aria-hidden=\"true\"></i>\n                 <span class=\"quizz-item--property-value\">Public</span>\n             </li>\n        </ng-template>\n    </ul>\n</article>\n"

/***/ }),

/***/ "../../../../../src/app/room/room.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_room_interfaces__ = __webpack_require__("../../../../../src/app/services/room.interfaces.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_room_interfaces___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__services_room_interfaces__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoomComponent = (function () {
    function RoomComponent() {
        this.onJoin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RoomComponent.prototype.gameEnded = function (current, max) {
        return current === max;
    };
    RoomComponent.prototype.getSinceTime = function () {
        var now = +new Date();
        // parsing the delta in minutes
        var since = Math.round((now - this.room.metadata.createdAt) / 60000);
        if (since > 59) {
            since = Math.round(since / 60);
            var plural = void 0;
            since > 1 ? plural = "s" : plural = "";
            return "Il y a " + since + " heure" + plural;
        }
        else {
            var plural = void 0;
            since > 1 ? plural = "s" : plural = "";
            return "Il y a " + since + " minute" + plural;
        }
    };
    RoomComponent.prototype.randomColor = function () {
        return 'quizz-item--red';
    };
    RoomComponent.prototype.join = function () {
        this.onJoin.emit(this.room);
    };
    RoomComponent.prototype.isBlocked = function () {
        return !this.room.metadata.open;
    };
    return RoomComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_room_interfaces__["ServerRoom"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_room_interfaces__["ServerRoom"]) === "function" && _a || Object)
], RoomComponent.prototype, "room", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], RoomComponent.prototype, "isLast", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], RoomComponent.prototype, "onJoin", void 0);
RoomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-room',
        template: __webpack_require__("../../../../../src/app/room/room.component.html"),
        styles: [__webpack_require__("../../../../../src/app/room/room.component.css")]
    })
], RoomComponent);

var _a, _b;
//# sourceMappingURL=room.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/pipes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isOpenPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isClosedPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var isOpenPipe = (function () {
    function isOpenPipe() {
    }
    isOpenPipe.prototype.transform = function (rooms) {
        return rooms.filter(function (room) { return room.metadata.open === true; });
    };
    return isOpenPipe;
}());
isOpenPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'canJoin' })
], isOpenPipe);

var isClosedPipe = (function () {
    function isClosedPipe() {
    }
    isClosedPipe.prototype.transform = function (rooms) {
        return rooms.filter(function (room) { return room.metadata.open === false && room.metadata.progressMaxQ !== room.metadata.progressCurrentQ; });
    };
    return isClosedPipe;
}());
isClosedPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'cantJoin' })
], isClosedPipe);

//# sourceMappingURL=pipes.js.map

/***/ }),

/***/ "../../../../../src/app/services/quizz.interfaces.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseState; });
var ResponseState;
(function (ResponseState) {
    ResponseState[ResponseState["NotResponded"] = 0] = "NotResponded";
    ResponseState[ResponseState["Correct"] = 1] = "Correct";
    ResponseState[ResponseState["Incorrect"] = 2] = "Incorrect";
})(ResponseState || (ResponseState = {}));
//# sourceMappingURL=quizz.interfaces.js.map

/***/ }),

/***/ "../../../../../src/app/services/quizz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zetapush_js__ = __webpack_require__("../../../../zetapush-js/dist/zetapush.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zetapush_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zetapush_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zetapush_angular__ = __webpack_require__("../../../../zetapush-angular/zetapush-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_rooms_api__ = __webpack_require__("../../../../../src/app/api/rooms.api.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizzService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizzService = (function () {
    function QuizzService(roomApi, zpClient) {
        this.roomApi = roomApi;
        this.zpClient = zpClient;
        this.listen = false;
        this.listen = false;
    }
    QuizzService.prototype.open = function () {
        var _this = this;
        this.listen = true;
        this._questions = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.questions = this._questions.asObservable();
        this._scores = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.scores = this._scores.asObservable();
        this._notifs = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.notifs = this._notifs.asObservable();
        // Adding a listener
        this.listener = this.zpClient.createService({
            Type: __WEBPACK_IMPORTED_MODULE_2_zetapush_js__["services"]['Messaging'],
            listener: {
                message: function (message) {
                    console.debug('Received from server the following : ', message['data']['data']);
                    var communication = message['data']['data'];
                    switch (communication['type']) {
                        case 'question':
                            shuffle(communication.content.answers);
                            _this._questions.next(communication);
                            break;
                        case 'notification':
                            console.log('received a notif');
                            _this._notifs.next(communication);
                            break;
                        case 'scores':
                            _this._scores.next(communication['content']);
                            break;
                        case 'complete':
                            _this._questions.complete();
                            break;
                        default:
                            console.log('Type of the communication unknown');
                            break;
                    }
                },
                error: function (error) {
                    console.error(error);
                }
            }
        });
    };
    QuizzService.prototype.close = function () {
        // Deleting the listener
        if (this.listen) {
            this.zpClient.unsubscribe(this.listener);
            this.listen = false;
        }
    };
    QuizzService.prototype.answer = function (room, given) {
        this.roomApi.answerQuestion({ room: room, givenAnswer: given });
    };
    return QuizzService;
}());
QuizzService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__api_rooms_api__["b" /* RoomApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_rooms_api__["b" /* RoomApi */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_zetapush_angular__["c" /* ZetaPushClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_zetapush_angular__["c" /* ZetaPushClient */]) === "function" && _b || Object])
], QuizzService);

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    for (var i = a.length; i; i--) {
        var j = Math.floor(Math.random() * i);
        _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
    }
    var _a;
}
var _a, _b;
//# sourceMappingURL=quizz.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/room.interfaces.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=room.interfaces.js.map

/***/ }),

/***/ "../../../../../src/app/services/rooms.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zetapush_js__ = __webpack_require__("../../../../zetapush-js/dist/zetapush.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zetapush_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zetapush_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_zetapush_angular__ = __webpack_require__("../../../../zetapush-angular/zetapush-angular.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_rooms_api__ = __webpack_require__("../../../../../src/app/api/rooms.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoomService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
    RoomService
    * Gives access to several API calls and abstract them
    * Remembers who is present in our room
*/
var RoomService = (function () {
    // SETTING LISTENERS AND OBSERVABLES
    function RoomService(router, api, zpClient) {
        var _this = this;
        this.router = router;
        this.api = api;
        this.zpClient = zpClient;
        this._rooms = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.rooms = this._rooms.asObservable();
        this._roomMembers = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.roomMembers = this._roomMembers.asObservable();
        // We add a listener for group presences
        this.listener = this.zpClient.createService({
            Type: __WEBPACK_IMPORTED_MODULE_2_zetapush_js__["services"]['GroupManagement'],
            deploymentId: 'cr_grp_groups',
            listener: {
                presence: function (notif) {
                    console.debug('PRESENCE > A presence has be notified', notif);
                    // Unfortunately we only have the key
                    var user = notif.data.user.owner;
                    var members = _this._roomMembers.getValue();
                    /* if(this.zpClient.getUserId() === user){

                        // The notif is concerning the current user
                        this.zpClient.unsubscribe(this.listener);

                        this.zpClient.disconnect();

                        // Only one session at a time
                        console.log('LOGS > ONE SESSION MAXIMUM');
                        this.router.navigate(['/login']);

                    } else { */
                    // As the records can be Object(login, userKey) or Object(userKey)
                    var pos = _this.find(members, user);
                    if (notif.data.presence === 'ON') {
                        // Someone joined in
                        if (pos == -1) {
                            // Not yet registered
                            _this.getDetails(user).then(function (result) {
                                var completeUser = result['member'];
                                console.log('LOGS > USER JOINED OUR GROUP ', result['member']);
                                members.push(completeUser);
                                _this._roomMembers.next(members);
                            });
                            _this.list();
                        }
                        else {
                            console.log('LOGS > USER JOINED OUR GROUP WHILE ALREADY THERE');
                        }
                    }
                    else {
                        // Someone left
                        if (pos != -1) {
                            console.log('LOGS > USER LEFT OUR GROUP ', members[pos]);
                            // Still a member
                            members.splice(pos, 1);
                            _this._roomMembers.next(members);
                            _this.list();
                        }
                        else {
                            console.log('LOGS > USER LEFT OUR GROUP WHILE ALREADY OUT');
                        }
                    }
                    // }
                }
            }
        });
        // We transmit the list of the rooms
        this.subscription_0 = this.api.onListRooms.subscribe(function (result) {
            _this._rooms.next(result['rooms']);
        }, function (error) {
            // nothing
        });
        // We transmit the members of the room
        this.subscription_1 = this.api.onJoinRoom.subscribe(function (result) {
            var members = result['members'].filter(_this.hasLogin);
            _this._roomMembers.next(members);
        }, function (error) {
            // nothing
        });
    }
    // END SETTING
    RoomService.prototype.list = function () {
        this.api.listRooms({});
    };
    RoomService.prototype.join = function (id) {
        var _this = this;
        // Not part of the lobby anymore
        // Can't be in two rooms at the same time
        return this.leaveLobby().then(function (res) {
            return _this.api.joinRoom({ id: id });
        }, function (err) {
            return _this.api.joinRoom({ id: id });
        });
    };
    RoomService.prototype.leave = function (id) {
        return this.api.leaveRoom({ id: id });
    };
    RoomService.prototype.joinLobby = function () {
        return this.api.joinRoom({ id: 'secretLobbyId' });
    };
    RoomService.prototype.create = function (name, password, delay, questions, chronomode) {
        return this.api.createRoom({ name: name, password: password, delay: delay, questions: questions, chronomode: chronomode });
    };
    RoomService.prototype.createCustom = function (name, password, delay, chronomode, seed) {
        return this.api.createCustomRoom({ name: name, password: password, delay: delay, chronomode: chronomode, seed: seed });
    };
    RoomService.prototype.getDetails = function (key) {
        return this.api.detailRoomMember({ userKey: key });
    };
    RoomService.prototype.find = function (members, user) {
        var found = -1;
        for (var i = 0; found === -1 && i < members.length; i++) {
            if (members[i].userKey === user) {
                found = i;
            }
        }
        return found;
    };
    RoomService.prototype.hasLogin = function (member) {
        return (member.login != null);
    };
    RoomService.prototype.leaveLobby = function () {
        return this.api.leaveRoom({ id: 'secretLobbyId' });
    };
    RoomService.prototype.ngOnDestroy = function () {
        this.subscription_0.unsubscribe();
        this.subscription_1.unsubscribe();
        this.zpClient.unsubscribe(this.listener);
    };
    return RoomService;
}());
RoomService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__api_rooms_api__["b" /* RoomApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_rooms_api__["b" /* RoomApi */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_zetapush_angular__["c" /* ZetaPushClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_zetapush_angular__["c" /* ZetaPushClient */]) === "function" && _c || Object])
], RoomService);

var _a, _b, _c;
//# sourceMappingURL=rooms.service.js.map

/***/ }),

/***/ "../../../../../src/assets/bckg.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bckg.ae26dd34b47dacd6698f.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map