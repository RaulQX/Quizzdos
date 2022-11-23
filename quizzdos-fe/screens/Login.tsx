import { View, Text, Modal } from "react-native"
import { s } from "react-native-wind"
import React, { useState } from "react"
import ButtonImportant from "../components/common/buttons/ButtonImportant"
import FormTextInput from "../components/common/FormTextInput"
import ErrorModal from "../components/common/ErrorModal"
import AuthForm from "../components/auth-form/AuthForm"

interface LoginProps {
	navigation: any
}

const Login = ({ navigation }: LoginProps) => {
	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

	const [modalVisible, setModalVisible] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")

	const onSubmit = async () => {
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
		<AuthForm title="Log In" buttonTitle="Log In" onSubmit={onSubmit} navigation={navigation} >
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
		</AuthForm>
	)
}
export default Login
