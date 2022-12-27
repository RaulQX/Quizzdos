import { Text, View } from "react-native"
import { s } from "react-native-wind"
import User from "../user/User"

const ProfileDetails = ({
	gender,
	name,
	username,
	joinedDate,
}: ProfileDetailsProps) => {
	return (
		<View style={s`flex w-full justify-between mx-4 p-5 flex-row`}>
			<User gender={gender} name={name} username={username} />
			<View style={s`flex flex-col items-center justify-around`}>
				<View style={s`flex flex-col items-center`}>
					<Text style={s`text-white`}>Joined on</Text>
					<Text style={s`text-white`}>{joinedDate}</Text>
				</View>
				<Text style={s`text-white`}>Cake icon</Text>
			</View>
		</View>
	)
}

interface ProfileDetailsProps {
	gender: number
	name: string
	username: string
	joinedDate: string
}

export default ProfileDetails
