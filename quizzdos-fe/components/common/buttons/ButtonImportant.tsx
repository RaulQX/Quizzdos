import React from "react"
import { View, Text, TouchableHighlight } from "react-native"
import { s } from "react-native-wind"

interface ButtonImportantProps {
    text: string
    onPress: (event: any) => void
}

const ButtonImportant = ({ text, onPress }: ButtonImportantProps) => {
    return (
        <TouchableHighlight
            style={s`bg-indigo-200 flex items-center border-4 border-indigo-400 rounded-3xl py-2`}
            underlayColor="#aaaaaa"
            onPress={onPress}
        >
            <Text style={s`text-2xl text-indigo-500 font-bold`}>{text}</Text>
        </TouchableHighlight>
    )
}
export default ButtonImportant