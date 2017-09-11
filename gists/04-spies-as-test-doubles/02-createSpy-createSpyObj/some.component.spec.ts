import { SomeComponent } from './some.component';

describe('SomeComponent:', () => {
  let component: SomeComponent;
  let mockDepOne: any;
  let mockDepTwo: any;

  beforeEach(() => {
    mockDepOne = {
      doSomething: jasmine.createSpy('doSomething').and.returnValue('0123456789')
    };
    mockDepTwo = jasmine.createSpyObj('DepTwo', ['doSomethingElse']);
    component = new SomeComponent(mockDepOne, mockDepTwo);
  });

  describe('someMethod', () => {

    describe('called with true', () => {

      // notice we do not require a spyOn() method
      it('should call depOne.doSomething', () => {
        component.someMethod(true);
        expect(mockDepOne.doSomething).toHaveBeenCalled();
      });

    });

    describe('called with false', () => {

      // notice we do not require a spyOn() method
      it('should call depOne.doSomething', () => {
        component.someMethod(false);
        expect(mockDepTwo.doSomethingElse).toHaveBeenCalled();
      });

    });

  });

});
