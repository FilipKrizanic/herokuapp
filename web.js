var path=require('path');
var net=require('net');
var PORT=14976;
console.log("env:"+process.env.PATH+"\n\n");
console.log("NEW ONE:"+__dirname+"\n");

var server=net.createServer(function(socket){
		socket.setTimeout(6000,function(msg){console.log("module.exports.sendToSihot TCP Socket timed out:"+msg);socket.end();});
		socket.on('error',function(err){console.log("ERROR!:"+err);});
		socket.on('data',function(msg){socket.write("Data receaved! Your IP is:"+socket.remoteAddress);});
		socket.on('close',function(){console.log("Socket closed!");socket.destroy();});
		socket.on('end',function(){socket.destroy();});
}).listen(PORT);