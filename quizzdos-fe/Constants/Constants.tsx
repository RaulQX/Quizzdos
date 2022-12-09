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
	baseUrl: "http://192.168.0.177:5000/api/",
	controllers: {
		user: "User/",
		auth: "Auth/",
		person: "Person/",
		adminView: "AdminView/",
	},
	endpoints: {
		login: "Login",
		currentUser: "CurrentUser",
		getusers: "GetUsers/",
		register: "Register",
		personByUserId: "PersonByUserId",
		updatePersonNames: "UpdatePersonNames/",
		usersWithPersonalData: "UsersWithPersonData",
	},
}
