import { useEffect, useState } from "react"
import { View } from "react-native"
import { s } from "react-native-wind"
import ProfileDetailsByPersonIdFetch from "../../Api/Admin/ProfileDetailsByPersonId"
import useUser from "../../contexts/User/UserContext"
import HeaderTitle from "../common/Header"
import ProfileDetails from "./ProfileDetails"
import ProfileView from "./ProfileView"

interface IProfileDetails {
	name: string
	username: string
	role: number
	gender: number
	joinedDate: string
}

const ProfileArea = ({
	personId,
	navigation,
	removePerson,
	editUser,
}: profileAreaProps) => {
	let currentUser = useUser()

	personId = personId === "" ? currentUser.personId : personId

	const [profileDetails, setProfileDetails] = useState<IProfileDetails>({
		name: "",
		username: "",
		role: 0,
		gender: 0,
		joinedDate: "",
	})

	useEffect(() => {
		ProfileDetailsByPersonIdFetch(personId).then((response) => {
			if (response.error) {
				console.log(response.error)
			} else setProfileDetails(response)
		})
	}, [personId])

	return (
		<View style={s`flex w-11/12 items-center`}>
			<View style={s`flex w-full`}>
				<ProfileDetails
					name={profileDetails.name}
					username={profileDetails.username}
					gender={profileDetails.gender}
					joinedDate={profileDetails.joinedDate}
					role={profileDetails.role}
				/>
			</View>
			<View style={[s`flex-col justify-center my-12 w-1/2`]}>
				<ProfileView
					requestedPersonId={personId}
					removePerson={removePerson}
					editUser={editUser}
					navigation={navigation}
				/>
			</View>
		</View>
	)
}

interface profileAreaProps {
	personId: string
	navigation: any
	removePerson: (personId: string, navigation: any) => void
	editUser: (personId: string, navigation: any) => void
}

export default ProfileArea
