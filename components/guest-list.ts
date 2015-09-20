import {Component, NgFor, View} from 'angular2/angular2';
import {GuestCard} from 'components/guest-card';
import {GuestService} from 'services/guest-service';

@Component({
  selector: 'guest-list'
})
@View({
  templateUrl: 'components/guest-list.html',
  directives: [GuestCard, NgFor]
})
export class GuestList {

  constructor(public guestService: GuestService) {
  }

  getList() {
    return this.guestService.getList();
  }
}
