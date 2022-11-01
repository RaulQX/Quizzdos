import React from "react"
import { Button } from "react-native"

const Welcome = ({ navigation }) => {
	return (
		<Button
			title="Login"
			onPress={() => navigation.navigate("Login")}
		/>
	)
}

export default Welcome;