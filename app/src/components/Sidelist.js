var React = require('react');

var Listitem = require('./Listitem');

var Sidelist = React.createClass({

	getinitialState: function(){
		return {
			rows: []
		}
	},

	addItem: function(element, arr){
		var item = <Listitem step={element.babyStep} name={arr.name}/>;
		var arr = arr[element['babyStep']] ? arr[element['babyStep']].push(item) : [];
		return arr;
	},

	render: function(){
		var friends = this.props.friends;
		var list = [];
		var count = friends.length;

		for(var i=0; i<count; i++){
			var name = 'Baby Step ';
			list[friends[i]['babyStep']] = list[friends[i]['babyStep']] || [friends[i]['babyStep']];
			list[friends[i]['babyStep']] = this.addItem(friends[i], list[friends[i]['babyStep']]);
		}
		
		return (
			<div>
				{list}
			</div>
		);	
	}

});

module.exports = Sidelist;