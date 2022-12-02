import AsyncStorage from "@react-native-async-storage/async-storage"
import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { s } from "react-native-wind"
import ButtonImportant from "../components/common/buttons/ButtonImportant"
import Logo from "../components/common/Logo"

const Welcome = ({ navigation }: any) => {
	return (
		<View
			style={s`h-full flex flex-col justify-start items-center bg-coolGray-700`}
		>
			<View style={s`h-1/3 justify-end`}>
				<Logo />
			</View>
			<View style={s`flex flex-col justify-end w-full h-1/2`}>
				<View style={s`flex flex-col w-full p-6`}>
					<ButtonImportant
						text="Login"
						onPress={() => navigation.navigate("Login")}
					/>
					<ButtonImportant
						text="Register"
						onPress={() => {
							navigation.navigate("Register")
						}}
					/>
				</View>
			</View>
		</View>
	)
}

export default Welcome
