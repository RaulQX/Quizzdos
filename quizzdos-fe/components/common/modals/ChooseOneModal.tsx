import { Modal, Alert, View, Text } from "react-native"
import { s } from "react-native-wind"
import ButtonImportant from "../buttons/ButtonImportant"

const ChooseOneModal = ({
	option1,
	option2,
	modalText,
	option1Action,
	modalVisible,
	setModalVisible,
}: IChooseOneModalProps) => {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				Alert.alert("Modal has been closed.")
				setModalVisible(!modalVisible)
			}}
			style={s``}
		>
			<View style={s`flex flex-col justify-end p-20 mt-32 `}>
				<View style={s`bg-coolGray-800 rounded-xl p-4 flex flex-col`}>
					<Text
						style={s`text-2xl font-medium text-white mb-5 text-center`}
					>
						{modalText}
					</Text>
					<View style={s`flex flex-row justify-around`}>
						<ButtonImportant
							text={option1}
							onPress={() => option1Action()}
						/>
						<ButtonImportant
							text={option2}
							onPress={() => setModalVisible(false)}
						/>
					</View>
				</View>
			</View>
		</Modal>
	)
}

interface IChooseOneModalProps {
	option1: string
	option2: string
	modalText: string
	option1Action: () => void
	modalVisible: boolean
	setModalVisible: (bool: boolean) => void
}

export default ChooseOneModal
