import {Component, NgFor, View} from 'angular2/angular2';
import {GuestCard} from './guest-card';
import {GuestService} from './guest-service';

@Component({
  selector: 'guest-list'
})
@View({
  templateUrl: 'app/guest-list.html',
  directives: [GuestCard, NgFor]
})
export class GuestList {

  constructor(public guestService: GuestService) {
  }

  getList() {
    return this.guestService.getList();
  }
}
