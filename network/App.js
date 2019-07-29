import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import axios from 'axios'
export default class App extends Component {

  fetchSomething(){
    fetch('https://facebook.github.io/react-native/movies.json')
    .then(result=>result.json())
    .then(jSonResult=>{
      alert('First Movie in Array: '+jSonResult.movies[0].title)
      console.log(jSonResult);
    })
    .catch(err=>{
      console.log(err);
      
    })
  }
  axiosSomething(){
    axios.get('https://facebook.github.io/react-native/movies.json')
    .then(result=>{
      alert(result.data.movies[0].title);
      console.log(result.data);
      
    })
    .catch(err=>{

    })
  }
  callGet(){
    //way 2
    const data = {
      username:'admin',
      password:'password',
      type:'foods'
    }
    //axios.get('http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=foods')
    axios.get('http://codemobiles.com/adhoc/youtubes/index_new.php',{params: data}) //way 2 
    .then(result=>{
      console.log(result.data);
      
    })
    .catch(err=>{
      alert(JSON.stringify(err))
    })
  }
  callPOST(){
    const data = new FormData();
    data.append('username','admin')
    data.append('password','password')
    // data.append('type','foods')
    data.append('type','training')
    axios.post('http://codemobiles.com/adhoc/youtubes/index_new.php',data)
    .then(result=>{
      console.log(result.data);
      
    })
    .catch(err=>{
      alert(JSON.stringify(err))
    })
  }
  render() {
    return (
      <View>
        <Button 
          title='Fecth'
          onPress={this.fetchSomething}
        />
        <Button 
          title='Axios'
          onPress={this.axiosSomething}
        />
         <Button 
          title='Axios with GET'
          onPress={this.callGet}
        />
          <Button 
          title='Axios with POST'
          onPress={this.callPOST}
        />
      </View>
    )
  }
}
