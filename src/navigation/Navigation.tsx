import React, { useState } from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Authorized from './Authorized';
import Unauthorized from './Unanthorized';

const theme = {
  ...DefaultTheme,
};

const Navigation = () => {
  const [userId,setUserId] = useState(true)
  return (
    <NavigationContainer theme={theme}>
      {userId ? <Authorized /> : <Unauthorized />}
    </NavigationContainer>
  );
};

export default Navigation;
