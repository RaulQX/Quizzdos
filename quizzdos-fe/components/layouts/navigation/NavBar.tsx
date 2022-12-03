import React from "react"
import { ScrollView, View, Text, TouchableHighlight } from "react-native"
import { s } from "react-native-wind"

interface NavBarProps {
    children: React.ReactNode
    navigation: any
    selected: 'Home' | 'Profile' | 'IDK' | 'Feed'
}

interface NavBarItemProps {
    children: React.ReactNode
    screen: string
    selected?: boolean
}


const NavBar = ({ children, navigation, selected }: NavBarProps) => {
    const NavBarItem = ({ children, screen, selected }: NavBarItemProps) => {
        const handlePress = () => {
            navigation.navigate(screen)
        }
        
        return (
            <TouchableHighlight style={s`flex p-4 items-center border-2 rounded-xl ${selected ? "border-white" : "border-transparent"}`}
                onPress={handlePress}
            >
                <Text style={s`text-white`}>
                    {children}
                </Text>
            </TouchableHighlight>
        )
    }

    return (
        <View style={s`flex-1 bg-coolGray-700`}>
            <ScrollView>
                {children}
            </ScrollView>
            <View style={s`flex flex-row justify-around w-full py-2 border-t-2 border-white`}>
                <NavBarItem screen='Home' selected={selected === 'Home'}>
                    Home
                </NavBarItem>
                <NavBarItem screen='Profile' selected={selected === 'Profile'}>
                    Profile
                </NavBarItem>
                <NavBarItem screen='IDK' selected={selected === 'IDK'}>
                    IDK
                </NavBarItem>
                <NavBarItem screen='Feed' selected={selected === 'Feed'}>
                    Feed
                </NavBarItem>
            </View>
        </View>
    )
}

export default NavBar;
