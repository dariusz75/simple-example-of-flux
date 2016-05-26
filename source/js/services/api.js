var jQuery = require('jquery');
var shortid = require('shortid');

function createMessage(message, callback) {

	console.log('api message', message);

// Create message function
	var data = {
			id: shortid.generate(),
			message: message
		};

	var request = jQuery.ajax({
		method: 'post',
		url: 'http://localhost:8080/api/messages',
		data: data
	});

	request.done(function handleSuccess(){
		console.log('Success!');
		console.log('data');
		callback(data);
	});

	request.fail(function handleFailure(error) {
		console.log('Failure!');
		console.log(error);
	});
}

// Update message function
	function updateMessage(documentId, message, callback) {

	var request = jQuery.ajax({
		method: 'patch',
		url: 'http://localhost:8080/api/messages/' + documentId,
		data: {
			message: message
		}
	});

	request.done(function handleSuccess(){
		console.log('Success!');
		console.log('data');
		callback();
	});

	request.fail(function handleFailure(error) {
		console.log('Failure!');
		console.log(error);
	});


}

// Replace message function
	function replaceMessage(documentId, messageDocument) {

	var request = jQuery.ajax({
		method: 'put',
		url: 'http://localhost:8080/api/messages/' + documentId,
		data: {
			message: messageDocument
		}
	});

	request.done(function handleSuccess(){
		console.log('Success!');
		console.log('data');
	});

	request.fail(function handleFailure(error) {
		console.log('Failure!');
		console.log(error);
	});
}

// Delete message function
	function deleteMessage(documentId) {

	var request = jQuery.ajax({
		method: 'delete',
		url: 'http://localhost:8080/api/messages/' + documentId,
	});

	request.done(function handleSuccess(){
		console.log('Success!');
		console.log('data');
	});

	request.fail(function handleFailure(error) {
		console.log('Failure!');
		console.log(error);
	});
}

// Read message function
	function readMessage(documentId) {

	var request = jQuery.ajax({
		method: 'get',
		url: 'http://localhost:8080/api/messages/' + documentId,
	});

	request.done(function handleSuccess(){
		console.log('Success!');
		console.log('data');
	});

	request.fail(function handleFailure(error) {
		console.log('Failure!');
		console.log(error);
	});
}

// Read all messages function
	function readAllMessages(callbackFunction) {

	var request = jQuery.ajax({
		method: 'get',
		url: 'http://localhost:8080/api/messages/'
	});

	request.done(function handleSuccess(data){
		console.log('Success!');
		console.log(data);

		callbackFunction(data);
	});

	request.fail(function handleFailure(error) {
		console.log('Failure!');
		console.log(error);
	});

}

module.exports = {
	createMessage: createMessage,
	updateMessage: updateMessage,
	replaceMessage: replaceMessage,
	deleteMessage: deleteMessage,
	readMessage: readMessage,
	readAllMessages: readAllMessages
};