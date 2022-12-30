export const Constants = {
	blueLogo: "#9fa0f4",
	darkBackround: "#282c34",
}

export const Roles = {
	student: 0,
	professor: 1,
	admin: 2,
}

export const Gender = {
	notSpecified: 0,
	male: 1,
	female: 2,
}

export const KeyValueGenders = [
	{ key: "1", value: "Male" },
	{ key: "2", value: "Female" },
]
export const KeyValueRoles = [
	{ key: "0", value: "Student" },
	{ key: "1", value: "Professor" },
	{ key: "2", value: "Admin" },
]

const baseUrl = "http://192.168.1.9:5000/api/"

const controllers = {
	user: baseUrl + "user/",
	auth: baseUrl + "auth/",
	person: baseUrl + "person/",
	admin: baseUrl + "admin/",
}

export const ApiEndpoints = {
	auth: {
		login: controllers.auth + "login",
		register: controllers.auth + "register",
	},
	users: {
		currentUser: controllers.user + "current-user",
	},
	people: {
		person: controllers.person,
		personByUserId: controllers.person + "userId/",
		profileDetails: controllers.person + "profile-details/",
		personAll: controllers.person + "all/",
	},
	admin: {
		usersByRole: controllers.admin + "users/role/",
		person: controllers.admin + "person/",
	},
}
