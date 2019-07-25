import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class RegisterScreen extends Component {
    render() {
        return (
            <View>
                <Text> RegisterScreen </Text>
            </View>
        )
    }
}
RegisterScreen.navigationOptions=({navigate})=>{
    return {
        title:'Register',
        headerStyle:{
            backgroundColor:'#119CED'
        },
        headerTinColorL:'#FFFFFF',
        headerTitleStyle: {color:'#fff'},
        headerBackTitle:'',
       
    }
}