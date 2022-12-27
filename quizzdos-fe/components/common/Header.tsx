import { View, Text } from "react-native"
import { s } from "react-native-wind"

const HeaderTitle = ({ title }: headerProps) => {
	const splitTitle = title.split(" ")
	return (
		<View
			style={s`flex flex-row justify-center mt-4 mb-4 border-b-2 border-gray-300 w-full`}
		>
			<Text style={s`text-3xl text-white `}>
				{splitTitle[0]}
				<Text style={s`text-indigo-300`}> {splitTitle[1]}</Text>
			</Text>
		</View>
	)
}

interface headerProps {
	title: string
}
export default HeaderTitle
