import { fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { SomeComponent } from './some.component';

describe('SomeComponent:', () => {
  let component: SomeComponent;
  let mockDepThree: any;

  beforeEach(() => {
    mockDepThree = jasmine.createSpyObj('DepThree', ['capitalize']);
    component = new SomeComponent(mockDepThree);
  });

  describe('subscribeAndDoSomething', () => {

    it('should call depThree.capitalize on the value emitted', fakeAsync(() => {
      component.subscribeAndDoSomething();
      tick();
      expect(mockDepThree.capitalize).toHaveBeenCalledWith('jabroni');
    }));

  });

});
