import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Linking,
  StatusBar,
  Button,
} from 'react-native';

import { 
  StackNavigator,
  //xxx NavigationActions,
} from 'react-navigation';


class StartScreen extends React.Component {
  static navigationOptions = {
    title: 'Välj bok',
    //header: null, use headerMode instead
  };
  
  constructor(props) {
    super(props);
  }

  render() {
      return (
         <View>
          <Text>StartScreen</Text>
          <Text>StartScreen</Text>
          <Text>StartScreen</Text>
          <Text>StartScreen</Text>
          <Button
            title="Go to Credits"
            onPress={() => this.props.navigation.navigate('Credits')}
          />
         </View>
      );
    }
}

class Credits extends React.Component {
  navigationOptions = { //xxx tagit bort static
    title: 'Om böckerna',
  };
  
  constructor(props) {
    super(props);
  }

  render () {
    return (
         <View>
          <Text>Credits</Text>
          <Text>Credits</Text>
          <Text>Credits</Text>
          <Text>Credits</Text>
    <Button
      title="Go to Credits again"
      onPress={() => this.props.navigation.navigate('Credits')}
    />
    <Button
      title="Go back"
      onPress={() => this.props.navigation.goBack()}
    />
         </View>
      
    );
  };
}

const MainNavigator = StackNavigator(
  {
    Home: { screen: StartScreen },
    Credits: { screen: Credits }
  },{
    headerMode:'none' //om jag kommenterar bort detta får jag varningar om componentwillmount deprecated
  },
  {
    initialRouteName: 'Home',
  }
);


export default class App extends React.Component {
  render() {
    return <MainNavigator />;
  }
}
