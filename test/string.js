var chai   = require('chai');
var string = require('../lib/string');

describe('string', function() {

  describe('#trim()', function() {

    it('should remove double spaces', function() {
      chai.expect(string.trim('  bobby   Joe'))
        .to.equal('bobby Joe');
    });

  });

  describe('#spaceless()', function() {

    it('should remove all spaces', function() {
      chai.expect(string.spaceless('  A b c'))
        .to.equal('Abc');
    });

  });

  describe('#capitalize()', function() {

    it('should capitalize space delimited', function() {
      chai.expect(string.capitalize('bUUbU guru'))
        .to.equal('Buubu Guru');
    });

  });

});
