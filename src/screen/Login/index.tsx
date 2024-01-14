import React, { useState, useContext } from 'react'
import { 
  TouchableOpacity,
  StyleSheet, 
  View, 
  Text
} from 'react-native'
import { colors } from '../../assets/colors'
import { Icon } from '../../components'
import { TextInput } from '../../components/molecules'
import { emailValidator } from './helpers'
import { useLogin } from '../../hooks'
import { ROUTES } from '../../constants'
import { Context, ContextProps } from '../../context'
import { Button } from '../../components/atoms/Button'

export const Login = ({ navigation }) => {
  // HOOKS
  const { handleLogin, loading } = useLogin()
  const { setLogin } = useContext(Context) as ContextProps
  // STATES
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  
  // HANDLES
  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value)
    const passwordError = ''

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    if (password.value && email.value) {
        const response = await handleLogin({
            "email": email?.value ?? null,
            "password": password.value ?? null,
            "register": false,
          })
          if (response?.success) {
            setLogin(true)
          }
    }
  }
  // juvi1234@gmail.com
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
      <Button onPress={onLoginPressed} title='Login' loading={loading} primary  />
      <View style={styles.row}>
        <Text>¿No tienes cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.replace(ROUTES.REGISTER)}>
          <Text style={styles.link}>Registrate!</Text>
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