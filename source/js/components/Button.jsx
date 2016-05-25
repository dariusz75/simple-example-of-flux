var React = require('react');
var MessageActionCreators = require('../actions/MessageActionCreators');

var Button = React.createClass({
  render: function () {
    return <button onClick={this.props.onClick} label={this.props.label} className="btn btn-success">Update message</button>;
  }
});

module.exports = Button;