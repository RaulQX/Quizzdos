import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { UserProvider } from "./contexts/User/UserContext"
import { Welcome, Home, Login, ProfileSetup, Register } from "./screens/Screens"

const Stack = createNativeStackNavigator()

export default function App() {
	return (
		<UserProvider>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="Welcome" component={Welcome} />
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Register" component={Register} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen
						name="ProfileSetup"
						component={ProfileSetup}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</UserProvider>
	)
}
