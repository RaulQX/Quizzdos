import React from "react"
import { View, Text } from "react-native"
import { s } from "react-native-wind"
import FeedSection from "../components/feed/FeedSection"
import NavBar from "../components/layouts/navigation/NavBar"

interface FeedProps {
    navigation: any
}

const Feed = ({navigation}: FeedProps) => {
    return (
        <NavBar navigation={navigation} selected='Feed'>
            <View style={s`flex flex-col`}>
                <FeedSection title='Today' notifs={dummyData.today} />
                <FeedSection title='This Week' notifs={dummyData.thisWeek} />
                <FeedSection title='Last Week' notifs={dummyData.lastWeek} />
                <FeedSection title='Older' notifs={dummyData.older} />
			</View>
        </NavBar>
    )
}

export default Feed

const dummyData = {
    today: [
        {
            timestamp: '12/2/2022',
            title: 'MSA - Test 2 Graded',
            summary: '10'
        }, 
        {
            timestamp: '10/2/2022',
            title: 'MSA - Test 1 Graded',
            summary: '5'
        }, 
    ],
    thisWeek: [],
    lastWeek: [],
    older: []
}