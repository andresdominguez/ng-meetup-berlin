/// <reference path="../../typings/firebase/firebase.d.ts" />
var FIREBASE_URL = 'https://sweltering-heat-3358.firebaseio.com';
var GuestService = (function () {
    function GuestService() {
        var _this = this;
        this.firebase = new Firebase(FIREBASE_URL);
        this.guestList = [];
        this.firebase.on('child_added', function (snapshot) { return _this.guestList.push(_this.createGuest(snapshot)); }, function (errorObject) { return console.log('The read failed', errorObject.code); });
        this.firebase.on('child_removed', function (snapshot) {
            var key = snapshot.key();
            _this.guestList = _this.guestList.filter(function (guest) { return guest.key != key; });
        }, function (errorObject) { return console.log('The read failed', errorObject.code); });
        this.firebase.on('child_changed', function (snapshot) {
            var key = snapshot.key();
            _this.guestList.some(function (guest, index) {
                if (guest.key === key) {
                    var updatedGuest = _this.createGuest(snapshot);
                    // Update the guest.
                    _this.guestList.splice(index, 1, updatedGuest);
                    return true;
                }
            });
        }, function (errorObject) { return console.log('The read failed', errorObject.code); });
    }
    GuestService.prototype.createGuest = function (snapshot) {
        var guest = snapshot.val();
        guest.key = snapshot.key();
        if (guest.lovesNg2 === undefined) {
            guest.lovesNg2 = '???';
        }
        return guest;
    };
    GuestService.prototype.add = function (name, about) {
        this.firebase.push({
            name: name,
            about: about
        });
    };
    GuestService.prototype.getList = function () {
        return this.guestList;
    };
    GuestService.prototype.updateLovesAngular2 = function (guest, lovesNg2) {
        var ref = new Firebase(FIREBASE_URL + '/' + guest.key);
        var newValues = {
            name: guest.name,
            lovesNg2: lovesNg2 ? 'Yes' : 'No',
            about: guest.about
        };
        ref.update(newValues);
    };
    return GuestService;
})();
exports.GuestService = GuestService;
//# sourceMappingURL=guest-service.js.map