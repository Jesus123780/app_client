import React from 'react';
import { Home, Login } from '../screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator } from '.';
import { Icon } from '../components';
import { colors } from '../assets/colors';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Login'
      screenOptions={{
        tabBarActiveTintColor: colors.colorprimaryred,
      }}
    >
      <Tab.Screen
        name='button'
        component={StackNavigator}
        options={{
          tabBarLabel: 'Button',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon icon='home' color={color} size={'20px'} />
          ),
        }}
      />
      <Tab.Screen
        options={{
          freezeOnBlur: false,
          tabBarLabel: 'Explorar',
          tabBarIcon: ({ color }) => (
            <Icon icon='search' color={color} size={'20px'} />
          ),
        }}
        name='Explorar'
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Icon icon='settings' color={color} size={'20px'} />
          ),
        }}
        name='Settings'
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Icon icon='profile' color={color} size={'20px'} />
          ),
        }}
        name='Perfil'
        component={Home}
      />
    </Tab.Navigator>
  );
};
