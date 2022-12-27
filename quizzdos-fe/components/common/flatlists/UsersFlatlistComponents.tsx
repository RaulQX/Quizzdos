import React from "react"
import { View, Text, ListRenderItemInfo, Pressable } from "react-native"
import { s } from "react-native-wind"
import User from "../../user/User"
import ButtonImportant from "../buttons/ButtonImportant"
import HeaderTitle from "../Header"
import SearchBar from "../SearchBar"

interface AdminViewUser {
	key: string
	name: string
	username: string
	gender: number
	role: number
}

const renderLoader = () => {
	return (
		<View style={s`h-20 flex-grow`}>
			<Text style={s`text-white text-center`}>
				You scrolled to the end!
			</Text>
		</View>
	)
}

const renderUser = (
	user: ListRenderItemInfo<AdminViewUser>,
	navigation: any
) => {
	//console.log(user)
	return (
		<View style={s`flex-grow my-4 items-center pb-3`} key={user.item.key}>
			<Pressable
				onTouchEnd={() => {
					navigation.navigate("Profile", {
						personId: user.item.key,
					})
				}}
			>
				<User
					gender={user.item.gender}
					name={user.item.name}
					username={user.item.username}
				/>
			</Pressable>
		</View>
	)
}

const headertext = () => {
	return <HeaderTitle title="Users" />
}

interface searchBarViewProps {
	searchedName: string
	setSearchedName: any
	setStudents: any
	setProfessors: any
	setCurrentPageStudents: any
	setCurrentPageProfessors: any
}

const searchBarView = ({
	searchedName,
	setSearchedName,
	setStudents,
	setProfessors,
	setCurrentPageStudents,
	setCurrentPageProfessors,
}: searchBarViewProps) => {
	return (
		<View style={s`flex flex-row justify-center w-full`}>
			<View style={s`w-1/2 flex items-center`}>
				<SearchBar
					placeholder="Search name..."
					direction="left"
					value={searchedName}
					onChangeText={(text) => {
						setStudents([])
						setProfessors([])
						setCurrentPageStudents(1)
						setCurrentPageProfessors(1)
						setSearchedName(text)
					}}
				/>
			</View>
		</View>
	)
}
interface buttonsViewProps {
	requestedRole: number
	setRequestedRole: any
	setStudents: any
	setProfessors: any
	setCurrentPageStudents: any
	setCurrentPageProfessors: any
}
const buttonsView = ({
	requestedRole,
	setRequestedRole,
	setStudents,
	setProfessors,
	setCurrentPageStudents,
	setCurrentPageProfessors,
}: buttonsViewProps) => {
	const resetData = () => {
		setStudents([])
		setProfessors([])
		setCurrentPageProfessors(1)
		setCurrentPageStudents(1)
	}

	return (
		<View style={s`flex flex-row w-11/12 my-6`}>
			<Pressable
				disabled={requestedRole === 0}
				style={s`w-1/2 flex justify-start`}
				onPress={() => {
					resetData()
					setRequestedRole(0)
				}}
			>
				<View
					style={
						requestedRole === 0
							? styles.buttonActivated
							: styles.buttonNotActivated
					}
				>
					<Text
						style={
							requestedRole === 0
								? styles.buttonTextActivated
								: styles.buttonTextNotActivated
						}
					>
						Students
					</Text>
				</View>
			</Pressable>

			<Pressable
				disabled={requestedRole === 1}
				style={s`w-1/2 flex justify-end items-end`}
				onPress={() => {
					resetData()
					setRequestedRole(1)
				}}
			>
				<View
					style={
						requestedRole === 0
							? styles.buttonNotActivated
							: styles.buttonActivated
					}
				>
					<Text
						style={
							requestedRole === 0
								? styles.buttonTextNotActivated
								: styles.buttonTextActivated
						}
					>
						Professors
					</Text>
				</View>
			</Pressable>
		</View>
	)
}

interface headerProps {
	searchedName: string
	setSearchedName: any
	requestedRole: number
	setRequestedRole: any
	setStudents: any
	setProfessors: any
	setCurrentPageStudents: any
	setCurrentPageProfessors: any
}
const renderHeader = ({
	searchedName,
	setSearchedName,
	requestedRole,
	setRequestedRole,
	setStudents,
	setProfessors,
	setCurrentPageStudents,
	setCurrentPageProfessors,
}: headerProps) => {
	return (
		<View style={s`items-center`}>
			{headertext()}
			{searchBarView({
				searchedName,
				setSearchedName,
				setStudents,
				setProfessors,
				setCurrentPageStudents,
				setCurrentPageProfessors,
			})}
			{buttonsView({
				requestedRole,
				setRequestedRole,
				setStudents,
				setProfessors,
				setCurrentPageStudents,
				setCurrentPageProfessors,
			})}
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

export { renderUser, renderLoader, renderHeader }
