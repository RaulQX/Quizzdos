import React from "react"
import { Button } from "react-native"

const Register = ({ navigation }: any) => {
	return (
		<Button
			title="Welcome"
			onPress={() => navigation.navigate("Welcome")}
		/>
	)
}
export default Register
