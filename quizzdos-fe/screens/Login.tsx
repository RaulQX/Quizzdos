import React, { useState } from "react"
import FormTextInput from "../components/common/FormTextInput"
import ErrorModal from "../components/common/ErrorModal"
import AuthForm from "../components/auth-form/AuthForm"
import useUser from "../components/context/User/UserContext"
import { ApiConstants } from "../Constants/Constants"

interface LoginProps {
	navigation: any
}

const Login = ({ navigation }: LoginProps) => {
	const [login, setLogin] = useState("")
	const [password, setPassword] = useState("")

	const [modalVisible, setModalVisible] = useState(false)

	const { loginUser, errorMessage } = useUser()

	const handleLogin = async () => {
		console.log("handle login ", ApiConstants.login)
		try {
			let response: any = await loginUser({
				login: login,
				password: password,
			})

			if (response.error == true) {
				setModalVisible(true)
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
