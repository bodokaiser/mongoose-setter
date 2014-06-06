/**
 * Returns value rounded to palces after zero.
 *
 * @param {Number} value
 * @param {Places} places
 * @return {Number}
 */
exports.round = function(value, places) {
  return +value.toFixed(places);
};

