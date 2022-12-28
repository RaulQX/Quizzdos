import React, { useState } from "react"
import { Pressable, View, Text } from "react-native"
import { s } from "react-native-wind"
import QuestionLayout from "./QuestionLayout"

interface QuestionProps {
    question: string
    answers: string[]
}

const QuestionSingle = ({ question, answers }: QuestionProps) => {
    const [pressed, setPressed] = useState(-1)
    const [selected, setSelected] = useState(-1)

    const onPressIn = (index: number) => {
        setPressed(index)
    }

    const onPressOut = (index: number) => {
        setPressed(-1)
        if (selected === index) {
            setSelected(-1)
        }
        else {
            setSelected(index)
        }
    }

    return (
        <QuestionLayout question={question}>
            {answers.map((answer, key) => (
                <View style={s`flex-1`}>
                    <Pressable style={[s`border-2 rounded-xl border-coolGray-500 px-4 py-2 my-2`,
                    pressed === key ? s`bg-coolGray-600 border-b-2` : s`bg-coolGray-700 border-b-4`,
                    selected === key ? s`border-green-500` : s`border-coolGray-500`
                    ]}
                        key={key}
                        onPressIn={() => onPressIn(key)}
                        onPressOut={() => onPressOut(key)}
                    >
                        <Text style={s`text-white font-bold text-lg`}>
                            {answer}
                        </Text>
                    </Pressable>
                </View>
            ))}
        </QuestionLayout>
    )
}

export default QuestionSingle