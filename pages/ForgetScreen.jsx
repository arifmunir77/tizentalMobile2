import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import FocusedStatusBar from '../components/FocusedStatusBar';

import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().required('Email required'),
});

import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState,
    watch,
    reset,
    setValue,
    getValues,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const {errors} = formState;

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();
  const submit = data => {
    try {
      setIsLoading(true);

      axios
        .post('https://tezintel.com/api/accounts/password/reset/', data)
        .then(function (response) {
          // handle success
          alert('Please check your email for Password Reset');
          navigation.navigate('Login');
          setIsLoading(false);
        })
        .catch(function (error) {
          // handle error
          alert(error?.message);
          setIsLoading(false);
        });
    } catch (error) {
      // Handle error here
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleResetPassword = () => {
    handleSubmit(submit)();
  };

  return (
    <View style={styles.container}>
      <FocusedStatusBar />

      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>Please enter your registered email</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="numeric"
        name={'email'}
        value={watch('email')}
        onChangeText={value => {
          setValue('email', value);
        }}
      />

      {errors?.email && (
        <Text style={styles.errorText}> {errors?.email?.message}</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#0080ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
