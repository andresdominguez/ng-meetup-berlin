var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('angular2/router');
var angular2_1 = require('angular2/angular2');
var guest_service_1 = require('./guest-service');
var registration_1 = require('./registration');
var guest_list_1 = require('./guest-list');
var routes = {
    registration: {
        path: '/',
        as: 'Registration',
        component: registration_1.Registration,
        caption: 'Registration',
        link: ['/Registration']
    },
    guestList: {
        path: '/list',
        as: 'GuestList',
        caption: 'GuestList',
        component: guest_list_1.GuestList,
        link: ['/GuestList']
    }
};
var HelloBerlin = (function () {
    function HelloBerlin() {
    }
    HelloBerlin = __decorate([
        router_1.RouteConfig([
            routes.registration,
            routes.guestList,
        ]),
        angular2_1.Component({
            selector: 'hello-berlin',
        }),
        angular2_1.View({
            templateUrl: 'app/hello-berlin.html',
            directives: [angular2_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], HelloBerlin);
    return HelloBerlin;
})();
angular2_1.bootstrap(HelloBerlin, [
    router_1.ROUTER_BINDINGS,
    guest_service_1.GuestService,
    angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
]);
//# sourceMappingURL=hello-berlin-app.js.map