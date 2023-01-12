import { RouteProp } from "@react-navigation/native"
import React, { useState } from "react"
import { View, Text, ScrollView } from "react-native"
import { s } from "react-native-wind"
import {
	AcademicIcon,
	BookIcon,
	ClipboardIcon,
	PencilIcon,
	XIcon,
} from "../assets/icons/outline"
import HeaderTitle from "../components/common/Header"
import NavBar from "../components/layouts/NavLayout"

interface CourseProps {
	route: RouteProp<{
		params: {
			course: {
				name: string
				sections: Omit<CourseSectionProps, 'phase'>[]
			}
		}
	}, 'params'>
	navigation: any
}

const Course = ({ route: { params: { course } }, navigation }: CourseProps) => {
	const onPressInfo = (info: string) => {
		console.log(info)
	}

	return (
		<NavBar navigation={navigation} selected="Home">
			<HeaderTitle title={course.name} />
			<ScrollView style={s`flex flex-col`}>
				{course.sections.map((section, key) => {
					const phase = course.sections.slice(0, key).reduce((acc, { quizzes }) => acc + quizzes.length, 0)

					return <CourseSection key={key} {...section} phase={phase} />
				})}
			</ScrollView>
		</NavBar>
	)
}

export default Course

interface CourseSectionProps {
	name: string
	summary: string
	materials: string
	quizzes: Omit<CourseQuizProps, 'phase'>[]
	phase: number
}

const CourseSection = ({ name, summary, materials, quizzes, phase }: CourseSectionProps) => {
	const completed = quizzes.filter(({ completed }) => completed)
	const percentage = completed.length / quizzes.length * 100

	return (
		<View style={s`flex flex-col`}>
			<View style={s`flex flex-row justify-between p-2 bg-coolGray-500`} >
				<View style={s`flex-1 flex-col`}>
					<View style={s`flex flex-row align-center`} >
						<Text style={s`font-bold text-xl`}>
							{name}
						</Text>
						<View style={s`ml-3 bg-coolGray-700 px-2 py-1 rounded-md`} >
							<Text style={s`text-white text-xs font-bold`} >
								{percentage % 1 != 0 ? percentage.toFixed(0) : 100}
								% COMPLETE
							</Text>
						</View>
					</View>
					<View style={s`mt-2`}>
						<Text>{summary}</Text>
					</View>
				</View>
				<View style={s`flex justify-center`}>
					<View style={s`p-2 border-2 border-b-4 rounded-xl`}>
						<BookIcon style={s`w-6 text-white`} />
					</View>
				</View>
			</View>
			<View style={s`flex flex-col items-center mb-2`}>
				{quizzes.map((quiz, key) => (
					<CourseQuiz
						key={key}
						{...quiz}
						phase={phase + key}
					/>
				))}
			</View>
		</View>
	)
}

interface CourseQuizProps {
	type: "task" | "quiz" | "exam"
	name: string
	completed: boolean
	phase: number
}

const CourseQuiz = ({ type, name, completed, phase }: CourseQuizProps) => {
	const margin = Math.sin((phase * Math.PI) / 4) * 100

	return (
		<View style={[s`mt-2 p-5 rounded-full border border-b-4 border-white`, { backgroundColor: "#C7D2FE", marginLeft: margin, },]}>
			{{
				task: (<ClipboardIcon style={s`w-6 text-balck`} />),
				quiz: (<PencilIcon style={s`w-6 text-balck`} />),
				exam: (<AcademicIcon style={s`w-6 text-balck`} />),
			}[type]}
		</View>
	)
}

// function calculatePhase(sections)