'use strict';

// read binary data from 'sample.txt'

var fs = require('fs');

var data = fs.readFileSync('sample.txt')
console.log(data);
console.log(data.length + ' bytes');
console.log('First three bytes: ' + data[0] + ', ' + data[1] + ', ' + data[2]);

// Buffer -> String
var text = data.toString('utf-8');
console.log('console.log text->' + text);

// String -> Buffer
var buf = new Buffer(text, 'utf-8');
console.log(buf);
