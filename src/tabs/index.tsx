import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./Main";
import RegisterUser from "./RegisterUser";
import { Ionicons } from "@expo/vector-icons"; 

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="RegisterUser"
        component={RegisterUser}
        options={{
          headerShown: false,

          tabBarIcon: () => (
            <Ionicons name="calendar-outline" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
