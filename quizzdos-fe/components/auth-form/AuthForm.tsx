import React from "react"
import { View, Text, GestureResponderEvent } from "react-native"
import { s } from "react-native-wind"
import ButtonImportant from "../common/buttons/ButtonImportant"

interface RegisterProps {
	children: React.ReactNode
	title: string
	buttonTitle: string
	onSubmit: () => void
	navigation: any
	navigateTo: string
}

const AuthForm = ({
	children,
	title,
	buttonTitle,
	onSubmit,
	navigation,
	navigateTo,
}: RegisterProps) => {
	const splitTitle = title.split(" ")
	function onPress(e: GestureResponderEvent) {
		e.preventDefault()
		onSubmit()
	}

	return (
		<View style={styles.background}>
			<View style={s`w-full`}>
				<View style={styles.registerForm}>
					<View style={s`flex flex-row`}>
						<Text style={s`text-white text-3xl font-medium`}>
							{splitTitle[0]}
						</Text>
						<Text style={s`text-indigo-300 text-3xl font-black`}>
							{" "}
							{splitTitle[1]}
						</Text>
					</View>

					{children}

					<View style={styles.buttonArea}>
						<ButtonImportant text={buttonTitle} onPress={onPress} />
						<ButtonImportant
							text="Back"
							onPress={() => navigation.navigate(navigateTo)}
						/>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = {
	background: s`flex flex-col justify-center items-center bg-coolGray-700`,
	registerForm: s`flex flex-col border-solid border-2 border-indigo-300 mx-4 px-9 py-4 rounded-3xl`,
	registerButton: s`flex items-center border-4 border-indigo-400 rounded-3xl p-2 bg-indigo-200 mt-8`,
	buttonArea: s`flex flex-col justify-evenly `,
}

export default AuthForm
