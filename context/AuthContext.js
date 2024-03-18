import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [expenses, setExpenses] = useState(null);
  const [cc, setCC] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    console.log("Hello from login");
    await axios
      .post(`${BASE_URL}/auth/login`, { email, password })
      .then(async (res) => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        setUserToken(userInfo.accessToken);
        await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
        await AsyncStorage.setItem("userToken", userInfo.data.accessToken);
        console.log("UserInfo: " + userInfo);
        console.log("UserToken " + userInfo.accessToken);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(false);
  };

  const register = async (firstName, lastName, username, email, password) => {
    setIsLoading(true);
    console.log("Hello from register");
    await axios
      .post(`${BASE_URL}/auth/register`, {
        firstName,
        lastName,
        username,
        email,
        password,
      })
      .then(async (res) => {
        //   let userInfo = res.data;
        //   steUserInfo(userInfo);
        //   setUserToken(userInfo.data.accessToken);
        //   await AsyncStorage.setItem("userInfo", userInfo);
        //   await AsyncStorage.setItem("userToken", userInfo.data.accessToken);
        //   console.log("UserInfo: " + userInfo);
        //   console.log("UserToken " + userInfo.data.accessToken);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLoading(false);
  };
  const logout = async () => {
    setIsLoading(true);
    setUserToken(null);
    setUserInfo(null);
    await AsyncStorage.removeItem("userToken");
    await AsyncStorage.removeItem("userInfo");
    setIsLoading(false);
  };
  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      // let userToken = await AsyncStorage.getItem("userToken");
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserInfo(userInfo);
        setUserToken(userInfo.accessToken);
        try {
          const cc1 = await AsyncStorage.getItem("currencyCode");
          setCC(cc1);
        } catch (err) {
          console.log(err);
        }
      }
      setIsLoading(false);
    } catch (e) {
      console.log(`isLogged in error ${e}`);
    }
  };
  const getExpenses = async () => {
    try {
      setIsLoading(true);
      await axios
        .post(`${BASE_URL}/expense/getAllExpense`, {
          userId: userInfo.savedUser._id,
        })
        .then((res) => {
          // console.log(res.data.allExpense);
          setExpenses(res.data.allExpense);
        })
        .catch((err) => {
          console.log("Error inside fetching data");
        });
      setIsLoading(false);
    } catch (err) {
      console.log(`Error fetching expenses: ${err}`);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    isLoggedIn();
    getExpenses();
    console.log("expenses: " + expenses);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        getExpenses,
        isLoading,
        userToken,
        userInfo,
        expenses,
        cc,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
