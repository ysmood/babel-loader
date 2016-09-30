var kit = require('nokit');
var proxy = kit.require('proxy');
var net = require('net');

var init = kit.Deferred();

var server = net.createServer(function (sock) {

});

server.listen(0, function () {
    kit.logs('listen on ' + server.address().port);
    init.resolve();
});

module.exports = function (source, code) {
    if ()
}
