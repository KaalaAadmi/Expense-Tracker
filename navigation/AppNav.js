import React, { useContext } from "react";
import AuthStack from "./AuthStack.js";
import AppStack from "./AppStack.js";
import { AuthContext } from "../context/AuthContext.js";
import { View, ActivityIndicator } from "react-native";

const AppNav = () => {
  const { userInfo, isLoading } = useContext(AuthContext);
  console.log(userInfo);
  return <>{userInfo !== null ? <AppStack /> : <AuthStack />}</>;
};

export default AppNav;
