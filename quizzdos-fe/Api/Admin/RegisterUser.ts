import { ApiEndpoints } from "../../Constants/Constants"

interface User {
    username: string
    password: string
    email: string
    phoneNumber: string
}


export const RegisterUserFetch = async (payload: User) => {
	try {
		const response = await fetch(ApiEndpoints.auth.register, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		})
		const data = await response.json()
		if (data.error == true) {
			console.log(data.message)
		}
		return data
	} catch (error: any) {
		console.log(error)
		return Promise.reject(new Error(error))
	}
}
