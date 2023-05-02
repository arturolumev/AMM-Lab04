import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Pokedex" component={Pokedex} />
        <Drawer.Screen name="Pokemon Capturados" component={Pokemon} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
