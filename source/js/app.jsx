var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./components/Application.jsx');

var parentElement = document.querySelector('[data-react-app]');

ReactDOM.render(<Application />, parentElement);