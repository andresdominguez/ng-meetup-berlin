import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'guest-card',
  properties: ['guest']
})
@View({
  templateUrl: 'app/guest-card.html',
})
export class GuestCard {
}
