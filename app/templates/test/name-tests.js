'use strict';

var <%= safeSlugname %> = require('../index.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.<%= safeSlugname %> = {
  setUp: function(done) {
    // setup here
    done();
  },
  'some args': function(test) {
    test.expect(1);
    // tests here
    test.equal(<%= safeSlugname %>({foo: 'bar'}), 'foo is bar!', 'should print them to the user');
    test.done();
  }
};
