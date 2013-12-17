var hello = require('../hello');
var assert = require('assert');

describe('hello', function() {

  it("returns the string 'hello'", function() {
    var result = hello();
    assert.equal(result, 'hello');
  });

});

