import type { NavigationProp, RouteProp } from "@react-navigation/native";
import { useNavigation, useRoute } from "@react-navigation/native";
import type { RootStackParamList } from "../types/navigation";

export const useAppNavigation = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return navigation;
};

export const useAppRoute = <RouteKey extends keyof RootStackParamList>() => {
  const route = useRoute<RouteProp<RootStackParamList, RouteKey>>();
  return route;
};
