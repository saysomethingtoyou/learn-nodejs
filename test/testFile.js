var fs = require("fs");
var buffer = new Buffer(1024);

// 打开文件
function openFile(){
   console.log("\nOpen file");
   fs.open('node_file/test.txt', 'r+', function(err,fd) {
      if (err) console.log(err.stack);
	  console.log("File opened");
   });
}

// 获取文件信息
function getStats(){
   console.log("\nGetting File Info");
   fs.stat('node_file/test.txt', function (err, stats) {
      if (err) console.log(err.stack);
      console.log(stats);
      console.log("isFile ? "+stats.isFile());
      console.log("isDirectory ? "+stats.isDirectory());
   });
}

// 写入文件信息
function writeFile(){
   console.log("\nWrite file");
   fs.open('node_file/test_write.txt', 'w+', function(err,fd) {
      var data = "Yiibai.com - Simply Easy Learning!";
      buffer.write(data); 
      
      fs.write(fd, buffer,0,data.length,0,function(err, bytes){
         if (err) console.log(err.stack);
	     console.log(bytes + " written!");	     
      });	
   });
}

// 读取文件
function readFile(){
   console.log("\nRead file");
   fs.open('node_file/test_write.txt', 'r+', function(err,fd) {
      if (err) console.log(err.stack);
      fs.read(fd, buffer,0,buffer.length,0,function(err, bytes){
         if (err) console.log(err.stack);
	     console.log(bytes + " read!");
	     if(bytes > 0){
            console.log(buffer.slice(0,bytes).toString());
	     }
      });	
   });
}

function closeFile(){
   console.log("\nClose file");
   fs.open('node_file/test.txt', 'r+', function(err,fd) {
      if (err) console.log(err.stack);	  
	  fs.close(fd,function(){
	     if (err) console.log(err.stack);	  
		 console.log("File closed!");
	  });
   });
}

function deleteFile(){
   console.log("\nDelete file");
   fs.open('node_file/test_write.txt', 'r+', function(err,fd) {
	   fs.unlink('node_file/test_write.txt', function(err) {
		  if (err) console.log(err.stack);	  	  	  
		  console.log("File deleted!");	 
	   });
   });
}

function truncateFile(){
   console.log("\nTruncate file");
   fs.open('node_file/test.txt', 'r+', function(err,fd) {
	   fs.ftruncate(fd, function(err) {
		  if (err) console.log(err.stack);	  	  	  
		  console.log("File truncated!");	 
	   });
   });
}

function createDirectory(){
	console.log("\nCreate Directory");
	fs.mkdir('test',function(err){
      if(!err){
	     console.log("Directory created!");
	  }
      if(err && err.code === 'EEXIST'){
         console.log("Directory exists!");	
      } else if (err) {       
         console.log(err.stack);	  	 
      }
	});
}

function removeDirectory(){
	console.log("\nRemove Directory");
	fs.rmdir('test',function(err){
      if(!err){
	     console.log("Directory removed!");
	  }
      if (err) {      
		 console.log("Directory do not exist!");		           
      }
	});
}

function watchFile(){
   fs.watch('node_file/test.txt', function (event, filename) {
      console.log('event is: ' + event);   
   });
}

openFile();
writeFile();
readFile();
closeFile();
getStats();
// deleteFile();
truncateFile();
createDirectory();
removeDirectory();
watchFile();

