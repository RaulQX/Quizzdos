import React, { useState } from "react"
import { Pressable, View, Text } from "react-native"
import { s } from "react-native-wind"
import QuestionLayout from "./QuestionLayout"

interface QuestionProps {
    question: string
    answers: string[]
}

const QuestionMultiple = ({ question, answers }: QuestionProps) => {
    const [pressed, setPressed] = useState(-1)
    const [selected, setSelected] = useState(Array(answers.length).fill(false))

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
        <QuestionLayout question={question}>
            {answers.map((answer, key) => (
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
            ))}
        </QuestionLayout>
    )
}

export default QuestionMultiple