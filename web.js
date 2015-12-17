var path=require('path');
var net=require('net');
console.log("env:"+process.env.PATH+"\n\n");
console.log("NEW ONE:"+__dirname+"\n");

/*var socket=new net.Socket();	
		console.log("Sending tcp data from Laravel Http to SIHOT TCP on:93.204.98.2:14975");	
	try{
		socket.setTimeout(120000,function(msg){console.log("module.exports.sendToSihot TCP Socket timed out:"+msg);socket.end();});
		socket.connect(14975,'93.204.98.2',function(){socket.end("Hy to Hotelbird! :)");});
		socket.on('error',function(err){console.log("ERROR!:"+err);});
		socket.on('data',function(msg){socket.end();console.log("Proxer sending data to SIHOT over TCP:"+data+"\n");});
		socket.on('close',function(){console.log("Socket closed!");});
		socket.on('end',function(){socket.destroy();});
	}catch(mess){console.log("Method: sendToSihot (from Laravel -> Proxer -> SIHOT) threw an exception:\n"+mess);}*/
var server=net.createServer(function(socket){
		socket.setTimeout(6000,function(msg){console.log("module.exports.sendToSihot TCP Socket timed out:"+msg);socket.end();});
		socket.on('error',function(err){console.log("ERROR!:"+err);});
		socket.on('data',function(msg){socket.write("Data receaved! Your IP is:"+socket.remoteAddress);});
		socket.on('close',function(){console.log("Socket closed!");socket.destroy();});
		socket.on('end',function(){socket.destroy();});
});