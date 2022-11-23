import React from "react"
import { View, Text, Modal } from "react-native"
import { s } from "react-native-wind"
import ButtonImportant from "./buttons/ButtonImportant"

interface errorModalProps {
	errorMessage: string
	setModalVisible: (bool: boolean) => void
	modalVisible: boolean
}

const ErrorModal = ({
	errorMessage,
	modalVisible,
	setModalVisible,
}: errorModalProps) => {
	return (
		<Modal animationType="slide" transparent={true} visible={modalVisible}>
			<View style={s`flex flex-col justify-center items-center p-10`}>
				<View
					style={s`bg-coolGray-800 rounded-xl p-4 flex flex-col justify-center items-center`}
				>
					<Text style={s`text-2xl font-medium text-indigo-300`}>
						Error
					</Text>
					<Text style={s`text-2xl font-medium text-white mb-5`}>
						{errorMessage}
					</Text>
					<View style={s`min-w-4/5`}>
						<ButtonImportant
							text="Close"
							onPress={() => setModalVisible(false)}
						/>
					</View>
				</View>
			</View>
		</Modal>
	)
}
export default ErrorModal
