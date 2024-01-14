import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { NavigationContainer } from '@react-navigation/native'
import { ApolloProvider, client } from './apollo'
import { Navigation } from './src/navigation/ButtonTabs'
import Context from './src/context'
import { AlertBox } from './src/components/atoms'


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }
  
  return (
    <Context>
      <ApolloProvider client={client}>
        <NavigationContainer >
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundStyle.backgroundColor}
          />
          <Navigation />
          <AlertBox type={1} title="Éxito" />
        </NavigationContainer>
      </ApolloProvider>
    </Context>
  )
}


export default App
