import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { VictoryPie } from "victory-native";
import axios from "axios";
import { BASE_URL, categoryData } from "../config";
import { COLORS, SIZES } from "../constants/theme";

const PieChartExample = ({expenses}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState(categoryData);

  const processCategoryDataToDisplay = () => {
    if (!expenses) return []; // Return an empty array if expenses is null or undefined
    const groupedExpenses = expenses.reduce((acc, expense) => {
      const { group, otherDetails, expenseAmount } = expense;
      const existingGroup = acc.find((item) => item.name === group);
      if (existingGroup) {
        existingGroup.label++;
        existingGroup.y += expenseAmount;
        if (otherDetails) {
          if (!existingGroup.subcategory[otherDetails]) {
            existingGroup.subcategory[otherDetails] = 0;
          }
          existingGroup.subcategory[otherDetails] += expenseAmount;
        }
      } else {
        const newGroup = {
          id: acc.length + 1,
          name: group,
          label: 1,
          y: expenseAmount,
          subcategory: {},
        };
        if (otherDetails) {
          newGroup.subcategory[otherDetails] = expenseAmount;
        }
        acc.push(newGroup);
      }
      return acc;
    }, []);

    const formattedData = groupedExpenses.map((group) => ({
      id: group.id,
      name: group.name,
      label: ((group.label / expenses.length) * 100).toFixed(2) + "%",
      y: group.y,
      subcategory: group.subcategory,
    }));
    // console.log(formattedData);
    return formattedData;
  };

  const calculateTotal = () => {
    if (!expenses) return 0; // Return 0 if expenses is null or undefined
    const totalExpenses = expenses.reduce(
      (total, expense) => total + expense.expenseAmount,
      0
    );
    return totalExpenses;
  };

  const processFinalChartData = (chartData, total) => {
    const formattedData = chartData.map((group) => ({
      x: group.name,
      y: ((group.y / total) * 100).toFixed(2),
    }));
    return formattedData;
  };

  const chartData = processCategoryDataToDisplay();
  const total = calculateTotal();
  const finalChartData = processFinalChartData(chartData, total);

  const setSetectedCategoryByName = (name) => {
    let category = categories.filter((a) => a.name === name);
    setSelectedCategory(category[0]);
  };

  const getTotalGroupCount = () => {
    if (!expenses) return 0; // Return 0 if expenses is null or undefined

    // Initialize an empty Set to store unique group names
    const uniqueGroups = new Set();

    // Iterate through expenses to collect unique group names
    expenses.forEach((expense) => {
      uniqueGroups.add(expense.group);
    });

    // Return the total number of unique group names
    return uniqueGroups.size;
  };

  let totalExpenseCount = getTotalGroupCount();
  return (
    <View style={{ backgroundColor: "#041214" }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <VictoryPie
          data={finalChartData}
          labels={({ datum }) => datum.x} // Use the 'x' property (group names) as labels
          innerRadius={70}
          labelRadius={({ innerRadius }) =>
            (SIZES.width * 0.4 + innerRadius) / 2.5
          }
          radius={({ datum }) =>
            selectedCategory && selectedCategory.name === datum.name
              ? SIZES.width * 0.4
              : SIZES.width * 0.4 - 10
          }
          colorScale={[
            COLORS.purple,
            COLORS.peach,
            COLORS.blue,
            COLORS.yellow,
            COLORS.primary,
            COLORS.red,
            COLORS.darkGrap,
            COLORS.lightGray,
          ]}
          style={{
            labels: { fill: "white", fontWeight: "bold", fontSize: 16 },
            parent: {
              ...styles.shadow,
            },
          }}
          width={SIZES.width * 0.9}
          height={SIZES.width * 0.9}
          events={[
            {
              target: "data",
              eventHandlers: {
                onClick: () => {
                  return [
                    {
                      target: "labels",
                      mutation: (props) => {
                        // console.log(props);
                        let categoryName = categories[props.index].name;
                        setSetectedCategoryByName(categoryName);
                      },
                    },
                  ];
                },
              },
            },
          ]}
        />
      </View>
      <View style={{ position: "absolute", top: "42%", left: "42%" }}>
        <Text
          style={{
            fontSize: 30,
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {totalExpenseCount}
        </Text>
        <Text style={{ textAlign: "center", fontSize: 16, color: "white" }}>
          Expenses
        </Text>
      </View>
    </View>
  );
};

export default PieChartExample;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#fff",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
