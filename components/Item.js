import React from "react";
import { Dimensions, View, Text, TouchableOpacity } from "react-native";
const { height, width } = Dimensions.get("window");
import { COLORS } from "../constants/theme";
import { Swipeable } from "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const renderItem = ({ item, index, }) => {
  onComponentOpen = (index) => {
    let tempData = sampleData;
    tempData.map((item, index) => {
      if (index === index) {
        item.opened = true;
      } else {
        item.opened = false;
      }
    });
    let temp = [];
    tempData.map((item) => {
      temp.push(item);
    });
    setData;
  };
  const rightSwipe = () => {
    return (
      <View style={{ backgroundColor: "#fff", height: 100 }}>
        <TouchableOpacity
          style={{
            height: 100,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "red",
          }}
        >
          <MaterialCommunityIcons
            name="delete-outline"
            style={{ color: "white", padding: 30 }}
            size={34}
          />
        </TouchableOpacity>
      </View>
    );
  };
  const leftSwipe = () => {
    return (
      <View>
        <TouchableOpacity
          style={{
            height: 100,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#3a86ff",
          }}
        >
          <FontAwesome
            name="edit"
            style={{ color: "white", padding: 30 }}
            size={34}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <GestureHandlerRootView>
      <Swipeable
        renderLeftActions={leftSwipe}
        renderRightActions={rightSwipe}
        onSwipeableOpen={() => {
          console.log("open");
          onComponentOpen(index);
          console.log(index);
        }}
      >
        <View
          key={item.id}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: COLORS.darkGrap,
            // marginBottom: 5,
            padding: 10,
            // borderRadius: 10,
            height: 100,
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              // padding: 20,
            }}
          >
            {item.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ marginRight: 5 }}>{item.currencySymbol}</Text>
            <Text>{item.price}</Text>
          </View>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};
export default renderItem;
