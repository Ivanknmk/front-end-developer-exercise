angular.module('TestApp', ['ngRoute']).
	config(['$routeProvider', function($routeProvider) {

		console.log('config');

		$routeProvider.when('/', {
			template: "js/templates/content.html",
			controller: 'StepsCtrl',
			resolve: {
				steps: ['$q', function($q) {
					var deferred = $q.defer();

					$.ajax({
						contentType: 'JSON',
						method:'get',
						url:'/baby-steps.json',
						success: function(data) {
							console.log(data);
							deferred.resolve(data);
						}
					});

					return deferred.promise;
				}]
			}
		});

	}]);


	angular.bootstrap(document, ['TestApp']);