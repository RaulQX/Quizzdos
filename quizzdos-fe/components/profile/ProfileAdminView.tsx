import ButtonImportant from "../common/buttons/ButtonImportant"

interface IProfileAdminViewProps {
	removePerson: (personId: string, navigation: any) => void
}

const ProfileAdminView = ({ removePerson }: IProfileAdminViewProps) => {
	return (
		<>
			<ButtonImportant
				text="Remove user"
				onPress={() => removePerson("", null)}
			/>
			<ButtonImportant text="Modify user" onPress={() => {}} />
		</>
	)
}

export default ProfileAdminView
