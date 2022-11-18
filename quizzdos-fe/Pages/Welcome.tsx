import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import Logo from "../Components/Logo"
import { s } from "react-native-wind"

const Welcome = ({ navigation }: any) => {
	return (
		<View style={s`h-full flex flex-col justify-center items-center`}>
			<Logo />
			<View style={s`flex flex-col w-full`}>
				<TouchableOpacity
					style={s`flex items-center border-4 border-indigo-400 rounded-3xl py-4`}
					onPress={() => navigation.navigate("Register")}
				>
					<Text style={s`text-3xl font-bold`}>Register</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={s`flex items-center border-4 border-indigo-400 rounded-3xl py-4`}
					onPress={() => navigation.navigate("Login")}
				>
					<Text style={s`text-3xl font-bold`}>Login</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Welcome
