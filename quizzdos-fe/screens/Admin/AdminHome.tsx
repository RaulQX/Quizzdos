import React, { useState } from "react"
import {
	View,
	Text,
	TouchableOpacity,
	TouchableHighlight,
	ScrollView,
} from "react-native"
import { s } from "react-native-wind"
import RoundedButton from "../../components/common/buttons/RoundedButton"
import Logo from "../../components/common/Logo"

interface AdminHomeProps {
	navigation: any
}
const AdminHome = ({ navigation }: AdminHomeProps) => {
	return (
		<ScrollView style={styles.background}>
			<View style={s`justify-center flex-center m-6`}>
				<View style={s`flex flex-row justify-center my-12`}>
					<Text style={s`text-5xl text-black`}>
						Dash<Text style={s`text-indigo-300`}>board</Text>
					</Text>
				</View>

				<View
					style={[
						s`flex flex-row flex-wrap justify-between w-full my-6`,
					]}
				>
					<RoundedButton text="Users" onPress={() => {}} />
					<RoundedButton text="Units" onPress={() => {}} />
					<RoundedButton text="Quizzes" onPress={() => {}} />
					<RoundedButton text="Questions" onPress={() => {}} />
				</View>
			</View>
		</ScrollView>
	)
}
const styles = {
	background: s`h-full flex flex-col bg-coolGray-700`,
}

export default AdminHome
