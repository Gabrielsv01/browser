import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home/Home';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="Home"
        options={{
          headerShown: false,
        }}
        component={Home}
      />
    </Stack.Navigator>
  );
};

export {StackNavigator};
