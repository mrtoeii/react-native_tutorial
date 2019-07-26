import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount(){
      let item = this.props.navigation.getParam('item')
      alert(JSON.stringify(item))
  }
  render() {
    return (
      <View>
        <Text> {DetailScreen} </Text>
      </View>
    );
  }
}
DetailScreen.navigationOptions=({navigate})=>{
    return {
        title:'CodeMobiles',
        headerStyle:{
            backgroundColor:'#119CED'
        },
        headerTinColorL:'#FFFFFF',
        headerTitleStyle: {color:'#fff'},
        headerBackTitle:''
    }
}
