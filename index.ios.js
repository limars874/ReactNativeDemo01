/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    View,
    Navigator
    } = React;

var FirstPageComponent = require('./FirstPageComponent');

var MyProject = React.createClass({
    render: function() {
        var defaultName = 'FirstPageComponent1';
        var defaultComponent = FirstPageComponent;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={() => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
                renderScene={(route, navigator) => {
            let Component = route.component;
            if(route.component) {
              return <Component {...route.params} navigator={navigator} />
            }
          }} />
        );

    }
});

AppRegistry.registerComponent('MyProject', () => MyProject);
