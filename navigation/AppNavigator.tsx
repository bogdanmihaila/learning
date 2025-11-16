import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BackButton from "../components/BackButton";
import LoginScreen from "../screens/LoginScreen";
import SearchSchoolScreen from "../screens/SearchSchoolScreen";
import { theme } from "../theme";
import type { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
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
  );
};

export default AppNavigator;

