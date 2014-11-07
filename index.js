var jsonist = require('jsonist');
var isNumber = require('lodash.isnumber');
var isFunction = require('lodash.isfunction');

var ENDPOINT = 'http://www.lolking.net/leaderboards/';

// User-Agent required
var OPTIONS = {
  headers: {
    'User-Agent': 'lolking-leaderboard'
  }
};

function lolkingLeaderboard(region, page, callback) {

  // default region and page
  if (isFunction(region)) {
    callback = region;
    region = 'na';
    page = 1;
  }

  // default region
  if (isNumber(region)) {
    callback = page;
    page = region;
    region = 'na';
  }

  // default page
  if (isFunction(page)) {
    callback = page;
    page = 1;
  }

  jsonist.get(ENDPOINT + '_/' + region + '/' + page + '.json', OPTIONS, callback);
}

module.exports = lolkingLeaderboard;