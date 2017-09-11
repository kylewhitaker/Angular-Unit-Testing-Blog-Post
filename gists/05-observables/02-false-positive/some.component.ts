import { Observable } from 'rxjs';

export class SomeComponent {

  returnSomeObservable(): Observable<string> {
    return Observable.of('test').delay(3000); // delay emissions by 3 seconds
  }

}
