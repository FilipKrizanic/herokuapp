var net=require('net');
var socket=new net.Socket();
var IP="https://damned3.herokuapp.com/";
var PORT=80;
var dotLine="\n-----------------------------------------------\n";

socket.setTimeout(90000,function(){console.log("TIMEOUT_TRIGGERED\n");socket.destroy();});
socket.on('timeout',function(err){console.log("Timeout_reached:".err);socket.destroy();});
socket.on('data',function(data){console.log("RESPONSE:\n"+data);socket.destroy();});
socket.on('disconnect',function(){console.log("PREMATURE_DISCONNECTION!");socket.destroy();});
socket.on('end',function(data){console.log("END_REACHED:"+data+'\n');socket.destroy();});
socket.on('close',function(data){console.log("CLOSE_REACHED:"+dotLine);});
socket.on('error',function(err){console.log("ERROR:\n"+JSON.stringify(err));});

console.log("Connecting on:"+IP+" PORT:"+PORT+"\n");
socket.connect(PORT,IP,function(err){

	console.log(dotLine+"SOCKET_CONNECTED:"+socket.remoteAddress);
	try{}catch(Exc){console.log("Error:21:".Exc);}

});

/* 
heroku open
heroku logs
heroku info
heroku status
heroku buildpacks
heroku info -s | grep web_url | cut -d= -f2    or to set the variable    heroku config:set HEROKU_URL=$(heroku info -s | grep web_url | cut -d= -f2)
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-nodejs#v87 -a my-app      v87 check versions!:   https://github.com/heroku/heroku-buildpack-nodejs/releases
heroku git:remote -a damned3   (damned3=pipeline-app name)
git push origin master
git push heroku master
*/