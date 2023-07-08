import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FocusedStatusBar from "../components/FocusedStatusBar";

const Signup = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSignup = () => {
    // Perform signup logic here
    console.log("Sign Up button pressed");
  };

  const navigateToLogin = () => {
    navigation.navigate("Login"); // Replace 'Login' with your login screen's name or route
  };

  return (
    <View style={styles.container}>
      <FocusedStatusBar />

      <View style={styles.loginInfoContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo/logo2.png")}
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
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
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
    fontWeight: "bold",
    marginBottom: 0,
    color: "white",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    // marginBottom: 20,
    textAlign: "center",
    padding: 20,
    marginLeft: 15,
    marginRight: 15,
    color: "white",
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  loginInfoContainer: {
    // height:"50%"
    height: 330,
    backgroundColor: "#1c49bc",
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#0080ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    marginTop: 10,
    color: "#0080ff",
    fontSize: 16,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  formContainer: {
    padding: 50,
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    display: "flex",
    marginBottom: 20,
    alignItems: "center",
    marginTop: 85,
  },
});

export default Signup;
