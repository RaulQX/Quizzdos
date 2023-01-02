import React from "react"
import { View, Text, TouchableHighlight } from "react-native"
import { s } from "react-native-wind"

interface ButtonImportantProps {
	text: string
	onPress: (event: any) => void
	size?: "small" | "medium" | "large"
}

const ButtonImportant = ({ text, onPress, size }: ButtonImportantProps) => {
	const nxl = size === "small" ? "1xl" : size === "large" ? "3xl" : "2xl"

	return (
		<TouchableHighlight
			style={s`bg-indigo-200 flex items-center border-2 border-indigo-400 rounded-3xl py-2 mt-4`}
			underlayColor="#aaaaaa"
			onPress={onPress}
		>
			<Text style={s`text-${nxl} text-indigo-500 font-bold`}>{text}</Text>
		</TouchableHighlight>
	)
}
export default ButtonImportant
