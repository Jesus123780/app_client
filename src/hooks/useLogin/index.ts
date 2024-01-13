import { URL_BACK_SERVER } from '@env'

export const useLogin = () => {
    async function handleLogin(body: any) {
        const url = `${URL_BACK_SERVER}/api/auth`
        try {
            const response = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body),
              credentials: 'include'
            })
            return response.json()
            
        } catch (error) {
            return new Error('Error')
        }
    }
  return {
    handleLogin
  }
}
