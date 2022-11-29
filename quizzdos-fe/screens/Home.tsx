import React, { useState } from "react"
import { View, Text } from "react-native"
import { s } from "react-native-wind"
import ButtonImportant from "../components/common/buttons/ButtonImportant"
import useUser from "../components/context/User/UserContext"

interface HomeProps {
	navigation: any
}

const Home = ({ navigation }: HomeProps) => {
	const user = useUser()

	return (
		<View style={styles.background}>
			<Text>Hi, {user.token}</Text>
			<Text>Hi, {user.username}</Text>
			<Text>Hi, {user.email}</Text>
			<Text>Hi, {user.id}</Text>
			<Text>Hi, {user.phoneNumber}</Text>

			<Text>Home</Text>
			<ButtonImportant
				text="Logout"
				onPress={() => {
					user.logoutUser()
					navigation.navigate("Welcome")
				}}
			/>
		</View>
	)
}

const styles = {
	background: s`h-full flex flex-col justify-center items-center bg-coolGray-700`,
}

export default Home
