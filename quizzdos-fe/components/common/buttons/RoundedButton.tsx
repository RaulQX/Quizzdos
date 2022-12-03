import React from "react"
import { View, TouchableHighlight, Text } from "react-native"
import { s } from "react-native-wind"

interface RoundedButtonProps {
	text: string
	onPress: (event: any) => void
}

const RoundedButton = ({ text, onPress }: RoundedButtonProps) => {
	return (
		<View style={s`w-1/2 justify-center items-center my-3`}>
			<View
				style={s`bg-indigo-400 flex items-center justify-center border-1 border-indigo-400 rounded-full h-40 w-40`}
			>
				<View
					style={s`bg-coolGray-700 flex items-center justify-center border-2 border-indigo-400 rounded-full h-36 w-36`}
				>
					<TouchableHighlight
						style={s`bg-indigo-200 flex items-center justify-center border-2 border-indigo-400 rounded-full h-32 w-32`}
						underlayColor="#aaaaaa"
						onPress={onPress}
					>
						<Text style={s`text-2xl text-indigo-500 font-bold`}>
							{text}
						</Text>
					</TouchableHighlight>
				</View>
			</View>
		</View>
	)
}
export default RoundedButton
