import React, { Component } from 'react'
import { Text, View ,Button,AsyncStorage } from 'react-native'

export default class Tab1Screen extends Component {
    async componentDidMount(){
        let username = await AsyncStorage.getItem('username')
        alert(username)
    }
    onClickDetails=()=>{
        let item = {title:'codemobiles',url:'www.codemobiles.com'}
        this.props.navigation.navigate('Detail',{item})
    }
    render() {
        return (
            <View>
                <Text> Tab1Screen </Text>
                <Button
                    title="GO" onPress={this.onClickDetails}
                />
            </View>
        )
    }
}
