import { BlurView } from "expo-blur"
import { View, Text } from "react-native"
import { s } from "react-native-wind"

const HeaderTitle = ({ title }: headerProps) => {
	const [firstWord, secondWord] = title.split(" ")

	return (
		<BlurView style={s`flex flex-row justify-center align-center py-2 w-full`}
			intensity={50}
		>
			<Text style={s`text-2xl text-white font-bold`}>
				{firstWord}
			</Text>
			<Text style={s`text-2xl text-indigo-300 font-bold`}>
				{secondWord}
			</Text>
		</BlurView>
	)
}

interface headerProps {
	title: string
}
export default HeaderTitle
