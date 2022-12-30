import { View, Text, Image } from "react-native"
import { s } from "react-native-wind"
import malePerson from "../../assets/images/malePerson.png"
import femalePerson from "../../assets/images/femalePerson.png"

interface UserProps {
	gender: number
	name: string
	username: string
}

const User = (props: UserProps) => {
	console.log(props.gender)
	var avatar = props.gender === 1 ? malePerson : femalePerson

	return (
		<View style={s`flex flex-col items-center`}>
			<Image source={avatar} style={s`w-20 h-20`} />
			<Text style={s`text-center text-white`}>{props.name}</Text>
			<Text style={s`text-center text-white`}>{props.username}</Text>
		</View>
	)
}
export default User
