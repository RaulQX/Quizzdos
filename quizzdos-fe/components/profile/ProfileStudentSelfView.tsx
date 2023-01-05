import ButtonImportant from "../common/buttons/ButtonImportant"

interface ProfileStudentSelfViewProps {
	navigation: any
}

const ProfileStudentSelfView = ({
	navigation,
}: ProfileStudentSelfViewProps) => {
	return (
		<>
			<ButtonImportant text="Past quizzes" onPress={() => {}} />
			<ButtonImportant
				text="Statistics"
				onPress={() => {
					navigation.navigate("Student Statistics")
				}}
			/>
		</>
	)
}

export default ProfileStudentSelfView
