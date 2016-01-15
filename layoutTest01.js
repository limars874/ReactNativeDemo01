/**
  Created by yili on 1/14/16.

 001 flex=5
 002 flex=5
 003 flex=10
 001+002+003=20，所以001占据5/20=1/4的页面，002占据1/4页面，003占据10/20=1/2页面。

 前提是他们的父组件(最外面那个框架）flex为1，要不然就撑不开，就是001有40像素高度，002是40像素高度，003只有文字大小的高度。
 **/


'use strict';

var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    } = React;



var layoutTest01 = React.createClass({

    render: function() {
        return (
            <View style ={styles.style0}>

                <View style={styles.style1}>
                    <Text style={styles.center}>001</Text>
                </View>
                <View style={styles.style1}>
                    <Text style={styles.center}>002</Text>
                </View>
                <View style={{flex:10,borderWidth:2,borderColor:'blue'}}>
                    <Text style={styles.center}>003</Text>
                </View>


            </View>
        );
    }
});

var styles = StyleSheet.create({

    style0:{
        flex:1,

    },

    style1:{
        flex:5,
        height:40,
        borderWidth:1,
        borderColor:'red',
    },
    center:{
        textAlign:'center',
        lineHeight:50,

    }


})

module.exports = layoutTest01;