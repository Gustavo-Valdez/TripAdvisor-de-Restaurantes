import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { AppNavigation } from "./src/navigation/AppNavigation";
import { initFirabase } from "./src/utils";

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>

      <Toast />
    </>
  );
}
