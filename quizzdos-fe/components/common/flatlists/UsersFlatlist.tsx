import React from "react"
import { View, Text, FlatList } from "react-native"
import { s } from "react-native-wind"
import User from "../../user/User"

const renderLoader = () => {
	return <View style={s`h-20 flex-grow`}></View>
}

const renderItems = (user: any) => {
	return (
		<View
			style={s`flex-grow my-4 w-1/2 items-center border-b-2 border-gray-300 pb-3`}
			key={user.item.key}
		>
			<User
				gender={user.item.gender}
				name={user.item.name}
				username={user.item.username}
			/>
		</View>
	)
}
interface UsersFlatListProps {
	users: any
	searchedUsername: string
	searchedName: string
	personRole: number
	currentPage: number
	setCurrentPage: any
}
const UsersFlatList = ({
	users,
	searchedUsername,
	searchedName,
	personRole,
	currentPage,
	setCurrentPage,
}: UsersFlatListProps) => {
	return (
		<FlatList
			data={users.filter((user: any) => {
				console.log(user)
				return (
					(searchedUsername === ""
						? true
						: user.username.includes(searchedUsername)) &&
					user.role === personRole &&
					(searchedName === ""
						? true
						: user.name.includes(searchedName))
				)
			})}
			renderItem={(user) => {
				return renderItems(user)
			}}
			keyExtractor={(user: any) => user.key}
			style={s`w-full bg-coolGray-700 flex flex-col w-full`}
			numColumns={2}
			columnWrapperStyle={{ justifyContent: "space-between" }}
			ListFooterComponent={renderLoader}
			onEndReached={() => {
				setCurrentPage(currentPage + 1)
			}}
			onEndReachedThreshold={0}
		/>
	)
}

export default UsersFlatList
