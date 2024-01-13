import React from "react";
import { Button, Text, View } from "react-native";

export const Register = ({ navigation }) => {
  return (
    <View>
      <Button  title="login" onPress={() => {
        return navigation.navigate('Login')
      }} />
      <Text>Register</Text>
    </View>
  );
};
