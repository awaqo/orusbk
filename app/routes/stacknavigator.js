import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// splash
import Splash from '../views/splash/splash';

// home
import Home from '../views/home/home';

const HomeStack = createStackNavigator({
    Splash: { screen: Splash, navigationOptions: { headerShown: false } },
    Home: { screen: Home, navigationOptions: { headerShown: false } },
}, { initialRouteName: 'Splash'})

export default createAppContainer(HomeStack);