var path = require("path");

//normalization
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

//join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

//resolve
console.log('resolve : ' + path.resolve('node_file/testPath.js'));

//extName
console.log('ext name : ' + path.extname('node_file/testPath.js'));

