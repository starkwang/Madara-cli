markdown = require("markdown").markdown;
promise = require("bluebird");
jade = require("jade");
fs = promise.promisifyAll(require("fs"));

log = console.log;

// var readFile = promise.promisify(require("fs").readFile);

// fs.readFileAsync('md/test.md','utf-8')
// 	.then(function(data){
// 		return markdown.toHTML(data);
// 	})
// 	.then(function(data){

//     //render.js
// 		fs.readFileAsync('themes/galaxy/template/template.html','utf-8')
//     .then(function(html){
//       var a = html.replace(/{{% markdown %}}/,data);
//       fs.writeFile('build/index.html',a,{encoding:'utf-8'});
//     })
//     //fs.writeFile('test.html',data,{encoding:'utf-8'});
// 	})
