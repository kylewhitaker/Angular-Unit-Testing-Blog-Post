import { DepOne } from './dependencies';

export class SomeComponent {

  constructor(private depOne: DepOne) { }

  someMethod(): void {
    this.depOne.doSomething().slice(2, 5);
  }

}
