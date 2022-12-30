import React, { useState } from "react"
import FormTextInput from "../components/common/FormTextInput"
import ErrorModal from "../components/common/ErrorModal"
import AuthForm from "../components/auth-form/AuthForm"
import useUser from "../contexts/User/UserContext"
import { Roles } from "../Constants/Constants"

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
			navigation.navigate("Home")
		} catch (error) {
			setModalVisible(true)
		}
	}

	return (
		<AuthForm
			title="Log In"
			buttonTitle="Log In"
			onSubmit={handleLogin}
			navigation={navigation}
			navigateTo="Welcome"
		>
			<ErrorModal
				modalVisible={modalVisible}
				errorMessage={errorMessage}
				setModalVisible={() => setModalVisible(false)}
			/>

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
		</AuthForm>
	)
}
export default Login
