import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useAppNavigation } from "../hooks/useAppNavigation";
import { theme } from "../theme";

const BackButton = () => {
  const navigation = useAppNavigation();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: theme.spacing.spacing_4,
  },
});

export default BackButton;
