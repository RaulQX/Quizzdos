import { View } from "react-native"
import { s } from "react-native-wind"
import HeaderTitle from "../components/common/Header"
import NavBar from "../components/layouts/NavLayout"
import { RemovePerson, EditUser } from "../components/profile/ProfileActions"
import ProfileArea from "../components/profile/ProfileArea"

interface ProfileProps {
	navigation: any
	route: any
}

const Profile = ({ navigation, route }: ProfileProps) => {
	const requestedPersonId = route.params.personId

	return (
		<NavBar navigation={navigation} selected="Profile">
			<View style={s`flex items-center`}>
				<HeaderTitle title="Profile" />
				<ProfileArea
					personId={requestedPersonId}
					navigation={navigation}
					removePerson={() =>
						RemovePerson(requestedPersonId, navigation)
					}
					editUser={() => EditUser(requestedPersonId, navigation)}
				/>
			</View>
		</NavBar>
	)
}

export default Profile
