import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import "./i18n";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
      <Toast />
    </NavigationContainer>
  );
}
