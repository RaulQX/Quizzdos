import { View } from "react-native"
import { s } from "react-native-wind"
import HeaderTitle from "../common/Header"
import ProfileDetails from "./ProfileDetails"

const ProfileArea = ({ children }: profileAreaProps) => {
	return (
		<View style={s`flex w-full h-full items-center justify-start`}>
			<View style={s`flex w-full`}>
				<HeaderTitle title="Profile" />
				<ProfileDetails
					name="TestName"
					username="TestUsername123"
					gender={1}
					joinedDate="19/09/2022"
				/>
			</View>
			<View style={[s`flex-col justify-center my-12 w-1/2`]}>
				{children}
			</View>
		</View>
	)
}

interface profileAreaProps {
	children: React.ReactNode
}

export default ProfileArea
