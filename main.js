'usr strict';
// 
var greet = require('./hello');

var s = 'lin chunxiao';

if (typeof(window) === 'undefined') {
    console.log('this is node.js , not browser');
} else {
    console.log('this is browser ,bot node');
}

greet(s);

