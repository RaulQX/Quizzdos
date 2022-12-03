import React, { useEffect, useState } from "react"
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"
import { s } from "react-native-wind"
import UsersFlatList from "../../components/common/flatlists/UsersFlatlist"
import SearchBar from "../../components/common/SearchBar"
import { ApiConstants } from "../../Constants/Constants"

interface AdminViewUser {
	key: string
	name: string
	username: string
	gender: number
	role: number
}

interface UserDataReturned {
	firstName: string
	lastName: string
	personId: string
	username: string
	gender: number
	role: number
}

const usersFetch = async (
	users: any,
	setUsers: any,
	currentPage: number,
	username: string,
	role: number
) => {
	console.log(role)
	try {
		const response = await fetch(
			`${ApiConstants.baseUrl}${ApiConstants.controllers.adminView}${
				ApiConstants.endpoints.getusers
			}${role}/username?username=${username}&page=${currentPage.toString()}&pageSize=10`
		)
		const data = await response.json()
		var usersList: AdminViewUser[] = []
		data.data.map((user: UserDataReturned) => {
			usersList.push({
				key: user.personId,
				name: user.firstName + " " + user.lastName,
				username: user.username,
				gender: user.gender,
				role: user.role,
			})
		})
		setUsers([...users, ...usersList])
		usersList = []
		//return data
	} catch (e) {
		console.log(e)
	}
}

const AdminPeople = ({ navigation }: any) => {
	const [searchedUsername, setSearchedUsername] = React.useState("")
	const [searchedName, setSearchedName] = React.useState("")
	const [personRole, setPersonRole] = useState(0)
	const [currentPage, setCurrentPage] = useState(1)
	const [users, setUsers] = useState([])

	useEffect(() => {
		usersFetch(users, setUsers, currentPage, searchedUsername, personRole)
	}, [searchedUsername, currentPage, personRole])

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
			<View style={s`flex flex-row justify-center w-11/12`}>
				<View style={s`w-1/2 flex justify-start`}>
					<SearchBar
						placeholder="Search username..."
						direction="left"
						value={searchedUsername}
						onChangeText={setSearchedUsername}
					/>
				</View>
				<View style={s`w-1/2 flex justify-end items-end`}>
					<SearchBar
						placeholder="Search name..."
						direction="right"
						value={searchedName}
						onChangeText={setSearchedName}
					/>
				</View>
			</View>
			<View style={s`flex flex-row justify-between w-11/12 my-6`}>
				<TouchableOpacity
					style={s`w-1/2 flex justify-start`}
					onPress={() => {
						setPersonRole(0)
					}}
				>
					<View
						style={
							personRole === 0
								? styles.buttonActivated
								: styles.buttonNotActivated
						}
					>
						<Text
							style={
								personRole === 0
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
						setPersonRole(1)
					}}
				>
					<View
						style={
							personRole === 0
								? styles.buttonNotActivated
								: styles.buttonActivated
						}
					>
						<Text
							style={
								personRole === 0
									? styles.buttonTextNotActivated
									: styles.buttonTextActivated
							}
						>
							Professors
						</Text>
					</View>
				</TouchableOpacity>
			</View>
			<View
				style={s`flex flex-row items-center  w-full flex-wrap w-full`}
			>
				<UsersFlatList
					users={users}
					searchedUsername={searchedUsername}
					searchedName={searchedName}
					personRole={personRole}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
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
