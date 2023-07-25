import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FocusedStatusBar from '../components/FocusedStatusBar';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import * as Yup from 'yup';
import Loader from './formWizard/Loader';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
  first_name: Yup.string().required('Required'),
  last_name: Yup.string().required('Required'),
});

const Signup = () => {
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);

  const {register, setError, handleSubmit, formState, setValue, reset, watch} =
    useForm({
      mode: 'onSubmit',
      resolver: yupResolver(validationSchema),
    });
  const {errors} = formState;

  const handleSignup = data => {
    // Perform signup logic here
    console.log('dataa', data);

    try {
      setIsLoading(true);

      axios
        .post('https://tezintel.com/api/accounts/signup/', data)
        .then(function (response) {
          // handle success

          alert('Please check your email for verfication');

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

  const navigateToLogin = () => {
    navigation.navigate('Login'); // Replace 'Login' with your login screen's name or route
  };

  return (
    <View style={styles.container}>
      <FocusedStatusBar />
      {isLoading && <Loader />}

      <View style={styles.loginInfoContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo/logo2.png')}
            style={styles.logo}
          />
        </View>

        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>
          For the Purpose of Industry regulation, Your Details are required
        </Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          name="email"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={value => {
            setValue('email', value);
          }}
          value={watch('email')}
        />
        {errors?.email && (
          <Text style={styles.error}>{errors?.email?.message}</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Password"
          name="password"
          secureTextEntry
          onChangeText={value => {
            setValue('password', value);
          }}
          value={watch('password')}
        />
        {errors?.password && (
          <Text style={styles.error}>{errors?.password?.message}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="First Name"
          name="text"
          onChangeText={value => {
            setValue('first_name', value);
          }}
          value={watch('first_name')}
        />

        {errors?.first_name && (
          <Text style={styles.error}>{errors?.first_name?.message}</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          name="last"
          onChangeText={value => {
            setValue('last_name', value);
          }}
          value={watch('last_name')}
        />

        {errors?.last_name && (
          <Text style={styles.error}>{errors?.last_name?.message}</Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(handleSignup)}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.loginText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    // marginBottom: 20,
    textAlign: 'center',
    padding: 20,
    marginLeft: 15,
    marginRight: 15,
    color: 'white',
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
  loginInfoContainer: {
    // height:"50%"
    height: 330,
    backgroundColor: '#1c49bc',
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
  loginText: {
    marginTop: 10,
    color: '#0080ff',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  formContainer: {
    padding: 50,
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: 20,
    alignItems: 'center',
    marginTop: 85,
  },
});

export default Signup;
