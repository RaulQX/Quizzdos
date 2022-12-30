import { ApiEndpoints } from "../../Constants/Constants"

const RemoveUserFetch = async (personId: string) => {
	try {
		const response = await fetch(
			`${ApiEndpoints.admin.person}${personId}`,
			{
				method: "DELETE",
			}
		)
		const data = await response.json()
		if (data.error == true) return Promise.reject(new Error(data.message))
		return data.data
	} catch (error: any) {
		console.log(error)
		return Promise.reject(new Error(error))
	}
}

export default RemoveUserFetch
