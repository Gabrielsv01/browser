import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './stacks/indext';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default Routes;
