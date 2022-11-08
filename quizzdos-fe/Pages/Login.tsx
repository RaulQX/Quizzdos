import React from "react"
import { Button } from "react-native"

const Login = ({ navigation }: any) => {
	return (
		<Button
			title="Welcome"
			onPress={() => navigation.navigate("Welcome")}
		/>
	)
}
export default Login