var fs = require("fs");
var data = fs.readFileSync("node_file/test.txt");
console.log(data.toString());
console.log("Program End!");