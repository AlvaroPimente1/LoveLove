import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Register from "../Pages/Register";
import Login from "../Pages/Login/Login";
import MyDrawer from "./Drawer";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
                <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
                <Stack.Screen name='Drawer' component={MyDrawer} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}