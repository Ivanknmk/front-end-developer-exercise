var React = require('react');
var Sidelist = require('./Sidelist');

var data = require('../../baby-steps.json');

var BabySteps = React.createClass({
	
	getInitialState: function(){
		return {
			persons: data
		};
	},


	render: function(){
		var sidelist = <Sidelist friends={this.state.persons.friends} />;
		
		return (
			<div>
				{sidelist}
			</div>
		);	
	}

});

module.exports = BabySteps;