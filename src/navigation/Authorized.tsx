import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import Second from '../screens/Second';
import ScreenRoutes from './routes';

type Props = {};

const Stack = createStackNavigator();

const Authorized: React.FC<Props> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenRoutes.Home} component={Home} />
      <Stack.Screen name={ScreenRoutes.Second} component={Second} />
    </Stack.Navigator>
  );
};

export default Authorized;
