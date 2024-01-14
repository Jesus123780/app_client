import React, { useContext } from 'react';
import { Home } from '../screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigator } from '.';
import { Icon } from '../components';
import { colors } from '../assets/colors';
import { Context, ContextProps } from '../context';
import { ROUTES } from '../constants';
import { PublicScreen } from './PublicTabs';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  const { login } = useContext(Context) as ContextProps
  if (!login) return <PublicScreen /> 
  return (
      <Tab.Navigator
        initialRouteName={`${ROUTES.HOME}`}
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
            tabBarLabel: ROUTES.EXPLORE,
            tabBarIcon: ({ color }) => (
              <Icon icon='search' color={color} size={'20px'} />
            ),
          }}
          name={ROUTES.EXPLORE}
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ROUTES.SETTINGS,
            tabBarIcon: ({ color }) => (
              <Icon icon='settings' color={color} size={'20px'} />
            ),
          }}
          name={ROUTES.SETTINGS}
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarLabel: ROUTES.PROFILE,
            tabBarIcon: ({ color }) => (
              <Icon icon='profile' color={color} size={'20px'} />
            ),
          }}
          name={ROUTES.PROFILE}
          component={Home}
        />
      </Tab.Navigator>
  );
};
