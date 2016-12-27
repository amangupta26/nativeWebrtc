//	Event class
var Event = function (name){
  this.name = name;
  this.callbacks = [];
};

Event.prototype.registerCallback = function(callback){
  this.callbacks.push(callback);
};

module.exports = Event;