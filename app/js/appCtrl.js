angular.module('TestApp').
	controller('AppCtrl', ['$scope', function($scope) {

		// this should be in a directive and using ng-click isntead of jquery event binding
		var btn = $('nav > .item');

		btn.$on('click', function(e) {
			var elem = $(e.currentTarget);
			var step = elem.data('step');

			console.log(step);
		});

	}]);