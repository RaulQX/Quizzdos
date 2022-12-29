import RemoveUserFetch from "../../Api/Admin/RemoveUser"

const RemovePerson = (personId: string, navigation: any) => {
	RemoveUserFetch(personId).then((response) => {
		if (response.error) {
			console.log(response.error)
		}
	})
	navigation.navigate("AdminHome")
}

export { RemovePerson }
