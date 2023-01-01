import { useEffect, useState } from "react"
import { View } from "react-native"
import { SelectList } from "react-native-dropdown-select-list"
import { s } from "react-native-wind"
import { putUserData } from "../../Api/Admin/EditPerson"
import { getUserData } from "../../Api/Admin/UserData"
import AuthForm from "../../components/auth-form/AuthForm"
import OneButtonModal from "../../components/common/ErrorModal"
import FormTextInput from "../../components/common/FormTextInput"
import HeaderTitle from "../../components/common/Header"
import NavBar from "../../components/layouts/navigation/NavBar"
import { KeyValueGenders, KeyValueRoles } from "../../Constants/Constants"

const AdminEditUser = ({ navigation, route }: IAdminEditUserProps) => {
	const requestedPersonId = route.params.personId

	const [modalVisible, setModalVisible] = useState(false)

	const [username, setUsername] = useState("")

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [mobileNumber, setMobileNumber] = useState("")

	const [gender, setGender] = useState("")
	const [role, setRole] = useState("")

	useEffect(() => {
		const usersResponse = getUserData(requestedPersonId)
		usersResponse.then((response) => {
			if (response.error) {
				console.log(response.error)
			} else {
				setFirstName(response.firstName)
				setLastName(response.lastName)
				setUsername(response.username)
				setEmail(response.email)
				setMobileNumber(response.phoneNumber)
				setGender(response.gender)
				setRole(response.role)
			}
		})
	}, [requestedPersonId])
	return (
		<NavBar navigation={navigation} selected="Profile">
			<HeaderTitle title="Edit user" />
			<View style={s`flex flex-col justify-center py-1 px-2`}>
				<AuthForm
					title={"Editing " + username}
					buttonTitle="Edit"
					onSubmit={() => {
						putUserData(requestedPersonId, {
							firstName,
							lastName,
							role: parseInt(role),
							gender: parseInt(gender),
							username,
							email,
							phoneNumber: mobileNumber,
						})
						setModalVisible(true)
					}}
					navigation={navigation}
					navigateTo="AdminPeople"
				>
					<OneButtonModal
						message={"User " + username + " edited with success!"}
						buttonText="Ok"
						buttonAction={() => {
							setModalVisible(false)
							navigation.navigate("AdminHome")
						}}
						title="Success!"
						modalVisible={modalVisible}
					/>
					<FormTextInput
						value={firstName}
						placeholder="First Name"
						onChangeText={(text) => {
							setFirstName(text)
						}}
					/>
					<FormTextInput
						value={lastName}
						placeholder="Last Name"
						onChangeText={(text) => {
							setLastName(text)
						}}
					/>
					<FormTextInput
						value={username}
						placeholder="Username"
						onChangeText={(text) => {
							setUsername(text)
						}}
					/>
					<FormTextInput
						value={email}
						placeholder="Email"
						onChangeText={(text) => {
							setEmail(text)
						}}
					/>
					<FormTextInput
						value={mobileNumber}
						placeholder="Mobile Number"
						onChangeText={(text) => {
							setMobileNumber(text)
						}}
					/>
					<SelectList
						onSelect={() => {}}
						setSelected={setGender}
						data={KeyValueGenders}
						search={false}
						defaultOption={KeyValueGenders[parseInt(gender) - 1]}
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
						defaultOption={KeyValueRoles[parseInt(role)]}
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
