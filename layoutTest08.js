/**
 Created by yili on 1/14/16.
 测试兄弟组件之间通讯，实在是太麻烦了。本质是子组件(06)调用父组件(08)的包含有setstate方法的方法名，然后父组件把更新过的state值传给另外一个子组件(07)进行render。

 **/


'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var {Icon,} = require('react-native-icons');

var {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    Navigator,
    ListView,
    Component,
    } = React;

import LayoutTest06 from './layoutTest06.js';

import LayoutTest07 from './layoutTest07.js';

var screenW = Dimensions.get('window').width;





export default class layoutTest08 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            st:1,
        };


    }

    handleChange(textValue){
        this.setState({st:textValue})
        console.log("handleChange is "+textValue);
    }



    render() {


        return (
            <ScrollView style={[styles.scrollview,]}>
                <LayoutTest06  updateChange={this.handleChange.bind(this)}/>
                <LayoutTest07 sttt = {this.state.st}/>

            </ScrollView>
        );
    }




};


var styles = StyleSheet.create({
    container: {
        width:120,
        height:220,
        flexWrap:'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginLeft:25,
        marginTop:0,


    },
    rightContainer: {
        flex: 1,
        alignItems:'center',
    },
    title: {
        fontSize: 8,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    thumbnail: {
        width: 106,
        height: 162,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
        flexDirection:'row',
        flexWrap:'wrap',
        width:screenW,
    },

    borderall: {
        borderWidth: 1,
        borderColor: 'red',
    },





});

module.exports = layoutTest08;