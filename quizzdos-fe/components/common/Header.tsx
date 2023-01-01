import { View, Text } from "react-native"
import { s } from "react-native-wind"

const HeaderTitle = ({ title }: headerProps) => {
	const splitTitle = title.split(" ")
	return (
		<View style={s`flex w-full items-center justify-center`}>
			<View
				style={[
					s`flex flex-row justify-center align-center mt-4 mb-4 border-b-2 border-gray-300 w-11/12`,
					{ boxShadow: "0px 3px 0px rgba(0,0,0,.15)" },
				]}
			>
				<Text style={s`text-3xl text-white mb-2`}>
					{splitTitle[0]}
					<Text style={s`text-indigo-300`}> {splitTitle[1]}</Text>
				</Text>
			</View>
		</View>
	)
}

interface headerProps {
	title: string
}
export default HeaderTitle
