// nextTick.js

process.on
(
	'exit',function()
	{
    console.log('about to exit');
	} 

);

process.nextTick
(
 function ()
  {
	console.log('nextTick callBack');
  }
);

console.log('current js file: ' + __filename);
console.log('current js dir: ' + __dirname);
process.name = 'Sample Nodejs';
console.log('arguments: ' + JSON.stringify(process.argv));
console.log('cwd: ' + process.cwd());


console.log('nextTick is set');

if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}
