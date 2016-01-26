/**
 Created by yili on 1/14/16.
 抄袭官网指南，主要学习listview。
 如果想要影响listview里面到内容排列样式，比如你想里面的内容是横着排列到（用flexdirection：row属性影响），请使用contentContainerStyle属性而不是style。
 我之前用的是es5的写法，抄到官网指南又是es6的，所以会有点混乱。

 继续研究 listview，这次主要是this的作用域问题，首先，这是es6的写法，之前用es5写，先写好renderRow={this.renderMovie)},然后在renderMovie里面触发pressme的回调函数，回调函数里面的this会默认绑定为最外围的（这里也就是layoutTest07）的作用域，我们可以直接在下面写pressme方法，回调函数是可以直接调用的。
 而现在es6默认this都是自己函数作用域的，比如这里如果不改代码，renderMovie里面的this是找不到pressme函数的（因为是在外面的），所以需要手动把外围的this作用域给绑定到renderMovie里面去，代码为renderRow={this.renderMovie.bind(this)}。这样才能正常操作。
 同理，如果想在pressme里面调用外围（layoutTest07）的this.props的navigator属性，那么必须要先绑一下：this.pressme = this.pressme.bind(this)，不绑的话，pressme里面的props也没东西。


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

import layoutTest06 from './layoutTest06.js';

var screenW = Dimensions.get('window').width;



var API_KEY = '7waqfqbprs7pajbz28mqf6vz';
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
var PAGE_SIZE = 25;
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
var REQUEST_URL = API_URL + PARAMS;

export default class layoutTest07 extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
            loaded: false,
        };

        this.pressme = this.pressme.bind(this);

    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
                    loaded: true,
                });
            })
            .done();
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <View>

                <Text>Cala me back</Text>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMovie.bind(this)}
                    contentContainerStyle={styles.listView}
                    />
            </View>
        );
    }

    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }

    renderMovie(movie) {
        return (
            <View style={[styles.container,styles.borderall]}>
                <TouchableOpacity onPress={this.pressme} >
                    <Image
                        source={{uri: movie.posters.thumbnail}}
                        style={styles.thumbnail}
                        />
                    <View style={styles.rightContainer}>
                        <Text style={styles.title}>{movie.title}</Text>
                    </View>
                    <View style={styles.rightContainer}>
                        <Text style={styles.year}>{movie.year}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    pressme(){
        const { navigator } = this.props;

        if(navigator) {
            navigator.push({
                name: 'layoutTest06',
                component: layoutTest06,
            })
        }
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

module.exports = layoutTest07;