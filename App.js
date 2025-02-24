import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./src/navigation/MainNavigation/MainNavigation";
import AuthNav from "./src/navigation/AuthNavigation/AuthNav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import UserContext from "./src/context/UserContext";
import LanguageContext from "./src/context/LangaugeContext";
import { getToken } from "./src/api/storage";
export default function App() {
  const queryClient = new QueryClient();
  const [isAuth, setIsAuth] = useState(false);

  const checkToken = async () => {
    // get the token
    const token = await getToken();
    if (token) {
      // token ? setIsAuth(true) :
      setIsAuth(true);
    }
  };
  useEffect(() => {
    checkToken();
  });

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <UserContext.Provider value={{ isAuth, setIsAuth }}>
          {isAuth ? <MainNavigation /> : <AuthNav />}
        </UserContext.Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
