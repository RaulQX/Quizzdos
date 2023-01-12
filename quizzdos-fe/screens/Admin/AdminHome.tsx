import React from "react"
import { View, Text } from "react-native"
import { s } from "react-native-wind"
import RoundedButton from "../../components/common/buttons/RoundedButton"
import HeaderTitle from "../../components/common/Header"
import NavBar from "../../components/layouts/NavLayout"
import useUser from "../../contexts/User/UserContext"

interface AdminHomeProps {
	navigation: any
}
const AdminHome = ({ navigation }: AdminHomeProps) => {
	const user = useUser()

	return (
		<NavBar navigation={navigation} selected="AdminHome">
			<HeaderTitle title="Dash Board" />
			<View style={styles.background}>
				<View style={s`flex justify-around items-around w-11/12`}>
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
						<RoundedButton text="Statistics" onPress={() => { }} />
						<RoundedButton text="Questions" onPress={() => { }} />
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
