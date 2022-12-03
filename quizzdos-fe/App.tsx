import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { UserProvider } from "./contexts/User/UserContext"
import {
	Welcome,
	Home,
	Login,
	ProfileSetup,
	Register,
	AdminHome,
	AdminUsers,
	Feed
} from "./screens/Screens"

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
					<Stack.Screen name="AdminUsers" component={AdminUsers} />
					<Stack.Screen name="AdminHome" component={AdminHome} />
					<Stack.Screen name="Feed" component={Feed} />
					<Stack.Screen
						name="ProfileSetup"
						component={ProfileSetup}
					/>
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Register" component={Register} />
					<Stack.Screen name="Welcome" component={Welcome} />
					<Stack.Screen name="Home" component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</UserProvider>
	)
}
