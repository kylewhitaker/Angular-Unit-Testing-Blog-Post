import { fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { SomeComponent } from './some.component';

describe('SomeComponent:', () => {
  let component: SomeComponent;
  let mockDepOne, mockDepTwo, mockDepThree: any;

  beforeEach(() => {
    mockDepOne = { doSomething: () => '0123456789' };
    mockDepTwo = { doSomethingElse: jasmine.createSpy('doSomethingElse') }
    mockDepThree = jasmine.createSpyObj('DepThree', ['capitalize']);
    component = new SomeComponent(mockDepOne, mockDepTwo, mockDepThree);
  });

  describe('someMethod', () => {

    describe('when someCondition is true', () => {

      it('should call depOne.doSomething', () => {
        spyOn(mockDepOne, 'doSomething').and.callThrough();
        component.someMethod(true);
        expect(mockDepOne.doSomething).toHaveBeenCalled();
      });

      it('should return string \'eggs for breakfast\'', () => {
        expect(component.someMethod(true)).toEqual('eggs for breakfast');
      });

    });

    describe('when someCondition is false', () => {

      it('should call depTwo.doSomethingElse', () => {
        component.someMethod(false);
        expect(mockDepTwo.doSomethingElse).toHaveBeenCalled();
      });

      it('should return string \'eggs for breakfast\'', () => {
        expect(component.someMethod(false)).toEqual('steak for dinner');
      });

    });

  });

  describe('returnSomeObservable', () => {

    it('should return a string Observable', (done) => {
      component.returnSomeObservable().subscribe((value) => {
        expect(value).toEqual('test');
        done();
      })
    });

    it('this unit test should fail but it will pass... a false positive!', () => {
      component.returnSomeObservable().delay(3000).subscribe((value) => {
        expect(value).not.toEqual('test');
      })
    });

  });

  describe('subscribeAndDoSomething', () => {

    it('should call depThree.capitalize on the value emitted', fakeAsync(() => {
      component.subscribeAndDoSomething();
      tick();
      expect(mockDepThree.capitalize).toHaveBeenCalledWith('jabroni');
    }));

  });

});
