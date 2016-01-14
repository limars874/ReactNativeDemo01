/**
 * Created by yili on 1/13/16.
 */

'use strict';

var React = require('react-native');

var {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    } = React;

var SecondPageComponent = require('./SecondPageComponent');

var FirstPageComponent = React.createClass({
    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {
    },

    _pressButton: function() {
        const { navigator } = this.props;
        //或者写成 const navigator = this.props.navigator;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
            })
        }
    },

    render: function() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton}>
                    <Text style = {styles.mybutton}>点我跳转</Text>
                </TouchableOpacity>
            </View>
        );
    }
});


var styles = StyleSheet.create({
    mybutton:{
        flex:1,
        backgroundColor:'red',
        padding:50,
        borderWidth:2,
    }
})

module.exports = FirstPageComponent;

