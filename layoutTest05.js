/**
 Created by yili on 1/14/16.
 继续抄袭美团界面
 想让下半部份6个组件自行排列，左右左右左右 这样，在一行排不下去自动折行，需要使用flexWrap:'wrap'这个属性，让子元素折行，但子元素不能添加flex属性，添加了折行就无效了,而且这样子元素的宽度也无效了。但这样有个问题，屏幕宽度本来是不确定的，怎么保证你的组件宽度可以平分呢。使用Dimensions的API获取屏幕宽度进行计算即可。

 循环显示：先定义一个子组件的样式，然后再定义一个函数用于创建这个子组件，然后再使用数组的map方法循环显示6个组件。定义函数的时候注意要多搞个参数i，然后在后面的实现里面写上key={i},虽然这个key完全用不上，但不写的话，会弹个警告出来，表示你没有用这个key。

 内容太多，添加ScrollView进行包括，文档说的是必须有一个确定的高度才能正常工作，要么直接设定高度，要么确定所有父容器绑定了高度。不能忘记使用flex：1来确定其子组件版面占用。

 添加了一个搜索框，使用TextInput组件
 实现iconfont功能
 https://github.com/corymsmith/react-native-icons
 按照说明：首先npm install，然后在xcode里面把ReactNativeIcons.xcodeproj添加到Libraries，然后把libReactNativeIcons.a添加到Build Phases ➜ Link Binary With Libraries里面，再把所需要到字体，添加到Copy Bundle Resources（这个就在刚才那个link选项虾面）
 我现在只加了2个，一个fontawesome（  http://fortawesome.github.io/Font-Awesome/icons/  ），一个ionicons（  http://ionicons.com/  ），用法如下：name='fontawesome|facebook-square'或者name='ion|ios-home-outline'
 <Icon
 name={this.props.iconname}
 size={25}
 color='white'
 style={{width:25,height:25}}
 />
 style里面必须给尺寸，否则什么都显示不出来，style相当于是背景，可以使用JSX属性修改颜色形状等

 测试onpress属性以及相关回调函数的使用，还有和TouchableOpacity组件调用（其实如果不是需要点击画面效果可以不要）
 createClass新建的组件名称首字母一定要大写。


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

var ItemData1 = [
    {name:'美食',iconname:'ion|fork',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#FF8822'},
    {name:'电影',iconname:'ion|ios-film-outline',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#EA6644'},
    {name:'酒店',iconname:'ion|ios-home-outline',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#7788F2'},
    {name:'KTV',iconname:'ion|mic-b',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#f82'},

    {name:'代金劵',iconname:'ion|ios-star-outline',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#2bb2a3'},
    {name:'小吃快餐',iconname:'ion|woman',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#FF7360'},
    {name:'甜点饮品',iconname:'ion|android-car',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#66CCEE'},
    {name:'足疗按摩',iconname:'ion|android-bar',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#F7BA5B'},

    {name:'今日新单',iconname:'ion|ios-star-outline',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#2bb2a3'},
    {name:'丽人',iconname:'ion|woman',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#FF7360'},
    {name:'周边游',iconname:'ion|android-car',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#66CCEE'},
    {name:'休闲娱乐',iconname:'ion|android-bar',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#F7BA5B'},

    {name:'生活服务',iconname:'ion|fork',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#FF8822'},
    {name:'旅游',iconname:'ion|ios-film-outline',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#EA6644'},
    {name:'全部分类',iconname:'ion|ios-home-outline',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#7788F2'},
    {name:'购物',iconname:'ion|mic-b',imgurl:'http://ms0.meituan.net/touch/img/icon-sm.png',iconbackcolor:'#f82'},
];


var ItemData2 = [
    {bigname:'一元肯德基',smallname:'新用户专享',imgurl:'http://p0.meituan.net/280.0/groupop/9aa35eed64db45aa33f9e74726c59d938450.png'},
    {bigname:'新用户惊喜',smallname:'大餐1折起',imgurl:'http://p0.meituan.net/280.0/groupop/970f07317bc61b8072b91843f1de5bf38401.png'},
    {bigname:'新用户专享',smallname:'立减15元观影',imgurl:'http://p0.meituan.net/280.0/groupop/9335fa9e7fc1167a70dcf5d13a315d4342169.png'},
    {bigname:'温泉滑雪季',smallname:'最高立减25元',imgurl:'http://p0.meituan.net/280.0/groupop/00e43cb051a5878e7fb4cc9c1c0b57fa29630.jpg'},
    {bigname:'前方熊出没',smallname:'合家观影9.9起',imgurl:'http://p1.meituan.net/280.0/groupop/bc04c217476bc5dd864396c66021d33d11768.jpg'},
    {bigname:'热门团购',smallname:'大家都在买什么',imgurl:'http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png'},

];

var guessitem = [
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



var ListItemStyle1 = React.createClass({
    pressonguess:function(title){
        console.log('click guess ' + title);

    },

    render: function(){
        return(
            <TouchableOpacity
                onPress={()=>this.pressonguess(this.props.name)}
                style={[{width:screenW/4,height:80,alignItems:'center',justifyContent:'center'}]}>
                <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Icon
                        name={this.props.iconname}
                        size={25}
                        color='white'
                        style={{backgroundColor:this.props.iconbackcolor,width:30,height:30,borderRadius:15,alignItems:'center',justifyContent:'center'}}
                        />
                    <Text style={styles.headitemtext}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
});

var ListItemStyle2 = React.createClass({
    pressonguess:function(title){
        console.log('click guess ' + title);

    },

    render:function(){
        return(
            <TouchableOpacity onPress={()=>this.pressonguess(this.props.bigname)}>
                <View style={[styles.width180,{width:screenW/2}]}>
                    <View style={[styles.headitem,styles.mtrow,styles.borderl,styles.width180]}>
                        <View style={styles.headitem}>
                            <Text style={[styles.textcenter,styles.font18,styles.orangefont]}>{this.props.bigname}</Text>
                            <Text style={[styles.textcenter,styles.font12]}>{this.props.smallname}</Text>
                        </View>
                        <View style={styles.headitem}>
                            <Image style={[styles.footimg,]} source={{uri:this.props.imgurl}}></Image>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
});

var GuessStyle = React.createClass({

    pressonguess:function(title){
        console.log('click guess ' + title);

    },



    render:function(){
        return(
            <TouchableOpacity
                onPress = {()=>this.pressonguess(this.props.title)}>
                <View style={[styles.guesslikeitem,]} >
                    <View style={[styles.mtrow]}>
                        <View style={[styles.guessimgae,styles.guesstext]}>
                            <Image style={[styles.guessimgae]} source={{uri:this.props.imgurl}}></Image>
                        </View>
                        <View style={[styles.mtcolumn,{flex:1,height:100,justifyContent:'space-between'}]}>
                            <Text style={[styles.guesstext,{marginTop:5}]}>{this.props.title}</Text>
                            <Text style={[styles.font12,styles.guesstext,{marginTop:5,}]}>{this.props.intro}</Text>
                            <View style={[styles.guesstext,styles.mtrow,{justifyContent:'space-between'}]}>
                                <View style={styles.mtrow}>
                                    <Text style={[styles.font18,{color:'#06c1ae'}]}>{this.props.price}</Text>
                                    <Text style={[styles.font12,{color:'#06c1ae',marginTop:8}]}>元</Text>
                                    <Text style={[styles.font12,{color:'#f90',marginTop:5,marginLeft:5,borderWidth:1,borderColor:'#f90'}]}>{this.props.special}</Text>
                                </View>
                                <Text style={[styles.font12,{marginRight:5,marginTop:5}]}>已售{this.props.sales}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }
});

var createItem1 = (obj,i) => <ListItemStyle1 key={i} name={obj.name} iconname={obj.iconname} imgurl={obj.imgurl} iconbackcolor={obj.iconbackcolor} />;
var createItem2 = (obj,i) => <ListItemStyle2 key={i} bigname={obj.bigname} smallname={obj.smallname} imgurl={obj.imgurl} />;
var createGuess = (obj,i) => <GuessStyle key={i} title={obj.title} intro={obj.intro} price={obj.price} special={obj.special} sales={obj.sales} imgurl={obj.imgurl} />;




var layoutTest03 = React.createClass({

    presscq:function(){
        console.log('press cq');

    },

    render: function() {

        return (
            <ScrollView style={[styles.scrollview,]}>
                <View style={{flex:1,paddingTop:20,backgroundColor:'#f0efed'}}>
                    <View style={[styles.mtsearch,styles.mtrow,{alignItems:'center'}]}>
                        <TouchableOpacity onPress={()=>this.presscq()}>
                            <View style={[{width:70,alignItems:'center',flexDirection:'row',marginLeft:10,},]}>
                                <Text style={[styles.font18,{color:'white'}]}>重庆</Text>
                                <Icon
                                    name='ion|chevron-down'
                                    size={10}
                                    color='white'
                                    style={{width:10,height:10,marginLeft:5}}
                                    />
                            </View>
                        </TouchableOpacity>

                        <View style={[styles.mtflexone,{backgroundColor:'#68dbce',height:30,borderRadius:5,justifyContent:'center',}]}>
                            <TextInput
                                autoCapitalize="words"
                                style={{backgroundColor:'#68dbce',height:28,borderRadius:5,marginLeft:10,}}
                                />
                        </View>
                        <View style={[{width:50,alignItems:'center'},]}>
                            <Icon
                                name='ion|ios-person-outline'
                                size={30}
                                color='white'
                                style={{width:30,height:20}}
                                />
                            <Text style={{color:'white',fontSize:10,fontWeight:'bold'}}>我的</Text>
                        </View>
                    </View>

                    <View style={[styles.mthead,styles.mtrow,{flexWrap:'wrap',width:screenW*2}]}>
                        {ItemData1.map(createItem1)}
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
                            <TouchableOpacity
                                onPress = {()=>console.log('click is ok')}>
                                <View style={[styles.headitem,styles.mtrow,styles.borderl,styles.borderb]}>
                                    <View style={styles.headitem}>
                                        <Text style={[styles.textcenter,styles.font18,styles.orangefont]}>低价超值</Text>
                                        <Text style={styles.textcenter}>十元惠生活</Text>
                                    </View>
                                    <View style={styles.headitem}>
                                        <Image style={[styles.midrightupimg,]} source={{uri:'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}></Image>
                                    </View>
                                </View>
                            </TouchableOpacity>


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
                    <View style ={[styles.mtfoot,styles.mtflexone,styles.mtrow,{flexWrap:'wrap'}]}>
                        {ItemData2.map(createItem2)}
                    </View>
                    <View style ={[styles.mtflexone,styles.mtcolumn,]}>
                        <View style={[styles.guesslikeitem,]} >
                            <Text style={styles.font14}>   猜你喜欢</Text>
                        </View>
                        {guessitem.map(createGuess)}
                        <View style={[styles.guesslikeitem,styles.mtrow,{justifyContent:'space-between',alignItems:'center'}]} >
                            <Text style={[styles.font14,{color:'#06c1ae'}]}>   查看全部团购</Text>
                            <Text style={[styles.font18,{color:'#06c1ae',marginRight:10}]}>></Text>
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


    mtsearch:{
        backgroundColor: '#06c1ae',
        height:50,

    },


    mthead: {
        backgroundColor: 'white',
        height: 160,
        marginBottom: 10,
    },
    mtcolumn: {
        flexDirection: 'column',

    },
    mtrow: {
        flexDirection: 'row',
    },
    headitem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headitemimg: {
        height: 40,
        width: 40,
    },
    headitemtext: {
        marginTop: 10,
    },
    textcenter: {
        marginLeft: 10,
    },

    mtmid: {
        height: 200,
        marginBottom: 10,
        backgroundColor: 'white',
    },
    midleft: {
        flex: 1,
    },
    midright: {
        flex: 2
    },

    midleftimg: {
        height: 88,
        width: 88,
    },
    midrightupimg: {
        height: 65,
        width: 85,
    },
    midrightdownimg: {
        height: 40,
        width: 40,
    },

    mtfoot: {
        backgroundColor: 'white',
        marginBottom: 10
    },
    footimg: {
        height: 65,
        width: 65,
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

    greenfont: {
        color: '#55a40f',

    },
    orangefont: {
        color: '#ff3f0d',
    },
    pinkfont: {
        color: '#f742a0',
    },
    yellowfont: {
        color: '#ff8601',
    },

    borderl: {
        borderLeftWidth: 1,
        borderLeftColor: '#f0efed',


    },
    borderb: {
        borderBottomWidth: 1,
        borderBottomColor: '#f0efed',

    },
    borderall: {
        borderWidth: 1,
        borderColor: 'red',


    },
    width180: {
        height: 75,
    },
    scrollview: {
        height: 3000,
    },


    guesslike: {
        backgroundColor: 'f0efed',
        marginBottom: 10
    },
    guesslikeitem: {
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 1,
    },
    guessimgae: {
        width: 100,
        height: 100,

    },
    guesstext: {

        marginLeft:10,
    },


});

module.exports = layoutTest03;