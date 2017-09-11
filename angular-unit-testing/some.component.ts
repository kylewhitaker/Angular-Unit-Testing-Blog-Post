import { Observable } from 'rxjs';

import { DepOne, DepTwo, DepThree } from './dependencies';

export class SomeComponent {

  constructor(
    private depOne: DepOne,
    private depTwo: DepTwo,
    private depThree: DepThree
  ) { }

  someMethod(someCondition: boolean): string {
    if (someCondition) {
      this.depOne.doSomething().substring(2, 5);
      return 'eggs for breakfast';
    } else {
      this.depTwo.doSomethingElse();
      return 'steak for dinner';
    }
  }

  returnSomeObservable(): Observable<string> {
    return Observable.of('test');
  }

  subscribeAndDoSomething(): void {
    Observable.of('jabroni').subscribe((value) => {
      this.depThree.capitalize(value);
    });
  }

}
