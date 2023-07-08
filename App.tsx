import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import EvaluationScreen from './pages/Evalutation';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgetScreen';

import {AppProvider} from './hooks/useAppState';
import FormWizardScreen from './pages/formWizard/FormWizard';
import ResidentialWizard from './pages/formWizard/ResidentialWizard';
const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="Evalutation" component={EvaluationScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Forget-Pasword" component={ForgotPassword} />
          <Stack.Screen name="Form-Wizard" component={FormWizardScreen} />

          <Stack.Screen
              name="Residential-Wizard"
              component={ResidentialWizard}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default App;
