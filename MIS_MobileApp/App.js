import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Home: {screen:HomeScreen}
},{
  initialRouteName:'Login'
});

const App = createAppContainer(MainNavigator);

export default App;
