var React = require('react');
var Button = require('./Button.jsx');
var MessageActionCreators = require('../actions/MessageActionCreators');
var MessageStore = require('../stores/MessageStore');

var UpdateMessage = React.createClass({

  updateMessage: function () {
    var updatedMessage = this.refs.message.value;
    var documentId = MessageStore.getMessage().id;
    MessageActionCreators.updateMessage(documentId, updatedMessage);
  },

  render: function () {
    return (
      <div>
        <textarea className="form-control" rows="3" ref="message"></textarea>
        <Button onClick={this.updateMessage} />
      </div>
    );
  }
});

module.exports = UpdateMessage;