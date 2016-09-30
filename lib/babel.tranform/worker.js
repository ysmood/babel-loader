var kit = require('nokit');
var proxy = kit.require('proxy');
var net = require('net');

var babel = require('babel-core');



var res = babel.transform(code, {
    presets: ['es2015']
});

