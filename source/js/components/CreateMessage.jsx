var React = require('react');
var Button = require('./Button.jsx');
var MessageActionCreators = require('../actions/MessageActionCreators');
var MessageStore = require('../stores/MessageStore');

var CreateMessage = React.createClass({

  createMessage: function () {
    var updatedMessage = this.refs.message.value;
    MessageActionCreators.createMessage(updatedMessage);
  },

  render: function () {
    return (
      <div>
        <textarea className="form-control" rows="3" ref="message"></textarea>
        <Button onClick={this.createMessage} text='Create message' />
      </div>
    );
  }
});

module.exports = CreateMessage;