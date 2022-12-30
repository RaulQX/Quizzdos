import React, { useState } from "react"
import { View, Text } from "react-native"
import { s } from "react-native-wind"
import AuthForm from "../components/auth-form/AuthForm"
import ButtonImportant from "../components/common/buttons/ButtonImportant"
import FormTextInput from "../components/common/FormTextInput"

interface RegisterProps {
	navigation: any
}

const Register = ({ navigation }: RegisterProps) => {
	const [mobileNumber, setMobileNumber] = useState("")
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	// function processResponse(response: any) {
	// 	console.log("intro aici")
	// 	const statusCode = response.status
	// 	const data = response.json()
	// 	return Promise.all([statusCode, data]).then((res) => ({
	// 		statusCode: res[0],
	// 		data: res[1],
	// 	}))
	// }

	async function onSubmit() {
		console.log("aici")
		const result = await fetch(
			//localhost????
			"http://81.181.70.235:7249/api/Auth/Register",
			{
				method: "POST",
				headers: {
					Accept: "accept: text/plain",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: username,
					email: email,
					phoneNumber: mobileNumber,
					password: password,
				}),
			}
		)
			.then((result) => {
				console.log(result)
				navigation.navigate("Home")
			})
			.catch((error) => {
				console.error(error)
			})
		// .then((response) => processResponse(response))
		// .then((res) => {
		// 	console.log("intro aici")

		// 	const { statusCode, data } = res
		// 	console.log("statusCode", statusCode)
		// 	console.log("data", data)
		// })
		// .catch((error) => {
		// 	console.error(error)
		// 	return { name: "network error", description: "" }
		// })
	}

	return (
		<View style={s`h-full flex flex-col justify-center bg-coolGray-700`}>
			<AuthForm
				title="Register"
				buttonTitle="Register"
				onSubmit={onSubmit}
				navigation={navigation}
				navigateTo="Welcome"
			>
				<FormTextInput
					value={username}
					placeholder="Username"
					onChangeText={(text) => setUsername(text)}
				/>
				<FormTextInput
					value={mobileNumber}
					placeholder="Mobile Number"
					keyboardType="number-pad"
					autoComplete="tel"
					onChangeText={(text) => setMobileNumber(text)}
				/>
				<FormTextInput
					value={email}
					placeholder="Email"
					autoComplete="email"
					keyboardType="email-address"
					onChangeText={(text) => setEmail(text)}
				/>
				<FormTextInput
					value={password}
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={(text) => setPassword(text)}
				/>
			</AuthForm>
		</View>
	)
}

const styles = {
	background: s`h-full flex flex-col justify-center items-center bg-coolGray-700`,
	registerForm: s`flex flex-col border-solid border-2 border-indigo-300 mx-4 p-9 rounded-3xl`,
	registerButton: s`flex items-center border-4 border-indigo-400 rounded-3xl p-2 bg-indigo-200 mt-8`,
}

export default Register
