import { RouteProp } from "@react-navigation/native"
import React, { useState } from "react"
import { ScrollView, View, Text, Pressable } from "react-native"
import { s } from "react-native-wind"
import { XIcon } from "../assets/icons/outline"
import Pagination from "../components/common/Pagination"
import QuestionPhoto from "../components/quizz/QuestionPhoto"

interface QuizzProps {
    // route: RouteProp<{
    //     params: {
    //         quizz: {}
    //     }
    // }, 'params'>
    navigation: any
}

// const Quizz = ({ route: { params: { quizz } }, navigation }: QuizzProps) => {
const Quizz = ({ navigation }: QuizzProps) => {
    const [index, setIndex] = useState(0)

    return (
        <View style={s`flex flex-col h-full bg-coolGray-700 px-3 py-1`}>
            <View style={s`flex flex-row justify-between`}>
                <Pressable onPress={() => { navigation.goBack() }}>
                    <XIcon style={s`w-6 text-white`} />
                </Pressable>
            </View>
            <ScrollView style={s`mt-2`}>
                <QuestionPhoto {...dummyDataQuizzWrite[index]} />
            </ScrollView>
            <View>
                <Pagination pages={dummyDataQuizzMultiple.length} index={index} setIndex={setIndex} />
            </View>
        </View>
    )
}

export default Quizz

const dummyDataQuizzSingle = [
    {
        question: "What is the capital of France?",
        answers: [
            "Paris",
            "London",
            "Berlin",
            "Rome"
        ],
        correctAnswer: 0
    },
    {
        question: "How many continents are there?",
        answers: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7"
        ],
        correctAnswer: 6
    },
    {
        question: "What is the capital of Germany?",
        answers: [
            "Paris",
            "London",
            "Berlin",
            "Rome"
        ],
        correctAnswer: 2
    },
    {
        question: "What is the capital of Italy?",
        answers: [
            "Paris",
            "London",
            "Berlin",
            "Rome"
        ],
        correctAnswer: 3
    },
    {
        question: "What is the capital of England?",
        answers: [
            "Paris",
            "London",
            "Berlin",
            "Rome"
        ],
        correctAnswer: 1
    },
    {
        question: "What is the capital of Spain?",
        answers: [
            "Paris",
            "London",
            "Berlin",
            "Rome"
        ],
        correctAnswer: 0
    },
]

const dummyDataQuizzMultiple = [
    {
        question: "What is true about React Native?",
        answers: [
            "It is a framework for building native apps using React",
            "It is a framework for building web apps using React",
            "It is a framework for building mobile apps using React",
            "It is a framework for building desktop apps using React"
        ],
        correctAnswers: [0, 2]
    },
    {
        question: "The following is a valid React Native component",
        answers: [
            "const Component = () => { return <View /> }",
            "const Component = () => { return <View></View> }",
            "const Component = () => { return <View><View> }",
            "const Component = () => { return <View> }"
        ],
        correctAnswers: [0, 1]
    }
]


const dummyDataQuizzWrite = [
    {
        question: "What is the capital of France?",
        correctAnswer: "Paris"
    },
    {

        question: "What is the capital of Germany?",
        correctAnswer: "Berlin"
    },
]