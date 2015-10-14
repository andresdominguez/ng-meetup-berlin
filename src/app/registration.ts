import {Component, View} from 'angular2/angular2';
import {GuestService} from './guest-service';
import {Router} from 'angular2/router';

@Component({
  selector: 'registration'
})
@View({
  templateUrl: 'app/registration.html'
})
export class Registration {
  constructor(public guestService: GuestService, public router: Router) {}

  addGuest(event: Event, name: string, about: string) {
    event.preventDefault();

    this.guestService.add(name, about);
    this.router.navigate(['/GuestList']);
  }
}
