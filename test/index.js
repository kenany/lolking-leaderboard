var leaderboard = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var isPlainObject = require('lodash.isplainobject');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(leaderboard));
});

test('defaults to page 1 of na', function(t) {
  t.plan(11);
  leaderboard('na', 1, function(error, data) {
    t.error(error);
    t.ok(isPlainObject(data));

    leaderboard('na', function(error, data2) {
      t.error(error);
      t.ok(isPlainObject(data2));
      t.deepEqual(data, data2);
    });

    leaderboard(1, function(error, data3) {
      t.error(error);
      t.ok(isPlainObject(data3));
      t.deepEqual(data, data3);
    });

    leaderboard(function(error, data4) {
      t.error(error);
      t.ok(isPlainObject(data4));
      t.deepEqual(data, data4);
    });
  });
});