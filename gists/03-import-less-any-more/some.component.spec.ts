import { SomeComponent } from './some.component';  // only import the thing you want to test

describe('SomeComponent:', () => {

  let component: SomeComponent;
  let mockDepOne: any;    // do not import DepOne, 'any' it
  let mockDepTwo: any;    // do not import DepTwo, 'any' it
  let mockDepThree: any;  // do not import DepThree, 'any' it

  beforeEach(() => {

    // mock dependencies
    mockDepOne = {
      doSomething: jasmine.createSpy('doSomething').and.returnValue('0123456789')
    };
    mockDepTwo = jasmine.createSpyObj('DepTwo', ['doSomethingElse']);
    mockDepThree = jasmine.createSpyObj('DepThree', ['capitalize']);

    // initialize component under test with mocked dependencies
    component = new SomeComponent(mockDepOne, mockDepTwo, mockDepThree);

  });

  // ...                 ...
  // ... unit tests here ...
  // ...                 ...

});
