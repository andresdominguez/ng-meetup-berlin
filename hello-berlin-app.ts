import {Component, View, bind, bootstrap} from 'angular2/angular2'
import {GuestService} from 'services/guest-service';
//import {Router} from 'angular2/router';
//import {  LocationStrategy, HashLocationStrategy, HTT } from 'angular2/router';
//import {ROUTER_BINDINGS} from 'angular2/router';
//import {RouteConfig, RouterOutlet, RouterLink, ROUTER_BINDINGS, ROUTER_DIRECTIVES} from 'angular2/router';
import {Registration} from 'components/registration';

import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';


@RouteConfig([
  {path: '/', as: 'registration', component: Registration},
  //{path: '/list', as: 'list', component: Registration},
  //{path: '/list', as: 'list', component: GuestList},
  //{path: '/search', as: 'search', component: GuestSearch}
])
@Component({
  selector: 'hello-berlin',
})
@View({
  templateUrl: 'hello-berlin.html',
  directives: [ROUTER_DIRECTIVES]
})
class HelloBerlin {
  constructor() {
  }
}


bootstrap(HelloBerlin, [
  GuestService,
  ROUTER_BINDINGS,
  bind(LocationStrategy).toClass(HashLocationStrategy)
]);
