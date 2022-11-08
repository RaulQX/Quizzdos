import React from "react"
import { View, Button, Text, TouchableOpacity, StyleSheet } from "react-native"
import Logo from "../Components/Logo"
import { Constants } from "../Constants/Constants"

const styles = StyleSheet.create({
	backGround: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: Constants.darkBackround,
	},
	button: {
		marginTop: 30,
		marginLeft: 50,
		marginRight: 50,
		borderWidth: 2,
		borderRadius: 20,
		borderColor: Constants.blueLogo,
		marginBottom: 10,
		width: "70%",
	},
	buttonText: {
		margin: 8,
		color: "white",
		fontSize: 20,
		textAlign: "center",
	},
	buttonArea: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		flex: 1,
		width: "100%",
	},
})
const Welcome = ({ navigation }: any) => {
	const logoSize = 64
	return (
		<View style={styles.backGround}>
			<View style={{ marginTop: 50 }}>
				<Logo size={logoSize} />
			</View>
			<View style={styles.buttonArea}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Register</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => navigation.navigate("Login")}
				>
					<Text style={styles.buttonText}>Login</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Welcome
