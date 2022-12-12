import React, { useState } from "react"
import { Pressable, View, Text } from "react-native"
import { s } from "react-native-wind"

interface QuestionProps {
    question: string
    answers: string[]
    correctAnswer: number
}

const QuestionSingle = ({ question, answers, correctAnswer }: QuestionProps) => {
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
        <View style={s`flex flex-col`}>
            <View style={s``}>
                <Text style={s`text-white font-bold text-xl`}>
                    {question}
                </Text>
            </View>
            <View style={s`flex flex-col mt-4`}>
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
            </View>
        </View>
    )
}

export default QuestionSingle