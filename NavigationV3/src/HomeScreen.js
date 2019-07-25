import React, { Component } from 'react'
import { Text, View,Button,TouchableOpacity,Image} from 'react-native'

export default class HomeScreen extends Component {

    onCilckLogin = () =>{
        this.props.navigation.navigate('AppScene')
    }
    onRegister = () =>{
        this.props.navigation.navigate('Register')
    }
    render() {
        return (
            <View
                style={{flex:1,flexDirection:'column',justifyContent:'center'}}
            >
                <Button title='Login' onPress={this.onCilckLogin} />
                <Button title='Register' onPress={this. onRegister} />
            </View>
        )
    }
}
HomeScreen.navigationOptions=({navigate})=>{
    return {
        title:'CodeMobiles',
        headerStyle:{
            backgroundColor:'#119CED'
        },
        headerTinColorL:'#FFFFFF',
        headerTitleStyle: {color:'#fff'},
        headerBackTitle:'',
        headerRight:(
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => alert('www.codemobiles.com')}
                style={{padding:10}} >
                <Image 
                source={require('./assets/img/avatar.png')}
                style={{width:30, height:30}} />
            </TouchableOpacity>
        )
    }
}
