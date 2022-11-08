import { View, Text } from "react-native"
import { Constants } from "../Constants/Constants"
interface LogoProps {
	size: number
}
const Logo = ({ size }: LogoProps) => {
	return (
		<View
			style={{
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "row",
			}}
		>
			<Text style={{ color: "white", fontSize: size }}>Quizz</Text>
			<Text
				style={{
					color: Constants.blueLogo,
					fontSize: size,
					marginBottom: 15,
				}}
			>
				DOS
			</Text>
		</View>
	)
}
export default Logo
