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
var layoutTest01 = require('./layoutTest01');
var layoutTest02 = require('./layoutTest02');
var layoutTest03 = require('./layoutTest03');
var layoutTest04 = require('./layoutTest04');
var layoutTest05 = require('./layoutTest05');
var layoutTest06 = require('./layoutTest06');


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
    _pressButton1: function() {
        const { navigator } = this.props;

        if(navigator) {
            navigator.push({
                name: 'layoutTest01',
                component: layoutTest01,
            })
        }
    },
    _pressButton2: function() {
        const { navigator } = this.props;

        if(navigator) {
            navigator.push({
                name: 'layoutTest02',
                component: layoutTest02,
            })
        }
    },
    _pressButton3: function() {
        const { navigator } = this.props;

        if(navigator) {
            navigator.push({
                name: 'layoutTest03',
                component: layoutTest03,
            })
        }
    },
    _pressButton4: function() {
        const { navigator } = this.props;

        if(navigator) {
            navigator.push({
                name: 'layoutTest04',
                component: layoutTest04,
            })
        }
    },
    _pressButton5: function() {
        const { navigator } = this.props;

        if(navigator) {
            navigator.push({
                name: 'layoutTest05',
                component: layoutTest05,
            })
        }
    },
    _pressButton6: function() {
        const { navigator } = this.props;

        if(navigator) {
            navigator.push({
                name: 'layoutTest06',
                component: layoutTest06,
            })
        }
    },

    render: function() {
        return (
            <View style={styles.all}>
                <View style ={styles.base}>
                    <TouchableOpacity onPress={this._pressButton}>
                        <Text style = {styles.mybutton}>点我跳转到第二层</Text>
                    </TouchableOpacity>
                </View>
                <View style ={styles.base}>
                    <TouchableOpacity onPress={this._pressButton1}>
                        <Text style = {styles.mybutton}>点我跳转布局测试1</Text>
                    </TouchableOpacity>
                </View>
                <View style ={styles.base}>
                    <TouchableOpacity onPress={this._pressButton2}>
                        <Text style = {styles.mybutton}>点我跳转布局测试2</Text>
                    </TouchableOpacity>
                </View>
                <View style ={styles.base}>
                    <TouchableOpacity onPress={this._pressButton3}>
                        <Text style = {styles.mybutton}>点我跳转布局测试3</Text>
                    </TouchableOpacity>
                </View>
                <View style ={styles.base}>
                    <TouchableOpacity onPress={this._pressButton4}>
                        <Text style = {styles.mybutton}>点我跳转布局测试4</Text>
                    </TouchableOpacity>
                </View>
                <View style ={styles.base}>
                    <TouchableOpacity onPress={this._pressButton5}>
                        <Text style = {styles.mybutton}>点我跳转布局测试5</Text>
                    </TouchableOpacity>
                </View>
                <View style ={styles.base}>
                    <TouchableOpacity onPress={this._pressButton6}>
                        <Text style = {styles.mybutton}>点我跳转布局测试6</Text>
                    </TouchableOpacity>
                </View>

            </View>


        );
    }
});


var styles = StyleSheet.create({
    all:{
      marginTop:20,
    },
    base:{
        flex:1,
        backgroundColor:'green',
    },

    mybutton:{
        flex:1,
        height:40,
        borderWidth:1,
        backgroundColor:'red',
        color:'white',
        lineHeight:30,
    }
})

module.exports = FirstPageComponent;

