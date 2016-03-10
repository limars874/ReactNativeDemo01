/**
 Created by yili on 1/14/16.
 继续抄袭美团界面 这是个新界面
 特点是带了个tab页，用来写navigator本页面跳转

 首先是个最笨的方法，写了两个几乎一样的组件，除了标签页样式和具体内容不一样外，然后通过navigator的方法来刷新页面，会闪,navigator的代码没有任何问题，但不是我想要的东西，看来这玩意儿只能用于跨页面的跳转，本页面的跳转不是这样的。
 换了个思路，点击按钮，重新刷新state，顺便测试刷新state功能。先给数据弄个cata类型值，每个按钮刷新出不同的类型到数据数组，再进行遍历输出界面。筛选数据见filterfood函数，当cata为0时输出所有数据。state里面有2个属性，一个cata值，一个是当前分类按钮下是否有下划线。然后给按钮绑定函数，函数重新设置state值进行刷新。



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
    } = React;


var screenW = Dimensions.get('window').width;



var lowpriceitem = [
    {title:'[90件包邮] 利铺面包干10g',cata:1,price:'0.98',special:'1.98元',score:'3.9分',imgurl:'http://p0.meituan.net/122.74/deal/ccc7eebec29c11e0b6bc44029b3ba457245092.jpg'},
    {title:'[80件包邮] 好时巧克力6g',cata:2,price:'0.48',special:'1.49元',score:'3.7分',imgurl:'http://p0.meituan.net/122.74/deal/7202a6486c94a4d9c0d952ee02a27f80266802.jpg'},
    {title:'[50件包邮] 越南G7咖啡16g',cata:3,price:'0.79',special:'2.8元',score:'4分',imgurl:'http://p0.meituan.net/122.74/deal/9b141286b76afdcfaefc5e1ed234296e166173.jpg'},
    {title:'[100件包邮] 沁足雅泡脚足浴粉',cata:4,price:'0.32',special:'3元',score:'4.1分',imgurl:'http://p0.meituan.net/122.74/deal/355faaf189ccb2da1275ae8a56b5c12c259284.jpg'},
    {title:'[10件包邮] LR兔羊毛保暖女袜',cata:2,price:'2.99',special:'2.8元',score:'3.6分',imgurl:'http://p0.meituan.net/122.74/deal/eadab6246becd11f85e6987d2890248d267452.jpg'},
    {title:'[8件包邮] 皇冠曲奇饼干72g',cata:2,price:'9.8',special:'10.8元',score:'3.9分',imgurl:'http://p0.meituan.net/122.74/deal/555dd5aa802ef0df25b6517acdcb0dca208784.jpg'},
    {title:'[重庆等] 佈麻佈辣精品冒菜',cata:1,price:'8.5',special:'40元',score:'3.7分',imgurl:'http://p0.meituan.net/122.74/deal/__35696900__2565612.jpg'},
    {title:'[7店通用] 一只酸奶牛',cata:3,price:'7.9',special:'10元',score:'4.3分',imgurl:'http://p1.meituan.net/122.74/deal/226415eab9838ad5385ffd9aa55e2c9150783.jpg'},
    {title:'[60件包邮] 智暖加大暖身贴暖宝',cata:4,price:'0.58',special:'3.5元',score:'4分',imgurl:'http://p1.meituan.net/122.74/deal/ede82d9b7ea4ba2a2116de069199f7a0196526.jpg'},

];




var SmallFoodView = React.createClass({
    goback(){
        this.props.navigator.push({name:"allfood"})

    },

    render(){
        return(
           <View>
           </View>
        )
    }

});


var AllFoodView = React.createClass({

    render(){
        return(
                <View style={[styles.item,{margin:10,backgroundColor:'white',alignItems:'center'}]}>
                    <Image style={[styles.img,]} source={{uri:this.props.imgurl}}></Image>
                    <View style={[styles.title,{marginBottom:5,marginTop:5,}]}><Text>{this.props.title.slice(0,11)+'...'}</Text></View>
                    <View style={[styles.mtrow]}>
                        <Text style={[styles.green,{fontWeight:'bold',fontSize:20}]}>{this.props.price}</Text>
                        <Text style={[styles.green,{marginTop:8},styles.font12]}>元</Text>
                        <Text style={[{fontSize:10,marginTop:10,marginLeft:5,textDecorationLine:'line-through'}]}>{this.props.special}</Text>
                        <Text style={[{fontSize:12,marginTop:10,marginLeft:5,color:'red'}]}>{this.props.score}</Text>
                    </View>
                </View>

        )

    }

});

var CreateAllFood = (obj,i) => <AllFoodView key={i} title={obj.title} cata={obj.cata} price={obj.price} special={obj.special}  score={obj.score} imgurl={obj.imgurl} />;
var filterfood = function (cata) {
    var filterfun = function (value,i,ar) {
        return (cata == 0)?true:(value.cata == cata);

    }
    return filterfun;
};

var layoutTest06 = React.createClass({
    getInitialState(){
        console.log('test 06 is init');
        return{
            lowpricecata:0,
            showborder:0
        };
    },


    fastfood(){
        this.setState({lowpricecata:1})
        this.setState({showborder:1})
        this.props.updateChange(2);
    },
    sweetfood(){
        this.setState({lowpricecata:2})
        this.setState({showborder:2})
        this.props.updateChange(3);
    },
    ktv(){
        this.setState({lowpricecata:3})
        this.setState({showborder:3})
        this.props.updateChange(4);
    },
    girl(){
        this.setState({lowpricecata:4})
        this.setState({showborder:4})
        this.props.updateChange(5);
    },
    all(){
        this.setState({lowpricecata:0})
        this.setState({showborder:0})
    },

    gobackButton: function() {
        const { navigator } = this.props;
        if(navigator) {

            navigator.pop();
        }
    },


    componentWillMount: function(){
        console.log('test06 componentWillMount is here');

    },

    componentDidMount: function() {
        console.log('test06 componentDidMount is here');
    },

    componentWillReceiveProps:function(nextprops){
        console.log('test06 componentWillReceiveProps is here');

    },

    shouldComponentUpdate:function(){
        console.log('test06 shouldComponentUpdate is here');
        return true;
    },

    componentWillUpdate:function(){
        console.log('test06 componentWillUpdate is here');

    },

    componentDidUpdate:function(){
        console.log('test06 componentDidUpdate is here');

    },

    componentWillUnmount:function(){
        console.log('test06 componentWillUnmount is here');

    },


    render: function() {

        return (

            <ScrollView style={[styles.scrollview,]}>
                <View style={{flex:1,paddingTop:20,backgroundColor:'#f0efed'}}>

                    <View style={[styles.mtsearch,styles.mtrow,{alignItems:'center',backgroundColor:'#68dbce'}]}>
                        <TouchableOpacity onPress={()=>this.gobackButton()} >
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
                        <TouchableOpacity onPress={()=>this.all()} style={[
                                    styles.mtcenter,
                                    styles.mtflexone,
                                    {borderRightWidth:1,
                                    borderRightColor:'f0efed',
                                    borderBottomWidth:(this.state.showborder==0)?2:0,
                                    borderBottomColor:'red',
                                    paddingBottom:(this.state.showborder==0)?10:0}]}>
                            <View >
                                <Text>全部</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.fastfood()}  style={[styles.mtcenter,styles.mtflexone,{borderRightWidth:1,borderRightColor:'f0efed',borderBottomWidth:(this.state.showborder==1)?2:0,borderBottomColor:'red',paddingBottom:(this.state.showborder==1)?10:0}]}>
                            <View >
                                <Text>小吃快餐</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.sweetfood()}  style={[styles.mtcenter,styles.mtflexone,{borderRightWidth:1,borderRightColor:'f0efed',borderBottomWidth:(this.state.showborder==2)?2:0,borderBottomColor:'red',paddingBottom:(this.state.showborder==2)?10:0}]}>
                            <View >
                                <Text>蛋糕甜点</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.ktv()}  style={[styles.mtcenter,styles.mtflexone,{borderRightWidth:1,borderRightColor:'f0efed',borderBottomWidth:(this.state.showborder==3)?2:0,borderBottomColor:'red',paddingBottom:(this.state.showborder==3)?10:0}]}>
                            <View >
                                <Text>KTV</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.girl()}  style={[styles.mtcenter,styles.mtflexone,{borderRightWidth:1,borderRightColor:'f0efed',borderBottomWidth:(this.state.showborder==4)?2:0,borderBottomColor:'red',paddingBottom:(this.state.showborder==4)?10:0}]}>
                            <View >
                                <Text>丽人</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={[styles.mtrow,{width:screenW,flexWrap:'wrap',justifyContent:'center'}]}>
                        {lowpriceitem.filter(filterfood(this.state.lowpricecata)).map(CreateAllFood)}
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