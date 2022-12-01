import { createContext, useReducer, useContext } from "react"
import UserReducer, { initialState } from "./UserReducer"
import { ApiConstants } from "../../Constants/Constants"

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
		let response = await fetch(
			`${
				ApiConstants.baseUrl +
				ApiConstants.controllers.auth +
				ApiConstants.endpoints.login
			}`,
			requestOptions
		)

		let data = await response.json()
		if (data.data) {
			let userDetails = await fetch(
				`${
					ApiConstants.baseUrl +
					ApiConstants.controllers.user +
					ApiConstants.endpoints.user
				}`,
				{
					method: "GET",
					headers: {
						Accept: "accept: text/plain",
						"Content-Type": "application/json",
						Authorization: `${data.data}`,
					},
				}
			)
			let user = await userDetails.json()
			console.log("user", user)
			let payloadConstructed = {
				token: data.data,
				username: user.data.username,
				email: user.data.email,
				phoneNumber: user.data.phoneNumber,
				id: user.data.id,
			}
			console.log({ payloadConstructed, error: false })
			dispatch({ type: "LOGIN_SUCCESS", payload: payloadConstructed })
			console.log({ payloadConstructed, error: false })
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
