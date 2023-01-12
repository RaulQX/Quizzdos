import React from "react"
import { TouchableOpacity } from "react-native"
import { ScrollView, Text, View } from "react-native"
import { ProgressChart } from "react-native-chart-kit"
import { s } from "react-native-wind"
import ButtonImportant from "../components/common/buttons/ButtonImportant"
import HeaderTitle from "../components/common/Header"
import NavLayout from "../components/layouts/NavLayout"

interface HomeProps {
	navigation: any
	isProfessor: boolean
}

const Home = ({ navigation, isProfessor }: HomeProps) => {
	const onCoursePress = (id: number) => {
		navigation.navigate("Course", {
			course: dummyDataLectures.find((lecture) => lecture.id === id),
		})
	}
	const home = isProfessor ? "ProfessorHome" : "StudentHome"
	return (
		<NavLayout navigation={navigation} selected={home}>
			<HeaderTitle title="Home" />
			<ScrollView style={s`flex flex-col px-4`}>
				{isProfessor && (
					<View style={s`flex items-center w-full mb-4`}>
						<View style={s`w-3/4`}>
							<ButtonImportant
								onPress={() =>
									navigation.navigate("Create Course")
								}
								text={"Add Course"}
							/>
						</View>
					</View>
				)}
				{dummyData.map(
					({ id, name, summary, completed, total }, key) => (
						<TouchableOpacity
							style={[
								s`flex flex-row justify-between rounded-xl  mt-3 overflow-hidden`,
								{
									backgroundColor: "rgba(30,18,46,.5)",
									boxShadow: "3px 3px 15px rgba(0,0,0,.5)",
								},
							]}
							key={key}
							onPress={() => onCoursePress(id)}
						>
							<View style={s`flex flex-1 flex-col py-2 px-4`}>
								<Text
									style={s`text-white font-bold tracking-wide uppercase`}
								>
									{name}
								</Text>
								<Text style={s`text-white mt-2 italic`}>
									{summary}
								</Text>
							</View>
							<View
								style={[
									s`flex justify-center`,
									{ backgroundColor: "rgba(30,18,46,.5)" },
								]}
							>
								<ProgressChart
									data={{
										data: [completed / total],
									}}
									width={100}
									height={100}
									chartConfig={{
										backgroundGradientFromOpacity: 0,
										backgroundGradientToOpacity: 0,
										color: (opacity = 1) =>
											`rgba(0, 119, 255, ${opacity})`,
									}}
									hideLegend
								/>
							</View>
						</TouchableOpacity>
					)
				)}
			</ScrollView>
		</NavLayout>
	)
}

export default Home

const dummyData = [
	{
		id: 1,
		name: "MSA",
		summary: "This is a summary",
		completed: 15,
		total: 20,
	},
	{
		id: 2,
		name: "IPR",
		summary:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		completed: 15,
		total: 30,
	},
]

const dummyDataLectures = [
	{
		id: 1,
		name: "MSA",
		lectures: [
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
						type: "task",
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
						name: "Task 1",
						completed: true,
					},
					{
						name: "Task 2",
						completed: false,
					},
					{
						name: "Task 3",
						completed: false,
					},
				],
			},
			{
				name: "Course 4",
				summary: "Android Application Components",
				materials: "http://course-4",
				quizzes: [
					{
						name: "Task 1",
						completed: false,
					},
					{
						name: "Task 2",
						completed: false,
					},
					{
						name: "Task 3",
						completed: false,
					},
				],
			},
		],
	},
]
