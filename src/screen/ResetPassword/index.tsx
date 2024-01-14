import React from 'react'
import { 
  Button, 
  Text,
  View
} from 'react-native'
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RouteProp } from '@react-navigation/native'
import { ROUTES } from '../../constants'

type StackParamList = {
    [ROUTES.LOGIN]?: { param: string }
}
const name = ROUTES.LOGIN

export type ScreenNavigationProp = NativeStackNavigationProp<StackParamList, typeof name>
  
export type ScreenRouteProp = RouteProp <StackParamList, typeof name>
  
export interface Props {
    navigation: ScreenNavigationProp
    route: ScreenRouteProp
}

export const ResetPassword: React.FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Button  title="login" onPress={() => {
        return navigation.navigate(ROUTES.LOGIN)
      }} />
        <Text>
        ResetPassword
        </Text>
    </View>
  )
}
