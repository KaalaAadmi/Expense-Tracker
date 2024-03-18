import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  useWindowDimensions,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import CurrencyPicker from "react-native-currency-picker";
import RNPickerSelect from "react-native-picker-select";
import Entypo from "@expo/vector-icons/Entypo";
import { AuthContext } from "../context/AuthContext";
import { getLocales, getCalendars } from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../config";

const AddExpenseScreen = () => {
  const { cc, userInfo } = useContext(AuthContext);
  const [expenseType, setExpenseType] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseAmountCurrency, setExpenseAmountCurrency] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [group, setGroup] = useState("");
  const [currencyCode, setCurrencyCode] = useState(cc);
  // console.log(cc);
  // const handleExpenseTypeChange = (value) => {
  //   setExpenseType(value);
  //   const selectedExpense = expenseCategories.find(
  //     (category) => category.name === value
  //   );
  //   if (selectedExpense) {
  //     setGroup(selectedExpense.group);
  //   }
  // };

  // useEffect(() => {
  //   const locale = getLocales();
  //   // console.log(locale[0].currencyCode);
  //   setCurrencyCode(locale[0].currencyCode);
  // }, []);
  const handleAddExpense = async (
    expenseAmount,
    expenseAmountCurrency,
    expenseType,
    group,
    otherDetails
  ) => {
    // Implement add expense functionality here
    const newExpense = {
      expenseAmount: expenseAmount,
      expenseAmountCurrency: expenseAmountCurrency,
      expenseType: expenseType,
      group: group,
      otherDetails: otherDetails,
      userId: userInfo.savedUser._id,
    };

    console.log("Expense added: " + JSON.stringify(newExpense));
    // make api call here.
    await axios
      .post(`${BASE_URL}/expense/add`, newExpense)
      .then((res) => {
        if (res.ok) {
        }
      })
      .catch((err) => {
        console.log("Error adding expense: " + err);
      });
    // Reset form fields after adding expense
    setExpenseType("");
    setExpenseAmount("");
    setExpenseAmountCurrency("");
    setOtherDetails("");
    setGroup("");
  };

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

  let currencyPickerRef = useRef.current;
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  useEffect(() => {
    console.log(expenseType);
    const setGroupItem = () => {
      const selectedExpense = expenseCategories.find(
        (category) => category.name === expenseType
      );
      if (selectedExpense) {
        console.log(selectedExpense);
        setGroup(selectedExpense.group);
      }
    };
    setGroupItem();
  }, [expenseType]);
  // const handleExpenseTypeChange = (value) => {
  //   setExpenseType(value);
  //   setShowPicker(true);
  // };
  const formattedCategories = expenseCategories.map((category) => ({
    label: category.name,
    value: category.name, // You can modify this to suit your needs
  }));
  const windowWidth = useWindowDimensions().width;
  const handleCurrencyCodeChange = async (data) => {
    console.log(data);
    setExpenseAmountCurrency(data.symbol);
    setCurrencyCode(data.symbol);
    await AsyncStorage.setItem("currencyCode", data.code);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("../assets/images/money-emoji.gif")}
            style={{ height: 200, width: 200, resizeMode: "contain" }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 30,
          }}
        >
          <Text
            style={{
              textTransform: "uppercase",
              color: "white",
              fontWeight: "bold",
              fontSize: 36,
            }}
          >
            Add expense{" "}
          </Text>
        </View>
        {/* <Text>Hello World!</Text> */}
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              marginLeft: "5%",
              paddingLeft: 5,
              paddingBottom: 5,
              color: "white",
            }}
          >
            {" "}
            Amount
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "90%",
              marginLeft: "5%",
              marginRight: "5%",
            }}
          >
            <CurrencyPicker
              currencyPickerRef={(ref) => {
                currencyPickerRef = ref;
              }}
              enable={true}
              darkMode={true}
              currencyCode={currencyCode}
              showFlag={true}
              showCurrencyName={true}
              showCurrencyCode={true}
              onSelectCurrency={(data) => handleCurrencyCodeChange(data)}
              onOpen={() => {
                console.log("Open");
              }}
              onClose={() => {
                console.log("Close");
              }}
              showNativeSymbol={true}
              showSymbol={false}
              containerStyle={{
                container: {
                  borderColor: "#ccc",
                  // backgroundColor: "red",
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "5%",
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderWidth: 1,
                  marginRight: "-5%",
                  padding: 1,
                },
                flagWidth: 0,
                currencyCodeStyle: { width: 0 },
                currencyNameStyle: { width: 0 },
                symbolStyle: {
                  fontSize: 34,
                  padding: 2.75,
                  marginLeft: -20,
                  color: "white",
                },
                symbolNativeStyle: {
                  fontSize: 34,
                  padding: 2.75,
                  marginLeft: -20,
                  color: "white",
                },
              }}
              modalStyle={{
                container: {},
                searchStyle: {},
                tileStyle: {},
                itemStyle: {
                  itemContainer: {},
                  flagWidth: 25,
                  currencyCodeStyle: {},
                  currencyNameStyle: {},
                  symbolStyle: {},
                  symbolNativeStyle: {},
                },
              }}
              title={"Currency"}
              searchPlaceholder={"Search"}
              showCloseButton={true}
              showModalTitle={true}
            />
            <TextInput
              placeholder="Expense Amount"
              style={[
                styles.amountInput,
                {
                  width: windowWidth * 0.9 - 50,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                  borderLeftColor: "transparent",
                  color: "white",
                },
              ]}
              value={expenseAmount}
              onChangeText={(text) => setExpenseAmount(text)}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              marginLeft: "5%",
              paddingLeft: 5,
              paddingBottom: 5,
              color: "white",
            }}
          >
            {" "}
            Expense Type
          </Text>
          <View style={{ width: "100%", justifyContent: "center" }}>
            <RNPickerSelect
              onValueChange={(itemValue) => setExpenseType(itemValue)}
              items={formattedCategories}
              style={{
                inputIOS: styles.input,
                inputAndroid: styles.input,
              }}
              placeholder={{
                label: "Select an expense type...",
                value: undefined,
              }}
              darkTheme={true}
            />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              marginLeft: "5%",
              paddingLeft: 5,
              paddingBottom: 5,
              color: "white",
            }}
          >
            {" "}
            Other Details
          </Text>
          <TextInput
            placeholder="Other Details"
            style={styles.input}
            value={otherDetails}
            onChangeText={(text) => setOtherDetails(text)}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              marginLeft: "5%",
              paddingLeft: 5,
              paddingBottom: 5,
              color: "white",
            }}
          >
            {" "}
            Group
          </Text>
          <TextInput
            style={styles.input}
            value={group}
            editable={false}
            selectTextOnFocus={false}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            paddingHorizontal: 10,
            fontSize: 22,
            marginLeft: "5%",
            marginRight: "5%",
            width: "90%",
            marginTop: "7%",
            backgroundColor: "#E6FF82",
          }}
          onPress={() =>
            handleAddExpense(
              expenseAmount,
              expenseAmountCurrency,
              expenseType,
              group,
              otherDetails
            )
          }
        >
          <Entypo name="plus" size={22} />
          <Text
            style={{
              fontSize: 16,
              textTransform: "uppercase",
              fontWeight: "bold",
              marginLeft: "1%",
            }}
          >
            Add Expense
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#041214",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%",
    // marginTop: 20,
    color: "white",
  },
  amountInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",

    paddingHorizontal: 10,
    fontSize: 16,
  },
  picker: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  amountInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  amountInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  groupText: {
    fontSize: 18,
    marginBottom: 20,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 8,
    height: 50,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
});

export default AddExpenseScreen;
