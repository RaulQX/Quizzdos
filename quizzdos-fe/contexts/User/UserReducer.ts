import { Gender, Roles } from "../../constants/Constants"

export const initialState = {
	personId: "",
	role: Roles.student,
	gender: Gender.notSpecified,
	firstName: "",
	lastName: "",

	username: "",
	joinedDate: "",
	errorMessage: "",

	loginUser: async (payload: any) => {
		return Promise<void>
	},
	logoutUser: () => { },
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
				personId: payload.personId,
				role: payload.role,
				gender: payload.gender,
				firstName: payload.firstName,
				lastName: payload.lastName,
				joinedDate: payload.joinedDate,
				username: payload.username,

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

				personId: "",
				role: Roles.student,
				gender: Gender.notSpecified,
				firstName: "",
				lastName: "",

				username: "",
				joinedDate: "",
				errorMessage: "",
			}
		}
		default:
			throw new Error(`Unhandled action type: ${type}`)
	}
}

export default UserReducer
