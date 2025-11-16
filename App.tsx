import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import BackButton from "./components/BackButton";
import "./i18n";
import LoginScreen from "./screens/LoginScreen";
import SearchSchoolScreen from "./screens/SearchSchoolScreen";
import { theme } from "./theme";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SearchSchool"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      >
        <Stack.Screen
          name="SearchSchool"
          component={SearchSchoolScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: true,
            headerLeft: () => <BackButton />,
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
