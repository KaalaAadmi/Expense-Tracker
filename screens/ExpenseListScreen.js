// import React, { useContext, useEffect, useState } from "react";
// import {
//   FlatList,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// // import Item from "../components/Item";
// import { COLORS } from "../constants/theme";
// import { Swipeable } from "react-native-gesture-handler";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import { AuthContext } from "../context/AuthContext";
// import axios from "axios";
// import { BASE_URL } from "../config";

// const sampleData = [
//   {
//     id: "1",
//     name: "Hello",
//     price: 30,
//     currencySymbol: "EUR",
//     opened: false,
//   },
//   {
//     id: "2",
//     name: "Hi",
//     price: 30,
//     currencySymbol: "EUR",
//     opened: false,
//   },
//   {
//     id: "3",
//     name: "wassup",
//     price: 30,
//     currencySymbol: "EUR",
//     opened: false,
//   },
//   {
//     id: "4",
//     name: "wassup",
//     price: 30,
//     currencySymbol: "EUR",
//     opened: false,
//   },
//   {
//     id: "5",
//     name: "wassup",
//     price: 30,
//     currencySymbol: "EUR",
//     opened: false,
//   },
//   {
//     id: "6",
//     name: "wassup",
//     price: 30,
//     currencySymbol: "EUR",
//     opened: false,
//   },
// ];

// export default function ExpenseListScreen() {
//   const { userInfo } = useContext(AuthContext);
//   const [expenses, setExpenses] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post(`${BASE_URL}/expense/getAllExpense`, {
//           userId: userInfo.savedUser._id,
//         });
//         setExpenses(response.data.allExpense);
//       } catch (error) {
//         console.log("Error fetching all expenses:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   const deleteExpense = async (id) => {};
//   // return (
//   //   <SafeAreaView
//   //     styles={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//   //   >
//   //     <Text>Expense List Screen</Text>
//   //     <View style={{}}>
//   //       <FlatList data={data} renderItem={renderItem} />
//   //     </View>
//   //   </SafeAreaView>
//   // );

//   // }
//   // Function to group expenses by date
//   //   const groupExpensesByDate = () => {
//   //     const groupedExpenses = {};

//   //     // Group expenses by date
//   //     expenses.forEach((expense) => {
//   //       const date = new Date(expense.createdAt).toDateString();
//   //       if (!groupedExpenses[date]) {
//   //         groupedExpenses[date] = [];
//   //       }
//   //       groupedExpenses[date].push(expense);
//   //     });

//   //     return groupedExpenses;
//   //   };

//   //   // Render each date group in the flatlist
//   //   const renderDateGroup = ({ item }) => {
//   //     return (
//   //       <View style={styles.dateGroup}>
//   //         <Text style={styles.date}>{item.date}</Text>
//   //         {item.expenses.map((expense) => (
//   //           <Text key={expense._id} style={styles.expense}>
//   //             {expense.otherDetails}: {expense.expenseAmount}
//   //           </Text>
//   //         ))}
//   //       </View>
//   //     );
//   //   };

//   //   return (
//   //     <SafeAreaView style={styles.container}>
//   //       <FlatList
//   //         data={Object.keys(groupExpensesByDate()).map((date) => ({
//   //           date,
//   //           expenses: groupExpensesByDate()[date],
//   //         }))}
//   //         renderItem={renderDateGroup}
//   //         keyExtractor={(item) => item.date}
//   //       />
//   //     </SafeAreaView>
//   //   );
//   // }

//   // const styles = StyleSheet.create({
//   //   container: {
//   //     flex: 1,
//   //     backgroundColor: "#fff",
//   //     paddingHorizontal: 10,
//   //     paddingTop: 20,
//   //   },
//   //   dateGroup: {
//   //     marginBottom: 20,
//   //   },
//   //   date: {
//   //     fontSize: 18,
//   //     fontWeight: "bold",
//   //     marginBottom: 10,
//   //   },
//   //   expense: {
//   //     fontSize: 16,
//   //     marginBottom: 5,
//   //   },
//   // });

//   //   const handleDelete = (id) => {
//   //     // Handle delete logic here
//   //     console.log("Delete expense with id:", id);
//   //   };

//   //   const handleEdit = (id) => {
//   //     // Handle edit logic here
//   //     console.log("Edit expense with id:", id);
//   //   };

//   //   const renderRightActions = (id) => {
//   //     return (
//   //       <View style={styles.rightActions}>
//   //         <TouchableOpacity
//   //           onPress={() => handleEdit(id)}
//   //           style={styles.editButton}
//   //         >
//   //           <Text>Edit</Text>
//   //         </TouchableOpacity>
//   //       </View>
//   //     );
//   //   };

//   //   const renderLeftActions = (id) => {
//   //     return (
//   //       <View style={styles.leftActions}>
//   //         <TouchableOpacity
//   //           onPress={() => handleDelete(id)}
//   //           style={styles.deleteButton}
//   //         >
//   //           <Text>Delete</Text>
//   //         </TouchableOpacity>
//   //       </View>
//   //     );
//   //   };

//   //   const renderExpenseItem = ({ item }) => {
//   //     return (
//   //       <GestureHandlerRootView>
//   //         <Swipeable
//   //           renderRightActions={() => renderRightActions(item._id)}
//   //           renderLeftActions={() => renderLeftActions(item._id)}
//   //         >
//   //           <View style={styles.expenseItem}>
//   //             <Text>{item.expenseType}</Text>
//   //             <Text>{item.expenseAmount}</Text>
//   //           </View>
//   //         </Swipeable>
//   //       </GestureHandlerRootView>
//   //     );
//   //   };

//   //   return (
//   //     <View style={styles.container}>
//   //       <FlatList
//   //         data={expenses}
//   //         renderItem={renderExpenseItem}
//   //         keyExtractor={(item) => item._id}
//   //       />
//   //     </View>
//   //   );
//   // }

//   // const styles = StyleSheet.create({
//   //   container: {
//   //     flex: 1,
//   //     backgroundColor: "#fff",
//   //   },
//   //   expenseItem: {
//   //     flexDirection: "row",
//   //     justifyContent: "space-between",
//   //     alignItems: "center",
//   //     padding: 20,
//   //     borderBottomWidth: 1,
//   //     borderBottomColor: "#ccc",
//   //   },
//   //   rightActions: {
//   //     flex: 1,
//   //     flexDirection: "row",
//   //     justifyContent: "flex-end",
//   //     alignItems: "center",
//   //   },
//   //   leftActions: {
//   //     flex: 1,
//   //     flexDirection: "row",
//   //     justifyContent: "flex-start",
//   //     alignItems: "center",
//   //   },
//   //   editButton: {
//   //     backgroundColor: "blue",
//   //     justifyContent: "center",
//   //     alignItems: "center",
//   //     padding: 20,
//   //   },
//   //   deleteButton: {
//   //     backgroundColor: "red",
//   //     justifyContent: "center",
//   //     alignItems: "center",
//   //     padding: 20,
//   //   },
//   // });

//   //   const handleDelete = (id) => {
//   //     // Handle delete logic here
//   //     console.log("Delete expense with id:", id);
//   //   };

//   //   const handleEdit = (id) => {
//   //     // Handle edit logic here
//   //     console.log("Edit expense with id:", id);
//   //   };

//   //   const renderRightActions = (id) => {
//   //     return (
//   //       <View style={styles.rightActions}>
//   //         <TouchableOpacity
//   //           onPress={() => handleEdit(id)}
//   //           style={styles.editButton}
//   //         >
//   //           <Text>Edit</Text>
//   //         </TouchableOpacity>
//   //       </View>
//   //     );
//   //   };

//   //   const renderLeftActions = (id) => {
//   //     return (
//   //       <View style={styles.leftActions}>
//   //         <TouchableOpacity
//   //           onPress={() => handleDelete(id)}
//   //           style={styles.deleteButton}
//   //         >
//   //           <Text>Delete</Text>
//   //         </TouchableOpacity>
//   //       </View>
//   //     );
//   //   };

//   //   const renderExpenseItem = ({ item }) => {
//   //     return (
//   //       <GestureHandlerRootView>
//   //         <Swipeable
//   //           renderRightActions={() => renderRightActions(item._id)}
//   //           renderLeftActions={() => renderLeftActions(item._id)}
//   //         >
//   //           <View style={styles.expenseItem}>
//   //             <Text>{item.expenseType}</Text>
//   //             <Text>{item.expenseAmount}</Text>
//   //           </View>
//   //         </Swipeable>
//   //       </GestureHandlerRootView>
//   //     );
//   //   };

//   //   return (
//   //     <View style={styles.container}>
//   //       <FlatList
//   //         data={expenses}
//   //         renderItem={renderExpenseItem}
//   //         keyExtractor={(item) => item._id}
//   //       />
//   //     </View>
//   //   );
//   // }

//   // const styles = StyleSheet.create({
//   //   container: {
//   //     flex: 1,
//   //     backgroundColor: "#fff",
//   //   },
//   //   expenseItem: {
//   //     flexDirection: "row",
//   //     justifyContent: "space-between",
//   //     alignItems: "center",
//   //     padding: 20,
//   //     borderBottomWidth: 1,
//   //     borderBottomColor: "#ccc",
//   //   },
//   //   rightActions: {
//   //     flex: 1,
//   //     flexDirection: "row",
//   //     justifyContent: "flex-end",
//   //     alignItems: "center",
//   //   },
//   //   leftActions: {
//   //     flex: 1,
//   //     flexDirection: "row",
//   //     justifyContent: "flex-start",
//   //     alignItems: "center",
//   //   },
//   //   editButton: {
//   //     backgroundColor: "blue",
//   //     justifyContent: "center",
//   //     alignItems: "center",
//   //     padding: 20,
//   //   },
//   //   deleteButton: {
//   //     backgroundColor: "red",
//   //     justifyContent: "center",
//   //     alignItems: "center",
//   //     padding: 20,
//   //   },
//   // });

//   const handleDelete = (id) => {
//     // Handle delete logic here
//     console.log("Delete expense with id:", id);
//   };

//   const handleEdit = (id) => {
//     // Handle edit logic here
//     console.log("Edit expense with id:", id);
//   };

//   const renderRightActions = (id) => {
//     return (
//       <View style={styles.rightActions}>
//         <TouchableOpacity
//           onPress={() => handleEdit(id)}
//           style={styles.editButton}
//         >
//           <Text>Edit</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const renderLeftActions = (id) => {
//     return (
//       <View style={styles.leftActions}>
//         <TouchableOpacity
//           onPress={() => handleDelete(id)}
//           style={styles.deleteButton}
//         >
//           <Text>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   const renderExpenseItem = ({ item }) => {
//     return (
//       <Swipeable
//         renderRightActions={() => renderRightActions(item._id)}
//         renderLeftActions={() => renderLeftActions(item._id)}
//       >
//         <View style={styles.expenseItem}>
//           <Text>{item.expenseType}</Text>
//           <Text>{item.expenseAmount}</Text>
//         </View>
//       </Swipeable>
//     );
//   };

//   const renderExpenseGroup = ({ item }) => {
//     return (
//       <View style={styles.expenseGroup}>
//         <Text style={styles.date}>{item.date}</Text>
//         {item.expenses.map((expense) => (
//           <GestureHandlerRootView>
//             <Swipeable
//               key={expense._id}
//               renderRightActions={() => renderRightActions(expense._id)}
//               renderLeftActions={() => renderLeftActions(expense._id)}
//             >
//               <View style={styles.expenseItem}>
//                 <Text>{expense.expenseType}</Text>
//                 <Text>{expense.expenseAmount}</Text>
//               </View>
//             </Swipeable>
//           </GestureHandlerRootView>
//         ))}
//       </View>
//     );
//   };

//   const groupExpensesByDate = () => {
//     const groupedExpenses = [];
//     expenses.forEach((expense) => {
//       const date = new Date(expense.createdAt).toDateString();
//       const groupIndex = groupedExpenses.findIndex(
//         (group) => group.date === date
//       );
//       if (groupIndex !== -1) {
//         groupedExpenses[groupIndex].expenses.push(expense);
//       } else {
//         groupedExpenses.push({
//           date,
//           expenses: [expense],
//         });
//       }
//     });
//     return groupedExpenses;
//   };

//   const groupedExpenses = groupExpensesByDate();

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={groupedExpenses}
//         renderItem={renderExpenseGroup}
//         keyExtractor={(item) => item.date}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   expenseItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   expenseGroup: {
//     marginBottom: 20,
//   },
//   date: {
//     fontSize: 18,
//     fontWeight: "bold",
//     paddingHorizontal: 20,
//     marginBottom: 10,
//   },
//   rightActions: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   leftActions: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "flex-start",
//     alignItems: "center",
//   },
//   editButton: {
//     backgroundColor: "blue",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   deleteButton: {
//     backgroundColor: "red",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
// });

// // export default ExpenseList;

// const renderItem = ({ item, index }) => {
//   // onComponentOpen = (ind) => {
//   //   let tempData = sampleData;
//   //   tempData.map((item, index) => {
//   //     if (index === ind) {
//   //       item.opened = true;
//   //     } else {
//   //       item.opened = false;
//   //     }
//   //   });
//   //   let temp = [];
//   //   tempData.map((item) => {
//   //     temp.push(item);
//   //   });
//   //   setData(temp);
//   // };
//   const rightSwipe = () => {
//     return (
//       <View style={{ backgroundColor: "#fff", height: 100 }}>
//         <TouchableOpacity
//           style={{
//             height: 100,
//             width: 100,
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "red",
//           }}
//           onPress={() => deleteExpense(id)}
//         >
//           <MaterialCommunityIcons
//             name="delete-outline"
//             style={{ color: "white", padding: 30 }}
//             size={34}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   };
//   const leftSwipe = () => {
//     return (
//       <View>
//         <TouchableOpacity
//           style={{
//             height: 100,
//             width: 100,
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#3a86ff",
//           }}
//         >
//           <FontAwesome
//             name="edit"
//             style={{ color: "white", padding: 30 }}
//             size={34}
//           />
//         </TouchableOpacity>
//       </View>
//     );
//   };
//   return (
//     <GestureHandlerRootView>
//       <Swipeable
//         renderLeftActions={leftSwipe}
//         renderRightActions={rightSwipe}
//         // onSwipeableOpen={() => {
//         //   // console.log("open");
//         //   onComponentOpen(index);
//         //   // console.log(index);
//         // }}
//       >
//         <View
//           key={item.id}
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             alignItems: "center",
//             backgroundColor: COLORS.darkGrap,
//             // marginBottom: 5,
//             padding: 10,
//             // borderRadius: 10,
//             height: 100,
//             paddingHorizontal: 20,
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 24,
//               // padding: 20,
//             }}
//           >
//             {item.name}
//           </Text>
//           <View style={{ flexDirection: "row" }}>
//             <Text style={{ marginRight: 5 }}>{item.currencySymbol}</Text>
//             <Text>{item.price}</Text>
//           </View>
//         </View>
//       </Swipeable>
//     </GestureHandlerRootView>
//   );
// };

// import React, { useContext, useEffect, useState } from "react";
// import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
// import { Swipeable } from "react-native-gesture-handler";
// import axios from "axios";
// import { BASE_URL } from "../config";
// import { AuthContext } from "../context/AuthContext";

// const ExpenseList = () => {
//   const [expensesByDate, setExpensesByDate] = useState([]);
//   const { userInfo } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post(`${BASE_URL}/expense/getAllExpense`, {
//           userId: userInfo.savedUser._id,
//         });
//         const expenses = response.data.allExpense;
//         const groupedExpenses = groupExpensesByDate(expenses);
//         setExpensesByDate(groupedExpenses);
//       } catch (error) {
//         console.log("Error fetching expenses:", error);
//       }
//     };

//     fetchData();
//   }, [userInfo.savedUser._id]);

//   const groupExpensesByDate = (expenses) => {
//     const groupedExpenses = [];
//     expenses.forEach((expense) => {
//       const date = new Date(expense.createdAt).toDateString();
//       const groupIndex = groupedExpenses.findIndex(
//         (group) => group.date === date
//       );
//       if (groupIndex !== -1) {
//         groupedExpenses[groupIndex].expenses.push(expense);
//       } else {
//         groupedExpenses.push({
//           date,
//           expenses: [expense],
//         });
//       }
//     });

//     // Sort expenses within each group by their creation date (most recent first)
//     groupedExpenses.forEach((group) => {
//       group.expenses.sort(
//         (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//       );
//     });

//     // Sort groups by date (most recent first)
//     groupedExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));

//     return groupedExpenses;
//   };
//   const handleDelete = (item) => {
//     console.log("delete");
//     console.log(item._id);
//   };
//   const handleEdit = (item) => {
//     console.log("edit");
//     console.log(item._id);
//   };
//   const renderItem = ({ item }) => (
//     <GestureHandlerRootView>
//       <Swipeable
//         renderLeftActions={() => handleEdit(item)}
//         renderRightActions={() => handleDelete(item)}
//       >
//         <View style={styles.expenseContainer}>
//           <Text style={styles.date}>{item.date}</Text>
//           <FlatList
//             data={item.expenses}
//             renderItem={({ item: expense }) => (
//               <View style={styles.expenseItem}>
//                 <Text>{expense.expenseType}</Text>
//                 {/* Display other expense details */}
//               </View>
//             )}
//             keyExtractor={(expense) => expense._id}
//           />
//         </View>
//       </Swipeable>
//     </GestureHandlerRootView>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={expensesByDate}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.date}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   expenseContainer: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   date: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   expenseItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 5,
//   },
// });

// export default ExpenseList;

// import React, { useContext, useEffect, useState } from "react";
// import { View, Text, FlatList, StyleSheet, SafeAreaView } from "react-native";
// import { Swipeable } from "react-native-gesture-handler";
// import axios from "axios";
// import { BASE_URL } from "../config";
// import { AuthContext } from "../context/AuthContext";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// const ExpenseList = () => {
//   const [expenses, setExpenses] = useState([]);
//   const { userInfo } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post(`${BASE_URL}/expense/getAllExpense`, {
//           userId: userInfo.savedUser._id,
//         });
//         setExpenses(response.data.allExpense);
//       } catch (error) {
//         console.log("Error fetching expenses:", error);
//       }
//     };

//     fetchData();
//   }, [userInfo.savedUser._id]);
//   const handleDelete = (item) => {
//     console.log("delete");
//     console.log(item._id);
//   };
//   const handleEdit = (item) => {
//     console.log("edit");
//     console.log(item._id);
//   };
//   const renderExpenseItem = ({ item }) => (
//     <GestureHandlerRootView>
//       <Swipeable
//         renderLeftActions={() => handleEdit(item)}
//         renderRightActions={() => handleDelete(item)}
//       >
//         <View style={styles.expenseItem}>
//           <Text>{item.expenseType}</Text>
//           {/* Display other expense details */}
//         </View>
//       </Swipeable>
//     </GestureHandlerRootView>
//   );

//   const renderSectionHeader = ({ section: { date } }) => (
//     <View style={styles.sectionHeader}>
//       <Text style={styles.date}>{date}</Text>
//     </View>
//   );

//   const groupExpensesByDate = () => {
//     const groupedExpenses = [];
//     expenses.forEach((expense) => {
//       const date = new Date(expense.createdAt).toDateString();
//       const groupIndex = groupedExpenses.findIndex(
//         (group) => group.date === date
//       );
//       if (groupIndex !== -1) {
//         groupedExpenses[groupIndex].data.push(expense);
//       } else {
//         groupedExpenses.push({
//           date,
//           data: [expense],
//         });
//       }
//     });
//     return groupedExpenses;
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={groupExpensesByDate()}
//         renderItem={renderSectionHeader}
//         keyExtractor={(item) => item.date}
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item.date}</Text>
//             <FlatList
//               data={item.data}
//               renderItem={renderExpenseItem}
//               keyExtractor={(expense) => expense._id}
//             />
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   sectionHeader: {
//     backgroundColor: "#f0f0f0",
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   date: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   expenseItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
// });

// export default ExpenseList;

// import React, { useContext, useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
// } from "react-native";
// import { Swipeable } from "react-native-gesture-handler";
// import axios from "axios";
// import { BASE_URL } from "../config";
// import { AuthContext } from "../context/AuthContext";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

// const ExpenseList = () => {
//   const [expenses, setExpenses] = useState([]);
//   const { userInfo } = useContext(AuthContext);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.post(`${BASE_URL}/expense/getAllExpense`, {
//           userId: userInfo.savedUser._id,
//         });
//         setExpenses(response.data.allExpense);
//       } catch (error) {
//         console.log("Error fetching expenses:", error);
//       }
//     };

//     fetchData();
//   }, [userInfo.savedUser._id]);

//   const handleDelete = (item) => {
//     console.log("delete");
//     console.log(item._id);
//   };

//   const handleEdit = (item) => {
//     console.log("edit");
//     console.log(item._id);
//   };

//   const renderExpenseItem = ({ item }) => {
//     const rightSwipe = () => {
//       return (
//         <View style={{ backgroundColor: "#fff", height: 100 }}>
//           <TouchableOpacity
//             style={{
//               height: 100,
//               width: 100,
//               alignItems: "center",
//               justifyContent: "center",
//               backgroundColor: "red",
//             }}
//             onPress={() => deleteExpense(id)}
//           >
//             <MaterialCommunityIcons
//               name="delete-outline"
//               style={{ color: "white", padding: 30 }}
//               size={34}
//             />
//           </TouchableOpacity>
//         </View>
//       );
//     };
//     const leftSwipe = () => {
//       return (
//         <View>
//           <TouchableOpacity
//             style={{
//               height: 100,
//               width: 100,
//               alignItems: "center",
//               justifyContent: "center",
//               backgroundColor: "#3a86ff",
//             }}
//           >
//             <FontAwesome
//               name="edit"
//               style={{ color: "white", padding: 30 }}
//               size={34}
//             />
//           </TouchableOpacity>
//         </View>
//       );
//     };
//     return (
//       <GestureHandlerRootView>
//         <Swipeable
//           renderLeftActions={leftSwipe}
//           renderRightActions={rightSwipe}
//         >
//           <View style={styles.expenseItem}>
//             <Text>{item.expenseType}</Text>
//             {/* Display other expense details */}
//           </View>
//         </Swipeable>
//       </GestureHandlerRootView>
//     );
//   };

//   const renderSectionHeader = ({ section: { date } }) => (
//     <View style={styles.sectionHeader}>
//       <Text style={styles.date}>{date}</Text>
//     </View>
//   );

//   const groupExpensesByDate = () => {
//     const groupedExpenses = [];
//     expenses.forEach((expense) => {
//       const date = new Date(expense.createdAt).toDateString();
//       const groupIndex = groupedExpenses.findIndex(
//         (group) => group.date === date
//       );
//       if (groupIndex !== -1) {
//         groupedExpenses[groupIndex].data.push(expense);
//       } else {
//         groupedExpenses.push({
//           date,
//           data: [expense],
//         });
//       }
//     });
//     return groupedExpenses;
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={groupExpensesByDate()}
//         renderItem={renderSectionHeader}
//         keyExtractor={(item) => item.date}
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item.date}</Text>
//             <FlatList
//               data={item.data}
//               renderItem={renderExpenseItem}
//               keyExtractor={(expense) => expense._id}
//             />
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   sectionHeader: {
//     backgroundColor: "#f0f0f0",
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   date: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   expenseItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   leftActions: {
//     flex: 1,
//     backgroundColor: "blue",
//     justifyContent: "center",
//     alignItems: "flex-end",
//     paddingRight: 20,
//   },
//   rightActions: {
//     flex: 1,
//     backgroundColor: "red",
//     justifyContent: "center",
//     alignItems: "flex-start",
//     paddingLeft: 20,
//   },
// });

// export default ExpenseList;

// ===========================================WORKS======================================

import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import axios from "axios";
import { BASE_URL } from "../config";
import { AuthContext } from "../context/AuthContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { COLORS } from "../constants/theme";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);
  const { userInfo } = useContext(AuthContext);

  const fetchData = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/expense/getAllExpense`, {
        userId: userInfo.savedUser._id,
      });
      setExpenses(response.data.allExpense);
    } catch (error) {
      console.log("Error fetching expenses:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [expenses]);

  const handleDelete = async (item) => {
    console.log("delete");
    console.log(item._id);
    await axios
      .post(`${BASE_URL}/expense/deleteExpense`, {
        userId: userInfo.savedInfo._id,
        expenseId: item._id,
      })
      .then((res) => {})
      .catch((err) => {
        console.log("delete expense error: " + err);
      });
  };

  const handleEdit = (item) => {
    console.log("edit");
    console.log(item._id);
  };

  const renderExpenseItem = ({ item }) => {
    const rightSwipe = () => {
      return (
        <View style={{ backgroundColor: "#fff", height: 100 }}>
          <TouchableOpacity
            style={{
              height: 75,
              width: 75,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "red",
            }}
            onPress={() => handleDelete(item)}
          >
            <MaterialCommunityIcons
              name="delete-outline"
              style={{ color: "white", padding: 30 }}
              size={20}
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
              height: 75,
              width: 75,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#3a86ff",
            }}
            onPress={() => handleEdit(item)}
          >
            <FontAwesome
              name="edit"
              style={{ color: "white", padding: 30 }}
              size={20}
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
          // style={{ height: 100 }}
        >
          <View style={styles.expenseItem}>
            <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
              {item.otherDetails}
            </Text>
            {/* Display other expense details */}
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  marginRight: 5,
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                {item.expenseAmountCurrency}
              </Text>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                {item.expenseAmount}
              </Text>
            </View>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
    );
  };

  const groupExpensesByDate = () => {
    const groupedExpenses = [];
    expenses.forEach((expense) => {
      const date = new Date(expense.createdAt).toDateString();
      const groupIndex = groupedExpenses.findIndex(
        (group) => group.date === date
      );
      if (groupIndex !== -1) {
        groupedExpenses[groupIndex].data.push(expense);
      } else {
        groupedExpenses.push({
          date,
          data: [expense],
        });
      }
    });
    // Reverse the array to display in reverse order
    return groupedExpenses.reverse();
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={groupExpensesByDate()}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 24,
                  padding: 20,
                  width: "100%",
                  textAlign: "center",
                  color: COLORS.darkGrap,
                  textTransform: "capitalize",
                }}
              >
                {item.date}
              </Text>
            </View>
            <FlatList
              data={item.data}
              renderItem={renderExpenseItem} // Passing renderExpenseItem directly
              keyExtractor={(expense) => expense._id}
            />
          </View>
        )}
        keyExtractor={(item) => item.date}
        refreshing={refresh}
        onRefresh={() => refreshExpenses()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#041214",
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
  },
  expenseItem: {
    height: 75,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#041214",
  },
  leftActions: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
  },
  rightActions: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
});

export default ExpenseList;

// ====================================== SCROLLVIEW==================================

// import React, { useContext, useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
// } from "react-native";
// import { RefreshControl, Swipeable } from "react-native-gesture-handler";
// import axios from "axios";
// import { BASE_URL } from "../config";
// import { AuthContext } from "../context/AuthContext";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import FontAwesome from "@expo/vector-icons/FontAwesome";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import { COLORS } from "../constants/theme";

// const ExpenseList = () => {
//   const [expenses, setExpenses] = useState([]);
//   const { userInfo } = useContext(AuthContext);

//   const fetchData = async () => {
//     try {
//       const response = await axios.post(`${BASE_URL}/expense/getAllExpense`, {
//         userId: userInfo.savedUser._id,
//       });
//       setExpenses(response.data.allExpense);
//     } catch (error) {
//       console.log("Error fetching expenses:", error);
//     }
//   };
//   useEffect(() => {
//     fetchData();
//   }, [expenses]);

//   const handleDelete = async (item) => {
//     console.log("delete");
//     console.log(item._id);
//     await axios
//       .post(`${BASE_URL}/expense/deleteExpense`, {
//         userId: userInfo.savedInfo._id,
//         expenseId: item._id,
//       })
//       .then((res) => {})
//       .catch((err) => {
//         console.log("delete expense error: " + err);
//       });
//   };

//   const handleEdit = (item) => {
//     console.log("edit");
//     console.log(item._id);
//   };

//   const renderExpenseItem = ({ item }) => {
//     const rightSwipe = () => {
//       return (
//         <View style={{ backgroundColor: "#fff", height: 100 }}>
//           <TouchableOpacity
//             style={{
//               height: 75,
//               width: 75,
//               alignItems: "center",
//               justifyContent: "center",
//               backgroundColor: "red",
//             }}
//             onPress={() => handleDelete(item)}
//           >
//             <MaterialCommunityIcons
//               name="delete-outline"
//               style={{ color: "white", padding: 30 }}
//               size={20}
//             />
//           </TouchableOpacity>
//         </View>
//       );
//     };
//     const leftSwipe = () => {
//       return (
//         <View>
//           <TouchableOpacity
//             style={{
//               height: 75,
//               width: 75,
//               alignItems: "center",
//               justifyContent: "center",
//               backgroundColor: "#3a86ff",
//             }}
//             onPress={() => handleEdit(item)}
//           >
//             <FontAwesome
//               name="edit"
//               style={{ color: "white", padding: 30 }}
//               size={20}
//             />
//           </TouchableOpacity>
//         </View>
//       );
//     };
//     return (
//       <GestureHandlerRootView>
//         <Swipeable
//           renderLeftActions={leftSwipe}
//           renderRightActions={rightSwipe}
//           // style={{ height: 100 }}
//         >
//           <View style={styles.expenseItem}>
//             <Text style={{ fontSize: 20, color: "#fff", fontWeight: "bold" }}>
//               {item.otherDetails}
//             </Text>
//             {/* Display other expense details */}
//             <View style={{ flexDirection: "row" }}>
//               <Text
//                 style={{
//                   marginRight: 5,
//                   fontSize: 20,
//                   fontWeight: "bold",
//                   color: "#fff",
//                 }}
//               >
//                 {item.expenseAmountCurrency}
//               </Text>
//               <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
//                 {item.expenseAmount}
//               </Text>
//             </View>
//           </View>
//         </Swipeable>
//       </GestureHandlerRootView>
//     );
//   };

//   const groupExpensesByDate = () => {
//     const groupedExpenses = [];
//     expenses.forEach((expense) => {
//       const date = new Date(expense.createdAt).toDateString();
//       const groupIndex = groupedExpenses.findIndex(
//         (group) => group.date === date
//       );
//       if (groupIndex !== -1) {
//         groupedExpenses[groupIndex].data.push(expense);
//       } else {
//         groupedExpenses.push({
//           date,
//           data: [expense],
//         });
//       }
//     });
//     // Reverse the array to display in reverse order
//     return groupedExpenses.reverse();
//   };
//   const [refresh, setRefresh] = useState(false);
//   const refreshExpenses = () => {
//     setRefresh(true)
//     fetchData();
//     setRefresh(false)
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         // refreshControl={
//         //   <RefreshControl
//         //     refreshing={refresh}
//         //     onRefresh={() => refreshExpenses()}
//         //   />
//         // }
//       >
//         {groupExpensesByDate().map((item) => (
//           <View key={item.date}>
//             <Text
//               style={{
//                 fontWeight: "bold",
//                 fontSize: 24,
//                 padding: 20,
//                 width: "100%",
//                 textAlign: "center",
//                 color: COLORS.darkGrap,
//                 textTransform: "capitalize",
//               }}
//             >
//               {item.date}
//             </Text>
//             {item.data.map((expense) => (
//               <View key={expense._id}>
//                 {renderExpenseItem({ item: expense })}
//               </View>
//             ))}
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#041214",
//   },
//   date: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   expenseItem: {
//     height: 75,
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//     backgroundColor: "#041214",
//   },
//   leftActions: {
//     flex: 1,
//     backgroundColor: "blue",
//     justifyContent: "center",
//     alignItems: "flex-end",
//     paddingRight: 20,
//   },
//   rightActions: {
//     flex: 1,
//     backgroundColor: "red",
//     justifyContent: "center",
//     alignItems: "flex-start",
//     paddingLeft: 20,
//   },
// });

// export default ExpenseList;
