import React, { useState } from "react"
import FormTextInput from "../components/common/FormTextInput"
import OneButtonModal from "../components/common/ErrorModal"
import AuthForm from "../components/auth-form/AuthForm"
import useUser from "../contexts/User/UserContext"
import { Roles } from "../constants/Constants"
import { View } from "react-native"
import { s } from "react-native-wind"

interface LoginProps {
	navigation: any
}

const Login = ({ navigation }: LoginProps) => {
	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

	const [modalVisible, setModalVisible] = useState(false)

	const { loginUser, errorMessage } = useUser()

	const handleLogin = async () => {
		try {
			let response: any = await loginUser({
				login: login,
				password: password,
			})
			console.log("response ", response)
			if (response.error == true) {
				setModalVisible(true)
				return
			}
			if (response.payloadConstructed.profileSetup == false) {
				navigation.navigate("ProfileSetup")
				return
			}
			if (response.payloadConstructed.role == Roles.admin) {
				navigation.navigate("AdminHome")
				return
			}
			if (response.payloadConstructed.role == Roles.professor) {
				navigation.navigate("ProfessorHome")
				return
			}
			navigation.navigate("StudentHome")
		} catch (error) {
			setModalVisible(true)
		}
	}

	return (
		<View style={s`h-full flex flex-col justify-center bg-coolGray-700`}>
			<AuthForm
				title="Log In"
				buttonTitle="Log In"
				onSubmit={handleLogin}
				navigation={navigation}
				navigateTo="Welcome"
			>
				<OneButtonModal
					modalVisible={modalVisible}
					message={errorMessage}
					buttonAction={() => setModalVisible(false)}
					title="Error"
					buttonText="Ok"
				/>
				<View style={s`h-10`} />
				<FormTextInput
					value={login}
					placeholder="Username / Email / Phone Number"
					onChangeText={(text) => setLogin(text)}
				/>
				<FormTextInput
					value={password}
					placeholder="Password"
					secureTextEntry={true}
					onChangeText={(text) => setPassword(text)}
				/>
				<View style={s`h-10`} />
			</AuthForm>
		</View>
	)
}
export default Login
