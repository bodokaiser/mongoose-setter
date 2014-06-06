var chai   = require('chai');
var number = require('../lib/number');

describe('number', function() {

  describe('#round(places)', function() {

    it('should return value rounded to places', function() {
      chai.expect(number.round(2.99, 2))
        .to.equal(2.99);
      chai.expect(number.round(2.991, 2))
        .to.equal(2.99);
      chai.expect(number.round(2.999, 2))
        .to.equal(3.00);
    });

  });

});
