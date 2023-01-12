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
					<Stack.Screen name="Account" component={Account} />
					<Stack.Screen
						name="Student Statistics"
						component={StudentStatistics}
					/>
					<Stack.Screen
						name="Create Quizz"
						component={CreateQuizz}
					/>
					<Stack.Screen
						name="Course"
						component={Course}
						initialParams={{ course: initialCourseParams }}
					/>
					<Stack.Screen
						name="Customize Quizz"
						component={CustomizeQuizz}
					/>
					<Stack.Screen
						name="Create Course"
						component={CreateCourse}
					/>
					<Stack.Screen
						name="Login"
						component={Login}
					/>
					<Stack.Screen
						name="StudentHome"
						component={StudentHome}
					/>
					<Stack.Screen
						name="ProfessorHome"
						component={ProfessorHome}
					/>
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
					<Stack.Screen
						name="Quizz"
						component={Quizz}
					/>
					<Stack.Screen
						name="ProfileSetup"
						component={ProfileSetup}
					/>
					<Stack.Screen
						name="Feed"
						component={Feed}
					/>
					<Stack.Screen
						name="Welcome"
						component={Welcome}
					/>
					<Stack.Screen
						name="AdminHome"
						component={AdminHome}
					/>
					<Stack.Screen
						name="Register"
						component={Register}
					/>
				</Stack.Navigator >
			</NavigationContainer >
		</UserProvider >
	)
}



const initialCourseParams = {
	id: 1,
	name: "MSA",
	sections: [
		{
			name: "Course 1",
			summary: "Introuction",
			materials: "http://course-1",
			quizzes: [
				{
					type: "task",
					name: "Task 1",
					completed: true,
				},
				{
					type: "task",
					name: "Task 2",
					completed: true,
				},
				{
					type: "task",
					name: "Task 3",
					completed: true,
				},
				{
					type: "task",
					name: "Task 4",
					completed: true,
				},
				{
					type: "task",
					name: "Task 5",
					completed: true,
				},
				{
					type: "task",
					name: "Task 6",
					completed: true,
				},
			],
		},
		{
			name: "Course 2",
			summary: "Introduction to Android OS",
			materials: "http://course-2",
			quizzes: [
				{
					type: "task",
					name: "Task 1",
					completed: true,
				},
				{
					type: "task",
					name: "Task 2",
					completed: true,
				},
				{
					type: "quiz",
					name: "Task 3",
					completed: true,
				},
			],
		},
		{
			name: "Course 3",
			summary: "Android Application Components",
			materials: "http://course-3",
			quizzes: [
				{
					type: "task",
					name: "Task 1",
					completed: true,
				},
				{
					type: "task",
					name: "Task 2",
					completed: false,
				},
				{
					type: "exam",
					name: "Task 3",
					completed: false,
				},
			],
		},
	],
}
