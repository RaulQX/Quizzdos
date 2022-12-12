import React, { useState } from "react"
import { Pressable, View, Text } from "react-native"
import { s } from "react-native-wind"

interface QuestionProps {
    question: string
    answers: string[]
    correctAnswers: number[]
}

const QuestionMultiple = ({ question, answers, correctAnswers }: QuestionProps) => {
    const [pressed, setPressed] = useState(-1)
    const [selected, setSelected] = useState(answers.map(() => false)

    const onPressIn = (index: number) => {
        setPressed(index)
    }

    const onPressOut = (index: number) => {
        setPressed(-1)
        const newSelected = [...selected]
        newSelected[index] = !newSelected[index]
        setSelected(newSelected)
    }

    return (
        <View style={s`flex flex-col`}>
            <View style={s``}>
                <Text style={s`text-white font-bold text-lg`}>
                    {question}
                </Text>
            </View>
            <View style={s`flex flex-col mt-2`}>
                {answers.map((answer, key) => {
                    return (
                        <Pressable style={[s`border-2 border-b-4 rounded-xl border-coolGray-500 px-4 py-2 my-2`,
                        pressed === key ? s`bg-coolGray-600` : s`bg-coolGray-700`,
                        selected[key] ? s`border-green-500` : s`border-coolGray-500`
                        ]}
                            key={key}
                            onPressIn={() => onPressIn(key)}
                            onPressOut={() => onPressOut(key)}
                        >
                            <Text style={s`text-white`}>
                                {answer}
                            </Text>
                        </Pressable>
                    )
                })}
            </View>
        </View>
    )
}

export default QuestionMultiple