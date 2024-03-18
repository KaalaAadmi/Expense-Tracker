import React, { useContext, useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Animated,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FA from "@expo/vector-icons/FontAwesome";
import { AuthContext } from "../context/AuthContext";
import PieChartExample from "../components/PieChart";
import { COLORS } from "../constants/theme";
import { categoryData } from "../config";
import { format } from "date-fns";
import axios from "axios";
import { BASE_URL } from "../config";
import { RefreshControl } from "react-native-gesture-handler";

export default function HomeScreen() {
  const categoryListHeightAnimationValue = useRef(
    new Animated.Value(115)
  ).current;

  const { userInfo } = useContext(AuthContext);
  const date = Date.now();
  const [showMoreToggle, setShowMoreToggle] = useState(false);
  const [categories, setCategories] = useState(categoryData);
  const [viewMode, setViewMode] = useState("chart");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState(null);
  // const { expenses } = useContext(AuthContext);
  console.log(expenses);
  const fetchData = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/expense/getAllExpense`, {
        userId: userInfo.savedUser._id,
      });
      setExpenses(response.data.allExpense);
    } catch (error) {
      console.log("Error fetching all expenses:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [userInfo.savedUser._id]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          margin: 5,
          paddingHorizontal: 24,
          paddingVertical: 16,
          borderRadius: 5,
          backgroundColor: "white",
          ...styles.shadow,
        }}
        onPress={() => setSelectedCategory(item)}
      >
        {/* icon */}
        {item.icon}
        <Text style={{ marginLeft: 8, color: "#194868", fontSize: 14 }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  // const { userInfo } = useContext(AuthContext);
  console.log("HomeScreen");
  // console.log(JSON.stringify(userInfo));
  const renderListSelectedCategory = () => {
    let data = expenses.filter((a) => a.name === selectedCategory);
    data.map((item) => {
      return (
        <View>
          <Text style={{ color: "white" }}>{item}</Text>
        </View>
      );
    });
  };
  const [refresh, setRefresh] = useState(false);
  const refreshExpenses = async () => {
    setRefresh(true);
    // fetchData();
    try {
      const response = await axios.post(`${BASE_URL}/expense/getAllExpense`, {
        userId: userInfo.savedUser._id,
      });
      setExpenses(response.data.allExpense);
    } catch (error) {
      console.log("Error refreshing expenses:", error);
    }
    setRefresh(false);
  };
  return (
    <SafeAreaView
      styles={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView
        style={{
          // padding: 20,
          backgroundColor: "#041214",
          height: "100%",
          width: "100%",
        }}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refresh}
        //     onRefresh={() => refreshExpenses()}
        //   />
        // }
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 16, color: "white" }}>
            Hello, {userInfo.savedUser.firstName}
          </Text>
          <ImageBackground
            source={require("../assets/images/profile-image.jpg.avif")}
            style={{ width: 35, height: 35 }}
            imageStyle={{ borderRadius: 25 }}
          />
        </View>
        {/* Header Section */}
        <View style={{ padding: 36 }}>
          <View>
            <Text style={{ color: "white", fontSize: 22 }}>My Expenses</Text>
            <Text style={{ color: "white", fontSize: 16 }}>
              Summary (private)
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 36,
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="calendar-clear-outline"
                style={{ fontSize: 30, color: "white" }}
              />
              {/* <Image
                source={ }
                style={{ width: 20, height: 20, tintColor: lightBlue }}
              /> */}
            </View>
            <View style={{ marginLeft: 36 }}>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 26 }}
              >
                {format(date, "dd MMM, yyyy")}
              </Text>
              <Text style={{ color: "white", fontSize: 16 }}>
                18% more than last month
              </Text>
            </View>
          </View>
        </View>
        {/* Category Header Section */}
        <View
          style={{
            flexDirection: "row",
            padding: 36,
            justifyContent: "space-between",
            alignItem: "center",
          }}
        >
          {/* Title */}
          <View>
            <Text style={{ color: "white", fontSize: 16 }}>CATEGORIES</Text>
            <Text style={{ color: "white", fontSize: 14 }}>
              {categories.length} Total
            </Text>
          </View>
          {/* Buttons */}
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                width: 50,
                backgroundColor: viewMode === "chart" ? "#FF615F" : null,
                borderRadius: 25,
              }}
              onPress={() => setViewMode("chart")}
            >
              <MaterialCommunityIcons
                name="chart-box"
                style={{ fontSize: 25, color: "white" }}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                width: 50,
                backgroundColor: viewMode === "list" ? "#FF615F" : null,
                borderRadius: 25,
              }}
              onPress={() => setViewMode("list")}
            >
              <Feather name="menu" style={{ fontSize: 25, color: "white" }} />
            </TouchableOpacity> */}
          </View>
        </View>
        <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
          {viewMode === "list" && (
            <View style={{ paddingHorizontal: 11 }}>
              <Animated.View
                style={{ height: categoryListHeightAnimationValue }}
              >
                <FlatList
                  data={categories}
                  renderItem={renderItem}
                  keyExtractor={(item) => `${item.id}`}
                  numColumns={2}
                />
              </Animated.View>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  marginVertical: 8,
                  justifyContent: "center",
                }}
                onPress={() => {
                  if (showMoreToggle) {
                    Animated.timing(categoryListHeightAnimationValue, {
                      toValue: 127,
                      duration: 300,
                      useNativeDriver: false,
                    }).start();
                  } else {
                    Animated.timing(categoryListHeightAnimationValue, {
                      toValue: 250,
                      duration: 300,
                      useNativeDriver: false,
                    }).start();
                  }
                  setShowMoreToggle(!showMoreToggle);
                }}
              >
                <Text style={{ fontSize: 14, color: "white" }}>
                  {showMoreToggle ? "LESS" : "MORE"}
                </Text>
                <AntDesign
                  name={showMoreToggle ? "up" : "down"}
                  style={{
                    marginLeft: 5,
                    fontSize: 15,
                    alignSelf: "center",
                    color: "white",
                  }}
                />
              </TouchableOpacity>
              {selectedCategory && <View>{renderListSelectedCategory()}</View>}
            </View>
          )}
          {viewMode === "chart" && <PieChartExample expenses={expenses} />}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
