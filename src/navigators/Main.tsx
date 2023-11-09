import React from 'react';
import { Example, TextInputs } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TextInputs" component={TextInputs} />
      {/* <Stack.Screen name="Home" component={Example} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
