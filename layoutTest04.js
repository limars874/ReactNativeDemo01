/**
 Created by yili on 1/14/16.
 继续抄袭美团界面
 实现自定义组件（略微少点view的重复度）
 实现2个较为重复view内容的自定义组件，用props传image的uri属性注意大括号数量。

 定义一个数组把数据链接都丢进去，在组件那边直接引用，引用时需要用大括号包住。



 **/


'use strict';

var React = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    Image,
    } = React;


var ItemData1 = [
    {name:'美食',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png'},
    {name:'电影',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png'},
    {name:'酒店',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png'},
    {name:'KTV',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png'},
    {name:'今日新单',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png'},
    {name:'丽人',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png'},
    {name:'周边游',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png'},
    {name:'休闲娱乐',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png'},
];

var test = ItemData1[0]

var ListItemStyle1 = React.createClass({
    render: function(){
        return(
            <View style={styles.headitem}>
                <Image style={[styles.headitemimg,]} source={{uri:this.props.imgurl}}></Image>
                <Text style={styles.headitemtext}>{this.props.name}</Text>
            </View>
        );
    }
});

var ListItemStyle2 = React.createClass({
    render:function(){
        return(
            <View style={[styles.headitem,styles.mtrow,styles.borderl]}>
                <View style={styles.headitem}>
                    <Text style={[styles.textcenter,styles.font18,styles.orangefont]}>{this.props.bigname}</Text>
                    <Text style={styles.textcenter}>{this.props.smallname}</Text>
                </View>
                <View style={styles.headitem}>
                    <Image style={[styles.footimg,]} source={this.props.imguri}></Image>
                </View>
            </View>
        );
    }
});

var exampleimg = {uri:'http://ms0.meituan.net/touch/img/icon-sm.png'};

var layoutTest03 = React.createClass({

    render: function() {
        return (
            <View style={{flex:1,paddingTop:20,backgroundColor:'#f0efed'}}>
                <View style ={[styles.mthead,styles.mtcolumn,styles.mtflexone]}>
                    <View style={[styles.mtrow,styles.mtflexone]}>
                        <ListItemStyle1 imgurl= {ItemData1[0].imgurl} name={ItemData1[0].name} />
                        <ListItemStyle1 imgurl={ItemData1[1].imgurl} name={ItemData1[1].name} />
                        <ListItemStyle1 imgurl={ItemData1[2].imgurl} name={ItemData1[2].name} />
                        <ListItemStyle1 imgurl={ItemData1[3].imgurl} name={ItemData1[3].name} />
                    </View>
                    <View style={[styles.mtrow,styles.mtflexone,]}>
                        <ListItemStyle1 imgurl={ItemData1[4].imgurl} name={ItemData1[4].name} />
                        <ListItemStyle1 imgurl={ItemData1[5].imgurl} name={ItemData1[5].name} />
                        <ListItemStyle1 imgurl={ItemData1[6].imgurl} name={ItemData1[6].name} />
                        <ListItemStyle1 imgurl={ItemData1[7].imgurl} name={ItemData1[7].name} />
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
                        <ListItemStyle2 bigname="一元肯德基" smallname="新用户专享" imguri={{uri:'http://p0.meituan.net/280.0/groupop/9aa35eed64db45aa33f9e74726c59d938450.png'}} />
                        <ListItemStyle2 bigname="新用户惊喜" smallname="大餐1折起" imguri={{uri:'http://p0.meituan.net/280.0/groupop/970f07317bc61b8072b91843f1de5bf38401.png'}} />
                    </View>
                    <View style={[styles.mtflexone,styles.mtrow]}>
                        <ListItemStyle2 bigname="新用户专享" smallname="立减15元观影" imguri={{uri:'http://p0.meituan.net/280.0/groupop/9335fa9e7fc1167a70dcf5d13a315d4342169.png'}} />
                        <ListItemStyle2 bigname="温泉滑雪季" smallname="最高立减25元" imguri={{uri:'http://p0.meituan.net/280.0/groupop/00e43cb051a5878e7fb4cc9c1c0b57fa29630.jpg'}} />
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