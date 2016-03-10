
var Dispatcher = require('./flux/Dispatcher');
var theDispatcher = new Dispatcher();

var firstToken = theDispatcher.register(function(action) {

  console.log('enter first store');

  theDispatcher.waitFor([secondToken]);

  console.log('do something');
});

var secondToken = theDispatcher.register(function(action) {

  action.text = 'touched';

  console.log('do something else');
});

var EventEmitter = new require('events').EventEmitter;
var thirdStore = new EventEmitter();

thirdStore.on('change', function () {
  console.log('enter event listener');
})

console.log('before');
thirdStore.emit('change');
console.log('end');


var action = {
  type: 'hello',
  text: 'what'
};

theDispatcher.dispatch(action);



