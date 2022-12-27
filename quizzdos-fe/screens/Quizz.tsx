import { RouteProp } from "@react-navigation/native"
import React, { useState } from "react"
import { ScrollView, View, Text, Pressable } from "react-native"
import { s } from "react-native-wind"
import { XIcon } from "../assets/icons/outline"
import Pagination from "../components/common/Pagination"
import QuestionSingle from "../components/quizz/QuestionSingle"

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
                <QuestionSingle {...dummyDataQuizz[index]} />
            </ScrollView>
            <View>
                <Pagination pages={dummyDataQuizz.length} index={index} setIndex={setIndex} />
            </View>
        </View>
    )
}

export default Quizz

const dummyDataQuizz = [
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