import * as React from 'react';
import {  StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Register, Login, ResetPassword } from '../screen';
import { colors } from '../assets/colors';

const Stack = createNativeStackNavigator();

export const PublicScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: colors.colorbackgroundwhite,
        },
      }}
    >
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
         headerShown: false
        }}
      />
      <Stack.Screen 
        name="Login"
        component={Login} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="ResetPassword"
        component={ResetPassword} 
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 55
  },
})