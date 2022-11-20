import { View, Text } from "react-native"
import { s } from "react-native-wind"
import React, { useState } from "react"
import FormTextInput from "@components/common/FormTextInput"
import ButtonImportant from "@components/common/buttons/ButtonImportant"

const Logo = () => {
	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

	const onSubmit = (e: any) => {

	}

	return (
		<View style={s``}>
			<View style={s`w-full`}>
				<View style={s``}>
					<View style={s`flex flex-row`}>
						<Text style={s`text-white text-4xl font-medium`}>Sign</Text>
						<Text style={s`text-indigo-300 text-4xl font-black`}> Up</Text>
					</View>

					<FormTextInput
						value={login}
						placeholder="Username / Email"
						onChangeText={(text) => setLogin(text)}
					/>
					<FormTextInput
						value={password}
						placeholder="Password"
						secureTextEntry={true}
						onChangeText={(text) => setPassword(text)}
					/>
					<View style={s`mt-4`}>
						<ButtonImportant
							text="Register"
							onPress={(e) => onSubmit(e)}
						/>
					</View>
				</View>
			</View>
		</View>
	)
}
export default Logo