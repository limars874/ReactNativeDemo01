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

var FirstPageComponent = require('./FirstPageComponent');

var SecondPageComponent = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
    },
    _pressButton: function() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:irstPageComponent了
            navigator.pop();
        }
    },

    render: function() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton}>
                    <Text style={styles.mybutton}>点我跳回去</Text>
                </TouchableOpacity>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    mybutton:{
        flex:1,
        backgroundColor:'blue',
        padding:50,
        borderWidth:2,
        color:'white'
    }
})

module.exports = SecondPageComponent;