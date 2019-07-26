import React, { Component} from 'react';
import { Container, Text, Content, Form, Item, Input, Label ,Button} from 'native-base';
import { StyleSheet } from 'react-native';
export default class LoginScreen extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
        username:'',
        password:''
    };
  }
    CheckLogin = () =>{
        const {username,password} = this.state
        alert('Username:'+username+',Password: '+password )
        // this.props.navigation.navigate('Home')
    }
  render() {
    return (
    <Container>
        <Content style={styles.content}>
          <Form>
          <Item stackedLabel>
              <Label>Username</Label>
              <Input onChangeText={(text)=>this.setState({username: text})} />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input  onChangeText={(text)=>this.setState({password: text})} />
            </Item>
          </Form>
          <Button  block onPress={this.CheckLogin}>
            <Text>Login</Text>
          </Button>
        </Content>
    </Container>
    );
  }
 
}
const styles = StyleSheet.create({
    content:{
        padding: 20,
        marginTop:80
    }
  });