// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by mup-helpers.js.
import { name as packageName } from "meteor/zodern:mup-helpers";

// Write your tests here!
// Here is an example.
Tinytest.add('mup-helpers - example', function (test) {
  test.equal(packageName, "mup-helpers");
});
