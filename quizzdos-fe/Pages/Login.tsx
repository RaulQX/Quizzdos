import React from "react"
import { Button } from "react-native"

import { Text, View } from "react-native"
import { styled } from "nativewind"

const StyledView = styled(View)
const StyledText = styled(Text)

const Login = ({ navigation }: any) => {
	return (
		<StyledView className="h-1/4 bg-blue-100">
			<StyledText>Login</StyledText>
			<Button
				title="Welcome"
				onPress={() => navigation.navigate("Welcome")}
			/>
		</StyledView>
	)
}
export default Login
