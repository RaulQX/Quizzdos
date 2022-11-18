import React, { useState } from "react"
import { Button, TextInput, View, Text, TouchableOpacity } from "react-native"
import { s } from "react-native-wind"
import Logo from "../Components/Logo"

const Register = ({ navigation }: any) => {
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

	async function postReferences() {
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

	function onSubmit(e: any) {
		e.preventDefault()
		postReferences()
	}

	return (
		<View style={styles.background}>
			<View style={styles.logoPosition}>
				<Logo />
			</View>
			<View style={s`w-full`}>
				<View style={styles.registerForm}>
					<View style={s`flex flex-row`}>
						<Text style={s`text-white text-4xl`}>Sign</Text>
						<Text style={s`text-indigo-300 text-4xl`}> Up</Text>
					</View>

					<TextInput
						style={styles.textInput}
						placeholder="Username"
						placeholderTextColor="white"
						onChangeText={(text) => setUsername(text)}
					/>
					<TextInput
						style={styles.textInput}
						placeholder="Mobile Number"
						placeholderTextColor="white"
						onChangeText={(text) => setMobileNumber(text)}
					/>
					<TextInput
						style={styles.textInput}
						placeholder="Email"
						placeholderTextColor="white"
						onChangeText={(text) => setEmail(text)}
					/>
					<TextInput
						style={styles.textInput}
						placeholder="Password"
						placeholderTextColor="white"
						secureTextEntry={true}
						onChangeText={(text) => setPassword(text)}
					/>
					<View style={s`flex`}>
						<TouchableOpacity
							style={styles.registerButton}
							onPress={(e) => onSubmit(e)}
						>
							<Text style={s`text-2xl text-blue-800`}>
								Register
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}

const styles = {
	textInput: s`border-b border-indigo-400 rounded-3xl p-4 mb-4 text-right text-white`,
	background: s`h-full flex flex-col justify-center items-center bg-coolGray-700`,
	logoPosition: s`h-1/5 flex justify-start`,
	registerForm: s`flex flex-col border-solid border-2 border-indigo-300 mx-4 p-9 rounded-3xl`,
	registerButton: s`flex items-center border-4 border-indigo-400 rounded-3xl p-2 bg-indigo-200`,
}

export default Register
