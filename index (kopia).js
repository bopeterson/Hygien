import { AppRegistry } from 'react-native';
import { 
  StackNavigator,
  NavigationActions,
} from 'react-navigation';

import StartScreen from './App';
import MainView from './App';
import Credits from './App';

const MainNavigator = StackNavigator(
  {
    Start: { screen: StartScreen },
    Main: { screen: MainView },
    Credits: { screen: Credits }
  },{
    headerMode:'none' //om jag kommenterar bort detta får jag varningar om componentwillmount deprecated
  }
);

AppRegistry.registerComponent('Hygien', () => MainNavigator);
