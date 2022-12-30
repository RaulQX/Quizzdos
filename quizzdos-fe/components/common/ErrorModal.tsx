import React from "react"
import { View, Text, Modal } from "react-native"
import { s } from "react-native-wind"
import ButtonImportant from "./buttons/ButtonImportant"

interface IOneButtonModalProps {
	message: string
	modalVisible: boolean
	buttonAction: () => void
	title: string
	buttonText: string
}

const OneButtonModal = ({
	title,
	message,
	modalVisible,
	buttonAction,
	buttonText,
}: IOneButtonModalProps) => {
	return (
		<Modal animationType="slide" transparent={true} visible={modalVisible}>
			<View style={s`flex flex-col justify-center items-center p-10`}>
				<View
					style={s`bg-coolGray-800 rounded-xl p-4 flex flex-col justify-center items-center`}
				>
					<Text style={s`text-2xl font-medium text-indigo-300 mb-5`}>
						{title}
					</Text>
					<Text style={s`text-2xl font-medium text-white mb-5`}>
						{message}
					</Text>
					<View style={s`min-w-4/5`}>
						<ButtonImportant
							text={buttonText}
							onPress={() => buttonAction()}
						/>
					</View>
				</View>
			</View>
		</Modal>
	)
}
export default OneButtonModal
