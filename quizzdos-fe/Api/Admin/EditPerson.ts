import { ApiEndpoints } from "../../constants/Constants"

interface PersonData {
	username: string
	email: string
	phoneNumber: string
	firstName: string
	lastName: string
	gender: number
	role: number
}

export const putUserData = async (personId: string, personData: PersonData) => {
	console.log(personData)
	try {
		const response = await fetch(
			`${ApiEndpoints.admin.person}${personId}`,
			{
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(personData),
			}
		)
		const data = await response.json()
		if (data.error) {
			console.log(data.message)
			return
		}
		return data.data
	} catch (error: any) {
		console.log(error)
		return Promise.reject(new Error(error))
	}
}
