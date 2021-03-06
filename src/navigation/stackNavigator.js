import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../home/home";
import Location from "../location/location";
import About from "../about/about";
import Menu from "../menu/menu";
import Specifications from "../specifications/specifications";

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Location" component={Location} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Specifications" component={Specifications} />
    </Stack.Navigator>
    <Menu />
  </NavigationContainer>
);

export default StackNavigator;
