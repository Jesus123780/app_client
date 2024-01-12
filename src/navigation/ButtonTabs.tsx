import React from "react";
import { Login } from "../screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigator } from ".";
import { Icon } from "../components";

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="button"
        component={StackNavigator}
        options={{
          tabBarLabel: "Button",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon icon="home" color={color} size={"20px"} />
          ),
        }}
      />
      <Tab.Screen
        options={{
          freezeOnBlur: false,
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Icon icon="home" color={color} size={"20px"} />
          ),
        }}
        name="Explorar"
        component={Login}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Icon icon="home" color={color} size={"20px"} />
          ),
        }}
        name="Settings"
        component={Login}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color }) => (
            <Icon icon="home" color={color} size={"20px"} />
          ),
        }}
        name="Perfil"
        component={Login}
      />
    </Tab.Navigator>
  );
};
