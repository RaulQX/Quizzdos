import React, { useEffect, useState } from "react"
import { FlatList } from "react-native"
import { s } from "react-native-wind"
import {
	renderUser,
	renderLoader,
	renderHeader,
} from "../../components/common/flatlists/UsersFlatlistComponents"
import usersFetch from "../../Api/Admin/UsersFetch"
import NavBar from "../../components/layouts/navigation/NavBar"

interface AdminViewUser {
	key: string
	name: string
	username: string
	gender: number
	role: number
}

const filteredData = (
	data: AdminViewUser[],
	searchedName: string,
	requestedRole: number
) => {
	return data.filter((user: AdminViewUser) => {
		return (
			(searchedName === ""
				? true
				: user.username.includes(searchedName)) &&
			user.role === requestedRole
		)
	})
}

const AdminPeople = ({ navigation }: any) => {
	const [searchedName, setSearchedName] = React.useState("")
	const [requestedRole, setRequestedRole] = useState(0)

	const [currentPageStudents, setCurrentPageStudents] = useState(1)
	const [currentPageProfessors, setCurrentPageProfessors] = useState(1)

	const [students, setStudents] = useState<AdminViewUser[]>([])
	const [professors, setProfessors] = useState<AdminViewUser[]>([])

	useEffect(() => {
		requestedRole === 0
			? usersFetch(
					students,
					setStudents,
					currentPageStudents,
					searchedName,
					requestedRole
			  )
			: usersFetch(
					professors,
					setProfessors,
					currentPageProfessors,
					searchedName,
					requestedRole
			  )
	}, [
		searchedName,
		currentPageStudents,
		currentPageProfessors,
		requestedRole,
	])

	return (
		<NavBar navigation={navigation} selected="AdminHome">
			<FlatList
				data={
					requestedRole === 0
						? filteredData(students, searchedName, requestedRole) //&&
						: // (searchedName === ""
						  // 	? true
						  // 	: user.name.includes(searchedName))
						  filteredData(professors, searchedName, requestedRole) //&&

					// 	? true
					// 	: user.name.includes(searchedName))
				}
				extraData={[students, professors]}
				renderItem={(user) => {
					return renderUser(user, navigation)
				}}
				keyExtractor={(user: AdminViewUser) => user.key}
				style={s`w-full bg-coolGray-700 flex flex-col w-full`}
				numColumns={2}
				columnWrapperStyle={{ justifyContent: "space-between" }}
				onEndReached={() => {
					requestedRole === 0
						? setCurrentPageStudents(currentPageStudents + 1)
						: setCurrentPageProfessors(currentPageProfessors + 1)
				}}
				onEndReachedThreshold={0.1}
				ListHeaderComponent={renderHeader({
					searchedName,
					setSearchedName,
					requestedRole,
					setRequestedRole,
					setStudents,
					setProfessors,
					setCurrentPageStudents,
					setCurrentPageProfessors,
				})}
				ListFooterComponent={renderLoader()}
			/>
		</NavBar>
	)
}

export default AdminPeople
