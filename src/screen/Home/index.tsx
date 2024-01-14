import React, { useContext } from 'react'
import { 
  SafeAreaView, 
  Text,
  View, 
  TouchableOpacity
} from 'react-native'
import { Context, ContextProps } from '../../context'

export const Home = () => {
  const { setLogin } = useContext(Context) as ContextProps

  const handleRoute = () => {
    setLogin(false)
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
