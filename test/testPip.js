var fs = require("fs");

var readerStream = fs.createReadStream('node_file/test.txt');
var writerStream = fs.createWriteStream('node_file/test_write.txt');

// pipe：使用管道复制文件
readerStream.pipe(writerStream);

console.log("Program Ended");