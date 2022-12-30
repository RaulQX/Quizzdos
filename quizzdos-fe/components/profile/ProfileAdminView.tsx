import { useState } from "react"
import { Alert, Modal, Text, View } from "react-native"
import { s } from "react-native-wind"
import ButtonImportant from "../common/buttons/ButtonImportant"
import ChooseOneModal from "../common/modals/ChooseOneModal"

interface IProfileAdminViewProps {
	removePerson: (personId: string, navigation: any) => void
	editUser: (personId: string, navigation: any) => void
}

const ProfileAdminView = ({
	removePerson,
	editUser,
}: IProfileAdminViewProps) => {
	const [modalVisible, setModalVisible] = useState(false)
	return (
		<>
			<ChooseOneModal
				option1="  Yes  "
				option2="  No  "
				modalText="Are you sure you want to remove this user?"
				option1Action={() => removePerson("", null)}
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
			/>
			<ButtonImportant
				text="Remove user"
				onPress={() => setModalVisible(true)}
			/>
			<ButtonImportant
				text="Modify user"
				onPress={() => {
					editUser("", null)
				}}
			/>
		</>
	)
}

export default ProfileAdminView
