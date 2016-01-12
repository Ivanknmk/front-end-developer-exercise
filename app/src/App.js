var React = require('react')
    ;

var App = React.createClass({


    render: function () {
        return (
            <div>
                <main role="main" id="page-content">
                    {this.props.children}
                </main>
            </div>
        );
    }
});

module.exports = App;