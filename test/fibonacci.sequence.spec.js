(function() {
    'use strict'

    describe('fibonacci sequence', function() {
      var sequence;

      beforeEach(function() {
        console.log('before');
        module('fibonacci');
          inject([
            'fibonacci.sequence',
            function(sequenceInj) {
              sequence = sequenceInj;
            }
          ]);
      });

      it('should work', function() {
        expect(true).toBeTruthy();
      });
    });
})();
