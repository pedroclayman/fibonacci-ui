(function() {
    'use strict'

    describe('fibonacci dims', function() {
      var dims;

      beforeEach(function() {
        module('fibonacci');
        inject([
          'fibonacci.dims',
          function(dimsInj) {
            dims = dimsInj;
          }
        ]);
      });


      it('should return a sequence of dimensions', function() {
          var result = dims.get(4, 1920);

          var expectation = [
            {
              top: 0,
              left: 0,
              width: 1152,
              height: 1152
            },
            {
              top: 0,
              left: 1152,
              width: 768,
              height: 768
            },
            {
              top: 768,
              left: 1536,
              width: 384,
              height: 384
            }
          ]

          expect(result).toEqual(expectation);
      });
    });
})();
