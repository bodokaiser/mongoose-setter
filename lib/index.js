var number = require('./number');
var string = require('./string');

module.exports = function(mongoose) {

  var Types = mongoose.Schema.Types;

  /**
   * Applies setter for rounding number.
   *
   * @param {Number}
   * @return {SchemaType}
   */
  Types.Number.prototype.round = function(places) {
    return this.set(function(value) {
      return number.round(value, places || 2);
    });
  };

  /**
   * Applies setter for removing double spaces and trimming.
   *
   * @return {SchemaType}
   */
  Types.String.prototype.trim = function() {
    return this.set(string.trim);
  };

  /**
   * Applies setter for removing all spaces.
   *
   * @return {SchemaType}
   */
  Types.String.prototype.spaceless = function() {
    return this.set(string.spaceless);
  };

  /**
   * Applies setter for capitalizing string.
   *
   * @return {SchemaType}
   */
  Types.String.prototype.capitalize = function() {
    return this.set(string.capitalize);
  };

};
