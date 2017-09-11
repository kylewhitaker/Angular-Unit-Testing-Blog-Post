import { Observable } from 'rxjs';

import { DepThree } from './dependencies';

export class SomeComponent {

  constructor(private depThree: DepThree) { }

  subscribeAndDoSomething(): void {
    Observable.of('jabroni').subscribe((value) => {
      this.depThree.capitalize(value);
    });
  }

}
