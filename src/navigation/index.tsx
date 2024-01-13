import * as React from 'react';
import { 
  View,
  TouchableOpacity, 
  StyleSheet
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login } from '../screen';
import { Icon } from '../components';
import { colors } from '../assets/colors';

const Stack = createNativeStackNavigator();

const LogoTitle = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Icon icon='logo' size={20} />
  </View>
);

export const StackNavigator = ({ navigation }) => {

  const handleRedirecToHome = () => {
    navigation.navigate('Home')
  }

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
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <LogoTitle />,
          headerLeft: () => (
            <TouchableOpacity style={styles.logo} onPress={handleRedirecToHome}>
              <Icon icon='logo' size={100}  />
            </TouchableOpacity>
          ),
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