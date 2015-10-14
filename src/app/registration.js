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
var angular2_1 = require('angular2/angular2');
var guest_service_1 = require('./guest-service');
var router_1 = require('angular2/router');
var Registration = (function () {
    function Registration(guestService, router) {
        this.guestService = guestService;
        this.router = router;
    }
    Registration.prototype.addGuest = function (event, name, about) {
        event.preventDefault();
        this.guestService.add(name, about);
        this.router.navigate(['/GuestList']);
    };
    Registration = __decorate([
        angular2_1.Component({
            selector: 'registration'
        }),
        angular2_1.View({
            templateUrl: 'app/registration.html'
        }), 
        __metadata('design:paramtypes', [guest_service_1.GuestService, router_1.Router])
    ], Registration);
    return Registration;
})();
exports.Registration = Registration;
//# sourceMappingURL=registration.js.map