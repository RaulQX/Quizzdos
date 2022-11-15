import { NavigationContainer } from "@react-navigation/native"
import Login from "./Pages/Login"
import Welcome from "./Pages/Welcome"
import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { s } from "react-native-wind"
import { View } from "react-native"
const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<View style={s`h-11 bg-black`} />
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Welcome" component={Welcome} />
				<Stack.Screen name="Login" component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
