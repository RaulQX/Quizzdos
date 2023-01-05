import React, { useState } from "react"
import { View, Text } from "react-native"
import { s } from "react-native-wind"
import { RegisterUserFetch } from "../Api/Admin/RegisterUser"
import AuthForm from "../components/auth-form/AuthForm"
import ButtonImportant from "../components/common/buttons/ButtonImportant"
import OneButtonModal from "../components/common/ErrorModal"
import FormTextInput from "../components/common/FormTextInput"
import { ApiEndpoints } from "../Constants/Constants"

interface RegisterProps {
	navigation: any
}

const Register = ({ navigation }: RegisterProps) => {
	const [mobileNumber, setMobileNumber] = useState("")
	const [username, setUsername] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [showModal, setShowModal] = useState(false)
	const [modalMessage, setModalMessage] = useState("")
	const [modalTitle, setModalTitle] = useState("")

	async function onSubmit() {
		const data = await RegisterUserFetch({
			username,
			email,
			phoneNumber: mobileNumber,
			password,
		})
		if (data.error) {
			setModalMessage(data.message)
			setModalTitle("Error")
			setShowModal(true)
			return
		}
		setModalMessage("User registered successfully")
		setModalTitle("Success")
		setShowModal(true)
	}

	return (
		<View style={s`h-full flex flex-col justify-center bg-coolGray-700`}>
			<OneButtonModal
				modalVisible={showModal}
				message={modalMessage}
				buttonAction={() => {
					setShowModal(false)
					{
						modalTitle == "Success"
							? navigation.navigate("Login")
							: null
					}
				}}
				title={modalTitle}
				buttonText="Ok"
			/>
			<AuthForm
				title="Register"
				buttonTitle="Register"
				onSubmit={() => onSubmit()}
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
