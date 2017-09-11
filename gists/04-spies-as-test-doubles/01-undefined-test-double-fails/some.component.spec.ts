import { SomeComponent } from './some.component';

describe('SomeComponent:', () => {
  let component: SomeComponent;
  let mockDepOne: any;

  beforeEach(() => {
    mockDepOne = {
      doSomething: () => '0123456789'  // We correctly define a return value for our mock...
    };
    component = new SomeComponent(mockDepOne);
  });

  describe('someMethod', () => {

    // THIS TEST WILL FAIL DUE TO AN UNDEFINED SPY TEST DOUBLE
    it('should call depOne.doSomething', () => {
      // ...however, this spy acts a test double with no return value for 'doSomething'.
      spyOn(mockDepOne, 'doSomething');
      // When calling 'someMethod', an error is thrown when calling .slice(2, 5) on an undefined return value from 'doSomething'.
      component.someMethod();
      // The expect did not fail the test! The undefined return value when calling 'doSomething' failed our test as a side effect.
      expect(mockDepOne.doSomething).toHaveBeenCalled();
    });

  });

});
