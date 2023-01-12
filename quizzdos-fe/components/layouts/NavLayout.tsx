import { StatusBar } from "expo-status-bar"
import React from "react"
import { ScrollView, View, Text, TouchableHighlight } from "react-native"
import { s } from "react-native-wind"
import { BellIcon, GearIcon, HomeIcon, UserIcon } from "../../assets/icons/outline"
import { Roles } from "../../constants/Constants"
import useUser from "../../contexts/User/UserContext"

interface NavLayoutProps {
	children: React.ReactNode
	navigation: any
	selected:
	| "Home"
	| "People"
	| "Account"
	| "Feed"
	| "AdminHome"
	| "ProfessorHome"
	| "StudentHome"
}

interface NavLayoutItemProps {
	children: React.ReactNode
	screen: string
	selected?: boolean
}

const NavLayout = ({ children, navigation, selected }: NavLayoutProps) => {
	const NavLayoutItem = ({ children, screen, selected }: NavLayoutItemProps) => {
		const handlePress = () => {
			navigation.navigate(screen)
		}

		return (
			<TouchableHighlight
				style={s`flex p-4 items-center border-2 rounded-xl ${selected ? "border-white" : "border-transparent"
					}`}
				onPress={handlePress}
			>
				<Text style={s`text-white`}>{children}</Text>
			</TouchableHighlight>
		)
	}
	const currentUser = useUser()
	const home =
		currentUser.role === Roles.admin
			? "AdminHome"
			: currentUser.role === Roles.professor
				? "ProfessorHome"
				: "StudentHome"

	return (
		<View style={s`bg-gray-900 h-full pb-4 pt-11`}>
			<StatusBar
				style="light"
			/>
			<View style={s`h-full flex flex-col justify-between`}>
				{children}
				<View
					style={s`flex flex-row justify-around w-full py-2 border-t-2 border-white`}
				>
					<NavLayoutItem screen={home} selected={selected === home}>
						<HomeIcon style={s`w-6 h-6 text-white`} />
					</NavLayoutItem>
					<NavLayoutItem screen="People" selected={selected === "People"}>
						<UserIcon style={s`w-6 h-6 text-white`} />
					</NavLayoutItem>

					<NavLayoutItem screen="Feed" selected={selected === "Feed"}>
						<BellIcon style={s`w-6 h-6 text-white`} />
					</NavLayoutItem>
					<NavLayoutItem screen="Account" selected={selected === "Account"}>
						<GearIcon style={s`w-6 h-6 text-white`} />
					</NavLayoutItem>
				</View>
			</View>
		</View>
	)
}

export default NavLayout
