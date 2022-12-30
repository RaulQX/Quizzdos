import { useEffect, useState } from "react"
import { View } from "react-native"
import { SelectList } from "react-native-dropdown-select-list"
import { s } from "react-native-wind"
import AuthForm from "../../components/auth-form/AuthForm"
import FormTextInput from "../../components/common/FormTextInput"
import HeaderTitle from "../../components/common/Header"
import NavBar from "../../components/layouts/navigation/NavBar"
import { KeyValueGenders, KeyValueRoles } from "../../Constants/Constants"

const AdminEditUser = ({ navigation, route }: IAdminEditUserProps) => {
	const requestedPersonId = route.params.personId

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [mobileNumber, setMobileNumber] = useState("")

	const [gender, setGender] = useState("1")
	const [role, setRole] = useState("0")
	//useeffect to get current user based on personId fetch

	useEffect(() => {}, [requestedPersonId])

	return (
		<NavBar navigation={navigation} selected="Profile">
			<View style={s`flex flex-col justify-center py-1 px-2`}>
				<HeaderTitle title="Edit user" />
				<AuthForm
					title="User username"
					buttonTitle="Edit"
					onSubmit={() => {}}
					navigation={navigation}
					navigateTo="AdminPeople"
				>
					<FormTextInput
						value=""
						placeholder="First Name"
						onChangeText={() => {}}
					/>
					<FormTextInput
						value=""
						placeholder="Last Name"
						onChangeText={() => {}}
					/>
					<FormTextInput
						value=""
						placeholder="Username"
						onChangeText={() => {}}
					/>
					<FormTextInput
						value=""
						placeholder="Email"
						onChangeText={() => {}}
					/>
					<FormTextInput
						value=""
						placeholder="Mobile Number"
						onChangeText={() => {}}
					/>
					<SelectList
						onSelect={() => {}}
						setSelected={setGender}
						data={KeyValueGenders}
						search={false}
						defaultOption={KeyValueGenders[0]}
						dropdownStyles={s`border-b-2 border-indigo-400`}
						dropdownTextStyles={s`text-white`}
						inputStyles={s`text-white`}
						boxStyles={s`border-indigo-400`}
						//arrowicon={}
					/>
					<SelectList
						onSelect={() => {}}
						setSelected={setRole}
						data={KeyValueRoles}
						search={false}
						defaultOption={KeyValueRoles[0]}
						dropdownStyles={s`border-b-2 border-indigo-400`}
						dropdownTextStyles={s`text-white`}
						inputStyles={s`text-white`}
						boxStyles={s`border-indigo-400 mt-4`}
						//arrowicon={}
					/>
				</AuthForm>
			</View>
		</NavBar>
	)
}

interface IAdminEditUserProps {
	navigation: any
	route: any
}

export default AdminEditUser
