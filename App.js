import React from 'react';
import {View, StyleSheet} from 'react-native';
import Home from './screens/Home';
import CreatePersonScreen from './screens/CreatePersonScreen';
import Header from './screens/Header';
import Profile from './screens/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const myOptions = {
  title: 'Clients',
  headerTintColor: '#ffD400',
  headerStyle: {
    backgroundColor: '#000',
  },
};

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={myOptions} />
        <Stack.Screen
          name="Create"
          component={CreatePersonScreen}
          options={{...myOptions, title: 'Create Client'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Clients',
            headerTintColor: '#ffD400',
            headerStyle: {
              backgroundColor: '#000',
            },
          }}
        />
        {/* <Home /> */}
        {/* <Header /> */}
        {/* <CreatePersonScreen /> */}
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    // color: '#eee',
  },
});

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
