import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  Register, 
  Login, 
  ResetPassword 
} from '../screen';
import { colors } from '../assets/colors';
import { ROUTES } from '../constants';

const Stack = createNativeStackNavigator();

export const PublicScreen = () => {
  
  const options = {
      headerShown: false
  }
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.colorbackgroundwhite,
        },
      }}
    >
      <Stack.Screen
        name={ROUTES.REGISTER}
        component={Register}
        options={options}
      />
      <Stack.Screen 
        name={ROUTES.LOGIN}
        component={Login} 
        options={options}
      />
      <Stack.Screen 
        name={ROUTES.RESETPASSWORD}
        component={ResetPassword} 
        options={options}
      />
    </Stack.Navigator>
  );
};