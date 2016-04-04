// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by bootstrap-tags.js.
import { name as packageName } from "meteor/bootstrap-tags";

// Write your tests here!
// Here is an example.
Tinytest.add('bootstrap-tags - example', function (test) {
  test.equal(packageName, "bootstrap-tags");
});
