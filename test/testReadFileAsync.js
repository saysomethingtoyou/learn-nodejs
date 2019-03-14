var fs = require("fs");
fs.readFile("node_file/test.txt", function(err, data) {
	if (err) {
		return console.err(err);
	}
	console.log(data.toString());
});
console.log("Program End!");
