import { View, Text, TextInput } from "react-native"
import { s } from "react-native-wind"

interface SearchBarProps {
	placeholder: string
	direction: "left" | "right"
	onChangeText: (text: string) => void
	value: string
}

const SearchBar = ({
	placeholder,
	direction,
	value,
	onChangeText,
}: SearchBarProps) => {
	//let marginDirection = direction === "left" ? "ml-4" : "mr-4"
	return (
		<View
			style={s`bg-coolGray-700 flex flex-row justify-around items-center border-2 border-indigo-400 rounded-full h-12 w-5/6`}
		>
			<TextInput
				value={value}
				placeholder={placeholder}
				placeholderTextColor="#A9A9A9"
				onChangeText={onChangeText}
				style={s`text-${direction} text-indigo-300 font-semibold h-12 w-5/6`}
			/>
		</View>
	)
}
export default SearchBar
