import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthNav from "./src/navigation/AuthNavigation/AuthNav";
import { useContext, useState, useEffect } from "react";
import { UserContext, UserProvider } from "./src/context/UserContext";
export default function App() {
  const queryClient = new QueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = async () => {
    const token = await getToken();
    if (token) {
      setIsAuthenticated(true);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <UserContext.Provider value={[isAuthenticated, setIsAuthenticated]}>
      <NavigationContainer>
        <StatusBar style="light" />
        <QueryClientProvider client={queryClient}>
          {isAuthenticated ? <MainNavigation /> : <AuthNav />}
        </QueryClientProvider>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
