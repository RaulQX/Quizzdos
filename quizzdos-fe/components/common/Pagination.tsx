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
	const handleLeft = () => {
		if (index > 0) {
			setIndex(index - 1)
		}
	}

	const handleRight = () => {
		if (index < pages - 1) {
			setIndex(index + 1)
		}
	}

	return (
		<View style={s`flex flex-row justify-between my-4 mx-4`}>
			{index != 0 ? (
				<Pressable
					style={s`border-2 border-b-4 border-coolGray-500 rounded-xl p-2`}
					onPress={handleLeft}
				>
					<LeftIcon style={s`w-12 text-white`} />
				</Pressable>
			) : (
				<View />
			)}
			{index != pages - 1 ? (
				<Pressable
					style={s`border-2 border-b-4 border-coolGray-500 rounded-xl p-2`}
					onPress={handleRight}
				>
					<RightIcon style={s`w-12 text-white`} />
				</Pressable>
			) : (
				<View />
			)}
		</View>
	)
}

export default Pagination
