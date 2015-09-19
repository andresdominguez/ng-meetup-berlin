/// <reference path="../typings/firebase/firebase.d.ts" />

const FIREBASE_URL = 'https://sweltering-heat-3358.firebaseio.com';

export interface Guest {
  name: string,
  about: string,
  key: string,
  lovesNg2: boolean
}

export class GuestService {
  firebase: Firebase;
  guestList: Guest[];

  constructor() {
    this.firebase = new Firebase(FIREBASE_URL);
    this.guestList = [];

    this.firebase.on('child_added',
        snapshot => this.guestList.push(this.createGuest(snapshot)),
        errorObject => console.log('The read failed', errorObject.code)
    );

    this.firebase.on('child_removed',
        snapshot => {
          var key = snapshot.key();
          this.guestList = this.guestList.filter(guest => guest.key != key)
        },
        errorObject => console.log('The read failed', errorObject.code)
    );

    this.firebase.on('child_changed',
        snapshot => {
          var key = snapshot.key();
          this.guestList.some((guest, index) => {
            if (guest.key === key) {
              var updatedGuest = this.createGuest(snapshot);
              // Update the guest.
              this.guestList.splice(index, 1, updatedGuest);
              return true;
            }
          });
        },
        errorObject => console.log('The read failed', errorObject.code)
    );
  }

  private createGuest(snapshot: FirebaseDataSnapshot): Guest {
    var guest = snapshot.val();
    guest.key = snapshot.key();
    if (guest.lovesNg2 === undefined) {
      guest.lovesNg2 = '???';
    }
    return guest;
  }

  add(name: string, about: string) {
    this.firebase.push({
      name: name,
      about: about
    });
  }

  getList(): Guest[] {
    return this.guestList;
  }

  updateLovesAngular2(guest: Guest, lovesNg2: boolean) {
    var ref = new Firebase(FIREBASE_URL + '/' + guest.key);
    var newValues = {
      name: guest.name,
      lovesNg2: lovesNg2 ? 'Yes' : 'No',
      about: guest.about
    };
    ref.update(newValues);
  }
}
