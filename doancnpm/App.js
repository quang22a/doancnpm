import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home, Login} from './src/components';
import { Provider } from 'redux';
import {store} from './src/redux/store/store';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}>
            {/* <Stack.Screen name="HomePage" component={Home} /> */}
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
