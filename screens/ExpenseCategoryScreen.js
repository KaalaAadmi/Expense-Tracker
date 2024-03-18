import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/FontAwesome";

const expenseCategories = [
  {
    id: 1,
    name: "Food",
    group: "Living Expenses",
    image: require("../assets/images/expense-category-images/food.jpg"),
  },
  {
    id: 2,
    name: "Transportation",
    group: "Living Expenses",
    image: require("../assets/images/expense-category-images/transportation.jpg"),
  },
  {
    id: 3,
    name: "Shopping",
    group: "Personal Expenses",
    image: require("../assets/images/expense-category-images/shopping.jpg"),
  },
  {
    id: 4,
    name: "Groceries",
    group: "Living Expenses",
    image: require("../assets/images/expense-category-images/groceries.jpg"),
  },
  {
    id: 5,
    name: "Subscriptions",
    group: "Living Expenses",
    image: require("../assets/images/expense-category-images/subscriptions.jpg"),
  },
  {
    id: 6,
    name: "Healthcare",
    group: "Healthcare",
    image: require("../assets/images/expense-category-images/healthcare.jpg"),
  },
  {
    id: 7,
    name: "Entertainment",
    group: "Personal Expenses",
    image: require("../assets/images/expense-category-images/entertainment.jpg"),
  },
  {
    id: 8,
    name: "Rent",
    group: "Living Expenses",
    image: require("../assets/images/expense-category-images/rent.jpg"),
  },
  {
    id: 9,
    name: "Education",
    group: "Education",
    image: require("../assets/images/expense-category-images/education.jpg"),
  },
  {
    id: 10,
    name: "Travel",
    group: "Travel",
    image: require("../assets/images/expense-category-images/travel.jpg"),
  },
  {
    id: 11,
    name: "Utilities",
    group: "Living Expenses",
    image: require("../assets/images/expense-category-images/utilities.jpg"),
  },
  {
    id: 12,
    name: "Miscellaneous",
    group: "Miscellaneous",
    image: require("../assets/images/expense-category-images/misc.jpg"),
  },
  {
    id: 13,
    name: "Personal Care",
    group: "Personal Expenses",
    image: require("../assets/images/expense-category-images/personal-care.jpg"),
  },
  {
    id: 14,
    name: "Gifts",
    group: "Personal Expenses",
    image: require("../assets/images/expense-category-images/gifts.jpg"),
  },
  {
    id: 15,
    name: "Investments",
    group: "Financial",
    image: require("../assets/images/expense-category-images/investments.jpg"),
  },
  {
    id: 16,
    name: "Insurance",
    group: "Living Expenses",
    image: require("../assets/images/expense-category-images/insurance.jpg"),
  },
  {
    id: 17,
    name: "Repairs",
    group: "Living Expenses",
    image: require("../assets/images/expense-category-images/repairs.jpg"),
  },
  {
    id: 18,
    name: "Childcare",
    group: "Family Expenses",
    image: require("../assets/images/expense-category-images/childcare.jpg"),
  },
  {
    id: 19,
    name: "Pets",
    group: "Family Expenses",
    image: require("../assets/images/expense-category-images/pets.jpg"),
  },
  {
    id: 20,
    name: "Memberships",
    group: "Personal Expense",
    image: require("../assets/images/expense-category-images/memberships.jpg"),
  },
  {
    id: 21,
    name: "Taxes",
    group: "Financial",
    image: require("../assets/images/expense-category-images/taxes.jpg"),
  },
  {
    id: 22,
    name: "Savings",
    group: "Financial",
    image: require("../assets/images/expense-category-images/savings.jpg"),
  },
  {
    id: 23,
    name: "Improvement",
    group: "Living Expenses",
    image: require("../assets/images/expense-category-images/improvement.jpg"),
  },
  {
    id: 24,
    name: "Vacation",
    group: "Travel",
    image: require("../assets/images/expense-category-images/vacation.jpg"),
  },
  {
    id: 25,
    name: "Donations",
    group: "Personal Expenses",
    image: require("../assets/images/expense-category-images/donations.jpg"),
  },
  {
    id: 26,
    name: "Hobbies",
    group: "Personal Expenses",
    image: require("../assets/images/expense-category-images/hobbies.jpg"),
  },
  {
    id: 27,
    name: "Development",
    group: "Personal Expenses",
    image: require("../assets/images/expense-category-images/development.jpg"),
  },
  {
    id: 29,
    name: "Other",
    group: "Miscellaneous",
    image: require("../assets/images/expense-category-images/subscriptions.jpg"),
  },
];

export default function ExpenseCategoryScreen() {
  const [searchText, setSearchText] = useState("");
  const filteredCategories = expenseCategories.filter((category) =>
    category.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const handlePressCategory = (cat) => {
    console.log(cat);
  };
  return (
    <SafeAreaView style={styles.background}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            padding: 10,
            color: "white",
          }}
        >
          Expense Categories
        </Text>
        <View
          style={{
            height: 60,
            width: 60,
            backgroundColor: "#E6FF82",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Ionicons name="plus" size={24} style={{ color: "#041214" }} />
        </View>
      </View>
      {/* Searchbar for expense caregories */}

      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          placeholder="Search..."
          placeholderTextColor="#A9A9A9"
          autoCapitalize="none"
        />
      </View>
      <ScrollView>
        {/* Expense categories */}
        {filteredCategories.map((category) => (
          <Pressable
            key={category.id}
            onPress={() => handlePressCategory(category)}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                borderBottomColor: "#d5d5d5",
                paddingBottom: 20,
                borderBottomWidth: 1,
                // marginBottom: 20,
                marginTop: 20,
              }}
            >
              <Image
                source={category.image}
                style={{ height: 60, width: 60, borderRadius: 20 }}
              />
              <View
                style={{
                  width: "75%",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "white",
                  }}
                >
                  {category.name}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "white",
                  }}
                >
                  {category.group}
                </Text>
              </View>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    color: "white",
    backgroundColor: "#041214",
    height: "100%",
    width: "100%",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
});
