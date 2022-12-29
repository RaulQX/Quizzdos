import { View } from "react-native"
import { s } from "react-native-wind"
import RemoveUserFetch from "../Api/Admin/RemoveUser"
import NavBar from "../components/layouts/navigation/NavBar"
import { RemovePerson } from "../components/profile/ProfileActions"
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
				<ProfileArea
					personId={requestedPersonId}
					navigation={navigation}
					removePerson={() =>
						RemovePerson(requestedPersonId, navigation)
					}
				/>
			</View>
		</NavBar>
	)
}

export default Profile
