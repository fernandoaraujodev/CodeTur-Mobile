// libs
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// pages
import Login from './pages/conta/login';
import ListaPacotes  from './pages/pacote/listaPacotes';
import AsyncStorage from '@react-native-async-storage/async-storage';

// navigations
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
 
const Drawer = createDrawerNavigator();
const Stack  = createStackNavigator(); 

const Pacotes = () => {
  return(
    <Stack.Navigator initialRouteName="ListaPacotes">
        <Stack.Screen name="ListaPacotes" component={ListaPacotes} />
    </Stack.Navigator>
  )
}


const Autenticado = () => {
  return(
    <Drawer.Navigator initialRouteName="Pacotes">
        <Drawer.Screen name="Pacotes" component={Pacotes} />
        <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  )
}
 
const Logout = ( {navigation} ) => {
  return(
    <View>
      <Text>Deseja realmente sair da aplicação?</Text>
      <Button onPress={() => {
        AsyncStorage.removeItem('@jwt');
        navigation.push('Login');
      }} title="SAIR" ></Button>
    </View>
  )
}
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown : false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Autenticado" component={Autenticado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

