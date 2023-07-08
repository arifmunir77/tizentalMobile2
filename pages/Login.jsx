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
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import * as Yup from 'yup';
 
// import {useAuth} from '../hooks/useAuth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.number().required('Required'),
});

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const {signIn} = useAuth();

  const {register, setError, handleSubmit, formState, setValue, reset, watch} =
    useForm({
      mode: 'onSubmit',
      
    });
  const {errors} = formState;
  // resolver: yupResolver(validationSchema),
  // console.log(errors);

  const handleLogin = () => {
    navigation.navigate('Evalutation');
  };

  const navigateToSignup = () => {
    navigation.navigate('Signup');
  };

  const navigateToForgotPassword = () => {
    navigation.navigate('Forget-Pasword');
  };

  // const loginSubmit = data => {
  //   console.log("daa",data);
  //   const req = data;
  //   delete req['passwordwrong'];
  //   // setIsSubmitting(true);
  //   signIn(req)
  //     .then(function (response) {
  //       console.log('res', response);
  //       reset();
  //     })
  //     .catch(function (error) {
  //       // setError(
  //       //   "passwordwrong",
  //       //   { type: "custom", message: error.response.data.detail },
  //       //   { shouldFocus: false }
  //       // );
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // setIsSubmitting(false);
  //     });
  // };

  const loginSubmit = async () => {
    try {
    navigation.navigate('Evalutation');
     
    } catch (error) {
      // Handle error here
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <FocusedStatusBar />

      <View style={styles.loginInfoContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo/logo2.png')}
            style={styles.logo}
          />
        </View>

        <Text style={styles.title}>Login</Text>
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

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(loginSubmit)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToSignup}>
          <Text style={styles.signupText}>Don't have an account? Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
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
    // flexDirection: "column",
  },
  formContainer: {
    padding: 50,
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loginInfoContainer: {
    // height:"50%"
    height: 330,
    backgroundColor: '#1c49bc',
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
  signupText: {
    marginTop: 10,
    color: '#0080ff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  logoContainer: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: 20,
    alignItems: 'center',
    marginTop: 85,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 8,
    color: '#0080ff',
  },
  logo: {
    // width: 250,
    // height: 80,
  },
  error: {
    color: 'red',
    marginBottom: 8,
  },
});

export default Login;
