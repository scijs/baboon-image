var test = require('tape');

test(function (t) {
  var baboon = require('./');

  t.equal(baboon.shape[0], 512)
  t.equal(baboon.shape[1], 512)
  t.equal(baboon.shape[2], 4)

  // Check a single pixel to at least catch if something
  // changes the image unexpectedly.
  t.equal(baboon.get(0, 0, 0), 164);
  t.equal(baboon.get(0, 0, 1), 150);
  t.equal(baboon.get(0, 0, 2), 71);
  t.equal(baboon.get(0, 0, 3), 255);

  t.end();
});
