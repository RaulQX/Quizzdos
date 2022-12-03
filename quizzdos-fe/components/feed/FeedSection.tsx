import React from "react"
import { View, Text } from "react-native"
import { s } from "react-native-wind"

interface FeedSectionProps {
    title: string
    notifs: any[]
}

const FeedSection = ({ title, notifs }: FeedSectionProps) => {
    return (
        <View style={s`flex flex-col`}>
            <View style={s`border-b-2 border-white p-2 flex items-center`}>
                <Text style={s`font-bold text-lg text-white`}>{title}</Text>
            </View>
            <View style={s`flex flex-col mb-2 px-3`}>
                {notifs.map(notif => (
                    <View style={s`flex flex-col mt-2 border-2 border-white rounded-xl`}>

                    </View>
                ))}
            </View>
        </View>
    )
}

export default FeedSection