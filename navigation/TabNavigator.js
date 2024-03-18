import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ExpenseListScreen from "../screens/ExpenseListScreen";
import AddScreen from "../screens/AddScreen";
import ExpenseCategories from "../screens/ExpenseCategoryScreen";
import ProfileScreen from "../screens/ProfileScreen";

import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#E6FF82",
        tabBarStyle: {
          height: 150,
          backgroundColor: "#041214",
          shadowColor: "gray",
          shadowOffset: { width: 0, height: -1 },
          shadowOpacity: 0.5,
          shadowRadius: 10,
          // backgroundColor: "white",
          height: 100,
          // borderRadius: 20,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            // <AntDesign name={focused?"home":"home-outline" }color={color} size={28} />
            focused ? (
              <MaterialCommunityIcons
                name="home-variant"
                color={color}
                size={38}
              />
            ) : (
              <AntDesign name="home" color={color} size={28} />
            ),
        }}
      />
      <Tab.Screen
        name="ExpenseList"
        component={ExpenseListScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "receipt" : "receipt-outline"}
              color={color}
              size={focused ? 34 : 28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name={focused ? "pluscircle" : "pluscircleo"}
              color={color}
              size={focused ? 38 : 28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ExpenseCategories"
        component={ExpenseCategories}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name="category"
              color={color}
              size={focused ? 38 : 28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome
              name={focused ? "user-circle" : "user-circle-o"}
              color={color}
              size={focused ? 34 : 28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
