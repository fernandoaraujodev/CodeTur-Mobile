import http from '../utils/http-axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    const value = await AsyncStorage.getItem('@jwt-codetur-mobile');
    return value;
    
}

const listar = async () => {
    const token = await getToken();
    return http.get(`package`, {
        headers : {
            'authorization' : `Bearer ${token}`
        }
    })
}

export default {
    listar
}