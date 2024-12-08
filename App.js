import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthNav from "./src/navigation/AuthNavigation/AuthNav";
export default function App() {
  const queryClient = new QueryClient();
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <QueryClientProvider client={queryClient}>
        {/* <MainNavigation /> */}
        <AuthNav />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
