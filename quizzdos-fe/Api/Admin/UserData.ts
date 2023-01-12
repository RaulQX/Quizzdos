import { ApiEndpoints } from "../../constants/Constants"

export const getUserData = async (personId: string) => {
	const response = await fetch(`${ApiEndpoints.people.personAll}${personId}`)
	const data = await response.json()
	if (data.error) {
		console.log(data.message)
		return
	}
	console.log("got data: ", data.data)
	return data.data
}
