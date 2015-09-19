import {Component, View} from 'angular2/angular2';
import {GuestService} from 'services/guest-service';
import {Router} from 'angular2/router';

@Component({
  selector: 'registration'
})
@View({
  templateUrl: 'components/registration.html'
})
export class Registration {
  guestService: GuestService;
  router: Router;

  constructor(guestService: GuestService, router: Router) {
    this.guestService = guestService;
    this.router = router;
  }

  addGuest(event, name: string, about: string) {
    event.preventDefault();

    this.guestService.add(name, about);
    this.router.parent.navigate('/list');
  }
}
