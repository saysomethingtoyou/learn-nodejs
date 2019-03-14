var fs = require("fs");
var data = '';
//create a readable stream
var readerStream = fs.createReadStream('node_file/test.txt');

// 设置字符集
readerStream.setEncoding('UTF8');

// data - 当有数据可读取时触发此事件
// end - 当没有更多的数据读取时触发此事件
// error - 当有错误或接收数据写入时触发此事件
// finish - 当所有数据已刷新到底层系统时触发此事件
readerStream.on('data', function(chunk) {
	console.log("before on data:" + data);
	data += chunk;
	console.log("after on data:" + data);
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

data = 'Hello Node.js';
var writerStream = fs.createWriteStream('node_file/test_write.txt');
console.log("write--> data = " + data);
writerStream.write(data,'UTF8');

// 标记到文件尾部
writerStream.end();

writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("Program Ended");

