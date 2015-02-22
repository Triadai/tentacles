var GHClient = require('../..');
var assert = require('assert');

describe('search', function() {
  var ghClient;

  before(function() {
    ghClient = new GHClient({ accessToken: process.env.GITHUB_ACCESS_TOKEN });
  });

  it('search repos', function(done) {
    ghClient.search.repos('faye websockets')
      .then(function(searchResults) {
        assert(Array.isArray(searchResults.items));
      })
      .nodeify(done);
  });

  it('search code', function(done) {
    ghClient.search.code('gitter user:suprememoocow')
      .then(function(searchResults) {
        assert(Array.isArray(searchResults.items));
      })
      .nodeify(done);
  });

  it('search issues', function(done) {
    ghClient.search.issues('faye disconnect')
      .then(function(searchResults) {
        assert(Array.isArray(searchResults.items));
      })
      .nodeify(done);
  });

  it('search users', function(done) {
    ghClient.search.users('suprememoocow type:user')
      .then(function(searchResults) {
        assert(Array.isArray(searchResults.items));
      })
      .nodeify(done);
  });

/**

repos: method({
  method: 'GET',
  path: '/search/repositories',
  queryParams: ['q']
}),

code: method({
  method: 'GET',
  path: '/search/code',
  queryParams: ['q']
}),

issues: method({
  method: 'GET',
  path: '/search/issues',
  queryParams: ['q']
}),

users: method({
  method: 'GET',
  path: '/search/users',
  queryParams: ['q']
}),*/
});
