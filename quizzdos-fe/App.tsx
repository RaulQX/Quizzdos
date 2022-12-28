import Course from "./screens/Course"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { UserProvider } from "./contexts/User/UserContext"
import {
	Welcome,
	Home,
	Login,
	ProfileSetup,
	Profile,
	Register,
	AdminHome,
	AdminPeople,
	Feed,
	Quizz,
} from "./screens/.Screens"

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
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen
						name="Profile"
						component={Profile}
						initialParams={{ personId: "" }}
					/>
					<Stack.Screen name="AdminPeople" component={AdminPeople} />
					<Stack.Screen name="Quizz" component={Quizz} />

					<Stack.Screen name="Course" component={Course} />
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen
						name="ProfileSetup"
						component={ProfileSetup}
					/>
					<Stack.Screen name="Feed" component={Feed} />
					<Stack.Screen name="Welcome" component={Welcome} />
					<Stack.Screen name="AdminHome" component={AdminHome} />
					<Stack.Screen name="Register" component={Register} />
				</Stack.Navigator>
			</NavigationContainer>
		</UserProvider>
	)
}
