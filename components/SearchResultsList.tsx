import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { theme } from "../theme";
import Text from "./Text";

interface SearchResult {
  id: string;
  name: string;
}

interface SearchResultsListProps {
  results: SearchResult[];
  onSelectResult: (result: SearchResult) => void;
  onClose: () => void;
  style?: ViewStyle;
}

const SearchResultsList = ({
  results,
  onSelectResult,
  onClose,
  style,
}: SearchResultsListProps) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.closeButton}
        onPress={onClose}
        activeOpacity={0.7}
      >
        <Ionicons
          name="close"
          size={24}
          color={theme.colors.secondaryButtonText}
        />
      </TouchableOpacity>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.resultItem}
            onPress={() => onSelectResult(item)}
            activeOpacity={0.7}
          >
            <Text style={styles.resultText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: theme.colors.inputBackground,
    borderRadius: theme.spacing.spacing_8,
    position: "relative",
    paddingTop: theme.spacing.spacing_16,
    paddingBottom: theme.spacing.spacing_8,
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing.spacing_16,
    right: theme.spacing.spacing_16,
    zIndex: 10,
    padding: theme.spacing.spacing_4,
  },
  resultItem: {
    paddingVertical: theme.spacing.spacing_12,
    paddingHorizontal: theme.spacing.spacing_16,
  },
  resultText: {
    fontSize: 16,
    color: theme.colors.secondaryButtonText,
  },
});

export default SearchResultsList;
