import React from "react"
import { ScrollView, View, Text } from "react-native"
import { s } from "react-native-wind"

interface NavBarProps {
    children: React.ReactNode
    navigation: any
}

interface NavBarItemProps {
    children: React.ReactNode
    screen: string
    selected?: boolean
}


const NavBar = ({ children, navigation }: NavBarProps) => {
    const NavBarItem = ({ children, screen, selected }: NavBarItemProps) => {
        const handlePress = () => {
            navigation.navigate(screen)
        }
        
        return (
            <View style={s`flex p-4 items-center border-2 rounded-xl ${selected ? "border-white" : "border-transparent"}`}
                onTouchEnd={handlePress}
            >
                <Text style={s`text-white`}>
                    {children}
                </Text>
            </View>
        )
    }

    return (
        <View style={s`flex-1 bg-coolGray-700`}>
            <ScrollView>
                {children}
            </ScrollView>
            <View style={s`flex flex-row justify-around w-full py-2 border-t-2 border-white`}>
                <NavBarItem screen='Home' selected>
                    <Text>Home</Text>
                </NavBarItem>
                <NavBarItem screen='Profile'>
                    <Text>Profile</Text>
                </NavBarItem>
                <NavBarItem screen='IDK'>
                    <Text>IDK</Text>
                </NavBarItem>
                <NavBarItem screen='Notifications'>
                    <Text>Notifications</Text>
                </NavBarItem>
            </View>
        </View>
    )
}

export default NavBar;
