import { NavigationContainer } from "@react-navigation/native"
import Login from "./Pages/Login"
import Welcome from "./Pages/Welcome"
import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { s } from "react-native-wind"

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
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
