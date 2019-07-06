//Nodejs when installed will provide a set of modules that U can use for app development. 
var fs = require("fs");//This module is used for File reading and writing...

fs.readFile("./app.js", (err, data)=>{
    console.log(data.toString())
});
console.log("This will execute before the above code");
