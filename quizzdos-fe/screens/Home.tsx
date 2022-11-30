import React, { useState } from "react"
import { View, Text } from "react-native"
import { s } from "react-native-wind"
import NavBar from "../components/layouts/navigation/NavBar"

interface HomeProps {
	navigation: any
}

const Home = ({ navigation }: HomeProps) => {
	const dummyData = [
		{
			name: "Unit 1",
			quizzes: [
				{
					name: "Quiz 1",
				}
			]
		}
	]

	return (
		<NavBar navigation={navigation}>
			<View>
				<Text>Home</Text>
			</View>
		</NavBar>
	)
}

export default Home
