/**
 Created by yili on 1/14/16.

 flexDirection有row和column两种，一种横排，一种竖排。
 alignSelf是自己相对于父View的定位，start center end三种常见，一共是（auto | flex-start | flex-end | center | baseline | stretch）。
 还有个子元素定位的两个属性：alignItems（flex-start | flex-end | center | baseline | stretch）负责水平方向，justfiContent（flex-start | flex-end | center | space-between | space-around
 ）负责竖直方向。

 顺便测试了一下图片嵌套文字（可行），或者文字上面盖图片(不要这么干，一切都乱套了)，以及图片上再盖图片(透明png盖上去没问题）



 **/


'use strict';

var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    Image,
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
                    <Text style={{marginTop:5,fontSize:25}}>1/2</Text>
                    <View style={[styles.viewcenter,styles.viewborder]}>
                        <Image style={[styles.img,]} source={{uri:'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}>
                            <Text style={{marginTop:20,}}>center</Text>
                        </Image>
                    </View>

                    <View style={[styles.viewstart,styles.viewborder]}>
                        <Text style={{marginTop:0,width:100,}}>start
                            <Image style={{height:30,width:30,}} source={{uri:'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}>
                            </Image>
                        </Text>

                    </View>

                    <View style={[styles.viewend,styles.viewborder]}>
                        <Image style={{width:120,height:80,}} source={{uri:'http://p1.meituan.net/200.0/deal/c3f56d253b6481ca15b5075b85e56a6299197.jpg'}}>
                            <Image style={{width:50,height:50}} source={{uri:'http://p0.meituan.net/280.0/groupop/bbe136d503834510784bfb15500afe5426910.png'}}>
                            </Image>
                        </Image>

                    </View>

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
        width:150,
        height:100,
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
    img:{
        height:80,
        width:60,

    },


})

module.exports = layoutTest02;