import {Component, View, bootstrap} from 'angular2/angular2'

@Component({
  selector: 'hello-berlin'
})
@View({
  templateUrl: 'app.html'
})
class HelloBerlin {
  constructor() {
  }
}

bootstrap(HelloBerlin, []);
