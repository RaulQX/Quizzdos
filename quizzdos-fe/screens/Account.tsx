import { View } from "react-native"
import { s } from "react-native-wind"
import ButtonImportant from "../components/common/buttons/ButtonImportant"
import HeaderTitle from "../components/common/Header"
import NavBar from "../components/layouts/navigation/NavBar"
import {
	ProfileAdminSelfView,
	ProfileProfessorSelfView,
	ProfileStudentSelfView,
} from "../components/profile/.ProfileViews"
import ProfileDetails from "../components/profile/ProfileDetails"
import { Roles } from "../constants/Constants"
import useUser from "../contexts/User/UserContext"

const Account = ({ navigation }: AccountProps) => {
	const user = useUser()
	const adminRole = user.role === Roles.admin
	const professorRole = user.role === Roles.professor
	const studentRole = user.role === Roles.student
	return (
		<NavBar navigation={navigation} selected="Account">
			<View>
				<HeaderTitle title="Account" />
				<View style={s`flex items-center`}>
					<ProfileDetails
						name={user.firstName + " " + user.lastName}
						username={user.username}
						gender={user.gender}
						joinedDate={user.joinedDate}
						role={user.role}
					/>
				</View>

				<View style={s`flex w-full items-center mt-32`}>
					<View>
						{studentRole && (
							<ProfileStudentSelfView navigation={navigation} />
						)}
						{professorRole && <ProfileProfessorSelfView />}
						{adminRole && <ProfileAdminSelfView />}
						<ButtonImportant
							text="Logout"
							onPress={() => {
								user.logoutUser()
								navigation.navigate("Welcome")
							}}
						/>
					</View>
				</View>
			</View>
		</NavBar>
	)
}

interface AccountProps {
	navigation: any
}

export default Account
