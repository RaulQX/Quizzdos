export const Constants = {
	blueLogo: "#9fa0f4",
	darkBackround: "#282c34",
}

export const Roles = {
	student: 0,
	teacher: 1,
	admin: 2,
}

export const Gender = {
	notSpecified: 0,
	male: 1,
	female: 2,
}

export const ApiConstants = {
	baseUrl: "http://192.168.100.3:5000/api/",
	controllers: {
		user: "User/",
		auth: "Auth/",
		person: "Person/",
	},
	endpoints: {
		login: "Login",
		user: "User",
		register: "Register",
		personByUserId: "PersonByUserId",
		updatePersonNames: "UpdatePersonNames/",
	},
}
