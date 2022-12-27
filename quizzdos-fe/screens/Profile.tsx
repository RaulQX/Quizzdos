import React, { useContext } from "react"
import { ScrollView, View, Text } from "react-native"
import { s } from "react-native-wind"
import { CogIcon } from "../assets/icons/outline"
import ButtonImportant from "../components/common/buttons/ButtonImportant"
import NavBar from "../components/layouts/navigation/NavBar"
import ProfileArea from "../components/profile/ProfileArea"
import { Roles } from "../Constants/Constants"
import useUser from "../contexts/User/UserContext"

interface ProfileProps {
	navigation: any
	route: any
}

const Profile = ({ navigation, route }: ProfileProps) => {
	const currentUser = useUser()
	const requestedPersonId = route.params.personId
	const selfProfile = currentUser.personId === requestedPersonId
	const adminRole = currentUser.role === Roles.admin

	console.log(requestedPersonId)
	return (
		<NavBar navigation={navigation} selected="Profile">
			<View style={s`flex flex-row justify-center py-1 px-2`}>
				<ProfileArea>
					{!selfProfile && adminRole && (
						<>
							<ButtonImportant
								text="Remove user"
								onPress={() => {}}
							/>
							<ButtonImportant
								text="Modify user"
								onPress={() => {}}
							/>
						</>
					)}
				</ProfileArea>
			</View>
		</NavBar>
	)
}

export default Profile

const user = {}
