/**
 Created by yili on 1/14/16.

 抄袭美团界面
 图片一定要设置高度，否则是什么都不会出现的。
 我现在用的界面是iphone6的，尺寸设定应该是375*667(ip5:320*568,ip6p:414*736)，顶部状态栏高度为20，抄袭的界面来自于美团的手机网站，它上面的尺寸用在这里要减一半，比如网站图标是80高度，那么这里要改成40.
 美团的最开始8个图标使用的图标字体，这里搞不来，只有以其他图片代替。
 flex属性会影响图片的宽高值，比如它觉得图片会占据右边的50%，设置的宽高值不够填满，会强行放大图片，所以不要放到image属性里面，在外面再搭个view包进去。
 在使用了justify-content这个属性的时候，子元素不要添加flex属性，否则无法按属性排列。
 使用alignItems属性时候小心，用了之后其子元素（如果只有1个子元素）的高度无法撑满，其子元素高度由自身内容而定。
 界面的代码有点繁杂，borderall属性是用来检查我弄出来多界面占据多位置究竟对不对。
 **/


'use strict';

var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    Image,
    } = React;



var layoutTest03 = React.createClass({

    render: function() {
        return (
            <View style={{flex:1,paddingTop:20,backgroundColor:'#f0efed'}}>
                <View style ={[styles.mthead,styles.mtcolumn,styles.mtflexone]}>
                    <View style={[styles.mtrow,styles.mtflexone]}>
                        <View style={styles.headitem}>
                            <Image style={[styles.headitemimg,]} source={{uri:'http://ms0.meituan.net/touch/img/icon-sm.png'}}></Image>
                            <Text style={styles.headitemtext}>美食</Text>
                        </View>
                        <View style={styles.headitem}>
                            <Image style={[styles.headitemimg,]} source={{uri:'http://ms0.meituan.net/touch/img/icon-sm.png'}}></Image>
                            <Text style={styles.headitemtext}>电影</Text>
                        </View>
                        <View style={styles.headitem}>
                            <Image style={[styles.headitemimg,]} source={{uri:'http://ms0.meituan.net/touch/img/icon-sm.png'}}></Image>
                            <Text style={styles.headitemtext}>酒店</Text>
                        </View>
                        <View style={styles.headitem}>
                            <Image style={[styles.headitemimg,]} source={{uri:'http://ms0.meituan.net/touch/img/icon-sm.png'}}></Image>
                            <Text style={styles.headitemtext}>Ktv</Text>
                        </View>

                    </View>
                    <View style={[styles.mtrow,styles.mtflexone,]}>
                        <View style={styles.headitem}>
                            <Image style={[styles.headitemimg,]} source={{uri:'http://ms0.meituan.net/touch/img/icon-sm.png'}}></Image>
                            <Text style={styles.headitemtext}>今日新单</Text>
                        </View>
                        <View style={styles.headitem}>
                            <Image style={[styles.headitemimg,]} source={{uri:'http://ms0.meituan.net/touch/img/icon-sm.png'}}></Image>
                            <Text style={styles.headitemtext}>丽人</Text>
                        </View>
                        <View style={styles.headitem}>
                            <Image style={[styles.headitemimg,]} source={{uri:'http://ms0.meituan.net/touch/img/icon-sm.png'}}></Image>
                            <Text style={styles.headitemtext}>周边游</Text>
                        </View>
                        <View style={styles.headitem}>
                            <Image style={[styles.headitemimg,]} source={{uri:'http://ms0.meituan.net/touch/img/icon-sm.png'}}></Image>
                            <Text style={styles.headitemtext}>休闲娱乐</Text>
                        </View>
                    </View>
                </View>
                <View style ={[styles.mtmid,styles.mtrow,styles.mtflexone]}>
                    <View style={[styles.midleft]}>
                        <View style={styles.headitem}>
                            <Text style={[styles.textcenter,styles.font18,styles.greenfont]}>我们约吧</Text>
                            <Text style={styles.textcenter}>恋人家人好朋友</Text>
                            <Image style={[styles.midleftimg,]} source={{uri:'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>

                        </View>
                    </View>
                    <View style={[styles.midright,styles.mtcolumn,]}>
                        <View style={[styles.headitem,styles.mtrow,styles.borderl,styles.borderb]}>
                            <View style={styles.headitem}>
                                <Text style={[styles.textcenter,styles.font18,styles.orangefont]}>低价超值</Text>
                                <Text style={styles.textcenter}>十元惠生活</Text>
                            </View>
                            <View style={styles.headitem}>
                                <Image style={[styles.midrightupimg,]} source={{uri:'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}></Image>
                            </View>

                        </View>
                        <View style={[styles.mtflexone,styles.mtrow]}>
                            <View style={[styles.headitem,styles.borderl,{justifyContent:'center'}]}>
                                <Text style={[styles.textcenter,styles.font18,styles.pinkfont]}>聚餐宴请</Text>
                                <Text style={[styles.textcenter,]}>朋友家人常聚聚</Text>
                                <Image style={[styles.midrightdownimg,]} source={{uri:'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}></Image>
                            </View>
                            <View style={[styles.headitem,styles.borderl]}>
                                <Text style={[styles.textcenter,styles.font18,styles.yellowfont]}>名店抢购</Text>
                                <Text style={[styles.textcenter,]}>即将开始</Text>
                                <Text style={[styles.textcenter,]}>倒计时</Text>
                            </View>
                        </View>

                    </View>

                </View>
                <View style ={[styles.mtfoot,styles.mtflexone,styles.mtcolumn]}>
                    <View style={[styles.mtflexone,styles.mtrow,styles.borderb]}>
                        <View style={[styles.headitem,styles.mtrow,styles.borderl]}>
                            <View style={styles.headitem}>
                                <Text style={[styles.textcenter,styles.font18,styles.orangefont]}>一元肯德基</Text>
                                <Text style={styles.textcenter}>新用户专享</Text>
                            </View>
                            <View style={styles.headitem}>
                                <Image style={[styles.footimg,]} source={{uri:'http://p0.meituan.net/280.0/groupop/9aa35eed64db45aa33f9e74726c59d938450.png'}}></Image>
                            </View>
                        </View>
                        <View style={[styles.headitem,styles.mtrow,styles.borderl]}>
                            <View style={styles.headitem}>
                                <Text style={[styles.textcenter,styles.font18,styles.yellowfont]}>新用户惊喜</Text>
                                <Text style={styles.textcenter}>大餐1折起</Text>
                            </View>
                            <View style={styles.headitem}>
                                <Image style={[styles.footimg,]} source={{uri:'http://p0.meituan.net/280.0/groupop/970f07317bc61b8072b91843f1de5bf38401.png'}}></Image>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.mtflexone,styles.mtrow]}>
                        <View style={[styles.headitem,styles.mtrow,,styles.borderl]}>
                            <View style={styles.headitem}>
                                <Text style={[styles.textcenter,styles.font18,styles.orangefont]}>新用户专享</Text>
                                <Text style={styles.textcenter}>立减15元观影</Text>
                            </View>
                            <View style={styles.headitem}>
                                <Image style={[styles.footimg,]} source={{uri:'http://p0.meituan.net/280.0/groupop/9335fa9e7fc1167a70dcf5d13a315d4342169.png'}}></Image>
                            </View>
                        </View>
                        <View style={[styles.headitem,styles.mtrow,styles.borderl]}>
                            <View style={styles.headitem}>
                                <Text style={[styles.textcenter,styles.font18,styles.yellowfont]}>温泉滑雪季</Text>
                                <Text style={styles.textcenter}>最高立减25元</Text>
                            </View>
                            <View style={styles.headitem}>
                                <Image style={[styles.footimg,]} source={{uri:'http://p0.meituan.net/280.0/groupop/00e43cb051a5878e7fb4cc9c1c0b57fa29630.jpg'}}></Image>
                            </View>
                        </View>
                    </View>

                </View>
            </View>

        );
    }
});

var styles = StyleSheet.create({
    mtflexone:{
        flex:1,
    },
    mthead:{
        backgroundColor:'white',
        height:160,
        marginBottom:10,
    },
    mtcolumn:{
        flexDirection:'column',

    },
    mtrow:{
        flexDirection:'row',
    },
    headitem:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    headitemimg:{
        height:40,
        width:40,
    },
    headitemtext:{
        paddingTop:10,
    },
    textcenter:{
        marginLeft:10,
    },

    mtmid:{
        height:160,
        marginBottom:10,
        backgroundColor:'white',
    },
    midleft:{
        flex:1,
    },
    midright:{
        flex:2
    },

    midleftimg:{
        height:88,
        width:88,
    },
    midrightupimg:{
        height:65,
        width:85,

    },
    midrightdownimg:{
        height:40,
        width:40,

    },


    mtfoot:{
        height:160,
        backgroundColor:'white',
        justifyContent:'flex-start',
    },
    footimg:{
        height:65,
        width:65,
    },

    font18:{
        fontSize:18,
    },

    greenfont:{
        color:'#55a40f',

    },
    orangefont:{
        color:'#ff3f0d',
    },
    pinkfont:{
        color:'#f742a0',
    },
    yellowfont:{
        color:'#ff8601',
    },

    borderl:{
        borderLeftWidth:1,
        borderLeftColor:'#f0efed',


    },
    borderb:{
        borderBottomWidth:1,
        borderBottomColor:'#f0efed',

    },
    borderall:{
        borderWidth:2,
        borderColor:'red',
        backgroundColor:'blue',

    },




})

module.exports = layoutTest03;