import { SomeComponent } from './some.component';

describe('SomeComponent:', () => {
  let component: SomeComponent;

  beforeEach(() => {
    component = new SomeComponent();
  });

  describe('returnSomeObservable', () => {

    // THIS TEST SHOULD FAIL, BUT IT PASSES!
    it('should return an observable that emits a \'test\' string value', () => {
      component.returnSomeObservable().subscribe((value) => {
        expect(value).not.toEqual('test'); // expect() not executed until Observable emits a value
      });
      // When done() is not explictly defined, the test will complete here.
    });

  });

});
