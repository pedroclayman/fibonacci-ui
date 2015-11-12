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
          var result = dims.get(4);

          var expectation = [
            {
              top: 0,
              left: 0,
              width: 3/5.0,
              height: 3/5.0
            },
            {
              top: 0,
              left: 3/5.0,
              width: 2/5.0,
              height: 2/5.0
            },
            {
              top: 2/5.0,
              left: 4/5.0,
              width: 1/5.0,
              height: 1/5.0
            },
            {
              top: 2/5.0,
              left: 3/5.0,
              width: 1/5.0,
              height: 1/5.0
            }
          ]

          expect(Math.round(result[0] * 1000.0)).toEqual(Math.round(expectation[0] * 1000.0));
          expect(Math.round(result[1] * 1000.0)).toEqual(Math.round(expectation[1] * 1000.0));
          expect(Math.round(result[2] * 1000.0)).toEqual(Math.round(expectation[2] * 1000.0));
          expect(Math.round(result[3] * 1000.0)).toEqual(Math.round(expectation[3] * 1000.0));
      });
    });
})();
