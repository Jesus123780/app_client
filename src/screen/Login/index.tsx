import React, { useState, useEffect } from 'react'
import { 
  TouchableOpacity,
  StyleSheet, 
  View, 
  Button, 
  Text
} from 'react-native'
import { colors } from '../../assets/colors'
import { Icon } from '../../components'
import { TextInput } from '../../components/molecules'
import { emailValidator } from './helpers'
import { useLogin } from '../../hooks'

export const Login = ({ navigation }) => {
  const { handleLogin } = useLogin()
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [characters, setCharacters] = useState([]);
  console.log("🚀 ~ Login ~ characters:", characters)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/?page=1', {
          method: 'GET'
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCharacters(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures that this effect runs once, similar to componentDidMount


  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value)
    const passwordError = ''
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    await handleLogin({
        "name": "juvi1234@gmail.com",
        "username": "juvi1234@gmail.com",
        "lastName": "juvi1234@gmail.com",
        "email": "juvi1234@gmail.com",
        "password": "juvi1234@gmail.com",
        "locationFormat": "",
        "register": false,
        "useragent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "deviceid": "7b716bacf4b228aa0ef05c348711a644"
  })
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Register' }],
    // })
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
      <Icon icon='logo' />
      </View>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: string) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text: string) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPassword')}
        >
          <Text style={styles.forgot}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>
      <Button onPress={onLoginPressed} title='Login' />
      <View style={styles.row}>
        <Text>¿No tienes cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Register')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  logo: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    marginBottom: 24,
    marginTop: 124,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    justifyContent: 'center'
  },
  forgot: {
    fontSize: 13,
    color: colors.colortextsecondary,
  },
  link: {
    fontWeight: 'bold',
    color: colors.colorprimaryred,
  },
})