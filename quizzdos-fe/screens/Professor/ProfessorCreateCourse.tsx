import { useState } from "react"
import { TextInput, View } from "react-native"
import { s } from "react-native-wind"
import FormTextInput from "../../components/common/FormTextInput"

const CreateCourse = ({ navigation }: ICreateCourseProps) => {
	const [courseName, setCourseName] = useState("")
	const [shortTitle, setShortTitle] = useState("")
	const [courseSummary, setCourseSummary] = useState("")

	return (
		<View style={s`flex`}>
			<View style={s`my-10`}>
				<FormTextInput
					placeholder="Course Name"
					value={courseName}
					onChangeText={(text) => setCourseName(text)}
				/>
				<View style={s`my-2`} />
				<FormTextInput
					placeholder="Short Title"
					value={shortTitle}
					onChangeText={(text) => setShortTitle(text)}
				/>
				<View style={s`my-2`} />
				<FormTextInput
					placeholder="Course Summary"
					value={courseSummary}
					onChangeText={(text) => setCourseSummary(text)}
				/>
			</View>
		</View>
	)
}

interface ICreateCourseProps {
	navigation: any
}

export default CreateCourse
