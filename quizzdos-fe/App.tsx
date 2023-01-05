import Course from "./screens/Course"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { UserProvider } from "./contexts/User/UserContext"
import {
	Welcome,
	Login,
	ProfileSetup,
	Profile,
	Register,
	AdminHome,
	Feed,
	Quizz,
	AdminEditUser,
	ProfessorHome,
	StudentHome,
	CreateCourse,
	CreateQuizz,
	CustomizeQuizz,
	StudentStatistics,
	Account,
	People,
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
					<Stack.Screen name="Account" component={Account} />
					<Stack.Screen
						name="Student Statistics"
						component={StudentStatistics}
					/>
					<Stack.Screen
						name="Customize Quizz"
						component={CustomizeQuizz}
					/>
					<Stack.Screen name="Create Quizz" component={CreateQuizz} />
					<Stack.Screen
						name="Create Course"
						component={CreateCourse}
					/>
					<Stack.Screen name="StudentHome" component={StudentHome} />
					<Stack.Screen
						name="ProfessorHome"
						component={ProfessorHome}
					/>
					<Stack.Screen name="Course" component={Course} />
					<Stack.Screen
						name="Profile"
						component={Profile}
						initialParams={{ personId: "" }}
					/>
					<Stack.Screen
						name="Admin User"
						component={AdminEditUser}
						initialParams={{ personId: "" }}
					/>

					<Stack.Screen name="People" component={People} />
					<Stack.Screen
						name="AdminEditUser"
						component={AdminEditUser}
					/>
					<Stack.Screen name="Quizz" component={Quizz} />

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
