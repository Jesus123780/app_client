import React from 'react'
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'

export const Home = ({ navigation }) => {

  const handleRoute = () => {
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView>
      <View>
          <Text>
              Hola Home
          </Text>
          <TouchableOpacity onPress={handleRoute}>
          <Text>Go to Login</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
