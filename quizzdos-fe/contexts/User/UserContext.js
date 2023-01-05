import { createContext, useReducer, useContext } from "react"
import UserReducer, { initialState } from "./UserReducer"
import { ApiEndpoints } from "../../Constants/Constants"

const UserContext = createContext(initialState)

export const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(UserReducer, initialState)

	const loginUser = async (loginPayload) => {
		dispatch({ type: "LOGIN_REQUEST" })
		loginPayload = {
			username: loginPayload.login,
			email: loginPayload.login,
			phoneNumber: loginPayload.login,
			password: loginPayload.password,
		}
		const requestOptions = {
			method: "POST",
			headers: {
				Accept: "accept: text/plain",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginPayload),
		}
		let response = await fetch(ApiEndpoints.auth.login, requestOptions)

		let data = await response.json()
		console.log(data)
		if (data.data) {
			let userDetails = await fetch(`${ApiEndpoints.users.currentUser}`, {
				method: "GET",
				headers: {
					Accept: "accept: text/plain",
					"Content-Type": "application/json",
					Authorization: `${data.data}`,
				},
			})
			let user = await userDetails.json()

			const encodedValue = encodeURIComponent(user.data.id)
			let personDetail = await fetch(
				`${ApiEndpoints.people.personByUserId + encodedValue}`,
				{
					method: "GET",
					headers: {
						Accept: "accept: text/plain",
						"Content-Type": "application/json",
					},
				}
			)
			let person = await personDetail.json()
			let payloadConstructed = {
				username: user.data.username,
				personId: person.data.id,
				role: person.data.role,
				gender: person.data.gender,
				firstName: person.data.firstName,
				lastName: person.data.lastName,
				joinedDate: user.data.joinedDate,
				profileSetup: person.data.firstName === "" ? false : true,
			}
			dispatch({ type: "LOGIN_SUCCESS", payload: payloadConstructed })
			return { payloadConstructed, error: false }
		}
		dispatch({
			type: "LOGIN_FAILURE",
			payload: { errorMessage: data.message },
		})
		return { message: data.message, error: true }
	}

	const logoutUser = (payload) => {
		dispatch({ type: "LOGOUT" })
	}

	const value = {
		...state,
		loginUser: loginUser,
		logoutUser: logoutUser,
	}

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const useUser = () => {
	const context = useContext(UserContext)

	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider")
	}

	return context
}

export default useUser
