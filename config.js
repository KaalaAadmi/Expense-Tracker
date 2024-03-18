import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FA from "@expo/vector-icons/FontAwesome";
import { COLORS } from "./constants/theme";

export const BASE_URL =
  "https://expense-tracker-backend-kaalaaadmi.vercel.app/api/v1";

export const categoryData = [
  {
    id: 1,
    name: "Living",
    icon: <MaterialIcons name="living" style={{ fontSize: 20 }} />,
    color: COLORS.purple,
  },
  {
    id: 2,
    name: "Personal",
    icon: <AntDesign name="user" style={{ fontSize: 20 }} />,
    color: COLORS.peach,
  },
  {
    id: 3,
    name: "Healthcare",
    icon: <MaterialIcons name="healing" style={{ fontSize: 20 }} />,
    color: COLORS.blue,
  },
  {
    id: 4,
    name: "Travel",
    icon: <FA name="bus" style={{ fontSize: 20 }} />,
    color: COLORS.yellow,
  },
  {
    id: 5,
    name: "Financial",
    icon: <MaterialCommunityIcons name="finance" style={{ fontSize: 20 }} />,
    color: COLORS.primary,
  },
  {
    id: 6,
    name: "Education",
    icon: (
      <MaterialCommunityIcons name="book-education" style={{ fontSize: 20 }} />
    ),
    color: COLORS.red,
  },
  {
    id: 7,
    name: "Family",
    icon: <MaterialIcons name="family-restroom" style={{ fontSize: 20 }} />,
    color: COLORS.darkGrap,
  },
  {
    id: 8,
    name: "Miscellaneous",
    icon: (
      <MaterialIcons name="miscellaneous-services" style={{ fontSize: 20 }} />
    ),
    color: COLORS.lightGray,
  },
];
