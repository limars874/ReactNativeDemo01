/**
 Created by yili on 1/14/16.

 flexDirection有row和column两种，一种横排，一种竖排。
 alignSelf是自己相对于父View的定位，start center end三种常见，一共是（auto | flex-start | flex-end | center | baseline | stretch）。
 还有个子元素定位的两个属性：alignItems（flex-start | flex-end | center | baseline | stretch）负责水平方向，justfiContent（flex-start | flex-end | center | space-between | space-around
 ）负责竖直方向。


 **/


'use strict';

var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    } = React;



var layoutTest02 = React.createClass({

    render: function() {
        return (
            <View style ={styles.style0}>

                <View style={styles.style1}>
                    <Text style={styles.center}>1/4</Text>
                    <Text style={styles.center}>1/4</Text>
                    <View style={styles.blackcenter}>
                        <View style={styles.grayblock}>
                            <Text>real center</Text>
                        </View>

                    </View>
                </View>
                <View style={[styles.style1,{flexDirection:'column'}]}>
                    <Text style={styles.center}>1/4</Text>
                    <Text style={styles.center}>1/4</Text>

                </View>
                <View style = {{flex:10,borderWidth:1,borderColor:'blue'}}>
                    <Text style={{marginTop:40,fontSize:25}}>1/2</Text>
                    <View style={[styles.viewcenter,styles.viewborder]}><Text>center</Text></View>
                    <View style={[styles.viewstart,styles.viewborder]}><Text>start</Text></View>
                    <View style={[styles.viewend,styles.viewborder]}><Text>end</Text></View>

                </View>



            </View>
        );
    }
});

var styles = StyleSheet.create({

    style0:{
        flex:1,

    },

    blackcenter:{
        alignItems:'center',
        justifyContent:'center',
        borderColor:'black',
        borderWidth:2,
        flex:1,
    },

    style1:{
        flex:5,
        height:40,
        borderWidth:1,
        borderColor:'red',
        flexDirection:'row',
    },
    center:{
        textAlign:'center',
        lineHeight:50,
        flex:1,

    },

    viewborder:{
        borderWidth:5,
        borderColor:'green',
        width:100,
        height:40,
    },
    viewcenter:{
        alignSelf:'center',
    },
    viewstart:{
        alignSelf:'flex-start',
    },
    viewend:{
        alignSelf:'flex-end',
    },

    grayblock:{

        borderColor:'gray',
        borderWidth:2,
        width:50,
        height:50,
    },


})

module.exports = layoutTest02;