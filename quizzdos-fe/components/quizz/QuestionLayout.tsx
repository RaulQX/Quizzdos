import React from "react"
import { View, Text } from "react-native"
import { s } from "react-native-wind"

interface QuestionLayoutProps {
    question: string
    children: React.ReactNode
}

const QuestionLayout = ({ question, children }: QuestionLayoutProps) => (
    <View style={s`flex flex-col`}>
        <View style={s``}>
            <Text style={s`text-white font-bold text-xl`}>
                {question}
            </Text>
        </View>
        <View style={s`flex flex-col mt-4`}>
            {children}
        </View>
    </View>
)

export default QuestionLayout