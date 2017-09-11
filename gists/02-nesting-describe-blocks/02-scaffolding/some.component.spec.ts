describe('SomeComponent:', () => {

  describe('someMethod', () => {

    describe('true', () => {

      it('should call depOne.doSomething', () => {

      });

      it('should return string \'eggs for breakfast\'', () => {

      });

    });

    describe('false', () => {

      it('should call depTwo.doSomethingElse', () => {

      });

      it('should return string \'steak for dinner\'', () => {

      });

    });

  });

  describe('returnSomeObservable', () => {

    it('should return a string Observable of \'test\'', () => {

    });

  });

  describe('subscribeAndDoSomething', () => {

    it('should call depThree.capitalize on the value \'jabroni\' emitted', () => {

    });

  });

});
