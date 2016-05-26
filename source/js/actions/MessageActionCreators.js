var Dispatcher = require('../dispatcher/Dispatcher');
var ApiService = require('../services/api');
var MessageStore = require('../stores/MessageStore');

function createMessage(messageText) {

	ApiService.createMessage(messageText, function callback(messageDocument){

		

		var action = {
	    type: 'update_message',
	    message: messageDocument
	  };

  	Dispatcher.dispatch(action);
	});
}
function updateMessage(documentId, updatedMessageText) {

	ApiService.updateMessage(documentId, updatedMessageText, function callback(){

		console.log('callback function called');

		var messageDocument = MessageStore.getMessage();
		messageDocument.message = updatedMessageText;

		var action = {
    type: 'update_message',
    message: messageDocument
  };

  Dispatcher.dispatch(action);
	});
}

function getAllMessages() {
	ApiService.readAllMessages(function handleData(messages) {
		
		var latestMessageDocument;

		if (messages.length === 0) {
			latestMessageDocument = {
				message: ''
			};

		} else {
			latestMessageDocument = messages[0];
		}

		var action = {
    type: 'update_message',
    message: latestMessageDocument
  };

  Dispatcher.dispatch(action);

	});
}


module.exports = {
	createMessage: createMessage,
  updateMessage: updateMessage,
  getAllMessages: getAllMessages
}