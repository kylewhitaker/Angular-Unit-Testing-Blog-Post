import { SomeComponent } from './some.component';

describe('SomeComponent:', () => {
  let component: SomeComponent;

  beforeEach(() => {
    component = new SomeComponent();
  });

  describe('returnSomeObservable', () => {

    it('should return an observable that emits a \'test\' string value', (done) => {
      component.returnSomeObservable().subscribe((value) => {
        expect(value).toEqual('test');
        done();
      });
    });

  });

});
