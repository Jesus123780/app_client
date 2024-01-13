import React, { useState } from 'react'
import {
  StatusBar,
  useColorScheme
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { NavigationContainer } from '@react-navigation/native'
import { ApolloProvider, client } from './apollo'
import { Navigation } from './src/navigation/ButtonTabs'
import { PublicScreen } from './src/navigation/PublicTabs'


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }
  const [login, setLogin] = useState(false)
  return (
    <ApolloProvider client={client}>
      <NavigationContainer >
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        {login ? <Navigation /> : <PublicScreen />}
      </NavigationContainer>
    </ApolloProvider>
  )
}


export default App
