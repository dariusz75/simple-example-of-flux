var Dispatcher = require('../dispatcher/Dispatcher');
var ApiService = require('../services/api');
var MessageStore = require('../stores/MessageStore');

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

		var latestMessage = messages[0];

		var action = {
    type: 'update_message',
    message: latestMessage
  };

  Dispatcher.dispatch(action);

	});
}


module.exports = {
  updateMessage: updateMessage,
  getAllMessages: getAllMessages
}