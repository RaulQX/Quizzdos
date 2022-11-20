import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import Logo from "@components/common/Logo"
import { s } from "react-native-wind"
import ButtonImportant from "@components/common/buttons/ButtonImportant"

const Welcome = ({ navigation }: any) => {
	return (
		<View style={s`h-full flex flex-col justify-center items-center bg-coolGray-700`}>
			<Logo />
			<View style={s`flex flex-col w-full p-6`}>
				<ButtonImportant
					text="Login"
					onPress={() => navigation.navigate("Login")}
				/>
				<View style={s`mt-4`}>
					<ButtonImportant
						text="Register"
						onPress={() => navigation.navigate("Register")}
					/>
				</View>
			</View>
		</View>
	)
}

export default Welcome
