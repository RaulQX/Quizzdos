import { View, Text } from "react-native"
import { Constants } from "../Constants/Constants"
import { s } from "react-native-wind"

const Logo = () => {
	return (
		<View style={s`flex flex-row`}>
			<Text style={s`text-7xl font-medium`}>Quizz</Text>
			<Text style={s`text-7xl font-black text-indigo-300`}>DOS</Text>
		</View>
	)
}
export default Logo
