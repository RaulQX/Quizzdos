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
	},
	admin: {
		usersByRole: controllers.admin + "users/role/",
		removePerson: controllers.admin + "person/",
	},
}
