import { Observable } from 'rxjs';

export class SomeComponent {

  returnSomeObservable(): Observable<string> {
    return Observable.of('test');
  }

}
