import { View, Text, Modal } from "react-native"
import { s } from "react-native-wind"
import React, { useState } from "react"
import ButtonImportant from "../components/common/buttons/ButtonImportant"
import FormTextInput from "../components/common/FormTextInput"
import ErrorModal from "../components/common/ErrorModal"

interface LoginProps {
	navigation: any
}

const Login = ({ navigation }: LoginProps) => {
	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

	const [modalVisible, setModalVisible] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")

	const onSubmit = (e: any) => {
		e.preventDefault()
		console.log("login", login)
		console.log("password", password)
		try {
			console.log("try")
			fetch("http://192.168.0.177:5000/api/Auth/Login", {
				method: "POST",
				headers: {
					Accept: "accept: text/plain",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: login,
					password: password,
				}),
			})
				.then((response) => {
					return response.json()
				})
				.then((data) => {
					console.log("Success:", data)
					if (data.error == false) {
						//context login bearer
						setErrorMessage(data.message)
						setModalVisible(true)
					} else {
						setErrorMessage(data.message)
						setModalVisible(true)
					}
				})
				.catch((error) => {
					console.error("Error:", error)
				})
		} catch (error) {
			console.error("Error:", error)
		}
	}

	return (
		<View
			style={s`h-full flex flex-col justify-center items-center bg-coolGray-700`}
		>
			<View style={s`w-full`}>
				<View style={s``}>
					<View style={s`flex flex-row`}>
						<Text style={s`text-white text-4xl font-medium`}>
							Sign
						</Text>
						<Text style={s`text-indigo-300 text-4xl font-black`}>
							{" "}
							Up
						</Text>
					</View>
					<ErrorModal
						modalVisible={modalVisible}
						errorMessage={errorMessage}
						setModalVisible={() => setModalVisible(false)}
					/>

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
						<ButtonImportant
							text="welcome"
							onPress={() => navigation.navigate("Welcome")}
						/>
					</View>
				</View>
			</View>
		</View>
	)
}
export default Login
