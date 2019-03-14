var events = require("events");
var eventEmitter = new events.EventEmitter();

// 设置触发方法
var connected = function connected() {
	console.log("connection successful");
	eventEmitter.emit('deta_received');
}

// on:绑定事件
eventEmitter.on('connection', connected);

eventEmitter.on('deta_received', function() {
	console.log("deta received successfully");
});

// emit:触发事件
eventEmitter.emit('connection');
console.log("Program Ended");