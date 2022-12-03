import React, { useEffect, useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { s } from "react-native-wind"
import SearchBar from "../../components/common/SearchBar"
import User from "../../components/user/User"
import { ApiConstants } from "../../Constants/Constants"

var user1 = {
	key: "1",
	name: "John Sins",
	gender: "female",
}

var user2 = {
	key: "2",
	name: "Johanna Sins",
	gender: "male",
}

var user3 = {
	key: "3",
	name: "Alexandro Alberto Iulian Universalu Si Stivan Quasaru De la mine pt univers",
	gender: "male",
}

var userArray = [user1, user2, user3]

interface AdminViewUser {
	key: string
	name: string
	username: string
	gender: number
}

const usersFetch = async (users: any, setUsers: any) => {
	try {
		const response = await fetch(
			`${ApiConstants.baseUrl}${ApiConstants.controllers.adminView}${
				ApiConstants.endpoints.getusers
			}${"0"}/username?username=${"s"}&page=${"1"}&pageSize=6`
		)
		const data = await response.json()
		var usersList: AdminViewUser[] = []
		data.data.map((user: any) => {
			usersList.push({
				key: user.personId,
				name: user.firstName + " " + user.lastName,
				username: user.username,
				gender: user.gender,
			})
		})
		console.log(usersList)
		setUsers(...usersList)
		console.log(users)
		return data
	} catch (e) {
		console.log(e)
	}
}

const AdminPeople = ({ navigation }: any) => {
	const [searchUsername, setSearchUsername] = React.useState("")
	const [searchName, setSearchName] = React.useState("")
	const [buttonStudentsActivated, setButtonStudentsActivated] = useState(true)

	const [users, setUsers] = useState([])
	return (
		<View
			style={s`h-full flex flex-col justify-start items-center bg-coolGray-700`}
		>
			<View
				style={s`flex flex-row justify-center mt-10 mb-4 border-b-2 border-gray-300 w-full`}
			>
				<Text style={s`text-5xl text-black `}>
					Users<Text style={s`text-indigo-300`}> area</Text>
				</Text>
			</View>
			<View style={s`flex flex-row justify-between w-11/12`}>
				<View style={s`w-1/2 flex justify-start`}>
					<SearchBar
						placeholder="Search username..."
						direction="left"
						value={searchUsername}
						onChangeText={setSearchUsername}
					/>
				</View>
				<View style={s`w-1/2 flex justify-end items-end`}>
					<SearchBar
						placeholder="Search name..."
						direction="right"
						value={searchName}
						onChangeText={setSearchName}
					/>
				</View>
			</View>
			<View style={s`flex flex-row justify-between w-11/12 my-6`}>
				<TouchableOpacity
					style={s`w-1/2 flex justify-start`}
					onPress={() => {
						setButtonStudentsActivated(true)
						usersFetch(users, setUsers)
					}}
				>
					<View
						style={
							buttonStudentsActivated
								? styles.buttonActivated
								: styles.buttonNotActivated
						}
					>
						<Text
							style={
								buttonStudentsActivated
									? styles.buttonTextActivated
									: styles.buttonTextNotActivated
							}
						>
							Students
						</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={s`w-1/2 flex justify-end items-end`}
					onPress={() => {
						setButtonStudentsActivated(false)
						setUsers([])
					}}
				>
					<View
						style={
							buttonStudentsActivated
								? styles.buttonNotActivated
								: styles.buttonActivated
						}
					>
						<Text
							style={
								buttonStudentsActivated
									? styles.buttonTextNotActivated
									: styles.buttonTextActivated
							}
						>
							Professors
						</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View style={s`w-full flex justify-center items-center`}>
				<View style={s`flex flex-row w-full flex-wrap`}>
					{userArray.map((user) => (
						<View style={s`my-4 w-1/2 items-center`} key={user.key}>
							<User gender={user.gender} name={user.name} />
						</View>
					))}
				</View>
			</View>
		</View>
	)
}

const styles = {
	buttonTextActivated: s`text-2xl text-black text-center mt-1`,
	buttonTextNotActivated: s`text-2xl text-black text-center mt-1`,
	buttonActivated: s`border-2 border-coolGray-900 bg-coolGray-300 rounded-full w-32 h-12`,
	buttonNotActivated: s`border-2 border-coolGray-900 bg-coolGray-500 rounded-full w-32 h-12`,
	background: s`h-full flex flex-col justify-center items-center bg-coolGray-700`,
	registerForm: s`flex flex-col border-solid border-2 border-indigo-300 mx-4 p-9 rounded-3xl`,
	registerButton: s`flex items-center border-4 border-indigo-400 rounded-3xl p-2 bg-indigo-200 mt-8`,
}

export default AdminPeople
