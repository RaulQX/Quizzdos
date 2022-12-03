import { View, Text, Image } from "react-native"
import { s } from "react-native-wind"
import malePerson from "../../assets/images/malePerson.png"
import femalePerson from "../../assets/images/femalePerson.png"

interface UserProps {
	gender: string
	name: string
}

const User = (props: UserProps) => {
	var avatar = props.gender === "male" ? malePerson : femalePerson

	return (
		<View style={s`flex flex-col items-center`}>
			<Image source={avatar} style={s`w-20 h-20`} />
			<Text style={s`text-center`}>{props.name}</Text>
		</View>
	)
}
export default User
