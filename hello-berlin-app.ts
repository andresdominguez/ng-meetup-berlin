import {Component, View, bootstrap} from 'angular2/angular2'
import {GuestService} from 'services/guest-service';
import {Router} from 'angular2/router';

@Component({
  selector: 'hello-berlin'
})
@View({
  templateUrl: 'hello-berlin.html'
})
class HelloBerlin {
  constructor() {
  }
}

bootstrap(HelloBerlin, [
  GuestService
]);
