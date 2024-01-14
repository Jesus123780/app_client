import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

/**
 * Busca en AsyncStorage la información.
 * @version 0.0.1
 * @param {string} key - Clave de búsqueda.
 * @param {boolean} keyParse - Indica si se debe parsear el valor.
 * @return {Promise<any>} - Valor de búsqueda o null si no se encuentra. 
 */
export const getData = async (key: string, keyParse?: boolean): Promise<any | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        const dataParse = (jsonValue ? JSON.parse(jsonValue) : null)
        return keyParse ? dataParse : jsonValue
    } catch (error) {
        console.error('Error al obtener datos:', error)
        Alert.alert('Error', 'Ha ocurrido un error al obtener datos. Por favor, inténtelo más tarde.')
        return null
    }
}

/**
 * Guarda en AsyncStorage la información.
 * @version 0.0.1
 * @param {string} key - Clave de storage.
 * @param {any} value - Valor a guardar.
 * @param {boolean} keyParse - Indica si se debe parsear el valor.
 * @return {Promise<void>} - No tiene retorno o muestra una alerta en caso de error.
 */
export const setData = async (key: string, value: any, keyParse?: boolean): Promise<void> => {
    try {
        const jsonValue = keyParse ? JSON.stringify(value) : value
        await AsyncStorage.setItem(key, jsonValue)
    } catch (error) {
        console.error('Error al guardar datos:', error)
        Alert.alert('Error', 'Ha ocurrido un error al guardar datos. Por favor, inténtelo más tarde.')
    }
}

/**
 * elimina en AsyncStorage la información
 * @version 0.0.1
 * @param {*} key clave de storage
 * @return {null} sin retorno o si hay un error una alerta
 */
export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        return Alert.alert('Ha ocurrido un error intente mas tarde.')
    }
}
