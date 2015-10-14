import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
import {Component, View, bind, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2'
import {GuestService} from './guest-service';
import {Registration} from './registration';
import {GuestList} from './guest-list';

var routes = {
  registration: {
    path: '/',
    as: 'Registration',
    component: Registration,
    caption: 'Registration',
    link: ['/Registration']
  },
  guestList: {
    path: '/list',
    as: 'GuestList',
    caption: 'GuestList',
    component: GuestList,
    link: ['/GuestList']
  }
};


@RouteConfig([
  routes.registration,
  routes.guestList,
])
@Component({
  selector: 'hello-berlin',
})
@View({
  templateUrl: 'app/hello-berlin.html',
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
class HelloBerlin {
}

bootstrap(HelloBerlin, [ROUTER_BINDINGS, GuestService]);
