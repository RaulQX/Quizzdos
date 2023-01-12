import { createRef, useState } from "react"
import { Pressable, TextInput, View, Text } from "react-native"
import { s } from "react-native-wind"
import HeaderTitle from "../../components/common/Header"
import Layout from "../../components/layouts/Layout"

interface ICreateCourseProps {
	navigation: any
}

const CreateCourse = ({ navigation }: ICreateCourseProps) => {
	const [name, setName] = useState("")
	const [summary, setSummary] = useState("")

	const summaryRef = createRef<TextInput>()

	const onPressNext = () => {
		if (name.length === 0) return


	}

	return (
		<Layout>
			<HeaderTitle title={"Create Course"} />
			<View style={s`flex-1 flex flex-col justify-around px-4 py-2`}>
				<TextInput
					style={s`py-2 px-3 w-full border-b-2 border-indigo-300 my-2 text-white`}
					autoCapitalize="words"
					placeholderTextColor="gray"
					placeholder="Section Name"
					maxLength={50}
					value={name}
					onChangeText={setName}
					onSubmitEditing={() => summaryRef.current?.focus()}
				/>
				<View style={s`flex flex-col`}>
					<TextInput
						style={s`py-2 px-3 w-full border-b-2 border-indigo-300 my-2 text-white`}
						placeholderTextColor="gray"
						placeholder="Section Summary"
						multiline={true}
						numberOfLines={4}
						maxLength={200}
						value={summary}
						onChangeText={setSummary}
						ref={summaryRef}
					/>
				</View>
				<Pressable style={s`rounded-xl py-2 px-4 flex flex-row justify-center w-full bg-indigo-300`}>
					<Text style={s`text-white font-bold text-xl`}>Next</Text>
				</Pressable>
			</View>
		</Layout>
	)
}

export default CreateCourse
