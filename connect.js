var net=require('net');
var socket=new net.Socket();
var IP="";
var PORT=80;

socket.setTimeout(90000,function(){console.log("TIMEOUT_TRIGGERED\n");socket.destroy();});
socket.on('timeout',function(err){console.log("Timeout_reached:".err);socket.destroy();});
socket.on('data',function(data){console.log("RESPONSE:\n"+data);socket.destroy();});
socket.on('disconnect',function(){console.log("PREMATURE_DISCONNECTION!");socket.destroy();});
socket.on('end',function(data){console.log("END_REACHED:"+data+'\n');socket.destroy();});
socket.on('close',function(data){console.log("CLOSE_REACHED:"+dotLine);});
socket.on('error',function(err){console.log("ERROR:\n"+JSON.stringify(err));});

console.log("Connecting on:"+IP_ARR['SIHOT_SRV']+" PORT:"+PORT+"\n");
socket.connect(PORT,IP_ARR['SIHOT_SRV'],function(err){

	console.log(dotLine+"SOCKET_CONNECTED:"+socket.remoteAddress);
	try{}catch(Exc){console.log("Error:21:".Exc);}

});



