import React from "react"
import { Pressable, View } from "react-native"
import { s } from "react-native-wind"
import { LeftIcon, RightIcon } from "../../assets/icons/outline"

interface PaginationProps {
    pages: number
    index: number
    setIndex: (index: number) => void
}

const Pagination = ({ pages, index, setIndex }: PaginationProps) => {
    return (
        <View style={s`flex flex-row justify-even`}>
            <Pressable style={s`border-2 border-b-4 border-coolGray-500 rounded-xl p-2`}>
                <LeftIcon style={s`w-12 text-white`} />
            </Pressable>
            <Pressable style={s`border-2 border-b-4 border-coolGray-500 rounded-xl p-2`}>
                <RightIcon style={s`w-12 text-white`} />
            </Pressable>
        </View>
    )
}

export default Pagination