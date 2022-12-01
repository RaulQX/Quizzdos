import React, { useState } from "react"
import { View, Text } from "react-native"
import { s } from "react-native-wind"
import AuthForm from "../components/auth-form/AuthForm"
import FormTextInput from "../components/common/FormTextInput"
import { ApiConstants } from "../Constants/Constants"
import useUser from "../contexts/User/UserContext"

interface HomeProps {
	navigation: any
}

const handleUpdate = async (
	personId: string,
	firstName: string,
	lastName: string,
	navigation: any
) => {
	try {
		var result = await fetch(
			ApiConstants.baseUrl +
				ApiConstants.controllers.person +
				ApiConstants.endpoints.updatePersonNames +
				personId +
				"/" +
				"?firstName=" +
				firstName +
				"&lastName=" +
				lastName,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
			}
		)
		var data = await result.json()
		if (data.error == true) {
			navigation.navigate("Login")
		}
		navigation.navigate("Home")
	} catch (e) {
		console.log(e)
	}
}

const ProfileSetup = ({ navigation }: HomeProps) => {
	const { username, personId } = useUser()
	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	return (
		<View>
			<AuthForm
				title="Profile Setup"
				buttonTitle="Finish"
				onSubmit={() => {
					handleUpdate(personId, firstName, lastName, navigation)
				}}
				navigation={navigation}
			>
				<Text style={s`text-left text-base text-white my-4`}>
					Hi {username}!{"\n"}Looks like it's the first time you are
					logging in, let's finish setting up your profile.
				</Text>
				<FormTextInput
					value={firstName}
					placeholder="First Name"
					onChangeText={(text) => setFirstName(text)}
				/>
				<FormTextInput
					value={lastName}
					placeholder="Last Name"
					onChangeText={(text) => setLastName(text)}
				/>
			</AuthForm>
		</View>
	)
}

export default ProfileSetup
