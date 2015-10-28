(function() {
    'use strict'

    describe('fibonacci sequence', function() {
      var sequence;

      beforeEach(function() {
        module('fibonacci');
          inject([
            'fibonacci.sequence',
            function(sequenceInj) {
              sequence = sequenceInj;
            }
          ]);
      });

      it('should return a correct fibonacci sequence', function() {
        var result = sequence.get(11);
        expect(result).toEqual([1,1,2,3,5,8,13,21,34,55,89]);
      });

      it('should return a sequence of length 0 when executed without args', function() {
        var result = sequence.get();
        expect(result).toEqual([]);
      });
    });
})();
