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
            <View sytle ={styles.base}>
                <TouchableOpacity onPress={this._pressButton}>
                    <Text style={styles.mybutton}>我是第二层，点我跳回第一层</Text>
                </TouchableOpacity>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    base:{
        flex:1,
        height:80,
        width:80,
    },
    mybutton:{
        flex:1,
        backgroundColor:'blue',
        padding:40,
        borderWidth:2,
        color:'white'
    }
})

module.exports = SecondPageComponent;