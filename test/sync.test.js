var fs = require('fs');
var path = require('path');
var expect = require('expect.js');


describe.only('Sync compilation', function() {

  var babelLoader = path.resolve(__dirname, '../');
  var req = require('enhanced-require')(module);

  it('should compile file', function(done) {
    var basic = req(babelLoader + '!./fixtures/basic.js');

    expect(basic).to.exist();
  });
});
