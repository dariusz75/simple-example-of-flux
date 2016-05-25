var React = require('react');
var MessageActionCreators = require('../actions/MessageActionCreators');

var Button = React.createClass({
  render: function () {
    return <button onClick={this.props.onClick} label="Create message!!!" className="btn btn-success"></button>;
  }
});

module.exports = Button;