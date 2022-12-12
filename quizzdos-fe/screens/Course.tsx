import { RouteProp } from "@react-navigation/native"
import React, { useState } from "react"
import { TouchableOpacity } from "react-native"
import { View, Text, TouchableHighlight, ScrollView } from "react-native"
import { s } from "react-native-wind"
import { AcademicIcon, BookIcon, ClipboardIcon, PencilIcon, XIcon } from "../assets/icons/outline"
import NavBar from "../components/layouts/navigation/NavBar"

interface CourseProps {
    route: RouteProp<{
        params: {
            course: {
                name: string
                lectures: {
                    name: string
                    summary: string
                    materials: string
                    quizzes: {
                        type: "task" | "quizz" | "exam"
                        name: string
                        completed: boolean
                    }[]
                }[]
            }
        }
    }, 'params'>
    navigation: any
}

// const Course = ({ route: { params: { course } }, navigation }: CourseProps) => {
const Course = ({ navigation }: CourseProps) => {
    const onPressInfo = (info: string) => {
        console.log(info)
    }

    let index = 0

    return (
        <NavBar navigation={navigation} selected="Home">
            <View style={s`flex flex-row justify-between align-center bg-coolGray-500 border-b-2 border-coolGray-700 py-1 px-2`}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <XIcon style={s`w-6 text-white`} />
                </TouchableOpacity>
                <Text style={s`text-white font-bold uppercase`}>
                    {dummyDataLectures.name}
                </Text>
                <XIcon style={s`w-6 text-transparent`} />
            </View>
            <ScrollView style={s`flex flex-col`}>
                {dummyDataLectures.lectures.map(({ name, summary, materials, quizzes }, key) => {
                    const percentage = quizzes.filter(({ completed }) => completed).length / quizzes.length * 100

                    return (
                        <View style={s`flex flex-col`} key={key}>
                            <View style={s`flex flex-row justify-between p-2 bg-coolGray-500`}>
                                <View style={s`flex-1 flex-col`}>
                                    <View style={s`flex flex-row align-center`}>
                                        <Text style={s`font-bold text-xl`}>
                                            {name}
                                        </Text>
                                        <View style={s`ml-3 bg-coolGray-700 px-2 py-1 rounded-md`}>
                                            <Text style={s`text-white text-xs font-bold`}>
                                                {percentage}% COMPLETE
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
                                {quizzes.map(({ type, name, completed }, key) => {
                                    const margin = Math.sin(index * Math.PI / 4) * 100
                                    index++

                                    return (
                                        <View
                                            style={[s`mt-2 p-5 rounded-full border-b-4 border-white`, { backgroundColor: '#C7D2FE', marginLeft: margin }]}
                                            key={key}
                                        >
                                            {{
                                                task: <ClipboardIcon style={s`w-6 text-balck`} />,
                                                quizz: <PencilIcon style={s`w-6 text-balck`} />,
                                                exam: <AcademicIcon style={s`w-6 text-balck`} />,
                                            }[type]}
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </NavBar>
    )
}

export default Course



const dummyDataLectures = {
    id: 1,
    name: "MSA",
    lectures:
        [
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
                        type: "quizz",
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
        ]
}