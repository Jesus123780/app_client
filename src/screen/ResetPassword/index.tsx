import React from 'react'
import { Button, Text, View } from 'react-native'

export const ResetPassword = ({ navigation }) => {
  return (
    <View>
      <Button  title="login" onPress={() => {
        return navigation.navigate('Login')
      }} />
        <Text>
        ResetPassword
        </Text>
    </View>
  )
}
