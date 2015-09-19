import {Component, View, bootstrap} from 'angular2/angular2'

@Component({
  selector: 'hello-berlin'
})
@View({
  templateUrl: 'hello-berlin.html'
})
class HelloBerlin {
  constructor() {
    debugger;
  }
}

bootstrap(HelloBerlin, []);
