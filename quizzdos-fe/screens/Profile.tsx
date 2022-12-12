import React from "react"
import { ScrollView, View, Text } from "react-native"
import { s } from "react-native-wind"
import { CogIcon } from "../assets/icons/outline"
import NavBar from "../components/layouts/navigation/NavBar"

interface ProfileProps {
    navigation: any
}

const Profile = ({ navigation }: ProfileProps) => {
    return (
        <NavBar navigation={navigation} selected="Profile">
            <View style={s`flex flex-row justify-center py-1 px-2`}>
                <Text style={s`text-white font-bold`}>
                    Profile
                </Text>
                <View style={s`absolute right-0`}>
                    <CogIcon style={s`w-6 text-white`}/>
                </View>
            </View>
            <ScrollView style={s`flex flex-row space-between`}>
                <View>

                </View>
            </ScrollView>
        </NavBar>
    )
}

export default Profile

const user = {
    
}