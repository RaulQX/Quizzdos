export const initialState = {
	token: "",
	username: "",
	email: "",
	phoneNumber: "",
	id: "",
	errorMessage: "",
	loginUser: async (payload: any) => {
		return Promise<void>
	},
	logoutUser: () => {},
}

const UserReducer = (state: any, action: any) => {
	const { type, payload } = action

	switch (type) {
		case "LOGIN_REQUEST":
			return {
				...state,
				errorMessage: "",
			}
		case "LOGIN_SUCCESS":
			console.log("payload", payload)
			return {
				...state,
				token: payload.token,
				username: payload.username,
				email: payload.email,
				phoneNumber: payload.phoneNumber,
				id: payload.id,
				errorMessage: "",
			}
		case "LOGIN_FAILURE":
			return {
				...state,
				errorMessage: payload.errorMessage,
			}
		case "LOGOUT": {
			return {
				...state,
				token: "",
				username: "",
				email: "",
				phoneNumber: "",
				id: "",
				errorMessage: "",
			}
		}
		default:
			throw new Error(`Unhandled action type: ${type}`)
	}
}

export default UserReducer
