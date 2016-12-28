var Event = require('./event');


var webrtcClass = function(){	
	this.events = {};
};

webrtcClass.prtotype.getLocalStream = function(params){};

webrtcClass.prtotype.createLocalPeerConnection = function(params){};

webrtcClass.prtotype.createRemoteLocalConnection = function(params){};

webrtcClass.prtotype.creteOffer = function(params){};

webrtcClass.prtotype.createAnswer = function(params){};


//	Events related methods
var registerEvent = function(eventName){
  var event = new Event(eventName);
  this.events[eventName] = event;
};


var emit = function(eventName, eventArgs){
  this.events[eventName].callbacks.forEach(function(callback){
    callback.apply(null, eventArgs);
  });
};

webrtcClass.prototype.on = function(eventName, callback){
  this.events[eventName].registerCallback(callback);
};

return webrtcClass;