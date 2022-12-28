import React from "react"
import { View, Text } from "react-native"
import { s } from "react-native-wind"
import RoundedButton from "../../components/common/buttons/RoundedButton"
import NavBar from "../../components/layouts/navigation/NavBar"
import useUser from "../../contexts/User/UserContext"

interface AdminHomeProps {
	navigation: any
}
const AdminHome = ({ navigation }: AdminHomeProps) => {
	const user = useUser()

	return (
		<NavBar navigation={navigation} selected="AdminHome">
			<View style={styles.background}>
				<View style={s`flex justify-around items-around w-11/12`}>
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
						<RoundedButton
							text="Users"
							onPress={() => {
								console.log("click")
								navigation.navigate("AdminPeople")
							}}
						/>
						<RoundedButton
							text="Log User Context"
							onPress={() => {
								console.log(user)
							}}
						/>
						<RoundedButton text="Quizzes" onPress={() => {}} />
						<RoundedButton text="Questions" onPress={() => {}} />
					</View>
				</View>
			</View>
		</NavBar>
	)
}
const styles = {
	background: s`flex flex-col bg-coolGray-700 items-center `,
}

export default AdminHome
