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
	requestedRole: number
) => {
	try {
		const response = await fetch(
			`${ApiConstants.baseUrl}${ApiConstants.controllers.adminView}${
				ApiConstants.endpoints.getusers
			}${requestedRole}/username?username=${username}&page=${currentPage.toString()}&pageSize=7`
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
			setUsers([...users, ...usersList])
		})
		setUsers([...users, ...usersList])
		usersList = []
	} catch (e) {
		console.log(e)
	}
}

export default usersFetch
