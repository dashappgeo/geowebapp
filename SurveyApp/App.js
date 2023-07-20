import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import DataField from './PhotoCollection';
import ViewDetails from './ViewDetails';
import MyInfo from './Info';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="DataField" component={DataField} />
        <Stack.Screen name="ViewDetails" component={ViewDetails} />
        <Stack.Screen name="InfoDetails" component={MyInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
