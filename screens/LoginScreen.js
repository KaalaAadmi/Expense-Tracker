import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import { BlurView } from "expo-blur";
import { AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      setMessage("Enter all the details.");
    } else {
      // make api call.
      login(email, password);
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.circle}></View>
      <BlurView intensity={100} style={StyleSheet.absoluteFill} tint="light" />
      <StatusBar barStyle="light-content" />
      <ScrollView style={styles.bottomPartLogin}>
        <View>
          <View style={{ top: 70, width: "100%" }}>
            <Text style={styles.title}>LOGIN SCREEN</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>EMAIL</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email"
                placeholderTextColor="white"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>PASSWORD</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
                value={password}
                placeholder="Password"
                placeholderTextColor="white"
                secureTextEntry={true}
                autoCapitalize="none"
              />
            </View>
            {message !== "" && (
              <Text style={styles.errorMessage}>{message}</Text>
            )}
            <Pressable onPress={handleLogin}>
              <View style={styles.submitButton}>
                <Text style={styles.buttonText}>LOGIN</Text>
              </View>
            </Pressable>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.registerText}>
                Don't have an account?
                <Pressable onPress={() => navigation.navigate("Register")}>
                  <Text style={styles.registerLink}> Register</Text>
                </Pressable>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#041214",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  circle: {
    height: 400,
    width: 400,
    borderRadius: 400,
    backgroundColor: "#E6FF82",
    position: "absolute",
    top: -150,
    right: -150,
    opacity: 0.45,
  },
  scrollView: {
    width: "100%",
  },
  bottomPartLogin: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    height: "65%",
    backgroundColor: "#041214",
    bottom: 0,
    position: "absolute",
    // zIndex: 10,
  },
  title: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    paddingBottom: 20,
  },
  inputContainer: {
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    marginTop: 20,
    // marginBottom: 20,
  },
  label: {
    marginLeft: 10,
    fontSize: 20,
    color: "white",
  },
  input: {
    backgroundColor: "transparent",
    height: 60,
    marginTop: 10,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    borderColor: "white",
    marginBottom: 40,
    color: "white",
  },
  submitButton: {
    backgroundColor: "#E6FF82",
    height: 60,
    marginTop: 20,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    marginBottom: 40,
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
  },
  buttonText: {
    color: "#041214",
    fontSize: 20,
    textAlign: "center",
  },
  registerText: {
    color: "white",
    textAlign: "center",
    alignItems: "center",
  },
  registerLink: {
    color: "#E6FF82",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
    marginTop: 10,
  },
});

export default LoginScreen;
