var Dispatcher = require('../dispatcher/Dispatcher');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');

var message = {
  message: ''
};

function setMessage(newMessage) {
  message = newMessage;
  MessageStore.emit('change');
}

var messageStoreObject = {
  getMessage: function () {
    return message;
  },

  addChangeListener: function (changeEventHandler) {
    this.on('change', changeEventHandler);
  },

  removeChangeListener: function (changeEventHandler) {
    this.removeListener('change', changeEventHandler);
  }
};

var MessageStore = objectAssign({}, messageStoreObject, EventEmitter.prototype);

function handleAction(action) {
  if (action.type === 'update_message') {
    setMessage(action.message);
  }
}

Dispatcher.register(handleAction);

module.exports = MessageStore;