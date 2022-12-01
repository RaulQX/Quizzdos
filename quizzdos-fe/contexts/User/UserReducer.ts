import { Roles } from "../../Constants/Constants"

export const initialState = {
	token: "",

	userId: "",
	personId: "",
	role: Roles.student,

	username: "",
	email: "",
	phoneNumber: "",

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
			return {
				...state,
				token: payload.token,

				userId: payload.userId,
				personId: payload.personId,
				role: payload.role,

				username: payload.username,
				email: payload.email,
				phoneNumber: payload.phoneNumber,

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

				userId: "",
				personId: "",
				role: Roles.student,

				username: "",
				email: "",
				phoneNumber: "",

				errorMessage: "",
			}
		}
		default:
			throw new Error(`Unhandled action type: ${type}`)
	}
}

export default UserReducer
