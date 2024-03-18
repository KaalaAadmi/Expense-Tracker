import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";
import { AuthContext } from "../context/AuthContext"; // Assuming you have an AuthContext for managing authentication

const ProfileScreen = () => {
  const { userInfo, logout } = useContext(AuthContext); // Assuming user details and logout function are available from the AuthContext

  const handleLogout = () => {
    logout(); // Implement logout function to clear session/token
    // Navigate back to the login screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Hey, {userInfo.savedUser.firstName}, Here are your details:
      </Text>
      <View style={styles.detailsContainer}>
        <View>
          <Image
            source={require("../assets/images/profile-image.jpg.avif")}
            style={{
              height: 200,
              width: 200,
              borderRadius: 100,
              marginBottom: 20,
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.label}>Name:</Text>
          <Text style={{ color: "white", marginLeft: 10, fontSize: 20 }}>
            {userInfo.savedUser.firstName} {userInfo.savedUser.lastName}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.label}>Email:</Text>
          <Text
            style={{
              color: "white",
              marginLeft: 10,
              fontSize: 20,
            }}
          >
            {userInfo.savedUser.email}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.label}>Username:</Text>
          <Text style={{ color: "white", marginLeft: 10, fontSize: 20 }}>
            {userInfo.savedUser.username}
          </Text>
        </View>
        {/* Display other user details */}
      </View>
      {/* <Button title="Logout" onPress={handleLogout} /> */}
      <Pressable onPress={() => handleLogout()}>
        <View style={styles.submitButton}>
          <Text style={{ fontWeight: "bold", paddingHorizontal: 20 }}>
            LOGOUT
          </Text>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#041214",

    // height: "100%",
    // width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  detailsContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    fontSize: 20,
  },
  submitButton: {
    backgroundColor: "#E6FF82",
    height: 60,
    marginTop: 20,
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    marginBottom: 40,
    width: "100%",
    // marginLeft: "10%",
    // marginRight: "10%",
    // marginBottom: "30%",
  },
});

export default ProfileScreen;
