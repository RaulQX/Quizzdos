import React, { useEffect, useState } from "react"
import { FlatList } from "react-native"
import { s } from "react-native-wind"
import {
	renderUser,
	renderLoader,
	renderHeader,
} from "../components/common/flatlists/UsersFlatlistComponents"
import usersFetch from "../Api/Admin/UsersFetch"
import NavLayout from "../components/layouts/NavLayout"
import useUser from "../contexts/User/UserContext"

interface AdminViewUser {
	key: string
	name: string
	username: string
	gender: number
	role: number
}

const filteredData = (
	data: AdminViewUser[],
	requestedRole: number,
	username: string
) => {
	return data.filter((user: AdminViewUser) => {
		return user.role === requestedRole && user.username !== username
	})
}

const People = ({ navigation }: any) => {
	const currentUser = useUser()
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
		<NavLayout navigation={navigation} selected="People">
			<FlatList
				data={
					requestedRole === 0
						? filteredData(
							students,
							requestedRole,
							currentUser.username
						)
						: filteredData(
							professors,
							requestedRole,
							currentUser.username
						)
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
		</NavLayout>
	)
}

export default People
