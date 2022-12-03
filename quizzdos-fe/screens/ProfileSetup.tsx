import React, { useState } from "react"
import { View, Text } from "react-native"
import { s } from "react-native-wind"
import AuthForm from "../components/auth-form/AuthForm"
import FormTextInput from "../components/common/FormTextInput"
import { ApiConstants } from "../Constants/Constants"
import useUser from "../contexts/User/UserContext"
import { SelectList } from "react-native-dropdown-select-list"

interface HomeProps {
	navigation: any
}

const handleUpdate = async (
	personId: string,
	firstName: string,
	lastName: string,
	gender: string,
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
				lastName +
				"&gender=" +
				gender,
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
	const [gender, setGender] = React.useState("1")

	const genders = [
		{ key: "1", value: "Male" },
		{ key: "2", value: "Female" },
	]
	return (
		<AuthForm
			title="Profile Setup"
			buttonTitle="Finish"
			onSubmit={() => {
				handleUpdate(personId, firstName, lastName, gender, navigation)
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
			<SelectList
				onSelect={() => {}}
				setSelected={setGender}
				data={genders}
				search={false}
				defaultOption={genders[0]}
				dropdownStyles={s`border-b-2 border-indigo-400`}
				dropdownTextStyles={s`text-white`}
				inputStyles={s`text-white`}
				boxStyles={s`border-indigo-400`}
				//arrowicon={}
			/>
		</AuthForm>
	)
}

export default ProfileSetup
