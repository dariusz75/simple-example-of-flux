var React = require('react');
var MessageStore = require('../stores/MessageStore');
var UpdateMessage = require('./UpdateMessage.jsx');
var CreateMessage = require('./CreateMessage.jsx');
var MessageActionCreators = require('../actions/MessageActionCreators');

var Application = React.createClass({

  getInitialState: function () {
    console.log(MessageStore.getMessage());
    return {
      messageDocument: MessageStore.getMessage()
    };
  },

  setMessage: function () {
    console.log(MessageStore.getMessage());
    this.setState({
      messageDocument: MessageStore.getMessage()
    });
  },

  componentDidMount: function () {
    MessageStore.addChangeListener(this.setMessage);
    MessageActionCreators.getAllMessages();
  },

  componentWillUnmount: function () {
    MessageStore.removeChangeListener(this.setMessage);
  },

  render: function () { 
  
    if (this.state.messageDocument.message.length === 0) {
      return <CreateMessage />;
    }

    return <UpdateMessage />;

    return <section className="container">
            <h1>{this.state.messageDocument.message ? this.state.messageDocument.message : 'Please wait... I am getting a message'}</h1>
            <CreateMessage />
          </section>;
  }
});

module.exports = Application;