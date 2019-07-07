//Nodejs when installed will provide a set of modules that U can use for app development. 
var http = require('http');

var fs = require("fs");//This module is used for File reading and writing...
var emitter = require('events').EventEmitter;//Nodejs uses EventEmitter to provide Event handling support to JS. This is widely used by Testing Frameworks to trigger the test failures using  a function called on 
var util = require('util');

// fs.readFile("./app.js", (err, data)=>{
//     console.log(data.toString())
// });
//writing synchronously, it means that the function will block till the file writing is completed. 
// fs.writeFileSync("Example.txt","Testing Example to write to File");
// fs.closeSync(0);//use closeSync for closing a file that is written sychronously.

//Function used to write asynchronously
// fs.writeFile("Example.txt",//File to write
// "Some Text to write", //Content to write, 
// (err)=>{//Callback function for error handling...
//     if(err)
//         console.log(err.message);//Display the error message only if it occurs..
// })
//////////////////Event Emitter Example///////////////////////////////////
// var log = new emitter();
// //on method will wait for the event called error to occur, when it occurs, it will invoke the 2nd arg function....
// log.on('error', (msg)=>{
//     console.log("Error: " + msg);
// })

// log.on('success', (msg)=>{
//     console.log(msg);
// })

// log.emit('error',"OOPs! something wrong happened");
// log.emit("success", "Insertion successfull");
// //fs, events, os, util, http, 

// var content = util.format("My Name is %s and I am from %s and I am %d years old", "Phaniraj", "Bangalore", 43);
// console.log(content);
// console.log(emitter);
////////////////////////////Http Module//////////////////////////////
//http module gives http to perform HTTP operations like APIs, GET, POST, DELETE , PUT  operations including rendering HTML pages....

var data = require('./data.json');
http.createServer((req, res)=>{
    res.end(JSON.stringify(data));
}).listen(1234);