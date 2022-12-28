import { View } from "react-native"
import { s } from "react-native-wind"
import NavBar from "../components/layouts/navigation/NavBar"
import ProfileArea from "../components/profile/ProfileArea"
interface ProfileProps {
	navigation: any
	route: any
}

const Profile = ({ navigation, route }: ProfileProps) => {
	const requestedPersonId = route.params.personId

	return (
		<NavBar navigation={navigation} selected="Profile">
			<View style={s`flex flex-row justify-center py-1 px-2`}>
				<ProfileArea personId={requestedPersonId} />
			</View>
		</NavBar>
	)
}

export default Profile
