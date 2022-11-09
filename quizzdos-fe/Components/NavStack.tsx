import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../Pages/Login"
import Welcome from "../Pages/Welcome"

const Stack = createNativeStackNavigator()

const NavStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Welcome"
					component={Welcome}
					options={{ title: "Welcome" }}
				/>
				<Stack.Screen name="Login" component={Login} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
export default NavStack
