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

export const Colors = {
	orange: "#FF6633",
	peach: "#FFB399",
	magenta: "#FF33FF",
	yellow: "#FFFF99",
	teal: "#00B3E6",
	mustard: "#E6B333",
	periwinkle: "#3366E6",
	olive: "#999966",
	lime: "#99FF99",
	maroon: "#B34D4D",
	oliveDrab: "#80B300",
	dullGreen: "#809900",
	lightRed: "#E6B3B3",
	steelBlue: "#6680B3",
	armyGreen: "#66991A",
	pastelPurple: "#FF99E6",
	springGreen: "#CCFF1A",
	brightRed: "#FF1A66",
	darkRed: "#E6331A",
	turquoise: "#33FFCC",
	babyBlue: "#4DB3FF",
	mint: "#1AB399",
	kellyGreen: "#33991A",
	brightGreen: "#00E680",
	paleYellow: "#E6FF80",
	brightMustard: "#999933",
	mud: "#66664D",
	royalBlue: "#991AFF",
	pink: "#CC80CC",
	darkOlive: "#4D8000",
	grayishGreen: "#809980",
	lightBlue: "#99E6E6",
}
