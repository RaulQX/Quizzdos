import { Roles } from "../../Constants/Constants"
import useUser from "../../contexts/User/UserContext"
import {
	ProfileAdminSelfView,
	ProfileAdminView,
	ProfileProfessorSelfView,
	ProfileProfessorView,
	ProfileStudentSelfView,
	ProfileStudentView,
} from "./.ProfileViews"

interface IProfileViewProps {
	requestedPersonId: string
	removePerson: (personId: string, navigation: any) => void
	editUser: (personId: string, navigation: any) => void
	navigation: any
}

const ProfileView = ({
	requestedPersonId,
	removePerson,
	editUser,
	navigation,
}: IProfileViewProps) => {
	const currentUser = useUser()
	const selfProfile =
		currentUser.personId === requestedPersonId || requestedPersonId === ""
	const adminRole = currentUser.role === Roles.admin
	const professorRole = currentUser.role === Roles.professor
	const studentRole = currentUser.role === Roles.student

	return (
		<>
			{!selfProfile && adminRole && (
				<ProfileAdminView
					removePerson={removePerson}
					editUser={editUser}
				/>
			)}
			{!selfProfile && professorRole && <ProfileProfessorView />}
			{!selfProfile && studentRole && <ProfileStudentView />}
			
		</>
	)
}

export default ProfileView
