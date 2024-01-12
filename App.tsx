import React from 'react'
import {
  StatusBar,
  StyleSheet,
  useColorScheme
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { NavigationContainer } from '@react-navigation/native'
import { ApolloProvider, client } from './apollo'
import { Navigation } from './src/navigation/ButtonTabs'


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Navigation />
      </NavigationContainer>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App
