/**
 Created by yili on 1/14/16.
 继续抄袭美团界面 这是个新界面
 特点是带了个tab页，用来写navigator本页面跳转



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
    } = React;


var screenW = Dimensions.get('window').width;



var lowpriceitem = [
    {title:'任吉老砂锅',intro:'[观音桥]双人套餐，提供免费WiFi',price:'39.8',special:'立减10元',sales:'19',imgurl:'http://p1.meituan.net/200.0/deal/c3f56d253b6481ca15b5075b85e56a6299197.jpg'},
    {title:'渣渣面',intro:'[观音桥]精品小面1份，提供免费WiFi',price:'5.8',special:'立减2元',sales:'34',imgurl:'http://p0.meituan.net/200.0/deal/3674dc20aba5d519c13f7991ca0ed30f105182.jpg@0_25_983_595a%7C388h_640w_2e_90q'},
    {title:'果氏100',intro:'[5店通用]鲜榨果汁17选1，免费WiFi',price:'7.9',special:'1元抢',sales:'28635',imgurl:'http://p1.meituan.net/200.0/deal/91d8d9069f5e5295e95d791364f740bf128142.jpg'},
    {title:'美丽造型',intro:'[2店通用]彩丝接发红色一束男女不限男女不限发长不限，提供免费WiFi',price:'0.11',special:'立减20',sales:'500',imgurl:'http://p1.meituan.net/200.0/deal/709e77654fdee096dc290b76d4619d1317554.jpg'},
    {title:'留香排骨',intro:'[5店通用]留香排骨1份',price:'14.9',special:'立减10',sales:'99355',imgurl:'http://p1.meituan.net/200.0/deal/0e97bd79d1a9372a65aa8aa23f6bd2fc39914.jpg'},
    {title:'汉丽轩',intro:'[大学城]单人自助晚餐，免费停车位+WiFi，有烤肉，有海鲜',price:'43.9',special:'立减20',sales:'61838',imgurl:'http://p0.meituan.net/200.0/deal/__10132524__2788740.jpg'},
    {title:'豆乐元',intro:'[13店通用]单次门票1张，给孩子一个快乐的童年时光',price:'21.8',special:'立减20',sales:'31350',imgurl:'http://p1.meituan.net/200.0/deal/__10834316__9620657.jpg'},
    {title:'榴莲一品',intro:'[万达广场]班戟2选1，提供免费WiFi',price:'6.9',special:'1元抢',sales:'18733',imgurl:'http://p0.meituan.net/200.0/deal/177d2c70a4aeea018213cb2b25a3939470857.jpg'},
    {title:'贝尔麦莎',intro:'[50店通用]代金券1张，可自由叠加使用',price:'17.8',special:'立减10',sales:'111573',imgurl:'http://p0.meituan.net/200.0/deal/949b2f9b06fd428caf105c4788b1bf05568519.jpg'},

];






var layoutTest06 = React.createClass({

    presscq:function(){
        console.log('press cq');

    },

    render: function() {

        return (
            <ScrollView style={[styles.scrollview,]}>
                <View style={{flex:1,paddingTop:20,backgroundColor:'#f0efed'}}>
                    <View style={[styles.mtsearch,styles.mtrow,{alignItems:'center',backgroundColor:'#68dbce'}]}>
                        <TouchableOpacity onPress={()=>this.presscq()}>
                            <View style={[{width:50,alignItems:'center',flexDirection:'row',marginLeft:10,},]}>
                                <Icon
                                    name='ion|android-arrow-back'
                                    size={30}
                                    color='white'
                                    style={{width:30,height:30}}
                                    />
                            </View>
                        </TouchableOpacity>

                        <View style={[styles.mtflexone,styles.mtcenter]}>
                            <Text style={[styles.white,styles.font18]}>低价超值</Text>
                        </View>
                        <View style={[{width:50,alignItems:'center'},]}>
                            <Icon
                                name='ion|ios-search'
                                size={25}
                                color='white'
                                style={{width:25,height:25}}
                                />
                            <Text style={{color:'white',fontSize:10,fontWeight:'bold'}}>搜索</Text>
                        </View>
                    </View>

                    <View style={[styles.tabbar,styles.mtrow,styles.mtcenter,{backgroundColor:'white'}]}>
                        <View style={[styles.mtcenter,styles.mtflexone,{borderRightWidth:1,borderRightColor:'f0efed'}]}>
                            <Text>全部</Text>
                        </View>
                        <View style={[styles.mtcenter,styles.mtflexone,{borderRightWidth:1,borderRightColor:'f0efed'}]}>
                            <Text>小吃快餐</Text>
                        </View>
                        <View style={[styles.mtcenter,styles.mtflexone,{borderRightWidth:1,borderRightColor:'f0efed'}]}>
                            <Text>蛋糕甜点</Text>
                        </View>
                        <View style={[styles.mtcenter,styles.mtflexone,{borderRightWidth:1,borderRightColor:'f0efed'}]}>
                            <Text>KTV</Text>
                        </View>
                        <View style={[styles.mtcenter,styles.mtflexone,{borderRightWidth:1,borderRightColor:'f0efed'}]}>
                            <Text>丽人</Text>
                        </View>
                    </View>

                    <View style={[styles.item,styles.mtcenter,{backgroundColor:'white',marginTop:10}]}>
                        <Image style={[styles.img,]} source={{uri:'http://p0.meituan.net/122.74/deal/ccc7eebec29c11e0b6bc44029b3ba457245092.jpg'}}></Image>
                        <View style={[styles.title,{marginBottom:5,marginTop:5,}]}><Text>[90件包邮] 利铺面...</Text></View>
                        <View style={[styles.mtrow]}>
                            <Text style={[styles.green,{fontWeight:'bold',fontSize:20}]}>0.98</Text>
                            <Text style={[styles.green,{marginTop:8},styles.font12]}>元</Text>
                            <Text style={[{fontSize:10,marginTop:10,marginLeft:5,textDecorationLine:'line-through'}]}>4.98元</Text>
                            <Text style={[{fontSize:12,marginTop:10,marginLeft:5,color:'red'}]}>3.9分</Text>
                        </View>
                    </View>











                </View>
            </ScrollView>

        );
    }
});

var styles = StyleSheet.create({
    mtflexone: {
        flex: 1,
    },


    mtcolumn: {
        flexDirection: 'column',

    },
    mtrow: {
        flexDirection: 'row',
    },

    mtcenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    mtsearch:{
        height:50,
    },

    font18: {
        fontSize: 18,
    },
    font14: {
        fontSize: 14,
    },
    font12: {
        fontSize: 12,
    },

    white: {
        color:'white',
    },

    green: {
        color: '#55a40f',

    },
    orange: {
        color: '#ff3f0d',
    },
    pink: {
        color: '#f742a0',
    },
    yellow: {
        color: '#ff8601',
    },

    borderall: {
        borderWidth: 1,
        borderColor: 'red',
    },


    scrollview: {
        height: 3000,
    },

    tabbar:{
        height:48,
    },

    item:{
        height:140,
        width:145,
    },
    img:{
        height:85,
        width:145,
    },
    title:{
        backgroundColor:'white',
    },

});

module.exports = layoutTest06;