import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthNav from "./src/navigation/AuthNavigation/AuthNav";
import { useEffect, useState } from "react";
import UserContext from "./src/context/UserContext";
import { getToken } from "./src/api/storage";
export default function App() {
  const queryClient = new QueryClient();
  const [authenticated, setAuthenticated] = useState(false); //keep track of the user status

  const checkToken = async () => {
    // check if the token exists
    const token = await getToken();
    // exists ? setAuth to true : null
    if (token) setAuthenticated(true);
  };

  // useEffect

  useEffect(() => {
    checkToken();
  });
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={[authenticated, setAuthenticated]}>
          {authenticated ? <MainNavigation /> : <AuthNav />}
        </UserContext.Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
