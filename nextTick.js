// nextTick.js

process.nextTick
(
 function ()
  {
	console.log('nextTick callBack');
  }
);

console.log('nextTick is set');