const os = require('os');

var namaCPU = os.hostname();
var osTipe = os.type();
var osPlatform = os.platform();
var osRilis = os.release();
var ramSisa = os.freemem();
var ramTotal = os.totalmem();

console.log(namaCPU);
console.log(osTipe);
console.log(osPlatform);
console.log(osRilis);
console.log(ramSisa);
console.log(ramTotal);