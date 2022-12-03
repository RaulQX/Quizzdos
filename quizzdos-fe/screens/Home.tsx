import React, { useState } from "react"
import { View, Text, TouchableHighlight } from "react-native"
import { s } from "react-native-wind"
import NavBar from "../components/layouts/navigation/NavBar"

interface HomeProps {
	navigation: any
}

const Home = ({ navigation }: HomeProps) => {
	const onPressInfo = (info: string) => {
		console.log(info)
	}

	return (
		<NavBar navigation={navigation} selected="Home">
			<View style={s`flex flex-col`}>
				{dummyData.map(({ name, summary, materials, quizzes }) => (
					<View style={s`flex flex-col`}>
						<View
							style={s`flex flex-row justify-between p-2 bg-coolGray-500`}
						>
							<View style={s`flex flex-col`}>
								<Text style={s`font-bold`}>{name}</Text>
								<View>
									<Text>{summary}</Text>
								</View>
							</View>
							<View style={s`p-2 border-2 rounded-xl`}>
								<Text>
									info {/* TODO: replace with icon */}
								</Text>
							</View>
						</View>
						<View style={s`flex flex-col items-center mb-2`}>
							{quizzes.map(({ name, completed }) => (
								<View
									style={s`mt-2 p-4 rounded-full ${
										completed ? "bg-blue-300" : "bg-red-300"
									}`}
								>
									<Text>{name}</Text>
								</View>
							))}
						</View>
					</View>
				))}
			</View>
		</NavBar>
	)
}

export default Home

const dummyData = [
	{
		name: "Course 1",
		summary: "Introuction",
		materials: "http://course-1",
		quizzes: [
			{
				name: "Task 1",
				completed: true,
			},
			{
				name: "Task 2",
				completed: true,
			},
			{
				name: "Task 3",
				completed: true,
			},
			{
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
				name: "Task 1",
				completed: true,
			},
			{
				name: "Task 2",
				completed: true,
			},
			{
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
]
