import * as React from 'react';
import Home from "../pages/Home";
import Login from '../pages/Login';
import Cadastro from '../pages/Cadastro';
import Produto from '../pages/Produto';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Produto" component={Produto} />
      </Stack.Navigator>
    </>
  );
}

export default Routes;