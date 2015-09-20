import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'guest-card',
  properties: ['guest']
})
@View({
  templateUrl: 'components/guest-card.html',
})
export class GuestCard {
}
