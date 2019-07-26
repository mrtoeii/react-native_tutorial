import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginSrceen from './LoginScreen'
const MainNavigator = createStackNavigator({
  Login: {screen: LoginSrceen},
  
},{
    initialRouteName: 'Login'
});

const App = createAppContainer(MainNavigator);

export default App;