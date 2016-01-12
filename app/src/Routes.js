var React = require('react'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    HashHistory = require('react-router/lib/HashHistory')['default'];
;

    var App = require('./App.js'),
        BabySteps = require('./components/BabySteps')
    ;

    var Routes =
        <Router history={new HashHistory({ queryKey: true })}>
            <Route component={App} name="DefaultLayout" >
                <Route path="/" component={BabySteps} />
            </Route>
	 	</Router>
    ;

module.exports = Routes;