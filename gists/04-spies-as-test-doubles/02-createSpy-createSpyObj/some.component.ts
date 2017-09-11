import { DepOne, DepTwo } from './dependencies';

export class SomeComponent {

  constructor(
    private depOne: DepOne,
    private depTwo: DepTwo
  ) { }

  someMethod(someCondition: boolean): void {
    if (someCondition) {
      this.depOne.doSomething();
    } else {
      this.depTwo.doSomethingElse();
    }
  }

}
