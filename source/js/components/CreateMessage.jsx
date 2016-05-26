var React = require('react');
var MessageActionCreators = require('../actions/MessageActionCreators');
var MessageStore = require('../stores/MessageStore');

var CreateMessage = React.createClass({

  updateMessage: function () {
    var updatedMessage = this.refs.message.value;
    var documentId = MessageStore.getMessage().id;
    MessageActionCreators.updateMessage(documentId, updatedMessage);
  },

  render: function () {
    return (
      <div>
        <textarea className="form-control" rows="3" ref="message"></textarea>
        <ButtonCreateMessage onClick={this.createMessage} text='Create message' />
      </div>
    );
  }
});

module.exports = CreateMessage;