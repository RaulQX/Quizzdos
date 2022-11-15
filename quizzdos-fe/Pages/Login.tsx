import React from "react"
import { Button } from "react-native"

import { Text, View } from "react-native"
import { s } from "react-native-wind";

const Login = ({ navigation }: any) => {
	return (
		<View style={s`h-1/4 bg-blue-100`}>
			<Text>Login</Text>
			<Button
				title="Welcome"
				onPress={() => navigation.navigate("Welcome")}
			/>
		</View>
	)
}
export default Login
