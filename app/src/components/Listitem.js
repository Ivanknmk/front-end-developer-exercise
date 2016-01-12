var React = require('react');


var Listitem = React.createClass({
	
	getInitialState: function(){
		return {
			//persons: data
		};
	},


	render: function(){
		debugger;
		return (
			// <span>
			// 	{this.props.firstname} - {this.props.babyStep}
			// </span>
			<h1>Baby Step {this.props.step}</h1>
		);	
	}

});

module.exports = Listitem;