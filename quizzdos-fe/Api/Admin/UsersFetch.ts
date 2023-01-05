import { ApiEndpoints } from "./../../Constants/Constants"

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
	name: string,
	requestedRole: number
) => {
	try {
		const response = await fetch(
			`${
				ApiEndpoints.admin.usersByRole
			}${requestedRole.toString()}/name?name=${name}&page=${currentPage.toString()}&pageSize=10`
		)
		const data = await response.json()
		var usersList: AdminViewUser[] = []
		console.log(data)
		data.data.map((user: UserDataReturned) => {
			usersList.push({
				key: user.personId,
				name: user.firstName + " " + user.lastName,
				username: user.username,
				gender: user.gender,
				role: user.role,
			})
			setUsers([...users, ...usersList])
		})
	} catch (e) {
		console.log(e)
	}
}

export default usersFetch
